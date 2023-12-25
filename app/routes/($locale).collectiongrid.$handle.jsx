import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  Pagination,
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';
import { Grid } from '@mui/material';

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

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {collection} = useLoaderData();

  const products = collection.products.nodes.map((product) => {
    return (
    <Grid item xs={3}>
        <ProductTile product = {product}></ProductTile>
    </Grid>
    );
  })

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <div>
        <Link prefetch='intent' to={`/collectioncarousel/${collection.handle}`}>Carousel View</Link>
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
        <div 
          className="collection-description" 
          style={{paddingTop: '16px'}}
        >
          {collection.description}
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
          <Grid container spacing={2}>
            {products}
          </Grid>
        </div>
      </div>
    </div>
  );
}

/**
 * @param {{
 *   product: ProductItemFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
function ProductTile({product}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "block"}}>
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
                  width={128}
                  style={{display: "block"}}
                />
              </div>
            )}
          </Link>
        </div>
        <div style={{diplay: "block"}}>
          <h4>
              {product.title}
          </h4>
          <hr/>
          <div
            style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Money data={product.priceRange.minVariantPrice} />
          </div>
        </div>
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
