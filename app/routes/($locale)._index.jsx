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
      <img className="w-full h-full" src={product.featuredImage.url + "&width=320&height=320"}/>
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
        className="collection-tile-wrapper"
        onMouseOver={(e) => tryCycleImage()}
        onMouseLeave={(e) => allowCycleImage()}
      >
        <Link to={`/collection/${collection.handle}`}>
          <div className="collection-tile">
            {images[imageIndex]}
            <div className="index-collection-title">
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
      <div className="tab-container mt-16 mb-12">
        <div className="tab-member tab-member-active">SHOP</div>
        <a className="tab-member" href="/about">ABOUT</a>
        <a className="tab-member" href="/passport">PASSPORT</a>
      </div>
      <div className="index-grid">{collectionTiles}</div>
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
