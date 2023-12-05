import {
  zr
} from "/build/_shared/chunk-DDQAMTXW.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-YOSDW4RD.js";
import {
  Link
} from "/build/_shared/chunk-BUK2IPYE.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import "/build/_shared/chunk-XMWZXGVY.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/routes/debug-network.jsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/FlameChartWrapper.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/use-resize-observer/dist/bundle.esm.js
var import_react = __toESM(require_react());
function useResolvedElement(subscriber, refOrElement) {
  var lastReportRef = (0, import_react.useRef)(null);
  var refOrElementRef = (0, import_react.useRef)(null);
  refOrElementRef.current = refOrElement;
  var cbElementRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    evaluateSubscription();
  });
  var evaluateSubscription = (0, import_react.useCallback)(function() {
    var cbElement = cbElementRef.current;
    var refOrElement2 = refOrElementRef.current;
    var element = cbElement ? cbElement : refOrElement2 ? refOrElement2 instanceof Element ? refOrElement2 : refOrElement2.current : null;
    if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.subscriber === subscriber) {
      return;
    }
    if (lastReportRef.current && lastReportRef.current.cleanup) {
      lastReportRef.current.cleanup();
    }
    lastReportRef.current = {
      element,
      subscriber,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: element ? subscriber(element) : void 0
    };
  }, [subscriber]);
  (0, import_react.useEffect)(function() {
    return function() {
      if (lastReportRef.current && lastReportRef.current.cleanup) {
        lastReportRef.current.cleanup();
        lastReportRef.current = null;
      }
    };
  }, []);
  return (0, import_react.useCallback)(function(element) {
    cbElementRef.current = element;
    evaluateSubscription();
  }, [evaluateSubscription]);
}
function extractSize(entry, boxProp, sizeType) {
  if (!entry[boxProp]) {
    if (boxProp === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return entry[boxProp][0] ? entry[boxProp][0][sizeType] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    entry[boxProp][sizeType]
  );
}
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var onResize = opts.onResize;
  var onResizeRef = (0, import_react.useRef)(void 0);
  onResizeRef.current = onResize;
  var round = opts.round || Math.round;
  var resizeObserverRef = (0, import_react.useRef)();
  var _useState = (0, import_react.useState)({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var didUnmount = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(function() {
    didUnmount.current = false;
    return function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = (0, import_react.useRef)({
    width: void 0,
    height: void 0
  });
  var refCallback = useResolvedElement((0, import_react.useCallback)(function(element) {
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(function(entries) {
          var entry = entries[0];
          var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
          var reportedWidth = extractSize(entry, boxProp, "inlineSize");
          var reportedHeight = extractSize(entry, boxProp, "blockSize");
          var newWidth = reportedWidth ? round(reportedWidth) : void 0;
          var newHeight = reportedHeight ? round(reportedHeight) : void 0;
          if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (onResizeRef.current) {
              onResizeRef.current(newSize);
            } else {
              if (!didUnmount.current) {
                setSize(newSize);
              }
            }
          }
        })
      };
    }
    resizeObserverRef.current.instance.observe(element, {
      box: opts.box
    });
    return function() {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.instance.unobserve(element);
      }
    };
  }, [opts.box, round]), opts.ref);
  return (0, import_react.useMemo)(function() {
    return {
      ref: refCallback,
      width: size.width,
      height: size.height
    };
  }, [refCallback, size.width, size.height]);
}

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/components/FlameChartWrapper.jsx
var useResizeObserver2 = useResizeObserver;
var FlameChartWrapper = (props) => {
  const boxRef = (0, import_react2.useRef)(null);
  const canvasRef = (0, import_react2.useRef)(null);
  const flameChart = (0, import_react2.useRef)(null);
  useResizeObserver2({
    ref: boxRef,
    onResize: ({ width = 0, height = 0 }) => flameChart.current?.resize(width, height - 3)
  });
  const initialize = (0, import_react2.useCallback)(() => {
    const {
      data,
      marks,
      waterfall,
      timeseries,
      settings,
      colors,
      plugins,
      timeframeTimeseries
    } = props;
    if (canvasRef.current && boxRef.current) {
      const { width = 0, height = 0 } = boxRef.current.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height - 3;
      flameChart.current = new flameChartJs.FlameChart({
        canvas: canvasRef.current,
        data,
        marks,
        waterfall,
        timeseries,
        timeframeTimeseries,
        settings,
        colors,
        plugins
      });
    }
  }, [props]);
  const setBoxRef = (0, import_react2.useCallback)(
    (ref) => {
      const isNewRef = ref !== boxRef.current;
      boxRef.current = ref;
      if (isNewRef) {
        initialize();
      }
    },
    [initialize]
  );
  const setCanvasRef = (0, import_react2.useCallback)(
    (ref) => {
      const isNewRef = ref !== canvasRef.current;
      canvasRef.current = ref;
      if (isNewRef) {
        initialize();
      }
    },
    [initialize]
  );
  (0, import_react2.useEffect)(() => {
    if (props.data) {
      flameChart.current?.setNodes(props.data);
    }
  }, [props.data]);
  (0, import_react2.useEffect)(() => {
    if (props.marks) {
      flameChart.current?.setMarks(props.marks);
    }
  }, [props.marks]);
  (0, import_react2.useEffect)(() => {
    if (props.waterfall) {
      flameChart.current?.setWaterfall(props.waterfall);
    }
  }, [props.waterfall]);
  (0, import_react2.useEffect)(() => {
    if (props.timeseries) {
      flameChart.current?.setTimeseries(props.timeseries);
    }
  }, [props.timeseries]);
  (0, import_react2.useEffect)(() => {
    if (props.timeframeTimeseries) {
      flameChart.current?.setTimeframeTimeseries(props.timeframeTimeseries);
    }
  }, [props.timeframeTimeseries]);
  (0, import_react2.useEffect)(() => {
    if (props.settings && flameChart.current) {
      flameChart.current.setSettings(props.settings);
      flameChart.current.renderEngine.recalcChildrenSizes();
      flameChart.current.render();
    }
  }, [props.settings]);
  (0, import_react2.useEffect)(() => {
    if (props.position) {
      flameChart.current?.setFlameChartPosition(props.position);
    }
  }, [props.position]);
  (0, import_react2.useEffect)(() => {
    if (props.zoom) {
      flameChart.current?.setZoom(props.zoom.start, props.zoom.end);
    }
  }, [props.zoom]);
  (0, import_react2.useEffect)(() => {
    if (props.onSelect) {
      flameChart.current?.on("select", props.onSelect);
    }
    return () => {
      if (props.onSelect) {
        flameChart.current?.removeListener("select", props.onSelect);
      }
    };
  }, [props.onSelect]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: { height: `${props.height ? props.height : 300}px` },
      className: props.className,
      ref: setBoxRef,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: setCanvasRef })
    }
  );
};

