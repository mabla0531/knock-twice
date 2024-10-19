import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';

export default function Contact() {

  return (
    <div className="contact">
      <h1>Contact</h1>
      <div>
        CALL US!!
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
