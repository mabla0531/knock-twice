import {
  PredictiveSearchForm,
  PredictiveSearchResults
} from "/build/_shared/chunk-GJJZCDES.js";
import {
  useVariantUrl
} from "/build/_shared/chunk-BPD3UYOA.js";
import {
  Image,
  Money,
  ke,
  te
} from "/build/_shared/chunk-DDQAMTXW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Await,
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-BUK2IPYE.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMWZXGVY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/styles/reset.css
var reset_default = "/build/_assets/reset-TW5WX2GH.css";

// app/styles/app.css
var app_default = "/build/_assets/app-4HNXQ6IW.css";

// app/components/Layout.jsx
var import_react6 = __toESM(require_react());

// app/components/Aside.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Aside.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Aside.jsx"
  );
  import.meta.hot.lastModified = "1700954359145.558";
}
function Aside({
  children,
  heading,
  id = "aside"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-modal": true, className: "overlay", id, role: "dialog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "close-outside", onClick: () => {
      history.go(-1);
      window.location.hash = "";
    } }, void 0, false, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: heading }, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseAside, {}, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children }, void 0, false, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Aside.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = Aside;
function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "close", href: "#", onChange: () => history.go(-1), children: "\xD7" }, void 0, false, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 58,
      columnNumber: 5
    }, this)
  );
}
_c2 = CloseAside;
var _c;
var _c2;
$RefreshReg$(_c, "Aside");
$RefreshReg$(_c2, "CloseAside");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.jsx"
  );
  import.meta.hot.lastModified = "1700954359192.8286";
}
function Footer({
  menu,
  shop
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FooterMenu, { menu, primaryDomainUrl: shop.primaryDomain.url }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c3 = Footer;
function FooterMenu({
  menu,
  primaryDomainUrl
}) {
  _s();
  const {
    publicStoreDomain
  } = useRootLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "footer-menu", role: "navigation", children: (menu || FALLBACK_FOOTER_MENU).items.map((item) => {
    if (!item.url)
      return null;
    const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) || item.url.includes(primaryDomainUrl) ? new URL(item.url).pathname : item.url;
    const isExternal = !url.startsWith("/");
    return isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: url, rel: "noopener noreferrer", target: "_blank", children: item.title }, item.id, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 58,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { end: true, prefetch: "intent", style: activeLinkStyle, to: url, children: item.title }, item.id, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 60,
      columnNumber: 18
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(FooterMenu, "bHWIOEXkpxiNFKWpl3ZPjTfew9c=", false, function() {
  return [useRootLoaderData];
});
_c22 = FooterMenu;
var FALLBACK_FOOTER_MENU = {
  id: "gid://shopify/Menu/199655620664",
  items: [{
    id: "gid://shopify/MenuItem/461633060920",
    resourceId: "gid://shopify/ShopPolicy/23358046264",
    tags: [],
    title: "Privacy Policy",
    type: "SHOP_POLICY",
    url: "/policies/privacy-policy",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461633093688",
    resourceId: "gid://shopify/ShopPolicy/23358013496",
    tags: [],
    title: "Refund Policy",
    type: "SHOP_POLICY",
    url: "/policies/refund-policy",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461633126456",
    resourceId: "gid://shopify/ShopPolicy/23358111800",
    tags: [],
    title: "Shipping Policy",
    type: "SHOP_POLICY",
    url: "/policies/shipping-policy",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461633159224",
    resourceId: "gid://shopify/ShopPolicy/23358079032",
    tags: [],
    title: "Terms of Service",
    type: "SHOP_POLICY",
    url: "/policies/terms-of-service",
    items: []
  }]
};
function activeLinkStyle({
  isActive,
  isPending
}) {
  return {
    fontWeight: isActive ? "bold" : void 0,
    color: isPending ? "grey" : "white"
  };
}
var _c3;
var _c22;
$RefreshReg$(_c3, "Footer");
$RefreshReg$(_c22, "FooterMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Header.jsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Header.jsx"
  );
  import.meta.hot.lastModified = "1701661209406.413";
}
function Header({
  header,
  isLoggedIn,
  cart
}) {
  const {
    shop,
    menu
  } = header;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/", style: activeLinkStyle2, end: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: shop.name }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderCtas, { isLoggedIn, cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c4 = Header;
function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport
}) {
  _s2();
  const {
    publicStoreDomain
  } = useRootLoaderData();
  const className = `header-menu-${viewport}`;
  function closeAside(event) {
    if (viewport === "mobile") {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className, role: "navigation", children: [
    viewport === "mobile" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { end: true, onClick: closeAside, prefetch: "intent", style: activeLinkStyle2, to: "/", children: "Home" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 71,
      columnNumber: 33
    }, this),
    (menu || FALLBACK_HEADER_MENU).items.map((item) => {
      if (!item.url)
        return null;
      const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) || item.url.includes(primaryDomainUrl) ? new URL(item.url).pathname : item.url;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { className: "header-menu-item", end: true, onClick: closeAside, prefetch: "intent", style: activeLinkStyle2, to: url, children: item.title }, item.id, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 79,
        columnNumber: 14
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s2(HeaderMenu, "bHWIOEXkpxiNFKWpl3ZPjTfew9c=", false, function() {
  return [useRootLoaderData];
});
_c23 = HeaderMenu;
function HeaderCtas({
  isLoggedIn,
  cart
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "header-ctas", role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenuMobileToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle2, children: isLoggedIn ? "Account" : "Sign in" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartToggle, { cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_c32 = HeaderCtas;
function HeaderMenuMobileToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "header-menu-mobile-toggle", href: "#mobile-menu-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "\u2630" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c42 = HeaderMenuMobileToggle;
function SearchToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#search-aside", children: "Search" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_c5 = SearchToggle;
function CartBadge({
  count
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#cart-aside", children: [
    "Cart ",
    count
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_c6 = CartBadge;
function CartToggle({
  cart
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 134,
    columnNumber: 30
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    if (!cart2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 137,
        columnNumber: 27
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: cart2.totalQuantity || 0 }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 138,
      columnNumber: 16
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_c7 = CartToggle;
var FALLBACK_HEADER_MENU = {
  id: "gid://shopify/Menu/199655587896",
  items: [{
    id: "gid://shopify/MenuItem/461609500728",
    resourceId: null,
    tags: [],
    title: "Collections",
    type: "HTTP",
    url: "/collections",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461609533496",
    resourceId: null,
    tags: [],
    title: "Blog",
    type: "HTTP",
    url: "/blogs/journal",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461609566264",
    resourceId: null,
    tags: [],
    title: "Policies",
    type: "HTTP",
    url: "/policies",
    items: []
  }, {
    id: "gid://shopify/MenuItem/461609599032",
    resourceId: "gid://shopify/Page/92591030328",
    tags: [],
    title: "About",
    type: "PAGE",
    url: "/pages/about",
    items: []
  }]
};
function activeLinkStyle2({
  isActive,
  isPending
}) {
  return {
    fontWeight: isActive ? "bold" : void 0,
    color: isPending ? "grey" : "black"
  };
}
var _c4;
var _c23;
var _c32;
var _c42;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c23, "HeaderMenu");
$RefreshReg$(_c32, "HeaderCtas");
$RefreshReg$(_c42, "HeaderMenuMobileToggle");
$RefreshReg$(_c5, "SearchToggle");
$RefreshReg$(_c6, "CartBadge");
$RefreshReg$(_c7, "CartToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Cart.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Cart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Cart.jsx"
  );
  import.meta.hot.lastModified = "1700954358878.7708";
}
function CartMain({
  layout,
  cart
}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? "with-discount" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartEmpty, { hidden: linesCount, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c8 = CartMain;
function CartDetails({
  layout,
  cart
}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cart-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 53,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_c24 = CartDetails;
function CartLines({
  lines,
  layout
}) {
  if (!lines)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "aria-labelledby": "cart-lines", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: lines.nodes.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLineItem, { line, layout }, line.id, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 74,
    columnNumber: 34
  }, this)) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_c33 = CartLines;
function CartLineItem({
  layout,
  line
}) {
  _s3();
  const {
    id,
    merchandise
  } = line;
  const {
    product,
    title,
    image,
    selectedOptions
  } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "cart-line", children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Image, { alt: title, aspectRatio: "1/1", data: image, height: 100, loading: "lazy", width: 100 }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 103,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { prefetch: "intent", to: lineItemUrl, onClick: () => {
        if (layout === "aside") {
          window.location.href = lineItemUrl;
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: product.title }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: selectedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("small", { children: [
        option.name,
        ": ",
        option.value
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 119,
        columnNumber: 15
      }, this) }, option.name, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 118,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLineQuantity, { line }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s3(CartLineItem, "0G/npqv1KFqp38Q/zEdY7LnDVKY=", false, function() {
  return [useVariantUrl];
});
_c43 = CartLineItem;
function CartCheckoutActions({
  checkoutUrl
}) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Continue to Checkout \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_c52 = CartCheckoutActions;
function CartSummary({
  cost,
  layout,
  children = null
}) {
  const className = layout === "page" ? "cart-summary-page" : "cart-summary-aside";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "aria-labelledby": "cart-summary", className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { children: "Totals" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "cart-subtotal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 167,
        columnNumber: 43
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 166,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}
_c62 = CartSummary;
function CartLineRemoveButton({
  lineIds
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(te, { route: "/cart", action: te.ACTIONS.LinesRemove, inputs: {
    lineIds
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Remove" }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 184,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
}
_c72 = CartLineRemoveButton;
function CartLineQuantity({
  line
}) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const {
    id: lineId,
    quantity
  } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cart-line-quantiy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("small", { children: [
      "Quantity: ",
      quantity,
      " \xA0\xA0"
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLineUpdateButton, { lines: [{
      id: lineId,
      quantity: prevQuantity
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { "aria-label": "Decrease quantity", disabled: quantity <= 1, name: "decrease-quantity", value: prevQuantity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u2212 " }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 209,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLineUpdateButton, { lines: [{
      id: lineId,
      quantity: nextQuantity
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { "aria-label": "Increase quantity", name: "increase-quantity", value: nextQuantity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "+" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 218,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartLineRemoveButton, { lineIds: [lineId] }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 222,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 202,
    columnNumber: 10
  }, this);
}
_c82 = CartLineQuantity;
function CartLinePrice({
  line,
  priceType = "regular",
  ...passthroughProps
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 245,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}
_c9 = CartLinePrice;
function CartEmpty({
  hidden = false,
  layout = "aside"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 262,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/collections", onClick: () => {
      if (layout === "aside") {
        window.location.href = "/collections";
      }
    }, children: "Continue shopping \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 267,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 260,
    columnNumber: 10
  }, this);
}
_c10 = CartEmpty;
function CartDiscounts({
  discountCodes
}) {
  const codes = discountCodes?.filter((discount) => discount.applicable)?.map(({
    code
  }) => code) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { hidden: !codes.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 293,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cart-discount", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("code", { children: codes?.join(", ") }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 296,
          columnNumber: 15
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: "Remove" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 298,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 295,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 294,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 292,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(UpdateDiscountForm, { discountCodes: codes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "discountCode", placeholder: "Discount code" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 307,
        columnNumber: 11
      }, this),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Apply" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 309,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 306,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 305,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 289,
    columnNumber: 10
  }, this);
}
_c11 = CartDiscounts;
function UpdateDiscountForm({
  discountCodes,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(te, { route: "/cart", action: te.ACTIONS.DiscountCodesUpdate, inputs: {
    discountCodes: discountCodes || []
  }, children }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
_c12 = UpdateDiscountForm;
function CartLineUpdateButton({
  children,
  lines
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(te, { route: "/cart", action: te.ACTIONS.LinesUpdate, inputs: {
    lines
  }, children }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 344,
    columnNumber: 10
  }, this);
}
_c13 = CartLineUpdateButton;
var _c8;
var _c24;
var _c33;
var _c43;
var _c52;
var _c62;
var _c72;
var _c82;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
$RefreshReg$(_c8, "CartMain");
$RefreshReg$(_c24, "CartDetails");
$RefreshReg$(_c33, "CartLines");
$RefreshReg$(_c43, "CartLineItem");
$RefreshReg$(_c52, "CartCheckoutActions");
$RefreshReg$(_c62, "CartSummary");
$RefreshReg$(_c72, "CartLineRemoveButton");
$RefreshReg$(_c82, "CartLineQuantity");
$RefreshReg$(_c9, "CartLinePrice");
$RefreshReg$(_c10, "CartEmpty");
$RefreshReg$(_c11, "CartDiscounts");
$RefreshReg$(_c12, "UpdateDiscountForm");
$RefreshReg$(_c13, "CartLineUpdateButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Layout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.jsx"
  );
  import.meta.hot.lastModified = "1700954359129.935";
}
function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CartAside, { cart }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SearchAside, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileMenuAside, { menu: header.menu, shop: header.shop }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, { header, cart, isLoggedIn }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: footer, children: (footer2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, { menu: footer2.menu, shop: header.shop }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 47,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_c14 = Layout;
function CartAside({
  cart
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "cart-aside", heading: "CART", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 61,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CartMain, { cart: cart2, layout: "aside" }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 64,
      columnNumber: 18
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c25 = CartAside;
function SearchAside() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "search-aside", heading: "SEARCH", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "predictive-search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PredictiveSearchForm, { children: ({
      fetchResults,
      inputRef
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "q", onChange: fetchResults, onFocus: fetchResults, placeholder: "Search", ref: inputRef, type: "search" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 79,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PredictiveSearchResults, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 85,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_c34 = SearchAside;
function MobileMenuAside({
  menu,
  shop
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "mobile-menu-aside", heading: "MENU", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderMenu, { menu, viewport: "mobile", primaryDomainUrl: shop.primaryDomain.url }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_c44 = MobileMenuAside;
var _c14;
var _c25;
var _c34;
var _c44;
$RefreshReg$(_c14, "Layout");
$RefreshReg$(_c25, "CartAside");
$RefreshReg$(_c34, "SearchAside");
$RefreshReg$(_c44, "MobileMenuAside");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
var shouldRevalidate = ({
  formMethod,
  currentUrl,
  nextUrl
}) => {
  if (formMethod && formMethod !== "GET") {
    return true;
  }
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }
  return false;
};
function links() {
  return [{
    rel: "stylesheet",
    href: reset_default
  }, {
    rel: "stylesheet",
    href: app_default
  }, {
    rel: "preconnect",
    href: "https://cdn.shopify.com"
  }, {
    rel: "preconnect",
    href: "https://shop.app"
  }, {
    rel: "icon",
    type: "image/svg+xml",
    href: favicon_default
  }];
}
var useRootLoaderData = () => {
  _s4();
  const [root] = useMatches();
  return root?.data;
};
_s4(useRootLoaderData, "qWoibZqbzlhGDRlxEMM9P1NS8i8=", false, function() {
  return [useMatches];
});
function App() {
  _s22();
  const nonce = ke();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { ...data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s22(App, "eSpv0U3Ug+ugZvjh8V2BqlN9nvU=", false, function() {
  return [ke, useLoaderData];
});
_c15 = App;
function ErrorBoundary() {
  _s32();
  const error = useRouteError();
  const rootData = useRootLoaderData();
  const nonce = ke();
  let errorMessage = "Unknown error";
  let errorStatus = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { ...rootData, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "route-error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: errorStatus }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 182,
          columnNumber: 13
        }, this),
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 184,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 183,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 180,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, { nonce }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 191,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 171,
    columnNumber: 10
  }, this);
}
_s32(ErrorBoundary, "+p55Hab08DY4H5xf0N/REF/dzJc=", false, function() {
  return [useRouteError, useRootLoaderData, ke];
});
_c26 = ErrorBoundary;
var MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`;
var HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
var FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
var _c15;
var _c26;
$RefreshReg$(_c15, "App");
$RefreshReg$(_c26, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CartMain,
  shouldRevalidate,
  links,
  useRootLoaderData,
  App,
  ErrorBoundary
};
//# sourceMappingURL=/build/_shared/chunk-YRMLEKYU.js.map
