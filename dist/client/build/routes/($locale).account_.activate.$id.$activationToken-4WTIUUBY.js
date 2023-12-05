import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-BUK2IPYE.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.activate.$id.$activationToken.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account_.activate.$id.$activationToken.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account_.activate.$id.$activationToken.jsx"
  );
  import.meta.hot.lastModified = "1700954360856.0544";
}
var meta = () => {
  return [{
    title: "Activate Account"
  }];
};
function Activate() {
  _s();
  const action = useActionData();
  const error = action?.error ?? null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-activate", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Activate Account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create your password to activate your account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            placeholder: "Password",
            "aria-label": "Password",
            minLength: 8,
            required: true,
            autoFocus: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
            lineNumber: 132,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "passwordConfirm", name: "passwordConfirm", type: "password", autoComplete: "current-password", placeholder: "Re-enter password", "aria-label": "Re-enter password", minLength: 8, required: true }, void 0, false, {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 140,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 138,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 142,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full", type: "submit", children: "Save" }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 143,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_s(Activate, "YVzOeyDMt3QGe4z2+NJx3IYjE/U=", false, function() {
  return [useActionData];
});
_c = Activate;
var _c;
$RefreshReg$(_c, "Activate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Activate as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.activate.$id.$activationToken-4WTIUUBY.js.map
