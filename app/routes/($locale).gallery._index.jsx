import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { TabBar } from '~/components/Header';

export default function Gallery() {

  return (
    <>
      <TabBar />
      <div className="gallery">
        <h1>Gallery</h1>
        <div>
          PUT PICTURES HERE
        </div>
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
