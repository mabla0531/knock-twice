import { useLoaderData, Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';
import { Grid } from '@mui/material';

export function meta() {
  return [
    { title: 'KnockTwice' },
    { description: 'KnockTwice Toronto Marketing Site' },
  ];
}

export async function loader({ context }) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const { collections } = useLoaderData();

  const CollectionTile = ({ collection, product }) => {
    return (
      <div>
        <Link
          to={`/collectioncarousel/${collection.handle}`}
          key={collection.id}
        >
          <div className="collection-tile-wrapper">
            <div className="collection-tile">
              <Image
                alt={`Image of ${collection.title}`}
                data={product.featuredImage}
                key={collection.id}
                className="collection-tile-image"
                sizes="(max-width: 32em) 100vw, 33vw"
                crop="center"
              />
            </div>

            <div className="font-medium text-copy index-collection-title">
              {collection.products.nodes.length > 0 && collection.title}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  let collectionTiles = collections.nodes
    .filter((collection) => collection.products.nodes.length > 0)
    .map((collection) => {
      return (
        <>
          {collection.products.nodes.map((product) => {
            return (
              <CollectionTile
                key={collection}
                collection={collection}
                product={product}
              />
            );
          })}
        </>
      );
    });

  return (
    <div className="index">
      <div className="index-grid">{collectionTiles}</div>
    </div>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 250) {
      nodes {
        id
        title
        handle
        products(first: 1) {
          nodes {
            featuredImage {
              altText
              width
              height
              url
            }
          }
        }
      }
    }
  }
`;
