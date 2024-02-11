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
import { Tab, Tabs, Box, Typography } from '@mui/material';



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

function CustomTabPanel(children, index, value) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className='productFilter'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className='tabWrapper'>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="S"   {...a11yProps(0)} />
            <Tab label="M"   {...a11yProps(1)} />
            <Tab label="L"   {...a11yProps(2)} />
            <Tab label="XL"  {...a11yProps(3)} />
            <Tab label="XXL" {...a11yProps(4)} />
          </Tabs>
        </div>
        <CustomTabPanel value={value} index={0}></CustomTabPanel>
        <CustomTabPanel value={value} index={1}></CustomTabPanel>
        <CustomTabPanel value={value} index={2}></CustomTabPanel>
        <CustomTabPanel value={value} index={3}></CustomTabPanel>
        <CustomTabPanel value={value} index={4}></CustomTabPanel>
      </Box>
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
