import {
  useVariantUrl
} from "/build/_shared/chunk-BPD3UYOA.js";
import {
  Image,
  Money
} from "/build/_shared/chunk-DDQAMTXW.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-BUK2IPYE.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).collections.$handle.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).collections.$handle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).collections.$handle.jsx"
  );
  import.meta.hot.lastModified = "1701643485832.4316";
}
var meta = ({
  data
}) => {
  return [{
    title: `KT | ${data?.collection.title ?? ""}`
  }];
};
function Collection() {
  _s();
  const {
    collection
  } = useLoaderData();
  const [currentProduct, setCurrentProduct] = (0, import_react2.useState)(0);
  const incrementProduct = () => {
    if (currentProduct < collection.products.nodes.length - 1) {
      setCurrentProduct(currentProduct + 1);
    }
  };
  const decrementProduct = () => {
    if (currentProduct > 0) {
      setCurrentProduct(currentProduct - 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collection", style: {
    display: "block"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "block"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => decrementProduct(), children: "Previous Item" }, void 0, false, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => incrementProduct(), children: "Next Item" }, void 0, false, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "block"
      }, children: currentProduct }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductItem, { product: collection.products.nodes[currentProduct] }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collection-description", children: collection.description }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(Collection, "ywiTxR9UDj2dntaLYz+UKikQ9JE=", false, function() {
  return [useLoaderData];
});
_c = Collection;
function ProductItem({
  product
}) {
  _s2();
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: variantUrl, children: product.featuredImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: product.featuredImage.altText || product.title, aspectRatio: "1/1", data: product.featuredImage, width: 256 }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 148,
      columnNumber: 35
    }, this) }, product.id, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 153,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 142,
    columnNumber: 10
  }, this);
}
_s2(ProductItem, "nMvLa90vVAAaUlSeOyDZ+HVBu0M=", false, function() {
  return [useVariantUrl];
});
_c2 = ProductItem;
var PRODUCT_ITEM_FRAGMENT = `#graphql
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
var COLLECTION_QUERY = `#graphql
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
var _c;
var _c2;
$RefreshReg$(_c, "Collection");
$RefreshReg$(_c2, "ProductItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Collection as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).collections.$handle-QCWSW2WZ.js.map
