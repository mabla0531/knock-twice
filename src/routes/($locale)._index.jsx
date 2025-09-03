import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {Grid} from '@mui/material';
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

export default function Index() {
  const {collections} = useLoaderData();

  const CollectionTile = ({collection}) => {
    let images = collection.products.nodes.map((product) => (
      <img className="w-full aspect-square" src={product.featuredImage.url + "&width=320&height=320"}/>
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
        className="w-1/2 md:w-64 rounded-md overflow-hidden"
        onMouseOver={(e) => tryCycleImage()}
        onMouseLeave={(e) => allowCycleImage()}
      >
        <Link to={`/collection/${collection.handle}`}>
          <div className="flex relative">
            {images[imageIndex]}
            <div className="absolute bottom-0 left-0 w-full p-2 truncate whitespace-nowrap bg-black/0.5 backdrop-blur-sm">
              {collection.products.nodes.length > 0 && collection.title}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  let collectionTiles = collections.nodes
    .filter((collection) => collection.products.nodes.length > 0)
    .map((collection) => <CollectionTile collection={collection} />);

  return (
    <>
      <div className="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div className="flex justify-center border-solid border-b-2">
          <a href="/">SHOP</a>
        </div>
        <div className="flex justify-center">
          <a className="flex justify-center" href="/about">
            ABOUT
          </a>
        </div>
        <div className="flex justify-center">
          <a className="flex justify-center" href="/passport">
            PASSPORT
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-full justify-center p-8">{collectionTiles}</div>
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
