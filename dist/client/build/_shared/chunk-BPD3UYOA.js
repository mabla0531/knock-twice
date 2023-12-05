import {
  useLocation
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

// app/utils.js
var import_react2 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils.js"
  );
  import.meta.hot.lastModified = "1700954360071.5154";
}
function useVariantUrl(handle, selectedOptions) {
  const { pathname } = useLocation();
  return (0, import_react2.useMemo)(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions
    });
  }, [handle, selectedOptions, pathname]);
}
function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;
  const path = isLocalePathname ? `${match[0]}products/${handle}` : `/products/${handle}`;
  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });
  const searchString = searchParams.toString();
  return path + (searchString ? "?" + searchParams.toString() : "");
}

export {
  useVariantUrl
};
//# sourceMappingURL=/build/_shared/chunk-BPD3UYOA.js.map
