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

// app/routes/($locale).account_.recover.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account_.recover.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account_.recover.jsx"
  );
  import.meta.hot.lastModified = "1700954360981.4773";
}
function Recover() {
  _s();
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-recover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: action?.resetRequested ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Request Sent." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Return to Login" }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 93,
    columnNumber: 35
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Forgot Password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 103,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter the email address associated with your account to receive a link to reset your password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
          fileName: "app/routes/($locale).account_.recover.jsx",
          lineNumber: 111,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Email address",
            autoComplete: "email",
            autoFocus: true,
            id: "email",
            name: "email",
            placeholder: "Email address",
            required: true,
            type: "email"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.recover.jsx",
            lineNumber: 112,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 118,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 117,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 116,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 120,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Request Reset Link" }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 121,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 109,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 124,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Login \u2192" }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 126,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 125,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 123,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 102,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Recover, "YVzOeyDMt3QGe4z2+NJx3IYjE/U=", false, function() {
  return [useActionData];
});
_c = Recover;
var _c;
$RefreshReg$(_c, "Recover");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Recover as default
};
//# sourceMappingURL=/build/routes/($locale).account_.recover-WO2MGA3F.js.map
