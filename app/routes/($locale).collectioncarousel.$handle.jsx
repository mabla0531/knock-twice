import { json, redirect } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import {
  getPaginationVariables, Image, Money, CartForm
} from '@shopify/hydrogen';
import { useVariantUrl } from '~/utils';
import * as React from 'react';
import ReactDOM from 'react-dom';

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

function constructInitialProductSet(collection) {
  return [].concat.apply(
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
          handle: product.handle,
          title: product.title,
          descriptionHtml: product.descriptionHtml,
          priceRange: product.priceRange,
          variantId: product.variants.nodes[i].id,
          rawSelectedOptions: product.variants.nodes[i].selectedOptions, // needs to be intact for link retrieval
          size: size,
          featuredImage: product.featuredImage,
          images: product.images.nodes,
        });
      }

      return products;
    }),
  );
}

function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  return (
    <CartForm route="/cart" inputs={{ lines }} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            className="btn btn-primary w-full"
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

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

  return (
    <div className="product-main">
      <h3 className="my-4">{product.title}</h3>
      <div className="my-4"><ProductPrice priceRange={product.priceRange}/></div>
      <div className="my-4">
        
        <AddToCartButton
          onClick={() => {
            window.location.href = '/cart';
          }}
          lines={[{
            merchandiseId: product.variantId,
            quantity: 1,
          }]}
        >
          Add to cart
        </AddToCartButton>
      </div>
      <div className="my-4 collapse collapse-arrow border-base-300 border">
        <input type="checkbox" />
        <div className="collapse-title text-l font-medium">Description</div>
        <div className="collapse-content">
          <div className="my-4" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
    </div>
  );
}

const ProductImageSet = ({product}) => {
  if (product === undefined) {
    return (
      <div className='product-image-panel-wrapper'>
        <div className="product-image-panel-empty">
          Please select a product to preview
        </div>
      </div>
    );
  } else {
    let images = product.images.map((image, index) => 
      <div key={index} className='carousel-item product-image'>
        <Image
          style={{width: "100%", height: "100%"}}
          alt={image.altText || product.title}
          aspectRatio="1/1"
          data={image}
          width={640}
          height={640}
        />
      </div>
    );

    return (
      <div className="product-image-panel-wrapper">
        <div className="carousel product-image-panel">
          {images}
        </div>
      </div>
    );
  }
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const { collection } = useLoaderData();

  const productSet = constructInitialProductSet(collection);

  const [selectedProduct, setSelectedProduct] = React.useState();

  let [currentSizeSet, setCurrentSizeSet] = React.useState(
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

  const Swatch = ({ product }) => {
    return (
      <div
        className="carousel-item swatch-container"
        onClick={() => setSelectedProduct(product)}
      >
        {product.featuredImage && (
          <Image
            className="swatch-image"
            alt={product.featuredImage.altText || product.title}
            aspectRatio="1/1"
            data={product.featuredImage}
            width={64}
            height={64}
          />
        )}
      </div>
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
          distinctSwatches.push(<Swatch key={product.id} product={product}></Swatch>);
        }
      });

    return distinctSwatches;
  };

  const defaultSwatchSet = createSwatchSet(
    ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    productSet
  );

  const [currentSwatchSet, setCurrentSwatchSet] = React.useState(defaultSwatchSet);

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
      !currentSizeSet.get('3XL')
    ) {
      setCurrentSwatchSet(defaultSwatchSet);
    } else {
      setCurrentSwatchSet(createSwatchSet(getEnabledSizes()));
    }
  };

  const SwatchSet = ({ currentSwatchSet }) => {
    return currentSwatchSet.length > 0 ? (
      <div className="carousel">{currentSwatchSet}</div>
    ) : (
      <div className="noItemsMessage">No items available for this filter</div>
    );
  };

  let TabButton = ({ name, buttonCount }) => {

    let width_percent = ((1/buttonCount) * 100).toFixed(2);

    console.log(width_percent);

    return (
      <button
        className={"btn h-8 mx-1" + (currentSizeSet.get(name) ? "btn-primary" : "")}
        onClick={() => modifyActiveSizes(name)}
        style={{width: "calc(" + width_percent + "% - 10px)", maxWidth: "96px"}}
      >
        {name}
      </button>
    );
  };

  const TabList = () => {
    let sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
    
    let relevantSizes = sizes.filter((size) => 
      productSet.filter((product) => product.size === size).length > 0
    );

    return (
      <div className="tabList">
        {relevantSizes.map((size) => <TabButton name={size} buttonCount={relevantSizes.length} />)}
      </div>
    )
  }

  return (
    <>
      <div className="collectionPanel">
        <ProductImageSet product={selectedProduct} />

        <div className="productFilter">
          <div className="productSelector">
            <TabList />
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

const prod_info = `#graphql
  fragment Info on Product {
    id,
    title,
    description
  }
`;

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
