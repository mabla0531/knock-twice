import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';

export async function loader({context}) {
  let {page, errors} = await context.storefront.query(CONTENT_QUERY);

  if (errors && errors.length) {
    throw new Error('page not found');
  }

  return {content: {__html: page.body}};
}

export default function About() {
  const {content} = useLoaderData();

  return (
    <div class="flex flex-col w-full h-full">
      <div className="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div className="flex justify-center">
          <a href="/">SHOP</a>
        </div>
        <div className="flex justify-center border-solid border-b-2">ABOUT</div>
        <div className="flex justify-center">
          <a className="flex justify-center" href="/passport">
            PASSPORT
          </a>
        </div>
      </div>

      <div className="h-[calc(100%-240px-128px)] text-center overflow-y-auto" dangerouslySetInnerHTML={content} />

      <div className="h-70 p-8">
        <div className="card bg-base-200 w-96 mx-auto max-w-full shadow-xl">
          <div className="card-title text-center mt-6">
            Sign up for our newsletter and get first looks on new items!
          </div>
          <div className="card-body">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <button className={'btn btn-primary w-full'} onClick={() => {}}>
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
