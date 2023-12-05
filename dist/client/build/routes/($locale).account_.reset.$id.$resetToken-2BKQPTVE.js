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

// app/routes/($locale).account_.reset.$id.$resetToken.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account_.reset.$id.$resetToken.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account_.reset.$id.$resetToken.jsx"
  );
  import.meta.hot.lastModified = "1700954361091.2598";
}
var meta = () => {
  return [{
    title: "Reset Password"
  }];
};
function Reset() {
  _s();
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-reset", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Reset Password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter a new password for your account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Password",
            autoComplete: "current-password",
            autoFocus: true,
            id: "password",
            minLength: 8,
            name: "password",
            placeholder: "Password",
            required: true,
            type: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
            lineNumber: 116,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Re-enter password", autoComplete: "current-password", id: "passwordConfirm", minLength: 8, name: "passwordConfirm", placeholder: "Re-enter password", required: true, type: "password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 123,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 122,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 126,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Reset" }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/account/login", children: "Back to login \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(Reset, "YVzOeyDMt3QGe4z2+NJx3IYjE/U=", false, function() {
  return [useActionData];
});
_c = Reset;
var _c;
$RefreshReg$(_c, "Reset");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Reset as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.reset.$id.$resetToken-2BKQPTVE.js.map
