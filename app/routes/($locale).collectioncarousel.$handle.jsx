import { json, redirect } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import {
  getPaginationVariables, Image, Money, CartForm
} from '@shopify/hydrogen';
import { useVariantUrl } from '~/utils';
import * as React from 'react';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({ data }) => {
  return [{ title: `KT | ${data?.collection.title ?? ''}` }];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, params, context }) {
  const { handle } = params;
  const { storefront } = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 250,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const { collection } = await storefront.query(COLLECTION_QUERY, {
    variables: { handle, ...paginationVariables },
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({ collection });
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const { collection } = useLoaderData();

  const productSet = [].concat.apply(
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
            product.variants.nodes[i].selectedOptions[j] != undefined &&
            product.variants.nodes[i].selectedOptions[j].name.toUpperCase() ===
            'SIZE'
          ) {
            size = product.variants.nodes[i].selectedOptions[j].value;
          }
        }

        products.push({
          id: product.id,
          handle: product.handle,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          priceRange: product.priceRange,
          rawSelectedOptions: product.variants.nodes[i].selectedOptions, // needs to be intact for link retrieval
          size: size,
          featuredImage: product.featuredImage,
          images: product.images.nodes,
        });
      }

      return products;
    }),
  );

  const [selectedProduct, setSelectedProduct] = React.useState();

  function ProductPrice({ priceRange }) {
    return (
      <div className="product-price">
        {priceRange.minVariantPrice && (
          <Money data={priceRange.minVariantPrice} />
        )}
      </div>
    );
  }

  function ProductMain({ product }) {
    if (product === undefined) {
      return <></>;
    }

    const variantUrl = useVariantUrl(
      product.handle,
      product.rawSelectedOptions,
    );

    return (
      <div className="product-main">
        <div className='centered-flex'>
          <h2>{product.title}</h2>
        </div>
        <div className='centered-flex'>
          <h3><ProductPrice priceRange={product.priceRange}/></h3>
        </div>
        <div className='centered-flex'>
          <Link key={product.id} prefetch="intent" to={variantUrl}>
            <div className='button'>Add to Cart</div>
          </Link>
        </div>
        <p>
          <strong>Description</strong>
        </p>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </div>
    );
  }

  const ProductImage = ({ product }) => {
    if (product === undefined) {
      return (
        <div className="productImagePanel">
          <div className="productImageEmptyContainer">
            <div className="productImageEmpty">
              Please select a product to preview
            </div>
          </div>
        </div>
      );
    } else {
      const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

      let images = product.images.map((image) => {
        return (
          <Image
            alt={image.altText || product.title}
            style={{ width: '100%', height: '100%' }}
            className="productImage"
            aspectRatio="1/1"
            data={image}
            width={1080}
            height={1080}
          />
        );
      });

      return (
        <div className="productImagePanel">
          <div className="productImageContainer">
            <div className="productImage">
              <button
                className="productImageSifterLeft"
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 6L8 12L14 18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              {images[currentImageIndex]}
              <button
                className="productImageSifterRight"
                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6L16 12L10 18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const Swatch = ({ product }) => {
    return (
      <div
        className="swatchContainer"
        onClick={() => setSelectedProduct(product)}
      >
        {product.featuredImage && (
          <Image
            className="swatchImage"
            alt={product.featuredImage.altText || product.title}
            aspectRatio="1/1"
            data={product.featuredImage}
            width={480}
            height={480}
          />
        )}
      </div>
    );
  };

  const SizeSpecifier = ({ sizes }) => {
    let selected = [...sizes]
      .filter(([_, value]) => value)
      .map(([key, _]) => key);

    return (
      <div className='sizeSpecifier'>
        {selected.length == 1 ? 'Size: ' : 'Sizes: '}{' '}
        {selected.length > 0 ? selected.join(', ') : 'ALL'}
      </div>
    );
  };

  // need to component-alize currentSwatchSet hook so it doesn't
  // enter a race condition with React's asynchronous useState set() method
  // 🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡 dumbest shit I've ever written
  const SwatchSet = ({ currentSwatchSet }) => {
    return currentSwatchSet.length > 0 ? (
      <>{currentSwatchSet}</>
    ) : (
      <div className="noItemsMessage">No items available for this filter</div>
    );
  };

  const createSwatchSet = (sizes) => {
    // this set of distinctions is a workaround for JS not having any form of reduce
    let distinctIDs = [];
    let distinctSwatches = [];

    productSet
      .filter((product) => sizes.includes(product.size))
      .forEach((product) => {
        if (!distinctIDs.includes(product.id)) {
          distinctIDs.push(product.id);
          distinctSwatches.push(<Swatch product={product}></Swatch>);
        }
      });

    return distinctSwatches;
  };

  let [currentSizeSet, setCurrentSizeSet] = React.useState(
    new Map([
      ['XS', false],
      ['S', false],
      ['M', false],
      ['L', false],
      ['XL', false],
      ['XXL', false],
      ['XXXL', false],
    ]),
  );

  const getEnabledSizes = () => {
    return [...currentSizeSet]
      .filter(([_, value]) => value)
      .map(([key, _]) => {
        return key;
      });
  };
  const flipSize = (size) => {
    setCurrentSizeSet(currentSizeSet.set(size, !currentSizeSet.get(size)));
  };

  const defaultSwatchSet = createSwatchSet([
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL',
  ]);
  const [currentSwatchSet, setCurrentSwatchSet] =
    React.useState(defaultSwatchSet);

  const modifyActiveSizes = (size) => {
    flipSize(size);

    // if all are false, show all swatches
    if (
      !currentSizeSet.get('XS') &&
      !currentSizeSet.get('S') &&
      !currentSizeSet.get('M') &&
      !currentSizeSet.get('L') &&
      !currentSizeSet.get('XL') &&
      !currentSizeSet.get('XXL') &&
      !currentSizeSet.get('XXXL')
    ) {
      setCurrentSwatchSet(defaultSwatchSet);
    } else {
      setCurrentSwatchSet(createSwatchSet(getEnabledSizes()));
    }
  };

  let TabButton = ({ name }) => {
    let productCount = productSet.filter((product) => product.size == name).length;
    console.log(productCount);

    return (
      <>
        {productCount > 0 && 
          <button
            className={currentSizeSet.get(name) ? 'button button-selected' : 'button'}
            onClick={
              () => {
                modifyActiveSizes(name);
              }
            }
          >
            {name}
          </button>
        }
      </>
    );
  };

  return (
    <>
      <div className="collectionTitle">
        <h1>{collection.title}</h1>
      </div>
      <div className="collectionPanel">
        <ProductImage product={selectedProduct} />

        <div className="productFilter">
          <div className="productSelector">
            <div className="tabList">
              <TabButton name={'XS'} />
              <TabButton name={'S'} />
              <TabButton name={'M'} />
              <TabButton name={'L'} />
              <TabButton name={'XL'} />
              <TabButton name={'XXL'} />
              <TabButton name={'XXXL'} />
            </div>
            <SizeSpecifier sizes={currentSizeSet} />
          </div>
          <div className="tabPanel">
            <SwatchSet currentSwatchSet={currentSwatchSet} />
          </div>
          <ProductMain product={selectedProduct} />
        </div>
      </div>
    </>
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
        selectedOptions {
          name
          value
        }
      }
    }
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
