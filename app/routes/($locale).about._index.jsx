import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';


export async function loader({context}) {


  let {page, errors} = await context.storefront.query(CONTENT_QUERY);

  if (errors && errors.length) {
    throw new Error("page not found");
  }

  return {content: {__html: page.body}};
}

export default function About() {

  const {content} = useLoaderData();

  return (
    <>
      <div className="tab-container mt-16 mb-12">
        <a className="tab-member" href="/">SHOP</a>
        <div className="tab-member tab-member-active">ABOUT</div>
        <a className="tab-member" href="/passport">PASSPORT</a>
      </div>
      <div className="text-center m-4" dangerouslySetInnerHTML={content} />
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */


const CONTENT_QUERY = `#graphql
  query About {
    page(handle: \"about-us\") {
      body
    }
  }
`;
