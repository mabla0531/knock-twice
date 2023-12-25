import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

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

  return (
    <section className="w-full gap-4">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      {collections.nodes.map((collection) => {
        return (
          <Link to={`/collectiongrid/${collection.handle}`} key={collection.id}>
            <Image
              alt={`Image of ${collection.title}`}
              data={collection.image}
              key={collection.id}
              sizes="(max-width: 32em) 100vw, 33vw"
              width = {128}
              height = {128}
              crop="center"
            />
            <div className="font-medium text-copy">
              {collection.title}
            </div>
          </Link>
        );
      })}
    </section>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 250, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
