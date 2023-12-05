import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  Link,
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

// app/routes/($locale).account_.register.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account_.register.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account_.register.jsx"
  );
  import.meta.hot.lastModified = "1700954361044.3948";
}
function Register() {
  _s();
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Register." }, void 0, false, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email address" }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            placeholder: "Email address",
            "aria-label": "Email address",
            autoFocus: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 137,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", placeholder: "Password", "aria-label": "Password", minLength: 8, required: true }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "passwordConfirm", name: "passwordConfirm", type: "password", autoComplete: "current-password", placeholder: "Re-enter password", "aria-label": "Re-enter password", minLength: 8, required: true }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 147,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 145,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 149,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Register" }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Login \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 154,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.register.jsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(Register, "EuQJlwp+1/dClAy+OhUaWQ2c6r8=", false, function() {
  return [useActionData];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Register as default
};
//# sourceMappingURL=/build/routes/($locale).account_.register-5TM6YK67.js.map
