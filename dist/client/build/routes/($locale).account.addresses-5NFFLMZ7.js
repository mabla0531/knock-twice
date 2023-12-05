import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-BUK2IPYE.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.addresses.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.addresses.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.addresses.jsx"
  );
  import.meta.hot.lastModified = "1700954360494.9998";
}
var meta = () => {
  return [{
    title: "Addresses"
  }];
};
function Addresses() {
  _s();
  const {
    customer
  } = useOutletContext();
  const {
    defaultAddress,
    addresses
  } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-addresses", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 282,
      columnNumber: 7
    }, this),
    !addresses.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You have no addresses saved." }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 283,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Create address" }, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 285,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewAddressForm, {}, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 286,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 284,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 288,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 289,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 290,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExistingAddresses, { addresses, defaultAddress }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 291,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 283,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 280,
    columnNumber: 10
  }, this);
}
_s(Addresses, "slqt7cvAHz5a6LUGkUsirwmalVU=", false, function() {
  return [useOutletContext];
});
_c = Addresses;
function NewAddressForm() {
  const newAddress = {
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    id: "new",
    lastName: "",
    phone: "",
    province: "",
    zip: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { address: newAddress, defaultAddress: null, children: ({
    stateForMethod
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("POST") !== "idle", formMethod: "POST", type: "submit", children: stateForMethod("POST") !== "idle" ? "Creating" : "Create" }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 317,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 316,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 313,
    columnNumber: 10
  }, this);
}
_c2 = NewAddressForm;
function ExistingAddresses({
  addresses,
  defaultAddress
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Existing addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 333,
      columnNumber: 7
    }, this),
    addresses.nodes.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { address, defaultAddress, children: ({
      stateForMethod
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("PUT") !== "idle", formMethod: "PUT", type: "submit", children: stateForMethod("PUT") !== "idle" ? "Saving" : "Save" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 338,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: stateForMethod("DELETE") !== "idle", formMethod: "DELETE", type: "submit", children: stateForMethod("DELETE") !== "idle" ? "Deleting" : "Delete" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 341,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 337,
      columnNumber: 13
    }, this) }, address.id, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 334,
      columnNumber: 39
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 332,
    columnNumber: 10
  }, this);
}
_c3 = ExistingAddresses;
function AddressForm({
  address,
  defaultAddress,
  children
}) {
  _s2();
  const {
    state,
    formMethod
  } = useNavigation();
  const action = useActionData();
  const error = action?.error?.[address.id];
  const isDefaultAddress = defaultAddress?.id === address.id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: address.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "addressId", defaultValue: address.id }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 369,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 370,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "First name", autoComplete: "given-name", defaultValue: address?.firstName ?? "", id: "firstName", name: "firstName", placeholder: "First name", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 371,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 372,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Last name", autoComplete: "family-name", defaultValue: address?.lastName ?? "", id: "lastName", name: "lastName", placeholder: "Last name", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 373,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 374,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Company", autoComplete: "organization", defaultValue: address?.company ?? "", id: "company", name: "company", placeholder: "Company", type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 375,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address1", children: "Address line*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 376,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Address line 1", autoComplete: "address-line1", defaultValue: address?.address1 ?? "", id: "address1", name: "address1", placeholder: "Address line 1*", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 377,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address2", children: "Address line 2" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 378,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Address line 2", autoComplete: "address-line2", defaultValue: address?.address2 ?? "", id: "address2", name: "address2", placeholder: "Address line 2", type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 379,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", children: "City*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 380,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "City", autoComplete: "address-level2", defaultValue: address?.city ?? "", id: "city", name: "city", placeholder: "City", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 381,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "province", children: "State / Province*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 382,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "State", autoComplete: "address-level1", defaultValue: address?.province ?? "", id: "province", name: "province", placeholder: "State / Province", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 383,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "zip", children: "Zip / Postal Code*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 384,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Zip", autoComplete: "postal-code", defaultValue: address?.zip ?? "", id: "zip", name: "zip", placeholder: "Zip / Postal Code", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 385,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", children: "Country*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 386,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Country", autoComplete: "country-name", defaultValue: address?.country ?? "", id: "country", name: "country", placeholder: "Country", required: true, type: "text" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 387,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Phone" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 388,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Phone", autoComplete: "tel", defaultValue: address?.phone ?? "", id: "phone", name: "phone", placeholder: "+16135551111", pattern: "^\\+?[1-9]\\d{3,14}$", type: "tel" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 389,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultChecked: isDefaultAddress, id: "defaultAddress", name: "defaultAddress", type: "checkbox" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 391,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "defaultAddress", children: "Set as default address" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 392,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 390,
      columnNumber: 9
    }, this),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 396,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 395,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 394,
      columnNumber: 18
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 398,
      columnNumber: 18
    }, this),
    children({
      stateForMethod: (method) => formMethod === method ? state : "idle"
    })
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 368,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 367,
    columnNumber: 10
  }, this);
}
_s2(AddressForm, "74FQ1ihT4Sgu/BMW7XTRtj5zjJM=", false, function() {
  return [useNavigation, useActionData];
});
_c4 = AddressForm;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Addresses");
$RefreshReg$(_c2, "NewAddressForm");
$RefreshReg$(_c3, "ExistingAddresses");
$RefreshReg$(_c4, "AddressForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Addresses as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.addresses-5NFFLMZ7.js.map
