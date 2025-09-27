import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import { useState } from 'react';

export async function loader({context}) {
  let {page, errors} = await context.storefront.query(CONTENT_QUERY);

  if (errors && errors.length) {
    throw new Error('page not found');
  }

  return {content: {__html: page.body}};
}

async function updateCustomerEmailMarketingConsent(email) {
  const response = await context.storefront.query("", {
    variables: {
      customerId: "gid://shopify/Customer/" + email,
      emailMarketingConsent: {
        marketingState: "SUBSCRIBED",
        marketingOptInLevel: "CONFIRMED_OPT_IN",
        consentUpdatedAt: new Date().toISOString
      }
    },
  });

  const result = await response.json();
  return result.data.customerEmailMarketingConsentUpdate;
}


async function subscribeRequest(email) {
  console.log("Processing subscribe request for email " + email);
  let result = await updateCustomerEmailMarketingConsent(email);
  console.log(result);
}

export default function About() {
  const {content} = useLoaderData();
  const [email, setEmail] = useState("");

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
            <input
              type="text"
              placeholder="Email Address"
              class="input input-bordered w-full"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button class={'btn btn-primary w-full'} onClick={() => subscribeRequest(email)}>
              SUBSCRIBE
            </button>
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
