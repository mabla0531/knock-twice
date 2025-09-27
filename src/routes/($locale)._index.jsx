import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {useState} from 'react';

export function meta() {
  return [
    {title: 'KnockTwice'},
    {description: 'KnockTwice Toronto Marketing Site'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

const CollectionTile = ({collection}) => {
  let images = collection.products.nodes.map((product) => (
    <img class="skeleton w-full aspect-square rounded-md" src={product.featuredImage.url + "&width=512&height=512"}/>
  ));

  const [imageIndex, setImageIndex] = useState(0);
  const [cycleEnabled, setCycleEnabled] = useState(true);

  const tryCycleImage = () => {
    if (cycleEnabled) {
      setCycleEnabled(false);
      if (imageIndex + 1 >= images.length) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  const allowCycleImage = () => {
    setCycleEnabled(true);
  };

  return (
    <div
      class="w-full"
      onMouseEnter={(e) => tryCycleImage()}
      onMouseLeave={(e) => allowCycleImage()}
    >
      <Link to={`/collection/${collection.handle}`}>
        <div class="flex flex-col">
          {images[imageIndex]}
          <div class="text-center w-full p-2">
            {collection.products.nodes.length > 0 && collection.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function Index() {
  const {collections} = useLoaderData();

  let collectionTiles = collections.nodes
    .filter((collection) => collection.products.nodes.length > 0)
    .map((collection) => <CollectionTile collection={collection} />);

  return (
    <>
      <div class="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div class="flex justify-center border-solid border-b-2">
          <a href="/">SHOP</a>
        </div>
        <div class="flex justify-center">
          <a class="flex justify-center" href="/about">
            ABOUT
          </a>
        </div>
        <div class="flex justify-center">
          <a class="flex justify-center" href="/passport">
            PASSPORT
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 w-full justify-center p-8 md:w-9/10 mx-auto">{collectionTiles}</div>
    </>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 250) {
      nodes {
        id
        title
        handle
        products(first: 5) {
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
