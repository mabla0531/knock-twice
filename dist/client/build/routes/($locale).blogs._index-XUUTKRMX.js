import {
  rr
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

// app/routes/($locale).blogs._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).blogs._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).blogs._index.jsx"
  );
  import.meta.hot.lastModified = "1700954360306.706";
}
var meta = () => {
  return [{
    title: `Hydrogen | Blogs`
  }];
};
function Blogs() {
  _s();
  const {
    blogs
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blogs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Blogs" }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blogs-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rr, { connection: blogs, children: ({
      nodes,
      isLoading,
      PreviousLink,
      NextLink
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 76,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        nodes.map((blog) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "blog", prefetch: "intent", to: `/blogs/${blog.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: blog.title }, void 0, false, {
            fileName: "app/routes/($locale).blogs._index.jsx",
            lineNumber: 80,
            columnNumber: 23
          }, this) }, blog.handle, false, {
            fileName: "app/routes/($locale).blogs._index.jsx",
            lineNumber: 79,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 84,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs._index.jsx",
        lineNumber: 74,
        columnNumber: 18
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs._index.jsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Blogs, "B3TZsVovAlVOSbBtypXSdnaESsY=", false, function() {
  return [useLoaderData];
});
_c = Blogs;
var _c;
$RefreshReg$(_c, "Blogs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blogs as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).blogs._index-XUUTKRMX.js.map
