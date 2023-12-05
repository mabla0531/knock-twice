import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).cart.$lines.jsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).cart.$lines.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).cart.$lines.jsx"
  );
  import.meta.hot.lastModified = "1700954359757.8499";
}
function Component() {
  return null;
}
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default
};
//# sourceMappingURL=/build/routes/($locale).cart.$lines-V34IKNUP.js.map
