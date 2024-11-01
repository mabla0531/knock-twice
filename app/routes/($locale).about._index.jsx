import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { TabBar } from '~/components/Header';

export default function Contact() {

  return (
    <>
      <TabBar />
      <div className="about">
        <h1>About</h1>
        <div>
          WE IS OUT HERE THUGGIN ON GOD
          JITARONI STRAIGHT TRIPARONI
          plus plus
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
