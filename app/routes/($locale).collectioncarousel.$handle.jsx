import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';
import * as React from 'react';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [{title: `KT | ${data?.collection.title ?? ''}`}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, params, context}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
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

export function Swatch({product, variant}) {
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);

  return (
    <div className='swatchContainer'>
      <Link key={product.id} prefetch="intent" to={variantUrl}>
        {product.featuredImage && (
          <Image
            alt={product.featuredImage.altText || product.title}
            aspectRatio="1/1"
            data={product.featuredImage}
            style={{display: "block", width: "100%", height: "100%"}}
          />
        )}
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
          <div style={{display: "block"}}>
            <div className="productTitle">{product.title}</div>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: '16pt'}}>
              <Money data={product.priceRange.minVariantPrice} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function getProducts({collection, size}) {
  let products = [];
  collection.products.nodes.forEach(product => {
    product.variants.nodes.forEach(variant => {
      if (variant.selectedOptions[0].value == size) {
        products.push(<Swatch product={product} variant={variant}></Swatch>)
      }
    });
  });
  
  return (products);
}

export function Product({collection}) {

  let swatchSet = new Map(
    [
      ["XS",   <>{getProducts({collection: collection, size: "XS"})}</>  ],
      ["S",    <>{getProducts({collection: collection, size: "S"})}</>   ],
      ["M",    <>{getProducts({collection: collection, size: "M"})}</>   ],
      ["L",    <>{getProducts({collection: collection, size: "L"})}</>   ],
      ["XL",   <>{getProducts({collection: collection, size: "XL"})}</>  ],
      ["XXL",  <>{getProducts({collection: collection, size: "XXL"})}</> ],
      ["XXXL", <>{getProducts({collection: collection, size: "XXXL"})}</>]
    ]
  );

  const [sizes, setSizes] = React.useState(["M"]);

  const [currentSwatchSet, setCurrentSwatchSet] = React.useState([swatchSet.get("M"), swatchSet.get("S")]);

  const modifySizes = (size) => {
    console.log("Checking if " + sizes + " includes " + size);
    if (sizes.includes(size)) {
      console.log("Removing " + size + " from " + sizes);
      setSizes(sizes.filter((s) => {return s != size}));
    } else {
      console.log("Adding " + size + " to " + sizes);
      setSizes([size].concat(sizes));
      console.log("newSizes should be " + [size].concat(sizes));
    }
    console.log("New sizes: " + sizes);
    setCurrentSwatchSet(sizes.map((size) => {swatchSet.get(size)}));
  }

  return (
    <div className="collectionPanel">
      <div className='productFilter'>
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center'}}> 
          <h2>{collection.title}</h2> 
        </div>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <div className="collection-description" style={{paddingTop: '16px'}}> {collection.description} </div>
        </div>

        <div className='productTabs'>
          <div className="tabList">
            <button className="tab" onClick={() => modifySizes("XS")}>XS</button>
            <button className="tab" onClick={() => modifySizes("S")}>S</button>
            <button className="tab" onClick={() => modifySizes("M")}>M</button>
            <button className="tab" onClick={() => modifySizes("L")}>L</button>
            <button className="tab" onClick={() => modifySizes("XL")}>XL</button>
            <button className="tab" onClick={() => modifySizes("XXL")}>XXL</button>
            <button className="tab" onClick={() => modifySizes("XXXL")}>XXXL</button>
          </div>
          <div className="tabPanel">
              {currentSwatchSet}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {collection} = useLoaderData();

  return (
      <Product collection={collection}></Product>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
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
