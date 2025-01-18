/* eslint-disable react/prop-types */
import {isMobile} from 'react-device-detect';
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {
  getPaginationVariables,
  Image,
} from '@shopify/hydrogen';
import * as React from 'react';

import {
  constructProductSetFromCollection,
  ProductMain,
  ProductImageSet
} from '~/components/Product';

export const meta = ({data}) => {
  return [{title: `KT | ${data?.collection.title ?? ''}`}];
};

export async function loader({request, params, context}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 250,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection});
}

export default function Collection() {
  const {collection} = useLoaderData();

  const defaultSizeSet = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  const productSet = constructProductSetFromCollection(collection);
  const [selectedProduct, setSelectedProduct] = React.useState(productSet[0]);
  const [selectedSwatch, setSelectedSwatch] = React.useState(productSet[0].id);

  const [currentSizeSet, setCurrentSizeSet] = React.useState(
    new Map([
      ['XS', false],
      ['S', false],
      ['M', false],
      ['L', false],
      ['XL', false],
      ['XXL', false],
      ['3XL', false],
    ]),
  );

  const Swatch = ({product}) => {
    const setProduct = () => {
      console.log("setting product id to " + product.id);
      setSelectedProduct(product);
      setSelectedSwatch(product.id);
    }

    return (
      <div
        className={
          'swatch-container carousel-item' +
          (product.available ? '' : ' swatch-unavailable')
        }
        onClick={setProduct}
      >
        {product.featuredImage && (
          <Image
            className={"swatch-image" + (selectedSwatch == product.id ? " highlighted-swatch-image" : "")}
            aspectRatio="1/1"
            data={product.featuredImage}
            loading='eager'
          />
        )}
        {!product.available && (
          <svg
            version="1.1"
            id="Layer_1"
            className="soldout-strikethrough"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
          >
            <g className="st0">
              <line className="st1" x1="58.25" y1="5.75" x2="5.75" y2="58.25" />
              <path
                d="M5.75,58.66c-0.1,0-0.21-0.04-0.29-0.12c-0.16-0.16-0.16-0.42,0-0.58L57.96,5.46c0.16-0.16,0.42-0.16,0.58,0
              c0.16,0.16,0.16,0.42,0,0.58L6.04,58.54C5.96,58.62,5.86,58.66,5.75,58.66z"
              />
            </g>
          </svg>
        )}
      </div>
    );
  }

  const [activeSizes, setActiveSizes] = React.useState(defaultSizeSet);

  const modifyActiveSizes = (size) => {
    setCurrentSizeSet(currentSizeSet.set(size, !currentSizeSet.get(size)))

    // if all are false, show all swatches
    if (
      !currentSizeSet.get('XS') &&
      !currentSizeSet.get('S') &&
      !currentSizeSet.get('M') &&
      !currentSizeSet.get('L') &&
      !currentSizeSet.get('XL') &&
      !currentSizeSet.get('XXL') &&
      !currentSizeSet.get('3XL')
    ) {
      setActiveSizes(defaultSizeSet);
    } else {
      setActiveSizes(
        [...currentSizeSet]
          .filter(([_, value]) => value) // get trues
          .map(([key, _]) => key)        // transmute size strings
      );
    }
  };

  const SwatchSet = ({activeSizes}) => {

    // this set of distinctions is a workaround for JS not having any form of reduce
    let distinctIDs = [];
    let distinctSwatches = [];

    productSet
      .filter((product) => activeSizes.includes(product.size))
      .forEach((product) => {
        if (!distinctIDs.includes(product.id)) {
          distinctIDs.push(product.id);
          distinctSwatches.push(
            <Swatch key={product.id} product={product}></Swatch>,
          );
        }
      });

    return distinctSwatches;

  };

  let TabButton = ({name, buttonCount}) => {
    let width_percent = ((1 / buttonCount) * 100).toFixed(2);

    return (
      <button
        className={
          'btn h-8 mx-1' + (currentSizeSet.get(name) ? ' btn-primary' : '')
        }
        onClick={() => modifyActiveSizes(name)}
        style={{width: 'calc(' + width_percent + '% - 10px)', maxWidth: '96px'}}
      >
        {name}
      </button>
    );
  };

  const TabList = () => {

    let relevantSizes = defaultSizeSet.filter(size => productSet.filter((product) => product.size === size).length > 0);

    return (
      <div className="tab-list">
        {relevantSizes.map(size => <TabButton key={size} name={size} buttonCount={relevantSizes.length} />)}
      </div>
    );
  };


  return (
    <div className="collection-panel">
      <ProductImageSet product={selectedProduct} />
      <div className="product-filter">
        <div className="product-selector">
          <TabList />
        </div>
        <div className="swatch-panel carousel mx-2">
          <SwatchSet activeSizes={activeSizes}/>
        </div>
        {isMobile && <ProductMain product={selectedProduct} />}
      </div>
    </div>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    title
    handle
    descriptionHtml
    description
    featuredImage {
      id
      altText
      url
      width
      height
    }
    images(first: 249) {
      nodes {
        altText
        width
        height
        url
      }
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 5) {
      nodes {
        id,
        selectedOptions {
          name
          value
        }
      }
    }
    availableForSale
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
