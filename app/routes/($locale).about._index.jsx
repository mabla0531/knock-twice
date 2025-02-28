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
    <>
      <div className="tab-container mt-16 mb-12">
        <a className="tab-member" href="/">
          SHOP
        </a>
        <div className="tab-member tab-member-active">ABOUT</div>
        <a className="tab-member" href="/passport">
          PASSPORT
        </a>
      </div>
      <div className="text-center m-4" dangerouslySetInnerHTML={content} />

      <div className="card bg-base-200 w-96 mx-auto max-w-full shadow-xl">
        <div className="card-title text-center mt-5">
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
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

const CONTENT_QUERY = `#graphql
  query About {
    page(handle: "about-us") {
      body
    }
  }
`;
