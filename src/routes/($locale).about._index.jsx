import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link, useActionData, useNavigation} from '@remix-run/react';
import {useState} from 'react';

export async function loader({context}) {
  let {page, errors} = await context.storefront.query(CONTENT_QUERY);

  if (errors && errors.length) {
    throw new Error('page not found');
  }

  return {content: {__html: page.body}};
}

export async function action({request, context}) {
  const formData = await request.formData();
  const email = formData.get('email');

  if (!email) {
    return json({error: 'Email is required'}, {status: 400});
  }

  try {
    const response = await context.storefront.query(CUSTOMER_UPDATE_MUTATION, {
      variables: {
        customerId: `gid://shopify/Customer/${email}`,
        emailMarketingConsent: {
          marketingState: "SUBSCRIBED",
          marketingOptInLevel: "CONFIRMED_OPT_IN",
          consentUpdatedAt: new Date().toISOString()
        }
      },
    });

    return json({success: true, message: 'Successfully subscribed!'});
  } catch (error) {
    console.error('Subscription error:', error);
    return json({error: 'Failed to subscribe. Please try again.'}, {status: 500});
  }
}


export default function About() {
  const {content} = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div class="flex flex-col w-full h-full">
      <div class="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div class="flex justify-center">
          <a href="/">SHOP</a>
        </div>
        <div class="flex justify-center border-solid border-b-2">ABOUT</div>
        <div class="flex justify-center">
          <a class="flex justify-center" href="/passport">
            PASSPORT
          </a>
        </div>
      </div>

      <div class="w-96 max-w-full mx-auto text-center overflow-y-auto" dangerouslySetInnerHTML={content} />

      <div class="my-auto">
        <div class="card bg-base-200 w-96 h-56 mx-auto max-w-full shadow-xl">
          <div class="card-title text-center mt-6">
            Sign up for our newsletter and get first looks on new items!
          </div>
          <div class="card-body justify-end">
            <form method="post">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                class="input input-bordered w-full"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button 
                type="submit"
                class="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </form>
            {actionData?.success && (
              <div class="alert alert-success mt-2">
                {actionData.message}
              </div>
            )}
            {actionData?.error && (
              <div class="alert alert-error mt-2">
                {actionData.error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const CONTENT_QUERY = `#graphql
  query About {
    page(handle: "about-us") {
      body
    }
  }
`;

const CUSTOMER_UPDATE_MUTATION = `#graphql
  mutation customerEmailMarketingConsentUpdate($customerId: ID!, $emailMarketingConsent: CustomerEmailMarketingConsentInput!) {
    customerEmailMarketingConsentUpdate(customerId: $customerId, emailMarketingConsent: $emailMarketingConsent) {
      customer {
        id
        email
        emailMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
