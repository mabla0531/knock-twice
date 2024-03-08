import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Grid} from '@mui/material';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();

  console.log(collections);

  return (
    <div className="index">
      <div className='index-header'>
        <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
          Collections
        </h2>
      </div>

      <div class="index-grid">
        <Grid container spacing={2}>
          {collections.nodes.map((collection) => {
            return (
              <Grid item xs={3}>
                <Link to={`/collectiongrid/${collection.handle}`} key={collection.id}>
                  <div class="index-collection-item">
                    {collection.products.nodes.map((product) => {
                      return (
                        <Image
                          alt={`Image of ${collection.title}`}
                          data={product.featuredImage}
                          key={collection.id}
                          sizes="(max-width: 32em) 100vw, 33vw"
                          width = {128}
                          height = {128}
                          crop="center"
                        />
                      )
                    })}
                    <div className="font-medium text-copy index-collection-grid-title">
                      {collection.title}
                    </div>
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 250, query: "collection_type:smart") {
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
