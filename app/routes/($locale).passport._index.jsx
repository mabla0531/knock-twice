import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';

export default function Passport() {

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted my-16">
        <a role="tab" className="tab" href="/">SHOP</a>
        <a role="tab" className="tab" href="/about">INFO</a>
        <div className="tab tab-active">PASSPORT</div>
      </div>
      <div className="passport">
        <h1>Passport</h1>
        <div>
          This is a work in progress. Please check back later; we are very excited for this service launch!
          This is no longer a work in progress
          input your code thingy: <input type="text"></input>
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
