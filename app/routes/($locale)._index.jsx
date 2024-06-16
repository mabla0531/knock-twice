import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Grid} from '@mui/material';

export function meta() {
  return [
    {title: 'KnockTwice'},
    {description: 'KnockTwice Toronto Marketing Site'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();

  return (
    <div className="index">
      <div className='index-header'>
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Collections
        </h2>
      </div>

          {collections.nodes.map((collection) => {
            return (
              <div className="index-collection-item">
                <Link to={`/collectioncarousel/${collection.handle}`} key={collection.id}>
                  {collection.products.nodes.map((product) => {
                    return (
                      <Image
                        alt={`Image of ${collection.title}`}
                        data={product.featuredImage}
                        key={collection.id}
                        sizes="(max-width: 32em) 100vw, 33vw"
                        width = {256}
                        height = {256}
                        crop="center"
                      />
                    )
                  })}
                  <div className="font-medium text-copy index-collection-title">
                    {collection.products.nodes.length > 0 && collection.title}
                  </div>
                </Link>
              </div>
            );
          })}
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
