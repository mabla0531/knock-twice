import {
  NoSearchResults,
  SearchForm,
  SearchResults
} from "/build/_shared/chunk-GJJZCDES.js";
import "/build/_shared/chunk-DDQAMTXW.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
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

// app/routes/($locale).search.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).search.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).search.jsx"
  );
  import.meta.hot.lastModified = "1700954361122.9814";
}
var meta = () => {
  return [{
    title: `Hydrogen | Search`
  }];
};
function SearchPage() {
  _s();
  const {
    searchTerm,
    searchResults
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Search" }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchForm, { searchTerm }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoSearchResults, {}, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 89,
      columnNumber: 53
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 89,
      columnNumber: 75
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).search.jsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
_s(SearchPage, "055hEQUIgKujYDDIKNnKGREITpA=", false, function() {
  return [useLoaderData];
});
_c = SearchPage;
var _c;
$RefreshReg$(_c, "SearchPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SearchPage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).search-OOLK5YFF.js.map
