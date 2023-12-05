import {
  Image,
  Money
} from "/build/_shared/chunk-DDQAMTXW.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Await,
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

// app/routes/($locale)._index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale)._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale)._index.jsx"
  );
  import.meta.hot.lastModified = "1700957395529.708";
}
var meta = () => {
  return [{
    title: "Hydrogen | Home"
  }];
};
function Homepage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedCollection, { collection: data.featuredCollection }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Homepage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Homepage;
function FeaturedCollection({
  collection
}) {
  if (!collection)
    return null;
  const image = collection?.image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "featured-collection", to: `/collections/${collection.handle}`, children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "100vw" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_c2 = FeaturedCollection;
function RecommendedProducts({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Recommended Products" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 98,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({
      products: products2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products-grid", children: products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "recommended-product", to: `/products/${product.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 104,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 105,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 107,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 106,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 103,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 102,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_c3 = RecommendedProducts;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Homepage");
$RefreshReg$(_c2, "FeaturedCollection");
$RefreshReg$(_c3, "RecommendedProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-YOY3PWU5.js.map
