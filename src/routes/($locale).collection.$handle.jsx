/* eslint-disable react/prop-types */
import {isMobile} from 'react-device-detect';
import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getPaginationVariables, Image} from '@shopify/hydrogen';
import * as React from 'react';

import {
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

function createInitialSizeSet(productSet) {
  const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'OS'];
  
  // Map sizes in SIZE_ORDER to their index for priority
  const orderMap = SIZE_ORDER.reduce((map, size, idx) => {
    map[size] = idx;
    return map;
  }, {});

  // Comparator to sort by custom order first, then by numeric sizes
  const compareSizes = (a, b) => {
    const aOrder = orderMap[a.size];
    const bOrder = orderMap[b.size];

    // If both a and b are in custom order, compare by that order
    if (aOrder !== undefined && bOrder !== undefined) {
      return aOrder - bOrder;
    }
    // If only a is in custom order, it comes before b
    if (aOrder !== undefined) return -1;
    // If only b is in custom order, it comes before a
    if (bOrder !== undefined) return 1;

    // Otherwise, try numeric comparison
    const aNum = Number(a.size);
    const bNum = Number(b.size);
    // If both can convert to numbers, sort numerically
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }
    // If only a is a number, a goes after
    if (!isNaN(aNum)) return 1;
    // If only b is a number, b goes after
    if (!isNaN(bNum)) return -1;

    // Fallback: string comparison
    return a.size.localeCompare(b.size);
  };

  // Sort productSet by compareSizes comparator
  const sortedProducts = [...productSet].sort(compareSizes);

  let mapSet = new Map();
  sortedProducts.forEach((product) => {
    mapSet.set(product.size, false);
  });

  return mapSet;
}

export default function Collection() {


  const {collection} = useLoaderData();

  const productSet = constructProductSetFromCollection(collection);
  const [selectedProduct, setSelectedProduct] = React.useState(productSet[0]);
  const [selectedSwatch, setSelectedSwatch] = React.useState(productSet[0].id);

  const [productZoom, setProductZoom] = React.useState(null);
  
  const initialSizeSet = createInitialSizeSet(productSet);
  const [sizeSet, setSizeSet] = React.useState(initialSizeSet);

  const Swatch = ({product}) => {
    return (
      <div
        class={
          'relative aspect-square w-[calc(22.5%-4px)] md:w-auto max-w-24 carousel-item' +
          (product.available ? '' : ' grayscale')
        }
        onClick={() => {
          setSelectedProduct(product);
          setSelectedSwatch(product.id);
        }}
      >
        {product.featuredImage && (
          <img
            class={
              'skeleton aspect-square cursor-pointer border border-solid rounded-md ' +
              (selectedSwatch == product.id
                ? 'border-blue-500'
                : 'border-transparent')
            }
            src={product.featuredImage.url + '&width=96&height=96'}
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

  const SwatchSet = () => {
    let filteredProducts = ([...sizeSet.values()].every(val => !val)) ? (productSet) : (productSet.filter((product) => sizeSet.get(product.size)));
    
    let distinctIDs = [];
    let distinctSwatches = [];

    filteredProducts
      .forEach((product) => {
        if (!distinctIDs.includes(product.id)) {
          distinctIDs.push(product.id);
          distinctSwatches.push(
            <Swatch key={product.id} product={product}></Swatch>,
          );
        }
      });

    return (
      <div class="md:grid md:grid-cols-6 md:gap-4 gap-1 w-full overflow-x-auto items-center scrollbar-hide carousel">
        {distinctSwatches}
      </div>
    );
  };

  const TabButton = ({name}) => {
    return (
      <button
        class={
          'carousel-item btn h-8 w-6 mx-1' + (sizeSet.get(name) ? ' btn-primary' : '')
        }
        onClick={() => setSizeSet(new Map(sizeSet.set(name, !sizeSet.get(name))))}
      >
        {name}
      </button>
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
      <Image
        key={index}
        class={(index != current ? "hidden" : "") + " skeleton w-auto h-7/8 aspect-square rounded-md shadow-md"}
        data={productZoom[current]}
        onClick={(e) => e.stopPropagation()}
        width={720}
        height={720}
      />
    ));

    return (
      <div 
        class="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center p-8 gap-4 backdrop-blur-sm bg-base-100/50 z-1"
        onClick={() => setProductZoom(null)}
      >
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
        {images}
        <div class="flex gap-2">
          {productZoom.map((product, index) => {
            return (
              <div
                key={index}
                class={
                  'rounded-md w-16 h-16 cursor-pointer border border-solid ' +
                  (current == index ? 'border-blue-500' : 'border-transparent')
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(index);
                }}
              >
                <img
                  class="skeleton rounded-md"
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
    <div 
      class="relative flex flex-col gap-4 md:flex-row w-full h-full p-4 md:p-16"
    >
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
      {
        !([...sizeSet.keys()].length <= 1 && [...sizeSet.keys()].includes("OS") && productSet.length <= 1) && 
        <div class="flex flex-col gap-4 md:w-3/8 p-4">
          <div class="mx-auto max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide carousel overscroll-y-none">
            {!([...sizeSet.keys()].length <= 1 && [...sizeSet.keys()].includes("OS")) && [...sizeSet.keys()].map((size) => <TabButton key={size} name={size} />)}
          </div>
          <SwatchSet />
        </div>
      }
      {isMobile && <ProductInfo product={selectedProduct} />}
    </div>
  );
}

export function constructProductSetFromCollection(collection) {
  let products = [].concat.apply(
    [],
    collection.products.nodes.map((product) => {
      let products = [];

      for (let i = 0; i < product.variants.nodes.length; i++) {
        let size = 'NONE';
        for (
          let j = 0;
          j < product.variants.nodes[i].selectedOptions.length;
          j++
        ) {
          // shopify API response model is abysmally designed
          if (
            product.variants.nodes[i].selectedOptions[j] !== undefined &&
            product.variants.nodes[i].selectedOptions[j].name.toUpperCase() ===
              'SIZE'
          ) {
            size = product.variants.nodes[i].selectedOptions[j].value;
          }
        }

        products.push({
          id: product.id,
          available: product.availableForSale,
          handle: product.handle,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          priceRange: product.priceRange,
          variantId: product.variants.nodes[i].id,
          rawSelectedOptions: product.variants.nodes[i].selectedOptions, // needs to be intact for link retrieval
          size: size,
          featuredImage: product.featuredImage,
          images: product.images.nodes,
          collection: collection.handle
        });
      }

      return products;
    }),
  );

  return products.sort((a, b) => {
    if (a.available && !b.available) return -1;

    if (!a.available && b.available) return 1;

    return 0;
  });
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
