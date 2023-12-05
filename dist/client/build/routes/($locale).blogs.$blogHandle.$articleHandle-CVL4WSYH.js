import {
  Image
} from "/build/_shared/chunk-DDQAMTXW.js";
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

// app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).blogs.$blogHandle.$articleHandle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).blogs.$blogHandle.$articleHandle.jsx"
  );
  import.meta.hot.lastModified = "1700954360214.5815";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data?.article.title ?? ""} article`
  }];
};
function Article() {
  _s();
  const {
    article
  } = useLoaderData();
  const {
    title,
    image,
    contentHtml,
    author
  } = article;
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "article", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        publishedDate,
        " \xB7 ",
        author?.name
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "90vw", loading: "eager" }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 96,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
      __html: contentHtml
    }, className: "article" }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Article, "pbTutVikDQywL53RJU9juI2RNaI=", false, function() {
  return [useLoaderData];
});
_c = Article;
var _c;
$RefreshReg$(_c, "Article");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Article as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).blogs.$blogHandle.$articleHandle-CVL4WSYH.js.map
