import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  Pagination,
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';
import * as React from 'react';
import { Tab, Box, imageListClasses } from '@mui/material';
import {TabPanel, TabList, TabContext} from '@mui/lab'


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

export function ProductInfo({collection}) {

  const products = collection.products.nodes.map((product) => {
    return (<ProductItem product = {product}></ProductItem>);
  })

  return (
    <div className='productInfo'>
      <div>
        <Link prefetch='intent' to={`/collectiongrid/${collection.handle}`}>Grid View</Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>{collection.title}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{display: "block"}}>
          {products[0]}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{display: "block"}}>
          <h4>
            {collection.products.nodes[0].title}
          </h4>
          <hr/>
          <div
            style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Money data={collection.products.nodes[0].priceRange.minVariantPrice} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div 
          className="collection-description" 
          style={{paddingTop: '16px'}}
        >
          {collection.description}
        </div>
      </div>
    </div>
  );
}

export function Swatch() {

  return (
    <div>swatch image</div>
  )
}

export function ProductFilter({collection}) {
  const products = collection.products.nodes.map((product) => {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          width={256}
          style={{display: "block"}}
        />
      </div>
    );
  });

  const [value, setValue] = React.useState("0");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  }

  let panel_child = <b>HI!</b>;

  return (
    <div className='productFilter'>
      <div className='productTabs'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="collection items">
              <Tab label="S"   value="0" />
              <Tab label="M"   value="1" />
              <Tab label="L"   value="2" />
              <Tab label="XL"  value="3" />
              <Tab label="XXL" value="4" />
            </TabList>
          </Box>
          <TabPanel value="0"><Swatch /></TabPanel>
          <TabPanel value="1"><Swatch /></TabPanel>
          <TabPanel value="2"><Swatch /></TabPanel>
          <TabPanel value="3"><Swatch /></TabPanel>
          <TabPanel value="4"><Swatch /></TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {collection} = useLoaderData();

  return (
    <div className="collectionPanel">
      <ProductInfo collection={collection}></ProductInfo>
      <ProductFilter collection={collection}></ProductFilter>
    </div>
  );
}

/**
 * @param {{
 *   product: ProductItemFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
function ProductItem({product}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "block"}}>
        <Link
          key={product.id}
          prefetch="intent"
          to={variantUrl}
        >
          {product.featuredImage && (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Image
                alt={product.featuredImage.altText || product.title}
                aspectRatio="1/1"
                data={product.featuredImage}
                width={512}
                style={{display: "block"}}
              />
            </div>
          )}
        </Link>
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
    variants(first: 1) {
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
