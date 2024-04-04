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

  const productImages = collection.products.nodes.map((product) => {
    return (<ProductItem product = {product} />);
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
          {productImages[1]}
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
            {collection.products.nodes[1].title}
          </h4>
          <hr/>
          <div
            style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Money data={collection.products.nodes[1].priceRange.minVariantPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Swatch(product) {

  return (
    <div></div>
  )
}

export function SwatchSet({collection, tag}) {
  console.log(collection);
  return (
    collection.products.nodes.map((product) => {
      return (
        <Swatch key={product.id} />
      )
    })
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

  const [value, setValue] = React.useState("M");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  }

  const [tabWidth, setTabWidth] = React.useState({minWidth: "8em"})
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
    setTabWidth({minWidth: "3em"})
  } else {
    setTabWidth({minWidth: "8em"})
  }
}

// create an event listener
React.useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    <div className='productFilter'>
      <div className='productTabs'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange} aria-label="collection items">
              <Tab label="XS" value="XS" sx={tabWidth}/>
              <Tab label="S" value="S" sx={tabWidth}/>
              <Tab label="M" value="M" sx={tabWidth}/>
              <Tab label="L" value="L" sx={tabWidth}/>
              <Tab label="XL" value="XL" sx={tabWidth}/>
              <Tab label="XXL" value="XXL" sx={tabWidth}/>
              <Tab label="XXXL" value="XXXL" sx={tabWidth}/>
            </TabList>
          </Box>
          <TabPanel value="XS"><SwatchSet collection={collection} tag={"XS"}/></TabPanel>
          <TabPanel value="S"><SwatchSet collection={collection} tag={"S"}/></TabPanel>
          <TabPanel value="M"><SwatchSet collection={collection} tag={"M"}/></TabPanel>
          <TabPanel value="L"><SwatchSet collection={collection} tag={"L"}/></TabPanel>
          <TabPanel value="XL"><SwatchSet collection={collection} tag={"XL"}/></TabPanel>
          <TabPanel value="XXL"><SwatchSet collection={collection} tag={"XXL"}/></TabPanel>
          <TabPanel value="XXXL"><SwatchSet collection={collection} tag={"XXXL"}/></TabPanel>
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