// node_modules/@shopify/cli-hydrogen/dist/virtual-routes/routes/debug-network.jsx
function DebugNetwork() {
  const serverEvents = (0, import_react3.useRef)({
    smallestStartTime: 0,
    mainRequests: [],
    subRequests: {},
    showPutRequests: false
  });
  const [timestamp, setTimestamp] = (0, import_react3.useState)();
  function serverEventHandler(onEvent) {
    return (event) => {
      const data = JSON.parse(event.data);
      if (serverEvents.current.smallestStartTime === 0) {
        serverEvents.current.smallestStartTime = data.startTime;
      } else {
        serverEvents.current.smallestStartTime = Math.min(
          data.startTime,
          serverEvents.current.smallestStartTime
        );
      }
      onEvent(data);
      setTimeout(() => {
        setTimestamp((/* @__PURE__ */ new Date()).getTime());
      }, 0);
    };
  }
  (0, import_react3.useEffect)(() => {
    const evtSource = new EventSource("/debug-network-server", {
      withCredentials: true
    });
    const mainRequestHandler = serverEventHandler((data) => {
      serverEvents.current.mainRequests = [
        ...serverEvents.current.mainRequests,
        {
          ...data,
          url: data.url.replace(location.origin, "")
        }
      ];
    });
    evtSource.addEventListener("Request", mainRequestHandler);
    const subRequestHandler = serverEventHandler((data) => {
      let groupEvents = serverEvents.current.subRequests[data.id] || [];
      groupEvents = [...groupEvents, data];
      serverEvents.current.subRequests = {
        ...serverEvents.current.subRequests,
        [data.id]: groupEvents
      };
    });
    evtSource.addEventListener("Sub request", subRequestHandler);
    return () => {
      evtSource.removeEventListener("Request", mainRequestHandler);
      evtSource.removeEventListener("Sub request", subRequestHandler);
      evtSource.close();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      zr,
      {
        src: "https://unpkg.com/flame-chart-js@2.3.1/dist/index.min.js",
        suppressHydrationWarning: true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        style: {
          width: "100vw",
          backgroundColor: "#F5F5F5",
          fontSize: "0.8rem"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "button",
                        {
                          onClick: () => {
                            fetch("/debug-network-server", { method: "DELETE" }).catch(
                              (error) => console.error("Could not clear history:", error)
                            );
                            serverEvents.current = {
                              smallestStartTime: 0,
                              mainRequests: [],
                              subRequests: {},
                              showPutRequests: serverEvents.current.showPutRequests
                            };
                            setTimestamp((/* @__PURE__ */ new Date()).getTime());
                          },
                          children: "Clear"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "input",
                        {
                          id: "showPutRequests",
                          type: "checkbox",
                          checked: serverEvents.current.showPutRequests,
                          onChange: (event) => {
                            serverEvents.current.showPutRequests = event.target.checked;
                            setTimestamp((/* @__PURE__ */ new Date()).getTime());
                          }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "showPutRequests", children: "Show cache update requests (PUT)" })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "p",
                  {
                    style: {
                      paddingRight: "5px"
                    },
                    children: "Unstable"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FlameChart, { serverEvents: serverEvents.current }, timestamp),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { style: { color: "#777", fontSize: "0.7rem", paddingLeft: "5px" }, children: [
            "Note: You may need to turn on '",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: "Disable Cache" }),
            "' for your navigating window. If you are not seeing any requests, try re-running '",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: "npm run dev" }),
            "' in your terminal while leaving this window open."
          ] })
        ]
      }
    )
  ] });
}
var PANEL_HEIGHT = 300;
function FlameChart({ serverEvents }) {
  if (serverEvents.mainRequests.length === 0)
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        style: {
          height: `${PANEL_HEIGHT}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FAFAFA"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { style: { fontWeight: "bold", color: "#777" }, children: [
          "Navigate your",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Link, { to: "/", target: "_blank", children: "app" })
        ] })
      }
    );
  let totalRequests = 0;
  let totalSubRequests = 0;
  const calcDuration = (time) => time - serverEvents.smallestStartTime;
  let items = [];
  serverEvents.mainRequests.forEach((mainRequest) => {
    const mainResponseStart = calcDuration(mainRequest.endTime);
    let mainResponseEnd = mainResponseStart;
    const subRequestItems = [];
    const subRequests = serverEvents.subRequests[mainRequest.id] || [];
    subRequests.forEach((subRequest) => {
      const subRequestEnd = calcDuration(subRequest.endTime);
      if (subRequest.cacheStatus !== "PUT") {
        mainResponseEnd = Math.max(mainResponseEnd, subRequestEnd);
      }
      const subRequestItem = {
        name: `${subRequest.cacheStatus} ${subRequest.url}`.trim(),
        intervals: "request",
        timing: {
          requestStart: calcDuration(subRequest.startTime),
          requestEnd: subRequestEnd
        }
      };
      if (serverEvents.showPutRequests) {
        subRequestItems.push(subRequestItem);
      } else {
        subRequest.cacheStatus !== "PUT" && subRequestItems.push(subRequestItem);
      }
      totalSubRequests++;
    });
    totalRequests++;
    items.push({
      name: mainRequest.url,
      intervals: "mainRequest",
      timing: {
        requestStart: calcDuration(mainRequest.startTime),
        responseStart: mainResponseStart,
        responseEnd: mainResponseEnd
      }
    });
    items = items.concat(subRequestItems);
  });
  const data = {
    items,
    intervals: {
      mainRequest: [
        {
          name: "server",
          color: "#99CC00",
          type: "block",
          start: "requestStart",
          end: "responseStart"
        },
        {
          name: "streaming",
          color: "#33CCFF",
          type: "block",
          start: "responseStart",
          end: "responseEnd"
        }
      ],
      request: [
        {
          name: "request",
          color: "#FFCC00",
          type: "block",
          start: "requestStart",
          end: "requestEnd"
        }
      ]
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      FlameChartWrapper,
      {
        height: PANEL_HEIGHT,
        waterfall: data,
        settings: {
          styles: {
            waterfallPlugin: {
              defaultHeight: PANEL_HEIGHT
            }
          }
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          padding: "5px",
          borderTop: "1px solid #CCC",
          borderBottom: "1px solid #CCC"
        },
        children: [
          totalRequests,
          " requests",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              style: {
                paddingLeft: "2px",
                paddingRight: "2px"
              },
              children: "|"
            }
          ),
          totalSubRequests,
          " sub requests"
        ]
      }
    )
  ] });
}
export {
  DebugNetwork as default
};
//# sourceMappingURL=/build/virtual-routes/routes/debug-network-IDSVJL4N.js.map
