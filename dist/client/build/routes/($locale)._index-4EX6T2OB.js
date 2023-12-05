import {
  Image
} from "/build/_shared/chunk-DDQAMTXW.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-BUK2IPYE.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale)._index.jsx
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
  import.meta.hot.lastModified = "1700959027116.3936";
}
function meta() {
  return [{
    title: "Hydrogen"
  }, {
    description: "A custom storefront powered by Hydrogen"
  }];
}
function Index() {
  _s();
  const {
    collections
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "whitespace-pre-wrap max-w-prose font-bold text-lead", children: "Collections" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3", children: collections.nodes.map((collection) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
        collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: `Image of ${collection.title}`, data: collection.image, sizes: "(max-width: 32em) 100vw, 33vw", crop: "center" }, collection.id, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 49,
          columnNumber: 39
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "whitespace-pre-wrap max-w-prose font-medium text-copy", children: collection.title }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, collection.id, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 47,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Index, "6brbiW8AhZwVjyj0UPHG6QMQMU4=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-4EX6T2OB.js.map
