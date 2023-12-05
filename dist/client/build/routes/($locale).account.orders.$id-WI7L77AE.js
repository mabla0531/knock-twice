import {
  Image,
  Money
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

// app/routes/($locale).account.orders.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\($locale).account.orders.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\($locale).account.orders.$id.jsx"
  );
  import.meta.hot.lastModified = "1700954360589.1921";
}
var meta = ({
  data
}) => {
  return [{
    title: `Order ${data?.order?.name}`
  }];
};
function OrderRoute() {
  _s();
  const {
    order,
    lineItems,
    discountValue,
    discountPercentage
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-order", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Order ",
      order.name
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Placed on ",
      new Date(order.processedAt).toDateString()
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Product" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Price" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Quantity" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Total" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: lineItems.map((lineItem, lineItemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderLineRow, { lineItem }, lineItemIndex, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 106,
            columnNumber: 11
          }, this)
        )) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { children: [
          (discountValue && discountValue.amount || discountPercentage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 114,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: discountPercentage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "-",
              discountPercentage,
              "% OFF"
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 117,
              columnNumber: 41
            }, this) : discountValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: discountValue }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 117,
              columnNumber: 100
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 109,
            columnNumber: 79
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 122,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 121,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 125,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 124,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.subtotalPriceV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 128,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 127,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 132,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 136,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalTaxV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 139,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 138,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 147,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPriceV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 150,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 149,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Shipping Address" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        order?.shippingAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("address", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            order.shippingAddress.firstName && order.shippingAddress.firstName + " ",
            order.shippingAddress.lastName
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          order?.shippingAddress?.formatted ? order.shippingAddress.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: line }, line, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 162,
            columnNumber: 96
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 162,
            columnNumber: 124
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 157,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No shipping address defined" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 163,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Status" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.fulfillmentStatus }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 166,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 165,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: order.statusUrl, rel: "noreferrer", children: "View Order Status \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 171,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s(OrderRoute, "VWNsq0d8NkbTP5ronHng6o3+YvQ=", false, function() {
  return [useLoaderData];
});
_c = OrderRoute;
function OrderLineRow({
  lineItem
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${lineItem.variant.product.handle}`, children: lineItem?.variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: lineItem.variant.image, width: 96, height: 96 }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 194,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 193,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: lineItem.title }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: lineItem.variant.title }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 199,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 197,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.variant.price }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 204,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: lineItem.quantity }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.discountedTotalPrice }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 207,
      columnNumber: 7
    }, this)
  ] }, lineItem.variant.id, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 189,
    columnNumber: 10
  }, this);
}
_c2 = OrderLineRow;
var _c;
var _c2;
$RefreshReg$(_c, "OrderRoute");
$RefreshReg$(_c2, "OrderLineRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrderRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.orders.$id-WI7L77AE.js.map
