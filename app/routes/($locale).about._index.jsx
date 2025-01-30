import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';


export async function loader({context}) {


  const {content, errors} = await context.storefront.query(CONTENT_QUERY);

  if ((errors && errors.length) || !(content && content.page)) {
    throw new Error("page not found");
  }

  return {content: content.page.body};
}

export default function About() {

  const {content} = useLoaderData();

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted my-16">
        <a role="tab" className="tab" href="/">SHOP</a>
        <div className="tab tab-active">ABOUT</div>
        <a role="tab" className="tab" href="/passport">PASSPORT</a>
      </div>
      <div className="text-center">
        <h1>About</h1>
        <div dangerouslySetInnerHTML={content}></div>
      </div>
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
