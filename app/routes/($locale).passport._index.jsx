import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { TabBar } from '~/components/Header';

export default function Passport() {

  return (
    <>
      <TabBar />
      <div className="passport">
        <h1>Passport</h1>
        <div>
          This is a work in progress. Please check back later; we are very excited for this service launch!
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
