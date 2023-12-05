import {
  CartMain,
  useRootLoaderData
} from "/build/_shared/chunk-ILCNP3GG.js";
import "/build/_shared/chunk-GJJZCDES.js";
import "/build/_shared/chunk-BPD3UYOA.js";
import "/build/_shared/chunk-DDQAMTXW.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Await
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

// app/routes/($locale).cart.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).cart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).cart.jsx"
  );
  import.meta.hot.lastModified = "1700954358518.259";
}
var meta = () => {
  return [{
    title: `Hydrogen | Cart`
  }];
};
function Cart() {
  _s();
  const rootData = useRootLoaderData();
  const cartPromise = rootData.cart;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 120,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: cartPromise, errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "An error occurred" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 121,
      columnNumber: 52
    }, this), children: (cart) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartMain, { layout: "page", cart }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 123,
        columnNumber: 18
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).cart.jsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
_s(Cart, "28HZrlOtztJ34GE5gsdSAW1uMEw=", false, function() {
  return [useRootLoaderData];
});
_c = Cart;
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).cart-HOAIZAYJ.js.map
