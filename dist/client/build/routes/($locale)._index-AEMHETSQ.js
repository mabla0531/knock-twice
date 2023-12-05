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
  import.meta.hot.lastModified = "1700958152986.1792";
}
var meta = () => {
  return [{
    title: "Hydrogen | Home"
  }];
};
function Homepage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collections, { collections: data.collection_previews }, void 0, false, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Homepage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Homepage;
function Collections({
  collections
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Collections" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 72,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: collections, children: ({
      collections: collections2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections-grid", children: collections2.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "collection", to: `/collections/${collection.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 78,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 79,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 80,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 77,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 76,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_c2 = Collections;
var _c;
var _c2;
$RefreshReg$(_c, "Homepage");
$RefreshReg$(_c2, "Collections");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-AEMHETSQ.js.map
