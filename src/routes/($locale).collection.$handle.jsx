/* eslint-disable react/prop-types */
import {isMobile} from 'react-device-detect';
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getPaginationVariables, Image} from '@shopify/hydrogen';
import * as React from 'react';

import {
  constructProductSetFromCollection,
  ProductInfo,
  ProductImageSet,
} from 'src/components/Product';

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

  const [productZoom, setProductZoom] = React.useState(null);
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
      setSelectedProduct(product);
      setSelectedSwatch(product.id);
    };

    return (
      <div
        class={
          'relative aspect-square w-[calc(22.5%-4px)] min-w-12 m-0.5 md:w-[calc(100%/6-4px)] max-w-24 carousel-item' +
          (product.available ? '' : ' grayscale')
        }
        onClick={setProduct}
      >
        {product.featuredImage && (
          <img
            class={
              'aspect-square cursor-pointer border border-solid rounded-md ' +
              (selectedSwatch == product.id
                ? 'border-blue-500'
                : 'border-transparent')
            }
            src={product.featuredImage.url + '&width=128&height=128'}
          />
        )}
        {!product.available && (
          <svg
            version="1.1"
            id="Layer_1"
            class="absolute top-0 left-0 cursor-pointer aspect-square w-full opacity-50"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
          >
            <g class="st0">
              <line class="st1" x1="58.25" y1="5.75" x2="5.75" y2="58.25" />
              <path
                d="M5.75,58.66c-0.1,0-0.21-0.04-0.29-0.12c-0.16-0.16-0.16-0.42,0-0.58L57.96,5.46c0.16-0.16,0.42-0.16,0.58,0
              c0.16,0.16,0.16,0.42,0,0.58L6.04,58.54C5.96,58.62,5.86,58.66,5.75,58.66z"
              />
            </g>
          </svg>
        )}
      </div>
    );
  };

  const [activeSizes, setActiveSizes] = React.useState(defaultSizeSet);

  const modifyActiveSizes = (size) => {
    setCurrentSizeSet(currentSizeSet.set(size, !currentSizeSet.get(size)));

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
          .map(([key, _]) => key), // transmute size strings
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
        class={
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
    let relevantSizes = defaultSizeSet.filter(
      (size) =>
        productSet.filter((product) => product.size === size).length > 0,
    );

    return (
      <div class="flex w-full justify-center">
        {relevantSizes.map((size) => (
          <TabButton
            key={size}
            name={size}
            buttonCount={relevantSizes.length}
          />
        ))}
      </div>
    );
  };

  const ProductZoom = ({productZoom, setProductZoom}) => {
    let [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setProductZoom(null);
      });
    });

    React.useEffect(() => setCurrent(0), [productZoom]);

    let images = productZoom.map((product, index) => (
      <img
        key={index}
        class="w-auto h-7/8 aspect-square rounded-md shadow-md"
        src={productZoom[current].url + '&width=2048&height=2048'}
      />
    ));

    return (
      <div class="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center p-8 gap-4 backdrop-blur-sm bg-base-100/50 z-1">
        <div class="absolute top-0 right-0 p-4">
          <button
            class="btn btn-primary btn-square"
            onClick={() => setProductZoom(null)}
          >
            <svg
              class="fill-current"
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 460.775 460.775"
              xml:space="preserve"
            >
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
            </svg>
          </button>
        </div>
        {images[current]}
        <div class="flex gap-2">
          {productZoom.map((product, index) => {
            return (
              <div
                key={index}
                class={
                  'rounded-md w-16 h-16 border border-solid ' +
                  (current == index ? 'border-blue-500' : 'border-transparent')
                }
                onClick={() => setCurrent(index)}
              >
                <img
                  class="rounded-md"
                  src={product.url + '&width=256&height=256'}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div class="relative flex flex-col gap-4 md:flex-row w-full h-full p-4">
      {productZoom && (
        <ProductZoom
          productZoom={productZoom}
          setProductZoom={setProductZoom}
        />
      )}
      <ProductImageSet
        product={selectedProduct}
        setProductZoom={setProductZoom}
      />
      <div class="flex flex-col gap-4 md:w-1/2 p-4">
        <TabList />
        <div class="flex w-full min-h-12 overflow-x-auto items-center scrollbar-hide carousel md:flex-wrap md:max-h-[calc(100%-48px)] md:overflow-y-auto">
          <SwatchSet activeSizes={activeSizes} />
        </div>
        {isMobile && <ProductInfo product={selectedProduct} />}
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
