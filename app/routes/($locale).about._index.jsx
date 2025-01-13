import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';

export default function Contact() {

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted my-16">
        <a role="tab" className="tab" href="/">SHOP</a>
        <div className="tab tab-active">ABOUT</div>
        <a role="tab" className="tab" href="/passport">PASSPORT</a>
      </div>
      <div className="text-center">
        <h1>About</h1>
        <div>
          
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
