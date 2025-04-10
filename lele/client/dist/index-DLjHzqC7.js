(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = i(o);
    fetch(o.href, u);
  }
})();
var Sd = { exports: {} },
  ml = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o0;
function C1() {
  if (o0) return ml;
  o0 = 1;
  var n = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function i(r, o, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var m in o) m !== "key" && (u[m] = o[m]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: n, type: r, key: f, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (ml.Fragment = t), (ml.jsx = i), (ml.jsxs = i), ml;
}
var l0;
function D1() {
  return l0 || ((l0 = 1), (Sd.exports = C1())), Sd.exports;
}
var qt = D1(),
  wd = { exports: {} },
  Rt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function V1() {
  if (u0) return Rt;
  u0 = 1;
  var n = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function w(V) {
    return V === null || typeof V != "object"
      ? null
      : ((V = (E && V[E]) || V["@@iterator"]),
        typeof V == "function" ? V : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    F = {};
  function H(V, W, at) {
    (this.props = V),
      (this.context = W),
      (this.refs = F),
      (this.updater = at || D);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (V, W) {
      if (typeof V != "object" && typeof V != "function" && V != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, V, W, "setState");
    }),
    (H.prototype.forceUpdate = function (V) {
      this.updater.enqueueForceUpdate(this, V, "forceUpdate");
    });
  function $() {}
  $.prototype = H.prototype;
  function st(V, W, at) {
    (this.props = V),
      (this.context = W),
      (this.refs = F),
      (this.updater = at || D);
  }
  var nt = (st.prototype = new $());
  (nt.constructor = st), B(nt, H.prototype), (nt.isPureReactComponent = !0);
  var mt = Array.isArray,
    it = { H: null, A: null, T: null, S: null, V: null },
    ct = Object.prototype.hasOwnProperty;
  function M(V, W, at, tt, lt, wt) {
    return (
      (at = wt.ref),
      {
        $$typeof: n,
        type: V,
        key: W,
        ref: at !== void 0 ? at : null,
        props: wt,
      }
    );
  }
  function A(V, W) {
    return M(V.type, W, void 0, void 0, void 0, V.props);
  }
  function R(V) {
    return typeof V == "object" && V !== null && V.$$typeof === n;
  }
  function O(V) {
    var W = { "=": "=0", ":": "=2" };
    return (
      "$" +
      V.replace(/[=:]/g, function (at) {
        return W[at];
      })
    );
  }
  var N = /\/+/g;
  function P(V, W) {
    return typeof V == "object" && V !== null && V.key != null
      ? O("" + V.key)
      : W.toString(36);
  }
  function C() {}
  function re(V) {
    switch (V.status) {
      case "fulfilled":
        return V.value;
      case "rejected":
        throw V.reason;
      default:
        switch (
          (typeof V.status == "string"
            ? V.then(C, C)
            : ((V.status = "pending"),
              V.then(
                function (W) {
                  V.status === "pending" &&
                    ((V.status = "fulfilled"), (V.value = W));
                },
                function (W) {
                  V.status === "pending" &&
                    ((V.status = "rejected"), (V.reason = W));
                }
              )),
          V.status)
        ) {
          case "fulfilled":
            return V.value;
          case "rejected":
            throw V.reason;
        }
    }
    throw V;
  }
  function Kt(V, W, at, tt, lt) {
    var wt = typeof V;
    (wt === "undefined" || wt === "boolean") && (V = null);
    var bt = !1;
    if (V === null) bt = !0;
    else
      switch (wt) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (V.$$typeof) {
            case n:
            case t:
              bt = !0;
              break;
            case v:
              return (bt = V._init), Kt(bt(V._payload), W, at, tt, lt);
          }
      }
    if (bt)
      return (
        (lt = lt(V)),
        (bt = tt === "" ? "." + P(V, 0) : tt),
        mt(lt)
          ? ((at = ""),
            bt != null && (at = bt.replace(N, "$&/") + "/"),
            Kt(lt, W, at, "", function (sn) {
              return sn;
            }))
          : lt != null &&
            (R(lt) &&
              (lt = A(
                lt,
                at +
                  (lt.key == null || (V && V.key === lt.key)
                    ? ""
                    : ("" + lt.key).replace(N, "$&/") + "/") +
                  bt
              )),
            W.push(lt)),
        1
      );
    bt = 0;
    var It = tt === "" ? "." : tt + ":";
    if (mt(V))
      for (var Yt = 0; Yt < V.length; Yt++)
        (tt = V[Yt]), (wt = It + P(tt, Yt)), (bt += Kt(tt, W, at, wt, lt));
    else if (((Yt = w(V)), typeof Yt == "function"))
      for (V = Yt.call(V), Yt = 0; !(tt = V.next()).done; )
        (tt = tt.value), (wt = It + P(tt, Yt++)), (bt += Kt(tt, W, at, wt, lt));
    else if (wt === "object") {
      if (typeof V.then == "function") return Kt(re(V), W, at, tt, lt);
      throw (
        ((W = String(V)),
        Error(
          "Objects are not valid as a React child (found: " +
            (W === "[object Object]"
              ? "object with keys {" + Object.keys(V).join(", ") + "}"
              : W) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return bt;
  }
  function K(V, W, at) {
    if (V == null) return V;
    var tt = [],
      lt = 0;
    return (
      Kt(V, tt, "", "", function (wt) {
        return W.call(at, wt, lt++);
      }),
      tt
    );
  }
  function et(V) {
    if (V._status === -1) {
      var W = V._result;
      (W = W()),
        W.then(
          function (at) {
            (V._status === 0 || V._status === -1) &&
              ((V._status = 1), (V._result = at));
          },
          function (at) {
            (V._status === 0 || V._status === -1) &&
              ((V._status = 2), (V._result = at));
          }
        ),
        V._status === -1 && ((V._status = 0), (V._result = W));
    }
    if (V._status === 1) return V._result.default;
    throw V._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (V) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var W = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof V == "object" &&
                V !== null &&
                typeof V.message == "string"
                  ? String(V.message)
                  : String(V),
              error: V,
            });
            if (!window.dispatchEvent(W)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", V);
            return;
          }
          console.error(V);
        };
  function Vt() {}
  return (
    (Rt.Children = {
      map: K,
      forEach: function (V, W, at) {
        K(
          V,
          function () {
            W.apply(this, arguments);
          },
          at
        );
      },
      count: function (V) {
        var W = 0;
        return (
          K(V, function () {
            W++;
          }),
          W
        );
      },
      toArray: function (V) {
        return (
          K(V, function (W) {
            return W;
          }) || []
        );
      },
      only: function (V) {
        if (!R(V))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return V;
      },
    }),
    (Rt.Component = H),
    (Rt.Fragment = i),
    (Rt.Profiler = o),
    (Rt.PureComponent = st),
    (Rt.StrictMode = r),
    (Rt.Suspense = p),
    (Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = it),
    (Rt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (V) {
        return it.H.useMemoCache(V);
      },
    }),
    (Rt.cache = function (V) {
      return function () {
        return V.apply(null, arguments);
      };
    }),
    (Rt.cloneElement = function (V, W, at) {
      if (V == null)
        throw Error(
          "The argument must be a React element, but you passed " + V + "."
        );
      var tt = B({}, V.props),
        lt = V.key,
        wt = void 0;
      if (W != null)
        for (bt in (W.ref !== void 0 && (wt = void 0),
        W.key !== void 0 && (lt = "" + W.key),
        W))
          !ct.call(W, bt) ||
            bt === "key" ||
            bt === "__self" ||
            bt === "__source" ||
            (bt === "ref" && W.ref === void 0) ||
            (tt[bt] = W[bt]);
      var bt = arguments.length - 2;
      if (bt === 1) tt.children = at;
      else if (1 < bt) {
        for (var It = Array(bt), Yt = 0; Yt < bt; Yt++)
          It[Yt] = arguments[Yt + 2];
        tt.children = It;
      }
      return M(V.type, lt, void 0, void 0, wt, tt);
    }),
    (Rt.createContext = function (V) {
      return (
        (V = {
          $$typeof: f,
          _currentValue: V,
          _currentValue2: V,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (V.Provider = V),
        (V.Consumer = { $$typeof: u, _context: V }),
        V
      );
    }),
    (Rt.createElement = function (V, W, at) {
      var tt,
        lt = {},
        wt = null;
      if (W != null)
        for (tt in (W.key !== void 0 && (wt = "" + W.key), W))
          ct.call(W, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (lt[tt] = W[tt]);
      var bt = arguments.length - 2;
      if (bt === 1) lt.children = at;
      else if (1 < bt) {
        for (var It = Array(bt), Yt = 0; Yt < bt; Yt++)
          It[Yt] = arguments[Yt + 2];
        lt.children = It;
      }
      if (V && V.defaultProps)
        for (tt in ((bt = V.defaultProps), bt))
          lt[tt] === void 0 && (lt[tt] = bt[tt]);
      return M(V, wt, void 0, void 0, null, lt);
    }),
    (Rt.createRef = function () {
      return { current: null };
    }),
    (Rt.forwardRef = function (V) {
      return { $$typeof: m, render: V };
    }),
    (Rt.isValidElement = R),
    (Rt.lazy = function (V) {
      return { $$typeof: v, _payload: { _status: -1, _result: V }, _init: et };
    }),
    (Rt.memo = function (V, W) {
      return { $$typeof: g, type: V, compare: W === void 0 ? null : W };
    }),
    (Rt.startTransition = function (V) {
      var W = it.T,
        at = {};
      it.T = at;
      try {
        var tt = V(),
          lt = it.S;
        lt !== null && lt(at, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then(Vt, X);
      } catch (wt) {
        X(wt);
      } finally {
        it.T = W;
      }
    }),
    (Rt.unstable_useCacheRefresh = function () {
      return it.H.useCacheRefresh();
    }),
    (Rt.use = function (V) {
      return it.H.use(V);
    }),
    (Rt.useActionState = function (V, W, at) {
      return it.H.useActionState(V, W, at);
    }),
    (Rt.useCallback = function (V, W) {
      return it.H.useCallback(V, W);
    }),
    (Rt.useContext = function (V) {
      return it.H.useContext(V);
    }),
    (Rt.useDebugValue = function () {}),
    (Rt.useDeferredValue = function (V, W) {
      return it.H.useDeferredValue(V, W);
    }),
    (Rt.useEffect = function (V, W, at) {
      var tt = it.H;
      if (typeof at == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return tt.useEffect(V, W);
    }),
    (Rt.useId = function () {
      return it.H.useId();
    }),
    (Rt.useImperativeHandle = function (V, W, at) {
      return it.H.useImperativeHandle(V, W, at);
    }),
    (Rt.useInsertionEffect = function (V, W) {
      return it.H.useInsertionEffect(V, W);
    }),
    (Rt.useLayoutEffect = function (V, W) {
      return it.H.useLayoutEffect(V, W);
    }),
    (Rt.useMemo = function (V, W) {
      return it.H.useMemo(V, W);
    }),
    (Rt.useOptimistic = function (V, W) {
      return it.H.useOptimistic(V, W);
    }),
    (Rt.useReducer = function (V, W, at) {
      return it.H.useReducer(V, W, at);
    }),
    (Rt.useRef = function (V) {
      return it.H.useRef(V);
    }),
    (Rt.useState = function (V) {
      return it.H.useState(V);
    }),
    (Rt.useSyncExternalStore = function (V, W, at) {
      return it.H.useSyncExternalStore(V, W, at);
    }),
    (Rt.useTransition = function () {
      return it.H.useTransition();
    }),
    (Rt.version = "19.1.0"),
    Rt
  );
}
var c0;
function Fm() {
  return c0 || ((c0 = 1), (wd.exports = V1())), wd.exports;
}
var pt = Fm(),
  Rd = { exports: {} },
  pl = {},
  xd = { exports: {} },
  Cd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0;
function M1() {
  return (
    h0 ||
      ((h0 = 1),
      (function (n) {
        function t(K, et) {
          var X = K.length;
          K.push(et);
          t: for (; 0 < X; ) {
            var Vt = (X - 1) >>> 1,
              V = K[Vt];
            if (0 < o(V, et)) (K[Vt] = et), (K[X] = V), (X = Vt);
            else break t;
          }
        }
        function i(K) {
          return K.length === 0 ? null : K[0];
        }
        function r(K) {
          if (K.length === 0) return null;
          var et = K[0],
            X = K.pop();
          if (X !== et) {
            K[0] = X;
            t: for (var Vt = 0, V = K.length, W = V >>> 1; Vt < W; ) {
              var at = 2 * (Vt + 1) - 1,
                tt = K[at],
                lt = at + 1,
                wt = K[lt];
              if (0 > o(tt, X))
                lt < V && 0 > o(wt, tt)
                  ? ((K[Vt] = wt), (K[lt] = X), (Vt = lt))
                  : ((K[Vt] = tt), (K[at] = X), (Vt = at));
              else if (lt < V && 0 > o(wt, X))
                (K[Vt] = wt), (K[lt] = X), (Vt = lt);
              else break t;
            }
          }
          return et;
        }
        function o(K, et) {
          var X = K.sortIndex - et.sortIndex;
          return X !== 0 ? X : K.id - et.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          n.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            m = f.now();
          n.unstable_now = function () {
            return f.now() - m;
          };
        }
        var p = [],
          g = [],
          v = 1,
          E = null,
          w = 3,
          D = !1,
          B = !1,
          F = !1,
          H = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          st = typeof clearTimeout == "function" ? clearTimeout : null,
          nt = typeof setImmediate < "u" ? setImmediate : null;
        function mt(K) {
          for (var et = i(g); et !== null; ) {
            if (et.callback === null) r(g);
            else if (et.startTime <= K)
              r(g), (et.sortIndex = et.expirationTime), t(p, et);
            else break;
            et = i(g);
          }
        }
        function it(K) {
          if (((F = !1), mt(K), !B))
            if (i(p) !== null) (B = !0), ct || ((ct = !0), P());
            else {
              var et = i(g);
              et !== null && Kt(it, et.startTime - K);
            }
        }
        var ct = !1,
          M = -1,
          A = 5,
          R = -1;
        function O() {
          return H ? !0 : !(n.unstable_now() - R < A);
        }
        function N() {
          if (((H = !1), ct)) {
            var K = n.unstable_now();
            R = K;
            var et = !0;
            try {
              t: {
                (B = !1), F && ((F = !1), st(M), (M = -1)), (D = !0);
                var X = w;
                try {
                  e: {
                    for (
                      mt(K), E = i(p);
                      E !== null && !(E.expirationTime > K && O());

                    ) {
                      var Vt = E.callback;
                      if (typeof Vt == "function") {
                        (E.callback = null), (w = E.priorityLevel);
                        var V = Vt(E.expirationTime <= K);
                        if (((K = n.unstable_now()), typeof V == "function")) {
                          (E.callback = V), mt(K), (et = !0);
                          break e;
                        }
                        E === i(p) && r(p), mt(K);
                      } else r(p);
                      E = i(p);
                    }
                    if (E !== null) et = !0;
                    else {
                      var W = i(g);
                      W !== null && Kt(it, W.startTime - K), (et = !1);
                    }
                  }
                  break t;
                } finally {
                  (E = null), (w = X), (D = !1);
                }
                et = void 0;
              }
            } finally {
              et ? P() : (ct = !1);
            }
          }
        }
        var P;
        if (typeof nt == "function")
          P = function () {
            nt(N);
          };
        else if (typeof MessageChannel < "u") {
          var C = new MessageChannel(),
            re = C.port2;
          (C.port1.onmessage = N),
            (P = function () {
              re.postMessage(null);
            });
        } else
          P = function () {
            $(N, 0);
          };
        function Kt(K, et) {
          M = $(function () {
            K(n.unstable_now());
          }, et);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (K) {
            K.callback = null;
          }),
          (n.unstable_forceFrameRate = function (K) {
            0 > K || 125 < K
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < K ? Math.floor(1e3 / K) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_next = function (K) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var et = 3;
                break;
              default:
                et = w;
            }
            var X = w;
            w = et;
            try {
              return K();
            } finally {
              w = X;
            }
          }),
          (n.unstable_requestPaint = function () {
            H = !0;
          }),
          (n.unstable_runWithPriority = function (K, et) {
            switch (K) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                K = 3;
            }
            var X = w;
            w = K;
            try {
              return et();
            } finally {
              w = X;
            }
          }),
          (n.unstable_scheduleCallback = function (K, et, X) {
            var Vt = n.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? Vt + X : Vt))
                : (X = Vt),
              K)
            ) {
              case 1:
                var V = -1;
                break;
              case 2:
                V = 250;
                break;
              case 5:
                V = 1073741823;
                break;
              case 4:
                V = 1e4;
                break;
              default:
                V = 5e3;
            }
            return (
              (V = X + V),
              (K = {
                id: v++,
                callback: et,
                priorityLevel: K,
                startTime: X,
                expirationTime: V,
                sortIndex: -1,
              }),
              X > Vt
                ? ((K.sortIndex = X),
                  t(g, K),
                  i(p) === null &&
                    K === i(g) &&
                    (F ? (st(M), (M = -1)) : (F = !0), Kt(it, X - Vt)))
                : ((K.sortIndex = V),
                  t(p, K),
                  B || D || ((B = !0), ct || ((ct = !0), P()))),
              K
            );
          }),
          (n.unstable_shouldYield = O),
          (n.unstable_wrapCallback = function (K) {
            var et = w;
            return function () {
              var X = w;
              w = et;
              try {
                return K.apply(this, arguments);
              } finally {
                w = X;
              }
            };
          });
      })(Cd)),
    Cd
  );
}
var f0;
function O1() {
  return f0 || ((f0 = 1), (xd.exports = M1())), xd.exports;
}
var Dd = { exports: {} },
  $e = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d0;
function I1() {
  if (d0) return $e;
  d0 = 1;
  var n = Fm();
  function t(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var r = {
      d: {
        f: i,
        r: function () {
          throw Error(t(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(p, g, v) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: g,
      implementation: v,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    ($e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    ($e.createPortal = function (p, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(t(299));
      return u(p, g, null, v);
    }),
    ($e.flushSync = function (p) {
      var g = f.T,
        v = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        (f.T = g), (r.p = v), r.d.f();
      }
    }),
    ($e.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(p, g));
    }),
    ($e.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    ($e.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var v = g.as,
          E = m(v, g.crossOrigin),
          w = typeof g.integrity == "string" ? g.integrity : void 0,
          D = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? r.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: D,
            })
          : v === "script" &&
            r.d.X(p, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: D,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    ($e.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = m(g.as, g.crossOrigin);
            r.d.M(p, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(p);
    }),
    ($e.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          E = m(v, g.crossOrigin);
        r.d.L(p, v, {
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    ($e.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var v = m(g.as, g.crossOrigin);
          r.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    ($e.requestFormReset = function (p) {
      r.d.r(p);
    }),
    ($e.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    ($e.useFormState = function (p, g, v) {
      return f.H.useFormState(p, g, v);
    }),
    ($e.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    ($e.version = "19.1.0"),
    $e
  );
}
var m0;
function N1() {
  if (m0) return Dd.exports;
  m0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (Dd.exports = I1()), Dd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var p0;
function P1() {
  if (p0) return pl;
  p0 = 1;
  var n = O1(),
    t = Fm(),
    i = N1();
  function r(e) {
    var s = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        s += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      s +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var s = e,
      a = e;
    if (e.alternate) for (; s.return; ) s = s.return;
    else {
      e = s;
      do (s = e), (s.flags & 4098) !== 0 && (a = s.return), (e = s.return);
      while (e);
    }
    return s.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var s = e.memoizedState;
      if (
        (s === null && ((e = e.alternate), e !== null && (s = e.memoizedState)),
        s !== null)
      )
        return s.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (u(e) !== e) throw Error(r(188));
  }
  function p(e) {
    var s = e.alternate;
    if (!s) {
      if (((s = u(e)), s === null)) throw Error(r(188));
      return s !== e ? null : e;
    }
    for (var a = e, l = s; ; ) {
      var h = a.return;
      if (h === null) break;
      var d = h.alternate;
      if (d === null) {
        if (((l = h.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (h.child === d.child) {
        for (d = h.child; d; ) {
          if (d === a) return m(h), e;
          if (d === l) return m(h), s;
          d = d.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) (a = h), (l = d);
      else {
        for (var T = !1, b = h.child; b; ) {
          if (b === a) {
            (T = !0), (a = h), (l = d);
            break;
          }
          if (b === l) {
            (T = !0), (l = h), (a = d);
            break;
          }
          b = b.sibling;
        }
        if (!T) {
          for (b = d.child; b; ) {
            if (b === a) {
              (T = !0), (a = d), (l = h);
              break;
            }
            if (b === l) {
              (T = !0), (l = d), (a = h);
              break;
            }
            b = b.sibling;
          }
          if (!T) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : s;
  }
  function g(e) {
    var s = e.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((s = g(e)), s !== null)) return s;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    E = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    $ = Symbol.for("react.provider"),
    st = Symbol.for("react.consumer"),
    nt = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    it = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    M = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    O = Symbol.for("react.memo_cache_sentinel"),
    N = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (N && e[N]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Symbol.for("react.client.reference");
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === C ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case H:
        return "Profiler";
      case F:
        return "StrictMode";
      case it:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case R:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return "Portal";
        case nt:
          return (e.displayName || "Context") + ".Provider";
        case st:
          return (e._context.displayName || "Context") + ".Consumer";
        case mt:
          var s = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = s.displayName || s.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case M:
          return (
            (s = e.displayName || null), s !== null ? s : re(e.type) || "Memo"
          );
        case A:
          (s = e._payload), (e = e._init);
          try {
            return re(e(s));
          } catch {}
      }
    return null;
  }
  var Kt = Array.isArray,
    K = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    Vt = [],
    V = -1;
  function W(e) {
    return { current: e };
  }
  function at(e) {
    0 > V || ((e.current = Vt[V]), (Vt[V] = null), V--);
  }
  function tt(e, s) {
    V++, (Vt[V] = e.current), (e.current = s);
  }
  var lt = W(null),
    wt = W(null),
    bt = W(null),
    It = W(null);
  function Yt(e, s) {
    switch ((tt(bt, s), tt(wt, e), tt(lt, null), s.nodeType)) {
      case 9:
      case 11:
        e = (e = s.documentElement) && (e = e.namespaceURI) ? Pv(e) : 0;
        break;
      default:
        if (((e = s.tagName), (s = s.namespaceURI)))
          (s = Pv(s)), (e = Lv(s, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    at(lt), tt(lt, e);
  }
  function sn() {
    at(lt), at(wt), at(bt);
  }
  function gn(e) {
    e.memoizedState !== null && tt(It, e);
    var s = lt.current,
      a = Lv(s, e.type);
    s !== a && (tt(wt, e), tt(lt, a));
  }
  function yn(e) {
    wt.current === e && (at(lt), at(wt)),
      It.current === e && (at(It), (ul._currentValue = X));
  }
  var xn = Object.prototype.hasOwnProperty,
    qs = n.unstable_scheduleCallback,
    Hs = n.unstable_cancelCallback,
    ro = n.unstable_shouldYield,
    nu = n.unstable_requestPaint,
    Cn = n.unstable_now,
    Ah = n.unstable_getCurrentPriorityLevel,
    ao = n.unstable_ImmediatePriority,
    kr = n.unstable_UserBlockingPriority,
    Gs = n.unstable_NormalPriority,
    Sh = n.unstable_LowPriority,
    Ur = n.unstable_IdlePriority,
    oo = n.log,
    iu = n.unstable_setDisableYieldValue,
    he = null,
    Xt = null;
  function vn(e) {
    if (
      (typeof oo == "function" && iu(e),
      Xt && typeof Xt.setStrictMode == "function")
    )
      try {
        Xt.setStrictMode(he, e);
      } catch {}
  }
  var Xe = Math.clz32 ? Math.clz32 : Fs,
    su = Math.log,
    wh = Math.LN2;
  function Fs(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((su(e) / wh) | 0)) | 0;
  }
  var Ks = 256,
    Qs = 4194304;
  function Gn(e) {
    var s = e & 42;
    if (s !== 0) return s;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Br(e, s, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var h = 0,
      d = e.suspendedLanes,
      T = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return (
      b !== 0
        ? ((l = b & ~d),
          l !== 0
            ? (h = Gn(l))
            : ((T &= b),
              T !== 0
                ? (h = Gn(T))
                : a || ((a = b & ~e), a !== 0 && (h = Gn(a)))))
        : ((b = l & ~d),
          b !== 0
            ? (h = Gn(b))
            : T !== 0
            ? (h = Gn(T))
            : a || ((a = l & ~e), a !== 0 && (h = Gn(a)))),
      h === 0
        ? 0
        : s !== 0 &&
          s !== h &&
          (s & d) === 0 &&
          ((d = h & -h),
          (a = s & -s),
          d >= a || (d === 32 && (a & 4194048) !== 0))
        ? s
        : h
    );
  }
  function Ys(e, s) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & s) === 0;
  }
  function lo(e, s) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return s + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uo() {
    var e = Ks;
    return (Ks <<= 1), (Ks & 4194048) === 0 && (Ks = 256), e;
  }
  function co() {
    var e = Qs;
    return (Qs <<= 1), (Qs & 62914560) === 0 && (Qs = 4194304), e;
  }
  function bi(e) {
    for (var s = [], a = 0; 31 > a; a++) s.push(e);
    return s;
  }
  function Ai(e, s) {
    (e.pendingLanes |= s),
      s !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ho(e, s, a, l, h, d) {
    var T = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var b = e.entanglements,
      x = e.expirationTimes,
      z = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var Q = 31 - Xe(a),
        Z = 1 << Q;
      (b[Q] = 0), (x[Q] = -1);
      var j = z[Q];
      if (j !== null)
        for (z[Q] = null, Q = 0; Q < j.length; Q++) {
          var q = j[Q];
          q !== null && (q.lane &= -536870913);
        }
      a &= ~Z;
    }
    l !== 0 && $n(e, l, 0),
      d !== 0 && h === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(T & ~s));
  }
  function $n(e, s, a) {
    (e.pendingLanes |= s), (e.suspendedLanes &= ~s);
    var l = 31 - Xe(s);
    (e.entangledLanes |= s),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090));
  }
  function fo(e, s) {
    var a = (e.entangledLanes |= s);
    for (e = e.entanglements; a; ) {
      var l = 31 - Xe(a),
        h = 1 << l;
      (h & s) | (e[l] & s) && (e[l] |= s), (a &= ~h);
    }
  }
  function Ji(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function zr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Wi() {
    var e = et.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : e0(e.type));
  }
  function ru(e, s) {
    var a = et.p;
    try {
      return (et.p = e), s();
    } finally {
      et.p = a;
    }
  }
  var ae = Math.random().toString(36).slice(2),
    xe = "__reactFiber$" + ae,
    be = "__reactProps$" + ae,
    Dn = "__reactContainer$" + ae,
    mo = "__reactEvents$" + ae,
    Rh = "__reactListeners$" + ae,
    ts = "__reactHandles$" + ae,
    au = "__reactResources$" + ae,
    Xs = "__reactMarker$" + ae;
  function es(e) {
    delete e[xe], delete e[be], delete e[mo], delete e[Rh], delete e[ts];
  }
  function Si(e) {
    var s = e[xe];
    if (s) return s;
    for (var a = e.parentNode; a; ) {
      if ((s = a[Dn] || a[xe])) {
        if (
          ((a = s.alternate),
          s.child !== null || (a !== null && a.child !== null))
        )
          for (e = zv(e); e !== null; ) {
            if ((a = e[xe])) return a;
            e = zv(e);
          }
        return s;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function Jn(e) {
    if ((e = e[xe] || e[Dn])) {
      var s = e.tag;
      if (s === 5 || s === 6 || s === 13 || s === 26 || s === 27 || s === 3)
        return e;
    }
    return null;
  }
  function Wn(e) {
    var s = e.tag;
    if (s === 5 || s === 26 || s === 27 || s === 6) return e.stateNode;
    throw Error(r(33));
  }
  function rn(e) {
    var s = e[au];
    return (
      s ||
        (s = e[au] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      s
    );
  }
  function ge(e) {
    e[Xs] = !0;
  }
  var po = new Set(),
    jr = {};
  function Fn(e, s) {
    wi(e, s), wi(e + "Capture", s);
  }
  function wi(e, s) {
    for (jr[e] = s, e = 0; e < s.length; e++) po.add(s[e]);
  }
  var ou = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    lu = {},
    Zs = {};
  function uu(e) {
    return xn.call(Zs, e)
      ? !0
      : xn.call(lu, e)
      ? !1
      : ou.test(e)
      ? (Zs[e] = !0)
      : ((lu[e] = !0), !1);
  }
  function ns(e, s, a) {
    if (uu(s))
      if (a === null) e.removeAttribute(s);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(s);
            return;
          case "boolean":
            var l = s.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(s);
              return;
            }
        }
        e.setAttribute(s, "" + a);
      }
  }
  function ti(e, s, a) {
    if (a === null) e.removeAttribute(s);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return;
      }
      e.setAttribute(s, "" + a);
    }
  }
  function je(e, s, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(s, a, "" + l);
    }
  }
  var $s, cu;
  function Ri(e) {
    if ($s === void 0)
      try {
        throw Error();
      } catch (a) {
        var s = a.stack.trim().match(/\n( *(at )?)/);
        ($s = (s && s[1]) || ""),
          (cu =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      $s +
      e +
      cu
    );
  }
  var qr = !1;
  function Hr(e, s) {
    if (!e || qr) return "";
    qr = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (s) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (q) {
                  var j = q;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (q) {
                  j = q;
                }
                e.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                j = q;
              }
              (Z = e()) &&
                typeof Z.catch == "function" &&
                Z.catch(function () {});
            }
          } catch (q) {
            if (q && j && typeof q.stack == "string") return [q.stack, j.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      h &&
        h.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = l.DetermineComponentFrameRoot(),
        T = d[0],
        b = d[1];
      if (T && b) {
        var x = T.split(`
`),
          z = b.split(`
`);
        for (
          h = l = 0;
          l < x.length && !x[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; h < z.length && !z[h].includes("DetermineComponentFrameRoot"); )
          h++;
        if (l === x.length || h === z.length)
          for (
            l = x.length - 1, h = z.length - 1;
            1 <= l && 0 <= h && x[l] !== z[h];

          )
            h--;
        for (; 1 <= l && 0 <= h; l--, h--)
          if (x[l] !== z[h]) {
            if (l !== 1 || h !== 1)
              do
                if ((l--, h--, 0 > h || x[l] !== z[h])) {
                  var Q =
                    `
` + x[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Q.includes("<anonymous>") &&
                      (Q = Q.replace("<anonymous>", e.displayName)),
                    Q
                  );
                }
              while (1 <= l && 0 <= h);
            break;
          }
      }
    } finally {
      (qr = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? Ri(a) : "";
  }
  function go(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ri(e.type);
      case 16:
        return Ri("Lazy");
      case 13:
        return Ri("Suspense");
      case 19:
        return Ri("SuspenseList");
      case 0:
      case 15:
        return Hr(e.type, !1);
      case 11:
        return Hr(e.type.render, !1);
      case 1:
        return Hr(e.type, !0);
      case 31:
        return Ri("Activity");
      default:
        return "";
    }
  }
  function Gr(e) {
    try {
      var s = "";
      do (s += go(e)), (e = e.return);
      while (e);
      return s;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function an(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yo(e) {
    var s = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (s === "checkbox" || s === "radio")
    );
  }
  function xh(e) {
    var s = yo(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, s),
      l = "" + e[s];
    if (
      !e.hasOwnProperty(s) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var h = a.get,
        d = a.set;
      return (
        Object.defineProperty(e, s, {
          configurable: !0,
          get: function () {
            return h.call(this);
          },
          set: function (T) {
            (l = "" + T), d.call(this, T);
          },
        }),
        Object.defineProperty(e, s, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (T) {
            l = "" + T;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[s];
          },
        }
      );
    }
  }
  function Fr(e) {
    e._valueTracker || (e._valueTracker = xh(e));
  }
  function vo(e) {
    if (!e) return !1;
    var s = e._valueTracker;
    if (!s) return !0;
    var a = s.getValue(),
      l = "";
    return (
      e && (l = yo(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (s.setValue(e), !0) : !1
    );
  }
  function Js(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ch = /[\n"\\]/g;
  function Ae(e) {
    return e.replace(Ch, function (s) {
      return "\\" + s.charCodeAt(0).toString(16) + " ";
    });
  }
  function _n(e, s, a, l, h, d, T, b) {
    (e.name = ""),
      T != null &&
      typeof T != "function" &&
      typeof T != "symbol" &&
      typeof T != "boolean"
        ? (e.type = T)
        : e.removeAttribute("type"),
      s != null
        ? T === "number"
          ? ((s === 0 && e.value === "") || e.value != s) &&
            (e.value = "" + an(s))
          : e.value !== "" + an(s) && (e.value = "" + an(s))
        : (T !== "submit" && T !== "reset") || e.removeAttribute("value"),
      s != null
        ? is(e, T, an(s))
        : a != null
        ? is(e, T, an(a))
        : l != null && e.removeAttribute("value"),
      h == null && d != null && (e.defaultChecked = !!d),
      h != null &&
        (e.checked = h && typeof h != "function" && typeof h != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (e.name = "" + an(b))
        : e.removeAttribute("name");
  }
  function Ws(e, s, a, l, h, d, T, b) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      s != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || s != null)) return;
      (a = a != null ? "" + an(a) : ""),
        (s = s != null ? "" + an(s) : a),
        b || s === e.value || (e.value = s),
        (e.defaultValue = s);
    }
    (l = l ?? h),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = b ? e.checked : !!l),
      (e.defaultChecked = !!l),
      T != null &&
        typeof T != "function" &&
        typeof T != "symbol" &&
        typeof T != "boolean" &&
        (e.name = T);
  }
  function is(e, s, a) {
    (s === "number" && Js(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function xi(e, s, a, l) {
    if (((e = e.options), s)) {
      s = {};
      for (var h = 0; h < a.length; h++) s["$" + a[h]] = !0;
      for (a = 0; a < e.length; a++)
        (h = s.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== h && (e[a].selected = h),
          h && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + an(a), s = null, h = 0; h < e.length; h++) {
        if (e[h].value === a) {
          (e[h].selected = !0), l && (e[h].defaultSelected = !0);
          return;
        }
        s !== null || e[h].disabled || (s = e[h]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function Jt(e, s, a) {
    if (
      s != null &&
      ((s = "" + an(s)), s !== e.value && (e.value = s), a == null)
    ) {
      e.defaultValue !== s && (e.defaultValue = s);
      return;
    }
    e.defaultValue = a != null ? "" + an(a) : "";
  }
  function tr(e, s, a, l) {
    if (s == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Kt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (s = a);
    }
    (a = an(s)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l);
  }
  function Vn(e, s) {
    if (s) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = s;
        return;
      }
    }
    e.textContent = s;
  }
  var er = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hu(e, s, a) {
    var l = s.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(s, "")
        : s === "float"
        ? (e.cssFloat = "")
        : (e[s] = "")
      : l
      ? e.setProperty(s, a)
      : typeof a != "number" || a === 0 || er.has(s)
      ? s === "float"
        ? (e.cssFloat = a)
        : (e[s] = ("" + a).trim())
      : (e[s] = a + "px");
  }
  function _o(e, s, a) {
    if (s != null && typeof s != "object") throw Error(r(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (s != null && s.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var h in s)
        (l = s[h]), s.hasOwnProperty(h) && a[h] !== l && hu(e, h, l);
    } else for (var d in s) s.hasOwnProperty(d) && hu(e, d, s[d]);
  }
  function To(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Vh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Kr(e) {
    return Vh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ci = null;
  function Mn(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Di = null,
    Vi = null;
  function Eo(e) {
    var s = Jn(e);
    if (s && (e = s.stateNode)) {
      var a = e[be] || null;
      t: switch (((e = s.stateNode), s.type)) {
        case "input":
          if (
            (_n(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (s = a.name),
            a.type === "radio" && s != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ae("" + s) + '"][type="radio"]'
              ),
                s = 0;
              s < a.length;
              s++
            ) {
              var l = a[s];
              if (l !== e && l.form === e.form) {
                var h = l[be] || null;
                if (!h) throw Error(r(90));
                _n(
                  l,
                  h.value,
                  h.defaultValue,
                  h.defaultValue,
                  h.checked,
                  h.defaultChecked,
                  h.type,
                  h.name
                );
              }
            }
            for (s = 0; s < a.length; s++)
              (l = a[s]), l.form === e.form && vo(l);
          }
          break t;
        case "textarea":
          Jt(e, a.value, a.defaultValue);
          break t;
        case "select":
          (s = a.value), s != null && xi(e, !!a.multiple, s, !1);
      }
    }
  }
  var ei = !1;
  function fu(e, s, a) {
    if (ei) return e(s, a);
    ei = !0;
    try {
      var l = e(s);
      return l;
    } finally {
      if (
        ((ei = !1),
        (Di !== null || Vi !== null) &&
          (rc(), Di && ((s = Di), (e = Vi), (Vi = Di = null), Eo(s), e)))
      )
        for (s = 0; s < e.length; s++) Eo(e[s]);
    }
  }
  function nr(e, s) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[be] || null;
    if (l === null) return null;
    a = l[s];
    t: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(r(231, s, typeof a));
    return a;
  }
  var Kn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    On = !1;
  if (Kn)
    try {
      var ir = {};
      Object.defineProperty(ir, "passive", {
        get: function () {
          On = !0;
        },
      }),
        window.addEventListener("test", ir, ir),
        window.removeEventListener("test", ir, ir);
    } catch {
      On = !1;
    }
  var ni = null,
    ss = null,
    Mi = null;
  function bo() {
    if (Mi) return Mi;
    var e,
      s = ss,
      a = s.length,
      l,
      h = "value" in ni ? ni.value : ni.textContent,
      d = h.length;
    for (e = 0; e < a && s[e] === h[e]; e++);
    var T = a - e;
    for (l = 1; l <= T && s[a - l] === h[d - l]; l++);
    return (Mi = h.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ii(e) {
    var s = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && s === 13 && (e = 13))
        : (e = s),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function si() {
    return !0;
  }
  function Ao() {
    return !1;
  }
  function Pe(e) {
    function s(a, l, h, d, T) {
      (this._reactName = a),
        (this._targetInst = h),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = T),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((a = e[b]), (this[b] = a ? a(d) : d[b]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? si
          : Ao),
        (this.isPropagationStopped = Ao),
        this
      );
    }
    return (
      v(s.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = si));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = si));
        },
        persist: function () {},
        isPersistent: si,
      }),
      s
    );
  }
  var Qt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qr = Pe(Qt),
    sr = v({}, Qt, { view: 0, detail: 0 }),
    du = Pe(sr),
    Yr,
    Xr,
    ri,
    rr = v({}, sr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ri &&
              (ri && e.type === "mousemove"
                ? ((Yr = e.screenX - ri.screenX), (Xr = e.screenY - ri.screenY))
                : (Xr = Yr = 0),
              (ri = e)),
            Yr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xr;
      },
    }),
    In = Pe(rr),
    mu = v({}, rr, { dataTransfer: 0 }),
    Mh = Pe(mu),
    ar = v({}, sr, { relatedTarget: 0 }),
    Zr = Pe(ar),
    So = v({}, Qt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $r = Pe(So),
    pu = v({}, Qt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Jr = Pe(pu),
    Oh = v({}, Qt, { data: 0 }),
    wo = Pe(Oh),
    or = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    yu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ro(e) {
    var s = this.nativeEvent;
    return s.getModifierState
      ? s.getModifierState(e)
      : (e = yu[e])
      ? !!s[e]
      : !1;
  }
  function lr() {
    return Ro;
  }
  var vu = v({}, sr, {
      key: function (e) {
        if (e.key) {
          var s = or[e.key] || e.key;
          if (s !== "Unidentified") return s;
        }
        return e.type === "keypress"
          ? ((e = ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? gu[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lr,
      charCode: function (e) {
        return e.type === "keypress" ? ii(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ii(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Wr = Pe(vu),
    _u = v({}, rr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xo = Pe(_u),
    Oi = v({}, sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lr,
    }),
    Tu = Pe(Oi),
    Eu = v({}, Qt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bu = Pe(Eu),
    Au = v({}, rr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ta = Pe(Au),
    on = v({}, Qt, { newState: 0, oldState: 0 }),
    Su = Pe(on),
    wu = [9, 13, 27, 32],
    ai = Kn && "CompositionEvent" in window,
    c = null;
  Kn && "documentMode" in document && (c = document.documentMode);
  var y = Kn && "TextEvent" in window && !c,
    _ = Kn && (!ai || (c && 8 < c && 11 >= c)),
    S = " ",
    k = !1;
  function G(e, s) {
    switch (e) {
      case "keyup":
        return wu.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rt(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Lt = !1;
  function Ce(e, s) {
    switch (e) {
      case "compositionend":
        return rt(s);
      case "keypress":
        return s.which !== 32 ? null : ((k = !0), S);
      case "textInput":
        return (e = s.data), e === S && k ? null : e;
      default:
        return null;
    }
  }
  function kt(e, s) {
    if (Lt)
      return e === "compositionend" || (!ai && G(e, s))
        ? ((e = bo()), (Mi = ss = ni = null), (Lt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || (s.ctrlKey && s.altKey)) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return _ && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var Le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function De(e) {
    var s = e && e.nodeName && e.nodeName.toLowerCase();
    return s === "input" ? !!Le[e.type] : s === "textarea";
  }
  function Ii(e, s, a, l) {
    Di ? (Vi ? Vi.push(l) : (Vi = [l])) : (Di = l),
      (s = hc(s, "onChange")),
      0 < s.length &&
        ((a = new Qr("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: s }));
  }
  var qe = null,
    oi = null;
  function Co(e) {
    Vv(e, 0);
  }
  function Ru(e) {
    var s = Wn(e);
    if (vo(s)) return e;
  }
  function $p(e, s) {
    if (e === "change") return s;
  }
  var Jp = !1;
  if (Kn) {
    var Ih;
    if (Kn) {
      var Nh = "oninput" in document;
      if (!Nh) {
        var Wp = document.createElement("div");
        Wp.setAttribute("oninput", "return;"),
          (Nh = typeof Wp.oninput == "function");
      }
      Ih = Nh;
    } else Ih = !1;
    Jp = Ih && (!document.documentMode || 9 < document.documentMode);
  }
  function tg() {
    qe && (qe.detachEvent("onpropertychange", eg), (oi = qe = null));
  }
  function eg(e) {
    if (e.propertyName === "value" && Ru(oi)) {
      var s = [];
      Ii(s, oi, e, Mn(e)), fu(Co, s);
    }
  }
  function sS(e, s, a) {
    e === "focusin"
      ? (tg(), (qe = s), (oi = a), qe.attachEvent("onpropertychange", eg))
      : e === "focusout" && tg();
  }
  function rS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ru(oi);
  }
  function aS(e, s) {
    if (e === "click") return Ru(s);
  }
  function oS(e, s) {
    if (e === "input" || e === "change") return Ru(s);
  }
  function lS(e, s) {
    return (e === s && (e !== 0 || 1 / e === 1 / s)) || (e !== e && s !== s);
  }
  var Tn = typeof Object.is == "function" ? Object.is : lS;
  function Do(e, s) {
    if (Tn(e, s)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof s != "object" ||
      s === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(s);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var h = a[l];
      if (!xn.call(s, h) || !Tn(e[h], s[h])) return !1;
    }
    return !0;
  }
  function ng(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ig(e, s) {
    var a = ng(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= s && l >= s))
          return { node: a, offset: s - e };
        e = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ng(a);
    }
  }
  function sg(e, s) {
    return e && s
      ? e === s
        ? !0
        : e && e.nodeType === 3
        ? !1
        : s && s.nodeType === 3
        ? sg(e, s.parentNode)
        : "contains" in e
        ? e.contains(s)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(s) & 16)
        : !1
      : !1;
  }
  function rg(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var s = Js(e.document); s instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof s.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = s.contentWindow;
      else break;
      s = Js(e.document);
    }
    return s;
  }
  function Ph(e) {
    var s = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      s &&
      ((s === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        s === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var uS = Kn && "documentMode" in document && 11 >= document.documentMode,
    ea = null,
    Lh = null,
    Vo = null,
    kh = !1;
  function ag(e, s, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    kh ||
      ea == null ||
      ea !== Js(l) ||
      ((l = ea),
      "selectionStart" in l && Ph(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Vo && Do(Vo, l)) ||
        ((Vo = l),
        (l = hc(Lh, "onSelect")),
        0 < l.length &&
          ((s = new Qr("onSelect", "select", null, s, a)),
          e.push({ event: s, listeners: l }),
          (s.target = ea))));
  }
  function ur(e, s) {
    var a = {};
    return (
      (a[e.toLowerCase()] = s.toLowerCase()),
      (a["Webkit" + e] = "webkit" + s),
      (a["Moz" + e] = "moz" + s),
      a
    );
  }
  var na = {
      animationend: ur("Animation", "AnimationEnd"),
      animationiteration: ur("Animation", "AnimationIteration"),
      animationstart: ur("Animation", "AnimationStart"),
      transitionrun: ur("Transition", "TransitionRun"),
      transitionstart: ur("Transition", "TransitionStart"),
      transitioncancel: ur("Transition", "TransitionCancel"),
      transitionend: ur("Transition", "TransitionEnd"),
    },
    Uh = {},
    og = {};
  Kn &&
    ((og = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete na.animationend.animation,
      delete na.animationiteration.animation,
      delete na.animationstart.animation),
    "TransitionEvent" in window || delete na.transitionend.transition);
  function cr(e) {
    if (Uh[e]) return Uh[e];
    if (!na[e]) return e;
    var s = na[e],
      a;
    for (a in s) if (s.hasOwnProperty(a) && a in og) return (Uh[e] = s[a]);
    return e;
  }
  var lg = cr("animationend"),
    ug = cr("animationiteration"),
    cg = cr("animationstart"),
    cS = cr("transitionrun"),
    hS = cr("transitionstart"),
    fS = cr("transitioncancel"),
    hg = cr("transitionend"),
    fg = new Map(),
    Bh =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Bh.push("scrollEnd");
  function Qn(e, s) {
    fg.set(e, s), Fn(s, [e]);
  }
  var dg = new WeakMap();
  function Nn(e, s) {
    if (typeof e == "object" && e !== null) {
      var a = dg.get(e);
      return a !== void 0
        ? a
        : ((s = { value: e, source: s, stack: Gr(s) }), dg.set(e, s), s);
    }
    return { value: e, source: s, stack: Gr(s) };
  }
  var Pn = [],
    ia = 0,
    zh = 0;
  function xu() {
    for (var e = ia, s = (zh = ia = 0); s < e; ) {
      var a = Pn[s];
      Pn[s++] = null;
      var l = Pn[s];
      Pn[s++] = null;
      var h = Pn[s];
      Pn[s++] = null;
      var d = Pn[s];
      if (((Pn[s++] = null), l !== null && h !== null)) {
        var T = l.pending;
        T === null ? (h.next = h) : ((h.next = T.next), (T.next = h)),
          (l.pending = h);
      }
      d !== 0 && mg(a, h, d);
    }
  }
  function Cu(e, s, a, l) {
    (Pn[ia++] = e),
      (Pn[ia++] = s),
      (Pn[ia++] = a),
      (Pn[ia++] = l),
      (zh |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function jh(e, s, a, l) {
    return Cu(e, s, a, l), Du(e);
  }
  function sa(e, s) {
    return Cu(e, null, null, s), Du(e);
  }
  function mg(e, s, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var h = !1, d = e.return; d !== null; )
      (d.childLanes |= a),
        (l = d.alternate),
        l !== null && (l.childLanes |= a),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (h = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        h &&
          s !== null &&
          ((h = 31 - Xe(a)),
          (e = d.hiddenUpdates),
          (l = e[h]),
          l === null ? (e[h] = [s]) : l.push(s),
          (s.lane = a | 536870912)),
        d)
      : null;
  }
  function Du(e) {
    if (50 < el) throw ((el = 0), (Yf = null), Error(r(185)));
    for (var s = e.return; s !== null; ) (e = s), (s = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ra = {};
  function dS(e, s, a, l) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = s),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function En(e, s, a, l) {
    return new dS(e, s, a, l);
  }
  function qh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ni(e, s) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = En(e.tag, s, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = s),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (s = e.dependencies),
      (a.dependencies =
        s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function pg(e, s) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = s),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (s = a.dependencies),
          (e.dependencies =
            s === null
              ? null
              : { lanes: s.lanes, firstContext: s.firstContext })),
      e
    );
  }
  function Vu(e, s, a, l, h, d) {
    var T = 0;
    if (((l = e), typeof e == "function")) qh(e) && (T = 1);
    else if (typeof e == "string")
      T = p1(e, a, lt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      t: switch (e) {
        case R:
          return (e = En(31, a, s, h)), (e.elementType = R), (e.lanes = d), e;
        case B:
          return hr(a.children, h, d, s);
        case F:
          (T = 8), (h |= 24);
          break;
        case H:
          return (
            (e = En(12, a, s, h | 2)), (e.elementType = H), (e.lanes = d), e
          );
        case it:
          return (e = En(13, a, s, h)), (e.elementType = it), (e.lanes = d), e;
        case ct:
          return (e = En(19, a, s, h)), (e.elementType = ct), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
              case nt:
                T = 10;
                break t;
              case st:
                T = 9;
                break t;
              case mt:
                T = 11;
                break t;
              case M:
                T = 14;
                break t;
              case A:
                (T = 16), (l = null);
                break t;
            }
          (T = 29),
            (a = Error(r(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (s = En(T, a, s, h)), (s.elementType = e), (s.type = l), (s.lanes = d), s
    );
  }
  function hr(e, s, a, l) {
    return (e = En(7, e, l, s)), (e.lanes = a), e;
  }
  function Hh(e, s, a) {
    return (e = En(6, e, null, s)), (e.lanes = a), e;
  }
  function Gh(e, s, a) {
    return (
      (s = En(4, e.children !== null ? e.children : [], e.key, s)),
      (s.lanes = a),
      (s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      s
    );
  }
  var aa = [],
    oa = 0,
    Mu = null,
    Ou = 0,
    Ln = [],
    kn = 0,
    fr = null,
    Pi = 1,
    Li = "";
  function dr(e, s) {
    (aa[oa++] = Ou), (aa[oa++] = Mu), (Mu = e), (Ou = s);
  }
  function gg(e, s, a) {
    (Ln[kn++] = Pi), (Ln[kn++] = Li), (Ln[kn++] = fr), (fr = e);
    var l = Pi;
    e = Li;
    var h = 32 - Xe(l) - 1;
    (l &= ~(1 << h)), (a += 1);
    var d = 32 - Xe(s) + h;
    if (30 < d) {
      var T = h - (h % 5);
      (d = (l & ((1 << T) - 1)).toString(32)),
        (l >>= T),
        (h -= T),
        (Pi = (1 << (32 - Xe(s) + h)) | (a << h) | l),
        (Li = d + e);
    } else (Pi = (1 << d) | (a << h) | l), (Li = e);
  }
  function Fh(e) {
    e.return !== null && (dr(e, 1), gg(e, 1, 0));
  }
  function Kh(e) {
    for (; e === Mu; )
      (Mu = aa[--oa]), (aa[oa] = null), (Ou = aa[--oa]), (aa[oa] = null);
    for (; e === fr; )
      (fr = Ln[--kn]),
        (Ln[kn] = null),
        (Li = Ln[--kn]),
        (Ln[kn] = null),
        (Pi = Ln[--kn]),
        (Ln[kn] = null);
  }
  var ln = null,
    fe = null,
    Ft = !1,
    mr = null,
    li = !1,
    Qh = Error(r(519));
  function pr(e) {
    var s = Error(r(418, ""));
    throw (Io(Nn(s, e)), Qh);
  }
  function yg(e) {
    var s = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((s[xe] = e), (s[be] = l), a)) {
      case "dialog":
        Pt("cancel", s), Pt("close", s);
        break;
      case "iframe":
      case "object":
      case "embed":
        Pt("load", s);
        break;
      case "video":
      case "audio":
        for (a = 0; a < il.length; a++) Pt(il[a], s);
        break;
      case "source":
        Pt("error", s);
        break;
      case "img":
      case "image":
      case "link":
        Pt("error", s), Pt("load", s);
        break;
      case "details":
        Pt("toggle", s);
        break;
      case "input":
        Pt("invalid", s),
          Ws(
            s,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Fr(s);
        break;
      case "select":
        Pt("invalid", s);
        break;
      case "textarea":
        Pt("invalid", s), tr(s, l.value, l.defaultValue, l.children), Fr(s);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      s.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Nv(s.textContent, a)
        ? (l.popover != null && (Pt("beforetoggle", s), Pt("toggle", s)),
          l.onScroll != null && Pt("scroll", s),
          l.onScrollEnd != null && Pt("scrollend", s),
          l.onClick != null && (s.onclick = fc),
          (s = !0))
        : (s = !1),
      s || pr(e);
  }
  function vg(e) {
    for (ln = e.return; ln; )
      switch (ln.tag) {
        case 5:
        case 13:
          li = !1;
          return;
        case 27:
        case 3:
          li = !0;
          return;
        default:
          ln = ln.return;
      }
  }
  function Mo(e) {
    if (e !== ln) return !1;
    if (!Ft) return vg(e), (Ft = !0), !1;
    var s = e.tag,
      a;
    if (
      ((a = s !== 3 && s !== 27) &&
        ((a = s === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || cd(e.type, e.memoizedProps))),
        (a = !a)),
      a && fe && pr(e),
      vg(e),
      s === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      t: {
        for (e = e.nextSibling, s = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (s === 0) {
                fe = Xn(e.nextSibling);
                break t;
              }
              s--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || s++;
          e = e.nextSibling;
        }
        fe = null;
      }
    } else
      s === 27
        ? ((s = fe), Ts(e.type) ? ((e = md), (md = null), (fe = e)) : (fe = s))
        : (fe = ln ? Xn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Oo() {
    (fe = ln = null), (Ft = !1);
  }
  function _g() {
    var e = mr;
    return (
      e !== null &&
        (dn === null ? (dn = e) : dn.push.apply(dn, e), (mr = null)),
      e
    );
  }
  function Io(e) {
    mr === null ? (mr = [e]) : mr.push(e);
  }
  var Yh = W(null),
    gr = null,
    ki = null;
  function rs(e, s, a) {
    tt(Yh, s._currentValue), (s._currentValue = a);
  }
  function Ui(e) {
    (e._currentValue = Yh.current), at(Yh);
  }
  function Xh(e, s, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & s) !== s
          ? ((e.childLanes |= s), l !== null && (l.childLanes |= s))
          : l !== null && (l.childLanes & s) !== s && (l.childLanes |= s),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Zh(e, s, a, l) {
    var h = e.child;
    for (h !== null && (h.return = e); h !== null; ) {
      var d = h.dependencies;
      if (d !== null) {
        var T = h.child;
        d = d.firstContext;
        t: for (; d !== null; ) {
          var b = d;
          d = h;
          for (var x = 0; x < s.length; x++)
            if (b.context === s[x]) {
              (d.lanes |= a),
                (b = d.alternate),
                b !== null && (b.lanes |= a),
                Xh(d.return, a, e),
                l || (T = null);
              break t;
            }
          d = b.next;
        }
      } else if (h.tag === 18) {
        if (((T = h.return), T === null)) throw Error(r(341));
        (T.lanes |= a),
          (d = T.alternate),
          d !== null && (d.lanes |= a),
          Xh(T, a, e),
          (T = null);
      } else T = h.child;
      if (T !== null) T.return = h;
      else
        for (T = h; T !== null; ) {
          if (T === e) {
            T = null;
            break;
          }
          if (((h = T.sibling), h !== null)) {
            (h.return = T.return), (T = h);
            break;
          }
          T = T.return;
        }
      h = T;
    }
  }
  function No(e, s, a, l) {
    e = null;
    for (var h = s, d = !1; h !== null; ) {
      if (!d) {
        if ((h.flags & 524288) !== 0) d = !0;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var T = h.alternate;
        if (T === null) throw Error(r(387));
        if (((T = T.memoizedProps), T !== null)) {
          var b = h.type;
          Tn(h.pendingProps.value, T.value) ||
            (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (h === It.current) {
        if (((T = h.alternate), T === null)) throw Error(r(387));
        T.memoizedState.memoizedState !== h.memoizedState.memoizedState &&
          (e !== null ? e.push(ul) : (e = [ul]));
      }
      h = h.return;
    }
    e !== null && Zh(s, e, a, l), (s.flags |= 262144);
  }
  function Iu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function yr(e) {
    (gr = e),
      (ki = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ze(e) {
    return Tg(gr, e);
  }
  function Nu(e, s) {
    return gr === null && yr(e), Tg(e, s);
  }
  function Tg(e, s) {
    var a = s._currentValue;
    if (((s = { context: s, memoizedValue: a, next: null }), ki === null)) {
      if (e === null) throw Error(r(308));
      (ki = s),
        (e.dependencies = { lanes: 0, firstContext: s }),
        (e.flags |= 524288);
    } else ki = ki.next = s;
    return a;
  }
  var mS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              s = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (s.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    pS = n.unstable_scheduleCallback,
    gS = n.unstable_NormalPriority,
    Ve = {
      $$typeof: nt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function $h() {
    return { controller: new mS(), data: new Map(), refCount: 0 };
  }
  function Po(e) {
    e.refCount--,
      e.refCount === 0 &&
        pS(gS, function () {
          e.controller.abort();
        });
  }
  var Lo = null,
    Jh = 0,
    la = 0,
    ua = null;
  function yS(e, s) {
    if (Lo === null) {
      var a = (Lo = []);
      (Jh = 0),
        (la = ed()),
        (ua = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return Jh++, s.then(Eg, Eg), s;
  }
  function Eg() {
    if (--Jh === 0 && Lo !== null) {
      ua !== null && (ua.status = "fulfilled");
      var e = Lo;
      (Lo = null), (la = 0), (ua = null);
      for (var s = 0; s < e.length; s++) (0, e[s])();
    }
  }
  function vS(e, s) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (h) {
          a.push(h);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = s);
          for (var h = 0; h < a.length; h++) (0, a[h])(s);
        },
        function (h) {
          for (l.status = "rejected", l.reason = h, h = 0; h < a.length; h++)
            (0, a[h])(void 0);
        }
      ),
      l
    );
  }
  var bg = K.S;
  K.S = function (e, s) {
    typeof s == "object" &&
      s !== null &&
      typeof s.then == "function" &&
      yS(e, s),
      bg !== null && bg(e, s);
  };
  var vr = W(null);
  function Wh() {
    var e = vr.current;
    return e !== null ? e : ie.pooledCache;
  }
  function Pu(e, s) {
    s === null ? tt(vr, vr.current) : tt(vr, s.pool);
  }
  function Ag() {
    var e = Wh();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var ko = Error(r(460)),
    Sg = Error(r(474)),
    Lu = Error(r(542)),
    tf = { then: function () {} };
  function wg(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ku() {}
  function Rg(e, s, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(s) : a !== s && (s.then(ku, ku), (s = a)),
      s.status)
    ) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw ((e = s.reason), Cg(e), e);
      default:
        if (typeof s.status == "string") s.then(ku, ku);
        else {
          if (((e = ie), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          (e = s),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (s.status === "pending") {
                  var h = s;
                  (h.status = "fulfilled"), (h.value = l);
                }
              },
              function (l) {
                if (s.status === "pending") {
                  var h = s;
                  (h.status = "rejected"), (h.reason = l);
                }
              }
            );
        }
        switch (s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw ((e = s.reason), Cg(e), e);
        }
        throw ((Uo = s), ko);
    }
  }
  var Uo = null;
  function xg() {
    if (Uo === null) throw Error(r(459));
    var e = Uo;
    return (Uo = null), e;
  }
  function Cg(e) {
    if (e === ko || e === Lu) throw Error(r(483));
  }
  var as = !1;
  function ef(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function nf(e, s) {
    (e = e.updateQueue),
      s.updateQueue === e &&
        (s.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function os(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ls(e, s, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Zt & 2) !== 0)) {
      var h = l.pending;
      return (
        h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
        (l.pending = s),
        (s = Du(e)),
        mg(e, null, a),
        s
      );
    }
    return Cu(e, l, s, a), Du(e);
  }
  function Bo(e, s, a) {
    if (
      ((s = s.updateQueue), s !== null && ((s = s.shared), (a & 4194048) !== 0))
    ) {
      var l = s.lanes;
      (l &= e.pendingLanes), (a |= l), (s.lanes = a), fo(e, a);
    }
  }
  function sf(e, s) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var h = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var T = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          d === null ? (h = d = T) : (d = d.next = T), (a = a.next);
        } while (a !== null);
        d === null ? (h = d = s) : (d = d.next = s);
      } else h = d = s;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = s) : (e.next = s),
      (a.lastBaseUpdate = s);
  }
  var rf = !1;
  function zo() {
    if (rf) {
      var e = ua;
      if (e !== null) throw e;
    }
  }
  function jo(e, s, a, l) {
    rf = !1;
    var h = e.updateQueue;
    as = !1;
    var d = h.firstBaseUpdate,
      T = h.lastBaseUpdate,
      b = h.shared.pending;
    if (b !== null) {
      h.shared.pending = null;
      var x = b,
        z = x.next;
      (x.next = null), T === null ? (d = z) : (T.next = z), (T = x);
      var Q = e.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (b = Q.lastBaseUpdate),
        b !== T &&
          (b === null ? (Q.firstBaseUpdate = z) : (b.next = z),
          (Q.lastBaseUpdate = x)));
    }
    if (d !== null) {
      var Z = h.baseState;
      (T = 0), (Q = z = x = null), (b = d);
      do {
        var j = b.lane & -536870913,
          q = j !== b.lane;
        if (q ? (Ut & j) === j : (l & j) === j) {
          j !== 0 && j === la && (rf = !0),
            Q !== null &&
              (Q = Q.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var At = e,
              yt = b;
            j = s;
            var ee = a;
            switch (yt.tag) {
              case 1:
                if (((At = yt.payload), typeof At == "function")) {
                  Z = At.call(ee, Z, j);
                  break t;
                }
                Z = At;
                break t;
              case 3:
                At.flags = (At.flags & -65537) | 128;
              case 0:
                if (
                  ((At = yt.payload),
                  (j = typeof At == "function" ? At.call(ee, Z, j) : At),
                  j == null)
                )
                  break t;
                Z = v({}, Z, j);
                break t;
              case 2:
                as = !0;
            }
          }
          (j = b.callback),
            j !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = h.callbacks),
              q === null ? (h.callbacks = [j]) : q.push(j));
        } else
          (q = {
            lane: j,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            Q === null ? ((z = Q = q), (x = Z)) : (Q = Q.next = q),
            (T |= j);
        if (((b = b.next), b === null)) {
          if (((b = h.shared.pending), b === null)) break;
          (q = b),
            (b = q.next),
            (q.next = null),
            (h.lastBaseUpdate = q),
            (h.shared.pending = null);
        }
      } while (!0);
      Q === null && (x = Z),
        (h.baseState = x),
        (h.firstBaseUpdate = z),
        (h.lastBaseUpdate = Q),
        d === null && (h.shared.lanes = 0),
        (gs |= T),
        (e.lanes = T),
        (e.memoizedState = Z);
    }
  }
  function Dg(e, s) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(s);
  }
  function Vg(e, s) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Dg(a[e], s);
  }
  var ca = W(null),
    Uu = W(0);
  function Mg(e, s) {
    (e = Fi), tt(Uu, e), tt(ca, s), (Fi = e | s.baseLanes);
  }
  function af() {
    tt(Uu, Fi), tt(ca, ca.current);
  }
  function of() {
    (Fi = Uu.current), at(ca), at(Uu);
  }
  var us = 0,
    Ct = null,
    Wt = null,
    Se = null,
    Bu = !1,
    ha = !1,
    _r = !1,
    zu = 0,
    qo = 0,
    fa = null,
    _S = 0;
  function ye() {
    throw Error(r(321));
  }
  function lf(e, s) {
    if (s === null) return !1;
    for (var a = 0; a < s.length && a < e.length; a++)
      if (!Tn(e[a], s[a])) return !1;
    return !0;
  }
  function uf(e, s, a, l, h, d) {
    return (
      (us = d),
      (Ct = s),
      (s.memoizedState = null),
      (s.updateQueue = null),
      (s.lanes = 0),
      (K.H = e === null || e.memoizedState === null ? my : py),
      (_r = !1),
      (d = a(l, h)),
      (_r = !1),
      ha && (d = Ig(s, a, l, h)),
      Og(e),
      d
    );
  }
  function Og(e) {
    K.H = Ku;
    var s = Wt !== null && Wt.next !== null;
    if (((us = 0), (Se = Wt = Ct = null), (Bu = !1), (qo = 0), (fa = null), s))
      throw Error(r(300));
    e === null ||
      ke ||
      ((e = e.dependencies), e !== null && Iu(e) && (ke = !0));
  }
  function Ig(e, s, a, l) {
    Ct = e;
    var h = 0;
    do {
      if ((ha && (fa = null), (qo = 0), (ha = !1), 25 <= h))
        throw Error(r(301));
      if (((h += 1), (Se = Wt = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (K.H = RS), (d = s(a, l));
    } while (ha);
    return d;
  }
  function TS() {
    var e = K.H,
      s = e.useState()[0];
    return (
      (s = typeof s.then == "function" ? Ho(s) : s),
      (e = e.useState()[0]),
      (Wt !== null ? Wt.memoizedState : null) !== e && (Ct.flags |= 1024),
      s
    );
  }
  function cf() {
    var e = zu !== 0;
    return (zu = 0), e;
  }
  function hf(e, s, a) {
    (s.updateQueue = e.updateQueue), (s.flags &= -2053), (e.lanes &= ~a);
  }
  function ff(e) {
    if (Bu) {
      for (e = e.memoizedState; e !== null; ) {
        var s = e.queue;
        s !== null && (s.pending = null), (e = e.next);
      }
      Bu = !1;
    }
    (us = 0), (Se = Wt = Ct = null), (ha = !1), (qo = zu = 0), (fa = null);
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Se === null ? (Ct.memoizedState = Se = e) : (Se = Se.next = e), Se;
  }
  function we() {
    if (Wt === null) {
      var e = Ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Wt.next;
    var s = Se === null ? Ct.memoizedState : Se.next;
    if (s !== null) (Se = s), (Wt = e);
    else {
      if (e === null)
        throw Ct.alternate === null ? Error(r(467)) : Error(r(310));
      (Wt = e),
        (e = {
          memoizedState: Wt.memoizedState,
          baseState: Wt.baseState,
          baseQueue: Wt.baseQueue,
          queue: Wt.queue,
          next: null,
        }),
        Se === null ? (Ct.memoizedState = Se = e) : (Se = Se.next = e);
    }
    return Se;
  }
  function df() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ho(e) {
    var s = qo;
    return (
      (qo += 1),
      fa === null && (fa = []),
      (e = Rg(fa, e, s)),
      (s = Ct),
      (Se === null ? s.memoizedState : Se.next) === null &&
        ((s = s.alternate),
        (K.H = s === null || s.memoizedState === null ? my : py)),
      e
    );
  }
  function ju(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ho(e);
      if (e.$$typeof === nt) return Ze(e);
    }
    throw Error(r(438, String(e)));
  }
  function mf(e) {
    var s = null,
      a = Ct.updateQueue;
    if ((a !== null && (s = a.memoCache), s == null)) {
      var l = Ct.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (s = {
              data: l.data.map(function (h) {
                return h.slice();
              }),
              index: 0,
            })));
    }
    if (
      (s == null && (s = { data: [], index: 0 }),
      a === null && ((a = df()), (Ct.updateQueue = a)),
      (a.memoCache = s),
      (a = s.data[s.index]),
      a === void 0)
    )
      for (a = s.data[s.index] = Array(e), l = 0; l < e; l++) a[l] = O;
    return s.index++, a;
  }
  function Bi(e, s) {
    return typeof s == "function" ? s(e) : s;
  }
  function qu(e) {
    var s = we();
    return pf(s, Wt, e);
  }
  function pf(e, s, a) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var h = e.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (h !== null) {
        var T = h.next;
        (h.next = d.next), (d.next = T);
      }
      (s.baseQueue = h = d), (l.pending = null);
    }
    if (((d = e.baseState), h === null)) e.memoizedState = d;
    else {
      s = h.next;
      var b = (T = null),
        x = null,
        z = s,
        Q = !1;
      do {
        var Z = z.lane & -536870913;
        if (Z !== z.lane ? (Ut & Z) === Z : (us & Z) === Z) {
          var j = z.revertLane;
          if (j === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              Z === la && (Q = !0);
          else if ((us & j) === j) {
            (z = z.next), j === la && (Q = !0);
            continue;
          } else
            (Z = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              x === null ? ((b = x = Z), (T = d)) : (x = x.next = Z),
              (Ct.lanes |= j),
              (gs |= j);
          (Z = z.action),
            _r && a(d, Z),
            (d = z.hasEagerState ? z.eagerState : a(d, Z));
        } else
          (j = {
            lane: Z,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            x === null ? ((b = x = j), (T = d)) : (x = x.next = j),
            (Ct.lanes |= Z),
            (gs |= Z);
        z = z.next;
      } while (z !== null && z !== s);
      if (
        (x === null ? (T = d) : (x.next = b),
        !Tn(d, e.memoizedState) && ((ke = !0), Q && ((a = ua), a !== null)))
      )
        throw a;
      (e.memoizedState = d),
        (e.baseState = T),
        (e.baseQueue = x),
        (l.lastRenderedState = d);
    }
    return h === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function gf(e) {
    var s = we(),
      a = s.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      h = a.pending,
      d = s.memoizedState;
    if (h !== null) {
      a.pending = null;
      var T = (h = h.next);
      do (d = e(d, T.action)), (T = T.next);
      while (T !== h);
      Tn(d, s.memoizedState) || (ke = !0),
        (s.memoizedState = d),
        s.baseQueue === null && (s.baseState = d),
        (a.lastRenderedState = d);
    }
    return [d, l];
  }
  function Ng(e, s, a) {
    var l = Ct,
      h = we(),
      d = Ft;
    if (d) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = s();
    var T = !Tn((Wt || h).memoizedState, a);
    T && ((h.memoizedState = a), (ke = !0)), (h = h.queue);
    var b = kg.bind(null, l, h, e);
    if (
      (Go(2048, 8, b, [e]),
      h.getSnapshot !== s || T || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        da(9, Hu(), Lg.bind(null, l, h, a, s), null),
        ie === null)
      )
        throw Error(r(349));
      d || (us & 124) !== 0 || Pg(l, s, a);
    }
    return a;
  }
  function Pg(e, s, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: s, value: a }),
      (s = Ct.updateQueue),
      s === null
        ? ((s = df()), (Ct.updateQueue = s), (s.stores = [e]))
        : ((a = s.stores), a === null ? (s.stores = [e]) : a.push(e));
  }
  function Lg(e, s, a, l) {
    (s.value = a), (s.getSnapshot = l), Ug(s) && Bg(e);
  }
  function kg(e, s, a) {
    return a(function () {
      Ug(s) && Bg(e);
    });
  }
  function Ug(e) {
    var s = e.getSnapshot;
    e = e.value;
    try {
      var a = s();
      return !Tn(e, a);
    } catch {
      return !0;
    }
  }
  function Bg(e) {
    var s = sa(e, 2);
    s !== null && Rn(s, e, 2);
  }
  function yf(e) {
    var s = hn();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), _r)) {
        vn(!0);
        try {
          a();
        } finally {
          vn(!1);
        }
      }
    }
    return (
      (s.memoizedState = s.baseState = e),
      (s.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bi,
        lastRenderedState: e,
      }),
      s
    );
  }
  function zg(e, s, a, l) {
    return (e.baseState = a), pf(e, Wt, typeof l == "function" ? l : Bi);
  }
  function ES(e, s, a, l, h) {
    if (Fu(e)) throw Error(r(485));
    if (((e = s.action), e !== null)) {
      var d = {
        payload: h,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (T) {
          d.listeners.push(T);
        },
      };
      K.T !== null ? a(!0) : (d.isTransition = !1),
        l(d),
        (a = s.pending),
        a === null
          ? ((d.next = s.pending = d), jg(s, d))
          : ((d.next = a.next), (s.pending = a.next = d));
    }
  }
  function jg(e, s) {
    var a = s.action,
      l = s.payload,
      h = e.state;
    if (s.isTransition) {
      var d = K.T,
        T = {};
      K.T = T;
      try {
        var b = a(h, l),
          x = K.S;
        x !== null && x(T, b), qg(e, s, b);
      } catch (z) {
        vf(e, s, z);
      } finally {
        K.T = d;
      }
    } else
      try {
        (d = a(h, l)), qg(e, s, d);
      } catch (z) {
        vf(e, s, z);
      }
  }
  function qg(e, s, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Hg(e, s, l);
          },
          function (l) {
            return vf(e, s, l);
          }
        )
      : Hg(e, s, a);
  }
  function Hg(e, s, a) {
    (s.status = "fulfilled"),
      (s.value = a),
      Gg(s),
      (e.state = a),
      (s = e.pending),
      s !== null &&
        ((a = s.next),
        a === s ? (e.pending = null) : ((a = a.next), (s.next = a), jg(e, a)));
  }
  function vf(e, s, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (s.status = "rejected"), (s.reason = a), Gg(s), (s = s.next);
      while (s !== l);
    }
    e.action = null;
  }
  function Gg(e) {
    e = e.listeners;
    for (var s = 0; s < e.length; s++) (0, e[s])();
  }
  function Fg(e, s) {
    return s;
  }
  function Kg(e, s) {
    if (Ft) {
      var a = ie.formState;
      if (a !== null) {
        t: {
          var l = Ct;
          if (Ft) {
            if (fe) {
              e: {
                for (var h = fe, d = li; h.nodeType !== 8; ) {
                  if (!d) {
                    h = null;
                    break e;
                  }
                  if (((h = Xn(h.nextSibling)), h === null)) {
                    h = null;
                    break e;
                  }
                }
                (d = h.data), (h = d === "F!" || d === "F" ? h : null);
              }
              if (h) {
                (fe = Xn(h.nextSibling)), (l = h.data === "F!");
                break t;
              }
            }
            pr(l);
          }
          l = !1;
        }
        l && (s = a[0]);
      }
    }
    return (
      (a = hn()),
      (a.memoizedState = a.baseState = s),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fg,
        lastRenderedState: s,
      }),
      (a.queue = l),
      (a = hy.bind(null, Ct, l)),
      (l.dispatch = a),
      (l = yf(!1)),
      (d = Af.bind(null, Ct, !1, l.queue)),
      (l = hn()),
      (h = { state: s, dispatch: null, action: e, pending: null }),
      (l.queue = h),
      (a = ES.bind(null, Ct, h, d, a)),
      (h.dispatch = a),
      (l.memoizedState = e),
      [s, a, !1]
    );
  }
  function Qg(e) {
    var s = we();
    return Yg(s, Wt, e);
  }
  function Yg(e, s, a) {
    if (
      ((s = pf(e, s, Fg)[0]),
      (e = qu(Bi)[0]),
      typeof s == "object" && s !== null && typeof s.then == "function")
    )
      try {
        var l = Ho(s);
      } catch (T) {
        throw T === ko ? Lu : T;
      }
    else l = s;
    s = we();
    var h = s.queue,
      d = h.dispatch;
    return (
      a !== s.memoizedState &&
        ((Ct.flags |= 2048), da(9, Hu(), bS.bind(null, h, a), null)),
      [l, d, e]
    );
  }
  function bS(e, s) {
    e.action = s;
  }
  function Xg(e) {
    var s = we(),
      a = Wt;
    if (a !== null) return Yg(s, a, e);
    we(), (s = s.memoizedState), (a = we());
    var l = a.queue.dispatch;
    return (a.memoizedState = e), [s, l, !1];
  }
  function da(e, s, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: s, next: null }),
      (s = Ct.updateQueue),
      s === null && ((s = df()), (Ct.updateQueue = s)),
      (a = s.lastEffect),
      a === null
        ? (s.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (s.lastEffect = e)),
      e
    );
  }
  function Hu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Zg() {
    return we().memoizedState;
  }
  function Gu(e, s, a, l) {
    var h = hn();
    (l = l === void 0 ? null : l),
      (Ct.flags |= e),
      (h.memoizedState = da(1 | s, Hu(), a, l));
  }
  function Go(e, s, a, l) {
    var h = we();
    l = l === void 0 ? null : l;
    var d = h.memoizedState.inst;
    Wt !== null && l !== null && lf(l, Wt.memoizedState.deps)
      ? (h.memoizedState = da(s, d, a, l))
      : ((Ct.flags |= e), (h.memoizedState = da(1 | s, d, a, l)));
  }
  function $g(e, s) {
    Gu(8390656, 8, e, s);
  }
  function Jg(e, s) {
    Go(2048, 8, e, s);
  }
  function Wg(e, s) {
    return Go(4, 2, e, s);
  }
  function ty(e, s) {
    return Go(4, 4, e, s);
  }
  function ey(e, s) {
    if (typeof s == "function") {
      e = e();
      var a = s(e);
      return function () {
        typeof a == "function" ? a() : s(null);
      };
    }
    if (s != null)
      return (
        (e = e()),
        (s.current = e),
        function () {
          s.current = null;
        }
      );
  }
  function ny(e, s, a) {
    (a = a != null ? a.concat([e]) : null), Go(4, 4, ey.bind(null, s, e), a);
  }
  function _f() {}
  function iy(e, s) {
    var a = we();
    s = s === void 0 ? null : s;
    var l = a.memoizedState;
    return s !== null && lf(s, l[1]) ? l[0] : ((a.memoizedState = [e, s]), e);
  }
  function sy(e, s) {
    var a = we();
    s = s === void 0 ? null : s;
    var l = a.memoizedState;
    if (s !== null && lf(s, l[1])) return l[0];
    if (((l = e()), _r)) {
      vn(!0);
      try {
        e();
      } finally {
        vn(!1);
      }
    }
    return (a.memoizedState = [l, s]), l;
  }
  function Tf(e, s, a) {
    return a === void 0 || (us & 1073741824) !== 0
      ? (e.memoizedState = s)
      : ((e.memoizedState = a), (e = ov()), (Ct.lanes |= e), (gs |= e), a);
  }
  function ry(e, s, a, l) {
    return Tn(a, s)
      ? a
      : ca.current !== null
      ? ((e = Tf(e, a, l)), Tn(e, s) || (ke = !0), e)
      : (us & 42) === 0
      ? ((ke = !0), (e.memoizedState = a))
      : ((e = ov()), (Ct.lanes |= e), (gs |= e), s);
  }
  function ay(e, s, a, l, h) {
    var d = et.p;
    et.p = d !== 0 && 8 > d ? d : 8;
    var T = K.T,
      b = {};
    (K.T = b), Af(e, !1, s, a);
    try {
      var x = h(),
        z = K.S;
      if (
        (z !== null && z(b, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var Q = vS(x, l);
        Fo(e, s, Q, wn(e));
      } else Fo(e, s, l, wn(e));
    } catch (Z) {
      Fo(e, s, { then: function () {}, status: "rejected", reason: Z }, wn());
    } finally {
      (et.p = d), (K.T = T);
    }
  }
  function AS() {}
  function Ef(e, s, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var h = oy(e).queue;
    ay(
      e,
      h,
      s,
      X,
      a === null
        ? AS
        : function () {
            return ly(e), a(l);
          }
    );
  }
  function oy(e) {
    var s = e.memoizedState;
    if (s !== null) return s;
    s = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bi,
        lastRenderedState: X,
      },
      next: null,
    };
    var a = {};
    return (
      (s.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bi,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = s),
      (e = e.alternate),
      e !== null && (e.memoizedState = s),
      s
    );
  }
  function ly(e) {
    var s = oy(e).next.queue;
    Fo(e, s, {}, wn());
  }
  function bf() {
    return Ze(ul);
  }
  function uy() {
    return we().memoizedState;
  }
  function cy() {
    return we().memoizedState;
  }
  function SS(e) {
    for (var s = e.return; s !== null; ) {
      switch (s.tag) {
        case 24:
        case 3:
          var a = wn();
          e = os(a);
          var l = ls(s, e, a);
          l !== null && (Rn(l, s, a), Bo(l, s, a)),
            (s = { cache: $h() }),
            (e.payload = s);
          return;
      }
      s = s.return;
    }
  }
  function wS(e, s, a) {
    var l = wn();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Fu(e)
        ? fy(s, a)
        : ((a = jh(e, s, a, l)), a !== null && (Rn(a, e, l), dy(a, s, l)));
  }
  function hy(e, s, a) {
    var l = wn();
    Fo(e, s, a, l);
  }
  function Fo(e, s, a, l) {
    var h = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Fu(e)) fy(s, h);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = s.lastRenderedReducer), d !== null)
      )
        try {
          var T = s.lastRenderedState,
            b = d(T, a);
          if (((h.hasEagerState = !0), (h.eagerState = b), Tn(b, T)))
            return Cu(e, s, h, 0), ie === null && xu(), !1;
        } catch {
        } finally {
        }
      if (((a = jh(e, s, h, l)), a !== null))
        return Rn(a, e, l), dy(a, s, l), !0;
    }
    return !1;
  }
  function Af(e, s, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: ed(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fu(e))
    ) {
      if (s) throw Error(r(479));
    } else (s = jh(e, a, l, 2)), s !== null && Rn(s, e, 2);
  }
  function Fu(e) {
    var s = e.alternate;
    return e === Ct || (s !== null && s === Ct);
  }
  function fy(e, s) {
    ha = Bu = !0;
    var a = e.pending;
    a === null ? (s.next = s) : ((s.next = a.next), (a.next = s)),
      (e.pending = s);
  }
  function dy(e, s, a) {
    if ((a & 4194048) !== 0) {
      var l = s.lanes;
      (l &= e.pendingLanes), (a |= l), (s.lanes = a), fo(e, a);
    }
  }
  var Ku = {
      readContext: Ze,
      use: ju,
      useCallback: ye,
      useContext: ye,
      useEffect: ye,
      useImperativeHandle: ye,
      useLayoutEffect: ye,
      useInsertionEffect: ye,
      useMemo: ye,
      useReducer: ye,
      useRef: ye,
      useState: ye,
      useDebugValue: ye,
      useDeferredValue: ye,
      useTransition: ye,
      useSyncExternalStore: ye,
      useId: ye,
      useHostTransitionStatus: ye,
      useFormState: ye,
      useActionState: ye,
      useOptimistic: ye,
      useMemoCache: ye,
      useCacheRefresh: ye,
    },
    my = {
      readContext: Ze,
      use: ju,
      useCallback: function (e, s) {
        return (hn().memoizedState = [e, s === void 0 ? null : s]), e;
      },
      useContext: Ze,
      useEffect: $g,
      useImperativeHandle: function (e, s, a) {
        (a = a != null ? a.concat([e]) : null),
          Gu(4194308, 4, ey.bind(null, s, e), a);
      },
      useLayoutEffect: function (e, s) {
        return Gu(4194308, 4, e, s);
      },
      useInsertionEffect: function (e, s) {
        Gu(4, 2, e, s);
      },
      useMemo: function (e, s) {
        var a = hn();
        s = s === void 0 ? null : s;
        var l = e();
        if (_r) {
          vn(!0);
          try {
            e();
          } finally {
            vn(!1);
          }
        }
        return (a.memoizedState = [l, s]), l;
      },
      useReducer: function (e, s, a) {
        var l = hn();
        if (a !== void 0) {
          var h = a(s);
          if (_r) {
            vn(!0);
            try {
              a(s);
            } finally {
              vn(!1);
            }
          }
        } else h = s;
        return (
          (l.memoizedState = l.baseState = h),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: h,
          }),
          (l.queue = e),
          (e = e.dispatch = wS.bind(null, Ct, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var s = hn();
        return (e = { current: e }), (s.memoizedState = e);
      },
      useState: function (e) {
        e = yf(e);
        var s = e.queue,
          a = hy.bind(null, Ct, s);
        return (s.dispatch = a), [e.memoizedState, a];
      },
      useDebugValue: _f,
      useDeferredValue: function (e, s) {
        var a = hn();
        return Tf(a, e, s);
      },
      useTransition: function () {
        var e = yf(!1);
        return (
          (e = ay.bind(null, Ct, e.queue, !0, !1)),
          (hn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, s, a) {
        var l = Ct,
          h = hn();
        if (Ft) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = s()), ie === null)) throw Error(r(349));
          (Ut & 124) !== 0 || Pg(l, s, a);
        }
        h.memoizedState = a;
        var d = { value: a, getSnapshot: s };
        return (
          (h.queue = d),
          $g(kg.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          da(9, Hu(), Lg.bind(null, l, d, a, s), null),
          a
        );
      },
      useId: function () {
        var e = hn(),
          s = ie.identifierPrefix;
        if (Ft) {
          var a = Li,
            l = Pi;
          (a = (l & ~(1 << (32 - Xe(l) - 1))).toString(32) + a),
            (s = "«" + s + "R" + a),
            (a = zu++),
            0 < a && (s += "H" + a.toString(32)),
            (s += "»");
        } else (a = _S++), (s = "«" + s + "r" + a.toString(32) + "»");
        return (e.memoizedState = s);
      },
      useHostTransitionStatus: bf,
      useFormState: Kg,
      useActionState: Kg,
      useOptimistic: function (e) {
        var s = hn();
        s.memoizedState = s.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (s.queue = a),
          (s = Af.bind(null, Ct, !0, a)),
          (a.dispatch = s),
          [e, s]
        );
      },
      useMemoCache: mf,
      useCacheRefresh: function () {
        return (hn().memoizedState = SS.bind(null, Ct));
      },
    },
    py = {
      readContext: Ze,
      use: ju,
      useCallback: iy,
      useContext: Ze,
      useEffect: Jg,
      useImperativeHandle: ny,
      useInsertionEffect: Wg,
      useLayoutEffect: ty,
      useMemo: sy,
      useReducer: qu,
      useRef: Zg,
      useState: function () {
        return qu(Bi);
      },
      useDebugValue: _f,
      useDeferredValue: function (e, s) {
        var a = we();
        return ry(a, Wt.memoizedState, e, s);
      },
      useTransition: function () {
        var e = qu(Bi)[0],
          s = we().memoizedState;
        return [typeof e == "boolean" ? e : Ho(e), s];
      },
      useSyncExternalStore: Ng,
      useId: uy,
      useHostTransitionStatus: bf,
      useFormState: Qg,
      useActionState: Qg,
      useOptimistic: function (e, s) {
        var a = we();
        return zg(a, Wt, e, s);
      },
      useMemoCache: mf,
      useCacheRefresh: cy,
    },
    RS = {
      readContext: Ze,
      use: ju,
      useCallback: iy,
      useContext: Ze,
      useEffect: Jg,
      useImperativeHandle: ny,
      useInsertionEffect: Wg,
      useLayoutEffect: ty,
      useMemo: sy,
      useReducer: gf,
      useRef: Zg,
      useState: function () {
        return gf(Bi);
      },
      useDebugValue: _f,
      useDeferredValue: function (e, s) {
        var a = we();
        return Wt === null ? Tf(a, e, s) : ry(a, Wt.memoizedState, e, s);
      },
      useTransition: function () {
        var e = gf(Bi)[0],
          s = we().memoizedState;
        return [typeof e == "boolean" ? e : Ho(e), s];
      },
      useSyncExternalStore: Ng,
      useId: uy,
      useHostTransitionStatus: bf,
      useFormState: Xg,
      useActionState: Xg,
      useOptimistic: function (e, s) {
        var a = we();
        return Wt !== null
          ? zg(a, Wt, e, s)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: mf,
      useCacheRefresh: cy,
    },
    ma = null,
    Ko = 0;
  function Qu(e) {
    var s = Ko;
    return (Ko += 1), ma === null && (ma = []), Rg(ma, e, s);
  }
  function Qo(e, s) {
    (s = s.props.ref), (e.ref = s !== void 0 ? s : null);
  }
  function Yu(e, s) {
    throw s.$$typeof === E
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(s)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : e
          )
        ));
  }
  function gy(e) {
    var s = e._init;
    return s(e._payload);
  }
  function yy(e) {
    function s(L, I) {
      if (e) {
        var U = L.deletions;
        U === null ? ((L.deletions = [I]), (L.flags |= 16)) : U.push(I);
      }
    }
    function a(L, I) {
      if (!e) return null;
      for (; I !== null; ) s(L, I), (I = I.sibling);
      return null;
    }
    function l(L) {
      for (var I = new Map(); L !== null; )
        L.key !== null ? I.set(L.key, L) : I.set(L.index, L), (L = L.sibling);
      return I;
    }
    function h(L, I) {
      return (L = Ni(L, I)), (L.index = 0), (L.sibling = null), L;
    }
    function d(L, I, U) {
      return (
        (L.index = U),
        e
          ? ((U = L.alternate),
            U !== null
              ? ((U = U.index), U < I ? ((L.flags |= 67108866), I) : U)
              : ((L.flags |= 67108866), I))
          : ((L.flags |= 1048576), I)
      );
    }
    function T(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function b(L, I, U, Y) {
      return I === null || I.tag !== 6
        ? ((I = Hh(U, L.mode, Y)), (I.return = L), I)
        : ((I = h(I, U)), (I.return = L), I);
    }
    function x(L, I, U, Y) {
      var ht = U.type;
      return ht === B
        ? Q(L, I, U.props.children, Y, U.key)
        : I !== null &&
          (I.elementType === ht ||
            (typeof ht == "object" &&
              ht !== null &&
              ht.$$typeof === A &&
              gy(ht) === I.type))
        ? ((I = h(I, U.props)), Qo(I, U), (I.return = L), I)
        : ((I = Vu(U.type, U.key, U.props, null, L.mode, Y)),
          Qo(I, U),
          (I.return = L),
          I);
    }
    function z(L, I, U, Y) {
      return I === null ||
        I.tag !== 4 ||
        I.stateNode.containerInfo !== U.containerInfo ||
        I.stateNode.implementation !== U.implementation
        ? ((I = Gh(U, L.mode, Y)), (I.return = L), I)
        : ((I = h(I, U.children || [])), (I.return = L), I);
    }
    function Q(L, I, U, Y, ht) {
      return I === null || I.tag !== 7
        ? ((I = hr(U, L.mode, Y, ht)), (I.return = L), I)
        : ((I = h(I, U)), (I.return = L), I);
    }
    function Z(L, I, U) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return (I = Hh("" + I, L.mode, U)), (I.return = L), I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case w:
            return (
              (U = Vu(I.type, I.key, I.props, null, L.mode, U)),
              Qo(U, I),
              (U.return = L),
              U
            );
          case D:
            return (I = Gh(I, L.mode, U)), (I.return = L), I;
          case A:
            var Y = I._init;
            return (I = Y(I._payload)), Z(L, I, U);
        }
        if (Kt(I) || P(I))
          return (I = hr(I, L.mode, U, null)), (I.return = L), I;
        if (typeof I.then == "function") return Z(L, Qu(I), U);
        if (I.$$typeof === nt) return Z(L, Nu(L, I), U);
        Yu(L, I);
      }
      return null;
    }
    function j(L, I, U, Y) {
      var ht = I !== null ? I.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return ht !== null ? null : b(L, I, "" + U, Y);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case w:
            return U.key === ht ? x(L, I, U, Y) : null;
          case D:
            return U.key === ht ? z(L, I, U, Y) : null;
          case A:
            return (ht = U._init), (U = ht(U._payload)), j(L, I, U, Y);
        }
        if (Kt(U) || P(U)) return ht !== null ? null : Q(L, I, U, Y, null);
        if (typeof U.then == "function") return j(L, I, Qu(U), Y);
        if (U.$$typeof === nt) return j(L, I, Nu(L, U), Y);
        Yu(L, U);
      }
      return null;
    }
    function q(L, I, U, Y, ht) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return (L = L.get(U) || null), b(I, L, "" + Y, ht);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case w:
            return (
              (L = L.get(Y.key === null ? U : Y.key) || null), x(I, L, Y, ht)
            );
          case D:
            return (
              (L = L.get(Y.key === null ? U : Y.key) || null), z(I, L, Y, ht)
            );
          case A:
            var Mt = Y._init;
            return (Y = Mt(Y._payload)), q(L, I, U, Y, ht);
        }
        if (Kt(Y) || P(Y)) return (L = L.get(U) || null), Q(I, L, Y, ht, null);
        if (typeof Y.then == "function") return q(L, I, U, Qu(Y), ht);
        if (Y.$$typeof === nt) return q(L, I, U, Nu(I, Y), ht);
        Yu(I, Y);
      }
      return null;
    }
    function At(L, I, U, Y) {
      for (
        var ht = null, Mt = null, gt = I, vt = (I = 0), Be = null;
        gt !== null && vt < U.length;
        vt++
      ) {
        gt.index > vt ? ((Be = gt), (gt = null)) : (Be = gt.sibling);
        var Gt = j(L, gt, U[vt], Y);
        if (Gt === null) {
          gt === null && (gt = Be);
          break;
        }
        e && gt && Gt.alternate === null && s(L, gt),
          (I = d(Gt, I, vt)),
          Mt === null ? (ht = Gt) : (Mt.sibling = Gt),
          (Mt = Gt),
          (gt = Be);
      }
      if (vt === U.length) return a(L, gt), Ft && dr(L, vt), ht;
      if (gt === null) {
        for (; vt < U.length; vt++)
          (gt = Z(L, U[vt], Y)),
            gt !== null &&
              ((I = d(gt, I, vt)),
              Mt === null ? (ht = gt) : (Mt.sibling = gt),
              (Mt = gt));
        return Ft && dr(L, vt), ht;
      }
      for (gt = l(gt); vt < U.length; vt++)
        (Be = q(gt, L, vt, U[vt], Y)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              gt.delete(Be.key === null ? vt : Be.key),
            (I = d(Be, I, vt)),
            Mt === null ? (ht = Be) : (Mt.sibling = Be),
            (Mt = Be));
      return (
        e &&
          gt.forEach(function (ws) {
            return s(L, ws);
          }),
        Ft && dr(L, vt),
        ht
      );
    }
    function yt(L, I, U, Y) {
      if (U == null) throw Error(r(151));
      for (
        var ht = null,
          Mt = null,
          gt = I,
          vt = (I = 0),
          Be = null,
          Gt = U.next();
        gt !== null && !Gt.done;
        vt++, Gt = U.next()
      ) {
        gt.index > vt ? ((Be = gt), (gt = null)) : (Be = gt.sibling);
        var ws = j(L, gt, Gt.value, Y);
        if (ws === null) {
          gt === null && (gt = Be);
          break;
        }
        e && gt && ws.alternate === null && s(L, gt),
          (I = d(ws, I, vt)),
          Mt === null ? (ht = ws) : (Mt.sibling = ws),
          (Mt = ws),
          (gt = Be);
      }
      if (Gt.done) return a(L, gt), Ft && dr(L, vt), ht;
      if (gt === null) {
        for (; !Gt.done; vt++, Gt = U.next())
          (Gt = Z(L, Gt.value, Y)),
            Gt !== null &&
              ((I = d(Gt, I, vt)),
              Mt === null ? (ht = Gt) : (Mt.sibling = Gt),
              (Mt = Gt));
        return Ft && dr(L, vt), ht;
      }
      for (gt = l(gt); !Gt.done; vt++, Gt = U.next())
        (Gt = q(gt, L, vt, Gt.value, Y)),
          Gt !== null &&
            (e &&
              Gt.alternate !== null &&
              gt.delete(Gt.key === null ? vt : Gt.key),
            (I = d(Gt, I, vt)),
            Mt === null ? (ht = Gt) : (Mt.sibling = Gt),
            (Mt = Gt));
      return (
        e &&
          gt.forEach(function (x1) {
            return s(L, x1);
          }),
        Ft && dr(L, vt),
        ht
      );
    }
    function ee(L, I, U, Y) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === B &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case w:
            t: {
              for (var ht = U.key; I !== null; ) {
                if (I.key === ht) {
                  if (((ht = U.type), ht === B)) {
                    if (I.tag === 7) {
                      a(L, I.sibling),
                        (Y = h(I, U.props.children)),
                        (Y.return = L),
                        (L = Y);
                      break t;
                    }
                  } else if (
                    I.elementType === ht ||
                    (typeof ht == "object" &&
                      ht !== null &&
                      ht.$$typeof === A &&
                      gy(ht) === I.type)
                  ) {
                    a(L, I.sibling),
                      (Y = h(I, U.props)),
                      Qo(Y, U),
                      (Y.return = L),
                      (L = Y);
                    break t;
                  }
                  a(L, I);
                  break;
                } else s(L, I);
                I = I.sibling;
              }
              U.type === B
                ? ((Y = hr(U.props.children, L.mode, Y, U.key)),
                  (Y.return = L),
                  (L = Y))
                : ((Y = Vu(U.type, U.key, U.props, null, L.mode, Y)),
                  Qo(Y, U),
                  (Y.return = L),
                  (L = Y));
            }
            return T(L);
          case D:
            t: {
              for (ht = U.key; I !== null; ) {
                if (I.key === ht)
                  if (
                    I.tag === 4 &&
                    I.stateNode.containerInfo === U.containerInfo &&
                    I.stateNode.implementation === U.implementation
                  ) {
                    a(L, I.sibling),
                      (Y = h(I, U.children || [])),
                      (Y.return = L),
                      (L = Y);
                    break t;
                  } else {
                    a(L, I);
                    break;
                  }
                else s(L, I);
                I = I.sibling;
              }
              (Y = Gh(U, L.mode, Y)), (Y.return = L), (L = Y);
            }
            return T(L);
          case A:
            return (ht = U._init), (U = ht(U._payload)), ee(L, I, U, Y);
        }
        if (Kt(U)) return At(L, I, U, Y);
        if (P(U)) {
          if (((ht = P(U)), typeof ht != "function")) throw Error(r(150));
          return (U = ht.call(U)), yt(L, I, U, Y);
        }
        if (typeof U.then == "function") return ee(L, I, Qu(U), Y);
        if (U.$$typeof === nt) return ee(L, I, Nu(L, U), Y);
        Yu(L, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          I !== null && I.tag === 6
            ? (a(L, I.sibling), (Y = h(I, U)), (Y.return = L), (L = Y))
            : (a(L, I), (Y = Hh(U, L.mode, Y)), (Y.return = L), (L = Y)),
          T(L))
        : a(L, I);
    }
    return function (L, I, U, Y) {
      try {
        Ko = 0;
        var ht = ee(L, I, U, Y);
        return (ma = null), ht;
      } catch (gt) {
        if (gt === ko || gt === Lu) throw gt;
        var Mt = En(29, gt, null, L.mode);
        return (Mt.lanes = Y), (Mt.return = L), Mt;
      } finally {
      }
    };
  }
  var pa = yy(!0),
    vy = yy(!1),
    Un = W(null),
    ui = null;
  function cs(e) {
    var s = e.alternate;
    tt(Me, Me.current & 1),
      tt(Un, e),
      ui === null &&
        (s === null || ca.current !== null || s.memoizedState !== null) &&
        (ui = e);
  }
  function _y(e) {
    if (e.tag === 22) {
      if ((tt(Me, Me.current), tt(Un, e), ui === null)) {
        var s = e.alternate;
        s !== null && s.memoizedState !== null && (ui = e);
      }
    } else hs();
  }
  function hs() {
    tt(Me, Me.current), tt(Un, Un.current);
  }
  function zi(e) {
    at(Un), ui === e && (ui = null), at(Me);
  }
  var Me = W(0);
  function Xu(e) {
    for (var s = e; s !== null; ) {
      if (s.tag === 13) {
        var a = s.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || dd(a))
        )
          return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === e) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === e) return null;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
    return null;
  }
  function Sf(e, s, a, l) {
    (s = e.memoizedState),
      (a = a(l, s)),
      (a = a == null ? s : v({}, s, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var wf = {
    enqueueSetState: function (e, s, a) {
      e = e._reactInternals;
      var l = wn(),
        h = os(l);
      (h.payload = s),
        a != null && (h.callback = a),
        (s = ls(e, h, l)),
        s !== null && (Rn(s, e, l), Bo(s, e, l));
    },
    enqueueReplaceState: function (e, s, a) {
      e = e._reactInternals;
      var l = wn(),
        h = os(l);
      (h.tag = 1),
        (h.payload = s),
        a != null && (h.callback = a),
        (s = ls(e, h, l)),
        s !== null && (Rn(s, e, l), Bo(s, e, l));
    },
    enqueueForceUpdate: function (e, s) {
      e = e._reactInternals;
      var a = wn(),
        l = os(a);
      (l.tag = 2),
        s != null && (l.callback = s),
        (s = ls(e, l, a)),
        s !== null && (Rn(s, e, a), Bo(s, e, a));
    },
  };
  function Ty(e, s, a, l, h, d, T) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, d, T)
        : s.prototype && s.prototype.isPureReactComponent
        ? !Do(a, l) || !Do(h, d)
        : !0
    );
  }
  function Ey(e, s, a, l) {
    (e = s.state),
      typeof s.componentWillReceiveProps == "function" &&
        s.componentWillReceiveProps(a, l),
      typeof s.UNSAFE_componentWillReceiveProps == "function" &&
        s.UNSAFE_componentWillReceiveProps(a, l),
      s.state !== e && wf.enqueueReplaceState(s, s.state, null);
  }
  function Tr(e, s) {
    var a = s;
    if ("ref" in s) {
      a = {};
      for (var l in s) l !== "ref" && (a[l] = s[l]);
    }
    if ((e = e.defaultProps)) {
      a === s && (a = v({}, a));
      for (var h in e) a[h] === void 0 && (a[h] = e[h]);
    }
    return a;
  }
  var Zu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var s = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(s)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function by(e) {
    Zu(e);
  }
  function Ay(e) {
    console.error(e);
  }
  function Sy(e) {
    Zu(e);
  }
  function $u(e, s) {
    try {
      var a = e.onUncaughtError;
      a(s.value, { componentStack: s.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function wy(e, s, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: s.tag === 1 ? s.stateNode : null,
      });
    } catch (h) {
      setTimeout(function () {
        throw h;
      });
    }
  }
  function Rf(e, s, a) {
    return (
      (a = os(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        $u(e, s);
      }),
      a
    );
  }
  function Ry(e) {
    return (e = os(e)), (e.tag = 3), e;
  }
  function xy(e, s, a, l) {
    var h = a.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var d = l.value;
      (e.payload = function () {
        return h(d);
      }),
        (e.callback = function () {
          wy(s, a, l);
        });
    }
    var T = a.stateNode;
    T !== null &&
      typeof T.componentDidCatch == "function" &&
      (e.callback = function () {
        wy(s, a, l),
          typeof h != "function" &&
            (ys === null ? (ys = new Set([this])) : ys.add(this));
        var b = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function xS(e, s, a, l, h) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((s = a.alternate),
        s !== null && No(s, a, h, !0),
        (a = Un.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              ui === null ? Zf() : a.alternate === null && de === 0 && (de = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = h),
              l === tf
                ? (a.flags |= 16384)
                : ((s = a.updateQueue),
                  s === null ? (a.updateQueue = new Set([l])) : s.add(l),
                  Jf(e, l, h)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === tf
                ? (a.flags |= 16384)
                : ((s = a.updateQueue),
                  s === null
                    ? ((s = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = s))
                    : ((a = s.retryQueue),
                      a === null ? (s.retryQueue = new Set([l])) : a.add(l)),
                  Jf(e, l, h)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return Jf(e, l, h), Zf(), !1;
    }
    if (Ft)
      return (
        (s = Un.current),
        s !== null
          ? ((s.flags & 65536) === 0 && (s.flags |= 256),
            (s.flags |= 65536),
            (s.lanes = h),
            l !== Qh && ((e = Error(r(422), { cause: l })), Io(Nn(e, a))))
          : (l !== Qh && ((s = Error(r(423), { cause: l })), Io(Nn(s, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (h &= -h),
            (e.lanes |= h),
            (l = Nn(l, a)),
            (h = Rf(e.stateNode, l, h)),
            sf(e, h),
            de !== 4 && (de = 2)),
        !1
      );
    var d = Error(r(520), { cause: l });
    if (
      ((d = Nn(d, a)),
      tl === null ? (tl = [d]) : tl.push(d),
      de !== 4 && (de = 2),
      s === null)
    )
      return !0;
    (l = Nn(l, a)), (a = s);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = h & -h),
            (a.lanes |= e),
            (e = Rf(a.stateNode, l, e)),
            sf(a, e),
            !1
          );
        case 1:
          if (
            ((s = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof s.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (ys === null || !ys.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (h &= -h),
              (a.lanes |= h),
              (h = Ry(h)),
              xy(h, e, a, l),
              sf(a, h),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Cy = Error(r(461)),
    ke = !1;
  function He(e, s, a, l) {
    s.child = e === null ? vy(s, null, a, l) : pa(s, e.child, a, l);
  }
  function Dy(e, s, a, l, h) {
    a = a.render;
    var d = s.ref;
    if ("ref" in l) {
      var T = {};
      for (var b in l) b !== "ref" && (T[b] = l[b]);
    } else T = l;
    return (
      yr(s),
      (l = uf(e, s, a, T, d, h)),
      (b = cf()),
      e !== null && !ke
        ? (hf(e, s, h), ji(e, s, h))
        : (Ft && b && Fh(s), (s.flags |= 1), He(e, s, l, h), s.child)
    );
  }
  function Vy(e, s, a, l, h) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" &&
        !qh(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((s.tag = 15), (s.type = d), My(e, s, d, l, h))
        : ((e = Vu(a.type, null, l, s, s.mode, h)),
          (e.ref = s.ref),
          (e.return = s),
          (s.child = e));
    }
    if (((d = e.child), !Nf(e, h))) {
      var T = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Do), a(T, l) && e.ref === s.ref)
      )
        return ji(e, s, h);
    }
    return (
      (s.flags |= 1),
      (e = Ni(d, l)),
      (e.ref = s.ref),
      (e.return = s),
      (s.child = e)
    );
  }
  function My(e, s, a, l, h) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Do(d, l) && e.ref === s.ref)
        if (((ke = !1), (s.pendingProps = l = d), Nf(e, h)))
          (e.flags & 131072) !== 0 && (ke = !0);
        else return (s.lanes = e.lanes), ji(e, s, h);
    }
    return xf(e, s, a, l, h);
  }
  function Oy(e, s, a) {
    var l = s.pendingProps,
      h = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((s.flags & 128) !== 0) {
        if (((l = d !== null ? d.baseLanes | a : a), e !== null)) {
          for (h = s.child = e.child, d = 0; h !== null; )
            (d = d | h.lanes | h.childLanes), (h = h.sibling);
          s.childLanes = d & ~l;
        } else (s.childLanes = 0), (s.child = null);
        return Iy(e, s, l, a);
      }
      if ((a & 536870912) !== 0)
        (s.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pu(s, d !== null ? d.cachePool : null),
          d !== null ? Mg(s, d) : af(),
          _y(s);
      else
        return (
          (s.lanes = s.childLanes = 536870912),
          Iy(e, s, d !== null ? d.baseLanes | a : a, a)
        );
    } else
      d !== null
        ? (Pu(s, d.cachePool), Mg(s, d), hs(), (s.memoizedState = null))
        : (e !== null && Pu(s, null), af(), hs());
    return He(e, s, h, a), s.child;
  }
  function Iy(e, s, a, l) {
    var h = Wh();
    return (
      (h = h === null ? null : { parent: Ve._currentValue, pool: h }),
      (s.memoizedState = { baseLanes: a, cachePool: h }),
      e !== null && Pu(s, null),
      af(),
      _y(s),
      e !== null && No(e, s, l, !0),
      null
    );
  }
  function Ju(e, s) {
    var a = s.ref;
    if (a === null) e !== null && e.ref !== null && (s.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (e === null || e.ref !== a) && (s.flags |= 4194816);
    }
  }
  function xf(e, s, a, l, h) {
    return (
      yr(s),
      (a = uf(e, s, a, l, void 0, h)),
      (l = cf()),
      e !== null && !ke
        ? (hf(e, s, h), ji(e, s, h))
        : (Ft && l && Fh(s), (s.flags |= 1), He(e, s, a, h), s.child)
    );
  }
  function Ny(e, s, a, l, h, d) {
    return (
      yr(s),
      (s.updateQueue = null),
      (a = Ig(s, l, a, h)),
      Og(e),
      (l = cf()),
      e !== null && !ke
        ? (hf(e, s, d), ji(e, s, d))
        : (Ft && l && Fh(s), (s.flags |= 1), He(e, s, a, d), s.child)
    );
  }
  function Py(e, s, a, l, h) {
    if ((yr(s), s.stateNode === null)) {
      var d = ra,
        T = a.contextType;
      typeof T == "object" && T !== null && (d = Ze(T)),
        (d = new a(l, d)),
        (s.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = wf),
        (s.stateNode = d),
        (d._reactInternals = s),
        (d = s.stateNode),
        (d.props = l),
        (d.state = s.memoizedState),
        (d.refs = {}),
        ef(s),
        (T = a.contextType),
        (d.context = typeof T == "object" && T !== null ? Ze(T) : ra),
        (d.state = s.memoizedState),
        (T = a.getDerivedStateFromProps),
        typeof T == "function" && (Sf(s, a, T, l), (d.state = s.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((T = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          T !== d.state && wf.enqueueReplaceState(d, d.state, null),
          jo(s, l, d, h),
          zo(),
          (d.state = s.memoizedState)),
        typeof d.componentDidMount == "function" && (s.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      d = s.stateNode;
      var b = s.memoizedProps,
        x = Tr(a, b);
      d.props = x;
      var z = d.context,
        Q = a.contextType;
      (T = ra), typeof Q == "object" && Q !== null && (T = Ze(Q));
      var Z = a.getDerivedStateFromProps;
      (Q =
        typeof Z == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (b = s.pendingProps !== b),
        Q ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((b || z !== T) && Ey(s, d, l, T)),
        (as = !1);
      var j = s.memoizedState;
      (d.state = j),
        jo(s, l, d, h),
        zo(),
        (z = s.memoizedState),
        b || j !== z || as
          ? (typeof Z == "function" && (Sf(s, a, Z, l), (z = s.memoizedState)),
            (x = as || Ty(s, a, x, l, j, z, T))
              ? (Q ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (s.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (s.flags |= 4194308),
                (s.memoizedProps = l),
                (s.memoizedState = z)),
            (d.props = l),
            (d.state = z),
            (d.context = T),
            (l = x))
          : (typeof d.componentDidMount == "function" && (s.flags |= 4194308),
            (l = !1));
    } else {
      (d = s.stateNode),
        nf(e, s),
        (T = s.memoizedProps),
        (Q = Tr(a, T)),
        (d.props = Q),
        (Z = s.pendingProps),
        (j = d.context),
        (z = a.contextType),
        (x = ra),
        typeof z == "object" && z !== null && (x = Ze(z)),
        (b = a.getDerivedStateFromProps),
        (z =
          typeof b == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((T !== Z || j !== x) && Ey(s, d, l, x)),
        (as = !1),
        (j = s.memoizedState),
        (d.state = j),
        jo(s, l, d, h),
        zo();
      var q = s.memoizedState;
      T !== Z ||
      j !== q ||
      as ||
      (e !== null && e.dependencies !== null && Iu(e.dependencies))
        ? (typeof b == "function" && (Sf(s, a, b, l), (q = s.memoizedState)),
          (Q =
            as ||
            Ty(s, a, Q, l, j, q, x) ||
            (e !== null && e.dependencies !== null && Iu(e.dependencies)))
            ? (z ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(l, q, x),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(l, q, x)),
              typeof d.componentDidUpdate == "function" && (s.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (s.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (T === e.memoizedProps && j === e.memoizedState) ||
                (s.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (T === e.memoizedProps && j === e.memoizedState) ||
                (s.flags |= 1024),
              (s.memoizedProps = l),
              (s.memoizedState = q)),
          (d.props = l),
          (d.state = q),
          (d.context = x),
          (l = Q))
        : (typeof d.componentDidUpdate != "function" ||
            (T === e.memoizedProps && j === e.memoizedState) ||
            (s.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (T === e.memoizedProps && j === e.memoizedState) ||
            (s.flags |= 1024),
          (l = !1));
    }
    return (
      (d = l),
      Ju(e, s),
      (l = (s.flags & 128) !== 0),
      d || l
        ? ((d = s.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (s.flags |= 1),
          e !== null && l
            ? ((s.child = pa(s, e.child, null, h)),
              (s.child = pa(s, null, a, h)))
            : He(e, s, a, h),
          (s.memoizedState = d.state),
          (e = s.child))
        : (e = ji(e, s, h)),
      e
    );
  }
  function Ly(e, s, a, l) {
    return Oo(), (s.flags |= 256), He(e, s, a, l), s.child;
  }
  var Cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Df(e) {
    return { baseLanes: e, cachePool: Ag() };
  }
  function Vf(e, s, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), s && (e |= Bn), e;
  }
  function ky(e, s, a) {
    var l = s.pendingProps,
      h = !1,
      d = (s.flags & 128) !== 0,
      T;
    if (
      ((T = d) ||
        (T =
          e !== null && e.memoizedState === null ? !1 : (Me.current & 2) !== 0),
      T && ((h = !0), (s.flags &= -129)),
      (T = (s.flags & 32) !== 0),
      (s.flags &= -33),
      e === null)
    ) {
      if (Ft) {
        if ((h ? cs(s) : hs(), Ft)) {
          var b = fe,
            x;
          if ((x = b)) {
            t: {
              for (x = b, b = li; x.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (((x = Xn(x.nextSibling)), x === null)) {
                  b = null;
                  break t;
                }
              }
              b = x;
            }
            b !== null
              ? ((s.memoizedState = {
                  dehydrated: b,
                  treeContext: fr !== null ? { id: Pi, overflow: Li } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (x = En(18, null, null, 0)),
                (x.stateNode = b),
                (x.return = s),
                (s.child = x),
                (ln = s),
                (fe = null),
                (x = !0))
              : (x = !1);
          }
          x || pr(s);
        }
        if (
          ((b = s.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return dd(b) ? (s.lanes = 32) : (s.lanes = 536870912), null;
        zi(s);
      }
      return (
        (b = l.children),
        (l = l.fallback),
        h
          ? (hs(),
            (h = s.mode),
            (b = Wu({ mode: "hidden", children: b }, h)),
            (l = hr(l, h, a, null)),
            (b.return = s),
            (l.return = s),
            (b.sibling = l),
            (s.child = b),
            (h = s.child),
            (h.memoizedState = Df(a)),
            (h.childLanes = Vf(e, T, a)),
            (s.memoizedState = Cf),
            l)
          : (cs(s), Mf(s, b))
      );
    }
    if (
      ((x = e.memoizedState), x !== null && ((b = x.dehydrated), b !== null))
    ) {
      if (d)
        s.flags & 256
          ? (cs(s), (s.flags &= -257), (s = Of(e, s, a)))
          : s.memoizedState !== null
          ? (hs(), (s.child = e.child), (s.flags |= 128), (s = null))
          : (hs(),
            (h = l.fallback),
            (b = s.mode),
            (l = Wu({ mode: "visible", children: l.children }, b)),
            (h = hr(h, b, a, null)),
            (h.flags |= 2),
            (l.return = s),
            (h.return = s),
            (l.sibling = h),
            (s.child = l),
            pa(s, e.child, null, a),
            (l = s.child),
            (l.memoizedState = Df(a)),
            (l.childLanes = Vf(e, T, a)),
            (s.memoizedState = Cf),
            (s = h));
      else if ((cs(s), dd(b))) {
        if (((T = b.nextSibling && b.nextSibling.dataset), T)) var z = T.dgst;
        (T = z),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = T),
          Io({ value: l, source: null, stack: null }),
          (s = Of(e, s, a));
      } else if (
        (ke || No(e, s, a, !1), (T = (a & e.childLanes) !== 0), ke || T)
      ) {
        if (
          ((T = ie),
          T !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Ji(l)),
            (l = (l & (T.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== x.retryLane))
        )
          throw ((x.retryLane = l), sa(e, l), Rn(T, e, l), Cy);
        b.data === "$?" || Zf(), (s = Of(e, s, a));
      } else
        b.data === "$?"
          ? ((s.flags |= 192), (s.child = e.child), (s = null))
          : ((e = x.treeContext),
            (fe = Xn(b.nextSibling)),
            (ln = s),
            (Ft = !0),
            (mr = null),
            (li = !1),
            e !== null &&
              ((Ln[kn++] = Pi),
              (Ln[kn++] = Li),
              (Ln[kn++] = fr),
              (Pi = e.id),
              (Li = e.overflow),
              (fr = s)),
            (s = Mf(s, l.children)),
            (s.flags |= 4096));
      return s;
    }
    return h
      ? (hs(),
        (h = l.fallback),
        (b = s.mode),
        (x = e.child),
        (z = x.sibling),
        (l = Ni(x, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = x.subtreeFlags & 65011712),
        z !== null ? (h = Ni(z, h)) : ((h = hr(h, b, a, null)), (h.flags |= 2)),
        (h.return = s),
        (l.return = s),
        (l.sibling = h),
        (s.child = l),
        (l = h),
        (h = s.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = Df(a))
          : ((x = b.cachePool),
            x !== null
              ? ((z = Ve._currentValue),
                (x = x.parent !== z ? { parent: z, pool: z } : x))
              : (x = Ag()),
            (b = { baseLanes: b.baseLanes | a, cachePool: x })),
        (h.memoizedState = b),
        (h.childLanes = Vf(e, T, a)),
        (s.memoizedState = Cf),
        l)
      : (cs(s),
        (a = e.child),
        (e = a.sibling),
        (a = Ni(a, { mode: "visible", children: l.children })),
        (a.return = s),
        (a.sibling = null),
        e !== null &&
          ((T = s.deletions),
          T === null ? ((s.deletions = [e]), (s.flags |= 16)) : T.push(e)),
        (s.child = a),
        (s.memoizedState = null),
        a);
  }
  function Mf(e, s) {
    return (
      (s = Wu({ mode: "visible", children: s }, e.mode)),
      (s.return = e),
      (e.child = s)
    );
  }
  function Wu(e, s) {
    return (
      (e = En(22, e, null, s)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Of(e, s, a) {
    return (
      pa(s, e.child, null, a),
      (e = Mf(s, s.pendingProps.children)),
      (e.flags |= 2),
      (s.memoizedState = null),
      e
    );
  }
  function Uy(e, s, a) {
    e.lanes |= s;
    var l = e.alternate;
    l !== null && (l.lanes |= s), Xh(e.return, s, a);
  }
  function If(e, s, a, l, h) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: s,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: h,
        })
      : ((d.isBackwards = s),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = a),
        (d.tailMode = h));
  }
  function By(e, s, a) {
    var l = s.pendingProps,
      h = l.revealOrder,
      d = l.tail;
    if ((He(e, s, l.children, a), (l = Me.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (s.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = s.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Uy(e, a, s);
          else if (e.tag === 19) Uy(e, a, s);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === s) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === s) break t;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((tt(Me, l), h)) {
      case "forwards":
        for (a = s.child, h = null; a !== null; )
          (e = a.alternate),
            e !== null && Xu(e) === null && (h = a),
            (a = a.sibling);
        (a = h),
          a === null
            ? ((h = s.child), (s.child = null))
            : ((h = a.sibling), (a.sibling = null)),
          If(s, !1, h, a, d);
        break;
      case "backwards":
        for (a = null, h = s.child, s.child = null; h !== null; ) {
          if (((e = h.alternate), e !== null && Xu(e) === null)) {
            s.child = h;
            break;
          }
          (e = h.sibling), (h.sibling = a), (a = h), (h = e);
        }
        If(s, !0, a, null, d);
        break;
      case "together":
        If(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function ji(e, s, a) {
    if (
      (e !== null && (s.dependencies = e.dependencies),
      (gs |= s.lanes),
      (a & s.childLanes) === 0)
    )
      if (e !== null) {
        if ((No(e, s, a, !1), (a & s.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && s.child !== e.child) throw Error(r(153));
    if (s.child !== null) {
      for (
        e = s.child, a = Ni(e, e.pendingProps), s.child = a, a.return = s;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Ni(e, e.pendingProps)),
          (a.return = s);
      a.sibling = null;
    }
    return s.child;
  }
  function Nf(e, s) {
    return (e.lanes & s) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Iu(e)));
  }
  function CS(e, s, a) {
    switch (s.tag) {
      case 3:
        Yt(s, s.stateNode.containerInfo),
          rs(s, Ve, e.memoizedState.cache),
          Oo();
        break;
      case 27:
      case 5:
        gn(s);
        break;
      case 4:
        Yt(s, s.stateNode.containerInfo);
        break;
      case 10:
        rs(s, s.type, s.memoizedProps.value);
        break;
      case 13:
        var l = s.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (cs(s), (s.flags |= 128), null)
            : (a & s.child.childLanes) !== 0
            ? ky(e, s, a)
            : (cs(s), (e = ji(e, s, a)), e !== null ? e.sibling : null);
        cs(s);
        break;
      case 19:
        var h = (e.flags & 128) !== 0;
        if (
          ((l = (a & s.childLanes) !== 0),
          l || (No(e, s, a, !1), (l = (a & s.childLanes) !== 0)),
          h)
        ) {
          if (l) return By(e, s, a);
          s.flags |= 128;
        }
        if (
          ((h = s.memoizedState),
          h !== null &&
            ((h.rendering = null), (h.tail = null), (h.lastEffect = null)),
          tt(Me, Me.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (s.lanes = 0), Oy(e, s, a);
      case 24:
        rs(s, Ve, e.memoizedState.cache);
    }
    return ji(e, s, a);
  }
  function zy(e, s, a) {
    if (e !== null)
      if (e.memoizedProps !== s.pendingProps) ke = !0;
      else {
        if (!Nf(e, a) && (s.flags & 128) === 0) return (ke = !1), CS(e, s, a);
        ke = (e.flags & 131072) !== 0;
      }
    else (ke = !1), Ft && (s.flags & 1048576) !== 0 && gg(s, Ou, s.index);
    switch (((s.lanes = 0), s.tag)) {
      case 16:
        t: {
          e = s.pendingProps;
          var l = s.elementType,
            h = l._init;
          if (((l = h(l._payload)), (s.type = l), typeof l == "function"))
            qh(l)
              ? ((e = Tr(l, e)), (s.tag = 1), (s = Py(null, s, l, e, a)))
              : ((s.tag = 0), (s = xf(null, s, l, e, a)));
          else {
            if (l != null) {
              if (((h = l.$$typeof), h === mt)) {
                (s.tag = 11), (s = Dy(null, s, l, e, a));
                break t;
              } else if (h === M) {
                (s.tag = 14), (s = Vy(null, s, l, e, a));
                break t;
              }
            }
            throw ((s = re(l) || l), Error(r(306, s, "")));
          }
        }
        return s;
      case 0:
        return xf(e, s, s.type, s.pendingProps, a);
      case 1:
        return (l = s.type), (h = Tr(l, s.pendingProps)), Py(e, s, l, h, a);
      case 3:
        t: {
          if ((Yt(s, s.stateNode.containerInfo), e === null))
            throw Error(r(387));
          l = s.pendingProps;
          var d = s.memoizedState;
          (h = d.element), nf(e, s), jo(s, l, null, a);
          var T = s.memoizedState;
          if (
            ((l = T.cache),
            rs(s, Ve, l),
            l !== d.cache && Zh(s, [Ve], a, !0),
            zo(),
            (l = T.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: l, isDehydrated: !1, cache: T.cache }),
              (s.updateQueue.baseState = d),
              (s.memoizedState = d),
              s.flags & 256)
            ) {
              s = Ly(e, s, l, a);
              break t;
            } else if (l !== h) {
              (h = Nn(Error(r(424)), s)), Io(h), (s = Ly(e, s, l, a));
              break t;
            } else {
              switch (((e = s.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                fe = Xn(e.firstChild),
                  ln = s,
                  Ft = !0,
                  mr = null,
                  li = !0,
                  a = vy(s, null, l, a),
                  s.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Oo(), l === h)) {
              s = ji(e, s, a);
              break t;
            }
            He(e, s, l, a);
          }
          s = s.child;
        }
        return s;
      case 26:
        return (
          Ju(e, s),
          e === null
            ? (a = Gv(s.type, null, s.pendingProps, null))
              ? (s.memoizedState = a)
              : Ft ||
                ((a = s.type),
                (e = s.pendingProps),
                (l = dc(bt.current).createElement(a)),
                (l[xe] = s),
                (l[be] = e),
                Fe(l, a, e),
                ge(l),
                (s.stateNode = l))
            : (s.memoizedState = Gv(
                s.type,
                e.memoizedProps,
                s.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          gn(s),
          e === null &&
            Ft &&
            ((l = s.stateNode = jv(s.type, s.pendingProps, bt.current)),
            (ln = s),
            (li = !0),
            (h = fe),
            Ts(s.type) ? ((md = h), (fe = Xn(l.firstChild))) : (fe = h)),
          He(e, s, s.pendingProps.children, a),
          Ju(e, s),
          e === null && (s.flags |= 4194304),
          s.child
        );
      case 5:
        return (
          e === null &&
            Ft &&
            ((h = l = fe) &&
              ((l = n1(l, s.type, s.pendingProps, li)),
              l !== null
                ? ((s.stateNode = l),
                  (ln = s),
                  (fe = Xn(l.firstChild)),
                  (li = !1),
                  (h = !0))
                : (h = !1)),
            h || pr(s)),
          gn(s),
          (h = s.type),
          (d = s.pendingProps),
          (T = e !== null ? e.memoizedProps : null),
          (l = d.children),
          cd(h, d) ? (l = null) : T !== null && cd(h, T) && (s.flags |= 32),
          s.memoizedState !== null &&
            ((h = uf(e, s, TS, null, null, a)), (ul._currentValue = h)),
          Ju(e, s),
          He(e, s, l, a),
          s.child
        );
      case 6:
        return (
          e === null &&
            Ft &&
            ((e = a = fe) &&
              ((a = i1(a, s.pendingProps, li)),
              a !== null
                ? ((s.stateNode = a), (ln = s), (fe = null), (e = !0))
                : (e = !1)),
            e || pr(s)),
          null
        );
      case 13:
        return ky(e, s, a);
      case 4:
        return (
          Yt(s, s.stateNode.containerInfo),
          (l = s.pendingProps),
          e === null ? (s.child = pa(s, null, l, a)) : He(e, s, l, a),
          s.child
        );
      case 11:
        return Dy(e, s, s.type, s.pendingProps, a);
      case 7:
        return He(e, s, s.pendingProps, a), s.child;
      case 8:
        return He(e, s, s.pendingProps.children, a), s.child;
      case 12:
        return He(e, s, s.pendingProps.children, a), s.child;
      case 10:
        return (
          (l = s.pendingProps),
          rs(s, s.type, l.value),
          He(e, s, l.children, a),
          s.child
        );
      case 9:
        return (
          (h = s.type._context),
          (l = s.pendingProps.children),
          yr(s),
          (h = Ze(h)),
          (l = l(h)),
          (s.flags |= 1),
          He(e, s, l, a),
          s.child
        );
      case 14:
        return Vy(e, s, s.type, s.pendingProps, a);
      case 15:
        return My(e, s, s.type, s.pendingProps, a);
      case 19:
        return By(e, s, a);
      case 31:
        return (
          (l = s.pendingProps),
          (a = s.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((a = Wu(l, a)),
              (a.ref = s.ref),
              (s.child = a),
              (a.return = s),
              (s = a))
            : ((a = Ni(e.child, l)),
              (a.ref = s.ref),
              (s.child = a),
              (a.return = s),
              (s = a)),
          s
        );
      case 22:
        return Oy(e, s, a);
      case 24:
        return (
          yr(s),
          (l = Ze(Ve)),
          e === null
            ? ((h = Wh()),
              h === null &&
                ((h = ie),
                (d = $h()),
                (h.pooledCache = d),
                d.refCount++,
                d !== null && (h.pooledCacheLanes |= a),
                (h = d)),
              (s.memoizedState = { parent: l, cache: h }),
              ef(s),
              rs(s, Ve, h))
            : ((e.lanes & a) !== 0 && (nf(e, s), jo(s, null, null, a), zo()),
              (h = e.memoizedState),
              (d = s.memoizedState),
              h.parent !== l
                ? ((h = { parent: l, cache: l }),
                  (s.memoizedState = h),
                  s.lanes === 0 &&
                    (s.memoizedState = s.updateQueue.baseState = h),
                  rs(s, Ve, l))
                : ((l = d.cache),
                  rs(s, Ve, l),
                  l !== h.cache && Zh(s, [Ve], a, !0))),
          He(e, s, s.pendingProps.children, a),
          s.child
        );
      case 29:
        throw s.pendingProps;
    }
    throw Error(r(156, s.tag));
  }
  function qi(e) {
    e.flags |= 4;
  }
  function jy(e, s) {
    if (s.type !== "stylesheet" || (s.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Xv(s))) {
      if (
        ((s = Un.current),
        s !== null &&
          ((Ut & 4194048) === Ut
            ? ui !== null
            : ((Ut & 62914560) !== Ut && (Ut & 536870912) === 0) || s !== ui))
      )
        throw ((Uo = tf), Sg);
      e.flags |= 8192;
    }
  }
  function tc(e, s) {
    s !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((s = e.tag !== 22 ? co() : 536870912), (e.lanes |= s), (_a |= s));
  }
  function Yo(e, s) {
    if (!Ft)
      switch (e.tailMode) {
        case "hidden":
          s = e.tail;
          for (var a = null; s !== null; )
            s.alternate !== null && (a = s), (s = s.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? s || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function le(e) {
    var s = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (s)
      for (var h = e.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (l |= h.subtreeFlags & 65011712),
          (l |= h.flags & 65011712),
          (h.return = e),
          (h = h.sibling);
    else
      for (h = e.child; h !== null; )
        (a |= h.lanes | h.childLanes),
          (l |= h.subtreeFlags),
          (l |= h.flags),
          (h.return = e),
          (h = h.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = a), s;
  }
  function DS(e, s, a) {
    var l = s.pendingProps;
    switch ((Kh(s), s.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return le(s), null;
      case 1:
        return le(s), null;
      case 3:
        return (
          (a = s.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          s.memoizedState.cache !== l && (s.flags |= 2048),
          Ui(Ve),
          sn(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Mo(s)
              ? qi(s)
              : e === null ||
                (e.memoizedState.isDehydrated && (s.flags & 256) === 0) ||
                ((s.flags |= 1024), _g())),
          le(s),
          null
        );
      case 26:
        return (
          (a = s.memoizedState),
          e === null
            ? (qi(s),
              a !== null ? (le(s), jy(s, a)) : (le(s), (s.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (qi(s), le(s), jy(s, a))
              : (le(s), (s.flags &= -16777217))
            : (e.memoizedProps !== l && qi(s), le(s), (s.flags &= -16777217)),
          null
        );
      case 27:
        yn(s), (a = bt.current);
        var h = s.type;
        if (e !== null && s.stateNode != null) e.memoizedProps !== l && qi(s);
        else {
          if (!l) {
            if (s.stateNode === null) throw Error(r(166));
            return le(s), null;
          }
          (e = lt.current),
            Mo(s) ? yg(s) : ((e = jv(h, l, a)), (s.stateNode = e), qi(s));
        }
        return le(s), null;
      case 5:
        if ((yn(s), (a = s.type), e !== null && s.stateNode != null))
          e.memoizedProps !== l && qi(s);
        else {
          if (!l) {
            if (s.stateNode === null) throw Error(r(166));
            return le(s), null;
          }
          if (((e = lt.current), Mo(s))) yg(s);
          else {
            switch (((h = dc(bt.current)), e)) {
              case 1:
                e = h.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = h.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = h.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = h.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? h.createElement("select", { is: l.is })
                        : h.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? h.createElement(a, { is: l.is })
                        : h.createElement(a);
                }
            }
            (e[xe] = s), (e[be] = l);
            t: for (h = s.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) e.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                (h.child.return = h), (h = h.child);
                continue;
              }
              if (h === s) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === s) break t;
                h = h.return;
              }
              (h.sibling.return = h.return), (h = h.sibling);
            }
            s.stateNode = e;
            t: switch ((Fe(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && qi(s);
          }
        }
        return le(s), (s.flags &= -16777217), null;
      case 6:
        if (e && s.stateNode != null) e.memoizedProps !== l && qi(s);
        else {
          if (typeof l != "string" && s.stateNode === null) throw Error(r(166));
          if (((e = bt.current), Mo(s))) {
            if (
              ((e = s.stateNode),
              (a = s.memoizedProps),
              (l = null),
              (h = ln),
              h !== null)
            )
              switch (h.tag) {
                case 27:
                case 5:
                  l = h.memoizedProps;
              }
            (e[xe] = s),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Nv(e.nodeValue, a)
              )),
              e || pr(s);
          } else (e = dc(e).createTextNode(l)), (e[xe] = s), (s.stateNode = e);
        }
        return le(s), null;
      case 13:
        if (
          ((l = s.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((h = Mo(s)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!h) throw Error(r(318));
              if (
                ((h = s.memoizedState),
                (h = h !== null ? h.dehydrated : null),
                !h)
              )
                throw Error(r(317));
              h[xe] = s;
            } else
              Oo(),
                (s.flags & 128) === 0 && (s.memoizedState = null),
                (s.flags |= 4);
            le(s), (h = !1);
          } else
            (h = _g()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = h),
              (h = !0);
          if (!h) return s.flags & 256 ? (zi(s), s) : (zi(s), null);
        }
        if ((zi(s), (s.flags & 128) !== 0)) return (s.lanes = a), s;
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (l = s.child),
            (h = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (h = l.alternate.memoizedState.cachePool.pool);
          var d = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (d = l.memoizedState.cachePool.pool),
            d !== h && (l.flags |= 2048);
        }
        return (
          a !== e && a && (s.child.flags |= 8192),
          tc(s, s.updateQueue),
          le(s),
          null
        );
      case 4:
        return sn(), e === null && rd(s.stateNode.containerInfo), le(s), null;
      case 10:
        return Ui(s.type), le(s), null;
      case 19:
        if ((at(Me), (h = s.memoizedState), h === null)) return le(s), null;
        if (((l = (s.flags & 128) !== 0), (d = h.rendering), d === null))
          if (l) Yo(h, !1);
          else {
            if (de !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = s.child; e !== null; ) {
                if (((d = Xu(e)), d !== null)) {
                  for (
                    s.flags |= 128,
                      Yo(h, !1),
                      e = d.updateQueue,
                      s.updateQueue = e,
                      tc(s, e),
                      s.subtreeFlags = 0,
                      e = a,
                      a = s.child;
                    a !== null;

                  )
                    pg(a, e), (a = a.sibling);
                  return tt(Me, (Me.current & 1) | 2), s.child;
                }
                e = e.sibling;
              }
            h.tail !== null &&
              Cn() > ic &&
              ((s.flags |= 128), (l = !0), Yo(h, !1), (s.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Xu(d)), e !== null)) {
              if (
                ((s.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (s.updateQueue = e),
                tc(s, e),
                Yo(h, !0),
                h.tail === null &&
                  h.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ft)
              )
                return le(s), null;
            } else
              2 * Cn() - h.renderingStartTime > ic &&
                a !== 536870912 &&
                ((s.flags |= 128), (l = !0), Yo(h, !1), (s.lanes = 4194304));
          h.isBackwards
            ? ((d.sibling = s.child), (s.child = d))
            : ((e = h.last),
              e !== null ? (e.sibling = d) : (s.child = d),
              (h.last = d));
        }
        return h.tail !== null
          ? ((s = h.tail),
            (h.rendering = s),
            (h.tail = s.sibling),
            (h.renderingStartTime = Cn()),
            (s.sibling = null),
            (e = Me.current),
            tt(Me, l ? (e & 1) | 2 : e & 1),
            s)
          : (le(s), null);
      case 22:
      case 23:
        return (
          zi(s),
          of(),
          (l = s.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (s.flags |= 8192)
            : l && (s.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (s.flags & 128) === 0 &&
              (le(s), s.subtreeFlags & 6 && (s.flags |= 8192))
            : le(s),
          (a = s.updateQueue),
          a !== null && tc(s, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (l = s.memoizedState.cachePool.pool),
          l !== a && (s.flags |= 2048),
          e !== null && at(vr),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          s.memoizedState.cache !== a && (s.flags |= 2048),
          Ui(Ve),
          le(s),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, s.tag));
  }
  function VS(e, s) {
    switch ((Kh(s), s.tag)) {
      case 1:
        return (
          (e = s.flags), e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 3:
        return (
          Ui(Ve),
          sn(),
          (e = s.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((s.flags = (e & -65537) | 128), s)
            : null
        );
      case 26:
      case 27:
      case 5:
        return yn(s), null;
      case 13:
        if (
          (zi(s), (e = s.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (s.alternate === null) throw Error(r(340));
          Oo();
        }
        return (
          (e = s.flags), e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 19:
        return at(Me), null;
      case 4:
        return sn(), null;
      case 10:
        return Ui(s.type), null;
      case 22:
      case 23:
        return (
          zi(s),
          of(),
          e !== null && at(vr),
          (e = s.flags),
          e & 65536 ? ((s.flags = (e & -65537) | 128), s) : null
        );
      case 24:
        return Ui(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qy(e, s) {
    switch ((Kh(s), s.tag)) {
      case 3:
        Ui(Ve), sn();
        break;
      case 26:
      case 27:
      case 5:
        yn(s);
        break;
      case 4:
        sn();
        break;
      case 13:
        zi(s);
        break;
      case 19:
        at(Me);
        break;
      case 10:
        Ui(s.type);
        break;
      case 22:
      case 23:
        zi(s), of(), e !== null && at(vr);
        break;
      case 24:
        Ui(Ve);
    }
  }
  function Xo(e, s) {
    try {
      var a = s.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var h = l.next;
        a = h;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var d = a.create,
              T = a.inst;
            (l = d()), (T.destroy = l);
          }
          a = a.next;
        } while (a !== h);
      }
    } catch (b) {
      ne(s, s.return, b);
    }
  }
  function fs(e, s, a) {
    try {
      var l = s.updateQueue,
        h = l !== null ? l.lastEffect : null;
      if (h !== null) {
        var d = h.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var T = l.inst,
              b = T.destroy;
            if (b !== void 0) {
              (T.destroy = void 0), (h = s);
              var x = a,
                z = b;
              try {
                z();
              } catch (Q) {
                ne(h, x, Q);
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (Q) {
      ne(s, s.return, Q);
    }
  }
  function Hy(e) {
    var s = e.updateQueue;
    if (s !== null) {
      var a = e.stateNode;
      try {
        Vg(s, a);
      } catch (l) {
        ne(e, e.return, l);
      }
    }
  }
  function Gy(e, s, a) {
    (a.props = Tr(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      ne(e, s, l);
    }
  }
  function Zo(e, s) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (h) {
      ne(e, s, h);
    }
  }
  function ci(e, s) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (h) {
          ne(e, s, h);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (h) {
          ne(e, s, h);
        }
      else a.current = null;
  }
  function Fy(e) {
    var s = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      t: switch (s) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (h) {
      ne(e, e.return, h);
    }
  }
  function Pf(e, s, a) {
    try {
      var l = e.stateNode;
      $S(l, e.type, a, s), (l[be] = s);
    } catch (h) {
      ne(e, e.return, h);
    }
  }
  function Ky(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ts(e.type)) ||
      e.tag === 4
    );
  }
  function Lf(e) {
    t: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ky(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Ts(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue t;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function kf(e, s, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        s
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(e, s)
          : ((s =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            s.appendChild(e),
            (a = a._reactRootContainer),
            a != null || s.onclick !== null || (s.onclick = fc));
    else if (
      l !== 4 &&
      (l === 27 && Ts(e.type) && ((a = e.stateNode), (s = null)),
      (e = e.child),
      e !== null)
    )
      for (kf(e, s, a), e = e.sibling; e !== null; )
        kf(e, s, a), (e = e.sibling);
  }
  function ec(e, s, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), s ? a.insertBefore(e, s) : a.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Ts(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (ec(e, s, a), e = e.sibling; e !== null; )
        ec(e, s, a), (e = e.sibling);
  }
  function Qy(e) {
    var s = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, h = s.attributes; h.length; )
        s.removeAttributeNode(h[0]);
      Fe(s, l, a), (s[xe] = e), (s[be] = a);
    } catch (d) {
      ne(e, e.return, d);
    }
  }
  var Hi = !1,
    ve = !1,
    Uf = !1,
    Yy = typeof WeakSet == "function" ? WeakSet : Set,
    Ue = null;
  function MS(e, s) {
    if (((e = e.containerInfo), (ld = _c), (e = rg(e)), Ph(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var h = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break t;
            }
            var T = 0,
              b = -1,
              x = -1,
              z = 0,
              Q = 0,
              Z = e,
              j = null;
            e: for (;;) {
              for (
                var q;
                Z !== a || (h !== 0 && Z.nodeType !== 3) || (b = T + h),
                  Z !== d || (l !== 0 && Z.nodeType !== 3) || (x = T + l),
                  Z.nodeType === 3 && (T += Z.nodeValue.length),
                  (q = Z.firstChild) !== null;

              )
                (j = Z), (Z = q);
              for (;;) {
                if (Z === e) break e;
                if (
                  (j === a && ++z === h && (b = T),
                  j === d && ++Q === l && (x = T),
                  (q = Z.nextSibling) !== null)
                )
                  break;
                (Z = j), (j = Z.parentNode);
              }
              Z = q;
            }
            a = b === -1 || x === -1 ? null : { start: b, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      ud = { focusedElem: e, selectionRange: a }, _c = !1, Ue = s;
      Ue !== null;

    )
      if (
        ((s = Ue), (e = s.child), (s.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = s), (Ue = e);
      else
        for (; Ue !== null; ) {
          switch (((s = Ue), (d = s.alternate), (e = s.flags), s.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (a = s),
                  (h = d.memoizedProps),
                  (d = d.memoizedState),
                  (l = a.stateNode);
                try {
                  var At = Tr(a.type, h, a.elementType === a.type);
                  (e = l.getSnapshotBeforeUpdate(At, d)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (yt) {
                  ne(a, a.return, yt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = s.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  fd(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = s.sibling), e !== null)) {
            (e.return = s.return), (Ue = e);
            break;
          }
          Ue = s.return;
        }
  }
  function Xy(e, s, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ds(e, a), l & 4 && Xo(5, a);
        break;
      case 1:
        if ((ds(e, a), l & 4))
          if (((e = a.stateNode), s === null))
            try {
              e.componentDidMount();
            } catch (T) {
              ne(a, a.return, T);
            }
          else {
            var h = Tr(a.type, s.memoizedProps);
            s = s.memoizedState;
            try {
              e.componentDidUpdate(h, s, e.__reactInternalSnapshotBeforeUpdate);
            } catch (T) {
              ne(a, a.return, T);
            }
          }
        l & 64 && Hy(a), l & 512 && Zo(a, a.return);
        break;
      case 3:
        if ((ds(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((s = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                s = a.child.stateNode;
                break;
              case 1:
                s = a.child.stateNode;
            }
          try {
            Vg(e, s);
          } catch (T) {
            ne(a, a.return, T);
          }
        }
        break;
      case 27:
        s === null && l & 4 && Qy(a);
      case 26:
      case 5:
        ds(e, a), s === null && l & 4 && Fy(a), l & 512 && Zo(a, a.return);
        break;
      case 12:
        ds(e, a);
        break;
      case 13:
        ds(e, a),
          l & 4 && Jy(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = zS.bind(null, a)), s1(e, a))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Hi), !l)) {
          (s = (s !== null && s.memoizedState !== null) || ve), (h = Hi);
          var d = ve;
          (Hi = l),
            (ve = s) && !d ? ms(e, a, (a.subtreeFlags & 8772) !== 0) : ds(e, a),
            (Hi = h),
            (ve = d);
        }
        break;
      case 30:
        break;
      default:
        ds(e, a);
    }
  }
  function Zy(e) {
    var s = e.alternate;
    s !== null && ((e.alternate = null), Zy(s)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((s = e.stateNode), s !== null && es(s)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var oe = null,
    fn = !1;
  function Gi(e, s, a) {
    for (a = a.child; a !== null; ) $y(e, s, a), (a = a.sibling);
  }
  function $y(e, s, a) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(he, a);
      } catch {}
    switch (a.tag) {
      case 26:
        ve || ci(a, s),
          Gi(e, s, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        ve || ci(a, s);
        var l = oe,
          h = fn;
        Ts(a.type) && ((oe = a.stateNode), (fn = !1)),
          Gi(e, s, a),
          rl(a.stateNode),
          (oe = l),
          (fn = h);
        break;
      case 5:
        ve || ci(a, s);
      case 6:
        if (
          ((l = oe),
          (h = fn),
          (oe = null),
          Gi(e, s, a),
          (oe = l),
          (fn = h),
          oe !== null)
        )
          if (fn)
            try {
              (oe.nodeType === 9
                ? oe.body
                : oe.nodeName === "HTML"
                ? oe.ownerDocument.body
                : oe
              ).removeChild(a.stateNode);
            } catch (d) {
              ne(a, s, d);
            }
          else
            try {
              oe.removeChild(a.stateNode);
            } catch (d) {
              ne(a, s, d);
            }
        break;
      case 18:
        oe !== null &&
          (fn
            ? ((e = oe),
              Bv(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                a.stateNode
              ),
              dl(e))
            : Bv(oe, a.stateNode));
        break;
      case 4:
        (l = oe),
          (h = fn),
          (oe = a.stateNode.containerInfo),
          (fn = !0),
          Gi(e, s, a),
          (oe = l),
          (fn = h);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ve || fs(2, a, s), ve || fs(4, a, s), Gi(e, s, a);
        break;
      case 1:
        ve ||
          (ci(a, s),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && Gy(a, s, l)),
          Gi(e, s, a);
        break;
      case 21:
        Gi(e, s, a);
        break;
      case 22:
        (ve = (l = ve) || a.memoizedState !== null), Gi(e, s, a), (ve = l);
        break;
      default:
        Gi(e, s, a);
    }
  }
  function Jy(e, s) {
    if (
      s.memoizedState === null &&
      ((e = s.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        dl(e);
      } catch (a) {
        ne(s, s.return, a);
      }
  }
  function OS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var s = e.stateNode;
        return s === null && (s = e.stateNode = new Yy()), s;
      case 22:
        return (
          (e = e.stateNode),
          (s = e._retryCache),
          s === null && (s = e._retryCache = new Yy()),
          s
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Bf(e, s) {
    var a = OS(e);
    s.forEach(function (l) {
      var h = jS.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(h, h));
    });
  }
  function bn(e, s) {
    var a = s.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var h = a[l],
          d = e,
          T = s,
          b = T;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (Ts(b.type)) {
                (oe = b.stateNode), (fn = !1);
                break t;
              }
              break;
            case 5:
              (oe = b.stateNode), (fn = !1);
              break t;
            case 3:
            case 4:
              (oe = b.stateNode.containerInfo), (fn = !0);
              break t;
          }
          b = b.return;
        }
        if (oe === null) throw Error(r(160));
        $y(d, T, h),
          (oe = null),
          (fn = !1),
          (d = h.alternate),
          d !== null && (d.return = null),
          (h.return = null);
      }
    if (s.subtreeFlags & 13878)
      for (s = s.child; s !== null; ) Wy(s, e), (s = s.sibling);
  }
  var Yn = null;
  function Wy(e, s) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bn(s, e),
          An(e),
          l & 4 && (fs(3, e, e.return), Xo(3, e), fs(5, e, e.return));
        break;
      case 1:
        bn(s, e),
          An(e),
          l & 512 && (ve || a === null || ci(a, a.return)),
          l & 64 &&
            Hi &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var h = Yn;
        if (
          (bn(s, e),
          An(e),
          l & 512 && (ve || a === null || ci(a, a.return)),
          l & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                t: {
                  (l = e.type),
                    (a = e.memoizedProps),
                    (h = h.ownerDocument || h);
                  e: switch (l) {
                    case "title":
                      (d = h.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Xs] ||
                          d[xe] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = h.createElement(l)),
                          h.head.insertBefore(
                            d,
                            h.querySelector("head > title")
                          )),
                        Fe(d, l, a),
                        (d[xe] = e),
                        ge(d),
                        (l = d);
                      break t;
                    case "link":
                      var T = Qv("link", "href", h).get(l + (a.href || ""));
                      if (T) {
                        for (var b = 0; b < T.length; b++)
                          if (
                            ((d = T[b]),
                            d.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            T.splice(b, 1);
                            break e;
                          }
                      }
                      (d = h.createElement(l)),
                        Fe(d, l, a),
                        h.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (T = Qv("meta", "content", h).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (b = 0; b < T.length; b++)
                          if (
                            ((d = T[b]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            T.splice(b, 1);
                            break e;
                          }
                      }
                      (d = h.createElement(l)),
                        Fe(d, l, a),
                        h.head.appendChild(d);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  (d[xe] = e), ge(d), (l = d);
                }
                e.stateNode = l;
              } else Yv(h, e.type, e.stateNode);
            else e.stateNode = Kv(h, l, e.memoizedProps);
          else
            d !== l
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                l === null
                  ? Yv(h, e.type, e.stateNode)
                  : Kv(h, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Pf(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        bn(s, e),
          An(e),
          l & 512 && (ve || a === null || ci(a, a.return)),
          a !== null && l & 4 && Pf(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (bn(s, e),
          An(e),
          l & 512 && (ve || a === null || ci(a, a.return)),
          e.flags & 32)
        ) {
          h = e.stateNode;
          try {
            Vn(h, "");
          } catch (q) {
            ne(e, e.return, q);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((h = e.memoizedProps), Pf(e, h, a !== null ? a.memoizedProps : h)),
          l & 1024 && (Uf = !0);
        break;
      case 6:
        if ((bn(s, e), An(e), l & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (l = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = l;
          } catch (q) {
            ne(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((gc = null),
          (h = Yn),
          (Yn = mc(s.containerInfo)),
          bn(s, e),
          (Yn = h),
          An(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            dl(s.containerInfo);
          } catch (q) {
            ne(e, e.return, q);
          }
        Uf && ((Uf = !1), tv(e));
        break;
      case 4:
        (l = Yn),
          (Yn = mc(e.stateNode.containerInfo)),
          bn(s, e),
          An(e),
          (Yn = l);
        break;
      case 12:
        bn(s, e), An(e);
        break;
      case 13:
        bn(s, e),
          An(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ff = Cn()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Bf(e, l)));
        break;
      case 22:
        h = e.memoizedState !== null;
        var x = a !== null && a.memoizedState !== null,
          z = Hi,
          Q = ve;
        if (
          ((Hi = z || h),
          (ve = Q || x),
          bn(s, e),
          (ve = Q),
          (Hi = z),
          An(e),
          l & 8192)
        )
          t: for (
            s = e.stateNode,
              s._visibility = h ? s._visibility & -2 : s._visibility | 1,
              h && (a === null || x || Hi || ve || Er(e)),
              a = null,
              s = e;
            ;

          ) {
            if (s.tag === 5 || s.tag === 26) {
              if (a === null) {
                x = a = s;
                try {
                  if (((d = x.stateNode), h))
                    (T = d.style),
                      typeof T.setProperty == "function"
                        ? T.setProperty("display", "none", "important")
                        : (T.display = "none");
                  else {
                    b = x.stateNode;
                    var Z = x.memoizedProps.style,
                      j =
                        Z != null && Z.hasOwnProperty("display")
                          ? Z.display
                          : null;
                    b.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (q) {
                  ne(x, x.return, q);
                }
              }
            } else if (s.tag === 6) {
              if (a === null) {
                x = s;
                try {
                  x.stateNode.nodeValue = h ? "" : x.memoizedProps;
                } catch (q) {
                  ne(x, x.return, q);
                }
              }
            } else if (
              ((s.tag !== 22 && s.tag !== 23) ||
                s.memoizedState === null ||
                s === e) &&
              s.child !== null
            ) {
              (s.child.return = s), (s = s.child);
              continue;
            }
            if (s === e) break t;
            for (; s.sibling === null; ) {
              if (s.return === null || s.return === e) break t;
              a === s && (a = null), (s = s.return);
            }
            a === s && (a = null),
              (s.sibling.return = s.return),
              (s = s.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), Bf(e, a))));
        break;
      case 19:
        bn(s, e),
          An(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Bf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bn(s, e), An(e);
    }
  }
  function An(e) {
    var s = e.flags;
    if (s & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Ky(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var h = a.stateNode,
              d = Lf(e);
            ec(e, d, h);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (Vn(T, ""), (a.flags &= -33));
            var b = Lf(e);
            ec(e, b, T);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo,
              z = Lf(e);
            kf(e, z, x);
            break;
          default:
            throw Error(r(161));
        }
      } catch (Q) {
        ne(e, e.return, Q);
      }
      e.flags &= -3;
    }
    s & 4096 && (e.flags &= -4097);
  }
  function tv(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var s = e;
        tv(s),
          s.tag === 5 && s.flags & 1024 && s.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ds(e, s) {
    if (s.subtreeFlags & 8772)
      for (s = s.child; s !== null; ) Xy(e, s.alternate, s), (s = s.sibling);
  }
  function Er(e) {
    for (e = e.child; e !== null; ) {
      var s = e;
      switch (s.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fs(4, s, s.return), Er(s);
          break;
        case 1:
          ci(s, s.return);
          var a = s.stateNode;
          typeof a.componentWillUnmount == "function" && Gy(s, s.return, a),
            Er(s);
          break;
        case 27:
          rl(s.stateNode);
        case 26:
        case 5:
          ci(s, s.return), Er(s);
          break;
        case 22:
          s.memoizedState === null && Er(s);
          break;
        case 30:
          Er(s);
          break;
        default:
          Er(s);
      }
      e = e.sibling;
    }
  }
  function ms(e, s, a) {
    for (a = a && (s.subtreeFlags & 8772) !== 0, s = s.child; s !== null; ) {
      var l = s.alternate,
        h = e,
        d = s,
        T = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ms(h, d, a), Xo(4, d);
          break;
        case 1:
          if (
            (ms(h, d, a),
            (l = d),
            (h = l.stateNode),
            typeof h.componentDidMount == "function")
          )
            try {
              h.componentDidMount();
            } catch (z) {
              ne(l, l.return, z);
            }
          if (((l = d), (h = l.updateQueue), h !== null)) {
            var b = l.stateNode;
            try {
              var x = h.shared.hiddenCallbacks;
              if (x !== null)
                for (h.shared.hiddenCallbacks = null, h = 0; h < x.length; h++)
                  Dg(x[h], b);
            } catch (z) {
              ne(l, l.return, z);
            }
          }
          a && T & 64 && Hy(d), Zo(d, d.return);
          break;
        case 27:
          Qy(d);
        case 26:
        case 5:
          ms(h, d, a), a && l === null && T & 4 && Fy(d), Zo(d, d.return);
          break;
        case 12:
          ms(h, d, a);
          break;
        case 13:
          ms(h, d, a), a && T & 4 && Jy(h, d);
          break;
        case 22:
          d.memoizedState === null && ms(h, d, a), Zo(d, d.return);
          break;
        case 30:
          break;
        default:
          ms(h, d, a);
      }
      s = s.sibling;
    }
  }
  function zf(e, s) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      s.memoizedState !== null &&
        s.memoizedState.cachePool !== null &&
        (e = s.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Po(a));
  }
  function jf(e, s) {
    (e = null),
      s.alternate !== null && (e = s.alternate.memoizedState.cache),
      (s = s.memoizedState.cache),
      s !== e && (s.refCount++, e != null && Po(e));
  }
  function hi(e, s, a, l) {
    if (s.subtreeFlags & 10256)
      for (s = s.child; s !== null; ) ev(e, s, a, l), (s = s.sibling);
  }
  function ev(e, s, a, l) {
    var h = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        hi(e, s, a, l), h & 2048 && Xo(9, s);
        break;
      case 1:
        hi(e, s, a, l);
        break;
      case 3:
        hi(e, s, a, l),
          h & 2048 &&
            ((e = null),
            s.alternate !== null && (e = s.alternate.memoizedState.cache),
            (s = s.memoizedState.cache),
            s !== e && (s.refCount++, e != null && Po(e)));
        break;
      case 12:
        if (h & 2048) {
          hi(e, s, a, l), (e = s.stateNode);
          try {
            var d = s.memoizedProps,
              T = d.id,
              b = d.onPostCommit;
            typeof b == "function" &&
              b(
                T,
                s.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (x) {
            ne(s, s.return, x);
          }
        } else hi(e, s, a, l);
        break;
      case 13:
        hi(e, s, a, l);
        break;
      case 23:
        break;
      case 22:
        (d = s.stateNode),
          (T = s.alternate),
          s.memoizedState !== null
            ? d._visibility & 2
              ? hi(e, s, a, l)
              : $o(e, s)
            : d._visibility & 2
            ? hi(e, s, a, l)
            : ((d._visibility |= 2),
              ga(e, s, a, l, (s.subtreeFlags & 10256) !== 0)),
          h & 2048 && zf(T, s);
        break;
      case 24:
        hi(e, s, a, l), h & 2048 && jf(s.alternate, s);
        break;
      default:
        hi(e, s, a, l);
    }
  }
  function ga(e, s, a, l, h) {
    for (h = h && (s.subtreeFlags & 10256) !== 0, s = s.child; s !== null; ) {
      var d = e,
        T = s,
        b = a,
        x = l,
        z = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          ga(d, T, b, x, h), Xo(8, T);
          break;
        case 23:
          break;
        case 22:
          var Q = T.stateNode;
          T.memoizedState !== null
            ? Q._visibility & 2
              ? ga(d, T, b, x, h)
              : $o(d, T)
            : ((Q._visibility |= 2), ga(d, T, b, x, h)),
            h && z & 2048 && zf(T.alternate, T);
          break;
        case 24:
          ga(d, T, b, x, h), h && z & 2048 && jf(T.alternate, T);
          break;
        default:
          ga(d, T, b, x, h);
      }
      s = s.sibling;
    }
  }
  function $o(e, s) {
    if (s.subtreeFlags & 10256)
      for (s = s.child; s !== null; ) {
        var a = e,
          l = s,
          h = l.flags;
        switch (l.tag) {
          case 22:
            $o(a, l), h & 2048 && zf(l.alternate, l);
            break;
          case 24:
            $o(a, l), h & 2048 && jf(l.alternate, l);
            break;
          default:
            $o(a, l);
        }
        s = s.sibling;
      }
  }
  var Jo = 8192;
  function ya(e) {
    if (e.subtreeFlags & Jo)
      for (e = e.child; e !== null; ) nv(e), (e = e.sibling);
  }
  function nv(e) {
    switch (e.tag) {
      case 26:
        ya(e),
          e.flags & Jo &&
            e.memoizedState !== null &&
            y1(Yn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ya(e);
        break;
      case 3:
      case 4:
        var s = Yn;
        (Yn = mc(e.stateNode.containerInfo)), ya(e), (Yn = s);
        break;
      case 22:
        e.memoizedState === null &&
          ((s = e.alternate),
          s !== null && s.memoizedState !== null
            ? ((s = Jo), (Jo = 16777216), ya(e), (Jo = s))
            : ya(e));
        break;
      default:
        ya(e);
    }
  }
  function iv(e) {
    var s = e.alternate;
    if (s !== null && ((e = s.child), e !== null)) {
      s.child = null;
      do (s = e.sibling), (e.sibling = null), (e = s);
      while (e !== null);
    }
  }
  function Wo(e) {
    var s = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (s !== null)
        for (var a = 0; a < s.length; a++) {
          var l = s[a];
          (Ue = l), rv(l, e);
        }
      iv(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) sv(e), (e = e.sibling);
  }
  function sv(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wo(e), e.flags & 2048 && fs(9, e, e.return);
        break;
      case 3:
        Wo(e);
        break;
      case 12:
        Wo(e);
        break;
      case 22:
        var s = e.stateNode;
        e.memoizedState !== null &&
        s._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((s._visibility &= -3), nc(e))
          : Wo(e);
        break;
      default:
        Wo(e);
    }
  }
  function nc(e) {
    var s = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (s !== null)
        for (var a = 0; a < s.length; a++) {
          var l = s[a];
          (Ue = l), rv(l, e);
        }
      iv(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((s = e), s.tag)) {
        case 0:
        case 11:
        case 15:
          fs(8, s, s.return), nc(s);
          break;
        case 22:
          (a = s.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), nc(s));
          break;
        default:
          nc(s);
      }
      e = e.sibling;
    }
  }
  function rv(e, s) {
    for (; Ue !== null; ) {
      var a = Ue;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fs(8, a, s);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Po(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (Ue = l);
      else
        t: for (a = e; Ue !== null; ) {
          l = Ue;
          var h = l.sibling,
            d = l.return;
          if ((Zy(l), l === a)) {
            Ue = null;
            break t;
          }
          if (h !== null) {
            (h.return = d), (Ue = h);
            break t;
          }
          Ue = d;
        }
    }
  }
  var IS = {
      getCacheForType: function (e) {
        var s = Ze(Ve),
          a = s.data.get(e);
        return a === void 0 && ((a = e()), s.data.set(e, a)), a;
      },
    },
    NS = typeof WeakMap == "function" ? WeakMap : Map,
    Zt = 0,
    ie = null,
    Nt = null,
    Ut = 0,
    $t = 0,
    Sn = null,
    ps = !1,
    va = !1,
    qf = !1,
    Fi = 0,
    de = 0,
    gs = 0,
    br = 0,
    Hf = 0,
    Bn = 0,
    _a = 0,
    tl = null,
    dn = null,
    Gf = !1,
    Ff = 0,
    ic = 1 / 0,
    sc = null,
    ys = null,
    Ge = 0,
    vs = null,
    Ta = null,
    Ea = 0,
    Kf = 0,
    Qf = null,
    av = null,
    el = 0,
    Yf = null;
  function wn() {
    if ((Zt & 2) !== 0 && Ut !== 0) return Ut & -Ut;
    if (K.T !== null) {
      var e = la;
      return e !== 0 ? e : ed();
    }
    return Wi();
  }
  function ov() {
    Bn === 0 && (Bn = (Ut & 536870912) === 0 || Ft ? uo() : 536870912);
    var e = Un.current;
    return e !== null && (e.flags |= 32), Bn;
  }
  function Rn(e, s, a) {
    ((e === ie && ($t === 2 || $t === 9)) || e.cancelPendingCommit !== null) &&
      (ba(e, 0), _s(e, Ut, Bn, !1)),
      Ai(e, a),
      ((Zt & 2) === 0 || e !== ie) &&
        (e === ie &&
          ((Zt & 2) === 0 && (br |= a), de === 4 && _s(e, Ut, Bn, !1)),
        fi(e));
  }
  function lv(e, s, a) {
    if ((Zt & 6) !== 0) throw Error(r(327));
    var l = (!a && (s & 124) === 0 && (s & e.expiredLanes) === 0) || Ys(e, s),
      h = l ? kS(e, s) : $f(e, s, !0),
      d = l;
    do {
      if (h === 0) {
        va && !l && _s(e, s, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), d && !PS(a))) {
          (h = $f(e, s, !1)), (d = !1);
          continue;
        }
        if (h === 2) {
          if (((d = s), e.errorRecoveryDisabledLanes & d)) var T = 0;
          else
            (T = e.pendingLanes & -536870913),
              (T = T !== 0 ? T : T & 536870912 ? 536870912 : 0);
          if (T !== 0) {
            s = T;
            t: {
              var b = e;
              h = tl;
              var x = b.current.memoizedState.isDehydrated;
              if ((x && (ba(b, T).flags |= 256), (T = $f(b, T, !1)), T !== 2)) {
                if (qf && !x) {
                  (b.errorRecoveryDisabledLanes |= d), (br |= d), (h = 4);
                  break t;
                }
                (d = dn),
                  (dn = h),
                  d !== null && (dn === null ? (dn = d) : dn.push.apply(dn, d));
              }
              h = T;
            }
            if (((d = !1), h !== 2)) continue;
          }
        }
        if (h === 1) {
          ba(e, 0), _s(e, s, 0, !0);
          break;
        }
        t: {
          switch (((l = e), (d = h), d)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((s & 4194048) !== s) break;
            case 6:
              _s(l, s, Bn, !ps);
              break t;
            case 2:
              dn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((s & 62914560) === s && ((h = Ff + 300 - Cn()), 10 < h)) {
            if ((_s(l, s, Bn, !ps), Br(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = kv(
              uv.bind(null, l, a, dn, sc, Gf, s, Bn, br, _a, ps, d, 2, -0, 0),
              h
            );
            break t;
          }
          uv(l, a, dn, sc, Gf, s, Bn, br, _a, ps, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    fi(e);
  }
  function uv(e, s, a, l, h, d, T, b, x, z, Q, Z, j, q) {
    if (
      ((e.timeoutHandle = -1),
      (Z = s.subtreeFlags),
      (Z & 8192 || (Z & 16785408) === 16785408) &&
        ((ll = { stylesheets: null, count: 0, unsuspend: g1 }),
        nv(s),
        (Z = v1()),
        Z !== null))
    ) {
      (e.cancelPendingCommit = Z(
        gv.bind(null, e, s, d, a, l, h, T, b, x, Q, 1, j, q)
      )),
        _s(e, d, T, !z);
      return;
    }
    gv(e, s, d, a, l, h, T, b, x);
  }
  function PS(e) {
    for (var s = e; ; ) {
      var a = s.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        s.flags & 16384 &&
        ((a = s.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var h = a[l],
            d = h.getSnapshot;
          h = h.value;
          try {
            if (!Tn(d(), h)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = s.child), s.subtreeFlags & 16384 && a !== null))
        (a.return = s), (s = a);
      else {
        if (s === e) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === e) return !0;
          s = s.return;
        }
        (s.sibling.return = s.return), (s = s.sibling);
      }
    }
    return !0;
  }
  function _s(e, s, a, l) {
    (s &= ~Hf),
      (s &= ~br),
      (e.suspendedLanes |= s),
      (e.pingedLanes &= ~s),
      l && (e.warmLanes |= s),
      (l = e.expirationTimes);
    for (var h = s; 0 < h; ) {
      var d = 31 - Xe(h),
        T = 1 << d;
      (l[d] = -1), (h &= ~T);
    }
    a !== 0 && $n(e, a, s);
  }
  function rc() {
    return (Zt & 6) === 0 ? (nl(0), !1) : !0;
  }
  function Xf() {
    if (Nt !== null) {
      if ($t === 0) var e = Nt.return;
      else (e = Nt), (ki = gr = null), ff(e), (ma = null), (Ko = 0), (e = Nt);
      for (; e !== null; ) qy(e.alternate, e), (e = e.return);
      Nt = null;
    }
  }
  function ba(e, s) {
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), WS(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Xf(),
      (ie = e),
      (Nt = a = Ni(e.current, null)),
      (Ut = s),
      ($t = 0),
      (Sn = null),
      (ps = !1),
      (va = Ys(e, s)),
      (qf = !1),
      (_a = Bn = Hf = br = gs = de = 0),
      (dn = tl = null),
      (Gf = !1),
      (s & 8) !== 0 && (s |= s & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= s; 0 < l; ) {
        var h = 31 - Xe(l),
          d = 1 << h;
        (s |= e[h]), (l &= ~d);
      }
    return (Fi = s), xu(), a;
  }
  function cv(e, s) {
    (Ct = null),
      (K.H = Ku),
      s === ko || s === Lu
        ? ((s = xg()), ($t = 3))
        : s === Sg
        ? ((s = xg()), ($t = 4))
        : ($t =
            s === Cy
              ? 8
              : s !== null &&
                typeof s == "object" &&
                typeof s.then == "function"
              ? 6
              : 1),
      (Sn = s),
      Nt === null && ((de = 1), $u(e, Nn(s, e.current)));
  }
  function hv() {
    var e = K.H;
    return (K.H = Ku), e === null ? Ku : e;
  }
  function fv() {
    var e = K.A;
    return (K.A = IS), e;
  }
  function Zf() {
    (de = 4),
      ps || ((Ut & 4194048) !== Ut && Un.current !== null) || (va = !0),
      ((gs & 134217727) === 0 && (br & 134217727) === 0) ||
        ie === null ||
        _s(ie, Ut, Bn, !1);
  }
  function $f(e, s, a) {
    var l = Zt;
    Zt |= 2;
    var h = hv(),
      d = fv();
    (ie !== e || Ut !== s) && ((sc = null), ba(e, s)), (s = !1);
    var T = de;
    t: do
      try {
        if ($t !== 0 && Nt !== null) {
          var b = Nt,
            x = Sn;
          switch ($t) {
            case 8:
              Xf(), (T = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Un.current === null && (s = !0);
              var z = $t;
              if ((($t = 0), (Sn = null), Aa(e, b, x, z), a && va)) {
                T = 0;
                break t;
              }
              break;
            default:
              (z = $t), ($t = 0), (Sn = null), Aa(e, b, x, z);
          }
        }
        LS(), (T = de);
        break;
      } catch (Q) {
        cv(e, Q);
      }
    while (!0);
    return (
      s && e.shellSuspendCounter++,
      (ki = gr = null),
      (Zt = l),
      (K.H = h),
      (K.A = d),
      Nt === null && ((ie = null), (Ut = 0), xu()),
      T
    );
  }
  function LS() {
    for (; Nt !== null; ) dv(Nt);
  }
  function kS(e, s) {
    var a = Zt;
    Zt |= 2;
    var l = hv(),
      h = fv();
    ie !== e || Ut !== s
      ? ((sc = null), (ic = Cn() + 500), ba(e, s))
      : (va = Ys(e, s));
    t: do
      try {
        if ($t !== 0 && Nt !== null) {
          s = Nt;
          var d = Sn;
          e: switch ($t) {
            case 1:
              ($t = 0), (Sn = null), Aa(e, s, d, 1);
              break;
            case 2:
            case 9:
              if (wg(d)) {
                ($t = 0), (Sn = null), mv(s);
                break;
              }
              (s = function () {
                ($t !== 2 && $t !== 9) || ie !== e || ($t = 7), fi(e);
              }),
                d.then(s, s);
              break t;
            case 3:
              $t = 7;
              break t;
            case 4:
              $t = 5;
              break t;
            case 7:
              wg(d)
                ? (($t = 0), (Sn = null), mv(s))
                : (($t = 0), (Sn = null), Aa(e, s, d, 7));
              break;
            case 5:
              var T = null;
              switch (Nt.tag) {
                case 26:
                  T = Nt.memoizedState;
                case 5:
                case 27:
                  var b = Nt;
                  if (!T || Xv(T)) {
                    ($t = 0), (Sn = null);
                    var x = b.sibling;
                    if (x !== null) Nt = x;
                    else {
                      var z = b.return;
                      z !== null ? ((Nt = z), ac(z)) : (Nt = null);
                    }
                    break e;
                  }
              }
              ($t = 0), (Sn = null), Aa(e, s, d, 5);
              break;
            case 6:
              ($t = 0), (Sn = null), Aa(e, s, d, 6);
              break;
            case 8:
              Xf(), (de = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        US();
        break;
      } catch (Q) {
        cv(e, Q);
      }
    while (!0);
    return (
      (ki = gr = null),
      (K.H = l),
      (K.A = h),
      (Zt = a),
      Nt !== null ? 0 : ((ie = null), (Ut = 0), xu(), de)
    );
  }
  function US() {
    for (; Nt !== null && !ro(); ) dv(Nt);
  }
  function dv(e) {
    var s = zy(e.alternate, e, Fi);
    (e.memoizedProps = e.pendingProps), s === null ? ac(e) : (Nt = s);
  }
  function mv(e) {
    var s = e,
      a = s.alternate;
    switch (s.tag) {
      case 15:
      case 0:
        s = Ny(a, s, s.pendingProps, s.type, void 0, Ut);
        break;
      case 11:
        s = Ny(a, s, s.pendingProps, s.type.render, s.ref, Ut);
        break;
      case 5:
        ff(s);
      default:
        qy(a, s), (s = Nt = pg(s, Fi)), (s = zy(a, s, Fi));
    }
    (e.memoizedProps = e.pendingProps), s === null ? ac(e) : (Nt = s);
  }
  function Aa(e, s, a, l) {
    (ki = gr = null), ff(s), (ma = null), (Ko = 0);
    var h = s.return;
    try {
      if (xS(e, h, s, a, Ut)) {
        (de = 1), $u(e, Nn(a, e.current)), (Nt = null);
        return;
      }
    } catch (d) {
      if (h !== null) throw ((Nt = h), d);
      (de = 1), $u(e, Nn(a, e.current)), (Nt = null);
      return;
    }
    s.flags & 32768
      ? (Ft || l === 1
          ? (e = !0)
          : va || (Ut & 536870912) !== 0
          ? (e = !1)
          : ((ps = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Un.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        pv(s, e))
      : ac(s);
  }
  function ac(e) {
    var s = e;
    do {
      if ((s.flags & 32768) !== 0) {
        pv(s, ps);
        return;
      }
      e = s.return;
      var a = DS(s.alternate, s, Fi);
      if (a !== null) {
        Nt = a;
        return;
      }
      if (((s = s.sibling), s !== null)) {
        Nt = s;
        return;
      }
      Nt = s = e;
    } while (s !== null);
    de === 0 && (de = 5);
  }
  function pv(e, s) {
    do {
      var a = VS(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Nt = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !s && ((e = e.sibling), e !== null))
      ) {
        Nt = e;
        return;
      }
      Nt = e = a;
    } while (e !== null);
    (de = 6), (Nt = null);
  }
  function gv(e, s, a, l, h, d, T, b, x) {
    e.cancelPendingCommit = null;
    do oc();
    while (Ge !== 0);
    if ((Zt & 6) !== 0) throw Error(r(327));
    if (s !== null) {
      if (s === e.current) throw Error(r(177));
      if (
        ((d = s.lanes | s.childLanes),
        (d |= zh),
        ho(e, a, d, T, b, x),
        e === ie && ((Nt = ie = null), (Ut = 0)),
        (Ta = s),
        (vs = e),
        (Ea = a),
        (Kf = d),
        (Qf = h),
        (av = l),
        (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            qS(Gs, function () {
              return Ev(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (s.flags & 13878) !== 0),
        (s.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = K.T), (K.T = null), (h = et.p), (et.p = 2), (T = Zt), (Zt |= 4);
        try {
          MS(e, s, a);
        } finally {
          (Zt = T), (et.p = h), (K.T = l);
        }
      }
      (Ge = 1), yv(), vv(), _v();
    }
  }
  function yv() {
    if (Ge === 1) {
      Ge = 0;
      var e = vs,
        s = Ta,
        a = (s.flags & 13878) !== 0;
      if ((s.subtreeFlags & 13878) !== 0 || a) {
        (a = K.T), (K.T = null);
        var l = et.p;
        et.p = 2;
        var h = Zt;
        Zt |= 4;
        try {
          Wy(s, e);
          var d = ud,
            T = rg(e.containerInfo),
            b = d.focusedElem,
            x = d.selectionRange;
          if (
            T !== b &&
            b &&
            b.ownerDocument &&
            sg(b.ownerDocument.documentElement, b)
          ) {
            if (x !== null && Ph(b)) {
              var z = x.start,
                Q = x.end;
              if ((Q === void 0 && (Q = z), "selectionStart" in b))
                (b.selectionStart = z),
                  (b.selectionEnd = Math.min(Q, b.value.length));
              else {
                var Z = b.ownerDocument || document,
                  j = (Z && Z.defaultView) || window;
                if (j.getSelection) {
                  var q = j.getSelection(),
                    At = b.textContent.length,
                    yt = Math.min(x.start, At),
                    ee = x.end === void 0 ? yt : Math.min(x.end, At);
                  !q.extend && yt > ee && ((T = ee), (ee = yt), (yt = T));
                  var L = ig(b, yt),
                    I = ig(b, ee);
                  if (
                    L &&
                    I &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== L.node ||
                      q.anchorOffset !== L.offset ||
                      q.focusNode !== I.node ||
                      q.focusOffset !== I.offset)
                  ) {
                    var U = Z.createRange();
                    U.setStart(L.node, L.offset),
                      q.removeAllRanges(),
                      yt > ee
                        ? (q.addRange(U), q.extend(I.node, I.offset))
                        : (U.setEnd(I.node, I.offset), q.addRange(U));
                  }
                }
              }
            }
            for (Z = [], q = b; (q = q.parentNode); )
              q.nodeType === 1 &&
                Z.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (
              typeof b.focus == "function" && b.focus(), b = 0;
              b < Z.length;
              b++
            ) {
              var Y = Z[b];
              (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
            }
          }
          (_c = !!ld), (ud = ld = null);
        } finally {
          (Zt = h), (et.p = l), (K.T = a);
        }
      }
      (e.current = s), (Ge = 2);
    }
  }
  function vv() {
    if (Ge === 2) {
      Ge = 0;
      var e = vs,
        s = Ta,
        a = (s.flags & 8772) !== 0;
      if ((s.subtreeFlags & 8772) !== 0 || a) {
        (a = K.T), (K.T = null);
        var l = et.p;
        et.p = 2;
        var h = Zt;
        Zt |= 4;
        try {
          Xy(e, s.alternate, s);
        } finally {
          (Zt = h), (et.p = l), (K.T = a);
        }
      }
      Ge = 3;
    }
  }
  function _v() {
    if (Ge === 4 || Ge === 3) {
      (Ge = 0), nu();
      var e = vs,
        s = Ta,
        a = Ea,
        l = av;
      (s.subtreeFlags & 10256) !== 0 || (s.flags & 10256) !== 0
        ? (Ge = 5)
        : ((Ge = 0), (Ta = vs = null), Tv(e, e.pendingLanes));
      var h = e.pendingLanes;
      if (
        (h === 0 && (ys = null),
        zr(a),
        (s = s.stateNode),
        Xt && typeof Xt.onCommitFiberRoot == "function")
      )
        try {
          Xt.onCommitFiberRoot(he, s, void 0, (s.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (s = K.T), (h = et.p), (et.p = 2), (K.T = null);
        try {
          for (var d = e.onRecoverableError, T = 0; T < l.length; T++) {
            var b = l[T];
            d(b.value, { componentStack: b.stack });
          }
        } finally {
          (K.T = s), (et.p = h);
        }
      }
      (Ea & 3) !== 0 && oc(),
        fi(e),
        (h = e.pendingLanes),
        (a & 4194090) !== 0 && (h & 42) !== 0
          ? e === Yf
            ? el++
            : ((el = 0), (Yf = e))
          : (el = 0),
        nl(0);
    }
  }
  function Tv(e, s) {
    (e.pooledCacheLanes &= s) === 0 &&
      ((s = e.pooledCache), s != null && ((e.pooledCache = null), Po(s)));
  }
  function oc(e) {
    return yv(), vv(), _v(), Ev();
  }
  function Ev() {
    if (Ge !== 5) return !1;
    var e = vs,
      s = Kf;
    Kf = 0;
    var a = zr(Ea),
      l = K.T,
      h = et.p;
    try {
      (et.p = 32 > a ? 32 : a), (K.T = null), (a = Qf), (Qf = null);
      var d = vs,
        T = Ea;
      if (((Ge = 0), (Ta = vs = null), (Ea = 0), (Zt & 6) !== 0))
        throw Error(r(331));
      var b = Zt;
      if (
        ((Zt |= 4),
        sv(d.current),
        ev(d, d.current, T, a),
        (Zt = b),
        nl(0, !1),
        Xt && typeof Xt.onPostCommitFiberRoot == "function")
      )
        try {
          Xt.onPostCommitFiberRoot(he, d);
        } catch {}
      return !0;
    } finally {
      (et.p = h), (K.T = l), Tv(e, s);
    }
  }
  function bv(e, s, a) {
    (s = Nn(a, s)),
      (s = Rf(e.stateNode, s, 2)),
      (e = ls(e, s, 2)),
      e !== null && (Ai(e, 2), fi(e));
  }
  function ne(e, s, a) {
    if (e.tag === 3) bv(e, e, a);
    else
      for (; s !== null; ) {
        if (s.tag === 3) {
          bv(s, e, a);
          break;
        } else if (s.tag === 1) {
          var l = s.stateNode;
          if (
            typeof s.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ys === null || !ys.has(l)))
          ) {
            (e = Nn(a, e)),
              (a = Ry(2)),
              (l = ls(s, a, 2)),
              l !== null && (xy(a, l, s, e), Ai(l, 2), fi(l));
            break;
          }
        }
        s = s.return;
      }
  }
  function Jf(e, s, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new NS();
      var h = new Set();
      l.set(s, h);
    } else (h = l.get(s)), h === void 0 && ((h = new Set()), l.set(s, h));
    h.has(a) ||
      ((qf = !0), h.add(a), (e = BS.bind(null, e, s, a)), s.then(e, e));
  }
  function BS(e, s, a) {
    var l = e.pingCache;
    l !== null && l.delete(s),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      ie === e &&
        (Ut & a) === a &&
        (de === 4 || (de === 3 && (Ut & 62914560) === Ut && 300 > Cn() - Ff)
          ? (Zt & 2) === 0 && ba(e, 0)
          : (Hf |= a),
        _a === Ut && (_a = 0)),
      fi(e);
  }
  function Av(e, s) {
    s === 0 && (s = co()), (e = sa(e, s)), e !== null && (Ai(e, s), fi(e));
  }
  function zS(e) {
    var s = e.memoizedState,
      a = 0;
    s !== null && (a = s.retryLane), Av(e, a);
  }
  function jS(e, s) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          h = e.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(s), Av(e, a);
  }
  function qS(e, s) {
    return qs(e, s);
  }
  var lc = null,
    Sa = null,
    Wf = !1,
    uc = !1,
    td = !1,
    Ar = 0;
  function fi(e) {
    e !== Sa &&
      e.next === null &&
      (Sa === null ? (lc = Sa = e) : (Sa = Sa.next = e)),
      (uc = !0),
      Wf || ((Wf = !0), GS());
  }
  function nl(e, s) {
    if (!td && uc) {
      td = !0;
      do
        for (var a = !1, l = lc; l !== null; ) {
          if (e !== 0) {
            var h = l.pendingLanes;
            if (h === 0) var d = 0;
            else {
              var T = l.suspendedLanes,
                b = l.pingedLanes;
              (d = (1 << (31 - Xe(42 | e) + 1)) - 1),
                (d &= h & ~(T & ~b)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((a = !0), xv(l, d));
          } else
            (d = Ut),
              (d = Br(
                l,
                l === ie ? d : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (d & 3) === 0 || Ys(l, d) || ((a = !0), xv(l, d));
          l = l.next;
        }
      while (a);
      td = !1;
    }
  }
  function HS() {
    Sv();
  }
  function Sv() {
    uc = Wf = !1;
    var e = 0;
    Ar !== 0 && (JS() && (e = Ar), (Ar = 0));
    for (var s = Cn(), a = null, l = lc; l !== null; ) {
      var h = l.next,
        d = wv(l, s);
      d === 0
        ? ((l.next = null),
          a === null ? (lc = h) : (a.next = h),
          h === null && (Sa = a))
        : ((a = l), (e !== 0 || (d & 3) !== 0) && (uc = !0)),
        (l = h);
    }
    nl(e);
  }
  function wv(e, s) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        h = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var T = 31 - Xe(d),
        b = 1 << T,
        x = h[T];
      x === -1
        ? ((b & a) === 0 || (b & l) !== 0) && (h[T] = lo(b, s))
        : x <= s && (e.expiredLanes |= b),
        (d &= ~b);
    }
    if (
      ((s = ie),
      (a = Ut),
      (a = Br(
        e,
        e === s ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === s && ($t === 2 || $t === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Hs(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ys(e, a)) {
      if (((s = a & -a), s === e.callbackPriority)) return s;
      switch ((l !== null && Hs(l), zr(a))) {
        case 2:
        case 8:
          a = kr;
          break;
        case 32:
          a = Gs;
          break;
        case 268435456:
          a = Ur;
          break;
        default:
          a = Gs;
      }
      return (
        (l = Rv.bind(null, e)),
        (a = qs(a, l)),
        (e.callbackPriority = s),
        (e.callbackNode = a),
        s
      );
    }
    return (
      l !== null && l !== null && Hs(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Rv(e, s) {
    if (Ge !== 0 && Ge !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var a = e.callbackNode;
    if (oc() && e.callbackNode !== a) return null;
    var l = Ut;
    return (
      (l = Br(
        e,
        e === ie ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (lv(e, l, s),
          wv(e, Cn()),
          e.callbackNode != null && e.callbackNode === a
            ? Rv.bind(null, e)
            : null)
    );
  }
  function xv(e, s) {
    if (oc()) return null;
    lv(e, s, !0);
  }
  function GS() {
    t1(function () {
      (Zt & 6) !== 0 ? qs(ao, HS) : Sv();
    });
  }
  function ed() {
    return Ar === 0 && (Ar = uo()), Ar;
  }
  function Cv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Kr("" + e);
  }
  function Dv(e, s) {
    var a = s.ownerDocument.createElement("input");
    return (
      (a.name = s.name),
      (a.value = s.value),
      e.id && a.setAttribute("form", e.id),
      s.parentNode.insertBefore(a, s),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function FS(e, s, a, l, h) {
    if (s === "submit" && a && a.stateNode === h) {
      var d = Cv((h[be] || null).action),
        T = l.submitter;
      T &&
        ((s = (s = T[be] || null)
          ? Cv(s.formAction)
          : T.getAttribute("formAction")),
        s !== null && ((d = s), (T = null)));
      var b = new Qr("action", "action", null, l, h);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ar !== 0) {
                  var x = T ? Dv(h, T) : new FormData(h);
                  Ef(
                    a,
                    { pending: !0, data: x, method: h.method, action: d },
                    null,
                    x
                  );
                }
              } else
                typeof d == "function" &&
                  (b.preventDefault(),
                  (x = T ? Dv(h, T) : new FormData(h)),
                  Ef(
                    a,
                    { pending: !0, data: x, method: h.method, action: d },
                    d,
                    x
                  ));
            },
            currentTarget: h,
          },
        ],
      });
    }
  }
  for (var nd = 0; nd < Bh.length; nd++) {
    var id = Bh[nd],
      KS = id.toLowerCase(),
      QS = id[0].toUpperCase() + id.slice(1);
    Qn(KS, "on" + QS);
  }
  Qn(lg, "onAnimationEnd"),
    Qn(ug, "onAnimationIteration"),
    Qn(cg, "onAnimationStart"),
    Qn("dblclick", "onDoubleClick"),
    Qn("focusin", "onFocus"),
    Qn("focusout", "onBlur"),
    Qn(cS, "onTransitionRun"),
    Qn(hS, "onTransitionStart"),
    Qn(fS, "onTransitionCancel"),
    Qn(hg, "onTransitionEnd"),
    wi("onMouseEnter", ["mouseout", "mouseover"]),
    wi("onMouseLeave", ["mouseout", "mouseover"]),
    wi("onPointerEnter", ["pointerout", "pointerover"]),
    wi("onPointerLeave", ["pointerout", "pointerover"]),
    Fn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Fn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Fn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var il =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    YS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(il)
    );
  function Vv(e, s) {
    s = (s & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        h = l.event;
      l = l.listeners;
      t: {
        var d = void 0;
        if (s)
          for (var T = l.length - 1; 0 <= T; T--) {
            var b = l[T],
              x = b.instance,
              z = b.currentTarget;
            if (((b = b.listener), x !== d && h.isPropagationStopped()))
              break t;
            (d = b), (h.currentTarget = z);
            try {
              d(h);
            } catch (Q) {
              Zu(Q);
            }
            (h.currentTarget = null), (d = x);
          }
        else
          for (T = 0; T < l.length; T++) {
            if (
              ((b = l[T]),
              (x = b.instance),
              (z = b.currentTarget),
              (b = b.listener),
              x !== d && h.isPropagationStopped())
            )
              break t;
            (d = b), (h.currentTarget = z);
            try {
              d(h);
            } catch (Q) {
              Zu(Q);
            }
            (h.currentTarget = null), (d = x);
          }
      }
    }
  }
  function Pt(e, s) {
    var a = s[mo];
    a === void 0 && (a = s[mo] = new Set());
    var l = e + "__bubble";
    a.has(l) || (Mv(s, e, 2, !1), a.add(l));
  }
  function sd(e, s, a) {
    var l = 0;
    s && (l |= 4), Mv(a, e, l, s);
  }
  var cc = "_reactListening" + Math.random().toString(36).slice(2);
  function rd(e) {
    if (!e[cc]) {
      (e[cc] = !0),
        po.forEach(function (a) {
          a !== "selectionchange" && (YS.has(a) || sd(a, !1, e), sd(a, !0, e));
        });
      var s = e.nodeType === 9 ? e : e.ownerDocument;
      s === null || s[cc] || ((s[cc] = !0), sd("selectionchange", !1, s));
    }
  }
  function Mv(e, s, a, l) {
    switch (e0(s)) {
      case 2:
        var h = E1;
        break;
      case 8:
        h = b1;
        break;
      default:
        h = _d;
    }
    (a = h.bind(null, s, a, e)),
      (h = void 0),
      !On ||
        (s !== "touchstart" && s !== "touchmove" && s !== "wheel") ||
        (h = !0),
      l
        ? h !== void 0
          ? e.addEventListener(s, a, { capture: !0, passive: h })
          : e.addEventListener(s, a, !0)
        : h !== void 0
        ? e.addEventListener(s, a, { passive: h })
        : e.addEventListener(s, a, !1);
  }
  function ad(e, s, a, l, h) {
    var d = l;
    if ((s & 1) === 0 && (s & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var T = l.tag;
        if (T === 3 || T === 4) {
          var b = l.stateNode.containerInfo;
          if (b === h) break;
          if (T === 4)
            for (T = l.return; T !== null; ) {
              var x = T.tag;
              if ((x === 3 || x === 4) && T.stateNode.containerInfo === h)
                return;
              T = T.return;
            }
          for (; b !== null; ) {
            if (((T = Si(b)), T === null)) return;
            if (((x = T.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              l = d = T;
              continue t;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    fu(function () {
      var z = d,
        Q = Mn(a),
        Z = [];
      t: {
        var j = fg.get(e);
        if (j !== void 0) {
          var q = Qr,
            At = e;
          switch (e) {
            case "keypress":
              if (ii(a) === 0) break t;
            case "keydown":
            case "keyup":
              q = Wr;
              break;
            case "focusin":
              (At = "focus"), (q = Zr);
              break;
            case "focusout":
              (At = "blur"), (q = Zr);
              break;
            case "beforeblur":
            case "afterblur":
              q = Zr;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = In;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Mh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Tu;
              break;
            case lg:
            case ug:
            case cg:
              q = $r;
              break;
            case hg:
              q = bu;
              break;
            case "scroll":
            case "scrollend":
              q = du;
              break;
            case "wheel":
              q = ta;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Jr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = xo;
              break;
            case "toggle":
            case "beforetoggle":
              q = Su;
          }
          var yt = (s & 4) !== 0,
            ee = !yt && (e === "scroll" || e === "scrollend"),
            L = yt ? (j !== null ? j + "Capture" : null) : j;
          yt = [];
          for (var I = z, U; I !== null; ) {
            var Y = I;
            if (
              ((U = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                U === null ||
                L === null ||
                ((Y = nr(I, L)), Y != null && yt.push(sl(I, Y, U))),
              ee)
            )
              break;
            I = I.return;
          }
          0 < yt.length &&
            ((j = new q(j, At, null, a, Q)),
            Z.push({ event: j, listeners: yt }));
        }
      }
      if ((s & 7) === 0) {
        t: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            j &&
              a !== Ci &&
              (At = a.relatedTarget || a.fromElement) &&
              (Si(At) || At[Dn]))
          )
            break t;
          if (
            (q || j) &&
            ((j =
              Q.window === Q
                ? Q
                : (j = Q.ownerDocument)
                ? j.defaultView || j.parentWindow
                : window),
            q
              ? ((At = a.relatedTarget || a.toElement),
                (q = z),
                (At = At ? Si(At) : null),
                At !== null &&
                  ((ee = u(At)),
                  (yt = At.tag),
                  At !== ee || (yt !== 5 && yt !== 27 && yt !== 6)) &&
                  (At = null))
              : ((q = null), (At = z)),
            q !== At)
          ) {
            if (
              ((yt = In),
              (Y = "onMouseLeave"),
              (L = "onMouseEnter"),
              (I = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((yt = xo),
                (Y = "onPointerLeave"),
                (L = "onPointerEnter"),
                (I = "pointer")),
              (ee = q == null ? j : Wn(q)),
              (U = At == null ? j : Wn(At)),
              (j = new yt(Y, I + "leave", q, a, Q)),
              (j.target = ee),
              (j.relatedTarget = U),
              (Y = null),
              Si(Q) === z &&
                ((yt = new yt(L, I + "enter", At, a, Q)),
                (yt.target = U),
                (yt.relatedTarget = ee),
                (Y = yt)),
              (ee = Y),
              q && At)
            )
              e: {
                for (yt = q, L = At, I = 0, U = yt; U; U = wa(U)) I++;
                for (U = 0, Y = L; Y; Y = wa(Y)) U++;
                for (; 0 < I - U; ) (yt = wa(yt)), I--;
                for (; 0 < U - I; ) (L = wa(L)), U--;
                for (; I--; ) {
                  if (yt === L || (L !== null && yt === L.alternate)) break e;
                  (yt = wa(yt)), (L = wa(L));
                }
                yt = null;
              }
            else yt = null;
            q !== null && Ov(Z, j, q, yt, !1),
              At !== null && ee !== null && Ov(Z, ee, At, yt, !0);
          }
        }
        t: {
          if (
            ((j = z ? Wn(z) : window),
            (q = j.nodeName && j.nodeName.toLowerCase()),
            q === "select" || (q === "input" && j.type === "file"))
          )
            var ht = $p;
          else if (De(j))
            if (Jp) ht = oS;
            else {
              ht = rS;
              var Mt = sS;
            }
          else
            (q = j.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? z && To(z.elementType) && (ht = $p)
                : (ht = aS);
          if (ht && (ht = ht(e, z))) {
            Ii(Z, ht, a, Q);
            break t;
          }
          Mt && Mt(e, j, z),
            e === "focusout" &&
              z &&
              j.type === "number" &&
              z.memoizedProps.value != null &&
              is(j, "number", j.value);
        }
        switch (((Mt = z ? Wn(z) : window), e)) {
          case "focusin":
            (De(Mt) || Mt.contentEditable === "true") &&
              ((ea = Mt), (Lh = z), (Vo = null));
            break;
          case "focusout":
            Vo = Lh = ea = null;
            break;
          case "mousedown":
            kh = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (kh = !1), ag(Z, a, Q);
            break;
          case "selectionchange":
            if (uS) break;
          case "keydown":
          case "keyup":
            ag(Z, a, Q);
        }
        var gt;
        if (ai)
          t: {
            switch (e) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          Lt
            ? G(e, a) && (vt = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (vt = "onCompositionStart");
        vt &&
          (_ &&
            a.locale !== "ko" &&
            (Lt || vt !== "onCompositionStart"
              ? vt === "onCompositionEnd" && Lt && (gt = bo())
              : ((ni = Q),
                (ss = "value" in ni ? ni.value : ni.textContent),
                (Lt = !0))),
          (Mt = hc(z, vt)),
          0 < Mt.length &&
            ((vt = new wo(vt, e, null, a, Q)),
            Z.push({ event: vt, listeners: Mt }),
            gt
              ? (vt.data = gt)
              : ((gt = rt(a)), gt !== null && (vt.data = gt)))),
          (gt = y ? Ce(e, a) : kt(e, a)) &&
            ((vt = hc(z, "onBeforeInput")),
            0 < vt.length &&
              ((Mt = new wo("onBeforeInput", "beforeinput", null, a, Q)),
              Z.push({ event: Mt, listeners: vt }),
              (Mt.data = gt))),
          FS(Z, e, z, a, Q);
      }
      Vv(Z, s);
    });
  }
  function sl(e, s, a) {
    return { instance: e, listener: s, currentTarget: a };
  }
  function hc(e, s) {
    for (var a = s + "Capture", l = []; e !== null; ) {
      var h = e,
        d = h.stateNode;
      if (
        ((h = h.tag),
        (h !== 5 && h !== 26 && h !== 27) ||
          d === null ||
          ((h = nr(e, a)),
          h != null && l.unshift(sl(e, h, d)),
          (h = nr(e, s)),
          h != null && l.push(sl(e, h, d))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function wa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ov(e, s, a, l, h) {
    for (var d = s._reactName, T = []; a !== null && a !== l; ) {
      var b = a,
        x = b.alternate,
        z = b.stateNode;
      if (((b = b.tag), x !== null && x === l)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        z === null ||
        ((x = z),
        h
          ? ((z = nr(a, d)), z != null && T.unshift(sl(a, z, x)))
          : h || ((z = nr(a, d)), z != null && T.push(sl(a, z, x)))),
        (a = a.return);
    }
    T.length !== 0 && e.push({ event: s, listeners: T });
  }
  var XS = /\r\n?/g,
    ZS = /\u0000|\uFFFD/g;
  function Iv(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        XS,
        `
`
      )
      .replace(ZS, "");
  }
  function Nv(e, s) {
    return (s = Iv(s)), Iv(e) === s;
  }
  function fc() {}
  function te(e, s, a, l, h, d) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? s === "body" || (s === "textarea" && l === "") || Vn(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            s !== "body" &&
            Vn(e, "" + l);
        break;
      case "className":
        ti(e, "class", l);
        break;
      case "tabIndex":
        ti(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ti(e, a, l);
        break;
      case "style":
        _o(e, l, d);
        break;
      case "data":
        if (s !== "object") {
          ti(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (s !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (l = Kr("" + l)), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (s !== "input" && te(e, s, "name", h.name, h, null),
                te(e, s, "formEncType", h.formEncType, h, null),
                te(e, s, "formMethod", h.formMethod, h, null),
                te(e, s, "formTarget", h.formTarget, h, null))
              : (te(e, s, "encType", h.encType, h, null),
                te(e, s, "method", h.method, h, null),
                te(e, s, "target", h.target, h, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (l = Kr("" + l)), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = fc);
        break;
      case "onScroll":
        l != null && Pt("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Pt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (h.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = Kr("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        Pt("beforetoggle", e), Pt("toggle", e), ns(e, "popover", l);
        break;
      case "xlinkActuate":
        je(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        je(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        je(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        je(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        je(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        je(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ns(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Dh.get(a) || a), ns(e, a, l));
    }
  }
  function od(e, s, a, l, h, d) {
    switch (a) {
      case "style":
        _o(e, l, d);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (h.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Vn(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Vn(e, "" + l);
        break;
      case "onScroll":
        l != null && Pt("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Pt("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = fc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jr.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((h = a.endsWith("Capture")),
              (s = a.slice(2, h ? a.length - 7 : void 0)),
              (d = e[be] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && e.removeEventListener(s, d, h),
              typeof l == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(s, l, h);
              break t;
            }
            a in e
              ? (e[a] = l)
              : l === !0
              ? e.setAttribute(a, "")
              : ns(e, a, l);
          }
    }
  }
  function Fe(e, s, a) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Pt("error", e), Pt("load", e);
        var l = !1,
          h = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var T = a[d];
            if (T != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  h = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, s));
                default:
                  te(e, s, d, T, a, null);
              }
          }
        h && te(e, s, "srcSet", a.srcSet, a, null),
          l && te(e, s, "src", a.src, a, null);
        return;
      case "input":
        Pt("invalid", e);
        var b = (d = T = h = null),
          x = null,
          z = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var Q = a[l];
            if (Q != null)
              switch (l) {
                case "name":
                  h = Q;
                  break;
                case "type":
                  T = Q;
                  break;
                case "checked":
                  x = Q;
                  break;
                case "defaultChecked":
                  z = Q;
                  break;
                case "value":
                  d = Q;
                  break;
                case "defaultValue":
                  b = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null) throw Error(r(137, s));
                  break;
                default:
                  te(e, s, l, Q, a, null);
              }
          }
        Ws(e, d, b, x, z, T, h, !1), Fr(e);
        return;
      case "select":
        Pt("invalid", e), (l = T = d = null);
        for (h in a)
          if (a.hasOwnProperty(h) && ((b = a[h]), b != null))
            switch (h) {
              case "value":
                d = b;
                break;
              case "defaultValue":
                T = b;
                break;
              case "multiple":
                l = b;
              default:
                te(e, s, h, b, a, null);
            }
        (s = d),
          (a = T),
          (e.multiple = !!l),
          s != null ? xi(e, !!l, s, !1) : a != null && xi(e, !!l, a, !0);
        return;
      case "textarea":
        Pt("invalid", e), (d = h = l = null);
        for (T in a)
          if (a.hasOwnProperty(T) && ((b = a[T]), b != null))
            switch (T) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "children":
                d = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                te(e, s, T, b, a, null);
            }
        tr(e, l, h, d), Fr(e);
        return;
      case "option":
        for (x in a)
          if (a.hasOwnProperty(x) && ((l = a[x]), l != null))
            switch (x) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                te(e, s, x, l, a, null);
            }
        return;
      case "dialog":
        Pt("beforetoggle", e), Pt("toggle", e), Pt("cancel", e), Pt("close", e);
        break;
      case "iframe":
      case "object":
        Pt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < il.length; l++) Pt(il[l], e);
        break;
      case "image":
        Pt("error", e), Pt("load", e);
        break;
      case "details":
        Pt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Pt("error", e), Pt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in a)
          if (a.hasOwnProperty(z) && ((l = a[z]), l != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, s));
              default:
                te(e, s, z, l, a, null);
            }
        return;
      default:
        if (To(s)) {
          for (Q in a)
            a.hasOwnProperty(Q) &&
              ((l = a[Q]), l !== void 0 && od(e, s, Q, l, a, void 0));
          return;
        }
    }
    for (b in a)
      a.hasOwnProperty(b) && ((l = a[b]), l != null && te(e, s, b, l, a, null));
  }
  function $S(e, s, a, l) {
    switch (s) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var h = null,
          d = null,
          T = null,
          b = null,
          x = null,
          z = null,
          Q = null;
        for (q in a) {
          var Z = a[q];
          if (a.hasOwnProperty(q) && Z != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = Z;
              default:
                l.hasOwnProperty(q) || te(e, s, q, null, l, Z);
            }
        }
        for (var j in l) {
          var q = l[j];
          if (((Z = a[j]), l.hasOwnProperty(j) && (q != null || Z != null)))
            switch (j) {
              case "type":
                d = q;
                break;
              case "name":
                h = q;
                break;
              case "checked":
                z = q;
                break;
              case "defaultChecked":
                Q = q;
                break;
              case "value":
                T = q;
                break;
              case "defaultValue":
                b = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(r(137, s));
                break;
              default:
                q !== Z && te(e, s, j, q, l, Z);
            }
        }
        _n(e, T, b, x, z, Q, d, h);
        return;
      case "select":
        q = T = b = j = null;
        for (d in a)
          if (((x = a[d]), a.hasOwnProperty(d) && x != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                q = x;
              default:
                l.hasOwnProperty(d) || te(e, s, d, null, l, x);
            }
        for (h in l)
          if (
            ((d = l[h]),
            (x = a[h]),
            l.hasOwnProperty(h) && (d != null || x != null))
          )
            switch (h) {
              case "value":
                j = d;
                break;
              case "defaultValue":
                b = d;
                break;
              case "multiple":
                T = d;
              default:
                d !== x && te(e, s, h, d, l, x);
            }
        (s = b),
          (a = T),
          (l = q),
          j != null
            ? xi(e, !!a, j, !1)
            : !!l != !!a &&
              (s != null ? xi(e, !!a, s, !0) : xi(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        q = j = null;
        for (b in a)
          if (
            ((h = a[b]),
            a.hasOwnProperty(b) && h != null && !l.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                te(e, s, b, null, l, h);
            }
        for (T in l)
          if (
            ((h = l[T]),
            (d = a[T]),
            l.hasOwnProperty(T) && (h != null || d != null))
          )
            switch (T) {
              case "value":
                j = h;
                break;
              case "defaultValue":
                q = h;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(r(91));
                break;
              default:
                h !== d && te(e, s, T, h, l, d);
            }
        Jt(e, j, q);
        return;
      case "option":
        for (var At in a)
          if (
            ((j = a[At]),
            a.hasOwnProperty(At) && j != null && !l.hasOwnProperty(At))
          )
            switch (At) {
              case "selected":
                e.selected = !1;
                break;
              default:
                te(e, s, At, null, l, j);
            }
        for (x in l)
          if (
            ((j = l[x]),
            (q = a[x]),
            l.hasOwnProperty(x) && j !== q && (j != null || q != null))
          )
            switch (x) {
              case "selected":
                e.selected =
                  j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                te(e, s, x, j, l, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in a)
          (j = a[yt]),
            a.hasOwnProperty(yt) &&
              j != null &&
              !l.hasOwnProperty(yt) &&
              te(e, s, yt, null, l, j);
        for (z in l)
          if (
            ((j = l[z]),
            (q = a[z]),
            l.hasOwnProperty(z) && j !== q && (j != null || q != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(r(137, s));
                break;
              default:
                te(e, s, z, j, l, q);
            }
        return;
      default:
        if (To(s)) {
          for (var ee in a)
            (j = a[ee]),
              a.hasOwnProperty(ee) &&
                j !== void 0 &&
                !l.hasOwnProperty(ee) &&
                od(e, s, ee, void 0, l, j);
          for (Q in l)
            (j = l[Q]),
              (q = a[Q]),
              !l.hasOwnProperty(Q) ||
                j === q ||
                (j === void 0 && q === void 0) ||
                od(e, s, Q, j, l, q);
          return;
        }
    }
    for (var L in a)
      (j = a[L]),
        a.hasOwnProperty(L) &&
          j != null &&
          !l.hasOwnProperty(L) &&
          te(e, s, L, null, l, j);
    for (Z in l)
      (j = l[Z]),
        (q = a[Z]),
        !l.hasOwnProperty(Z) ||
          j === q ||
          (j == null && q == null) ||
          te(e, s, Z, j, l, q);
  }
  var ld = null,
    ud = null;
  function dc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lv(e, s) {
    if (e === 0)
      switch (s) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && s === "foreignObject" ? 0 : e;
  }
  function cd(e, s) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof s.children == "string" ||
      typeof s.children == "number" ||
      typeof s.children == "bigint" ||
      (typeof s.dangerouslySetInnerHTML == "object" &&
        s.dangerouslySetInnerHTML !== null &&
        s.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hd = null;
  function JS() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === hd
        ? !1
        : ((hd = e), !0)
      : ((hd = null), !1);
  }
  var kv = typeof setTimeout == "function" ? setTimeout : void 0,
    WS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Uv = typeof Promise == "function" ? Promise : void 0,
    t1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Uv < "u"
        ? function (e) {
            return Uv.resolve(null).then(e).catch(e1);
          }
        : kv;
  function e1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ts(e) {
    return e === "head";
  }
  function Bv(e, s) {
    var a = s,
      l = 0,
      h = 0;
    do {
      var d = a.nextSibling;
      if ((e.removeChild(a), d && d.nodeType === 8))
        if (((a = d.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var T = e.ownerDocument;
            if ((a & 1 && rl(T.documentElement), a & 2 && rl(T.body), a & 4))
              for (a = T.head, rl(a), T = a.firstChild; T; ) {
                var b = T.nextSibling,
                  x = T.nodeName;
                T[Xs] ||
                  x === "SCRIPT" ||
                  x === "STYLE" ||
                  (x === "LINK" && T.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(T),
                  (T = b);
              }
          }
          if (h === 0) {
            e.removeChild(d), dl(s);
            return;
          }
          h--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? h++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = d;
    } while (a);
    dl(s);
  }
  function fd(e) {
    var s = e.firstChild;
    for (s && s.nodeType === 10 && (s = s.nextSibling); s; ) {
      var a = s;
      switch (((s = s.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fd(a), es(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function n1(e, s, a, l) {
    for (; e.nodeType === 1; ) {
      var h = a;
      if (e.nodeName.toLowerCase() !== s.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Xs])
          switch (s) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== h.rel ||
                e.getAttribute("href") !==
                  (h.href == null || h.href === "" ? null : h.href) ||
                e.getAttribute("crossorigin") !==
                  (h.crossOrigin == null ? null : h.crossOrigin) ||
                e.getAttribute("title") !== (h.title == null ? null : h.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (h.src == null ? null : h.src) ||
                  e.getAttribute("type") !== (h.type == null ? null : h.type) ||
                  e.getAttribute("crossorigin") !==
                    (h.crossOrigin == null ? null : h.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (s === "input" && e.type === "hidden") {
        var d = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = Xn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function i1(e, s, a) {
    if (s === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Xn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function dd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function s1(e, s) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") s();
    else {
      var l = function () {
        s(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Xn(e) {
    for (; e != null; e = e.nextSibling) {
      var s = e.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (
          ((s = e.data),
          s === "$" || s === "$!" || s === "$?" || s === "F!" || s === "F")
        )
          break;
        if (s === "/$") return null;
      }
    }
    return e;
  }
  var md = null;
  function zv(e) {
    e = e.previousSibling;
    for (var s = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (s === 0) return e;
          s--;
        } else a === "/$" && s++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jv(e, s, a) {
    switch (((s = dc(a)), e)) {
      case "html":
        if (((e = s.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = s.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = s.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function rl(e) {
    for (var s = e.attributes; s.length; ) e.removeAttributeNode(s[0]);
    es(e);
  }
  var zn = new Map(),
    qv = new Set();
  function mc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Ki = et.d;
  et.d = { f: r1, r: a1, D: o1, C: l1, L: u1, m: c1, X: f1, S: h1, M: d1 };
  function r1() {
    var e = Ki.f(),
      s = rc();
    return e || s;
  }
  function a1(e) {
    var s = Jn(e);
    s !== null && s.tag === 5 && s.type === "form" ? ly(s) : Ki.r(e);
  }
  var Ra = typeof document > "u" ? null : document;
  function Hv(e, s, a) {
    var l = Ra;
    if (l && typeof s == "string" && s) {
      var h = Ae(s);
      (h = 'link[rel="' + e + '"][href="' + h + '"]'),
        typeof a == "string" && (h += '[crossorigin="' + a + '"]'),
        qv.has(h) ||
          (qv.add(h),
          (e = { rel: e, crossOrigin: a, href: s }),
          l.querySelector(h) === null &&
            ((s = l.createElement("link")),
            Fe(s, "link", e),
            ge(s),
            l.head.appendChild(s)));
    }
  }
  function o1(e) {
    Ki.D(e), Hv("dns-prefetch", e, null);
  }
  function l1(e, s) {
    Ki.C(e, s), Hv("preconnect", e, s);
  }
  function u1(e, s, a) {
    Ki.L(e, s, a);
    var l = Ra;
    if (l && e && s) {
      var h = 'link[rel="preload"][as="' + Ae(s) + '"]';
      s === "image" && a && a.imageSrcSet
        ? ((h += '[imagesrcset="' + Ae(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (h += '[imagesizes="' + Ae(a.imageSizes) + '"]'))
        : (h += '[href="' + Ae(e) + '"]');
      var d = h;
      switch (s) {
        case "style":
          d = xa(e);
          break;
        case "script":
          d = Ca(e);
      }
      zn.has(d) ||
        ((e = v(
          {
            rel: "preload",
            href: s === "image" && a && a.imageSrcSet ? void 0 : e,
            as: s,
          },
          a
        )),
        zn.set(d, e),
        l.querySelector(h) !== null ||
          (s === "style" && l.querySelector(al(d))) ||
          (s === "script" && l.querySelector(ol(d))) ||
          ((s = l.createElement("link")),
          Fe(s, "link", e),
          ge(s),
          l.head.appendChild(s)));
    }
  }
  function c1(e, s) {
    Ki.m(e, s);
    var a = Ra;
    if (a && e) {
      var l = s && typeof s.as == "string" ? s.as : "script",
        h =
          'link[rel="modulepreload"][as="' + Ae(l) + '"][href="' + Ae(e) + '"]',
        d = h;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ca(e);
      }
      if (
        !zn.has(d) &&
        ((e = v({ rel: "modulepreload", href: e }, s)),
        zn.set(d, e),
        a.querySelector(h) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ol(d))) return;
        }
        (l = a.createElement("link")),
          Fe(l, "link", e),
          ge(l),
          a.head.appendChild(l);
      }
    }
  }
  function h1(e, s, a) {
    Ki.S(e, s, a);
    var l = Ra;
    if (l && e) {
      var h = rn(l).hoistableStyles,
        d = xa(e);
      s = s || "default";
      var T = h.get(d);
      if (!T) {
        var b = { loading: 0, preload: null };
        if ((T = l.querySelector(al(d)))) b.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": s }, a)),
            (a = zn.get(d)) && pd(e, a);
          var x = (T = l.createElement("link"));
          ge(x),
            Fe(x, "link", e),
            (x._p = new Promise(function (z, Q) {
              (x.onload = z), (x.onerror = Q);
            })),
            x.addEventListener("load", function () {
              b.loading |= 1;
            }),
            x.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            pc(T, s, l);
        }
        (T = { type: "stylesheet", instance: T, count: 1, state: b }),
          h.set(d, T);
      }
    }
  }
  function f1(e, s) {
    Ki.X(e, s);
    var a = Ra;
    if (a && e) {
      var l = rn(a).hoistableScripts,
        h = Ca(e),
        d = l.get(h);
      d ||
        ((d = a.querySelector(ol(h))),
        d ||
          ((e = v({ src: e, async: !0 }, s)),
          (s = zn.get(h)) && gd(e, s),
          (d = a.createElement("script")),
          ge(d),
          Fe(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(h, d));
    }
  }
  function d1(e, s) {
    Ki.M(e, s);
    var a = Ra;
    if (a && e) {
      var l = rn(a).hoistableScripts,
        h = Ca(e),
        d = l.get(h);
      d ||
        ((d = a.querySelector(ol(h))),
        d ||
          ((e = v({ src: e, async: !0, type: "module" }, s)),
          (s = zn.get(h)) && gd(e, s),
          (d = a.createElement("script")),
          ge(d),
          Fe(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(h, d));
    }
  }
  function Gv(e, s, a, l) {
    var h = (h = bt.current) ? mc(h) : null;
    if (!h) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((s = xa(a.href)),
            (a = rn(h).hoistableStyles),
            (l = a.get(s)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(s, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = xa(a.href);
          var d = rn(h).hoistableStyles,
            T = d.get(e);
          if (
            (T ||
              ((h = h.ownerDocument || h),
              (T = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, T),
              (d = h.querySelector(al(e))) &&
                !d._p &&
                ((T.instance = d), (T.state.loading = 5)),
              zn.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                zn.set(e, a),
                d || m1(h, e, a, T.state))),
            s && l === null)
          )
            throw Error(r(528, ""));
          return T;
        }
        if (s && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (s = a.async),
          (a = a.src),
          typeof a == "string" &&
          s &&
          typeof s != "function" &&
          typeof s != "symbol"
            ? ((s = Ca(a)),
              (a = rn(h).hoistableScripts),
              (l = a.get(s)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(s, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function xa(e) {
    return 'href="' + Ae(e) + '"';
  }
  function al(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fv(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function m1(e, s, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + s + "]")
      ? (l.loading = 1)
      : ((s = e.createElement("link")),
        (l.preload = s),
        s.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        s.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Fe(s, "link", a),
        ge(s),
        e.head.appendChild(s));
  }
  function Ca(e) {
    return '[src="' + Ae(e) + '"]';
  }
  function ol(e) {
    return "script[async]" + e;
  }
  function Kv(e, s, a) {
    if ((s.count++, s.instance === null))
      switch (s.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Ae(a.href) + '"]');
          if (l) return (s.instance = l), ge(l), l;
          var h = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ge(l),
            Fe(l, "style", h),
            pc(l, a.precedence, e),
            (s.instance = l)
          );
        case "stylesheet":
          h = xa(a.href);
          var d = e.querySelector(al(h));
          if (d) return (s.state.loading |= 4), (s.instance = d), ge(d), d;
          (l = Fv(a)),
            (h = zn.get(h)) && pd(l, h),
            (d = (e.ownerDocument || e).createElement("link")),
            ge(d);
          var T = d;
          return (
            (T._p = new Promise(function (b, x) {
              (T.onload = b), (T.onerror = x);
            })),
            Fe(d, "link", l),
            (s.state.loading |= 4),
            pc(d, a.precedence, e),
            (s.instance = d)
          );
        case "script":
          return (
            (d = Ca(a.src)),
            (h = e.querySelector(ol(d)))
              ? ((s.instance = h), ge(h), h)
              : ((l = a),
                (h = zn.get(d)) && ((l = v({}, a)), gd(l, h)),
                (e = e.ownerDocument || e),
                (h = e.createElement("script")),
                ge(h),
                Fe(h, "link", l),
                e.head.appendChild(h),
                (s.instance = h))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, s.type));
      }
    else
      s.type === "stylesheet" &&
        (s.state.loading & 4) === 0 &&
        ((l = s.instance), (s.state.loading |= 4), pc(l, a.precedence, e));
    return s.instance;
  }
  function pc(e, s, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        h = l.length ? l[l.length - 1] : null,
        d = h,
        T = 0;
      T < l.length;
      T++
    ) {
      var b = l[T];
      if (b.dataset.precedence === s) d = b;
      else if (d !== h) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((s = a.nodeType === 9 ? a.head : a), s.insertBefore(e, s.firstChild));
  }
  function pd(e, s) {
    e.crossOrigin == null && (e.crossOrigin = s.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy),
      e.title == null && (e.title = s.title);
  }
  function gd(e, s) {
    e.crossOrigin == null && (e.crossOrigin = s.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = s.referrerPolicy),
      e.integrity == null && (e.integrity = s.integrity);
  }
  var gc = null;
  function Qv(e, s, a) {
    if (gc === null) {
      var l = new Map(),
        h = (gc = new Map());
      h.set(a, l);
    } else (h = gc), (l = h.get(a)), l || ((l = new Map()), h.set(a, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), h = 0;
      h < a.length;
      h++
    ) {
      var d = a[h];
      if (
        !(
          d[Xs] ||
          d[xe] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var T = d.getAttribute(s) || "";
        T = e + T;
        var b = l.get(T);
        b ? b.push(d) : l.set(T, [d]);
      }
    }
    return l;
  }
  function Yv(e, s, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        s === "title" ? e.querySelector("head > title") : null
      );
  }
  function p1(e, s, a) {
    if (a === 1 || s.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof s.precedence != "string" ||
          typeof s.href != "string" ||
          s.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof s.rel != "string" ||
          typeof s.href != "string" ||
          s.href === "" ||
          s.onLoad ||
          s.onError
        )
          break;
        switch (s.rel) {
          case "stylesheet":
            return (
              (e = s.disabled), typeof s.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          s.async &&
          typeof s.async != "function" &&
          typeof s.async != "symbol" &&
          !s.onLoad &&
          !s.onError &&
          s.src &&
          typeof s.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ll = null;
  function g1() {}
  function y1(e, s, a) {
    if (ll === null) throw Error(r(475));
    var l = ll;
    if (
      s.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (s.state.loading & 4) === 0
    ) {
      if (s.instance === null) {
        var h = xa(a.href),
          d = e.querySelector(al(h));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = yc.bind(l)), e.then(l, l)),
            (s.state.loading |= 4),
            (s.instance = d),
            ge(d);
          return;
        }
        (d = e.ownerDocument || e),
          (a = Fv(a)),
          (h = zn.get(h)) && pd(a, h),
          (d = d.createElement("link")),
          ge(d);
        var T = d;
        (T._p = new Promise(function (b, x) {
          (T.onload = b), (T.onerror = x);
        })),
          Fe(d, "link", a),
          (s.instance = d);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(s, e),
        (e = s.state.preload) &&
          (s.state.loading & 3) === 0 &&
          (l.count++,
          (s = yc.bind(l)),
          e.addEventListener("load", s),
          e.addEventListener("error", s));
    }
  }
  function v1() {
    if (ll === null) throw Error(r(475));
    var e = ll;
    return (
      e.stylesheets && e.count === 0 && yd(e, e.stylesheets),
      0 < e.count
        ? function (s) {
            var a = setTimeout(function () {
              if ((e.stylesheets && yd(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = s),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function yc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) yd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var vc = null;
  function yd(e, s) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (vc = new Map()),
        s.forEach(_1, e),
        (vc = null),
        yc.call(e));
  }
  function _1(e, s) {
    if (!(s.state.loading & 4)) {
      var a = vc.get(e);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), vc.set(e, a);
        for (
          var h = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < h.length;
          d++
        ) {
          var T = h[d];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") &&
            (a.set(T.dataset.precedence, T), (l = T));
        }
        l && a.set(null, l);
      }
      (h = s.instance),
        (T = h.getAttribute("data-precedence")),
        (d = a.get(T) || l),
        d === l && a.set(null, h),
        a.set(T, h),
        this.count++,
        (l = yc.bind(this)),
        h.addEventListener("load", l),
        h.addEventListener("error", l),
        d
          ? d.parentNode.insertBefore(h, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(h, e.firstChild)),
        (s.state.loading |= 4);
    }
  }
  var ul = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function T1(e, s, a, l, h, d, T, b) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bi(0)),
      (this.hiddenUpdates = bi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = h),
      (this.onCaughtError = d),
      (this.onRecoverableError = T),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Zv(e, s, a, l, h, d, T, b, x, z, Q, Z) {
    return (
      (e = new T1(e, s, a, T, b, x, z, Z)),
      (s = 1),
      d === !0 && (s |= 24),
      (d = En(3, null, null, s)),
      (e.current = d),
      (d.stateNode = e),
      (s = $h()),
      s.refCount++,
      (e.pooledCache = s),
      s.refCount++,
      (d.memoizedState = { element: l, isDehydrated: a, cache: s }),
      ef(d),
      e
    );
  }
  function $v(e) {
    return e ? ((e = ra), e) : ra;
  }
  function Jv(e, s, a, l, h, d) {
    (h = $v(h)),
      l.context === null ? (l.context = h) : (l.pendingContext = h),
      (l = os(s)),
      (l.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (l.callback = d),
      (a = ls(e, l, s)),
      a !== null && (Rn(a, e, s), Bo(a, e, s));
  }
  function Wv(e, s) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < s ? a : s;
    }
  }
  function vd(e, s) {
    Wv(e, s), (e = e.alternate) && Wv(e, s);
  }
  function t0(e) {
    if (e.tag === 13) {
      var s = sa(e, 67108864);
      s !== null && Rn(s, e, 67108864), vd(e, 67108864);
    }
  }
  var _c = !0;
  function E1(e, s, a, l) {
    var h = K.T;
    K.T = null;
    var d = et.p;
    try {
      (et.p = 2), _d(e, s, a, l);
    } finally {
      (et.p = d), (K.T = h);
    }
  }
  function b1(e, s, a, l) {
    var h = K.T;
    K.T = null;
    var d = et.p;
    try {
      (et.p = 8), _d(e, s, a, l);
    } finally {
      (et.p = d), (K.T = h);
    }
  }
  function _d(e, s, a, l) {
    if (_c) {
      var h = Td(l);
      if (h === null) ad(e, s, l, Tc, a), n0(e, l);
      else if (S1(h, e, s, a, l)) l.stopPropagation();
      else if ((n0(e, l), s & 4 && -1 < A1.indexOf(e))) {
        for (; h !== null; ) {
          var d = Jn(h);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var T = Gn(d.pendingLanes);
                  if (T !== 0) {
                    var b = d;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; T; ) {
                      var x = 1 << (31 - Xe(T));
                      (b.entanglements[1] |= x), (T &= ~x);
                    }
                    fi(d), (Zt & 6) === 0 && ((ic = Cn() + 500), nl(0));
                  }
                }
                break;
              case 13:
                (b = sa(d, 2)), b !== null && Rn(b, d, 2), rc(), vd(d, 2);
            }
          if (((d = Td(l)), d === null && ad(e, s, l, Tc, a), d === h)) break;
          h = d;
        }
        h !== null && l.stopPropagation();
      } else ad(e, s, l, null, a);
    }
  }
  function Td(e) {
    return (e = Mn(e)), Ed(e);
  }
  var Tc = null;
  function Ed(e) {
    if (((Tc = null), (e = Si(e)), e !== null)) {
      var s = u(e);
      if (s === null) e = null;
      else {
        var a = s.tag;
        if (a === 13) {
          if (((e = f(s)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (s.stateNode.current.memoizedState.isDehydrated)
            return s.tag === 3 ? s.stateNode.containerInfo : null;
          e = null;
        } else s !== e && (e = null);
      }
    }
    return (Tc = e), null;
  }
  function e0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ah()) {
          case ao:
            return 2;
          case kr:
            return 8;
          case Gs:
          case Sh:
            return 32;
          case Ur:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bd = !1,
    Es = null,
    bs = null,
    As = null,
    cl = new Map(),
    hl = new Map(),
    Ss = [],
    A1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function n0(e, s) {
    switch (e) {
      case "focusin":
      case "focusout":
        Es = null;
        break;
      case "dragenter":
      case "dragleave":
        bs = null;
        break;
      case "mouseover":
      case "mouseout":
        As = null;
        break;
      case "pointerover":
      case "pointerout":
        cl.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hl.delete(s.pointerId);
    }
  }
  function fl(e, s, a, l, h, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: s,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [h],
        }),
        s !== null && ((s = Jn(s)), s !== null && t0(s)),
        e)
      : ((e.eventSystemFlags |= l),
        (s = e.targetContainers),
        h !== null && s.indexOf(h) === -1 && s.push(h),
        e);
  }
  function S1(e, s, a, l, h) {
    switch (s) {
      case "focusin":
        return (Es = fl(Es, e, s, a, l, h)), !0;
      case "dragenter":
        return (bs = fl(bs, e, s, a, l, h)), !0;
      case "mouseover":
        return (As = fl(As, e, s, a, l, h)), !0;
      case "pointerover":
        var d = h.pointerId;
        return cl.set(d, fl(cl.get(d) || null, e, s, a, l, h)), !0;
      case "gotpointercapture":
        return (
          (d = h.pointerId), hl.set(d, fl(hl.get(d) || null, e, s, a, l, h)), !0
        );
    }
    return !1;
  }
  function i0(e) {
    var s = Si(e.target);
    if (s !== null) {
      var a = u(s);
      if (a !== null) {
        if (((s = a.tag), s === 13)) {
          if (((s = f(a)), s !== null)) {
            (e.blockedOn = s),
              ru(e.priority, function () {
                if (a.tag === 13) {
                  var l = wn();
                  l = Ji(l);
                  var h = sa(a, l);
                  h !== null && Rn(h, a, l), vd(a, l);
                }
              });
            return;
          }
        } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ec(e) {
    if (e.blockedOn !== null) return !1;
    for (var s = e.targetContainers; 0 < s.length; ) {
      var a = Td(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        (Ci = l), a.target.dispatchEvent(l), (Ci = null);
      } else return (s = Jn(a)), s !== null && t0(s), (e.blockedOn = a), !1;
      s.shift();
    }
    return !0;
  }
  function s0(e, s, a) {
    Ec(e) && a.delete(s);
  }
  function w1() {
    (bd = !1),
      Es !== null && Ec(Es) && (Es = null),
      bs !== null && Ec(bs) && (bs = null),
      As !== null && Ec(As) && (As = null),
      cl.forEach(s0),
      hl.forEach(s0);
  }
  function bc(e, s) {
    e.blockedOn === s &&
      ((e.blockedOn = null),
      bd ||
        ((bd = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, w1)));
  }
  var Ac = null;
  function r0(e) {
    Ac !== e &&
      ((Ac = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ac === e && (Ac = null);
        for (var s = 0; s < e.length; s += 3) {
          var a = e[s],
            l = e[s + 1],
            h = e[s + 2];
          if (typeof l != "function") {
            if (Ed(l || a) === null) continue;
            break;
          }
          var d = Jn(a);
          d !== null &&
            (e.splice(s, 3),
            (s -= 3),
            Ef(d, { pending: !0, data: h, method: a.method, action: l }, l, h));
        }
      }));
  }
  function dl(e) {
    function s(x) {
      return bc(x, e);
    }
    Es !== null && bc(Es, e),
      bs !== null && bc(bs, e),
      As !== null && bc(As, e),
      cl.forEach(s),
      hl.forEach(s);
    for (var a = 0; a < Ss.length; a++) {
      var l = Ss[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ss.length && ((a = Ss[0]), a.blockedOn === null); )
      i0(a), a.blockedOn === null && Ss.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var h = a[l],
          d = a[l + 1],
          T = h[be] || null;
        if (typeof d == "function") T || r0(a);
        else if (T) {
          var b = null;
          if (d && d.hasAttribute("formAction")) {
            if (((h = d), (T = d[be] || null))) b = T.formAction;
            else if (Ed(h) !== null) continue;
          } else b = T.action;
          typeof b == "function" ? (a[l + 1] = b) : (a.splice(l, 3), (l -= 3)),
            r0(a);
        }
      }
  }
  function Ad(e) {
    this._internalRoot = e;
  }
  (Sc.prototype.render = Ad.prototype.render =
    function (e) {
      var s = this._internalRoot;
      if (s === null) throw Error(r(409));
      var a = s.current,
        l = wn();
      Jv(a, l, e, s, null, null);
    }),
    (Sc.prototype.unmount = Ad.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var s = e.containerInfo;
          Jv(e.current, 2, null, e, null, null), rc(), (s[Dn] = null);
        }
      });
  function Sc(e) {
    this._internalRoot = e;
  }
  Sc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var s = Wi();
      e = { blockedOn: null, target: e, priority: s };
      for (var a = 0; a < Ss.length && s !== 0 && s < Ss[a].priority; a++);
      Ss.splice(a, 0, e), a === 0 && i0(e);
    }
  };
  var a0 = t.version;
  if (a0 !== "19.1.0") throw Error(r(527, a0, "19.1.0"));
  et.findDOMNode = function (e) {
    var s = e._reactInternals;
    if (s === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = p(s)),
      (e = e !== null ? g(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var R1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: K,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wc.isDisabled && wc.supportsFiber)
      try {
        (he = wc.inject(R1)), (Xt = wc);
      } catch {}
  }
  return (
    (pl.createRoot = function (e, s) {
      if (!o(e)) throw Error(r(299));
      var a = !1,
        l = "",
        h = by,
        d = Ay,
        T = Sy,
        b = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (a = !0),
          s.identifierPrefix !== void 0 && (l = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (h = s.onUncaughtError),
          s.onCaughtError !== void 0 && (d = s.onCaughtError),
          s.onRecoverableError !== void 0 && (T = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (b = s.unstable_transitionCallbacks)),
        (s = Zv(e, 1, !1, null, null, a, l, h, d, T, b, null)),
        (e[Dn] = s.current),
        rd(e),
        new Ad(s)
      );
    }),
    (pl.hydrateRoot = function (e, s, a) {
      if (!o(e)) throw Error(r(299));
      var l = !1,
        h = "",
        d = by,
        T = Ay,
        b = Sy,
        x = null,
        z = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (h = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (T = a.onCaughtError),
          a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (x = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (z = a.formState)),
        (s = Zv(e, 1, !0, s, a ?? null, l, h, d, T, b, x, z)),
        (s.context = $v(null)),
        (a = s.current),
        (l = wn()),
        (l = Ji(l)),
        (h = os(l)),
        (h.callback = null),
        ls(a, h, l),
        (a = l),
        (s.current.lanes = a),
        Ai(s, a),
        fi(s),
        (e[Dn] = s.current),
        rd(e),
        new Sc(s)
      );
    }),
    (pl.version = "19.1.0"),
    pl
  );
}
var g0;
function L1() {
  if (g0) return Rd.exports;
  g0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (Rd.exports = P1()), Rd.exports;
}
var k1 = L1();
const U1 = () => {};
var y0 = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WT = function (n) {
    const t = [];
    let i = 0;
    for (let r = 0; r < n.length; r++) {
      let o = n.charCodeAt(r);
      o < 128
        ? (t[i++] = o)
        : o < 2048
        ? ((t[i++] = (o >> 6) | 192), (t[i++] = (o & 63) | 128))
        : (o & 64512) === 55296 &&
          r + 1 < n.length &&
          (n.charCodeAt(r + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
          (t[i++] = (o >> 18) | 240),
          (t[i++] = ((o >> 12) & 63) | 128),
          (t[i++] = ((o >> 6) & 63) | 128),
          (t[i++] = (o & 63) | 128))
        : ((t[i++] = (o >> 12) | 224),
          (t[i++] = ((o >> 6) & 63) | 128),
          (t[i++] = (o & 63) | 128));
    }
    return t;
  },
  B1 = function (n) {
    const t = [];
    let i = 0,
      r = 0;
    for (; i < n.length; ) {
      const o = n[i++];
      if (o < 128) t[r++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const u = n[i++];
        t[r++] = String.fromCharCode(((o & 31) << 6) | (u & 63));
      } else if (o > 239 && o < 365) {
        const u = n[i++],
          f = n[i++],
          m = n[i++],
          p =
            (((o & 7) << 18) | ((u & 63) << 12) | ((f & 63) << 6) | (m & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (p >> 10))),
          (t[r++] = String.fromCharCode(56320 + (p & 1023)));
      } else {
        const u = n[i++],
          f = n[i++];
        t[r++] = String.fromCharCode(
          ((o & 15) << 12) | ((u & 63) << 6) | (f & 63)
        );
      }
    }
    return t.join("");
  },
  tE = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(n, t) {
      if (!Array.isArray(n))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const i = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let o = 0; o < n.length; o += 3) {
        const u = n[o],
          f = o + 1 < n.length,
          m = f ? n[o + 1] : 0,
          p = o + 2 < n.length,
          g = p ? n[o + 2] : 0,
          v = u >> 2,
          E = ((u & 3) << 4) | (m >> 4);
        let w = ((m & 15) << 2) | (g >> 6),
          D = g & 63;
        p || ((D = 64), f || (w = 64)), r.push(i[v], i[E], i[w], i[D]);
      }
      return r.join("");
    },
    encodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(n)
        : this.encodeByteArray(WT(n), t);
    },
    decodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(n)
        : B1(this.decodeStringToByteArray(n, t));
    },
    decodeStringToByteArray(n, t) {
      this.init_();
      const i = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let o = 0; o < n.length; ) {
        const u = i[n.charAt(o++)],
          m = o < n.length ? i[n.charAt(o)] : 0;
        ++o;
        const g = o < n.length ? i[n.charAt(o)] : 64;
        ++o;
        const E = o < n.length ? i[n.charAt(o)] : 64;
        if ((++o, u == null || m == null || g == null || E == null))
          throw new z1();
        const w = (u << 2) | (m >> 4);
        if ((r.push(w), g !== 64)) {
          const D = ((m << 4) & 240) | (g >> 2);
          if ((r.push(D), E !== 64)) {
            const B = ((g << 6) & 192) | E;
            r.push(B);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  };
class z1 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const j1 = function (n) {
    const t = WT(n);
    return tE.encodeByteArray(t, !0);
  },
  Hc = function (n) {
    return j1(n).replace(/\./g, "");
  },
  q1 = function (n) {
    try {
      return tE.decodeString(n, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H1() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const G1 = () => H1().__FIREBASE_DEFAULTS__,
  F1 = () => {
    if (typeof process > "u" || typeof y0 > "u") return;
    const n = y0.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  K1 = () => {
    if (typeof document > "u") return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = n && q1(n[1]);
    return t && JSON.parse(t);
  },
  Km = () => {
    try {
      return U1() || G1() || F1() || K1();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Q1 = (n) => {
    var t, i;
    return (i =
      (t = Km()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || i === void 0
      ? void 0
      : i[n];
  },
  Y1 = (n) => {
    const t = Q1(n);
    if (!t) return;
    const i = t.lastIndexOf(":");
    if (i <= 0 || i + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(i + 1), 10);
    return t[0] === "[" ? [t.substring(1, i - 1), r] : [t.substring(0, i), r];
  },
  eE = () => {
    var n;
    return (n = Km()) === null || n === void 0 ? void 0 : n.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X1 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, i) => {
        (this.resolve = t), (this.reject = i);
      }));
  }
  wrapCallback(t) {
    return (i, r) => {
      i ? this.reject(i) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(i) : t(i, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z1(n, t) {
  if (n.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const i = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    o = n.iat || 0,
    u = n.sub || n.user_id;
  if (!u)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const f = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: o,
      exp: o + 3600,
      auth_time: o,
      sub: u,
      user_id: u,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    n
  );
  return [Hc(JSON.stringify(i)), Hc(JSON.stringify(f)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $1() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function J1() {
  var n;
  const t = (n = Km()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function W1() {
  return (
    !J1() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function tw() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function ew() {
  return new Promise((n, t) => {
    try {
      let i = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(r);
      (o.onsuccess = () => {
        o.result.close(), i || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (o.onupgradeneeded = () => {
          i = !1;
        }),
        (o.onerror = () => {
          var u;
          t(
            ((u = o.error) === null || u === void 0 ? void 0 : u.message) || ""
          );
        });
    } catch (i) {
      t(i);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nw = "FirebaseError";
class $a extends Error {
  constructor(t, i, r) {
    super(i),
      (this.code = t),
      (this.customData = r),
      (this.name = nw),
      Object.setPrototypeOf(this, $a.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, nE.prototype.create);
  }
}
class nE {
  constructor(t, i, r) {
    (this.service = t), (this.serviceName = i), (this.errors = r);
  }
  create(t, ...i) {
    const r = i[0] || {},
      o = `${this.service}/${t}`,
      u = this.errors[t],
      f = u ? iw(u, r) : "Error",
      m = `${this.serviceName}: ${f} (${o}).`;
    return new $a(o, m, r);
  }
}
function iw(n, t) {
  return n.replace(sw, (i, r) => {
    const o = t[r];
    return o != null ? String(o) : `<${r}?>`;
  });
}
const sw = /\{\$([^}]+)}/g;
function Gc(n, t) {
  if (n === t) return !0;
  const i = Object.keys(n),
    r = Object.keys(t);
  for (const o of i) {
    if (!r.includes(o)) return !1;
    const u = n[o],
      f = t[o];
    if (v0(u) && v0(f)) {
      if (!Gc(u, f)) return !1;
    } else if (u !== f) return !1;
  }
  for (const o of r) if (!i.includes(o)) return !1;
  return !0;
}
function v0(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rw(n) {
  return n && n._delegate ? n._delegate : n;
}
class Ml {
  constructor(t, i, r) {
    (this.name = t),
      (this.instanceFactory = i),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aw {
  constructor(t, i) {
    (this.name = t),
      (this.container = i),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const i = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(i)) {
      const r = new X1();
      if (
        (this.instancesDeferred.set(i, r),
        this.isInitialized(i) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i });
          o && r.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(i).promise;
  }
  getImmediate(t) {
    var i;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      o =
        (i = t == null ? void 0 : t.optional) !== null && i !== void 0 ? i : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (u) {
        if (o) return null;
        throw u;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (lw(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Rr });
        } catch {}
      for (const [i, r] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(i);
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: o });
          r.resolve(u);
        } catch {}
      }
    }
  }
  clearInstance(t = Rr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((i) => "INTERNAL" in i).map((i) => i.INTERNAL.delete()),
      ...t.filter((i) => "_delete" in i).map((i) => i._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Rr) {
    return this.instances.has(t);
  }
  getOptions(t = Rr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: i = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: r,
      options: i,
    });
    for (const [u, f] of this.instancesDeferred.entries()) {
      const m = this.normalizeInstanceIdentifier(u);
      r === m && f.resolve(o);
    }
    return o;
  }
  onInit(t, i) {
    var r;
    const o = this.normalizeInstanceIdentifier(i),
      u =
        (r = this.onInitCallbacks.get(o)) !== null && r !== void 0
          ? r
          : new Set();
    u.add(t), this.onInitCallbacks.set(o, u);
    const f = this.instances.get(o);
    return (
      f && t(f, o),
      () => {
        u.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, i) {
    const r = this.onInitCallbacks.get(i);
    if (r)
      for (const o of r)
        try {
          o(t, i);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: i = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: ow(t),
        options: i,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, i),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Rr) {
    return this.component ? (this.component.multipleInstances ? t : Rr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function ow(n) {
  return n === Rr ? void 0 : n;
}
function lw(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uw {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const i = this.getProvider(t.name);
    if (i.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    i.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const i = new aw(t, this);
    return this.providers.set(t, i), i;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var zt;
(function (n) {
  (n[(n.DEBUG = 0)] = "DEBUG"),
    (n[(n.VERBOSE = 1)] = "VERBOSE"),
    (n[(n.INFO = 2)] = "INFO"),
    (n[(n.WARN = 3)] = "WARN"),
    (n[(n.ERROR = 4)] = "ERROR"),
    (n[(n.SILENT = 5)] = "SILENT");
})(zt || (zt = {}));
const cw = {
    debug: zt.DEBUG,
    verbose: zt.VERBOSE,
    info: zt.INFO,
    warn: zt.WARN,
    error: zt.ERROR,
    silent: zt.SILENT,
  },
  hw = zt.INFO,
  fw = {
    [zt.DEBUG]: "log",
    [zt.VERBOSE]: "log",
    [zt.INFO]: "info",
    [zt.WARN]: "warn",
    [zt.ERROR]: "error",
  },
  dw = (n, t, ...i) => {
    if (t < n.logLevel) return;
    const r = new Date().toISOString(),
      o = fw[t];
    if (o) console[o](`[${r}]  ${n.name}:`, ...i);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class iE {
  constructor(t) {
    (this.name = t),
      (this._logLevel = hw),
      (this._logHandler = dw),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in zt))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? cw[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, zt.DEBUG, ...t),
      this._logHandler(this, zt.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, zt.VERBOSE, ...t),
      this._logHandler(this, zt.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, zt.INFO, ...t),
      this._logHandler(this, zt.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, zt.WARN, ...t),
      this._logHandler(this, zt.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, zt.ERROR, ...t),
      this._logHandler(this, zt.ERROR, ...t);
  }
}
const mw = (n, t) => t.some((i) => n instanceof i);
let _0, T0;
function pw() {
  return (
    _0 ||
    (_0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function gw() {
  return (
    T0 ||
    (T0 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const sE = new WeakMap(),
  Wd = new WeakMap(),
  rE = new WeakMap(),
  Vd = new WeakMap(),
  Qm = new WeakMap();
function yw(n) {
  const t = new Promise((i, r) => {
    const o = () => {
        n.removeEventListener("success", u), n.removeEventListener("error", f);
      },
      u = () => {
        i(Vs(n.result)), o();
      },
      f = () => {
        r(n.error), o();
      };
    n.addEventListener("success", u), n.addEventListener("error", f);
  });
  return (
    t
      .then((i) => {
        i instanceof IDBCursor && sE.set(i, n);
      })
      .catch(() => {}),
    Qm.set(t, n),
    t
  );
}
function vw(n) {
  if (Wd.has(n)) return;
  const t = new Promise((i, r) => {
    const o = () => {
        n.removeEventListener("complete", u),
          n.removeEventListener("error", f),
          n.removeEventListener("abort", f);
      },
      u = () => {
        i(), o();
      },
      f = () => {
        r(n.error || new DOMException("AbortError", "AbortError")), o();
      };
    n.addEventListener("complete", u),
      n.addEventListener("error", f),
      n.addEventListener("abort", f);
  });
  Wd.set(n, t);
}
let tm = {
  get(n, t, i) {
    if (n instanceof IDBTransaction) {
      if (t === "done") return Wd.get(n);
      if (t === "objectStoreNames") return n.objectStoreNames || rE.get(n);
      if (t === "store")
        return i.objectStoreNames[1]
          ? void 0
          : i.objectStore(i.objectStoreNames[0]);
    }
    return Vs(n[t]);
  },
  set(n, t, i) {
    return (n[t] = i), !0;
  },
  has(n, t) {
    return n instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in n;
  },
};
function _w(n) {
  tm = n(tm);
}
function Tw(n) {
  return n === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...i) {
        const r = n.call(Md(this), t, ...i);
        return rE.set(r, t.sort ? t.sort() : [t]), Vs(r);
      }
    : gw().includes(n)
    ? function (...t) {
        return n.apply(Md(this), t), Vs(sE.get(this));
      }
    : function (...t) {
        return Vs(n.apply(Md(this), t));
      };
}
function Ew(n) {
  return typeof n == "function"
    ? Tw(n)
    : (n instanceof IDBTransaction && vw(n),
      mw(n, pw()) ? new Proxy(n, tm) : n);
}
function Vs(n) {
  if (n instanceof IDBRequest) return yw(n);
  if (Vd.has(n)) return Vd.get(n);
  const t = Ew(n);
  return t !== n && (Vd.set(n, t), Qm.set(t, n)), t;
}
const Md = (n) => Qm.get(n);
function bw(n, t, { blocked: i, upgrade: r, blocking: o, terminated: u } = {}) {
  const f = indexedDB.open(n, t),
    m = Vs(f);
  return (
    r &&
      f.addEventListener("upgradeneeded", (p) => {
        r(Vs(f.result), p.oldVersion, p.newVersion, Vs(f.transaction), p);
      }),
    i && f.addEventListener("blocked", (p) => i(p.oldVersion, p.newVersion, p)),
    m
      .then((p) => {
        u && p.addEventListener("close", () => u()),
          o &&
            p.addEventListener("versionchange", (g) =>
              o(g.oldVersion, g.newVersion, g)
            );
      })
      .catch(() => {}),
    m
  );
}
const Aw = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Sw = ["put", "add", "delete", "clear"],
  Od = new Map();
function E0(n, t) {
  if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string")) return;
  if (Od.get(t)) return Od.get(t);
  const i = t.replace(/FromIndex$/, ""),
    r = t !== i,
    o = Sw.includes(i);
  if (
    !(i in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || Aw.includes(i))
  )
    return;
  const u = async function (f, ...m) {
    const p = this.transaction(f, o ? "readwrite" : "readonly");
    let g = p.store;
    return (
      r && (g = g.index(m.shift())),
      (await Promise.all([g[i](...m), o && p.done]))[0]
    );
  };
  return Od.set(t, u), u;
}
_w((n) => ({
  ...n,
  get: (t, i, r) => E0(t, i) || n.get(t, i, r),
  has: (t, i) => !!E0(t, i) || n.has(t, i),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ww {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((i) => {
        if (Rw(i)) {
          const r = i.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((i) => i)
      .join(" ");
  }
}
function Rw(n) {
  const t = n.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const em = "@firebase/app",
  b0 = "0.11.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xi = new iE("@firebase/app"),
  xw = "@firebase/app-compat",
  Cw = "@firebase/analytics-compat",
  Dw = "@firebase/analytics",
  Vw = "@firebase/app-check-compat",
  Mw = "@firebase/app-check",
  Ow = "@firebase/auth",
  Iw = "@firebase/auth-compat",
  Nw = "@firebase/database",
  Pw = "@firebase/data-connect",
  Lw = "@firebase/database-compat",
  kw = "@firebase/functions",
  Uw = "@firebase/functions-compat",
  Bw = "@firebase/installations",
  zw = "@firebase/installations-compat",
  jw = "@firebase/messaging",
  qw = "@firebase/messaging-compat",
  Hw = "@firebase/performance",
  Gw = "@firebase/performance-compat",
  Fw = "@firebase/remote-config",
  Kw = "@firebase/remote-config-compat",
  Qw = "@firebase/storage",
  Yw = "@firebase/storage-compat",
  Xw = "@firebase/firestore",
  Zw = "@firebase/vertexai",
  $w = "@firebase/firestore-compat",
  Jw = "firebase",
  Ww = "11.6.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nm = "[DEFAULT]",
  tR = {
    [em]: "fire-core",
    [xw]: "fire-core-compat",
    [Dw]: "fire-analytics",
    [Cw]: "fire-analytics-compat",
    [Mw]: "fire-app-check",
    [Vw]: "fire-app-check-compat",
    [Ow]: "fire-auth",
    [Iw]: "fire-auth-compat",
    [Nw]: "fire-rtdb",
    [Pw]: "fire-data-connect",
    [Lw]: "fire-rtdb-compat",
    [kw]: "fire-fn",
    [Uw]: "fire-fn-compat",
    [Bw]: "fire-iid",
    [zw]: "fire-iid-compat",
    [jw]: "fire-fcm",
    [qw]: "fire-fcm-compat",
    [Hw]: "fire-perf",
    [Gw]: "fire-perf-compat",
    [Fw]: "fire-rc",
    [Kw]: "fire-rc-compat",
    [Qw]: "fire-gcs",
    [Yw]: "fire-gcs-compat",
    [Xw]: "fire-fst",
    [$w]: "fire-fst-compat",
    [Zw]: "fire-vertex",
    "fire-js": "fire-js",
    [Jw]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fc = new Map(),
  eR = new Map(),
  im = new Map();
function A0(n, t) {
  try {
    n.container.addComponent(t);
  } catch (i) {
    Xi.debug(
      `Component ${t.name} failed to register with FirebaseApp ${n.name}`,
      i
    );
  }
}
function Kc(n) {
  const t = n.name;
  if (im.has(t))
    return (
      Xi.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  im.set(t, n);
  for (const i of Fc.values()) A0(i, n);
  for (const i of eR.values()) A0(i, n);
  return !0;
}
function nR(n, t) {
  const i = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return i && i.triggerHeartbeat(), n.container.getProvider(t);
}
function iR(n) {
  return n == null ? !1 : n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sR = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Ms = new nE("app", "Firebase", sR);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rR {
  constructor(t, i, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, i)),
      (this._name = i.name),
      (this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Ml("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ms.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aR = Ww;
function aE(n, t = {}) {
  let i = n;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: nm, automaticDataCollectionEnabled: !1 }, t),
    o = r.name;
  if (typeof o != "string" || !o)
    throw Ms.create("bad-app-name", { appName: String(o) });
  if ((i || (i = eE()), !i)) throw Ms.create("no-options");
  const u = Fc.get(o);
  if (u) {
    if (Gc(i, u.options) && Gc(r, u.config)) return u;
    throw Ms.create("duplicate-app", { appName: o });
  }
  const f = new uw(o);
  for (const p of im.values()) f.addComponent(p);
  const m = new rR(i, r, f);
  return Fc.set(o, m), m;
}
function oR(n = nm) {
  const t = Fc.get(n);
  if (!t && n === nm && eE()) return aE();
  if (!t) throw Ms.create("no-app", { appName: n });
  return t;
}
function Ba(n, t, i) {
  var r;
  let o = (r = tR[n]) !== null && r !== void 0 ? r : n;
  i && (o += `-${i}`);
  const u = o.match(/\s|\//),
    f = t.match(/\s|\//);
  if (u || f) {
    const m = [`Unable to register library "${o}" with version "${t}":`];
    u &&
      m.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`
      ),
      u && f && m.push("and"),
      f &&
        m.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Xi.warn(m.join(" "));
    return;
  }
  Kc(new Ml(`${o}-version`, () => ({ library: o, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lR = "firebase-heartbeat-database",
  uR = 1,
  Ol = "firebase-heartbeat-store";
let Id = null;
function oE() {
  return (
    Id ||
      (Id = bw(lR, uR, {
        upgrade: (n, t) => {
          switch (t) {
            case 0:
              try {
                n.createObjectStore(Ol);
              } catch (i) {
                console.warn(i);
              }
          }
        },
      }).catch((n) => {
        throw Ms.create("idb-open", { originalErrorMessage: n.message });
      })),
    Id
  );
}
async function cR(n) {
  try {
    const i = (await oE()).transaction(Ol),
      r = await i.objectStore(Ol).get(lE(n));
    return await i.done, r;
  } catch (t) {
    if (t instanceof $a) Xi.warn(t.message);
    else {
      const i = Ms.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Xi.warn(i.message);
    }
  }
}
async function S0(n, t) {
  try {
    const r = (await oE()).transaction(Ol, "readwrite");
    await r.objectStore(Ol).put(t, lE(n)), await r.done;
  } catch (i) {
    if (i instanceof $a) Xi.warn(i.message);
    else {
      const r = Ms.create("idb-set", {
        originalErrorMessage: i == null ? void 0 : i.message,
      });
      Xi.warn(r.message);
    }
  }
}
function lE(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hR = 1024,
  fR = 30;
class dR {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const i = this.container.getProvider("app").getImmediate();
    (this._storage = new pR(i)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, i;
    try {
      const o = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        u = w0();
      if (
        (((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((i = this._heartbeatsCache) === null || i === void 0
            ? void 0
            : i.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === u ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === u)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: u, agent: o }),
        this._heartbeatsCache.heartbeats.length > fR)
      ) {
        const f = gR(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      Xi.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const i = w0(),
        { heartbeatsToSend: r, unsentEntries: o } = mR(
          this._heartbeatsCache.heartbeats
        ),
        u = Hc(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = i),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        u
      );
    } catch (i) {
      return Xi.warn(i), "";
    }
  }
}
function w0() {
  return new Date().toISOString().substring(0, 10);
}
function mR(n, t = hR) {
  const i = [];
  let r = n.slice();
  for (const o of n) {
    const u = i.find((f) => f.agent === o.agent);
    if (u) {
      if ((u.dates.push(o.date), R0(i) > t)) {
        u.dates.pop();
        break;
      }
    } else if ((i.push({ agent: o.agent, dates: [o.date] }), R0(i) > t)) {
      i.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: i, unsentEntries: r };
}
class pR {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return tw()
      ? ew()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const i = await cR(this.app);
      return i != null && i.heartbeats ? i : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return S0(this.app, {
        lastSentHeartbeatDate:
          (i = t.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : o.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return S0(this.app, {
        lastSentHeartbeatDate:
          (i = t.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function R0(n) {
  return Hc(JSON.stringify({ version: 2, heartbeats: n })).length;
}
function gR(n) {
  if (n.length === 0) return -1;
  let t = 0,
    i = n[0].date;
  for (let r = 1; r < n.length; r++)
    n[r].date < i && ((i = n[r].date), (t = r));
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yR(n) {
  Kc(new Ml("platform-logger", (t) => new ww(t), "PRIVATE")),
    Kc(new Ml("heartbeat", (t) => new dR(t), "PRIVATE")),
    Ba(em, b0, n),
    Ba(em, b0, "esm2017"),
    Ba("fire-js", "");
}
yR("");
var x0 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Os, uE;
(function () {
  var n;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(M, A) {
    function R() {}
    (R.prototype = A.prototype),
      (M.D = A.prototype),
      (M.prototype = new R()),
      (M.prototype.constructor = M),
      (M.C = function (O, N, P) {
        for (
          var C = Array(arguments.length - 2), re = 2;
          re < arguments.length;
          re++
        )
          C[re - 2] = arguments[re];
        return A.prototype[N].apply(O, C);
      });
  }
  function i() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  t(r, i),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function o(M, A, R) {
    R || (R = 0);
    var O = Array(16);
    if (typeof A == "string")
      for (var N = 0; 16 > N; ++N)
        O[N] =
          A.charCodeAt(R++) |
          (A.charCodeAt(R++) << 8) |
          (A.charCodeAt(R++) << 16) |
          (A.charCodeAt(R++) << 24);
    else
      for (N = 0; 16 > N; ++N)
        O[N] = A[R++] | (A[R++] << 8) | (A[R++] << 16) | (A[R++] << 24);
    (A = M.g[0]), (R = M.g[1]), (N = M.g[2]);
    var P = M.g[3],
      C = (A + (P ^ (R & (N ^ P))) + O[0] + 3614090360) & 4294967295;
    (A = R + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (P + (N ^ (A & (R ^ N))) + O[1] + 3905402710) & 4294967295),
      (P = A + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (N + (R ^ (P & (A ^ R))) + O[2] + 606105819) & 4294967295),
      (N = P + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (R + (A ^ (N & (P ^ A))) + O[3] + 3250441966) & 4294967295),
      (R = N + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (A + (P ^ (R & (N ^ P))) + O[4] + 4118548399) & 4294967295),
      (A = R + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (P + (N ^ (A & (R ^ N))) + O[5] + 1200080426) & 4294967295),
      (P = A + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (N + (R ^ (P & (A ^ R))) + O[6] + 2821735955) & 4294967295),
      (N = P + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (R + (A ^ (N & (P ^ A))) + O[7] + 4249261313) & 4294967295),
      (R = N + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (A + (P ^ (R & (N ^ P))) + O[8] + 1770035416) & 4294967295),
      (A = R + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (P + (N ^ (A & (R ^ N))) + O[9] + 2336552879) & 4294967295),
      (P = A + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (N + (R ^ (P & (A ^ R))) + O[10] + 4294925233) & 4294967295),
      (N = P + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (R + (A ^ (N & (P ^ A))) + O[11] + 2304563134) & 4294967295),
      (R = N + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (A + (P ^ (R & (N ^ P))) + O[12] + 1804603682) & 4294967295),
      (A = R + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (P + (N ^ (A & (R ^ N))) + O[13] + 4254626195) & 4294967295),
      (P = A + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (N + (R ^ (P & (A ^ R))) + O[14] + 2792965006) & 4294967295),
      (N = P + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (R + (A ^ (N & (P ^ A))) + O[15] + 1236535329) & 4294967295),
      (R = N + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (A + (N ^ (P & (R ^ N))) + O[1] + 4129170786) & 4294967295),
      (A = R + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (P + (R ^ (N & (A ^ R))) + O[6] + 3225465664) & 4294967295),
      (P = A + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (N + (A ^ (R & (P ^ A))) + O[11] + 643717713) & 4294967295),
      (N = P + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (R + (P ^ (A & (N ^ P))) + O[0] + 3921069994) & 4294967295),
      (R = N + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (A + (N ^ (P & (R ^ N))) + O[5] + 3593408605) & 4294967295),
      (A = R + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (P + (R ^ (N & (A ^ R))) + O[10] + 38016083) & 4294967295),
      (P = A + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (N + (A ^ (R & (P ^ A))) + O[15] + 3634488961) & 4294967295),
      (N = P + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (R + (P ^ (A & (N ^ P))) + O[4] + 3889429448) & 4294967295),
      (R = N + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (A + (N ^ (P & (R ^ N))) + O[9] + 568446438) & 4294967295),
      (A = R + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (P + (R ^ (N & (A ^ R))) + O[14] + 3275163606) & 4294967295),
      (P = A + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (N + (A ^ (R & (P ^ A))) + O[3] + 4107603335) & 4294967295),
      (N = P + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (R + (P ^ (A & (N ^ P))) + O[8] + 1163531501) & 4294967295),
      (R = N + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (A + (N ^ (P & (R ^ N))) + O[13] + 2850285829) & 4294967295),
      (A = R + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (P + (R ^ (N & (A ^ R))) + O[2] + 4243563512) & 4294967295),
      (P = A + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (N + (A ^ (R & (P ^ A))) + O[7] + 1735328473) & 4294967295),
      (N = P + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (R + (P ^ (A & (N ^ P))) + O[12] + 2368359562) & 4294967295),
      (R = N + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (A + (R ^ N ^ P) + O[5] + 4294588738) & 4294967295),
      (A = R + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (P + (A ^ R ^ N) + O[8] + 2272392833) & 4294967295),
      (P = A + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (N + (P ^ A ^ R) + O[11] + 1839030562) & 4294967295),
      (N = P + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (R + (N ^ P ^ A) + O[14] + 4259657740) & 4294967295),
      (R = N + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (A + (R ^ N ^ P) + O[1] + 2763975236) & 4294967295),
      (A = R + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (P + (A ^ R ^ N) + O[4] + 1272893353) & 4294967295),
      (P = A + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (N + (P ^ A ^ R) + O[7] + 4139469664) & 4294967295),
      (N = P + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (R + (N ^ P ^ A) + O[10] + 3200236656) & 4294967295),
      (R = N + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (A + (R ^ N ^ P) + O[13] + 681279174) & 4294967295),
      (A = R + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (P + (A ^ R ^ N) + O[0] + 3936430074) & 4294967295),
      (P = A + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (N + (P ^ A ^ R) + O[3] + 3572445317) & 4294967295),
      (N = P + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (R + (N ^ P ^ A) + O[6] + 76029189) & 4294967295),
      (R = N + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (A + (R ^ N ^ P) + O[9] + 3654602809) & 4294967295),
      (A = R + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (P + (A ^ R ^ N) + O[12] + 3873151461) & 4294967295),
      (P = A + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (N + (P ^ A ^ R) + O[15] + 530742520) & 4294967295),
      (N = P + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (R + (N ^ P ^ A) + O[2] + 3299628645) & 4294967295),
      (R = N + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (A + (N ^ (R | ~P)) + O[0] + 4096336452) & 4294967295),
      (A = R + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (P + (R ^ (A | ~N)) + O[7] + 1126891415) & 4294967295),
      (P = A + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (N + (A ^ (P | ~R)) + O[14] + 2878612391) & 4294967295),
      (N = P + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (R + (P ^ (N | ~A)) + O[5] + 4237533241) & 4294967295),
      (R = N + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (A + (N ^ (R | ~P)) + O[12] + 1700485571) & 4294967295),
      (A = R + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (P + (R ^ (A | ~N)) + O[3] + 2399980690) & 4294967295),
      (P = A + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (N + (A ^ (P | ~R)) + O[10] + 4293915773) & 4294967295),
      (N = P + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (R + (P ^ (N | ~A)) + O[1] + 2240044497) & 4294967295),
      (R = N + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (A + (N ^ (R | ~P)) + O[8] + 1873313359) & 4294967295),
      (A = R + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (P + (R ^ (A | ~N)) + O[15] + 4264355552) & 4294967295),
      (P = A + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (N + (A ^ (P | ~R)) + O[6] + 2734768916) & 4294967295),
      (N = P + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (R + (P ^ (N | ~A)) + O[13] + 1309151649) & 4294967295),
      (R = N + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (A + (N ^ (R | ~P)) + O[4] + 4149444226) & 4294967295),
      (A = R + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (P + (R ^ (A | ~N)) + O[11] + 3174756917) & 4294967295),
      (P = A + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (N + (A ^ (P | ~R)) + O[2] + 718787259) & 4294967295),
      (N = P + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (R + (P ^ (N | ~A)) + O[9] + 3951481745) & 4294967295),
      (M.g[0] = (M.g[0] + A) & 4294967295),
      (M.g[1] =
        (M.g[1] + (N + (((C << 21) & 4294967295) | (C >>> 11)))) & 4294967295),
      (M.g[2] = (M.g[2] + N) & 4294967295),
      (M.g[3] = (M.g[3] + P) & 4294967295);
  }
  (r.prototype.u = function (M, A) {
    A === void 0 && (A = M.length);
    for (var R = A - this.blockSize, O = this.B, N = this.h, P = 0; P < A; ) {
      if (N == 0) for (; P <= R; ) o(this, M, P), (P += this.blockSize);
      if (typeof M == "string") {
        for (; P < A; )
          if (((O[N++] = M.charCodeAt(P++)), N == this.blockSize)) {
            o(this, O), (N = 0);
            break;
          }
      } else
        for (; P < A; )
          if (((O[N++] = M[P++]), N == this.blockSize)) {
            o(this, O), (N = 0);
            break;
          }
    }
    (this.h = N), (this.o += A);
  }),
    (r.prototype.v = function () {
      var M = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      M[0] = 128;
      for (var A = 1; A < M.length - 8; ++A) M[A] = 0;
      var R = 8 * this.o;
      for (A = M.length - 8; A < M.length; ++A) (M[A] = R & 255), (R /= 256);
      for (this.u(M), M = Array(16), A = R = 0; 4 > A; ++A)
        for (var O = 0; 32 > O; O += 8) M[R++] = (this.g[A] >>> O) & 255;
      return M;
    });
  function u(M, A) {
    var R = m;
    return Object.prototype.hasOwnProperty.call(R, M) ? R[M] : (R[M] = A(M));
  }
  function f(M, A) {
    this.h = A;
    for (var R = [], O = !0, N = M.length - 1; 0 <= N; N--) {
      var P = M[N] | 0;
      (O && P == A) || ((R[N] = P), (O = !1));
    }
    this.g = R;
  }
  var m = {};
  function p(M) {
    return -128 <= M && 128 > M
      ? u(M, function (A) {
          return new f([A | 0], 0 > A ? -1 : 0);
        })
      : new f([M | 0], 0 > M ? -1 : 0);
  }
  function g(M) {
    if (isNaN(M) || !isFinite(M)) return E;
    if (0 > M) return H(g(-M));
    for (var A = [], R = 1, O = 0; M >= R; O++)
      (A[O] = (M / R) | 0), (R *= 4294967296);
    return new f(A, 0);
  }
  function v(M, A) {
    if (M.length == 0) throw Error("number format error: empty string");
    if (((A = A || 10), 2 > A || 36 < A))
      throw Error("radix out of range: " + A);
    if (M.charAt(0) == "-") return H(v(M.substring(1), A));
    if (0 <= M.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var R = g(Math.pow(A, 8)), O = E, N = 0; N < M.length; N += 8) {
      var P = Math.min(8, M.length - N),
        C = parseInt(M.substring(N, N + P), A);
      8 > P
        ? ((P = g(Math.pow(A, P))), (O = O.j(P).add(g(C))))
        : ((O = O.j(R)), (O = O.add(g(C))));
    }
    return O;
  }
  var E = p(0),
    w = p(1),
    D = p(16777216);
  (n = f.prototype),
    (n.m = function () {
      if (F(this)) return -H(this).m();
      for (var M = 0, A = 1, R = 0; R < this.g.length; R++) {
        var O = this.i(R);
        (M += (0 <= O ? O : 4294967296 + O) * A), (A *= 4294967296);
      }
      return M;
    }),
    (n.toString = function (M) {
      if (((M = M || 10), 2 > M || 36 < M))
        throw Error("radix out of range: " + M);
      if (B(this)) return "0";
      if (F(this)) return "-" + H(this).toString(M);
      for (var A = g(Math.pow(M, 6)), R = this, O = ""; ; ) {
        var N = mt(R, A).g;
        R = $(R, N.j(A));
        var P = ((0 < R.g.length ? R.g[0] : R.h) >>> 0).toString(M);
        if (((R = N), B(R))) return P + O;
        for (; 6 > P.length; ) P = "0" + P;
        O = P + O;
      }
    }),
    (n.i = function (M) {
      return 0 > M ? 0 : M < this.g.length ? this.g[M] : this.h;
    });
  function B(M) {
    if (M.h != 0) return !1;
    for (var A = 0; A < M.g.length; A++) if (M.g[A] != 0) return !1;
    return !0;
  }
  function F(M) {
    return M.h == -1;
  }
  n.l = function (M) {
    return (M = $(this, M)), F(M) ? -1 : B(M) ? 0 : 1;
  };
  function H(M) {
    for (var A = M.g.length, R = [], O = 0; O < A; O++) R[O] = ~M.g[O];
    return new f(R, ~M.h).add(w);
  }
  (n.abs = function () {
    return F(this) ? H(this) : this;
  }),
    (n.add = function (M) {
      for (
        var A = Math.max(this.g.length, M.g.length), R = [], O = 0, N = 0;
        N <= A;
        N++
      ) {
        var P = O + (this.i(N) & 65535) + (M.i(N) & 65535),
          C = (P >>> 16) + (this.i(N) >>> 16) + (M.i(N) >>> 16);
        (O = C >>> 16), (P &= 65535), (C &= 65535), (R[N] = (C << 16) | P);
      }
      return new f(R, R[R.length - 1] & -2147483648 ? -1 : 0);
    });
  function $(M, A) {
    return M.add(H(A));
  }
  n.j = function (M) {
    if (B(this) || B(M)) return E;
    if (F(this)) return F(M) ? H(this).j(H(M)) : H(H(this).j(M));
    if (F(M)) return H(this.j(H(M)));
    if (0 > this.l(D) && 0 > M.l(D)) return g(this.m() * M.m());
    for (var A = this.g.length + M.g.length, R = [], O = 0; O < 2 * A; O++)
      R[O] = 0;
    for (O = 0; O < this.g.length; O++)
      for (var N = 0; N < M.g.length; N++) {
        var P = this.i(O) >>> 16,
          C = this.i(O) & 65535,
          re = M.i(N) >>> 16,
          Kt = M.i(N) & 65535;
        (R[2 * O + 2 * N] += C * Kt),
          st(R, 2 * O + 2 * N),
          (R[2 * O + 2 * N + 1] += P * Kt),
          st(R, 2 * O + 2 * N + 1),
          (R[2 * O + 2 * N + 1] += C * re),
          st(R, 2 * O + 2 * N + 1),
          (R[2 * O + 2 * N + 2] += P * re),
          st(R, 2 * O + 2 * N + 2);
      }
    for (O = 0; O < A; O++) R[O] = (R[2 * O + 1] << 16) | R[2 * O];
    for (O = A; O < 2 * A; O++) R[O] = 0;
    return new f(R, 0);
  };
  function st(M, A) {
    for (; (M[A] & 65535) != M[A]; )
      (M[A + 1] += M[A] >>> 16), (M[A] &= 65535), A++;
  }
  function nt(M, A) {
    (this.g = M), (this.h = A);
  }
  function mt(M, A) {
    if (B(A)) throw Error("division by zero");
    if (B(M)) return new nt(E, E);
    if (F(M)) return (A = mt(H(M), A)), new nt(H(A.g), H(A.h));
    if (F(A)) return (A = mt(M, H(A))), new nt(H(A.g), A.h);
    if (30 < M.g.length) {
      if (F(M) || F(A))
        throw Error("slowDivide_ only works with positive integers.");
      for (var R = w, O = A; 0 >= O.l(M); ) (R = it(R)), (O = it(O));
      var N = ct(R, 1),
        P = ct(O, 1);
      for (O = ct(O, 2), R = ct(R, 2); !B(O); ) {
        var C = P.add(O);
        0 >= C.l(M) && ((N = N.add(R)), (P = C)),
          (O = ct(O, 1)),
          (R = ct(R, 1));
      }
      return (A = $(M, N.j(A))), new nt(N, A);
    }
    for (N = E; 0 <= M.l(A); ) {
      for (
        R = Math.max(1, Math.floor(M.m() / A.m())),
          O = Math.ceil(Math.log(R) / Math.LN2),
          O = 48 >= O ? 1 : Math.pow(2, O - 48),
          P = g(R),
          C = P.j(A);
        F(C) || 0 < C.l(M);

      )
        (R -= O), (P = g(R)), (C = P.j(A));
      B(P) && (P = w), (N = N.add(P)), (M = $(M, C));
    }
    return new nt(N, M);
  }
  (n.A = function (M) {
    return mt(this, M).h;
  }),
    (n.and = function (M) {
      for (
        var A = Math.max(this.g.length, M.g.length), R = [], O = 0;
        O < A;
        O++
      )
        R[O] = this.i(O) & M.i(O);
      return new f(R, this.h & M.h);
    }),
    (n.or = function (M) {
      for (
        var A = Math.max(this.g.length, M.g.length), R = [], O = 0;
        O < A;
        O++
      )
        R[O] = this.i(O) | M.i(O);
      return new f(R, this.h | M.h);
    }),
    (n.xor = function (M) {
      for (
        var A = Math.max(this.g.length, M.g.length), R = [], O = 0;
        O < A;
        O++
      )
        R[O] = this.i(O) ^ M.i(O);
      return new f(R, this.h ^ M.h);
    });
  function it(M) {
    for (var A = M.g.length + 1, R = [], O = 0; O < A; O++)
      R[O] = (M.i(O) << 1) | (M.i(O - 1) >>> 31);
    return new f(R, M.h);
  }
  function ct(M, A) {
    var R = A >> 5;
    A %= 32;
    for (var O = M.g.length - R, N = [], P = 0; P < O; P++)
      N[P] =
        0 < A ? (M.i(P + R) >>> A) | (M.i(P + R + 1) << (32 - A)) : M.i(P + R);
    return new f(N, M.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (uE = r),
    (f.prototype.add = f.prototype.add),
    (f.prototype.multiply = f.prototype.j),
    (f.prototype.modulo = f.prototype.A),
    (f.prototype.compare = f.prototype.l),
    (f.prototype.toNumber = f.prototype.m),
    (f.prototype.toString = f.prototype.toString),
    (f.prototype.getBits = f.prototype.i),
    (f.fromNumber = g),
    (f.fromString = v),
    (Os = f);
}).apply(
  typeof x0 < "u"
    ? x0
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
var Rc =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var cE, vl, hE, Lc, sm, fE, dE, mE;
(function () {
  var n,
    t =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (c, y, _) {
            return (
              c == Array.prototype || c == Object.prototype || (c[y] = _.value),
              c
            );
          };
  function i(c) {
    c = [
      typeof globalThis == "object" && globalThis,
      c,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof Rc == "object" && Rc,
    ];
    for (var y = 0; y < c.length; ++y) {
      var _ = c[y];
      if (_ && _.Math == Math) return _;
    }
    throw Error("Cannot find global object");
  }
  var r = i(this);
  function o(c, y) {
    if (y)
      t: {
        var _ = r;
        c = c.split(".");
        for (var S = 0; S < c.length - 1; S++) {
          var k = c[S];
          if (!(k in _)) break t;
          _ = _[k];
        }
        (c = c[c.length - 1]),
          (S = _[c]),
          (y = y(S)),
          y != S &&
            y != null &&
            t(_, c, { configurable: !0, writable: !0, value: y });
      }
  }
  function u(c, y) {
    c instanceof String && (c += "");
    var _ = 0,
      S = !1,
      k = {
        next: function () {
          if (!S && _ < c.length) {
            var G = _++;
            return { value: y(G, c[G]), done: !1 };
          }
          return (S = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (k[Symbol.iterator] = function () {
        return k;
      }),
      k
    );
  }
  o("Array.prototype.values", function (c) {
    return (
      c ||
      function () {
        return u(this, function (y, _) {
          return _;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var f = f || {},
    m = this || self;
  function p(c) {
    var y = typeof c;
    return (
      (y = y != "object" ? y : c ? (Array.isArray(c) ? "array" : y) : "null"),
      y == "array" || (y == "object" && typeof c.length == "number")
    );
  }
  function g(c) {
    var y = typeof c;
    return (y == "object" && c != null) || y == "function";
  }
  function v(c, y, _) {
    return c.call.apply(c.bind, arguments);
  }
  function E(c, y, _) {
    if (!c) throw Error();
    if (2 < arguments.length) {
      var S = Array.prototype.slice.call(arguments, 2);
      return function () {
        var k = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(k, S), c.apply(y, k);
      };
    }
    return function () {
      return c.apply(y, arguments);
    };
  }
  function w(c, y, _) {
    return (
      (w =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? v
          : E),
      w.apply(null, arguments)
    );
  }
  function D(c, y) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return function () {
      var S = _.slice();
      return S.push.apply(S, arguments), c.apply(this, S);
    };
  }
  function B(c, y) {
    function _() {}
    (_.prototype = y.prototype),
      (c.aa = y.prototype),
      (c.prototype = new _()),
      (c.prototype.constructor = c),
      (c.Qb = function (S, k, G) {
        for (
          var rt = Array(arguments.length - 2), Lt = 2;
          Lt < arguments.length;
          Lt++
        )
          rt[Lt - 2] = arguments[Lt];
        return y.prototype[k].apply(S, rt);
      });
  }
  function F(c) {
    const y = c.length;
    if (0 < y) {
      const _ = Array(y);
      for (let S = 0; S < y; S++) _[S] = c[S];
      return _;
    }
    return [];
  }
  function H(c, y) {
    for (let _ = 1; _ < arguments.length; _++) {
      const S = arguments[_];
      if (p(S)) {
        const k = c.length || 0,
          G = S.length || 0;
        c.length = k + G;
        for (let rt = 0; rt < G; rt++) c[k + rt] = S[rt];
      } else c.push(S);
    }
  }
  class $ {
    constructor(y, _) {
      (this.i = y), (this.j = _), (this.h = 0), (this.g = null);
    }
    get() {
      let y;
      return (
        0 < this.h
          ? (this.h--, (y = this.g), (this.g = y.next), (y.next = null))
          : (y = this.i()),
        y
      );
    }
  }
  function st(c) {
    return /^[\s\xa0]*$/.test(c);
  }
  function nt() {
    var c = m.navigator;
    return c && (c = c.userAgent) ? c : "";
  }
  function mt(c) {
    return mt[" "](c), c;
  }
  mt[" "] = function () {};
  var it =
    nt().indexOf("Gecko") != -1 &&
    !(
      nt().toLowerCase().indexOf("webkit") != -1 && nt().indexOf("Edge") == -1
    ) &&
    !(nt().indexOf("Trident") != -1 || nt().indexOf("MSIE") != -1) &&
    nt().indexOf("Edge") == -1;
  function ct(c, y, _) {
    for (const S in c) y.call(_, c[S], S, c);
  }
  function M(c, y) {
    for (const _ in c) y.call(void 0, c[_], _, c);
  }
  function A(c) {
    const y = {};
    for (const _ in c) y[_] = c[_];
    return y;
  }
  const R =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function O(c, y) {
    let _, S;
    for (let k = 1; k < arguments.length; k++) {
      S = arguments[k];
      for (_ in S) c[_] = S[_];
      for (let G = 0; G < R.length; G++)
        (_ = R[G]), Object.prototype.hasOwnProperty.call(S, _) && (c[_] = S[_]);
    }
  }
  function N(c) {
    var y = 1;
    c = c.split(":");
    const _ = [];
    for (; 0 < y && c.length; ) _.push(c.shift()), y--;
    return c.length && _.push(c.join(":")), _;
  }
  function P(c) {
    m.setTimeout(() => {
      throw c;
    }, 0);
  }
  function C() {
    var c = Vt;
    let y = null;
    return (
      c.g &&
        ((y = c.g), (c.g = c.g.next), c.g || (c.h = null), (y.next = null)),
      y
    );
  }
  class re {
    constructor() {
      this.h = this.g = null;
    }
    add(y, _) {
      const S = Kt.get();
      S.set(y, _), this.h ? (this.h.next = S) : (this.g = S), (this.h = S);
    }
  }
  var Kt = new $(
    () => new K(),
    (c) => c.reset()
  );
  class K {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(y, _) {
      (this.h = y), (this.g = _), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let et,
    X = !1,
    Vt = new re(),
    V = () => {
      const c = m.Promise.resolve(void 0);
      et = () => {
        c.then(W);
      };
    };
  var W = () => {
    for (var c; (c = C()); ) {
      try {
        c.h.call(c.g);
      } catch (_) {
        P(_);
      }
      var y = Kt;
      y.j(c), 100 > y.h && (y.h++, (c.next = y.g), (y.g = c));
    }
    X = !1;
  };
  function at() {
    (this.s = this.s), (this.C = this.C);
  }
  (at.prototype.s = !1),
    (at.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (at.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function tt(c, y) {
    (this.type = c), (this.g = this.target = y), (this.defaultPrevented = !1);
  }
  tt.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var lt = (function () {
    if (!m.addEventListener || !Object.defineProperty) return !1;
    var c = !1,
      y = Object.defineProperty({}, "passive", {
        get: function () {
          c = !0;
        },
      });
    try {
      const _ = () => {};
      m.addEventListener("test", _, y), m.removeEventListener("test", _, y);
    } catch {}
    return c;
  })();
  function wt(c, y) {
    if (
      (tt.call(this, c ? c.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      c)
    ) {
      var _ = (this.type = c.type),
        S =
          c.changedTouches && c.changedTouches.length
            ? c.changedTouches[0]
            : null;
      if (
        ((this.target = c.target || c.srcElement),
        (this.g = y),
        (y = c.relatedTarget))
      ) {
        if (it) {
          t: {
            try {
              mt(y.nodeName);
              var k = !0;
              break t;
            } catch {}
            k = !1;
          }
          k || (y = null);
        }
      } else
        _ == "mouseover"
          ? (y = c.fromElement)
          : _ == "mouseout" && (y = c.toElement);
      (this.relatedTarget = y),
        S
          ? ((this.clientX = S.clientX !== void 0 ? S.clientX : S.pageX),
            (this.clientY = S.clientY !== void 0 ? S.clientY : S.pageY),
            (this.screenX = S.screenX || 0),
            (this.screenY = S.screenY || 0))
          : ((this.clientX = c.clientX !== void 0 ? c.clientX : c.pageX),
            (this.clientY = c.clientY !== void 0 ? c.clientY : c.pageY),
            (this.screenX = c.screenX || 0),
            (this.screenY = c.screenY || 0)),
        (this.button = c.button),
        (this.key = c.key || ""),
        (this.ctrlKey = c.ctrlKey),
        (this.altKey = c.altKey),
        (this.shiftKey = c.shiftKey),
        (this.metaKey = c.metaKey),
        (this.pointerId = c.pointerId || 0),
        (this.pointerType =
          typeof c.pointerType == "string"
            ? c.pointerType
            : bt[c.pointerType] || ""),
        (this.state = c.state),
        (this.i = c),
        c.defaultPrevented && wt.aa.h.call(this);
    }
  }
  B(wt, tt);
  var bt = { 2: "touch", 3: "pen", 4: "mouse" };
  wt.prototype.h = function () {
    wt.aa.h.call(this);
    var c = this.i;
    c.preventDefault ? c.preventDefault() : (c.returnValue = !1);
  };
  var It = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Yt = 0;
  function sn(c, y, _, S, k) {
    (this.listener = c),
      (this.proxy = null),
      (this.src = y),
      (this.type = _),
      (this.capture = !!S),
      (this.ha = k),
      (this.key = ++Yt),
      (this.da = this.fa = !1);
  }
  function gn(c) {
    (c.da = !0),
      (c.listener = null),
      (c.proxy = null),
      (c.src = null),
      (c.ha = null);
  }
  function yn(c) {
    (this.src = c), (this.g = {}), (this.h = 0);
  }
  yn.prototype.add = function (c, y, _, S, k) {
    var G = c.toString();
    (c = this.g[G]), c || ((c = this.g[G] = []), this.h++);
    var rt = qs(c, y, S, k);
    return (
      -1 < rt
        ? ((y = c[rt]), _ || (y.fa = !1))
        : ((y = new sn(y, this.src, G, !!S, k)), (y.fa = _), c.push(y)),
      y
    );
  };
  function xn(c, y) {
    var _ = y.type;
    if (_ in c.g) {
      var S = c.g[_],
        k = Array.prototype.indexOf.call(S, y, void 0),
        G;
      (G = 0 <= k) && Array.prototype.splice.call(S, k, 1),
        G && (gn(y), c.g[_].length == 0 && (delete c.g[_], c.h--));
    }
  }
  function qs(c, y, _, S) {
    for (var k = 0; k < c.length; ++k) {
      var G = c[k];
      if (!G.da && G.listener == y && G.capture == !!_ && G.ha == S) return k;
    }
    return -1;
  }
  var Hs = "closure_lm_" + ((1e6 * Math.random()) | 0),
    ro = {};
  function nu(c, y, _, S, k) {
    if (Array.isArray(y)) {
      for (var G = 0; G < y.length; G++) nu(c, y[G], _, S, k);
      return null;
    }
    return (
      (_ = iu(_)),
      c && c[It] ? c.K(y, _, g(S) ? !!S.capture : !1, k) : Cn(c, y, _, !1, S, k)
    );
  }
  function Cn(c, y, _, S, k, G) {
    if (!y) throw Error("Invalid event type");
    var rt = g(k) ? !!k.capture : !!k,
      Lt = Ur(c);
    if ((Lt || (c[Hs] = Lt = new yn(c)), (_ = Lt.add(y, _, S, rt, G)), _.proxy))
      return _;
    if (
      ((S = Ah()),
      (_.proxy = S),
      (S.src = c),
      (S.listener = _),
      c.addEventListener)
    )
      lt || (k = rt),
        k === void 0 && (k = !1),
        c.addEventListener(y.toString(), S, k);
    else if (c.attachEvent) c.attachEvent(Gs(y.toString()), S);
    else if (c.addListener && c.removeListener) c.addListener(S);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return _;
  }
  function Ah() {
    function c(_) {
      return y.call(c.src, c.listener, _);
    }
    const y = Sh;
    return c;
  }
  function ao(c, y, _, S, k) {
    if (Array.isArray(y))
      for (var G = 0; G < y.length; G++) ao(c, y[G], _, S, k);
    else
      (S = g(S) ? !!S.capture : !!S),
        (_ = iu(_)),
        c && c[It]
          ? ((c = c.i),
            (y = String(y).toString()),
            y in c.g &&
              ((G = c.g[y]),
              (_ = qs(G, _, S, k)),
              -1 < _ &&
                (gn(G[_]),
                Array.prototype.splice.call(G, _, 1),
                G.length == 0 && (delete c.g[y], c.h--))))
          : c &&
            (c = Ur(c)) &&
            ((y = c.g[y.toString()]),
            (c = -1),
            y && (c = qs(y, _, S, k)),
            (_ = -1 < c ? y[c] : null) && kr(_));
  }
  function kr(c) {
    if (typeof c != "number" && c && !c.da) {
      var y = c.src;
      if (y && y[It]) xn(y.i, c);
      else {
        var _ = c.type,
          S = c.proxy;
        y.removeEventListener
          ? y.removeEventListener(_, S, c.capture)
          : y.detachEvent
          ? y.detachEvent(Gs(_), S)
          : y.addListener && y.removeListener && y.removeListener(S),
          (_ = Ur(y))
            ? (xn(_, c), _.h == 0 && ((_.src = null), (y[Hs] = null)))
            : gn(c);
      }
    }
  }
  function Gs(c) {
    return c in ro ? ro[c] : (ro[c] = "on" + c);
  }
  function Sh(c, y) {
    if (c.da) c = !0;
    else {
      y = new wt(y, this);
      var _ = c.listener,
        S = c.ha || c.src;
      c.fa && kr(c), (c = _.call(S, y));
    }
    return c;
  }
  function Ur(c) {
    return (c = c[Hs]), c instanceof yn ? c : null;
  }
  var oo = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function iu(c) {
    return typeof c == "function"
      ? c
      : (c[oo] ||
          (c[oo] = function (y) {
            return c.handleEvent(y);
          }),
        c[oo]);
  }
  function he() {
    at.call(this), (this.i = new yn(this)), (this.M = this), (this.F = null);
  }
  B(he, at),
    (he.prototype[It] = !0),
    (he.prototype.removeEventListener = function (c, y, _, S) {
      ao(this, c, y, _, S);
    });
  function Xt(c, y) {
    var _,
      S = c.F;
    if (S) for (_ = []; S; S = S.F) _.push(S);
    if (((c = c.M), (S = y.type || y), typeof y == "string")) y = new tt(y, c);
    else if (y instanceof tt) y.target = y.target || c;
    else {
      var k = y;
      (y = new tt(S, c)), O(y, k);
    }
    if (((k = !0), _))
      for (var G = _.length - 1; 0 <= G; G--) {
        var rt = (y.g = _[G]);
        k = vn(rt, S, !0, y) && k;
      }
    if (
      ((rt = y.g = c),
      (k = vn(rt, S, !0, y) && k),
      (k = vn(rt, S, !1, y) && k),
      _)
    )
      for (G = 0; G < _.length; G++)
        (rt = y.g = _[G]), (k = vn(rt, S, !1, y) && k);
  }
  (he.prototype.N = function () {
    if ((he.aa.N.call(this), this.i)) {
      var c = this.i,
        y;
      for (y in c.g) {
        for (var _ = c.g[y], S = 0; S < _.length; S++) gn(_[S]);
        delete c.g[y], c.h--;
      }
    }
    this.F = null;
  }),
    (he.prototype.K = function (c, y, _, S) {
      return this.i.add(String(c), y, !1, _, S);
    }),
    (he.prototype.L = function (c, y, _, S) {
      return this.i.add(String(c), y, !0, _, S);
    });
  function vn(c, y, _, S) {
    if (((y = c.i.g[String(y)]), !y)) return !0;
    y = y.concat();
    for (var k = !0, G = 0; G < y.length; ++G) {
      var rt = y[G];
      if (rt && !rt.da && rt.capture == _) {
        var Lt = rt.listener,
          Ce = rt.ha || rt.src;
        rt.fa && xn(c.i, rt), (k = Lt.call(Ce, S) !== !1 && k);
      }
    }
    return k && !S.defaultPrevented;
  }
  function Xe(c, y, _) {
    if (typeof c == "function") _ && (c = w(c, _));
    else if (c && typeof c.handleEvent == "function") c = w(c.handleEvent, c);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(y) ? -1 : m.setTimeout(c, y || 0);
  }
  function su(c) {
    c.g = Xe(() => {
      (c.g = null), c.i && ((c.i = !1), su(c));
    }, c.l);
    const y = c.h;
    (c.h = null), c.m.apply(null, y);
  }
  class wh extends at {
    constructor(y, _) {
      super(),
        (this.m = y),
        (this.l = _),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(y) {
      (this.h = arguments), this.g ? (this.i = !0) : su(this);
    }
    N() {
      super.N(),
        this.g &&
          (m.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function Fs(c) {
    at.call(this), (this.h = c), (this.g = {});
  }
  B(Fs, at);
  var Ks = [];
  function Qs(c) {
    ct(
      c.g,
      function (y, _) {
        this.g.hasOwnProperty(_) && kr(y);
      },
      c
    ),
      (c.g = {});
  }
  (Fs.prototype.N = function () {
    Fs.aa.N.call(this), Qs(this);
  }),
    (Fs.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    });
  var Gn = m.JSON.stringify,
    Br = m.JSON.parse,
    Ys = class {
      stringify(c) {
        return m.JSON.stringify(c, void 0);
      }
      parse(c) {
        return m.JSON.parse(c, void 0);
      }
    };
  function lo() {}
  lo.prototype.h = null;
  function uo(c) {
    return c.h || (c.h = c.i());
  }
  function co() {}
  var bi = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function Ai() {
    tt.call(this, "d");
  }
  B(Ai, tt);
  function ho() {
    tt.call(this, "c");
  }
  B(ho, tt);
  var $n = {},
    fo = null;
  function Ji() {
    return (fo = fo || new he());
  }
  $n.La = "serverreachability";
  function zr(c) {
    tt.call(this, $n.La, c);
  }
  B(zr, tt);
  function Wi(c) {
    const y = Ji();
    Xt(y, new zr(y));
  }
  $n.STAT_EVENT = "statevent";
  function ru(c, y) {
    tt.call(this, $n.STAT_EVENT, c), (this.stat = y);
  }
  B(ru, tt);
  function ae(c) {
    const y = Ji();
    Xt(y, new ru(y, c));
  }
  $n.Ma = "timingevent";
  function xe(c, y) {
    tt.call(this, $n.Ma, c), (this.size = y);
  }
  B(xe, tt);
  function be(c, y) {
    if (typeof c != "function")
      throw Error("Fn must not be null and must be a function");
    return m.setTimeout(function () {
      c();
    }, y);
  }
  function Dn() {
    this.g = !0;
  }
  Dn.prototype.xa = function () {
    this.g = !1;
  };
  function mo(c, y, _, S, k, G) {
    c.info(function () {
      if (c.g)
        if (G)
          for (var rt = "", Lt = G.split("&"), Ce = 0; Ce < Lt.length; Ce++) {
            var kt = Lt[Ce].split("=");
            if (1 < kt.length) {
              var Le = kt[0];
              kt = kt[1];
              var De = Le.split("_");
              rt =
                2 <= De.length && De[1] == "type"
                  ? rt + (Le + "=" + kt + "&")
                  : rt + (Le + "=redacted&");
            }
          }
        else rt = null;
      else rt = G;
      return (
        "XMLHTTP REQ (" +
        S +
        ") [attempt " +
        k +
        "]: " +
        y +
        `
` +
        _ +
        `
` +
        rt
      );
    });
  }
  function Rh(c, y, _, S, k, G, rt) {
    c.info(function () {
      return (
        "XMLHTTP RESP (" +
        S +
        ") [ attempt " +
        k +
        "]: " +
        y +
        `
` +
        _ +
        `
` +
        G +
        " " +
        rt
      );
    });
  }
  function ts(c, y, _, S) {
    c.info(function () {
      return "XMLHTTP TEXT (" + y + "): " + Xs(c, _) + (S ? " " + S : "");
    });
  }
  function au(c, y) {
    c.info(function () {
      return "TIMEOUT: " + y;
    });
  }
  Dn.prototype.info = function () {};
  function Xs(c, y) {
    if (!c.g) return y;
    if (!y) return null;
    try {
      var _ = JSON.parse(y);
      if (_) {
        for (c = 0; c < _.length; c++)
          if (Array.isArray(_[c])) {
            var S = _[c];
            if (!(2 > S.length)) {
              var k = S[1];
              if (Array.isArray(k) && !(1 > k.length)) {
                var G = k[0];
                if (G != "noop" && G != "stop" && G != "close")
                  for (var rt = 1; rt < k.length; rt++) k[rt] = "";
              }
            }
          }
      }
      return Gn(_);
    } catch {
      return y;
    }
  }
  var es = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    Si = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress",
    },
    Jn;
  function Wn() {}
  B(Wn, lo),
    (Wn.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Wn.prototype.i = function () {
      return {};
    }),
    (Jn = new Wn());
  function rn(c, y, _, S) {
    (this.j = c),
      (this.i = y),
      (this.l = _),
      (this.R = S || 1),
      (this.U = new Fs(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new ge());
  }
  function ge() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  var po = {},
    jr = {};
  function Fn(c, y, _) {
    (c.L = 1), (c.v = tr(_n(y))), (c.m = _), (c.P = !0), wi(c, null);
  }
  function wi(c, y) {
    (c.F = Date.now()), Zs(c), (c.A = _n(c.v));
    var _ = c.A,
      S = c.R;
    Array.isArray(S) || (S = [String(S)]),
      Eo(_.i, "t", S),
      (c.C = 0),
      (_ = c.j.J),
      (c.h = new ge()),
      (c.g = bu(c.j, _ ? y : null, !c.m)),
      0 < c.O && (c.M = new wh(w(c.Y, c, c.g), c.O)),
      (y = c.U),
      (_ = c.g),
      (S = c.ca);
    var k = "readystatechange";
    Array.isArray(k) || (k && (Ks[0] = k.toString()), (k = Ks));
    for (var G = 0; G < k.length; G++) {
      var rt = nu(_, k[G], S || y.handleEvent, !1, y.h || y);
      if (!rt) break;
      y.g[rt.key] = rt;
    }
    (y = c.H ? A(c.H) : {}),
      c.m
        ? (c.u || (c.u = "POST"),
          (y["Content-Type"] = "application/x-www-form-urlencoded"),
          c.g.ea(c.A, c.u, c.m, y))
        : ((c.u = "GET"), c.g.ea(c.A, c.u, null, y)),
      Wi(),
      mo(c.i, c.u, c.A, c.l, c.R, c.m);
  }
  (rn.prototype.ca = function (c) {
    c = c.target;
    const y = this.M;
    y && In(c) == 3 ? y.j() : this.Y(c);
  }),
    (rn.prototype.Y = function (c) {
      try {
        if (c == this.g)
          t: {
            const De = In(this.g);
            var y = this.g.Ba();
            const Ii = this.g.Z();
            if (
              !(3 > De) &&
              (De != 3 || (this.g && (this.h.h || this.g.oa() || mu(this.g))))
            ) {
              this.J ||
                De != 4 ||
                y == 7 ||
                (y == 8 || 0 >= Ii ? Wi(3) : Wi(2)),
                ns(this);
              var _ = this.g.Z();
              this.X = _;
              e: if (ou(this)) {
                var S = mu(this.g);
                c = "";
                var k = S.length,
                  G = In(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    je(this), ti(this);
                    var rt = "";
                    break e;
                  }
                  this.h.i = new m.TextDecoder();
                }
                for (y = 0; y < k; y++)
                  (this.h.h = !0),
                    (c += this.h.i.decode(S[y], {
                      stream: !(G && y == k - 1),
                    }));
                (S.length = 0), (this.h.g += c), (this.C = 0), (rt = this.h.g);
              } else rt = this.g.oa();
              if (
                ((this.o = _ == 200),
                Rh(this.i, this.u, this.A, this.l, this.R, De, _),
                this.o)
              ) {
                if (this.T && !this.K) {
                  e: {
                    if (this.g) {
                      var Lt,
                        Ce = this.g;
                      if (
                        (Lt = Ce.g
                          ? Ce.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !st(Lt)
                      ) {
                        var kt = Lt;
                        break e;
                      }
                    }
                    kt = null;
                  }
                  if ((_ = kt))
                    ts(
                      this.i,
                      this.l,
                      _,
                      "Initial handshake response via X-HTTP-Initial-Response"
                    ),
                      (this.K = !0),
                      $s(this, _);
                  else {
                    (this.o = !1), (this.s = 3), ae(12), je(this), ti(this);
                    break t;
                  }
                }
                if (this.P) {
                  _ = !0;
                  let qe;
                  for (; !this.J && this.C < rt.length; )
                    if (((qe = lu(this, rt)), qe == jr)) {
                      De == 4 && ((this.s = 4), ae(14), (_ = !1)),
                        ts(this.i, this.l, null, "[Incomplete Response]");
                      break;
                    } else if (qe == po) {
                      (this.s = 4),
                        ae(15),
                        ts(this.i, this.l, rt, "[Invalid Chunk]"),
                        (_ = !1);
                      break;
                    } else ts(this.i, this.l, qe, null), $s(this, qe);
                  if (
                    (ou(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    De != 4 ||
                      rt.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), ae(16), (_ = !1)),
                    (this.o = this.o && _),
                    !_)
                  )
                    ts(this.i, this.l, rt, "[Invalid Chunked Response]"),
                      je(this),
                      ti(this);
                  else if (0 < rt.length && !this.W) {
                    this.W = !0;
                    var Le = this.j;
                    Le.g == this &&
                      Le.ba &&
                      !Le.M &&
                      (Le.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          rt.length
                      ),
                      lr(Le),
                      (Le.M = !0),
                      ae(11));
                  }
                } else ts(this.i, this.l, rt, null), $s(this, rt);
                De == 4 && je(this),
                  this.o &&
                    !this.J &&
                    (De == 4 ? _u(this.j, this) : ((this.o = !1), Zs(this)));
              } else
                Mh(this.g),
                  _ == 400 && 0 < rt.indexOf("Unknown SID")
                    ? ((this.s = 3), ae(12))
                    : ((this.s = 0), ae(13)),
                  je(this),
                  ti(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function ou(c) {
    return c.g ? c.u == "GET" && c.L != 2 && c.j.Ca : !1;
  }
  function lu(c, y) {
    var _ = c.C,
      S = y.indexOf(
        `
`,
        _
      );
    return S == -1
      ? jr
      : ((_ = Number(y.substring(_, S))),
        isNaN(_)
          ? po
          : ((S += 1),
            S + _ > y.length
              ? jr
              : ((y = y.slice(S, S + _)), (c.C = S + _), y)));
  }
  rn.prototype.cancel = function () {
    (this.J = !0), je(this);
  };
  function Zs(c) {
    (c.S = Date.now() + c.I), uu(c, c.I);
  }
  function uu(c, y) {
    if (c.B != null) throw Error("WatchDog timer not null");
    c.B = be(w(c.ba, c), y);
  }
  function ns(c) {
    c.B && (m.clearTimeout(c.B), (c.B = null));
  }
  rn.prototype.ba = function () {
    this.B = null;
    const c = Date.now();
    0 <= c - this.S
      ? (au(this.i, this.A),
        this.L != 2 && (Wi(), ae(17)),
        je(this),
        (this.s = 2),
        ti(this))
      : uu(this, this.S - c);
  };
  function ti(c) {
    c.j.G == 0 || c.J || _u(c.j, c);
  }
  function je(c) {
    ns(c);
    var y = c.M;
    y && typeof y.ma == "function" && y.ma(),
      (c.M = null),
      Qs(c.U),
      c.g && ((y = c.g), (c.g = null), y.abort(), y.ma());
  }
  function $s(c, y) {
    try {
      var _ = c.j;
      if (_.G != 0 && (_.g == c || go(_.h, c))) {
        if (!c.K && go(_.h, c) && _.G == 3) {
          try {
            var S = _.Da.g.parse(y);
          } catch {
            S = null;
          }
          if (Array.isArray(S) && S.length == 3) {
            var k = S;
            if (k[0] == 0) {
              t: if (!_.u) {
                if (_.g)
                  if (_.g.F + 3e3 < c.F) Wr(_), $r(_);
                  else break t;
                Ro(_), ae(18);
              }
            } else
              (_.za = k[1]),
                0 < _.za - _.T &&
                  37500 > k[2] &&
                  _.F &&
                  _.v == 0 &&
                  !_.C &&
                  (_.C = be(w(_.Za, _), 6e3));
            if (1 >= Hr(_.h) && _.ca) {
              try {
                _.ca();
              } catch {}
              _.ca = void 0;
            }
          } else Oi(_, 11);
        } else if (((c.K || _.g == c) && Wr(_), !st(y)))
          for (k = _.Da.g.parse(y), y = 0; y < k.length; y++) {
            let kt = k[y];
            if (((_.T = kt[0]), (kt = kt[1]), _.G == 2))
              if (kt[0] == "c") {
                (_.K = kt[1]), (_.ia = kt[2]);
                const Le = kt[3];
                Le != null && ((_.la = Le), _.j.info("VER=" + _.la));
                const De = kt[4];
                De != null && ((_.Aa = De), _.j.info("SVER=" + _.Aa));
                const Ii = kt[5];
                Ii != null &&
                  typeof Ii == "number" &&
                  0 < Ii &&
                  ((S = 1.5 * Ii),
                  (_.L = S),
                  _.j.info("backChannelRequestTimeoutMs_=" + S)),
                  (S = _);
                const qe = c.g;
                if (qe) {
                  const oi = qe.g
                    ? qe.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (oi) {
                    var G = S.h;
                    G.g ||
                      (oi.indexOf("spdy") == -1 &&
                        oi.indexOf("quic") == -1 &&
                        oi.indexOf("h2") == -1) ||
                      ((G.j = G.l),
                      (G.g = new Set()),
                      G.h && (Gr(G, G.h), (G.h = null)));
                  }
                  if (S.D) {
                    const Co = qe.g
                      ? qe.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    Co && ((S.ya = Co), Jt(S.I, S.D, Co));
                  }
                }
                (_.G = 3),
                  _.l && _.l.ua(),
                  _.ba &&
                    ((_.R = Date.now() - c.F),
                    _.j.info("Handshake RTT: " + _.R + "ms")),
                  (S = _);
                var rt = c;
                if (((S.qa = Eu(S, S.J ? S.ia : null, S.W)), rt.K)) {
                  an(S.h, rt);
                  var Lt = rt,
                    Ce = S.L;
                  Ce && (Lt.I = Ce), Lt.B && (ns(Lt), Zs(Lt)), (S.g = rt);
                } else yu(S);
                0 < _.i.length && Jr(_);
              } else (kt[0] != "stop" && kt[0] != "close") || Oi(_, 7);
            else
              _.G == 3 &&
                (kt[0] == "stop" || kt[0] == "close"
                  ? kt[0] == "stop"
                    ? Oi(_, 7)
                    : So(_)
                  : kt[0] != "noop" && _.l && _.l.ta(kt),
                (_.v = 0));
          }
      }
      Wi(4);
    } catch {}
  }
  var cu = class {
    constructor(c, y) {
      (this.g = c), (this.map = y);
    }
  };
  function Ri(c) {
    (this.l = c || 10),
      m.PerformanceNavigationTiming
        ? ((c = m.performance.getEntriesByType("navigation")),
          (c =
            0 < c.length &&
            (c[0].nextHopProtocol == "hq" || c[0].nextHopProtocol == "h2")))
        : (c = !!(
            m.chrome &&
            m.chrome.loadTimes &&
            m.chrome.loadTimes() &&
            m.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = c ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function qr(c) {
    return c.h ? !0 : c.g ? c.g.size >= c.j : !1;
  }
  function Hr(c) {
    return c.h ? 1 : c.g ? c.g.size : 0;
  }
  function go(c, y) {
    return c.h ? c.h == y : c.g ? c.g.has(y) : !1;
  }
  function Gr(c, y) {
    c.g ? c.g.add(y) : (c.h = y);
  }
  function an(c, y) {
    c.h && c.h == y ? (c.h = null) : c.g && c.g.has(y) && c.g.delete(y);
  }
  Ri.prototype.cancel = function () {
    if (((this.i = yo(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const c of this.g.values()) c.cancel();
      this.g.clear();
    }
  };
  function yo(c) {
    if (c.h != null) return c.i.concat(c.h.D);
    if (c.g != null && c.g.size !== 0) {
      let y = c.i;
      for (const _ of c.g.values()) y = y.concat(_.D);
      return y;
    }
    return F(c.i);
  }
  function xh(c) {
    if (c.V && typeof c.V == "function") return c.V();
    if (
      (typeof Map < "u" && c instanceof Map) ||
      (typeof Set < "u" && c instanceof Set)
    )
      return Array.from(c.values());
    if (typeof c == "string") return c.split("");
    if (p(c)) {
      for (var y = [], _ = c.length, S = 0; S < _; S++) y.push(c[S]);
      return y;
    }
    (y = []), (_ = 0);
    for (S in c) y[_++] = c[S];
    return y;
  }
  function Fr(c) {
    if (c.na && typeof c.na == "function") return c.na();
    if (!c.V || typeof c.V != "function") {
      if (typeof Map < "u" && c instanceof Map) return Array.from(c.keys());
      if (!(typeof Set < "u" && c instanceof Set)) {
        if (p(c) || typeof c == "string") {
          var y = [];
          c = c.length;
          for (var _ = 0; _ < c; _++) y.push(_);
          return y;
        }
        (y = []), (_ = 0);
        for (const S in c) y[_++] = S;
        return y;
      }
    }
  }
  function vo(c, y) {
    if (c.forEach && typeof c.forEach == "function") c.forEach(y, void 0);
    else if (p(c) || typeof c == "string")
      Array.prototype.forEach.call(c, y, void 0);
    else
      for (var _ = Fr(c), S = xh(c), k = S.length, G = 0; G < k; G++)
        y.call(void 0, S[G], _ && _[G], c);
  }
  var Js = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Ch(c, y) {
    if (c) {
      c = c.split("&");
      for (var _ = 0; _ < c.length; _++) {
        var S = c[_].indexOf("="),
          k = null;
        if (0 <= S) {
          var G = c[_].substring(0, S);
          k = c[_].substring(S + 1);
        } else G = c[_];
        y(G, k ? decodeURIComponent(k.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Ae(c) {
    if (
      ((this.g = this.o = this.j = ""),
      (this.s = null),
      (this.m = this.l = ""),
      (this.h = !1),
      c instanceof Ae)
    ) {
      (this.h = c.h),
        Ws(this, c.j),
        (this.o = c.o),
        (this.g = c.g),
        is(this, c.s),
        (this.l = c.l);
      var y = c.i,
        _ = new Ci();
      (_.i = y.i),
        y.g && ((_.g = new Map(y.g)), (_.h = y.h)),
        xi(this, _),
        (this.m = c.m);
    } else
      c && (y = String(c).match(Js))
        ? ((this.h = !1),
          Ws(this, y[1] || "", !0),
          (this.o = Vn(y[2] || "")),
          (this.g = Vn(y[3] || "", !0)),
          is(this, y[4]),
          (this.l = Vn(y[5] || "", !0)),
          xi(this, y[6] || "", !0),
          (this.m = Vn(y[7] || "")))
        : ((this.h = !1), (this.i = new Ci(null, this.h)));
  }
  Ae.prototype.toString = function () {
    var c = [],
      y = this.j;
    y && c.push(er(y, _o, !0), ":");
    var _ = this.g;
    return (
      (_ || y == "file") &&
        (c.push("//"),
        (y = this.o) && c.push(er(y, _o, !0), "@"),
        c.push(
          encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (_ = this.s),
        _ != null && c.push(":", String(_))),
      (_ = this.l) &&
        (this.g && _.charAt(0) != "/" && c.push("/"),
        c.push(er(_, _.charAt(0) == "/" ? Dh : To, !0))),
      (_ = this.i.toString()) && c.push("?", _),
      (_ = this.m) && c.push("#", er(_, Kr)),
      c.join("")
    );
  };
  function _n(c) {
    return new Ae(c);
  }
  function Ws(c, y, _) {
    (c.j = _ ? Vn(y, !0) : y), c.j && (c.j = c.j.replace(/:$/, ""));
  }
  function is(c, y) {
    if (y) {
      if (((y = Number(y)), isNaN(y) || 0 > y))
        throw Error("Bad port number " + y);
      c.s = y;
    } else c.s = null;
  }
  function xi(c, y, _) {
    y instanceof Ci
      ? ((c.i = y), fu(c.i, c.h))
      : (_ || (y = er(y, Vh)), (c.i = new Ci(y, c.h)));
  }
  function Jt(c, y, _) {
    c.i.set(y, _);
  }
  function tr(c) {
    return (
      Jt(
        c,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      c
    );
  }
  function Vn(c, y) {
    return c
      ? y
        ? decodeURI(c.replace(/%25/g, "%2525"))
        : decodeURIComponent(c)
      : "";
  }
  function er(c, y, _) {
    return typeof c == "string"
      ? ((c = encodeURI(c).replace(y, hu)),
        _ && (c = c.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c)
      : null;
  }
  function hu(c) {
    return (
      (c = c.charCodeAt(0)),
      "%" + ((c >> 4) & 15).toString(16) + (c & 15).toString(16)
    );
  }
  var _o = /[#\/\?@]/g,
    To = /[#\?:]/g,
    Dh = /[#\?]/g,
    Vh = /[#\?@]/g,
    Kr = /#/g;
  function Ci(c, y) {
    (this.h = this.g = null), (this.i = c || null), (this.j = !!y);
  }
  function Mn(c) {
    c.g ||
      ((c.g = new Map()),
      (c.h = 0),
      c.i &&
        Ch(c.i, function (y, _) {
          c.add(decodeURIComponent(y.replace(/\+/g, " ")), _);
        }));
  }
  (n = Ci.prototype),
    (n.add = function (c, y) {
      Mn(this), (this.i = null), (c = ei(this, c));
      var _ = this.g.get(c);
      return _ || this.g.set(c, (_ = [])), _.push(y), (this.h += 1), this;
    });
  function Di(c, y) {
    Mn(c),
      (y = ei(c, y)),
      c.g.has(y) && ((c.i = null), (c.h -= c.g.get(y).length), c.g.delete(y));
  }
  function Vi(c, y) {
    return Mn(c), (y = ei(c, y)), c.g.has(y);
  }
  (n.forEach = function (c, y) {
    Mn(this),
      this.g.forEach(function (_, S) {
        _.forEach(function (k) {
          c.call(y, k, S, this);
        }, this);
      }, this);
  }),
    (n.na = function () {
      Mn(this);
      const c = Array.from(this.g.values()),
        y = Array.from(this.g.keys()),
        _ = [];
      for (let S = 0; S < y.length; S++) {
        const k = c[S];
        for (let G = 0; G < k.length; G++) _.push(y[S]);
      }
      return _;
    }),
    (n.V = function (c) {
      Mn(this);
      let y = [];
      if (typeof c == "string")
        Vi(this, c) && (y = y.concat(this.g.get(ei(this, c))));
      else {
        c = Array.from(this.g.values());
        for (let _ = 0; _ < c.length; _++) y = y.concat(c[_]);
      }
      return y;
    }),
    (n.set = function (c, y) {
      return (
        Mn(this),
        (this.i = null),
        (c = ei(this, c)),
        Vi(this, c) && (this.h -= this.g.get(c).length),
        this.g.set(c, [y]),
        (this.h += 1),
        this
      );
    }),
    (n.get = function (c, y) {
      return c ? ((c = this.V(c)), 0 < c.length ? String(c[0]) : y) : y;
    });
  function Eo(c, y, _) {
    Di(c, y),
      0 < _.length &&
        ((c.i = null), c.g.set(ei(c, y), F(_)), (c.h += _.length));
  }
  n.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const c = [],
      y = Array.from(this.g.keys());
    for (var _ = 0; _ < y.length; _++) {
      var S = y[_];
      const G = encodeURIComponent(String(S)),
        rt = this.V(S);
      for (S = 0; S < rt.length; S++) {
        var k = G;
        rt[S] !== "" && (k += "=" + encodeURIComponent(String(rt[S]))),
          c.push(k);
      }
    }
    return (this.i = c.join("&"));
  };
  function ei(c, y) {
    return (y = String(y)), c.j && (y = y.toLowerCase()), y;
  }
  function fu(c, y) {
    y &&
      !c.j &&
      (Mn(c),
      (c.i = null),
      c.g.forEach(function (_, S) {
        var k = S.toLowerCase();
        S != k && (Di(this, S), Eo(this, k, _));
      }, c)),
      (c.j = y);
  }
  function nr(c, y) {
    const _ = new Dn();
    if (m.Image) {
      const S = new Image();
      (S.onload = D(On, _, "TestLoadImage: loaded", !0, y, S)),
        (S.onerror = D(On, _, "TestLoadImage: error", !1, y, S)),
        (S.onabort = D(On, _, "TestLoadImage: abort", !1, y, S)),
        (S.ontimeout = D(On, _, "TestLoadImage: timeout", !1, y, S)),
        m.setTimeout(function () {
          S.ontimeout && S.ontimeout();
        }, 1e4),
        (S.src = c);
    } else y(!1);
  }
  function Kn(c, y) {
    const _ = new Dn(),
      S = new AbortController(),
      k = setTimeout(() => {
        S.abort(), On(_, "TestPingServer: timeout", !1, y);
      }, 1e4);
    fetch(c, { signal: S.signal })
      .then((G) => {
        clearTimeout(k),
          G.ok
            ? On(_, "TestPingServer: ok", !0, y)
            : On(_, "TestPingServer: server error", !1, y);
      })
      .catch(() => {
        clearTimeout(k), On(_, "TestPingServer: error", !1, y);
      });
  }
  function On(c, y, _, S, k) {
    try {
      k &&
        ((k.onload = null),
        (k.onerror = null),
        (k.onabort = null),
        (k.ontimeout = null)),
        S(_);
    } catch {}
  }
  function ir() {
    this.g = new Ys();
  }
  function ni(c, y, _) {
    const S = _ || "";
    try {
      vo(c, function (k, G) {
        let rt = k;
        g(k) && (rt = Gn(k)), y.push(S + G + "=" + encodeURIComponent(rt));
      });
    } catch (k) {
      throw (y.push(S + "type=" + encodeURIComponent("_badmap")), k);
    }
  }
  function ss(c) {
    (this.l = c.Ub || null), (this.j = c.eb || !1);
  }
  B(ss, lo),
    (ss.prototype.g = function () {
      return new Mi(this.l, this.j);
    }),
    (ss.prototype.i = (function (c) {
      return function () {
        return c;
      };
    })({}));
  function Mi(c, y) {
    he.call(this),
      (this.D = c),
      (this.o = y),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = "GET"),
      (this.A = ""),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  B(Mi, he),
    (n = Mi.prototype),
    (n.open = function (c, y) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      (this.B = c), (this.A = y), (this.readyState = 1), si(this);
    }),
    (n.send = function (c) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      const y = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      c && (y.body = c),
        (this.D || m)
          .fetch(new Request(this.A, y))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (n.abort = function () {
      (this.response = this.responseText = ""),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), ii(this)),
        (this.readyState = 0);
    }),
    (n.Sa = function (c) {
      if (
        this.g &&
        ((this.l = c),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = c.headers),
          (this.readyState = 2),
          si(this)),
        this.g && ((this.readyState = 3), si(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          c.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof m.ReadableStream < "u" && "body" in c) {
          if (((this.j = c.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.v = new TextDecoder());
          bo(this);
        } else c.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function bo(c) {
    c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c));
  }
  (n.Pa = function (c) {
    if (this.g) {
      if (this.o && c.value) this.response.push(c.value);
      else if (!this.o) {
        var y = c.value ? c.value : new Uint8Array(0);
        (y = this.v.decode(y, { stream: !c.done })) &&
          (this.response = this.responseText += y);
      }
      c.done ? ii(this) : si(this), this.readyState == 3 && bo(this);
    }
  }),
    (n.Ra = function (c) {
      this.g && ((this.response = this.responseText = c), ii(this));
    }),
    (n.Qa = function (c) {
      this.g && ((this.response = c), ii(this));
    }),
    (n.ga = function () {
      this.g && ii(this);
    });
  function ii(c) {
    (c.readyState = 4), (c.l = null), (c.j = null), (c.v = null), si(c);
  }
  (n.setRequestHeader = function (c, y) {
    this.u.append(c, y);
  }),
    (n.getResponseHeader = function (c) {
      return (this.h && this.h.get(c.toLowerCase())) || "";
    }),
    (n.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const c = [],
        y = this.h.entries();
      for (var _ = y.next(); !_.done; )
        (_ = _.value), c.push(_[0] + ": " + _[1]), (_ = y.next());
      return c.join(`\r
`);
    });
  function si(c) {
    c.onreadystatechange && c.onreadystatechange.call(c);
  }
  Object.defineProperty(Mi.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (c) {
      this.m = c ? "include" : "same-origin";
    },
  });
  function Ao(c) {
    let y = "";
    return (
      ct(c, function (_, S) {
        (y += S),
          (y += ":"),
          (y += _),
          (y += `\r
`);
      }),
      y
    );
  }
  function Pe(c, y, _) {
    t: {
      for (S in _) {
        var S = !1;
        break t;
      }
      S = !0;
    }
    S ||
      ((_ = Ao(_)),
      typeof c == "string"
        ? _ != null && encodeURIComponent(String(_))
        : Jt(c, y, _));
  }
  function Qt(c) {
    he.call(this),
      (this.headers = new Map()),
      (this.o = c || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ""),
      (this.m = 0),
      (this.l = ""),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ""),
      (this.J = !1);
  }
  B(Qt, he);
  var Qr = /^https?$/i,
    sr = ["POST", "PUT"];
  (n = Qt.prototype),
    (n.Ha = function (c) {
      this.J = c;
    }),
    (n.ea = function (c, y, _, S) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            c
        );
      (y = y ? y.toUpperCase() : "GET"),
        (this.D = c),
        (this.l = ""),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Jn.g()),
        (this.v = this.o ? uo(this.o) : uo(Jn)),
        (this.g.onreadystatechange = w(this.Ea, this));
      try {
        (this.B = !0), this.g.open(y, String(c), !0), (this.B = !1);
      } catch (G) {
        du(this, G);
        return;
      }
      if (((c = _ || ""), (_ = new Map(this.headers)), S))
        if (Object.getPrototypeOf(S) === Object.prototype)
          for (var k in S) _.set(k, S[k]);
        else if (typeof S.keys == "function" && typeof S.get == "function")
          for (const G of S.keys()) _.set(G, S.get(G));
        else throw Error("Unknown input type for opt_headers: " + String(S));
      (S = Array.from(_.keys()).find((G) => G.toLowerCase() == "content-type")),
        (k = m.FormData && c instanceof m.FormData),
        !(0 <= Array.prototype.indexOf.call(sr, y, void 0)) ||
          S ||
          k ||
          _.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
      for (const [G, rt] of _) this.g.setRequestHeader(G, rt);
      this.H && (this.g.responseType = this.H),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        rr(this), (this.u = !0), this.g.send(c), (this.u = !1);
      } catch (G) {
        du(this, G);
      }
    });
  function du(c, y) {
    (c.h = !1),
      c.g && ((c.j = !0), c.g.abort(), (c.j = !1)),
      (c.l = y),
      (c.m = 5),
      Yr(c),
      ri(c);
  }
  function Yr(c) {
    c.A || ((c.A = !0), Xt(c, "complete"), Xt(c, "error"));
  }
  (n.abort = function (c) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = c || 7),
      Xt(this, "complete"),
      Xt(this, "abort"),
      ri(this));
  }),
    (n.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        ri(this, !0)),
        Qt.aa.N.call(this);
    }),
    (n.Ea = function () {
      this.s || (this.B || this.u || this.j ? Xr(this) : this.bb());
    }),
    (n.bb = function () {
      Xr(this);
    });
  function Xr(c) {
    if (c.h && typeof f < "u" && (!c.v[1] || In(c) != 4 || c.Z() != 2)) {
      if (c.u && In(c) == 4) Xe(c.Ea, 0, c);
      else if ((Xt(c, "readystatechange"), In(c) == 4)) {
        c.h = !1;
        try {
          const rt = c.Z();
          t: switch (rt) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var y = !0;
              break t;
            default:
              y = !1;
          }
          var _;
          if (!(_ = y)) {
            var S;
            if ((S = rt === 0)) {
              var k = String(c.D).match(Js)[1] || null;
              !k &&
                m.self &&
                m.self.location &&
                (k = m.self.location.protocol.slice(0, -1)),
                (S = !Qr.test(k ? k.toLowerCase() : ""));
            }
            _ = S;
          }
          if (_) Xt(c, "complete"), Xt(c, "success");
          else {
            c.m = 6;
            try {
              var G = 2 < In(c) ? c.g.statusText : "";
            } catch {
              G = "";
            }
            (c.l = G + " [" + c.Z() + "]"), Yr(c);
          }
        } finally {
          ri(c);
        }
      }
    }
  }
  function ri(c, y) {
    if (c.g) {
      rr(c);
      const _ = c.g,
        S = c.v[0] ? () => {} : null;
      (c.g = null), (c.v = null), y || Xt(c, "ready");
      try {
        _.onreadystatechange = S;
      } catch {}
    }
  }
  function rr(c) {
    c.I && (m.clearTimeout(c.I), (c.I = null));
  }
  n.isActive = function () {
    return !!this.g;
  };
  function In(c) {
    return c.g ? c.g.readyState : 0;
  }
  (n.Z = function () {
    try {
      return 2 < In(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (n.oa = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (n.Oa = function (c) {
      if (this.g) {
        var y = this.g.responseText;
        return c && y.indexOf(c) == 0 && (y = y.substring(c.length)), Br(y);
      }
    });
  function mu(c) {
    try {
      if (!c.g) return null;
      if ("response" in c.g) return c.g.response;
      switch (c.H) {
        case "":
        case "text":
          return c.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in c.g)
            return c.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Mh(c) {
    const y = {};
    c = ((c.g && 2 <= In(c) && c.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let S = 0; S < c.length; S++) {
      if (st(c[S])) continue;
      var _ = N(c[S]);
      const k = _[0];
      if (((_ = _[1]), typeof _ != "string")) continue;
      _ = _.trim();
      const G = y[k] || [];
      (y[k] = G), G.push(_);
    }
    M(y, function (S) {
      return S.join(", ");
    });
  }
  (n.Ba = function () {
    return this.m;
  }),
    (n.Ka = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    });
  function ar(c, y, _) {
    return (_ && _.internalChannelParams && _.internalChannelParams[c]) || y;
  }
  function Zr(c) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new Dn()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = ar("failFast", !1, c)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = ar("baseRetryDelayMs", 5e3, c)),
      (this.cb = ar("retryDelaySeedMs", 1e4, c)),
      (this.Wa = ar("forwardChannelMaxRetries", 2, c)),
      (this.wa = ar("forwardChannelRequestTimeoutMs", 2e4, c)),
      (this.pa = (c && c.xmlHttpFactory) || void 0),
      (this.Xa = (c && c.Tb) || void 0),
      (this.Ca = (c && c.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (c && c.supportsCrossDomainXhr) || !1),
      (this.K = ""),
      (this.h = new Ri(c && c.concurrentRequestLimit)),
      (this.Da = new ir()),
      (this.P = (c && c.fastHandshake) || !1),
      (this.O = (c && c.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (c && c.Rb) || !1),
      c && c.xa && this.j.xa(),
      c && c.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && c && c.detectBufferingProxy) || !1),
      (this.ja = void 0),
      c &&
        c.longPollingTimeout &&
        0 < c.longPollingTimeout &&
        (this.ja = c.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (n = Zr.prototype),
    (n.la = 8),
    (n.G = 1),
    (n.connect = function (c, y, _, S) {
      ae(0),
        (this.W = c),
        (this.H = y || {}),
        _ && S !== void 0 && ((this.H.OSID = _), (this.H.OAID = S)),
        (this.F = this.X),
        (this.I = Eu(this, null, this.W)),
        Jr(this);
    });
  function So(c) {
    if ((pu(c), c.G == 3)) {
      var y = c.U++,
        _ = _n(c.I);
      if (
        (Jt(_, "SID", c.K),
        Jt(_, "RID", y),
        Jt(_, "TYPE", "terminate"),
        or(c, _),
        (y = new rn(c, c.j, y)),
        (y.L = 2),
        (y.v = tr(_n(_))),
        (_ = !1),
        m.navigator && m.navigator.sendBeacon)
      )
        try {
          _ = m.navigator.sendBeacon(y.v.toString(), "");
        } catch {}
      !_ && m.Image && ((new Image().src = y.v), (_ = !0)),
        _ || ((y.g = bu(y.j, null)), y.g.ea(y.v)),
        (y.F = Date.now()),
        Zs(y);
    }
    Tu(c);
  }
  function $r(c) {
    c.g && (lr(c), c.g.cancel(), (c.g = null));
  }
  function pu(c) {
    $r(c),
      c.u && (m.clearTimeout(c.u), (c.u = null)),
      Wr(c),
      c.h.cancel(),
      c.s && (typeof c.s == "number" && m.clearTimeout(c.s), (c.s = null));
  }
  function Jr(c) {
    if (!qr(c.h) && !c.s) {
      c.s = !0;
      var y = c.Ga;
      et || V(), X || (et(), (X = !0)), Vt.add(y, c), (c.B = 0);
    }
  }
  function Oh(c, y) {
    return Hr(c.h) >= c.h.j - (c.s ? 1 : 0)
      ? !1
      : c.s
      ? ((c.i = y.D.concat(c.i)), !0)
      : c.G == 1 || c.G == 2 || c.B >= (c.Va ? 0 : c.Wa)
      ? !1
      : ((c.s = be(w(c.Ga, c, y), xo(c, c.B))), c.B++, !0);
  }
  n.Ga = function (c) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!c) {
          (this.U = Math.floor(1e5 * Math.random())), (c = this.U++);
          const k = new rn(this, this.j, c);
          let G = this.o;
          if (
            (this.S && (G ? ((G = A(G)), O(G, this.S)) : (G = this.S)),
            this.m !== null || this.O || ((k.H = G), (G = null)),
            this.P)
          )
            t: {
              for (var y = 0, _ = 0; _ < this.i.length; _++) {
                e: {
                  var S = this.i[_];
                  if (
                    "__data__" in S.map &&
                    ((S = S.map.__data__), typeof S == "string")
                  ) {
                    S = S.length;
                    break e;
                  }
                  S = void 0;
                }
                if (S === void 0) break;
                if (((y += S), 4096 < y)) {
                  y = _;
                  break t;
                }
                if (y === 4096 || _ === this.i.length - 1) {
                  y = _ + 1;
                  break t;
                }
              }
              y = 1e3;
            }
          else y = 1e3;
          (y = gu(this, k, y)),
            (_ = _n(this.I)),
            Jt(_, "RID", c),
            Jt(_, "CVER", 22),
            this.D && Jt(_, "X-HTTP-Session-Id", this.D),
            or(this, _),
            G &&
              (this.O
                ? (y = "headers=" + encodeURIComponent(String(Ao(G))) + "&" + y)
                : this.m && Pe(_, this.m, G)),
            Gr(this.h, k),
            this.Ua && Jt(_, "TYPE", "init"),
            this.P
              ? (Jt(_, "$req", y),
                Jt(_, "SID", "null"),
                (k.T = !0),
                Fn(k, _, null))
              : Fn(k, _, y),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (c ? wo(this, c) : this.i.length == 0 || qr(this.h) || wo(this));
  };
  function wo(c, y) {
    var _;
    y ? (_ = y.l) : (_ = c.U++);
    const S = _n(c.I);
    Jt(S, "SID", c.K),
      Jt(S, "RID", _),
      Jt(S, "AID", c.T),
      or(c, S),
      c.m && c.o && Pe(S, c.m, c.o),
      (_ = new rn(c, c.j, _, c.B + 1)),
      c.m === null && (_.H = c.o),
      y && (c.i = y.D.concat(c.i)),
      (y = gu(c, _, 1e3)),
      (_.I = Math.round(0.5 * c.wa) + Math.round(0.5 * c.wa * Math.random())),
      Gr(c.h, _),
      Fn(_, S, y);
  }
  function or(c, y) {
    c.H &&
      ct(c.H, function (_, S) {
        Jt(y, S, _);
      }),
      c.l &&
        vo({}, function (_, S) {
          Jt(y, S, _);
        });
  }
  function gu(c, y, _) {
    _ = Math.min(c.i.length, _);
    var S = c.l ? w(c.l.Na, c.l, c) : null;
    t: {
      var k = c.i;
      let G = -1;
      for (;;) {
        const rt = ["count=" + _];
        G == -1
          ? 0 < _
            ? ((G = k[0].g), rt.push("ofs=" + G))
            : (G = 0)
          : rt.push("ofs=" + G);
        let Lt = !0;
        for (let Ce = 0; Ce < _; Ce++) {
          let kt = k[Ce].g;
          const Le = k[Ce].map;
          if (((kt -= G), 0 > kt)) (G = Math.max(0, k[Ce].g - 100)), (Lt = !1);
          else
            try {
              ni(Le, rt, "req" + kt + "_");
            } catch {
              S && S(Le);
            }
        }
        if (Lt) {
          S = rt.join("&");
          break t;
        }
      }
    }
    return (c = c.i.splice(0, _)), (y.D = c), S;
  }
  function yu(c) {
    if (!c.g && !c.u) {
      c.Y = 1;
      var y = c.Fa;
      et || V(), X || (et(), (X = !0)), Vt.add(y, c), (c.v = 0);
    }
  }
  function Ro(c) {
    return c.g || c.u || 3 <= c.v
      ? !1
      : (c.Y++, (c.u = be(w(c.Fa, c), xo(c, c.v))), c.v++, !0);
  }
  (n.Fa = function () {
    if (
      ((this.u = null),
      vu(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var c = 2 * this.R;
      this.j.info("BP detection timer enabled: " + c),
        (this.A = be(w(this.ab, this), c));
    }
  }),
    (n.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.M = !0),
        ae(10),
        $r(this),
        vu(this));
    });
  function lr(c) {
    c.A != null && (m.clearTimeout(c.A), (c.A = null));
  }
  function vu(c) {
    (c.g = new rn(c, c.j, "rpc", c.Y)),
      c.m === null && (c.g.H = c.o),
      (c.g.O = 0);
    var y = _n(c.qa);
    Jt(y, "RID", "rpc"),
      Jt(y, "SID", c.K),
      Jt(y, "AID", c.T),
      Jt(y, "CI", c.F ? "0" : "1"),
      !c.F && c.ja && Jt(y, "TO", c.ja),
      Jt(y, "TYPE", "xmlhttp"),
      or(c, y),
      c.m && c.o && Pe(y, c.m, c.o),
      c.L && (c.g.I = c.L);
    var _ = c.g;
    (c = c.ia),
      (_.L = 1),
      (_.v = tr(_n(y))),
      (_.m = null),
      (_.P = !0),
      wi(_, c);
  }
  n.Za = function () {
    this.C != null && ((this.C = null), $r(this), Ro(this), ae(19));
  };
  function Wr(c) {
    c.C != null && (m.clearTimeout(c.C), (c.C = null));
  }
  function _u(c, y) {
    var _ = null;
    if (c.g == y) {
      Wr(c), lr(c), (c.g = null);
      var S = 2;
    } else if (go(c.h, y)) (_ = y.D), an(c.h, y), (S = 1);
    else return;
    if (c.G != 0) {
      if (y.o)
        if (S == 1) {
          (_ = y.m ? y.m.length : 0), (y = Date.now() - y.F);
          var k = c.B;
          (S = Ji()), Xt(S, new xe(S, _)), Jr(c);
        } else yu(c);
      else if (
        ((k = y.s),
        k == 3 ||
          (k == 0 && 0 < y.X) ||
          !((S == 1 && Oh(c, y)) || (S == 2 && Ro(c))))
      )
        switch ((_ && 0 < _.length && ((y = c.h), (y.i = y.i.concat(_))), k)) {
          case 1:
            Oi(c, 5);
            break;
          case 4:
            Oi(c, 10);
            break;
          case 3:
            Oi(c, 6);
            break;
          default:
            Oi(c, 2);
        }
    }
  }
  function xo(c, y) {
    let _ = c.Ta + Math.floor(Math.random() * c.cb);
    return c.isActive() || (_ *= 2), _ * y;
  }
  function Oi(c, y) {
    if ((c.j.info("Error code " + y), y == 2)) {
      var _ = w(c.fb, c),
        S = c.Xa;
      const k = !S;
      (S = new Ae(S || "//www.google.com/images/cleardot.gif")),
        (m.location && m.location.protocol == "http") || Ws(S, "https"),
        tr(S),
        k ? nr(S.toString(), _) : Kn(S.toString(), _);
    } else ae(2);
    (c.G = 0), c.l && c.l.sa(y), Tu(c), pu(c);
  }
  n.fb = function (c) {
    c
      ? (this.j.info("Successfully pinged google.com"), ae(2))
      : (this.j.info("Failed to ping google.com"), ae(1));
  };
  function Tu(c) {
    if (((c.G = 0), (c.ka = []), c.l)) {
      const y = yo(c.h);
      (y.length != 0 || c.i.length != 0) &&
        (H(c.ka, y),
        H(c.ka, c.i),
        (c.h.i.length = 0),
        F(c.i),
        (c.i.length = 0)),
        c.l.ra();
    }
  }
  function Eu(c, y, _) {
    var S = _ instanceof Ae ? _n(_) : new Ae(_);
    if (S.g != "") y && (S.g = y + "." + S.g), is(S, S.s);
    else {
      var k = m.location;
      (S = k.protocol),
        (y = y ? y + "." + k.hostname : k.hostname),
        (k = +k.port);
      var G = new Ae(null);
      S && Ws(G, S), y && (G.g = y), k && is(G, k), _ && (G.l = _), (S = G);
    }
    return (
      (_ = c.D),
      (y = c.ya),
      _ && y && Jt(S, _, y),
      Jt(S, "VER", c.la),
      or(c, S),
      S
    );
  }
  function bu(c, y, _) {
    if (y && !c.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (y = c.Ca && !c.pa ? new Qt(new ss({ eb: _ })) : new Qt(c.pa)),
      y.Ha(c.J),
      y
    );
  }
  n.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Au() {}
  (n = Au.prototype),
    (n.ua = function () {}),
    (n.ta = function () {}),
    (n.sa = function () {}),
    (n.ra = function () {}),
    (n.isActive = function () {
      return !0;
    }),
    (n.Na = function () {});
  function ta() {}
  ta.prototype.g = function (c, y) {
    return new on(c, y);
  };
  function on(c, y) {
    he.call(this),
      (this.g = new Zr(y)),
      (this.l = c),
      (this.h = (y && y.messageUrlParams) || null),
      (c = (y && y.messageHeaders) || null),
      y &&
        y.clientProtocolHeaderRequired &&
        (c
          ? (c["X-Client-Protocol"] = "webchannel")
          : (c = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = c),
      (c = (y && y.initMessageHeaders) || null),
      y &&
        y.messageContentType &&
        (c
          ? (c["X-WebChannel-Content-Type"] = y.messageContentType)
          : (c = { "X-WebChannel-Content-Type": y.messageContentType })),
      y &&
        y.va &&
        (c
          ? (c["X-WebChannel-Client-Profile"] = y.va)
          : (c = { "X-WebChannel-Client-Profile": y.va })),
      (this.g.S = c),
      (c = y && y.Sb) && !st(c) && (this.g.m = c),
      (this.v = (y && y.supportsCrossDomainXhr) || !1),
      (this.u = (y && y.sendRawJson) || !1),
      (y = y && y.httpSessionIdParam) &&
        !st(y) &&
        ((this.g.D = y),
        (c = this.h),
        c !== null && y in c && ((c = this.h), y in c && delete c[y])),
      (this.j = new ai(this));
  }
  B(on, he),
    (on.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (on.prototype.close = function () {
      So(this.g);
    }),
    (on.prototype.o = function (c) {
      var y = this.g;
      if (typeof c == "string") {
        var _ = {};
        (_.__data__ = c), (c = _);
      } else this.u && ((_ = {}), (_.__data__ = Gn(c)), (c = _));
      y.i.push(new cu(y.Ya++, c)), y.G == 3 && Jr(y);
    }),
    (on.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        So(this.g),
        delete this.g,
        on.aa.N.call(this);
    });
  function Su(c) {
    Ai.call(this),
      c.__headers__ &&
        ((this.headers = c.__headers__),
        (this.statusCode = c.__status__),
        delete c.__headers__,
        delete c.__status__);
    var y = c.__sm__;
    if (y) {
      t: {
        for (const _ in y) {
          c = _;
          break t;
        }
        c = void 0;
      }
      (this.i = c) &&
        ((c = this.i), (y = y !== null && c in y ? y[c] : void 0)),
        (this.data = y);
    } else this.data = c;
  }
  B(Su, Ai);
  function wu() {
    ho.call(this), (this.status = 1);
  }
  B(wu, ho);
  function ai(c) {
    this.g = c;
  }
  B(ai, Au),
    (ai.prototype.ua = function () {
      Xt(this.g, "a");
    }),
    (ai.prototype.ta = function (c) {
      Xt(this.g, new Su(c));
    }),
    (ai.prototype.sa = function (c) {
      Xt(this.g, new wu());
    }),
    (ai.prototype.ra = function () {
      Xt(this.g, "b");
    }),
    (ta.prototype.createWebChannel = ta.prototype.g),
    (on.prototype.send = on.prototype.o),
    (on.prototype.open = on.prototype.m),
    (on.prototype.close = on.prototype.close),
    (mE = function () {
      return new ta();
    }),
    (dE = function () {
      return Ji();
    }),
    (fE = $n),
    (sm = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (es.NO_ERROR = 0),
    (es.TIMEOUT = 8),
    (es.HTTP_ERROR = 6),
    (Lc = es),
    (Si.COMPLETE = "complete"),
    (hE = Si),
    (co.EventType = bi),
    (bi.OPEN = "a"),
    (bi.CLOSE = "b"),
    (bi.ERROR = "c"),
    (bi.MESSAGE = "d"),
    (he.prototype.listen = he.prototype.K),
    (vl = co),
    (Qt.prototype.listenOnce = Qt.prototype.L),
    (Qt.prototype.getLastError = Qt.prototype.Ka),
    (Qt.prototype.getLastErrorCode = Qt.prototype.Ba),
    (Qt.prototype.getStatus = Qt.prototype.Z),
    (Qt.prototype.getResponseJson = Qt.prototype.Oa),
    (Qt.prototype.getResponseText = Qt.prototype.oa),
    (Qt.prototype.send = Qt.prototype.ea),
    (Qt.prototype.setWithCredentials = Qt.prototype.Ha),
    (cE = Qt);
}).apply(
  typeof Rc < "u"
    ? Rc
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
const C0 = "@firebase/firestore",
  D0 = "4.7.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tn {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(tn.UNAUTHENTICATED = new tn(null)),
  (tn.GOOGLE_CREDENTIALS = new tn("google-credentials-uid")),
  (tn.FIRST_PARTY = new tn("first-party-uid")),
  (tn.MOCK_USER = new tn("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ja = "11.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nr = new iE("@firebase/firestore");
function Va() {
  return Nr.logLevel;
}
function ut(n, ...t) {
  if (Nr.logLevel <= zt.DEBUG) {
    const i = t.map(Ym);
    Nr.debug(`Firestore (${Ja}): ${n}`, ...i);
  }
}
function Zi(n, ...t) {
  if (Nr.logLevel <= zt.ERROR) {
    const i = t.map(Ym);
    Nr.error(`Firestore (${Ja}): ${n}`, ...i);
  }
}
function qa(n, ...t) {
  if (Nr.logLevel <= zt.WARN) {
    const i = t.map(Ym);
    Nr.warn(`Firestore (${Ja}): ${n}`, ...i);
  }
}
function Ym(n) {
  if (typeof n == "string") return n;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (i) {
      return JSON.stringify(i);
    })(n);
  } catch {
    return n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xt(n = "Unexpected state") {
  const t = `FIRESTORE (${Ja}) INTERNAL ASSERTION FAILED: ` + n;
  throw (Zi(t), new Error(t));
}
function ce(n, t) {
  n || xt();
}
function jt(n, t) {
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ot = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class Tt extends $a {
  constructor(t, i) {
    super(t, i),
      (this.code = t),
      (this.message = i),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mr {
  constructor() {
    this.promise = new Promise((t, i) => {
      (this.resolve = t), (this.reject = i);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pE {
  constructor(t, i) {
    (this.user = i),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class vR {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, i) {
    t.enqueueRetryable(() => i(tn.UNAUTHENTICATED));
  }
  shutdown() {}
}
class _R {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, i) {
    (this.changeListener = i), t.enqueueRetryable(() => i(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class TR {
  constructor(t) {
    (this.t = t),
      (this.currentUser = tn.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, i) {
    ce(this.o === void 0);
    let r = this.i;
    const o = (p) => (this.i !== r ? ((r = this.i), i(p)) : Promise.resolve());
    let u = new Mr();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        u.resolve(),
        (u = new Mr()),
        t.enqueueRetryable(() => o(this.currentUser));
    };
    const f = () => {
        const p = u;
        t.enqueueRetryable(async () => {
          await p.promise, await o(this.currentUser);
        });
      },
      m = (p) => {
        ut("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = p),
          this.o && (this.auth.addAuthTokenListener(this.o), f());
      };
    this.t.onInit((p) => m(p)),
      setTimeout(() => {
        if (!this.auth) {
          const p = this.t.getImmediate({ optional: !0 });
          p
            ? m(p)
            : (ut("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              u.resolve(),
              (u = new Mr()));
        }
      }, 0),
      f();
  }
  getToken() {
    const t = this.i,
      i = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(i)
            .then((r) =>
              this.i !== t
                ? (ut(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                ? (ce(typeof r.accessToken == "string"),
                  new pE(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return ce(t === null || typeof t == "string"), new tn(t);
  }
}
class ER {
  constructor(t, i, r) {
    (this.l = t),
      (this.h = i),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = tn.FIRST_PARTY),
      (this.T = new Map());
  }
  I() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.T.set("X-Goog-AuthUser", this.l);
    const t = this.I();
    return (
      t && this.T.set("Authorization", t),
      this.h && this.T.set("X-Goog-Iam-Authorization-Token", this.h),
      this.T
    );
  }
}
class bR {
  constructor(t, i, r) {
    (this.l = t), (this.h = i), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new ER(this.l, this.h, this.P));
  }
  start(t, i) {
    t.enqueueRetryable(() => i(tn.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class V0 {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class AR {
  constructor(t, i) {
    (this.A = i),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null),
      (this.V = null),
      iR(t) && t.settings.appCheckToken && (this.V = t.settings.appCheckToken);
  }
  start(t, i) {
    ce(this.o === void 0);
    const r = (u) => {
      u.error != null &&
        ut(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`
        );
      const f = u.token !== this.R;
      return (
        (this.R = u.token),
        ut(
          "FirebaseAppCheckTokenProvider",
          `Received ${f ? "new" : "existing"} token.`
        ),
        f ? i(u.token) : Promise.resolve()
      );
    };
    this.o = (u) => {
      t.enqueueRetryable(() => r(u));
    };
    const o = (u) => {
      ut("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = u),
        this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((u) => o(u)),
      setTimeout(() => {
        if (!this.appCheck) {
          const u = this.A.getImmediate({ optional: !0 });
          u
            ? o(u)
            : ut("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    if (this.V) return Promise.resolve(new V0(this.V));
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((i) =>
              i
                ? (ce(typeof i.token == "string"),
                  (this.R = i.token),
                  new V0(i.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function SR(n) {
  const t = typeof self < "u" && (self.crypto || self.msCrypto),
    i = new Uint8Array(n);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(i);
  else for (let r = 0; r < n; r++) i[r] = Math.floor(256 * Math.random());
  return i;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gE() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yE {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      i = 62 * Math.floor(4.129032258064516);
    let r = "";
    for (; r.length < 20; ) {
      const o = SR(40);
      for (let u = 0; u < o.length; ++u)
        r.length < 20 && o[u] < i && (r += t.charAt(o[u] % 62));
    }
    return r;
  }
}
function Ot(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function rm(n, t) {
  let i = 0;
  for (; i < n.length && i < t.length; ) {
    const r = n.codePointAt(i),
      o = t.codePointAt(i);
    if (r !== o) {
      if (r < 128 && o < 128) return Ot(r, o);
      {
        const u = gE(),
          f = wR(u.encode(M0(n, i)), u.encode(M0(t, i)));
        return f !== 0 ? f : Ot(r, o);
      }
    }
    i += r > 65535 ? 2 : 1;
  }
  return Ot(n.length, t.length);
}
function M0(n, t) {
  return n.codePointAt(t) > 65535
    ? n.substring(t, t + 2)
    : n.substring(t, t + 1);
}
function wR(n, t) {
  for (let i = 0; i < n.length && i < t.length; ++i)
    if (n[i] !== t[i]) return Ot(n[i], t[i]);
  return Ot(n.length, t.length);
}
function Ha(n, t, i) {
  return n.length === t.length && n.every((r, o) => i(r, t[o]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O0 = -62135596800,
  I0 = 1e6;
class pn {
  static now() {
    return pn.fromMillis(Date.now());
  }
  static fromDate(t) {
    return pn.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const i = Math.floor(t / 1e3),
      r = Math.floor((t - 1e3 * i) * I0);
    return new pn(i, r);
  }
  constructor(t, i) {
    if (((this.seconds = t), (this.nanoseconds = i), i < 0))
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + i
      );
    if (i >= 1e9)
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + i
      );
    if (t < O0)
      throw new Tt(ot.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new Tt(ot.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / I0;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? Ot(this.nanoseconds, t.nanoseconds)
      : Ot(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const t = this.seconds - O0;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class St {
  static fromTimestamp(t) {
    return new St(t);
  }
  static min() {
    return new St(new pn(0, 0));
  }
  static max() {
    return new St(new pn(253402300799, 999999999));
  }
  constructor(t) {
    this.timestamp = t;
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const N0 = "__name__";
class di {
  constructor(t, i, r) {
    i === void 0 ? (i = 0) : i > t.length && xt(),
      r === void 0 ? (r = t.length - i) : r > t.length - i && xt(),
      (this.segments = t),
      (this.offset = i),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return di.comparator(this, t) === 0;
  }
  child(t) {
    const i = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof di
        ? t.forEach((r) => {
            i.push(r);
          })
        : i.push(t),
      this.construct(i)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let i = 0; i < this.length; i++)
      if (this.get(i) !== t.get(i)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let i = 0; i < this.length; i++)
      if (this.get(i) !== t.get(i)) return !1;
    return !0;
  }
  forEach(t) {
    for (let i = this.offset, r = this.limit(); i < r; i++) t(this.segments[i]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, i) {
    const r = Math.min(t.length, i.length);
    for (let o = 0; o < r; o++) {
      const u = di.compareSegments(t.get(o), i.get(o));
      if (u !== 0) return u;
    }
    return Ot(t.length, i.length);
  }
  static compareSegments(t, i) {
    const r = di.isNumericId(t),
      o = di.isNumericId(i);
    return r && !o
      ? -1
      : !r && o
      ? 1
      : r && o
      ? di.extractNumericId(t).compare(di.extractNumericId(i))
      : rm(t, i);
  }
  static isNumericId(t) {
    return t.startsWith("__id") && t.endsWith("__");
  }
  static extractNumericId(t) {
    return Os.fromString(t.substring(4, t.length - 2));
  }
}
class pe extends di {
  construct(t, i, r) {
    return new pe(t, i, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...t) {
    const i = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      i.push(...r.split("/").filter((o) => o.length > 0));
    }
    return new pe(i);
  }
  static emptyPath() {
    return new pe([]);
  }
}
const RR = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class un extends di {
  construct(t, i, r) {
    return new un(t, i, r);
  }
  static isValidIdentifier(t) {
    return RR.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          un.isValidIdentifier(t) || (t = "`" + t + "`"),
          t
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === N0;
  }
  static keyField() {
    return new un([N0]);
  }
  static fromServerFormat(t) {
    const i = [];
    let r = "",
      o = 0;
    const u = () => {
      if (r.length === 0)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      i.push(r), (r = "");
    };
    let f = !1;
    for (; o < t.length; ) {
      const m = t[o];
      if (m === "\\") {
        if (o + 1 === t.length)
          throw new Tt(
            ot.INVALID_ARGUMENT,
            "Path has trailing escape character: " + t
          );
        const p = t[o + 1];
        if (p !== "\\" && p !== "." && p !== "`")
          throw new Tt(
            ot.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + t
          );
        (r += p), (o += 2);
      } else
        m === "`"
          ? ((f = !f), o++)
          : m !== "." || f
          ? ((r += m), o++)
          : (u(), o++);
    }
    if ((u(), f))
      throw new Tt(ot.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new un(i);
  }
  static emptyPath() {
    return new un([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Et {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new Et(pe.fromString(t));
  }
  static fromName(t) {
    return new Et(pe.fromString(t).popFirst(5));
  }
  static empty() {
    return new Et(pe.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && pe.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, i) {
    return pe.comparator(t.path, i.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new Et(new pe(t.slice()));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Il = -1;
function xR(n, t) {
  const i = n.toTimestamp().seconds,
    r = n.toTimestamp().nanoseconds + 1,
    o = St.fromTimestamp(r === 1e9 ? new pn(i + 1, 0) : new pn(i, r));
  return new Is(o, Et.empty(), t);
}
function CR(n) {
  return new Is(n.readTime, n.key, Il);
}
class Is {
  constructor(t, i, r) {
    (this.readTime = t), (this.documentKey = i), (this.largestBatchId = r);
  }
  static min() {
    return new Is(St.min(), Et.empty(), Il);
  }
  static max() {
    return new Is(St.max(), Et.empty(), Il);
  }
}
function DR(n, t) {
  let i = n.readTime.compareTo(t.readTime);
  return i !== 0
    ? i
    : ((i = Et.comparator(n.documentKey, t.documentKey)),
      i !== 0 ? i : Ot(n.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VR =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class MR {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function lh(n) {
  if (n.code !== ot.FAILED_PRECONDITION || n.message !== VR) throw n;
  ut("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (i) => {
          (this.isDone = !0),
            (this.result = i),
            this.nextCallback && this.nextCallback(i);
        },
        (i) => {
          (this.isDone = !0),
            (this.error = i),
            this.catchCallback && this.catchCallback(i);
        }
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, i) {
    return (
      this.callbackAttached && xt(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(i, this.error)
          : this.wrapSuccess(t, this.result)
        : new J((r, o) => {
            (this.nextCallback = (u) => {
              this.wrapSuccess(t, u).next(r, o);
            }),
              (this.catchCallback = (u) => {
                this.wrapFailure(i, u).next(r, o);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, i) => {
      this.next(t, i);
    });
  }
  wrapUserFunction(t) {
    try {
      const i = t();
      return i instanceof J ? i : J.resolve(i);
    } catch (i) {
      return J.reject(i);
    }
  }
  wrapSuccess(t, i) {
    return t ? this.wrapUserFunction(() => t(i)) : J.resolve(i);
  }
  wrapFailure(t, i) {
    return t ? this.wrapUserFunction(() => t(i)) : J.reject(i);
  }
  static resolve(t) {
    return new J((i, r) => {
      i(t);
    });
  }
  static reject(t) {
    return new J((i, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new J((i, r) => {
      let o = 0,
        u = 0,
        f = !1;
      t.forEach((m) => {
        ++o,
          m.next(
            () => {
              ++u, f && u === o && i();
            },
            (p) => r(p)
          );
      }),
        (f = !0),
        u === o && i();
    });
  }
  static or(t) {
    let i = J.resolve(!1);
    for (const r of t) i = i.next((o) => (o ? J.resolve(o) : r()));
    return i;
  }
  static forEach(t, i) {
    const r = [];
    return (
      t.forEach((o, u) => {
        r.push(i.call(this, o, u));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, i) {
    return new J((r, o) => {
      const u = t.length,
        f = new Array(u);
      let m = 0;
      for (let p = 0; p < u; p++) {
        const g = p;
        i(t[g]).next(
          (v) => {
            (f[g] = v), ++m, m === u && r(f);
          },
          (v) => o(v)
        );
      }
    });
  }
  static doWhile(t, i) {
    return new J((r, o) => {
      const u = () => {
        t() === !0
          ? i().next(() => {
              u();
            }, o)
          : r();
      };
      u();
    });
  }
}
function OR(n) {
  const t = n.match(/Android ([\d.]+)/i),
    i = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(i);
}
function Wa(n) {
  return n.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uh {
  constructor(t, i) {
    (this.previousValue = t),
      i &&
        ((i.sequenceNumberHandler = (r) => this.oe(r)),
        (this._e = (r) => i.writeSequenceNumber(r)));
  }
  oe(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)), this.previousValue
    );
  }
  next() {
    const t = ++this.previousValue;
    return this._e && this._e(t), t;
  }
}
uh.ae = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IR = -1;
function ch(n) {
  return n == null;
}
function am(n) {
  return n === 0 && 1 / n == -1 / 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vE = "";
function NR(n) {
  let t = "";
  for (let i = 0; i < n.length; i++)
    t.length > 0 && (t = P0(t)), (t = PR(n.get(i), t));
  return P0(t);
}
function PR(n, t) {
  let i = t;
  const r = n.length;
  for (let o = 0; o < r; o++) {
    const u = n.charAt(o);
    switch (u) {
      case "\0":
        i += "";
        break;
      case vE:
        i += "";
        break;
      default:
        i += u;
    }
  }
  return i;
}
function P0(n) {
  return n + vE + "";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L0(n) {
  let t = 0;
  for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && t++;
  return t;
}
function Ql(n, t) {
  for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && t(i, n[i]);
}
function LR(n) {
  for (const t in n) if (Object.prototype.hasOwnProperty.call(n, t)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ee {
  constructor(t, i) {
    (this.comparator = t), (this.root = i || Qe.EMPTY);
  }
  insert(t, i) {
    return new Ee(
      this.comparator,
      this.root
        .insert(t, i, this.comparator)
        .copy(null, null, Qe.BLACK, null, null)
    );
  }
  remove(t) {
    return new Ee(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, Qe.BLACK, null, null)
    );
  }
  get(t) {
    let i = this.root;
    for (; !i.isEmpty(); ) {
      const r = this.comparator(t, i.key);
      if (r === 0) return i.value;
      r < 0 ? (i = i.left) : r > 0 && (i = i.right);
    }
    return null;
  }
  indexOf(t) {
    let i = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const o = this.comparator(t, r.key);
      if (o === 0) return i + r.left.size;
      o < 0 ? (r = r.left) : ((i += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((i, r) => (t(i, r), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((i, r) => (t.push(`${i}:${r}`), !1)),
      `{${t.join(", ")}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new xc(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new xc(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new xc(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new xc(this.root, t, this.comparator, !0);
  }
}
class xc {
  constructor(t, i, r, o) {
    (this.isReverse = o), (this.nodeStack = []);
    let u = 1;
    for (; !t.isEmpty(); )
      if (((u = i ? r(t.key, i) : 1), i && o && (u *= -1), u < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (u === 0) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const i = { key: t.key, value: t.value };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
    return i;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return { key: t.key, value: t.value };
  }
}
class Qe {
  constructor(t, i, r, o, u) {
    (this.key = t),
      (this.value = i),
      (this.color = r ?? Qe.RED),
      (this.left = o ?? Qe.EMPTY),
      (this.right = u ?? Qe.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(t, i, r, o, u) {
    return new Qe(
      t ?? this.key,
      i ?? this.value,
      r ?? this.color,
      o ?? this.left,
      u ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, i, r) {
    let o = this;
    const u = r(t, o.key);
    return (
      (o =
        u < 0
          ? o.copy(null, null, null, o.left.insert(t, i, r), null)
          : u === 0
          ? o.copy(null, i, null, null, null)
          : o.copy(null, null, null, null, o.right.insert(t, i, r))),
      o.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return Qe.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, i) {
    let r,
      o = this;
    if (i(t, o.key) < 0)
      o.left.isEmpty() ||
        o.left.isRed() ||
        o.left.left.isRed() ||
        (o = o.moveRedLeft()),
        (o = o.copy(null, null, null, o.left.remove(t, i), null));
    else {
      if (
        (o.left.isRed() && (o = o.rotateRight()),
        o.right.isEmpty() ||
          o.right.isRed() ||
          o.right.left.isRed() ||
          (o = o.moveRedRight()),
        i(t, o.key) === 0)
      ) {
        if (o.right.isEmpty()) return Qe.EMPTY;
        (r = o.right.min()),
          (o = o.copy(r.key, r.value, null, null, o.right.removeMin()));
      }
      o = o.copy(null, null, null, null, o.right.remove(t, i));
    }
    return o.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, Qe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, Qe.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      i = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, i);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw xt();
    const t = this.left.check();
    if (t !== this.right.check()) throw xt();
    return t + (this.isRed() ? 0 : 1);
  }
}
(Qe.EMPTY = null), (Qe.RED = !0), (Qe.BLACK = !1);
Qe.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw xt();
  }
  get value() {
    throw xt();
  }
  get color() {
    throw xt();
  }
  get left() {
    throw xt();
  }
  get right() {
    throw xt();
  }
  copy(t, i, r, o, u) {
    return this;
  }
  insert(t, i, r) {
    return new Qe(t, i);
  }
  remove(t, i) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ne {
  constructor(t) {
    (this.comparator = t), (this.data = new Ee(this.comparator));
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((i, r) => (t(i), !1));
  }
  forEachInRange(t, i) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const o = r.getNext();
      if (this.comparator(o.key, t[1]) >= 0) return;
      i(o.key);
    }
  }
  forEachWhile(t, i) {
    let r;
    for (
      r = i !== void 0 ? this.data.getIteratorFrom(i) : this.data.getIterator();
      r.hasNext();

    )
      if (!t(r.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const i = this.data.getIteratorFrom(t);
    return i.hasNext() ? i.getNext().key : null;
  }
  getIterator() {
    return new k0(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new k0(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let i = this;
    return (
      i.size < t.size && ((i = t), (t = this)),
      t.forEach((r) => {
        i = i.add(r);
      }),
      i
    );
  }
  isEqual(t) {
    if (!(t instanceof Ne) || this.size !== t.size) return !1;
    const i = this.data.getIterator(),
      r = t.data.getIterator();
    for (; i.hasNext(); ) {
      const o = i.getNext().key,
        u = r.getNext().key;
      if (this.comparator(o, u) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((i) => {
        t.push(i);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return this.forEach((i) => t.push(i)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const i = new Ne(this.comparator);
    return (i.data = t), i;
  }
}
class k0 {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cs {
  constructor(t) {
    (this.fields = t), t.sort(un.comparator);
  }
  static empty() {
    return new Cs([]);
  }
  unionWith(t) {
    let i = new Ne(un.comparator);
    for (const r of this.fields) i = i.add(r);
    for (const r of t) i = i.add(r);
    return new Cs(i.toArray());
  }
  covers(t) {
    for (const i of this.fields) if (i.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return Ha(this.fields, t.fields, (i, r) => i.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _E extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ye {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const i = (function (o) {
      try {
        return atob(o);
      } catch (u) {
        throw typeof DOMException < "u" && u instanceof DOMException
          ? new _E("Invalid base64 string: " + u)
          : u;
      }
    })(t);
    return new Ye(i);
  }
  static fromUint8Array(t) {
    const i = (function (o) {
      let u = "";
      for (let f = 0; f < o.length; ++f) u += String.fromCharCode(o[f]);
      return u;
    })(t);
    return new Ye(i);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (i) {
      return btoa(i);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (i) {
      const r = new Uint8Array(i.length);
      for (let o = 0; o < i.length; o++) r[o] = i.charCodeAt(o);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return Ot(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
Ye.EMPTY_BYTE_STRING = new Ye("");
const kR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Ns(n) {
  if ((ce(!!n), typeof n == "string")) {
    let t = 0;
    const i = kR.exec(n);
    if ((ce(!!i), i[1])) {
      let o = i[1];
      (o = (o + "000000000").substr(0, 9)), (t = Number(o));
    }
    const r = new Date(n);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: Te(n.seconds), nanos: Te(n.nanos) };
}
function Te(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function Ps(n) {
  return typeof n == "string" ? Ye.fromBase64String(n) : Ye.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TE = "server_timestamp",
  EE = "__type__",
  bE = "__previous_value__",
  AE = "__local_write_time__";
function Xm(n) {
  var t, i;
  return (
    ((i = (((t = n == null ? void 0 : n.mapValue) === null || t === void 0
      ? void 0
      : t.fields) || {})[EE]) === null || i === void 0
      ? void 0
      : i.stringValue) === TE
  );
}
function hh(n) {
  const t = n.mapValue.fields[bE];
  return Xm(t) ? hh(t) : t;
}
function Nl(n) {
  const t = Ns(n.mapValue.fields[AE].timestampValue);
  return new pn(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UR {
  constructor(t, i, r, o, u, f, m, p, g) {
    (this.databaseId = t),
      (this.appId = i),
      (this.persistenceKey = r),
      (this.host = o),
      (this.ssl = u),
      (this.forceLongPolling = f),
      (this.autoDetectLongPolling = m),
      (this.longPollingOptions = p),
      (this.useFetchStreams = g);
  }
}
const Qc = "(default)";
class Pl {
  constructor(t, i) {
    (this.projectId = t), (this.database = i || Qc);
  }
  static empty() {
    return new Pl("", "");
  }
  get isDefaultDatabase() {
    return this.database === Qc;
  }
  isEqual(t) {
    return (
      t instanceof Pl &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BR = "__type__",
  zR = "__max__",
  Cc = { mapValue: {} },
  jR = "__vector__",
  om = "value";
function Ls(n) {
  return "nullValue" in n
    ? 0
    : "booleanValue" in n
    ? 1
    : "integerValue" in n || "doubleValue" in n
    ? 2
    : "timestampValue" in n
    ? 3
    : "stringValue" in n
    ? 5
    : "bytesValue" in n
    ? 6
    : "referenceValue" in n
    ? 7
    : "geoPointValue" in n
    ? 8
    : "arrayValue" in n
    ? 9
    : "mapValue" in n
    ? Xm(n)
      ? 4
      : HR(n)
      ? 9007199254740991
      : qR(n)
      ? 10
      : 11
    : xt();
}
function Ti(n, t) {
  if (n === t) return !0;
  const i = Ls(n);
  if (i !== Ls(t)) return !1;
  switch (i) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === t.booleanValue;
    case 4:
      return Nl(n).isEqual(Nl(t));
    case 3:
      return (function (o, u) {
        if (
          typeof o.timestampValue == "string" &&
          typeof u.timestampValue == "string" &&
          o.timestampValue.length === u.timestampValue.length
        )
          return o.timestampValue === u.timestampValue;
        const f = Ns(o.timestampValue),
          m = Ns(u.timestampValue);
        return f.seconds === m.seconds && f.nanos === m.nanos;
      })(n, t);
    case 5:
      return n.stringValue === t.stringValue;
    case 6:
      return (function (o, u) {
        return Ps(o.bytesValue).isEqual(Ps(u.bytesValue));
      })(n, t);
    case 7:
      return n.referenceValue === t.referenceValue;
    case 8:
      return (function (o, u) {
        return (
          Te(o.geoPointValue.latitude) === Te(u.geoPointValue.latitude) &&
          Te(o.geoPointValue.longitude) === Te(u.geoPointValue.longitude)
        );
      })(n, t);
    case 2:
      return (function (o, u) {
        if ("integerValue" in o && "integerValue" in u)
          return Te(o.integerValue) === Te(u.integerValue);
        if ("doubleValue" in o && "doubleValue" in u) {
          const f = Te(o.doubleValue),
            m = Te(u.doubleValue);
          return f === m ? am(f) === am(m) : isNaN(f) && isNaN(m);
        }
        return !1;
      })(n, t);
    case 9:
      return Ha(n.arrayValue.values || [], t.arrayValue.values || [], Ti);
    case 10:
    case 11:
      return (function (o, u) {
        const f = o.mapValue.fields || {},
          m = u.mapValue.fields || {};
        if (L0(f) !== L0(m)) return !1;
        for (const p in f)
          if (f.hasOwnProperty(p) && (m[p] === void 0 || !Ti(f[p], m[p])))
            return !1;
        return !0;
      })(n, t);
    default:
      return xt();
  }
}
function Ll(n, t) {
  return (n.values || []).find((i) => Ti(i, t)) !== void 0;
}
function Ga(n, t) {
  if (n === t) return 0;
  const i = Ls(n),
    r = Ls(t);
  if (i !== r) return Ot(i, r);
  switch (i) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Ot(n.booleanValue, t.booleanValue);
    case 2:
      return (function (u, f) {
        const m = Te(u.integerValue || u.doubleValue),
          p = Te(f.integerValue || f.doubleValue);
        return m < p
          ? -1
          : m > p
          ? 1
          : m === p
          ? 0
          : isNaN(m)
          ? isNaN(p)
            ? 0
            : -1
          : 1;
      })(n, t);
    case 3:
      return U0(n.timestampValue, t.timestampValue);
    case 4:
      return U0(Nl(n), Nl(t));
    case 5:
      return rm(n.stringValue, t.stringValue);
    case 6:
      return (function (u, f) {
        const m = Ps(u),
          p = Ps(f);
        return m.compareTo(p);
      })(n.bytesValue, t.bytesValue);
    case 7:
      return (function (u, f) {
        const m = u.split("/"),
          p = f.split("/");
        for (let g = 0; g < m.length && g < p.length; g++) {
          const v = Ot(m[g], p[g]);
          if (v !== 0) return v;
        }
        return Ot(m.length, p.length);
      })(n.referenceValue, t.referenceValue);
    case 8:
      return (function (u, f) {
        const m = Ot(Te(u.latitude), Te(f.latitude));
        return m !== 0 ? m : Ot(Te(u.longitude), Te(f.longitude));
      })(n.geoPointValue, t.geoPointValue);
    case 9:
      return B0(n.arrayValue, t.arrayValue);
    case 10:
      return (function (u, f) {
        var m, p, g, v;
        const E = u.fields || {},
          w = f.fields || {},
          D = (m = E[om]) === null || m === void 0 ? void 0 : m.arrayValue,
          B = (p = w[om]) === null || p === void 0 ? void 0 : p.arrayValue,
          F = Ot(
            ((g = D == null ? void 0 : D.values) === null || g === void 0
              ? void 0
              : g.length) || 0,
            ((v = B == null ? void 0 : B.values) === null || v === void 0
              ? void 0
              : v.length) || 0
          );
        return F !== 0 ? F : B0(D, B);
      })(n.mapValue, t.mapValue);
    case 11:
      return (function (u, f) {
        if (u === Cc.mapValue && f === Cc.mapValue) return 0;
        if (u === Cc.mapValue) return 1;
        if (f === Cc.mapValue) return -1;
        const m = u.fields || {},
          p = Object.keys(m),
          g = f.fields || {},
          v = Object.keys(g);
        p.sort(), v.sort();
        for (let E = 0; E < p.length && E < v.length; ++E) {
          const w = rm(p[E], v[E]);
          if (w !== 0) return w;
          const D = Ga(m[p[E]], g[v[E]]);
          if (D !== 0) return D;
        }
        return Ot(p.length, v.length);
      })(n.mapValue, t.mapValue);
    default:
      throw xt();
  }
}
function U0(n, t) {
  if (typeof n == "string" && typeof t == "string" && n.length === t.length)
    return Ot(n, t);
  const i = Ns(n),
    r = Ns(t),
    o = Ot(i.seconds, r.seconds);
  return o !== 0 ? o : Ot(i.nanos, r.nanos);
}
function B0(n, t) {
  const i = n.values || [],
    r = t.values || [];
  for (let o = 0; o < i.length && o < r.length; ++o) {
    const u = Ga(i[o], r[o]);
    if (u) return u;
  }
  return Ot(i.length, r.length);
}
function Fa(n) {
  return lm(n);
}
function lm(n) {
  return "nullValue" in n
    ? "null"
    : "booleanValue" in n
    ? "" + n.booleanValue
    : "integerValue" in n
    ? "" + n.integerValue
    : "doubleValue" in n
    ? "" + n.doubleValue
    : "timestampValue" in n
    ? (function (i) {
        const r = Ns(i);
        return `time(${r.seconds},${r.nanos})`;
      })(n.timestampValue)
    : "stringValue" in n
    ? n.stringValue
    : "bytesValue" in n
    ? (function (i) {
        return Ps(i).toBase64();
      })(n.bytesValue)
    : "referenceValue" in n
    ? (function (i) {
        return Et.fromName(i).toString();
      })(n.referenceValue)
    : "geoPointValue" in n
    ? (function (i) {
        return `geo(${i.latitude},${i.longitude})`;
      })(n.geoPointValue)
    : "arrayValue" in n
    ? (function (i) {
        let r = "[",
          o = !0;
        for (const u of i.values || []) o ? (o = !1) : (r += ","), (r += lm(u));
        return r + "]";
      })(n.arrayValue)
    : "mapValue" in n
    ? (function (i) {
        const r = Object.keys(i.fields || {}).sort();
        let o = "{",
          u = !0;
        for (const f of r)
          u ? (u = !1) : (o += ","), (o += `${f}:${lm(i.fields[f])}`);
        return o + "}";
      })(n.mapValue)
    : xt();
}
function kc(n) {
  switch (Ls(n)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t = hh(n);
      return t ? 16 + kc(t) : 16;
    case 5:
      return 2 * n.stringValue.length;
    case 6:
      return Ps(n.bytesValue).approximateByteSize();
    case 7:
      return n.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((o, u) => o + kc(u), 0);
      })(n.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let o = 0;
        return (
          Ql(r.fields, (u, f) => {
            o += u.length + kc(f);
          }),
          o
        );
      })(n.mapValue);
    default:
      throw xt();
  }
}
function um(n) {
  return !!n && "integerValue" in n;
}
function Zm(n) {
  return !!n && "arrayValue" in n;
}
function z0(n) {
  return !!n && "nullValue" in n;
}
function j0(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function Nd(n) {
  return !!n && "mapValue" in n;
}
function qR(n) {
  var t, i;
  return (
    ((i = (((t = n == null ? void 0 : n.mapValue) === null || t === void 0
      ? void 0
      : t.fields) || {})[BR]) === null || i === void 0
      ? void 0
      : i.stringValue) === jR
  );
}
function Al(n) {
  if (n.geoPointValue)
    return { geoPointValue: Object.assign({}, n.geoPointValue) };
  if (n.timestampValue && typeof n.timestampValue == "object")
    return { timestampValue: Object.assign({}, n.timestampValue) };
  if (n.mapValue) {
    const t = { mapValue: { fields: {} } };
    return Ql(n.mapValue.fields, (i, r) => (t.mapValue.fields[i] = Al(r))), t;
  }
  if (n.arrayValue) {
    const t = { arrayValue: { values: [] } };
    for (let i = 0; i < (n.arrayValue.values || []).length; ++i)
      t.arrayValue.values[i] = Al(n.arrayValue.values[i]);
    return t;
  }
  return Object.assign({}, n);
}
function HR(n) {
  return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === zR;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mi {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new mi({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let i = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((i = (i.mapValue.fields || {})[t.get(r)]), !Nd(i))) return null;
      return (i = (i.mapValue.fields || {})[t.lastSegment()]), i || null;
    }
  }
  set(t, i) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Al(i);
  }
  setAll(t) {
    let i = un.emptyPath(),
      r = {},
      o = [];
    t.forEach((f, m) => {
      if (!i.isImmediateParentOf(m)) {
        const p = this.getFieldsMap(i);
        this.applyChanges(p, r, o), (r = {}), (o = []), (i = m.popLast());
      }
      f ? (r[m.lastSegment()] = Al(f)) : o.push(m.lastSegment());
    });
    const u = this.getFieldsMap(i);
    this.applyChanges(u, r, o);
  }
  delete(t) {
    const i = this.field(t.popLast());
    Nd(i) && i.mapValue.fields && delete i.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return Ti(this.value, t.value);
  }
  getFieldsMap(t) {
    let i = this.value;
    i.mapValue.fields || (i.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let o = i.mapValue.fields[t.get(r)];
      (Nd(o) && o.mapValue.fields) ||
        ((o = { mapValue: { fields: {} } }), (i.mapValue.fields[t.get(r)] = o)),
        (i = o);
    }
    return i.mapValue.fields;
  }
  applyChanges(t, i, r) {
    Ql(i, (o, u) => (t[o] = u));
    for (const o of r) delete t[o];
  }
  clone() {
    return new mi(Al(this.value));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en {
  constructor(t, i, r, o, u, f, m) {
    (this.key = t),
      (this.documentType = i),
      (this.version = r),
      (this.readTime = o),
      (this.createTime = u),
      (this.data = f),
      (this.documentState = m);
  }
  static newInvalidDocument(t) {
    return new en(t, 0, St.min(), St.min(), St.min(), mi.empty(), 0);
  }
  static newFoundDocument(t, i, r, o) {
    return new en(t, 1, i, St.min(), r, o, 0);
  }
  static newNoDocument(t, i) {
    return new en(t, 2, i, St.min(), St.min(), mi.empty(), 0);
  }
  static newUnknownDocument(t, i) {
    return new en(t, 3, i, St.min(), St.min(), mi.empty(), 2);
  }
  convertToFoundDocument(t, i) {
    return (
      !this.createTime.isEqual(St.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = i),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = mi.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = mi.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = St.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof en &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new en(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yc {
  constructor(t, i) {
    (this.position = t), (this.inclusive = i);
  }
}
function q0(n, t, i) {
  let r = 0;
  for (let o = 0; o < n.position.length; o++) {
    const u = t[o],
      f = n.position[o];
    if (
      (u.field.isKeyField()
        ? (r = Et.comparator(Et.fromName(f.referenceValue), i.key))
        : (r = Ga(f, i.data.field(u.field))),
      u.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function H0(n, t) {
  if (n === null) return t === null;
  if (
    t === null ||
    n.inclusive !== t.inclusive ||
    n.position.length !== t.position.length
  )
    return !1;
  for (let i = 0; i < n.position.length; i++)
    if (!Ti(n.position[i], t.position[i])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xc {
  constructor(t, i = "asc") {
    (this.field = t), (this.dir = i);
  }
}
function GR(n, t) {
  return n.dir === t.dir && n.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SE {}
class Ie extends SE {
  constructor(t, i, r) {
    super(), (this.field = t), (this.op = i), (this.value = r);
  }
  static create(t, i, r) {
    return t.isKeyField()
      ? i === "in" || i === "not-in"
        ? this.createKeyFieldInFilter(t, i, r)
        : new KR(t, i, r)
      : i === "array-contains"
      ? new XR(t, r)
      : i === "in"
      ? new ZR(t, r)
      : i === "not-in"
      ? new $R(t, r)
      : i === "array-contains-any"
      ? new JR(t, r)
      : new Ie(t, i, r);
  }
  static createKeyFieldInFilter(t, i, r) {
    return i === "in" ? new QR(t, r) : new YR(t, r);
  }
  matches(t) {
    const i = t.data.field(this.field);
    return this.op === "!="
      ? i !== null && this.matchesComparison(Ga(i, this.value))
      : i !== null &&
          Ls(this.value) === Ls(i) &&
          this.matchesComparison(Ga(i, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return xt();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Ei extends SE {
  constructor(t, i) {
    super(), (this.filters = t), (this.op = i), (this.ce = null);
  }
  static create(t, i) {
    return new Ei(t, i);
  }
  matches(t) {
    return wE(this)
      ? this.filters.find((i) => !i.matches(t)) === void 0
      : this.filters.find((i) => i.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ce !== null ||
        (this.ce = this.filters.reduce(
          (t, i) => t.concat(i.getFlattenedFilters()),
          []
        )),
      this.ce
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function wE(n) {
  return n.op === "and";
}
function RE(n) {
  return FR(n) && wE(n);
}
function FR(n) {
  for (const t of n.filters) if (t instanceof Ei) return !1;
  return !0;
}
function cm(n) {
  if (n instanceof Ie)
    return n.field.canonicalString() + n.op.toString() + Fa(n.value);
  if (RE(n)) return n.filters.map((t) => cm(t)).join(",");
  {
    const t = n.filters.map((i) => cm(i)).join(",");
    return `${n.op}(${t})`;
  }
}
function xE(n, t) {
  return n instanceof Ie
    ? (function (r, o) {
        return (
          o instanceof Ie &&
          r.op === o.op &&
          r.field.isEqual(o.field) &&
          Ti(r.value, o.value)
        );
      })(n, t)
    : n instanceof Ei
    ? (function (r, o) {
        return o instanceof Ei &&
          r.op === o.op &&
          r.filters.length === o.filters.length
          ? r.filters.reduce((u, f, m) => u && xE(f, o.filters[m]), !0)
          : !1;
      })(n, t)
    : void xt();
}
function CE(n) {
  return n instanceof Ie
    ? (function (i) {
        return `${i.field.canonicalString()} ${i.op} ${Fa(i.value)}`;
      })(n)
    : n instanceof Ei
    ? (function (i) {
        return i.op.toString() + " {" + i.getFilters().map(CE).join(" ,") + "}";
      })(n)
    : "Filter";
}
class KR extends Ie {
  constructor(t, i, r) {
    super(t, i, r), (this.key = Et.fromName(r.referenceValue));
  }
  matches(t) {
    const i = Et.comparator(t.key, this.key);
    return this.matchesComparison(i);
  }
}
class QR extends Ie {
  constructor(t, i) {
    super(t, "in", i), (this.keys = DE("in", i));
  }
  matches(t) {
    return this.keys.some((i) => i.isEqual(t.key));
  }
}
class YR extends Ie {
  constructor(t, i) {
    super(t, "not-in", i), (this.keys = DE("not-in", i));
  }
  matches(t) {
    return !this.keys.some((i) => i.isEqual(t.key));
  }
}
function DE(n, t) {
  var i;
  return (
    ((i = t.arrayValue) === null || i === void 0 ? void 0 : i.values) || []
  ).map((r) => Et.fromName(r.referenceValue));
}
class XR extends Ie {
  constructor(t, i) {
    super(t, "array-contains", i);
  }
  matches(t) {
    const i = t.data.field(this.field);
    return Zm(i) && Ll(i.arrayValue, this.value);
  }
}
class ZR extends Ie {
  constructor(t, i) {
    super(t, "in", i);
  }
  matches(t) {
    const i = t.data.field(this.field);
    return i !== null && Ll(this.value.arrayValue, i);
  }
}
class $R extends Ie {
  constructor(t, i) {
    super(t, "not-in", i);
  }
  matches(t) {
    if (Ll(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const i = t.data.field(this.field);
    return i !== null && !Ll(this.value.arrayValue, i);
  }
}
class JR extends Ie {
  constructor(t, i) {
    super(t, "array-contains-any", i);
  }
  matches(t) {
    const i = t.data.field(this.field);
    return (
      !(!Zm(i) || !i.arrayValue.values) &&
      i.arrayValue.values.some((r) => Ll(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WR {
  constructor(t, i = null, r = [], o = [], u = null, f = null, m = null) {
    (this.path = t),
      (this.collectionGroup = i),
      (this.orderBy = r),
      (this.filters = o),
      (this.limit = u),
      (this.startAt = f),
      (this.endAt = m),
      (this.le = null);
  }
}
function G0(n, t = null, i = [], r = [], o = null, u = null, f = null) {
  return new WR(n, t, i, r, o, u, f);
}
function $m(n) {
  const t = jt(n);
  if (t.le === null) {
    let i = t.path.canonicalString();
    t.collectionGroup !== null && (i += "|cg:" + t.collectionGroup),
      (i += "|f:"),
      (i += t.filters.map((r) => cm(r)).join(",")),
      (i += "|ob:"),
      (i += t.orderBy
        .map((r) =>
          (function (u) {
            return u.field.canonicalString() + u.dir;
          })(r)
        )
        .join(",")),
      ch(t.limit) || ((i += "|l:"), (i += t.limit)),
      t.startAt &&
        ((i += "|lb:"),
        (i += t.startAt.inclusive ? "b:" : "a:"),
        (i += t.startAt.position.map((r) => Fa(r)).join(","))),
      t.endAt &&
        ((i += "|ub:"),
        (i += t.endAt.inclusive ? "a:" : "b:"),
        (i += t.endAt.position.map((r) => Fa(r)).join(","))),
      (t.le = i);
  }
  return t.le;
}
function Jm(n, t) {
  if (n.limit !== t.limit || n.orderBy.length !== t.orderBy.length) return !1;
  for (let i = 0; i < n.orderBy.length; i++)
    if (!GR(n.orderBy[i], t.orderBy[i])) return !1;
  if (n.filters.length !== t.filters.length) return !1;
  for (let i = 0; i < n.filters.length; i++)
    if (!xE(n.filters[i], t.filters[i])) return !1;
  return (
    n.collectionGroup === t.collectionGroup &&
    !!n.path.isEqual(t.path) &&
    !!H0(n.startAt, t.startAt) &&
    H0(n.endAt, t.endAt)
  );
}
function hm(n) {
  return (
    Et.isDocumentKey(n.path) &&
    n.collectionGroup === null &&
    n.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fh {
  constructor(
    t,
    i = null,
    r = [],
    o = [],
    u = null,
    f = "F",
    m = null,
    p = null
  ) {
    (this.path = t),
      (this.collectionGroup = i),
      (this.explicitOrderBy = r),
      (this.filters = o),
      (this.limit = u),
      (this.limitType = f),
      (this.startAt = m),
      (this.endAt = p),
      (this.he = null),
      (this.Pe = null),
      (this.Te = null),
      this.startAt,
      this.endAt;
  }
}
function tx(n, t, i, r, o, u, f, m) {
  return new fh(n, t, i, r, o, u, f, m);
}
function Wm(n) {
  return new fh(n);
}
function F0(n) {
  return (
    n.filters.length === 0 &&
    n.limit === null &&
    n.startAt == null &&
    n.endAt == null &&
    (n.explicitOrderBy.length === 0 ||
      (n.explicitOrderBy.length === 1 &&
        n.explicitOrderBy[0].field.isKeyField()))
  );
}
function ex(n) {
  return n.collectionGroup !== null;
}
function Sl(n) {
  const t = jt(n);
  if (t.he === null) {
    t.he = [];
    const i = new Set();
    for (const u of t.explicitOrderBy)
      t.he.push(u), i.add(u.field.canonicalString());
    const r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : "asc";
    (function (f) {
      let m = new Ne(un.comparator);
      return (
        f.filters.forEach((p) => {
          p.getFlattenedFilters().forEach((g) => {
            g.isInequality() && (m = m.add(g.field));
          });
        }),
        m
      );
    })(t).forEach((u) => {
      i.has(u.canonicalString()) || u.isKeyField() || t.he.push(new Xc(u, r));
    }),
      i.has(un.keyField().canonicalString()) ||
        t.he.push(new Xc(un.keyField(), r));
  }
  return t.he;
}
function pi(n) {
  const t = jt(n);
  return t.Pe || (t.Pe = nx(t, Sl(n))), t.Pe;
}
function nx(n, t) {
  if (n.limitType === "F")
    return G0(
      n.path,
      n.collectionGroup,
      t,
      n.filters,
      n.limit,
      n.startAt,
      n.endAt
    );
  {
    t = t.map((o) => {
      const u = o.dir === "desc" ? "asc" : "desc";
      return new Xc(o.field, u);
    });
    const i = n.endAt ? new Yc(n.endAt.position, n.endAt.inclusive) : null,
      r = n.startAt ? new Yc(n.startAt.position, n.startAt.inclusive) : null;
    return G0(n.path, n.collectionGroup, t, n.filters, n.limit, i, r);
  }
}
function fm(n, t, i) {
  return new fh(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    n.filters.slice(),
    t,
    i,
    n.startAt,
    n.endAt
  );
}
function dh(n, t) {
  return Jm(pi(n), pi(t)) && n.limitType === t.limitType;
}
function VE(n) {
  return `${$m(pi(n))}|lt:${n.limitType}`;
}
function Ma(n) {
  return `Query(target=${(function (i) {
    let r = i.path.canonicalString();
    return (
      i.collectionGroup !== null &&
        (r += " collectionGroup=" + i.collectionGroup),
      i.filters.length > 0 &&
        (r += `, filters: [${i.filters.map((o) => CE(o)).join(", ")}]`),
      ch(i.limit) || (r += ", limit: " + i.limit),
      i.orderBy.length > 0 &&
        (r += `, orderBy: [${i.orderBy
          .map((o) =>
            (function (f) {
              return `${f.field.canonicalString()} (${f.dir})`;
            })(o)
          )
          .join(", ")}]`),
      i.startAt &&
        ((r += ", startAt: "),
        (r += i.startAt.inclusive ? "b:" : "a:"),
        (r += i.startAt.position.map((o) => Fa(o)).join(","))),
      i.endAt &&
        ((r += ", endAt: "),
        (r += i.endAt.inclusive ? "a:" : "b:"),
        (r += i.endAt.position.map((o) => Fa(o)).join(","))),
      `Target(${r})`
    );
  })(pi(n))}; limitType=${n.limitType})`;
}
function mh(n, t) {
  return (
    t.isFoundDocument() &&
    (function (r, o) {
      const u = o.key.path;
      return r.collectionGroup !== null
        ? o.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(u)
        : Et.isDocumentKey(r.path)
        ? r.path.isEqual(u)
        : r.path.isImmediateParentOf(u);
    })(n, t) &&
    (function (r, o) {
      for (const u of Sl(r))
        if (!u.field.isKeyField() && o.data.field(u.field) === null) return !1;
      return !0;
    })(n, t) &&
    (function (r, o) {
      for (const u of r.filters) if (!u.matches(o)) return !1;
      return !0;
    })(n, t) &&
    (function (r, o) {
      return !(
        (r.startAt &&
          !(function (f, m, p) {
            const g = q0(f, m, p);
            return f.inclusive ? g <= 0 : g < 0;
          })(r.startAt, Sl(r), o)) ||
        (r.endAt &&
          !(function (f, m, p) {
            const g = q0(f, m, p);
            return f.inclusive ? g >= 0 : g > 0;
          })(r.endAt, Sl(r), o))
      );
    })(n, t)
  );
}
function ix(n) {
  return (
    n.collectionGroup ||
    (n.path.length % 2 == 1
      ? n.path.lastSegment()
      : n.path.get(n.path.length - 2))
  );
}
function ME(n) {
  return (t, i) => {
    let r = !1;
    for (const o of Sl(n)) {
      const u = sx(o, t, i);
      if (u !== 0) return u;
      r = r || o.field.isKeyField();
    }
    return 0;
  };
}
function sx(n, t, i) {
  const r = n.field.isKeyField()
    ? Et.comparator(t.key, i.key)
    : (function (u, f, m) {
        const p = f.data.field(u),
          g = m.data.field(u);
        return p !== null && g !== null ? Ga(p, g) : xt();
      })(n.field, t, i);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return xt();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pr {
  constructor(t, i) {
    (this.mapKeyFn = t),
      (this.equalsFn = i),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(t) {
    const i = this.mapKeyFn(t),
      r = this.inner[i];
    if (r !== void 0) {
      for (const [o, u] of r) if (this.equalsFn(o, t)) return u;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, i) {
    const r = this.mapKeyFn(t),
      o = this.inner[r];
    if (o === void 0) return (this.inner[r] = [[t, i]]), void this.innerSize++;
    for (let u = 0; u < o.length; u++)
      if (this.equalsFn(o[u][0], t)) return void (o[u] = [t, i]);
    o.push([t, i]), this.innerSize++;
  }
  delete(t) {
    const i = this.mapKeyFn(t),
      r = this.inner[i];
    if (r === void 0) return !1;
    for (let o = 0; o < r.length; o++)
      if (this.equalsFn(r[o][0], t))
        return (
          r.length === 1 ? delete this.inner[i] : r.splice(o, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    Ql(this.inner, (i, r) => {
      for (const [o, u] of r) t(o, u);
    });
  }
  isEmpty() {
    return LR(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rx = new Ee(Et.comparator);
function ks() {
  return rx;
}
const OE = new Ee(Et.comparator);
function _l(...n) {
  let t = OE;
  for (const i of n) t = t.insert(i.key, i);
  return t;
}
function ax(n) {
  let t = OE;
  return n.forEach((i, r) => (t = t.insert(i, r.overlayedDocument))), t;
}
function Cr() {
  return wl();
}
function IE() {
  return wl();
}
function wl() {
  return new Pr(
    (n) => n.toString(),
    (n, t) => n.isEqual(t)
  );
}
const ox = new Ne(Et.comparator);
function Ht(...n) {
  let t = ox;
  for (const i of n) t = t.add(i);
  return t;
}
const lx = new Ne(Ot);
function ux() {
  return lx;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cx(n, t) {
  if (n.useProto3Json) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: am(t) ? "-0" : t };
}
function hx(n) {
  return { integerValue: "" + n };
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ph {
  constructor() {
    this._ = void 0;
  }
}
function fx(n, t, i) {
  return n instanceof dm
    ? (function (o, u) {
        const f = {
          fields: {
            [EE]: { stringValue: TE },
            [AE]: {
              timestampValue: { seconds: o.seconds, nanos: o.nanoseconds },
            },
          },
        };
        return (
          u && Xm(u) && (u = hh(u)), u && (f.fields[bE] = u), { mapValue: f }
        );
      })(i, t)
    : n instanceof Zc
    ? NE(n, t)
    : n instanceof $c
    ? PE(n, t)
    : (function (o, u) {
        const f = mx(o, u),
          m = K0(f) + K0(o.Ie);
        return um(f) && um(o.Ie) ? hx(m) : cx(o.serializer, m);
      })(n, t);
}
function dx(n, t, i) {
  return n instanceof Zc ? NE(n, t) : n instanceof $c ? PE(n, t) : i;
}
function mx(n, t) {
  return n instanceof mm
    ? (function (r) {
        return (
          um(r) ||
          (function (u) {
            return !!u && "doubleValue" in u;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
class dm extends ph {}
class Zc extends ph {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function NE(n, t) {
  const i = LE(t);
  for (const r of n.elements) i.some((o) => Ti(o, r)) || i.push(r);
  return { arrayValue: { values: i } };
}
class $c extends ph {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function PE(n, t) {
  let i = LE(t);
  for (const r of n.elements) i = i.filter((o) => !Ti(o, r));
  return { arrayValue: { values: i } };
}
class mm extends ph {
  constructor(t, i) {
    super(), (this.serializer = t), (this.Ie = i);
  }
}
function K0(n) {
  return Te(n.integerValue || n.doubleValue);
}
function LE(n) {
  return Zm(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function px(n, t) {
  return (
    n.field.isEqual(t.field) &&
    (function (r, o) {
      return (r instanceof Zc && o instanceof Zc) ||
        (r instanceof $c && o instanceof $c)
        ? Ha(r.elements, o.elements, Ti)
        : r instanceof mm && o instanceof mm
        ? Ti(r.Ie, o.Ie)
        : r instanceof dm && o instanceof dm;
    })(n.transform, t.transform)
  );
}
class Or {
  constructor(t, i) {
    (this.updateTime = t), (this.exists = i);
  }
  static none() {
    return new Or();
  }
  static exists(t) {
    return new Or(void 0, t);
  }
  static updateTime(t) {
    return new Or(t);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
function Uc(n, t) {
  return n.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(n.updateTime)
    : n.exists === void 0 || n.exists === t.isFoundDocument();
}
class tp {}
function kE(n, t) {
  if (!n.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return n.isNoDocument()
      ? new yx(n.key, Or.none())
      : new ep(n.key, n.data, Or.none());
  {
    const i = n.data,
      r = mi.empty();
    let o = new Ne(un.comparator);
    for (let u of t.fields)
      if (!o.has(u)) {
        let f = i.field(u);
        f === null && u.length > 1 && ((u = u.popLast()), (f = i.field(u))),
          f === null ? r.delete(u) : r.set(u, f),
          (o = o.add(u));
      }
    return new gh(n.key, r, new Cs(o.toArray()), Or.none());
  }
}
function gx(n, t, i) {
  n instanceof ep
    ? (function (o, u, f) {
        const m = o.value.clone(),
          p = Y0(o.fieldTransforms, u, f.transformResults);
        m.setAll(p),
          u.convertToFoundDocument(f.version, m).setHasCommittedMutations();
      })(n, t, i)
    : n instanceof gh
    ? (function (o, u, f) {
        if (!Uc(o.precondition, u))
          return void u.convertToUnknownDocument(f.version);
        const m = Y0(o.fieldTransforms, u, f.transformResults),
          p = u.data;
        p.setAll(UE(o)),
          p.setAll(m),
          u.convertToFoundDocument(f.version, p).setHasCommittedMutations();
      })(n, t, i)
    : (function (o, u, f) {
        u.convertToNoDocument(f.version).setHasCommittedMutations();
      })(0, t, i);
}
function Rl(n, t, i, r) {
  return n instanceof ep
    ? (function (u, f, m, p) {
        if (!Uc(u.precondition, f)) return m;
        const g = u.value.clone(),
          v = X0(u.fieldTransforms, p, f);
        return (
          g.setAll(v),
          f.convertToFoundDocument(f.version, g).setHasLocalMutations(),
          null
        );
      })(n, t, i, r)
    : n instanceof gh
    ? (function (u, f, m, p) {
        if (!Uc(u.precondition, f)) return m;
        const g = X0(u.fieldTransforms, p, f),
          v = f.data;
        return (
          v.setAll(UE(u)),
          v.setAll(g),
          f.convertToFoundDocument(f.version, v).setHasLocalMutations(),
          m === null
            ? null
            : m
                .unionWith(u.fieldMask.fields)
                .unionWith(u.fieldTransforms.map((E) => E.field))
        );
      })(n, t, i, r)
    : (function (u, f, m) {
        return Uc(u.precondition, f)
          ? (f.convertToNoDocument(f.version).setHasLocalMutations(), null)
          : m;
      })(n, t, i);
}
function Q0(n, t) {
  return (
    n.type === t.type &&
    !!n.key.isEqual(t.key) &&
    !!n.precondition.isEqual(t.precondition) &&
    !!(function (r, o) {
      return (
        (r === void 0 && o === void 0) ||
        (!(!r || !o) && Ha(r, o, (u, f) => px(u, f)))
      );
    })(n.fieldTransforms, t.fieldTransforms) &&
    (n.type === 0
      ? n.value.isEqual(t.value)
      : n.type !== 1 ||
        (n.data.isEqual(t.data) && n.fieldMask.isEqual(t.fieldMask)))
  );
}
class ep extends tp {
  constructor(t, i, r, o = []) {
    super(),
      (this.key = t),
      (this.value = i),
      (this.precondition = r),
      (this.fieldTransforms = o),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class gh extends tp {
  constructor(t, i, r, o, u = []) {
    super(),
      (this.key = t),
      (this.data = i),
      (this.fieldMask = r),
      (this.precondition = o),
      (this.fieldTransforms = u),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function UE(n) {
  const t = new Map();
  return (
    n.fieldMask.fields.forEach((i) => {
      if (!i.isEmpty()) {
        const r = n.data.field(i);
        t.set(i, r);
      }
    }),
    t
  );
}
function Y0(n, t, i) {
  const r = new Map();
  ce(n.length === i.length);
  for (let o = 0; o < i.length; o++) {
    const u = n[o],
      f = u.transform,
      m = t.data.field(u.field);
    r.set(u.field, dx(f, m, i[o]));
  }
  return r;
}
function X0(n, t, i) {
  const r = new Map();
  for (const o of n) {
    const u = o.transform,
      f = i.data.field(o.field);
    r.set(o.field, fx(u, f, t));
  }
  return r;
}
class yx extends tp {
  constructor(t, i) {
    super(),
      (this.key = t),
      (this.precondition = i),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vx {
  constructor(t, i, r, o) {
    (this.batchId = t),
      (this.localWriteTime = i),
      (this.baseMutations = r),
      (this.mutations = o);
  }
  applyToRemoteDocument(t, i) {
    const r = i.mutationResults;
    for (let o = 0; o < this.mutations.length; o++) {
      const u = this.mutations[o];
      u.key.isEqual(t.key) && gx(u, t, r[o]);
    }
  }
  applyToLocalView(t, i) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (i = Rl(r, t, i, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (i = Rl(r, t, i, this.localWriteTime));
    return i;
  }
  applyToLocalDocumentSet(t, i) {
    const r = IE();
    return (
      this.mutations.forEach((o) => {
        const u = t.get(o.key),
          f = u.overlayedDocument;
        let m = this.applyToLocalView(f, u.mutatedFields);
        m = i.has(o.key) ? null : m;
        const p = kE(f, m);
        p !== null && r.set(o.key, p),
          f.isValidDocument() || f.convertToNoDocument(St.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((t, i) => t.add(i.key), Ht());
  }
  isEqual(t) {
    return (
      this.batchId === t.batchId &&
      Ha(this.mutations, t.mutations, (i, r) => Q0(i, r)) &&
      Ha(this.baseMutations, t.baseMutations, (i, r) => Q0(i, r))
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _x {
  constructor(t, i) {
    (this.largestBatchId = t), (this.mutation = i);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tx {
  constructor(t, i) {
    (this.count = t), (this.unchangedNames = i);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Re, Bt;
function BE(n) {
  if (n === void 0) return Zi("GRPC error has no .code"), ot.UNKNOWN;
  switch (n) {
    case Re.OK:
      return ot.OK;
    case Re.CANCELLED:
      return ot.CANCELLED;
    case Re.UNKNOWN:
      return ot.UNKNOWN;
    case Re.DEADLINE_EXCEEDED:
      return ot.DEADLINE_EXCEEDED;
    case Re.RESOURCE_EXHAUSTED:
      return ot.RESOURCE_EXHAUSTED;
    case Re.INTERNAL:
      return ot.INTERNAL;
    case Re.UNAVAILABLE:
      return ot.UNAVAILABLE;
    case Re.UNAUTHENTICATED:
      return ot.UNAUTHENTICATED;
    case Re.INVALID_ARGUMENT:
      return ot.INVALID_ARGUMENT;
    case Re.NOT_FOUND:
      return ot.NOT_FOUND;
    case Re.ALREADY_EXISTS:
      return ot.ALREADY_EXISTS;
    case Re.PERMISSION_DENIED:
      return ot.PERMISSION_DENIED;
    case Re.FAILED_PRECONDITION:
      return ot.FAILED_PRECONDITION;
    case Re.ABORTED:
      return ot.ABORTED;
    case Re.OUT_OF_RANGE:
      return ot.OUT_OF_RANGE;
    case Re.UNIMPLEMENTED:
      return ot.UNIMPLEMENTED;
    case Re.DATA_LOSS:
      return ot.DATA_LOSS;
    default:
      return xt();
  }
}
((Bt = Re || (Re = {}))[(Bt.OK = 0)] = "OK"),
  (Bt[(Bt.CANCELLED = 1)] = "CANCELLED"),
  (Bt[(Bt.UNKNOWN = 2)] = "UNKNOWN"),
  (Bt[(Bt.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (Bt[(Bt.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (Bt[(Bt.NOT_FOUND = 5)] = "NOT_FOUND"),
  (Bt[(Bt.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (Bt[(Bt.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (Bt[(Bt.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (Bt[(Bt.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (Bt[(Bt.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (Bt[(Bt.ABORTED = 10)] = "ABORTED"),
  (Bt[(Bt.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (Bt[(Bt.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (Bt[(Bt.INTERNAL = 13)] = "INTERNAL"),
  (Bt[(Bt.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (Bt[(Bt.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ex = new Os([4294967295, 4294967295], 0);
function Z0(n) {
  const t = gE().encode(n),
    i = new uE();
  return i.update(t), new Uint8Array(i.digest());
}
function $0(n) {
  const t = new DataView(n.buffer),
    i = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    o = t.getUint32(8, !0),
    u = t.getUint32(12, !0);
  return [new Os([i, r], 0), new Os([o, u], 0)];
}
class np {
  constructor(t, i, r) {
    if (
      ((this.bitmap = t),
      (this.padding = i),
      (this.hashCount = r),
      i < 0 || i >= 8)
    )
      throw new Tl(`Invalid padding: ${i}`);
    if (r < 0) throw new Tl(`Invalid hash count: ${r}`);
    if (t.length > 0 && this.hashCount === 0)
      throw new Tl(`Invalid hash count: ${r}`);
    if (t.length === 0 && i !== 0)
      throw new Tl(`Invalid padding when bitmap length is 0: ${i}`);
    (this.Ee = 8 * t.length - i), (this.de = Os.fromNumber(this.Ee));
  }
  Ae(t, i, r) {
    let o = t.add(i.multiply(Os.fromNumber(r)));
    return (
      o.compare(Ex) === 1 && (o = new Os([o.getBits(0), o.getBits(1)], 0)),
      o.modulo(this.de).toNumber()
    );
  }
  Re(t) {
    return !!(this.bitmap[Math.floor(t / 8)] & (1 << t % 8));
  }
  mightContain(t) {
    if (this.Ee === 0) return !1;
    const i = Z0(t),
      [r, o] = $0(i);
    for (let u = 0; u < this.hashCount; u++) {
      const f = this.Ae(r, o, u);
      if (!this.Re(f)) return !1;
    }
    return !0;
  }
  static create(t, i, r) {
    const o = t % 8 == 0 ? 0 : 8 - (t % 8),
      u = new Uint8Array(Math.ceil(t / 8)),
      f = new np(u, o, i);
    return r.forEach((m) => f.insert(m)), f;
  }
  insert(t) {
    if (this.Ee === 0) return;
    const i = Z0(t),
      [r, o] = $0(i);
    for (let u = 0; u < this.hashCount; u++) {
      const f = this.Ae(r, o, u);
      this.Ve(f);
    }
  }
  Ve(t) {
    const i = Math.floor(t / 8),
      r = t % 8;
    this.bitmap[i] |= 1 << r;
  }
}
class Tl extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yh {
  constructor(t, i, r, o, u) {
    (this.snapshotVersion = t),
      (this.targetChanges = i),
      (this.targetMismatches = r),
      (this.documentUpdates = o),
      (this.resolvedLimboDocuments = u);
  }
  static createSynthesizedRemoteEventForCurrentChange(t, i, r) {
    const o = new Map();
    return (
      o.set(t, Yl.createSynthesizedTargetChangeForCurrentChange(t, i, r)),
      new yh(St.min(), o, new Ee(Ot), ks(), Ht())
    );
  }
}
class Yl {
  constructor(t, i, r, o, u) {
    (this.resumeToken = t),
      (this.current = i),
      (this.addedDocuments = r),
      (this.modifiedDocuments = o),
      (this.removedDocuments = u);
  }
  static createSynthesizedTargetChangeForCurrentChange(t, i, r) {
    return new Yl(r, i, Ht(), Ht(), Ht());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bc {
  constructor(t, i, r, o) {
    (this.me = t), (this.removedTargetIds = i), (this.key = r), (this.fe = o);
  }
}
class zE {
  constructor(t, i) {
    (this.targetId = t), (this.ge = i);
  }
}
class jE {
  constructor(t, i, r = Ye.EMPTY_BYTE_STRING, o = null) {
    (this.state = t),
      (this.targetIds = i),
      (this.resumeToken = r),
      (this.cause = o);
  }
}
class J0 {
  constructor() {
    (this.pe = 0),
      (this.ye = W0()),
      (this.we = Ye.EMPTY_BYTE_STRING),
      (this.Se = !1),
      (this.be = !0);
  }
  get current() {
    return this.Se;
  }
  get resumeToken() {
    return this.we;
  }
  get De() {
    return this.pe !== 0;
  }
  get ve() {
    return this.be;
  }
  Ce(t) {
    t.approximateByteSize() > 0 && ((this.be = !0), (this.we = t));
  }
  Fe() {
    let t = Ht(),
      i = Ht(),
      r = Ht();
    return (
      this.ye.forEach((o, u) => {
        switch (u) {
          case 0:
            t = t.add(o);
            break;
          case 2:
            i = i.add(o);
            break;
          case 1:
            r = r.add(o);
            break;
          default:
            xt();
        }
      }),
      new Yl(this.we, this.Se, t, i, r)
    );
  }
  Me() {
    (this.be = !1), (this.ye = W0());
  }
  xe(t, i) {
    (this.be = !0), (this.ye = this.ye.insert(t, i));
  }
  Oe(t) {
    (this.be = !0), (this.ye = this.ye.remove(t));
  }
  Ne() {
    this.pe += 1;
  }
  Be() {
    (this.pe -= 1), ce(this.pe >= 0);
  }
  Le() {
    (this.be = !0), (this.Se = !0);
  }
}
class bx {
  constructor(t) {
    (this.ke = t),
      (this.qe = new Map()),
      (this.Qe = ks()),
      (this.$e = Dc()),
      (this.Ue = Dc()),
      (this.Ke = new Ee(Ot));
  }
  We(t) {
    for (const i of t.me)
      t.fe && t.fe.isFoundDocument()
        ? this.Ge(i, t.fe)
        : this.ze(i, t.key, t.fe);
    for (const i of t.removedTargetIds) this.ze(i, t.key, t.fe);
  }
  je(t) {
    this.forEachTarget(t, (i) => {
      const r = this.He(i);
      switch (t.state) {
        case 0:
          this.Je(i) && r.Ce(t.resumeToken);
          break;
        case 1:
          r.Be(), r.De || r.Me(), r.Ce(t.resumeToken);
          break;
        case 2:
          r.Be(), r.De || this.removeTarget(i);
          break;
        case 3:
          this.Je(i) && (r.Le(), r.Ce(t.resumeToken));
          break;
        case 4:
          this.Je(i) && (this.Ye(i), r.Ce(t.resumeToken));
          break;
        default:
          xt();
      }
    });
  }
  forEachTarget(t, i) {
    t.targetIds.length > 0
      ? t.targetIds.forEach(i)
      : this.qe.forEach((r, o) => {
          this.Je(o) && i(o);
        });
  }
  Ze(t) {
    const i = t.targetId,
      r = t.ge.count,
      o = this.Xe(i);
    if (o) {
      const u = o.target;
      if (hm(u))
        if (r === 0) {
          const f = new Et(u.path);
          this.ze(i, f, en.newNoDocument(f, St.min()));
        } else ce(r === 1);
      else {
        const f = this.et(i);
        if (f !== r) {
          const m = this.tt(t),
            p = m ? this.nt(m, t, f) : 1;
          if (p !== 0) {
            this.Ye(i);
            const g =
              p === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ke = this.Ke.insert(i, g);
          }
        }
      }
    }
  }
  tt(t) {
    const i = t.ge.unchangedNames;
    if (!i || !i.bits) return null;
    const {
      bits: { bitmap: r = "", padding: o = 0 },
      hashCount: u = 0,
    } = i;
    let f, m;
    try {
      f = Ps(r).toUint8Array();
    } catch (p) {
      if (p instanceof _E)
        return (
          qa(
            "Decoding the base64 bloom filter in existence filter failed (" +
              p.message +
              "); ignoring the bloom filter and falling back to full re-query."
          ),
          null
        );
      throw p;
    }
    try {
      m = new np(f, o, u);
    } catch (p) {
      return (
        qa(
          p instanceof Tl
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          p
        ),
        null
      );
    }
    return m.Ee === 0 ? null : m;
  }
  nt(t, i, r) {
    return i.ge.count === r - this.st(t, i.targetId) ? 0 : 2;
  }
  st(t, i) {
    const r = this.ke.getRemoteKeysForTarget(i);
    let o = 0;
    return (
      r.forEach((u) => {
        const f = this.ke.it(),
          m = `projects/${f.projectId}/databases/${
            f.database
          }/documents/${u.path.canonicalString()}`;
        t.mightContain(m) || (this.ze(i, u, null), o++);
      }),
      o
    );
  }
  ot(t) {
    const i = new Map();
    this.qe.forEach((u, f) => {
      const m = this.Xe(f);
      if (m) {
        if (u.current && hm(m.target)) {
          const p = new Et(m.target.path);
          this._t(p).has(f) ||
            this.ut(f, p) ||
            this.ze(f, p, en.newNoDocument(p, t));
        }
        u.ve && (i.set(f, u.Fe()), u.Me());
      }
    });
    let r = Ht();
    this.Ue.forEach((u, f) => {
      let m = !0;
      f.forEachWhile((p) => {
        const g = this.Xe(p);
        return (
          !g || g.purpose === "TargetPurposeLimboResolution" || ((m = !1), !1)
        );
      }),
        m && (r = r.add(u));
    }),
      this.Qe.forEach((u, f) => f.setReadTime(t));
    const o = new yh(t, i, this.Ke, this.Qe, r);
    return (
      (this.Qe = ks()),
      (this.$e = Dc()),
      (this.Ue = Dc()),
      (this.Ke = new Ee(Ot)),
      o
    );
  }
  Ge(t, i) {
    if (!this.Je(t)) return;
    const r = this.ut(t, i.key) ? 2 : 0;
    this.He(t).xe(i.key, r),
      (this.Qe = this.Qe.insert(i.key, i)),
      (this.$e = this.$e.insert(i.key, this._t(i.key).add(t))),
      (this.Ue = this.Ue.insert(i.key, this.ct(i.key).add(t)));
  }
  ze(t, i, r) {
    if (!this.Je(t)) return;
    const o = this.He(t);
    this.ut(t, i) ? o.xe(i, 1) : o.Oe(i),
      (this.Ue = this.Ue.insert(i, this.ct(i).delete(t))),
      (this.Ue = this.Ue.insert(i, this.ct(i).add(t))),
      r && (this.Qe = this.Qe.insert(i, r));
  }
  removeTarget(t) {
    this.qe.delete(t);
  }
  et(t) {
    const i = this.He(t).Fe();
    return (
      this.ke.getRemoteKeysForTarget(t).size +
      i.addedDocuments.size -
      i.removedDocuments.size
    );
  }
  Ne(t) {
    this.He(t).Ne();
  }
  He(t) {
    let i = this.qe.get(t);
    return i || ((i = new J0()), this.qe.set(t, i)), i;
  }
  ct(t) {
    let i = this.Ue.get(t);
    return i || ((i = new Ne(Ot)), (this.Ue = this.Ue.insert(t, i))), i;
  }
  _t(t) {
    let i = this.$e.get(t);
    return i || ((i = new Ne(Ot)), (this.$e = this.$e.insert(t, i))), i;
  }
  Je(t) {
    const i = this.Xe(t) !== null;
    return i || ut("WatchChangeAggregator", "Detected inactive target", t), i;
  }
  Xe(t) {
    const i = this.qe.get(t);
    return i && i.De ? null : this.ke.lt(t);
  }
  Ye(t) {
    this.qe.set(t, new J0()),
      this.ke.getRemoteKeysForTarget(t).forEach((i) => {
        this.ze(t, i, null);
      });
  }
  ut(t, i) {
    return this.ke.getRemoteKeysForTarget(t).has(i);
  }
}
function Dc() {
  return new Ee(Et.comparator);
}
function W0() {
  return new Ee(Et.comparator);
}
const Ax = { asc: "ASCENDING", desc: "DESCENDING" },
  Sx = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  wx = { and: "AND", or: "OR" };
class Rx {
  constructor(t, i) {
    (this.databaseId = t), (this.useProto3Json = i);
  }
}
function pm(n, t) {
  return n.useProto3Json || ch(t) ? t : { value: t };
}
function xx(n, t) {
  return n.useProto3Json
    ? `${new Date(1e3 * t.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function Cx(n, t) {
  return n.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function za(n) {
  return (
    ce(!!n),
    St.fromTimestamp(
      (function (i) {
        const r = Ns(i);
        return new pn(r.seconds, r.nanos);
      })(n)
    )
  );
}
function Dx(n, t) {
  return gm(n, t).canonicalString();
}
function gm(n, t) {
  const i = (function (o) {
    return new pe(["projects", o.projectId, "databases", o.database]);
  })(n).child("documents");
  return t === void 0 ? i : i.child(t);
}
function qE(n) {
  const t = pe.fromString(n);
  return ce(QE(t)), t;
}
function Pd(n, t) {
  const i = qE(t);
  if (i.get(1) !== n.databaseId.projectId)
    throw new Tt(
      ot.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        i.get(1) +
        " vs " +
        n.databaseId.projectId
    );
  if (i.get(3) !== n.databaseId.database)
    throw new Tt(
      ot.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        i.get(3) +
        " vs " +
        n.databaseId.database
    );
  return new Et(GE(i));
}
function HE(n, t) {
  return Dx(n.databaseId, t);
}
function Vx(n) {
  const t = qE(n);
  return t.length === 4 ? pe.emptyPath() : GE(t);
}
function t_(n) {
  return new pe([
    "projects",
    n.databaseId.projectId,
    "databases",
    n.databaseId.database,
  ]).canonicalString();
}
function GE(n) {
  return ce(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function Mx(n, t) {
  let i;
  if ("targetChange" in t) {
    t.targetChange;
    const r = (function (g) {
        return g === "NO_CHANGE"
          ? 0
          : g === "ADD"
          ? 1
          : g === "REMOVE"
          ? 2
          : g === "CURRENT"
          ? 3
          : g === "RESET"
          ? 4
          : xt();
      })(t.targetChange.targetChangeType || "NO_CHANGE"),
      o = t.targetChange.targetIds || [],
      u = (function (g, v) {
        return g.useProto3Json
          ? (ce(v === void 0 || typeof v == "string"),
            Ye.fromBase64String(v || ""))
          : (ce(v === void 0 || v instanceof Buffer || v instanceof Uint8Array),
            Ye.fromUint8Array(v || new Uint8Array()));
      })(n, t.targetChange.resumeToken),
      f = t.targetChange.cause,
      m =
        f &&
        (function (g) {
          const v = g.code === void 0 ? ot.UNKNOWN : BE(g.code);
          return new Tt(v, g.message || "");
        })(f);
    i = new jE(r, o, u, m || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const o = Pd(n, r.document.name),
      u = za(r.document.updateTime),
      f = r.document.createTime ? za(r.document.createTime) : St.min(),
      m = new mi({ mapValue: { fields: r.document.fields } }),
      p = en.newFoundDocument(o, u, f, m),
      g = r.targetIds || [],
      v = r.removedTargetIds || [];
    i = new Bc(g, v, p.key, p);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const o = Pd(n, r.document),
      u = r.readTime ? za(r.readTime) : St.min(),
      f = en.newNoDocument(o, u),
      m = r.removedTargetIds || [];
    i = new Bc([], m, f.key, f);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const o = Pd(n, r.document),
      u = r.removedTargetIds || [];
    i = new Bc([], u, o, null);
  } else {
    if (!("filter" in t)) return xt();
    {
      t.filter;
      const r = t.filter;
      r.targetId;
      const { count: o = 0, unchangedNames: u } = r,
        f = new Tx(o, u),
        m = r.targetId;
      i = new zE(m, f);
    }
  }
  return i;
}
function Ox(n, t) {
  return { documents: [HE(n, t.path)] };
}
function Ix(n, t) {
  const i = { structuredQuery: {} },
    r = t.path;
  let o;
  t.collectionGroup !== null
    ? ((o = r),
      (i.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ]))
    : ((o = r.popLast()),
      (i.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (i.parent = HE(n, o));
  const u = (function (g) {
    if (g.length !== 0) return KE(Ei.create(g, "and"));
  })(t.filters);
  u && (i.structuredQuery.where = u);
  const f = (function (g) {
    if (g.length !== 0)
      return g.map((v) =>
        (function (w) {
          return { field: Oa(w.field), direction: Lx(w.dir) };
        })(v)
      );
  })(t.orderBy);
  f && (i.structuredQuery.orderBy = f);
  const m = pm(n, t.limit);
  return (
    m !== null && (i.structuredQuery.limit = m),
    t.startAt &&
      (i.structuredQuery.startAt = (function (g) {
        return { before: g.inclusive, values: g.position };
      })(t.startAt)),
    t.endAt &&
      (i.structuredQuery.endAt = (function (g) {
        return { before: !g.inclusive, values: g.position };
      })(t.endAt)),
    { ht: i, parent: o }
  );
}
function Nx(n) {
  let t = Vx(n.parent);
  const i = n.structuredQuery,
    r = i.from ? i.from.length : 0;
  let o = null;
  if (r > 0) {
    ce(r === 1);
    const v = i.from[0];
    v.allDescendants ? (o = v.collectionId) : (t = t.child(v.collectionId));
  }
  let u = [];
  i.where &&
    (u = (function (E) {
      const w = FE(E);
      return w instanceof Ei && RE(w) ? w.getFilters() : [w];
    })(i.where));
  let f = [];
  i.orderBy &&
    (f = (function (E) {
      return E.map((w) =>
        (function (B) {
          return new Xc(
            Ia(B.field),
            (function (H) {
              switch (H) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(B.direction)
          );
        })(w)
      );
    })(i.orderBy));
  let m = null;
  i.limit &&
    (m = (function (E) {
      let w;
      return (w = typeof E == "object" ? E.value : E), ch(w) ? null : w;
    })(i.limit));
  let p = null;
  i.startAt &&
    (p = (function (E) {
      const w = !!E.before,
        D = E.values || [];
      return new Yc(D, w);
    })(i.startAt));
  let g = null;
  return (
    i.endAt &&
      (g = (function (E) {
        const w = !E.before,
          D = E.values || [];
        return new Yc(D, w);
      })(i.endAt)),
    tx(t, o, f, u, m, "F", p, g)
  );
}
function Px(n, t) {
  const i = (function (o) {
    switch (o) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return xt();
    }
  })(t.purpose);
  return i == null ? null : { "goog-listen-tags": i };
}
function FE(n) {
  return n.unaryFilter !== void 0
    ? (function (i) {
        switch (i.unaryFilter.op) {
          case "IS_NAN":
            const r = Ia(i.unaryFilter.field);
            return Ie.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const o = Ia(i.unaryFilter.field);
            return Ie.create(o, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const u = Ia(i.unaryFilter.field);
            return Ie.create(u, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const f = Ia(i.unaryFilter.field);
            return Ie.create(f, "!=", { nullValue: "NULL_VALUE" });
          default:
            return xt();
        }
      })(n)
    : n.fieldFilter !== void 0
    ? (function (i) {
        return Ie.create(
          Ia(i.fieldFilter.field),
          (function (o) {
            switch (o) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return xt();
            }
          })(i.fieldFilter.op),
          i.fieldFilter.value
        );
      })(n)
    : n.compositeFilter !== void 0
    ? (function (i) {
        return Ei.create(
          i.compositeFilter.filters.map((r) => FE(r)),
          (function (o) {
            switch (o) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return xt();
            }
          })(i.compositeFilter.op)
        );
      })(n)
    : xt();
}
function Lx(n) {
  return Ax[n];
}
function kx(n) {
  return Sx[n];
}
function Ux(n) {
  return wx[n];
}
function Oa(n) {
  return { fieldPath: n.canonicalString() };
}
function Ia(n) {
  return un.fromServerFormat(n.fieldPath);
}
function KE(n) {
  return n instanceof Ie
    ? (function (i) {
        if (i.op === "==") {
          if (j0(i.value))
            return { unaryFilter: { field: Oa(i.field), op: "IS_NAN" } };
          if (z0(i.value))
            return { unaryFilter: { field: Oa(i.field), op: "IS_NULL" } };
        } else if (i.op === "!=") {
          if (j0(i.value))
            return { unaryFilter: { field: Oa(i.field), op: "IS_NOT_NAN" } };
          if (z0(i.value))
            return { unaryFilter: { field: Oa(i.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: Oa(i.field), op: kx(i.op), value: i.value },
        };
      })(n)
    : n instanceof Ei
    ? (function (i) {
        const r = i.getFilters().map((o) => KE(o));
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: Ux(i.op), filters: r } };
      })(n)
    : xt();
}
function QE(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ds {
  constructor(
    t,
    i,
    r,
    o,
    u = St.min(),
    f = St.min(),
    m = Ye.EMPTY_BYTE_STRING,
    p = null
  ) {
    (this.target = t),
      (this.targetId = i),
      (this.purpose = r),
      (this.sequenceNumber = o),
      (this.snapshotVersion = u),
      (this.lastLimboFreeSnapshotVersion = f),
      (this.resumeToken = m),
      (this.expectedCount = p);
  }
  withSequenceNumber(t) {
    return new Ds(
      this.target,
      this.targetId,
      this.purpose,
      t,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(t, i) {
    return new Ds(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      i,
      this.lastLimboFreeSnapshotVersion,
      t,
      null
    );
  }
  withExpectedCount(t) {
    return new Ds(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      t
    );
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new Ds(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      t,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bx {
  constructor(t) {
    this.Tt = t;
  }
}
function zx(n) {
  const t = Nx({ parent: n.parent, structuredQuery: n.structuredQuery });
  return n.limitType === "LAST" ? fm(t, t.limit, "L") : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jx {
  constructor() {
    this.Tn = new qx();
  }
  addToCollectionParentIndex(t, i) {
    return this.Tn.add(i), J.resolve();
  }
  getCollectionParents(t, i) {
    return J.resolve(this.Tn.getEntries(i));
  }
  addFieldIndex(t, i) {
    return J.resolve();
  }
  deleteFieldIndex(t, i) {
    return J.resolve();
  }
  deleteAllFieldIndexes(t) {
    return J.resolve();
  }
  createTargetIndexes(t, i) {
    return J.resolve();
  }
  getDocumentsMatchingTarget(t, i) {
    return J.resolve(null);
  }
  getIndexType(t, i) {
    return J.resolve(0);
  }
  getFieldIndexes(t, i) {
    return J.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return J.resolve(null);
  }
  getMinOffset(t, i) {
    return J.resolve(Is.min());
  }
  getMinOffsetFromCollectionGroup(t, i) {
    return J.resolve(Is.min());
  }
  updateCollectionGroup(t, i, r) {
    return J.resolve();
  }
  updateIndexEntries(t, i) {
    return J.resolve();
  }
}
class qx {
  constructor() {
    this.index = {};
  }
  add(t) {
    const i = t.lastSegment(),
      r = t.popLast(),
      o = this.index[i] || new Ne(pe.comparator),
      u = !o.has(r);
    return (this.index[i] = o.add(r)), u;
  }
  has(t) {
    const i = t.lastSegment(),
      r = t.popLast(),
      o = this.index[i];
    return o && o.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new Ne(pe.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const e_ = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  YE = 41943040;
class mn {
  static withCacheSize(t) {
    return new mn(
      t,
      mn.DEFAULT_COLLECTION_PERCENTILE,
      mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
  constructor(t, i, r) {
    (this.cacheSizeCollectionThreshold = t),
      (this.percentileToCollect = i),
      (this.maximumSequenceNumbersToCollect = r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (mn.DEFAULT_COLLECTION_PERCENTILE = 10),
  (mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (mn.DEFAULT = new mn(
    YE,
    mn.DEFAULT_COLLECTION_PERCENTILE,
    mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (mn.DISABLED = new mn(-1, 0, 0));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ka {
  constructor(t) {
    this.$n = t;
  }
  next() {
    return (this.$n += 2), this.$n;
  }
  static Un() {
    return new Ka(0);
  }
  static Kn() {
    return new Ka(-1);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const n_ = "LruGarbageCollector",
  Hx = 1048576;
function i_([n, t], [i, r]) {
  const o = Ot(n, i);
  return o === 0 ? Ot(t, r) : o;
}
class Gx {
  constructor(t) {
    (this.Hn = t), (this.buffer = new Ne(i_)), (this.Jn = 0);
  }
  Yn() {
    return ++this.Jn;
  }
  Zn(t) {
    const i = [t, this.Yn()];
    if (this.buffer.size < this.Hn) this.buffer = this.buffer.add(i);
    else {
      const r = this.buffer.last();
      i_(i, r) < 0 && (this.buffer = this.buffer.delete(r).add(i));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class Fx {
  constructor(t, i, r) {
    (this.garbageCollector = t),
      (this.asyncQueue = i),
      (this.localStore = r),
      (this.Xn = null);
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.er(6e4);
  }
  stop() {
    this.Xn && (this.Xn.cancel(), (this.Xn = null));
  }
  get started() {
    return this.Xn !== null;
  }
  er(t) {
    ut(n_, `Garbage collection scheduled in ${t}ms`),
      (this.Xn = this.asyncQueue.enqueueAfterDelay(
        "lru_garbage_collection",
        t,
        async () => {
          this.Xn = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (i) {
            Wa(i)
              ? ut(
                  n_,
                  "Ignoring IndexedDB error during garbage collection: ",
                  i
                )
              : await lh(i);
          }
          await this.er(3e5);
        }
      ));
  }
}
class Kx {
  constructor(t, i) {
    (this.tr = t), (this.params = i);
  }
  calculateTargetCount(t, i) {
    return this.tr.nr(t).next((r) => Math.floor((i / 100) * r));
  }
  nthSequenceNumber(t, i) {
    if (i === 0) return J.resolve(uh.ae);
    const r = new Gx(i);
    return this.tr
      .forEachTarget(t, (o) => r.Zn(o.sequenceNumber))
      .next(() => this.tr.rr(t, (o) => r.Zn(o)))
      .next(() => r.maxValue);
  }
  removeTargets(t, i, r) {
    return this.tr.removeTargets(t, i, r);
  }
  removeOrphanedDocuments(t, i) {
    return this.tr.removeOrphanedDocuments(t, i);
  }
  collect(t, i) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (ut("LruGarbageCollector", "Garbage collection skipped; disabled"),
        J.resolve(e_))
      : this.getCacheSize(t).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? (ut(
                "LruGarbageCollector",
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              e_)
            : this.ir(t, i)
        );
  }
  getCacheSize(t) {
    return this.tr.getCacheSize(t);
  }
  ir(t, i) {
    let r, o, u, f, m, p, g;
    const v = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect)
      .next(
        (E) => (
          E > this.params.maximumSequenceNumbersToCollect
            ? (ut(
                "LruGarbageCollector",
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`
              ),
              (o = this.params.maximumSequenceNumbersToCollect))
            : (o = E),
          (f = Date.now()),
          this.nthSequenceNumber(t, o)
        )
      )
      .next((E) => ((r = E), (m = Date.now()), this.removeTargets(t, r, i)))
      .next(
        (E) => ((u = E), (p = Date.now()), this.removeOrphanedDocuments(t, r))
      )
      .next(
        (E) => (
          (g = Date.now()),
          Va() <= zt.DEBUG &&
            ut(
              "LruGarbageCollector",
              `LRU Garbage Collection
	Counted targets in ${f - v}ms
	Determined least recently used ${o} in ` +
                (m - f) +
                `ms
	Removed ${u} targets in ` +
                (p - m) +
                `ms
	Removed ${E} documents in ` +
                (g - p) +
                `ms
Total Duration: ${g - v}ms`
            ),
          J.resolve({
            didRun: !0,
            sequenceNumbersCollected: o,
            targetsRemoved: u,
            documentsRemoved: E,
          })
        )
      );
  }
}
function Qx(n, t) {
  return new Kx(n, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yx {
  constructor() {
    (this.changes = new Pr(
      (t) => t.toString(),
      (t, i) => t.isEqual(i)
    )),
      (this.changesApplied = !1);
  }
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  removeEntry(t, i) {
    this.assertNotApplied(),
      this.changes.set(t, en.newInvalidDocument(t).setReadTime(i));
  }
  getEntry(t, i) {
    this.assertNotApplied();
    const r = this.changes.get(i);
    return r !== void 0 ? J.resolve(r) : this.getFromCache(t, i);
  }
  getEntries(t, i) {
    return this.getAllFromCache(t, i);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xx {
  constructor(t, i) {
    (this.overlayedDocument = t), (this.mutatedFields = i);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zx {
  constructor(t, i, r, o) {
    (this.remoteDocumentCache = t),
      (this.mutationQueue = i),
      (this.documentOverlayCache = r),
      (this.indexManager = o);
  }
  getDocument(t, i) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, i)
      .next((o) => ((r = o), this.remoteDocumentCache.getEntry(t, i)))
      .next((o) => (r !== null && Rl(r.mutation, o, Cs.empty(), pn.now()), o));
  }
  getDocuments(t, i) {
    return this.remoteDocumentCache
      .getEntries(t, i)
      .next((r) => this.getLocalViewOfDocuments(t, r, Ht()).next(() => r));
  }
  getLocalViewOfDocuments(t, i, r = Ht()) {
    const o = Cr();
    return this.populateOverlays(t, o, i).next(() =>
      this.computeViews(t, i, o, r).next((u) => {
        let f = _l();
        return (
          u.forEach((m, p) => {
            f = f.insert(m, p.overlayedDocument);
          }),
          f
        );
      })
    );
  }
  getOverlayedDocuments(t, i) {
    const r = Cr();
    return this.populateOverlays(t, r, i).next(() =>
      this.computeViews(t, i, r, Ht())
    );
  }
  populateOverlays(t, i, r) {
    const o = [];
    return (
      r.forEach((u) => {
        i.has(u) || o.push(u);
      }),
      this.documentOverlayCache.getOverlays(t, o).next((u) => {
        u.forEach((f, m) => {
          i.set(f, m);
        });
      })
    );
  }
  computeViews(t, i, r, o) {
    let u = ks();
    const f = wl(),
      m = (function () {
        return wl();
      })();
    return (
      i.forEach((p, g) => {
        const v = r.get(g.key);
        o.has(g.key) && (v === void 0 || v.mutation instanceof gh)
          ? (u = u.insert(g.key, g))
          : v !== void 0
          ? (f.set(g.key, v.mutation.getFieldMask()),
            Rl(v.mutation, g, v.mutation.getFieldMask(), pn.now()))
          : f.set(g.key, Cs.empty());
      }),
      this.recalculateAndSaveOverlays(t, u).next(
        (p) => (
          p.forEach((g, v) => f.set(g, v)),
          i.forEach((g, v) => {
            var E;
            return m.set(
              g,
              new Xx(v, (E = f.get(g)) !== null && E !== void 0 ? E : null)
            );
          }),
          m
        )
      )
    );
  }
  recalculateAndSaveOverlays(t, i) {
    const r = wl();
    let o = new Ee((f, m) => f - m),
      u = Ht();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, i)
      .next((f) => {
        for (const m of f)
          m.keys().forEach((p) => {
            const g = i.get(p);
            if (g === null) return;
            let v = r.get(p) || Cs.empty();
            (v = m.applyToLocalView(g, v)), r.set(p, v);
            const E = (o.get(m.batchId) || Ht()).add(p);
            o = o.insert(m.batchId, E);
          });
      })
      .next(() => {
        const f = [],
          m = o.getReverseIterator();
        for (; m.hasNext(); ) {
          const p = m.getNext(),
            g = p.key,
            v = p.value,
            E = IE();
          v.forEach((w) => {
            if (!u.has(w)) {
              const D = kE(i.get(w), r.get(w));
              D !== null && E.set(w, D), (u = u.add(w));
            }
          }),
            f.push(this.documentOverlayCache.saveOverlays(t, g, E));
        }
        return J.waitFor(f);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, i) {
    return this.remoteDocumentCache
      .getEntries(t, i)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, i, r, o) {
    return (function (f) {
      return (
        Et.isDocumentKey(f.path) &&
        f.collectionGroup === null &&
        f.filters.length === 0
      );
    })(i)
      ? this.getDocumentsMatchingDocumentQuery(t, i.path)
      : ex(i)
      ? this.getDocumentsMatchingCollectionGroupQuery(t, i, r, o)
      : this.getDocumentsMatchingCollectionQuery(t, i, r, o);
  }
  getNextDocuments(t, i, r, o) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, i, r, o)
      .next((u) => {
        const f =
          o - u.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                t,
                i,
                r.largestBatchId,
                o - u.size
              )
            : J.resolve(Cr());
        let m = Il,
          p = u;
        return f.next((g) =>
          J.forEach(
            g,
            (v, E) => (
              m < E.largestBatchId && (m = E.largestBatchId),
              u.get(v)
                ? J.resolve()
                : this.remoteDocumentCache.getEntry(t, v).next((w) => {
                    p = p.insert(v, w);
                  })
            )
          )
            .next(() => this.populateOverlays(t, g, u))
            .next(() => this.computeViews(t, p, g, Ht()))
            .next((v) => ({ batchId: m, changes: ax(v) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, i) {
    return this.getDocument(t, new Et(i)).next((r) => {
      let o = _l();
      return r.isFoundDocument() && (o = o.insert(r.key, r)), o;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, i, r, o) {
    const u = i.collectionGroup;
    let f = _l();
    return this.indexManager.getCollectionParents(t, u).next((m) =>
      J.forEach(m, (p) => {
        const g = (function (E, w) {
          return new fh(
            w,
            null,
            E.explicitOrderBy.slice(),
            E.filters.slice(),
            E.limit,
            E.limitType,
            E.startAt,
            E.endAt
          );
        })(i, p.child(u));
        return this.getDocumentsMatchingCollectionQuery(t, g, r, o).next(
          (v) => {
            v.forEach((E, w) => {
              f = f.insert(E, w);
            });
          }
        );
      }).next(() => f)
    );
  }
  getDocumentsMatchingCollectionQuery(t, i, r, o) {
    let u;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, i.path, r.largestBatchId)
      .next(
        (f) => (
          (u = f),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, i, r, u, o)
        )
      )
      .next((f) => {
        u.forEach((p, g) => {
          const v = g.getKey();
          f.get(v) === null && (f = f.insert(v, en.newInvalidDocument(v)));
        });
        let m = _l();
        return (
          f.forEach((p, g) => {
            const v = u.get(p);
            v !== void 0 && Rl(v.mutation, g, Cs.empty(), pn.now()),
              mh(i, g) && (m = m.insert(p, g));
          }),
          m
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $x {
  constructor(t) {
    (this.serializer = t), (this.dr = new Map()), (this.Ar = new Map());
  }
  getBundleMetadata(t, i) {
    return J.resolve(this.dr.get(i));
  }
  saveBundleMetadata(t, i) {
    return (
      this.dr.set(
        i.id,
        (function (o) {
          return { id: o.id, version: o.version, createTime: za(o.createTime) };
        })(i)
      ),
      J.resolve()
    );
  }
  getNamedQuery(t, i) {
    return J.resolve(this.Ar.get(i));
  }
  saveNamedQuery(t, i) {
    return (
      this.Ar.set(
        i.name,
        (function (o) {
          return {
            name: o.name,
            query: zx(o.bundledQuery),
            readTime: za(o.readTime),
          };
        })(i)
      ),
      J.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jx {
  constructor() {
    (this.overlays = new Ee(Et.comparator)), (this.Rr = new Map());
  }
  getOverlay(t, i) {
    return J.resolve(this.overlays.get(i));
  }
  getOverlays(t, i) {
    const r = Cr();
    return J.forEach(i, (o) =>
      this.getOverlay(t, o).next((u) => {
        u !== null && r.set(o, u);
      })
    ).next(() => r);
  }
  saveOverlays(t, i, r) {
    return (
      r.forEach((o, u) => {
        this.Et(t, i, u);
      }),
      J.resolve()
    );
  }
  removeOverlaysForBatchId(t, i, r) {
    const o = this.Rr.get(r);
    return (
      o !== void 0 &&
        (o.forEach((u) => (this.overlays = this.overlays.remove(u))),
        this.Rr.delete(r)),
      J.resolve()
    );
  }
  getOverlaysForCollection(t, i, r) {
    const o = Cr(),
      u = i.length + 1,
      f = new Et(i.child("")),
      m = this.overlays.getIteratorFrom(f);
    for (; m.hasNext(); ) {
      const p = m.getNext().value,
        g = p.getKey();
      if (!i.isPrefixOf(g.path)) break;
      g.path.length === u && p.largestBatchId > r && o.set(p.getKey(), p);
    }
    return J.resolve(o);
  }
  getOverlaysForCollectionGroup(t, i, r, o) {
    let u = new Ee((g, v) => g - v);
    const f = this.overlays.getIterator();
    for (; f.hasNext(); ) {
      const g = f.getNext().value;
      if (g.getKey().getCollectionGroup() === i && g.largestBatchId > r) {
        let v = u.get(g.largestBatchId);
        v === null && ((v = Cr()), (u = u.insert(g.largestBatchId, v))),
          v.set(g.getKey(), g);
      }
    }
    const m = Cr(),
      p = u.getIterator();
    for (
      ;
      p.hasNext() &&
      (p.getNext().value.forEach((g, v) => m.set(g, v)), !(m.size() >= o));

    );
    return J.resolve(m);
  }
  Et(t, i, r) {
    const o = this.overlays.get(r.key);
    if (o !== null) {
      const f = this.Rr.get(o.largestBatchId).delete(r.key);
      this.Rr.set(o.largestBatchId, f);
    }
    this.overlays = this.overlays.insert(r.key, new _x(i, r));
    let u = this.Rr.get(i);
    u === void 0 && ((u = Ht()), this.Rr.set(i, u)),
      this.Rr.set(i, u.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wx {
  constructor() {
    this.sessionToken = Ye.EMPTY_BYTE_STRING;
  }
  getSessionToken(t) {
    return J.resolve(this.sessionToken);
  }
  setSessionToken(t, i) {
    return (this.sessionToken = i), J.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ip {
  constructor() {
    (this.Vr = new Ne(ze.mr)), (this.gr = new Ne(ze.pr));
  }
  isEmpty() {
    return this.Vr.isEmpty();
  }
  addReference(t, i) {
    const r = new ze(t, i);
    (this.Vr = this.Vr.add(r)), (this.gr = this.gr.add(r));
  }
  yr(t, i) {
    t.forEach((r) => this.addReference(r, i));
  }
  removeReference(t, i) {
    this.wr(new ze(t, i));
  }
  Sr(t, i) {
    t.forEach((r) => this.removeReference(r, i));
  }
  br(t) {
    const i = new Et(new pe([])),
      r = new ze(i, t),
      o = new ze(i, t + 1),
      u = [];
    return (
      this.gr.forEachInRange([r, o], (f) => {
        this.wr(f), u.push(f.key);
      }),
      u
    );
  }
  Dr() {
    this.Vr.forEach((t) => this.wr(t));
  }
  wr(t) {
    (this.Vr = this.Vr.delete(t)), (this.gr = this.gr.delete(t));
  }
  vr(t) {
    const i = new Et(new pe([])),
      r = new ze(i, t),
      o = new ze(i, t + 1);
    let u = Ht();
    return (
      this.gr.forEachInRange([r, o], (f) => {
        u = u.add(f.key);
      }),
      u
    );
  }
  containsKey(t) {
    const i = new ze(t, 0),
      r = this.Vr.firstAfterOrEqual(i);
    return r !== null && t.isEqual(r.key);
  }
}
class ze {
  constructor(t, i) {
    (this.key = t), (this.Cr = i);
  }
  static mr(t, i) {
    return Et.comparator(t.key, i.key) || Ot(t.Cr, i.Cr);
  }
  static pr(t, i) {
    return Ot(t.Cr, i.Cr) || Et.comparator(t.key, i.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tC {
  constructor(t, i) {
    (this.indexManager = t),
      (this.referenceDelegate = i),
      (this.mutationQueue = []),
      (this.Fr = 1),
      (this.Mr = new Ne(ze.mr));
  }
  checkEmpty(t) {
    return J.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, i, r, o) {
    const u = this.Fr;
    this.Fr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const f = new vx(u, i, r, o);
    this.mutationQueue.push(f);
    for (const m of o)
      (this.Mr = this.Mr.add(new ze(m.key, u))),
        this.indexManager.addToCollectionParentIndex(t, m.key.path.popLast());
    return J.resolve(f);
  }
  lookupMutationBatch(t, i) {
    return J.resolve(this.Or(i));
  }
  getNextMutationBatchAfterBatchId(t, i) {
    const r = i + 1,
      o = this.Nr(r),
      u = o < 0 ? 0 : o;
    return J.resolve(
      this.mutationQueue.length > u ? this.mutationQueue[u] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return J.resolve(this.mutationQueue.length === 0 ? IR : this.Fr - 1);
  }
  getAllMutationBatches(t) {
    return J.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, i) {
    const r = new ze(i, 0),
      o = new ze(i, Number.POSITIVE_INFINITY),
      u = [];
    return (
      this.Mr.forEachInRange([r, o], (f) => {
        const m = this.Or(f.Cr);
        u.push(m);
      }),
      J.resolve(u)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, i) {
    let r = new Ne(Ot);
    return (
      i.forEach((o) => {
        const u = new ze(o, 0),
          f = new ze(o, Number.POSITIVE_INFINITY);
        this.Mr.forEachInRange([u, f], (m) => {
          r = r.add(m.Cr);
        });
      }),
      J.resolve(this.Br(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, i) {
    const r = i.path,
      o = r.length + 1;
    let u = r;
    Et.isDocumentKey(u) || (u = u.child(""));
    const f = new ze(new Et(u), 0);
    let m = new Ne(Ot);
    return (
      this.Mr.forEachWhile((p) => {
        const g = p.key.path;
        return !!r.isPrefixOf(g) && (g.length === o && (m = m.add(p.Cr)), !0);
      }, f),
      J.resolve(this.Br(m))
    );
  }
  Br(t) {
    const i = [];
    return (
      t.forEach((r) => {
        const o = this.Or(r);
        o !== null && i.push(o);
      }),
      i
    );
  }
  removeMutationBatch(t, i) {
    ce(this.Lr(i.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Mr;
    return J.forEach(i.mutations, (o) => {
      const u = new ze(o.key, i.batchId);
      return (
        (r = r.delete(u)),
        this.referenceDelegate.markPotentiallyOrphaned(t, o.key)
      );
    }).next(() => {
      this.Mr = r;
    });
  }
  qn(t) {}
  containsKey(t, i) {
    const r = new ze(i, 0),
      o = this.Mr.firstAfterOrEqual(r);
    return J.resolve(i.isEqual(o && o.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, J.resolve();
  }
  Lr(t, i) {
    return this.Nr(t);
  }
  Nr(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  Or(t) {
    const i = this.Nr(t);
    return i < 0 || i >= this.mutationQueue.length
      ? null
      : this.mutationQueue[i];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC {
  constructor(t) {
    (this.kr = t),
      (this.docs = (function () {
        return new Ee(Et.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  addEntry(t, i) {
    const r = i.key,
      o = this.docs.get(r),
      u = o ? o.size : 0,
      f = this.kr(i);
    return (
      (this.docs = this.docs.insert(r, { document: i.mutableCopy(), size: f })),
      (this.size += f - u),
      this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
    );
  }
  removeEntry(t) {
    const i = this.docs.get(t);
    i && ((this.docs = this.docs.remove(t)), (this.size -= i.size));
  }
  getEntry(t, i) {
    const r = this.docs.get(i);
    return J.resolve(r ? r.document.mutableCopy() : en.newInvalidDocument(i));
  }
  getEntries(t, i) {
    let r = ks();
    return (
      i.forEach((o) => {
        const u = this.docs.get(o);
        r = r.insert(
          o,
          u ? u.document.mutableCopy() : en.newInvalidDocument(o)
        );
      }),
      J.resolve(r)
    );
  }
  getDocumentsMatchingQuery(t, i, r, o) {
    let u = ks();
    const f = i.path,
      m = new Et(f.child("__id-9223372036854775808__")),
      p = this.docs.getIteratorFrom(m);
    for (; p.hasNext(); ) {
      const {
        key: g,
        value: { document: v },
      } = p.getNext();
      if (!f.isPrefixOf(g.path)) break;
      g.path.length > f.length + 1 ||
        DR(CR(v), r) <= 0 ||
        ((o.has(v.key) || mh(i, v)) && (u = u.insert(v.key, v.mutableCopy())));
    }
    return J.resolve(u);
  }
  getAllFromCollectionGroup(t, i, r, o) {
    xt();
  }
  qr(t, i) {
    return J.forEach(this.docs, (r) => i(r));
  }
  newChangeBuffer(t) {
    return new nC(this);
  }
  getSize(t) {
    return J.resolve(this.size);
  }
}
class nC extends Yx {
  constructor(t) {
    super(), (this.Ir = t);
  }
  applyChanges(t) {
    const i = [];
    return (
      this.changes.forEach((r, o) => {
        o.isValidDocument()
          ? i.push(this.Ir.addEntry(t, o))
          : this.Ir.removeEntry(r);
      }),
      J.waitFor(i)
    );
  }
  getFromCache(t, i) {
    return this.Ir.getEntry(t, i);
  }
  getAllFromCache(t, i) {
    return this.Ir.getEntries(t, i);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iC {
  constructor(t) {
    (this.persistence = t),
      (this.Qr = new Pr((i) => $m(i), Jm)),
      (this.lastRemoteSnapshotVersion = St.min()),
      (this.highestTargetId = 0),
      (this.$r = 0),
      (this.Ur = new ip()),
      (this.targetCount = 0),
      (this.Kr = Ka.Un());
  }
  forEachTarget(t, i) {
    return this.Qr.forEach((r, o) => i(o)), J.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return J.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return J.resolve(this.$r);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.Kr.next()), J.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, i, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      i > this.$r && (this.$r = i),
      J.resolve()
    );
  }
  zn(t) {
    this.Qr.set(t.target, t);
    const i = t.targetId;
    i > this.highestTargetId &&
      ((this.Kr = new Ka(i)), (this.highestTargetId = i)),
      t.sequenceNumber > this.$r && (this.$r = t.sequenceNumber);
  }
  addTargetData(t, i) {
    return this.zn(i), (this.targetCount += 1), J.resolve();
  }
  updateTargetData(t, i) {
    return this.zn(i), J.resolve();
  }
  removeTargetData(t, i) {
    return (
      this.Qr.delete(i.target),
      this.Ur.br(i.targetId),
      (this.targetCount -= 1),
      J.resolve()
    );
  }
  removeTargets(t, i, r) {
    let o = 0;
    const u = [];
    return (
      this.Qr.forEach((f, m) => {
        m.sequenceNumber <= i &&
          r.get(m.targetId) === null &&
          (this.Qr.delete(f),
          u.push(this.removeMatchingKeysForTargetId(t, m.targetId)),
          o++);
      }),
      J.waitFor(u).next(() => o)
    );
  }
  getTargetCount(t) {
    return J.resolve(this.targetCount);
  }
  getTargetData(t, i) {
    const r = this.Qr.get(i) || null;
    return J.resolve(r);
  }
  addMatchingKeys(t, i, r) {
    return this.Ur.yr(i, r), J.resolve();
  }
  removeMatchingKeys(t, i, r) {
    this.Ur.Sr(i, r);
    const o = this.persistence.referenceDelegate,
      u = [];
    return (
      o &&
        i.forEach((f) => {
          u.push(o.markPotentiallyOrphaned(t, f));
        }),
      J.waitFor(u)
    );
  }
  removeMatchingKeysForTargetId(t, i) {
    return this.Ur.br(i), J.resolve();
  }
  getMatchingKeysForTargetId(t, i) {
    const r = this.Ur.vr(i);
    return J.resolve(r);
  }
  containsKey(t, i) {
    return J.resolve(this.Ur.containsKey(i));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XE {
  constructor(t, i) {
    (this.Wr = {}),
      (this.overlays = {}),
      (this.Gr = new uh(0)),
      (this.zr = !1),
      (this.zr = !0),
      (this.jr = new Wx()),
      (this.referenceDelegate = t(this)),
      (this.Hr = new iC(this)),
      (this.indexManager = new jx()),
      (this.remoteDocumentCache = (function (o) {
        return new eC(o);
      })((r) => this.referenceDelegate.Jr(r))),
      (this.serializer = new Bx(i)),
      (this.Yr = new $x(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.zr = !1), Promise.resolve();
  }
  get started() {
    return this.zr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let i = this.overlays[t.toKey()];
    return i || ((i = new Jx()), (this.overlays[t.toKey()] = i)), i;
  }
  getMutationQueue(t, i) {
    let r = this.Wr[t.toKey()];
    return (
      r || ((r = new tC(i, this.referenceDelegate)), (this.Wr[t.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.jr;
  }
  getTargetCache() {
    return this.Hr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Yr;
  }
  runTransaction(t, i, r) {
    ut("MemoryPersistence", "Starting transaction:", t);
    const o = new sC(this.Gr.next());
    return (
      this.referenceDelegate.Zr(),
      r(o)
        .next((u) => this.referenceDelegate.Xr(o).next(() => u))
        .toPromise()
        .then((u) => (o.raiseOnCommittedEvent(), u))
    );
  }
  ei(t, i) {
    return J.or(Object.values(this.Wr).map((r) => () => r.containsKey(t, i)));
  }
}
class sC extends MR {
  constructor(t) {
    super(), (this.currentSequenceNumber = t);
  }
}
class sp {
  constructor(t) {
    (this.persistence = t), (this.ti = new ip()), (this.ni = null);
  }
  static ri(t) {
    return new sp(t);
  }
  get ii() {
    if (this.ni) return this.ni;
    throw xt();
  }
  addReference(t, i, r) {
    return (
      this.ti.addReference(r, i), this.ii.delete(r.toString()), J.resolve()
    );
  }
  removeReference(t, i, r) {
    return (
      this.ti.removeReference(r, i), this.ii.add(r.toString()), J.resolve()
    );
  }
  markPotentiallyOrphaned(t, i) {
    return this.ii.add(i.toString()), J.resolve();
  }
  removeTarget(t, i) {
    this.ti.br(i.targetId).forEach((o) => this.ii.add(o.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(t, i.targetId)
      .next((o) => {
        o.forEach((u) => this.ii.add(u.toString()));
      })
      .next(() => r.removeTargetData(t, i));
  }
  Zr() {
    this.ni = new Set();
  }
  Xr(t) {
    const i = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return J.forEach(this.ii, (r) => {
      const o = Et.fromPath(r);
      return this.si(t, o).next((u) => {
        u || i.removeEntry(o, St.min());
      });
    }).next(() => ((this.ni = null), i.apply(t)));
  }
  updateLimboDocument(t, i) {
    return this.si(t, i).next((r) => {
      r ? this.ii.delete(i.toString()) : this.ii.add(i.toString());
    });
  }
  Jr(t) {
    return 0;
  }
  si(t, i) {
    return J.or([
      () => J.resolve(this.ti.containsKey(i)),
      () => this.persistence.getTargetCache().containsKey(t, i),
      () => this.persistence.ei(t, i),
    ]);
  }
}
class Jc {
  constructor(t, i) {
    (this.persistence = t),
      (this.oi = new Pr(
        (r) => NR(r.path),
        (r, o) => r.isEqual(o)
      )),
      (this.garbageCollector = Qx(this, i));
  }
  static ri(t, i) {
    return new Jc(t, i);
  }
  Zr() {}
  Xr(t) {
    return J.resolve();
  }
  forEachTarget(t, i) {
    return this.persistence.getTargetCache().forEachTarget(t, i);
  }
  nr(t) {
    const i = this.sr(t);
    return this.persistence
      .getTargetCache()
      .getTargetCount(t)
      .next((r) => i.next((o) => r + o));
  }
  sr(t) {
    let i = 0;
    return this.rr(t, (r) => {
      i++;
    }).next(() => i);
  }
  rr(t, i) {
    return J.forEach(this.oi, (r, o) =>
      this.ar(t, r, o).next((u) => (u ? J.resolve() : i(o)))
    );
  }
  removeTargets(t, i, r) {
    return this.persistence.getTargetCache().removeTargets(t, i, r);
  }
  removeOrphanedDocuments(t, i) {
    let r = 0;
    const o = this.persistence.getRemoteDocumentCache(),
      u = o.newChangeBuffer();
    return o
      .qr(t, (f) =>
        this.ar(t, f, i).next((m) => {
          m || (r++, u.removeEntry(f, St.min()));
        })
      )
      .next(() => u.apply(t))
      .next(() => r);
  }
  markPotentiallyOrphaned(t, i) {
    return this.oi.set(i, t.currentSequenceNumber), J.resolve();
  }
  removeTarget(t, i) {
    const r = i.withSequenceNumber(t.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(t, r);
  }
  addReference(t, i, r) {
    return this.oi.set(r, t.currentSequenceNumber), J.resolve();
  }
  removeReference(t, i, r) {
    return this.oi.set(r, t.currentSequenceNumber), J.resolve();
  }
  updateLimboDocument(t, i) {
    return this.oi.set(i, t.currentSequenceNumber), J.resolve();
  }
  Jr(t) {
    let i = t.key.toString().length;
    return t.isFoundDocument() && (i += kc(t.data.value)), i;
  }
  ar(t, i, r) {
    return J.or([
      () => this.persistence.ei(t, i),
      () => this.persistence.getTargetCache().containsKey(t, i),
      () => {
        const o = this.oi.get(i);
        return J.resolve(o !== void 0 && o > r);
      },
    ]);
  }
  getCacheSize(t) {
    return this.persistence.getRemoteDocumentCache().getSize(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rp {
  constructor(t, i, r, o) {
    (this.targetId = t), (this.fromCache = i), (this.Hi = r), (this.Ji = o);
  }
  static Yi(t, i) {
    let r = Ht(),
      o = Ht();
    for (const u of i.docChanges)
      switch (u.type) {
        case 0:
          r = r.add(u.doc.key);
          break;
        case 1:
          o = o.add(u.doc.key);
      }
    return new rp(t, i.fromCache, r, o);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rC {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aC {
  constructor() {
    (this.Zi = !1),
      (this.Xi = !1),
      (this.es = 100),
      (this.ts = (function () {
        return W1() ? 8 : OR($1()) > 0 ? 6 : 4;
      })());
  }
  initialize(t, i) {
    (this.ns = t), (this.indexManager = i), (this.Zi = !0);
  }
  getDocumentsMatchingQuery(t, i, r, o) {
    const u = { result: null };
    return this.rs(t, i)
      .next((f) => {
        u.result = f;
      })
      .next(() => {
        if (!u.result)
          return this.ss(t, i, o, r).next((f) => {
            u.result = f;
          });
      })
      .next(() => {
        if (u.result) return;
        const f = new rC();
        return this._s(t, i, f).next((m) => {
          if (((u.result = m), this.Xi)) return this.us(t, i, f, m.size);
        });
      })
      .next(() => u.result);
  }
  us(t, i, r, o) {
    return r.documentReadCount < this.es
      ? (Va() <= zt.DEBUG &&
          ut(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Ma(i),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.es,
            "documents"
          ),
        J.resolve())
      : (Va() <= zt.DEBUG &&
          ut(
            "QueryEngine",
            "Query:",
            Ma(i),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            o,
            "documents as results."
          ),
        r.documentReadCount > this.ts * o
          ? (Va() <= zt.DEBUG &&
              ut(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Ma(i),
                "as using cache indexes may help improve performance."
              ),
            this.indexManager.createTargetIndexes(t, pi(i)))
          : J.resolve());
  }
  rs(t, i) {
    if (F0(i)) return J.resolve(null);
    let r = pi(i);
    return this.indexManager.getIndexType(t, r).next((o) =>
      o === 0
        ? null
        : (i.limit !== null && o === 1 && ((i = fm(i, null, "F")), (r = pi(i))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((u) => {
            const f = Ht(...u);
            return this.ns.getDocuments(t, f).next((m) =>
              this.indexManager.getMinOffset(t, r).next((p) => {
                const g = this.cs(i, m);
                return this.ls(i, g, f, p.readTime)
                  ? this.rs(t, fm(i, null, "F"))
                  : this.hs(t, g, i, p);
              })
            );
          }))
    );
  }
  ss(t, i, r, o) {
    return F0(i) || o.isEqual(St.min())
      ? J.resolve(null)
      : this.ns.getDocuments(t, r).next((u) => {
          const f = this.cs(i, u);
          return this.ls(i, f, r, o)
            ? J.resolve(null)
            : (Va() <= zt.DEBUG &&
                ut(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  o.toString(),
                  Ma(i)
                ),
              this.hs(t, f, i, xR(o, Il)).next((m) => m));
        });
  }
  cs(t, i) {
    let r = new Ne(ME(t));
    return (
      i.forEach((o, u) => {
        mh(t, u) && (r = r.add(u));
      }),
      r
    );
  }
  ls(t, i, r, o) {
    if (t.limit === null) return !1;
    if (r.size !== i.size) return !0;
    const u = t.limitType === "F" ? i.last() : i.first();
    return !!u && (u.hasPendingWrites || u.version.compareTo(o) > 0);
  }
  _s(t, i, r) {
    return (
      Va() <= zt.DEBUG &&
        ut(
          "QueryEngine",
          "Using full collection scan to execute query:",
          Ma(i)
        ),
      this.ns.getDocumentsMatchingQuery(t, i, Is.min(), r)
    );
  }
  hs(t, i, r, o) {
    return this.ns.getDocumentsMatchingQuery(t, r, o).next(
      (u) => (
        i.forEach((f) => {
          u = u.insert(f.key, f);
        }),
        u
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ap = "LocalStore",
  oC = 3e8;
class lC {
  constructor(t, i, r, o) {
    (this.persistence = t),
      (this.Ps = i),
      (this.serializer = o),
      (this.Ts = new Ee(Ot)),
      (this.Is = new Pr((u) => $m(u), Jm)),
      (this.Es = new Map()),
      (this.ds = t.getRemoteDocumentCache()),
      (this.Hr = t.getTargetCache()),
      (this.Yr = t.getBundleCache()),
      this.As(r);
  }
  As(t) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager
      )),
      (this.localDocuments = new Zx(
        this.ds,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.ds.setIndexManager(this.indexManager),
      this.Ps.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (i) => t.collect(i, this.Ts)
    );
  }
}
function uC(n, t, i, r) {
  return new lC(n, t, i, r);
}
async function ZE(n, t) {
  const i = jt(n);
  return await i.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let o;
      return i.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (u) => ((o = u), i.As(t), i.mutationQueue.getAllMutationBatches(r))
        )
        .next((u) => {
          const f = [],
            m = [];
          let p = Ht();
          for (const g of o) {
            f.push(g.batchId);
            for (const v of g.mutations) p = p.add(v.key);
          }
          for (const g of u) {
            m.push(g.batchId);
            for (const v of g.mutations) p = p.add(v.key);
          }
          return i.localDocuments
            .getDocuments(r, p)
            .next((g) => ({ Rs: g, removedBatchIds: f, addedBatchIds: m }));
        });
    }
  );
}
function $E(n) {
  const t = jt(n);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (i) => t.Hr.getLastRemoteSnapshotVersion(i)
  );
}
function cC(n, t) {
  const i = jt(n),
    r = t.snapshotVersion;
  let o = i.Ts;
  return i.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (u) => {
      const f = i.ds.newChangeBuffer({ trackRemovals: !0 });
      o = i.Ts;
      const m = [];
      t.targetChanges.forEach((v, E) => {
        const w = o.get(E);
        if (!w) return;
        m.push(
          i.Hr.removeMatchingKeys(u, v.removedDocuments, E).next(() =>
            i.Hr.addMatchingKeys(u, v.addedDocuments, E)
          )
        );
        let D = w.withSequenceNumber(u.currentSequenceNumber);
        t.targetMismatches.get(E) !== null
          ? (D = D.withResumeToken(
              Ye.EMPTY_BYTE_STRING,
              St.min()
            ).withLastLimboFreeSnapshotVersion(St.min()))
          : v.resumeToken.approximateByteSize() > 0 &&
            (D = D.withResumeToken(v.resumeToken, r)),
          (o = o.insert(E, D)),
          (function (F, H, $) {
            return F.resumeToken.approximateByteSize() === 0 ||
              H.snapshotVersion.toMicroseconds() -
                F.snapshotVersion.toMicroseconds() >=
                oC
              ? !0
              : $.addedDocuments.size +
                  $.modifiedDocuments.size +
                  $.removedDocuments.size >
                  0;
          })(w, D, v) && m.push(i.Hr.updateTargetData(u, D));
      });
      let p = ks(),
        g = Ht();
      if (
        (t.documentUpdates.forEach((v) => {
          t.resolvedLimboDocuments.has(v) &&
            m.push(i.persistence.referenceDelegate.updateLimboDocument(u, v));
        }),
        m.push(
          hC(u, f, t.documentUpdates).next((v) => {
            (p = v.Vs), (g = v.fs);
          })
        ),
        !r.isEqual(St.min()))
      ) {
        const v = i.Hr.getLastRemoteSnapshotVersion(u).next((E) =>
          i.Hr.setTargetsMetadata(u, u.currentSequenceNumber, r)
        );
        m.push(v);
      }
      return J.waitFor(m)
        .next(() => f.apply(u))
        .next(() => i.localDocuments.getLocalViewOfDocuments(u, p, g))
        .next(() => p);
    })
    .then((u) => ((i.Ts = o), u));
}
function hC(n, t, i) {
  let r = Ht(),
    o = Ht();
  return (
    i.forEach((u) => (r = r.add(u))),
    t.getEntries(n, r).next((u) => {
      let f = ks();
      return (
        i.forEach((m, p) => {
          const g = u.get(m);
          p.isFoundDocument() !== g.isFoundDocument() && (o = o.add(m)),
            p.isNoDocument() && p.version.isEqual(St.min())
              ? (t.removeEntry(m, p.readTime), (f = f.insert(m, p)))
              : !g.isValidDocument() ||
                p.version.compareTo(g.version) > 0 ||
                (p.version.compareTo(g.version) === 0 && g.hasPendingWrites)
              ? (t.addEntry(p), (f = f.insert(m, p)))
              : ut(
                  ap,
                  "Ignoring outdated watch update for ",
                  m,
                  ". Current version:",
                  g.version,
                  " Watch version:",
                  p.version
                );
        }),
        { Vs: f, fs: o }
      );
    })
  );
}
function fC(n, t) {
  const i = jt(n);
  return i.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let o;
      return i.Hr.getTargetData(r, t).next((u) =>
        u
          ? ((o = u), J.resolve(o))
          : i.Hr.allocateTargetId(r).next(
              (f) => (
                (o = new Ds(
                  t,
                  f,
                  "TargetPurposeListen",
                  r.currentSequenceNumber
                )),
                i.Hr.addTargetData(r, o).next(() => o)
              )
            )
      );
    })
    .then((r) => {
      const o = i.Ts.get(r.targetId);
      return (
        (o === null || r.snapshotVersion.compareTo(o.snapshotVersion) > 0) &&
          ((i.Ts = i.Ts.insert(r.targetId, r)), i.Is.set(t, r.targetId)),
        r
      );
    });
}
async function ym(n, t, i) {
  const r = jt(n),
    o = r.Ts.get(t),
    u = i ? "readwrite" : "readwrite-primary";
  try {
    i ||
      (await r.persistence.runTransaction("Release target", u, (f) =>
        r.persistence.referenceDelegate.removeTarget(f, o)
      ));
  } catch (f) {
    if (!Wa(f)) throw f;
    ut(ap, `Failed to update sequence numbers for target ${t}: ${f}`);
  }
  (r.Ts = r.Ts.remove(t)), r.Is.delete(o.target);
}
function s_(n, t, i) {
  const r = jt(n);
  let o = St.min(),
    u = Ht();
  return r.persistence.runTransaction("Execute query", "readwrite", (f) =>
    (function (p, g, v) {
      const E = jt(p),
        w = E.Is.get(v);
      return w !== void 0 ? J.resolve(E.Ts.get(w)) : E.Hr.getTargetData(g, v);
    })(r, f, pi(t))
      .next((m) => {
        if (m)
          return (
            (o = m.lastLimboFreeSnapshotVersion),
            r.Hr.getMatchingKeysForTargetId(f, m.targetId).next((p) => {
              u = p;
            })
          );
      })
      .next(() =>
        r.Ps.getDocumentsMatchingQuery(f, t, i ? o : St.min(), i ? u : Ht())
      )
      .next((m) => (dC(r, ix(t), m), { documents: m, gs: u }))
  );
}
function dC(n, t, i) {
  let r = n.Es.get(t) || St.min();
  i.forEach((o, u) => {
    u.readTime.compareTo(r) > 0 && (r = u.readTime);
  }),
    n.Es.set(t, r);
}
class r_ {
  constructor() {
    this.activeTargetIds = ux();
  }
  Ds(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  vs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  bs() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
}
class mC {
  constructor() {
    (this.ho = new r_()),
      (this.Po = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(t) {}
  updateMutationState(t, i, r) {}
  addLocalQueryTarget(t, i = !0) {
    return i && this.ho.Ds(t), this.Po[t] || "not-current";
  }
  updateQueryState(t, i, r) {
    this.Po[t] = i;
  }
  removeLocalQueryTarget(t) {
    this.ho.vs(t);
  }
  isLocalQueryTarget(t) {
    return this.ho.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.Po[t];
  }
  getAllActiveQueryTargets() {
    return this.ho.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.ho.activeTargetIds.has(t);
  }
  start() {
    return (this.ho = new r_()), Promise.resolve();
  }
  handleUserChange(t, i, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pC {
  To(t) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const a_ = "ConnectivityMonitor";
class o_ {
  constructor() {
    (this.Io = () => this.Eo()),
      (this.Ao = () => this.Ro()),
      (this.Vo = []),
      this.mo();
  }
  To(t) {
    this.Vo.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.Io),
      window.removeEventListener("offline", this.Ao);
  }
  mo() {
    window.addEventListener("online", this.Io),
      window.addEventListener("offline", this.Ao);
  }
  Eo() {
    ut(a_, "Network connectivity changed: AVAILABLE");
    for (const t of this.Vo) t(0);
  }
  Ro() {
    ut(a_, "Network connectivity changed: UNAVAILABLE");
    for (const t of this.Vo) t(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Vc = null;
function vm() {
  return (
    Vc === null
      ? (Vc = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Vc++,
    "0x" + Vc.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ld = "RestConnection",
  gC = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery",
  };
class yC {
  get fo() {
    return !1;
  }
  constructor(t) {
    (this.databaseInfo = t), (this.databaseId = t.databaseId);
    const i = t.ssl ? "https" : "http",
      r = encodeURIComponent(this.databaseId.projectId),
      o = encodeURIComponent(this.databaseId.database);
    (this.po = i + "://" + t.host),
      (this.yo = `projects/${r}/databases/${o}`),
      (this.wo =
        this.databaseId.database === Qc
          ? `project_id=${r}`
          : `project_id=${r}&database_id=${o}`);
  }
  So(t, i, r, o, u) {
    const f = vm(),
      m = this.bo(t, i.toUriEncodedString());
    ut(Ld, `Sending RPC '${t}' ${f}:`, m, r);
    const p = {
      "google-cloud-resource-prefix": this.yo,
      "x-goog-request-params": this.wo,
    };
    return (
      this.Do(p, o, u),
      this.vo(t, m, p, r).then(
        (g) => (ut(Ld, `Received RPC '${t}' ${f}: `, g), g),
        (g) => {
          throw (
            (qa(
              Ld,
              `RPC '${t}' ${f} failed with error: `,
              g,
              "url: ",
              m,
              "request:",
              r
            ),
            g)
          );
        }
      )
    );
  }
  Co(t, i, r, o, u, f) {
    return this.So(t, i, r, o, u);
  }
  Do(t, i, r) {
    (t["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + Ja;
    })()),
      (t["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
      i && i.headers.forEach((o, u) => (t[u] = o)),
      r && r.headers.forEach((o, u) => (t[u] = o));
  }
  bo(t, i) {
    const r = gC[t];
    return `${this.po}/v1/${i}:${r}`;
  }
  terminate() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vC {
  constructor(t) {
    (this.Fo = t.Fo), (this.Mo = t.Mo);
  }
  xo(t) {
    this.Oo = t;
  }
  No(t) {
    this.Bo = t;
  }
  Lo(t) {
    this.ko = t;
  }
  onMessage(t) {
    this.qo = t;
  }
  close() {
    this.Mo();
  }
  send(t) {
    this.Fo(t);
  }
  Qo() {
    this.Oo();
  }
  $o() {
    this.Bo();
  }
  Uo(t) {
    this.ko(t);
  }
  Ko(t) {
    this.qo(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Je = "WebChannelConnection";
class _C extends yC {
  constructor(t) {
    super(t),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams),
      (this.longPollingOptions = t.longPollingOptions);
  }
  vo(t, i, r, o) {
    const u = vm();
    return new Promise((f, m) => {
      const p = new cE();
      p.setWithCredentials(!0),
        p.listenOnce(hE.COMPLETE, () => {
          try {
            switch (p.getLastErrorCode()) {
              case Lc.NO_ERROR:
                const v = p.getResponseJson();
                ut(Je, `XHR for RPC '${t}' ${u} received:`, JSON.stringify(v)),
                  f(v);
                break;
              case Lc.TIMEOUT:
                ut(Je, `RPC '${t}' ${u} timed out`),
                  m(new Tt(ot.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case Lc.HTTP_ERROR:
                const E = p.getStatus();
                if (
                  (ut(
                    Je,
                    `RPC '${t}' ${u} failed with status:`,
                    E,
                    "response text:",
                    p.getResponseText()
                  ),
                  E > 0)
                ) {
                  let w = p.getResponseJson();
                  Array.isArray(w) && (w = w[0]);
                  const D = w == null ? void 0 : w.error;
                  if (D && D.status && D.message) {
                    const B = (function (H) {
                      const $ = H.toLowerCase().replace(/_/g, "-");
                      return Object.values(ot).indexOf($) >= 0 ? $ : ot.UNKNOWN;
                    })(D.status);
                    m(new Tt(B, D.message));
                  } else
                    m(
                      new Tt(
                        ot.UNKNOWN,
                        "Server responded with status " + p.getStatus()
                      )
                    );
                } else m(new Tt(ot.UNAVAILABLE, "Connection failed."));
                break;
              default:
                xt();
            }
          } finally {
            ut(Je, `RPC '${t}' ${u} completed.`);
          }
        });
      const g = JSON.stringify(o);
      ut(Je, `RPC '${t}' ${u} sending request:`, o),
        p.send(i, "POST", g, r, 15);
    });
  }
  Wo(t, i, r) {
    const o = vm(),
      u = [this.po, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
      f = mE(),
      m = dE(),
      p = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      g = this.longPollingOptions.timeoutSeconds;
    g !== void 0 && (p.longPollingTimeout = Math.round(1e3 * g)),
      this.useFetchStreams && (p.useFetchStreams = !0),
      this.Do(p.initMessageHeaders, i, r),
      (p.encodeInitMessageHeaders = !0);
    const v = u.join("");
    ut(Je, `Creating RPC '${t}' stream ${o}: ${v}`, p);
    const E = f.createWebChannel(v, p);
    let w = !1,
      D = !1;
    const B = new vC({
        Fo: (H) => {
          D
            ? ut(Je, `Not sending because RPC '${t}' stream ${o} is closed:`, H)
            : (w ||
                (ut(Je, `Opening RPC '${t}' stream ${o} transport.`),
                E.open(),
                (w = !0)),
              ut(Je, `RPC '${t}' stream ${o} sending:`, H),
              E.send(H));
        },
        Mo: () => E.close(),
      }),
      F = (H, $, st) => {
        H.listen($, (nt) => {
          try {
            st(nt);
          } catch (mt) {
            setTimeout(() => {
              throw mt;
            }, 0);
          }
        });
      };
    return (
      F(E, vl.EventType.OPEN, () => {
        D || (ut(Je, `RPC '${t}' stream ${o} transport opened.`), B.Qo());
      }),
      F(E, vl.EventType.CLOSE, () => {
        D ||
          ((D = !0), ut(Je, `RPC '${t}' stream ${o} transport closed`), B.Uo());
      }),
      F(E, vl.EventType.ERROR, (H) => {
        D ||
          ((D = !0),
          qa(Je, `RPC '${t}' stream ${o} transport errored:`, H),
          B.Uo(new Tt(ot.UNAVAILABLE, "The operation could not be completed")));
      }),
      F(E, vl.EventType.MESSAGE, (H) => {
        var $;
        if (!D) {
          const st = H.data[0];
          ce(!!st);
          const nt = st,
            mt =
              (nt == null ? void 0 : nt.error) ||
              (($ = nt[0]) === null || $ === void 0 ? void 0 : $.error);
          if (mt) {
            ut(Je, `RPC '${t}' stream ${o} received error:`, mt);
            const it = mt.status;
            let ct = (function (R) {
                const O = Re[R];
                if (O !== void 0) return BE(O);
              })(it),
              M = mt.message;
            ct === void 0 &&
              ((ct = ot.INTERNAL),
              (M =
                "Unknown error status: " + it + " with message " + mt.message)),
              (D = !0),
              B.Uo(new Tt(ct, M)),
              E.close();
          } else ut(Je, `RPC '${t}' stream ${o} received:`, st), B.Ko(st);
        }
      }),
      F(m, fE.STAT_EVENT, (H) => {
        H.stat === sm.PROXY
          ? ut(Je, `RPC '${t}' stream ${o} detected buffering proxy`)
          : H.stat === sm.NOPROXY &&
            ut(Je, `RPC '${t}' stream ${o} detected no buffering proxy`);
      }),
      setTimeout(() => {
        B.$o();
      }, 0),
      B
    );
  }
}
function kd() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function JE(n) {
  return new Rx(n, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WE {
  constructor(t, i, r = 1e3, o = 1.5, u = 6e4) {
    (this.Ti = t),
      (this.timerId = i),
      (this.Go = r),
      (this.zo = o),
      (this.jo = u),
      (this.Ho = 0),
      (this.Jo = null),
      (this.Yo = Date.now()),
      this.reset();
  }
  reset() {
    this.Ho = 0;
  }
  Zo() {
    this.Ho = this.jo;
  }
  Xo(t) {
    this.cancel();
    const i = Math.floor(this.Ho + this.e_()),
      r = Math.max(0, Date.now() - this.Yo),
      o = Math.max(0, i - r);
    o > 0 &&
      ut(
        "ExponentialBackoff",
        `Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`
      ),
      (this.Jo = this.Ti.enqueueAfterDelay(
        this.timerId,
        o,
        () => ((this.Yo = Date.now()), t())
      )),
      (this.Ho *= this.zo),
      this.Ho < this.Go && (this.Ho = this.Go),
      this.Ho > this.jo && (this.Ho = this.jo);
  }
  t_() {
    this.Jo !== null && (this.Jo.skipDelay(), (this.Jo = null));
  }
  cancel() {
    this.Jo !== null && (this.Jo.cancel(), (this.Jo = null));
  }
  e_() {
    return (Math.random() - 0.5) * this.Ho;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const l_ = "PersistentStream";
class TC {
  constructor(t, i, r, o, u, f, m, p) {
    (this.Ti = t),
      (this.n_ = r),
      (this.r_ = o),
      (this.connection = u),
      (this.authCredentialsProvider = f),
      (this.appCheckCredentialsProvider = m),
      (this.listener = p),
      (this.state = 0),
      (this.i_ = 0),
      (this.s_ = null),
      (this.o_ = null),
      (this.stream = null),
      (this.__ = 0),
      (this.a_ = new WE(t, i));
  }
  u_() {
    return this.state === 1 || this.state === 5 || this.c_();
  }
  c_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    (this.__ = 0), this.state !== 4 ? this.auth() : this.l_();
  }
  async stop() {
    this.u_() && (await this.close(0));
  }
  h_() {
    (this.state = 0), this.a_.reset();
  }
  P_() {
    this.c_() &&
      this.s_ === null &&
      (this.s_ = this.Ti.enqueueAfterDelay(this.n_, 6e4, () => this.T_()));
  }
  I_(t) {
    this.E_(), this.stream.send(t);
  }
  async T_() {
    if (this.c_()) return this.close(0);
  }
  E_() {
    this.s_ && (this.s_.cancel(), (this.s_ = null));
  }
  d_() {
    this.o_ && (this.o_.cancel(), (this.o_ = null));
  }
  async close(t, i) {
    this.E_(),
      this.d_(),
      this.a_.cancel(),
      this.i_++,
      t !== 4
        ? this.a_.reset()
        : i && i.code === ot.RESOURCE_EXHAUSTED
        ? (Zi(i.toString()),
          Zi("Using maximum backoff delay to prevent overloading the backend."),
          this.a_.Zo())
        : i &&
          i.code === ot.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.A_(), this.stream.close(), (this.stream = null)),
      (this.state = t),
      await this.listener.Lo(i);
  }
  A_() {}
  auth() {
    this.state = 1;
    const t = this.R_(this.i_),
      i = this.i_;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, o]) => {
        this.i_ === i && this.V_(r, o);
      },
      (r) => {
        t(() => {
          const o = new Tt(
            ot.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.m_(o);
        });
      }
    );
  }
  V_(t, i) {
    const r = this.R_(this.i_);
    (this.stream = this.f_(t, i)),
      this.stream.xo(() => {
        r(() => this.listener.xo());
      }),
      this.stream.No(() => {
        r(
          () => (
            (this.state = 2),
            (this.o_ = this.Ti.enqueueAfterDelay(
              this.r_,
              1e4,
              () => (this.c_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.No()
          )
        );
      }),
      this.stream.Lo((o) => {
        r(() => this.m_(o));
      }),
      this.stream.onMessage((o) => {
        r(() => (++this.__ == 1 ? this.g_(o) : this.onNext(o)));
      });
  }
  l_() {
    (this.state = 5),
      this.a_.Xo(async () => {
        (this.state = 0), this.start();
      });
  }
  m_(t) {
    return (
      ut(l_, `close with error: ${t}`), (this.stream = null), this.close(4, t)
    );
  }
  R_(t) {
    return (i) => {
      this.Ti.enqueueAndForget(() =>
        this.i_ === t
          ? i()
          : (ut(l_, "stream callback skipped by getCloseGuardedDispatcher."),
            Promise.resolve())
      );
    };
  }
}
class EC extends TC {
  constructor(t, i, r, o, u, f) {
    super(
      t,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      i,
      r,
      o,
      f
    ),
      (this.serializer = u);
  }
  f_(t, i) {
    return this.connection.Wo("Listen", t, i);
  }
  g_(t) {
    return this.onNext(t);
  }
  onNext(t) {
    this.a_.reset();
    const i = Mx(this.serializer, t),
      r = (function (u) {
        if (!("targetChange" in u)) return St.min();
        const f = u.targetChange;
        return f.targetIds && f.targetIds.length
          ? St.min()
          : f.readTime
          ? za(f.readTime)
          : St.min();
      })(t);
    return this.listener.p_(i, r);
  }
  y_(t) {
    const i = {};
    (i.database = t_(this.serializer)),
      (i.addTarget = (function (u, f) {
        let m;
        const p = f.target;
        if (
          ((m = hm(p) ? { documents: Ox(u, p) } : { query: Ix(u, p).ht }),
          (m.targetId = f.targetId),
          f.resumeToken.approximateByteSize() > 0)
        ) {
          m.resumeToken = Cx(u, f.resumeToken);
          const g = pm(u, f.expectedCount);
          g !== null && (m.expectedCount = g);
        } else if (f.snapshotVersion.compareTo(St.min()) > 0) {
          m.readTime = xx(u, f.snapshotVersion.toTimestamp());
          const g = pm(u, f.expectedCount);
          g !== null && (m.expectedCount = g);
        }
        return m;
      })(this.serializer, t));
    const r = Px(this.serializer, t);
    r && (i.labels = r), this.I_(i);
  }
  w_(t) {
    const i = {};
    (i.database = t_(this.serializer)), (i.removeTarget = t), this.I_(i);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bC {}
class AC extends bC {
  constructor(t, i, r, o) {
    super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = i),
      (this.connection = r),
      (this.serializer = o),
      (this.F_ = !1);
  }
  M_() {
    if (this.F_)
      throw new Tt(
        ot.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  So(t, i, r, o) {
    return (
      this.M_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([u, f]) => this.connection.So(t, gm(i, r), o, u, f))
        .catch((u) => {
          throw u.name === "FirebaseError"
            ? (u.code === ot.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              u)
            : new Tt(ot.UNKNOWN, u.toString());
        })
    );
  }
  Co(t, i, r, o, u) {
    return (
      this.M_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([f, m]) => this.connection.Co(t, gm(i, r), o, f, m, u))
        .catch((f) => {
          throw f.name === "FirebaseError"
            ? (f.code === ot.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              f)
            : new Tt(ot.UNKNOWN, f.toString());
        })
    );
  }
  terminate() {
    (this.F_ = !0), this.connection.terminate();
  }
}
class SC {
  constructor(t, i) {
    (this.asyncQueue = t),
      (this.onlineStateHandler = i),
      (this.state = "Unknown"),
      (this.x_ = 0),
      (this.O_ = null),
      (this.N_ = !0);
  }
  B_() {
    this.x_ === 0 &&
      (this.L_("Unknown"),
      (this.O_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.O_ = null),
          this.k_("Backend didn't respond within 10 seconds."),
          this.L_("Offline"),
          Promise.resolve()
        )
      )));
  }
  q_(t) {
    this.state === "Online"
      ? this.L_("Unknown")
      : (this.x_++,
        this.x_ >= 1 &&
          (this.Q_(),
          this.k_(
            `Connection failed 1 times. Most recent error: ${t.toString()}`
          ),
          this.L_("Offline")));
  }
  set(t) {
    this.Q_(), (this.x_ = 0), t === "Online" && (this.N_ = !1), this.L_(t);
  }
  L_(t) {
    t !== this.state && ((this.state = t), this.onlineStateHandler(t));
  }
  k_(t) {
    const i = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.N_ ? (Zi(i), (this.N_ = !1)) : ut("OnlineStateTracker", i);
  }
  Q_() {
    this.O_ !== null && (this.O_.cancel(), (this.O_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qa = "RemoteStore";
class wC {
  constructor(t, i, r, o, u) {
    (this.localStore = t),
      (this.datastore = i),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.U_ = []),
      (this.K_ = new Map()),
      (this.W_ = new Set()),
      (this.G_ = []),
      (this.z_ = u),
      this.z_.To((f) => {
        r.enqueueAndForget(async () => {
          Zl(this) &&
            (ut(Qa, "Restarting streams for network reachability change."),
            await (async function (p) {
              const g = jt(p);
              g.W_.add(4),
                await Xl(g),
                g.j_.set("Unknown"),
                g.W_.delete(4),
                await vh(g);
            })(this));
        });
      }),
      (this.j_ = new SC(r, o));
  }
}
async function vh(n) {
  if (Zl(n)) for (const t of n.G_) await t(!0);
}
async function Xl(n) {
  for (const t of n.G_) await t(!1);
}
function tb(n, t) {
  const i = jt(n);
  i.K_.has(t.targetId) ||
    (i.K_.set(t.targetId, t), cp(i) ? up(i) : to(i).c_() && lp(i, t));
}
function op(n, t) {
  const i = jt(n),
    r = to(i);
  i.K_.delete(t),
    r.c_() && eb(i, t),
    i.K_.size === 0 && (r.c_() ? r.P_() : Zl(i) && i.j_.set("Unknown"));
}
function lp(n, t) {
  if (
    (n.H_.Ne(t.targetId),
    t.resumeToken.approximateByteSize() > 0 ||
      t.snapshotVersion.compareTo(St.min()) > 0)
  ) {
    const i = n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(i);
  }
  to(n).y_(t);
}
function eb(n, t) {
  n.H_.Ne(t), to(n).w_(t);
}
function up(n) {
  (n.H_ = new bx({
    getRemoteKeysForTarget: (t) => n.remoteSyncer.getRemoteKeysForTarget(t),
    lt: (t) => n.K_.get(t) || null,
    it: () => n.datastore.serializer.databaseId,
  })),
    to(n).start(),
    n.j_.B_();
}
function cp(n) {
  return Zl(n) && !to(n).u_() && n.K_.size > 0;
}
function Zl(n) {
  return jt(n).W_.size === 0;
}
function nb(n) {
  n.H_ = void 0;
}
async function RC(n) {
  n.j_.set("Online");
}
async function xC(n) {
  n.K_.forEach((t, i) => {
    lp(n, t);
  });
}
async function CC(n, t) {
  nb(n), cp(n) ? (n.j_.q_(t), up(n)) : n.j_.set("Unknown");
}
async function DC(n, t, i) {
  if ((n.j_.set("Online"), t instanceof jE && t.state === 2 && t.cause))
    try {
      await (async function (o, u) {
        const f = u.cause;
        for (const m of u.targetIds)
          o.K_.has(m) &&
            (await o.remoteSyncer.rejectListen(m, f),
            o.K_.delete(m),
            o.H_.removeTarget(m));
      })(n, t);
    } catch (r) {
      ut(Qa, "Failed to remove targets %s: %s ", t.targetIds.join(","), r),
        await u_(n, r);
    }
  else if (
    (t instanceof Bc ? n.H_.We(t) : t instanceof zE ? n.H_.Ze(t) : n.H_.je(t),
    !i.isEqual(St.min()))
  )
    try {
      const r = await $E(n.localStore);
      i.compareTo(r) >= 0 &&
        (await (function (u, f) {
          const m = u.H_.ot(f);
          return (
            m.targetChanges.forEach((p, g) => {
              if (p.resumeToken.approximateByteSize() > 0) {
                const v = u.K_.get(g);
                v && u.K_.set(g, v.withResumeToken(p.resumeToken, f));
              }
            }),
            m.targetMismatches.forEach((p, g) => {
              const v = u.K_.get(p);
              if (!v) return;
              u.K_.set(
                p,
                v.withResumeToken(Ye.EMPTY_BYTE_STRING, v.snapshotVersion)
              ),
                eb(u, p);
              const E = new Ds(v.target, p, g, v.sequenceNumber);
              lp(u, E);
            }),
            u.remoteSyncer.applyRemoteEvent(m)
          );
        })(n, i));
    } catch (r) {
      ut(Qa, "Failed to raise snapshot:", r), await u_(n, r);
    }
}
async function u_(n, t, i) {
  if (!Wa(t)) throw t;
  n.W_.add(1),
    await Xl(n),
    n.j_.set("Offline"),
    i || (i = () => $E(n.localStore)),
    n.asyncQueue.enqueueRetryable(async () => {
      ut(Qa, "Retrying IndexedDB access"),
        await i(),
        n.W_.delete(1),
        await vh(n);
    });
}
async function c_(n, t) {
  const i = jt(n);
  i.asyncQueue.verifyOperationInProgress(),
    ut(Qa, "RemoteStore received new credentials");
  const r = Zl(i);
  i.W_.add(3),
    await Xl(i),
    r && i.j_.set("Unknown"),
    await i.remoteSyncer.handleCredentialChange(t),
    i.W_.delete(3),
    await vh(i);
}
async function VC(n, t) {
  const i = jt(n);
  t
    ? (i.W_.delete(2), await vh(i))
    : t || (i.W_.add(2), await Xl(i), i.j_.set("Unknown"));
}
function to(n) {
  return (
    n.J_ ||
      ((n.J_ = (function (i, r, o) {
        const u = jt(i);
        return (
          u.M_(),
          new EC(
            r,
            u.connection,
            u.authCredentials,
            u.appCheckCredentials,
            u.serializer,
            o
          )
        );
      })(n.datastore, n.asyncQueue, {
        xo: RC.bind(null, n),
        No: xC.bind(null, n),
        Lo: CC.bind(null, n),
        p_: DC.bind(null, n),
      })),
      n.G_.push(async (t) => {
        t
          ? (n.J_.h_(), cp(n) ? up(n) : n.j_.set("Unknown"))
          : (await n.J_.stop(), nb(n));
      })),
    n.J_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hp {
  constructor(t, i, r, o, u) {
    (this.asyncQueue = t),
      (this.timerId = i),
      (this.targetTimeMs = r),
      (this.op = o),
      (this.removalCallback = u),
      (this.deferred = new Mr()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((f) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, i, r, o, u) {
    const f = Date.now() + r,
      m = new hp(t, i, f, o, u);
    return m.start(r), m;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new Tt(ot.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function ib(n, t) {
  if ((Zi("AsyncQueue", `${t}: ${n}`), Wa(n)))
    return new Tt(ot.UNAVAILABLE, `${t}: ${n}`);
  throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ja {
  static emptySet(t) {
    return new ja(t.comparator);
  }
  constructor(t) {
    (this.comparator = t
      ? (i, r) => t(i, r) || Et.comparator(i.key, r.key)
      : (i, r) => Et.comparator(i.key, r.key)),
      (this.keyedMap = _l()),
      (this.sortedSet = new Ee(this.comparator));
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t) {
    const i = this.keyedMap.get(t);
    return i ? this.sortedSet.indexOf(i) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t) {
    this.sortedSet.inorderTraversal((i, r) => (t(i), !1));
  }
  add(t) {
    const i = this.delete(t.key);
    return i.copy(i.keyedMap.insert(t.key, t), i.sortedSet.insert(t, null));
  }
  delete(t) {
    const i = this.get(t);
    return i
      ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(i))
      : this;
  }
  isEqual(t) {
    if (!(t instanceof ja) || this.size !== t.size) return !1;
    const i = this.sortedSet.getIterator(),
      r = t.sortedSet.getIterator();
    for (; i.hasNext(); ) {
      const o = i.getNext().key,
        u = r.getNext().key;
      if (!o.isEqual(u)) return !1;
    }
    return !0;
  }
  toString() {
    const t = [];
    return (
      this.forEach((i) => {
        t.push(i.toString());
      }),
      t.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          t.join(`  
`) +
          `
)`
    );
  }
  copy(t, i) {
    const r = new ja();
    return (
      (r.comparator = this.comparator), (r.keyedMap = t), (r.sortedSet = i), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h_ {
  constructor() {
    this.Z_ = new Ee(Et.comparator);
  }
  track(t) {
    const i = t.doc.key,
      r = this.Z_.get(i);
    r
      ? t.type !== 0 && r.type === 3
        ? (this.Z_ = this.Z_.insert(i, t))
        : t.type === 3 && r.type !== 1
        ? (this.Z_ = this.Z_.insert(i, { type: r.type, doc: t.doc }))
        : t.type === 2 && r.type === 2
        ? (this.Z_ = this.Z_.insert(i, { type: 2, doc: t.doc }))
        : t.type === 2 && r.type === 0
        ? (this.Z_ = this.Z_.insert(i, { type: 0, doc: t.doc }))
        : t.type === 1 && r.type === 0
        ? (this.Z_ = this.Z_.remove(i))
        : t.type === 1 && r.type === 2
        ? (this.Z_ = this.Z_.insert(i, { type: 1, doc: r.doc }))
        : t.type === 0 && r.type === 1
        ? (this.Z_ = this.Z_.insert(i, { type: 2, doc: t.doc }))
        : xt()
      : (this.Z_ = this.Z_.insert(i, t));
  }
  X_() {
    const t = [];
    return (
      this.Z_.inorderTraversal((i, r) => {
        t.push(r);
      }),
      t
    );
  }
}
class Ya {
  constructor(t, i, r, o, u, f, m, p, g) {
    (this.query = t),
      (this.docs = i),
      (this.oldDocs = r),
      (this.docChanges = o),
      (this.mutatedKeys = u),
      (this.fromCache = f),
      (this.syncStateChanged = m),
      (this.excludesMetadataChanges = p),
      (this.hasCachedResults = g);
  }
  static fromInitialDocuments(t, i, r, o, u) {
    const f = [];
    return (
      i.forEach((m) => {
        f.push({ type: 0, doc: m });
      }),
      new Ya(t, i, ja.emptySet(i), f, r, o, !0, !1, u)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (
      !(
        this.fromCache === t.fromCache &&
        this.hasCachedResults === t.hasCachedResults &&
        this.syncStateChanged === t.syncStateChanged &&
        this.mutatedKeys.isEqual(t.mutatedKeys) &&
        dh(this.query, t.query) &&
        this.docs.isEqual(t.docs) &&
        this.oldDocs.isEqual(t.oldDocs)
      )
    )
      return !1;
    const i = this.docChanges,
      r = t.docChanges;
    if (i.length !== r.length) return !1;
    for (let o = 0; o < i.length; o++)
      if (i[o].type !== r[o].type || !i[o].doc.isEqual(r[o].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MC {
  constructor() {
    (this.ea = void 0), (this.ta = []);
  }
  na() {
    return this.ta.some((t) => t.ra());
  }
}
class OC {
  constructor() {
    (this.queries = f_()),
      (this.onlineState = "Unknown"),
      (this.ia = new Set());
  }
  terminate() {
    (function (i, r) {
      const o = jt(i),
        u = o.queries;
      (o.queries = f_()),
        u.forEach((f, m) => {
          for (const p of m.ta) p.onError(r);
        });
    })(this, new Tt(ot.ABORTED, "Firestore shutting down"));
  }
}
function f_() {
  return new Pr((n) => VE(n), dh);
}
async function IC(n, t) {
  const i = jt(n);
  let r = 3;
  const o = t.query;
  let u = i.queries.get(o);
  u ? !u.na() && t.ra() && (r = 2) : ((u = new MC()), (r = t.ra() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        u.ea = await i.onListen(o, !0);
        break;
      case 1:
        u.ea = await i.onListen(o, !1);
        break;
      case 2:
        await i.onFirstRemoteStoreListen(o);
    }
  } catch (f) {
    const m = ib(f, `Initialization of query '${Ma(t.query)}' failed`);
    return void t.onError(m);
  }
  i.queries.set(o, u),
    u.ta.push(t),
    t.sa(i.onlineState),
    u.ea && t.oa(u.ea) && fp(i);
}
async function NC(n, t) {
  const i = jt(n),
    r = t.query;
  let o = 3;
  const u = i.queries.get(r);
  if (u) {
    const f = u.ta.indexOf(t);
    f >= 0 &&
      (u.ta.splice(f, 1),
      u.ta.length === 0 ? (o = t.ra() ? 0 : 1) : !u.na() && t.ra() && (o = 2));
  }
  switch (o) {
    case 0:
      return i.queries.delete(r), i.onUnlisten(r, !0);
    case 1:
      return i.queries.delete(r), i.onUnlisten(r, !1);
    case 2:
      return i.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function PC(n, t) {
  const i = jt(n);
  let r = !1;
  for (const o of t) {
    const u = o.query,
      f = i.queries.get(u);
    if (f) {
      for (const m of f.ta) m.oa(o) && (r = !0);
      f.ea = o;
    }
  }
  r && fp(i);
}
function LC(n, t, i) {
  const r = jt(n),
    o = r.queries.get(t);
  if (o) for (const u of o.ta) u.onError(i);
  r.queries.delete(t);
}
function fp(n) {
  n.ia.forEach((t) => {
    t.next();
  });
}
var _m, d_;
((d_ = _m || (_m = {}))._a = "default"), (d_.Cache = "cache");
class kC {
  constructor(t, i, r) {
    (this.query = t),
      (this.aa = i),
      (this.ua = !1),
      (this.ca = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  oa(t) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const o of t.docChanges) o.type !== 3 && r.push(o);
      t = new Ya(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        !0,
        t.hasCachedResults
      );
    }
    let i = !1;
    return (
      this.ua
        ? this.la(t) && (this.aa.next(t), (i = !0))
        : this.ha(t, this.onlineState) && (this.Pa(t), (i = !0)),
      (this.ca = t),
      i
    );
  }
  onError(t) {
    this.aa.error(t);
  }
  sa(t) {
    this.onlineState = t;
    let i = !1;
    return (
      this.ca &&
        !this.ua &&
        this.ha(this.ca, t) &&
        (this.Pa(this.ca), (i = !0)),
      i
    );
  }
  ha(t, i) {
    if (!t.fromCache || !this.ra()) return !0;
    const r = i !== "Offline";
    return (
      (!this.options.Ta || !r) &&
      (!t.docs.isEmpty() || t.hasCachedResults || i === "Offline")
    );
  }
  la(t) {
    if (t.docChanges.length > 0) return !0;
    const i = this.ca && this.ca.hasPendingWrites !== t.hasPendingWrites;
    return (
      !(!t.syncStateChanged && !i) && this.options.includeMetadataChanges === !0
    );
  }
  Pa(t) {
    (t = Ya.fromInitialDocuments(
      t.query,
      t.docs,
      t.mutatedKeys,
      t.fromCache,
      t.hasCachedResults
    )),
      (this.ua = !0),
      this.aa.next(t);
  }
  ra() {
    return this.options.source !== _m.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sb {
  constructor(t) {
    this.key = t;
  }
}
class rb {
  constructor(t) {
    this.key = t;
  }
}
class UC {
  constructor(t, i) {
    (this.query = t),
      (this.fa = i),
      (this.ga = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.pa = Ht()),
      (this.mutatedKeys = Ht()),
      (this.ya = ME(t)),
      (this.wa = new ja(this.ya));
  }
  get Sa() {
    return this.fa;
  }
  ba(t, i) {
    const r = i ? i.Da : new h_(),
      o = i ? i.wa : this.wa;
    let u = i ? i.mutatedKeys : this.mutatedKeys,
      f = o,
      m = !1;
    const p =
        this.query.limitType === "F" && o.size === this.query.limit
          ? o.last()
          : null,
      g =
        this.query.limitType === "L" && o.size === this.query.limit
          ? o.first()
          : null;
    if (
      (t.inorderTraversal((v, E) => {
        const w = o.get(v),
          D = mh(this.query, E) ? E : null,
          B = !!w && this.mutatedKeys.has(w.key),
          F =
            !!D &&
            (D.hasLocalMutations ||
              (this.mutatedKeys.has(D.key) && D.hasCommittedMutations));
        let H = !1;
        w && D
          ? w.data.isEqual(D.data)
            ? B !== F && (r.track({ type: 3, doc: D }), (H = !0))
            : this.va(w, D) ||
              (r.track({ type: 2, doc: D }),
              (H = !0),
              ((p && this.ya(D, p) > 0) || (g && this.ya(D, g) < 0)) &&
                (m = !0))
          : !w && D
          ? (r.track({ type: 0, doc: D }), (H = !0))
          : w &&
            !D &&
            (r.track({ type: 1, doc: w }), (H = !0), (p || g) && (m = !0)),
          H &&
            (D
              ? ((f = f.add(D)), (u = F ? u.add(v) : u.delete(v)))
              : ((f = f.delete(v)), (u = u.delete(v))));
      }),
      this.query.limit !== null)
    )
      for (; f.size > this.query.limit; ) {
        const v = this.query.limitType === "F" ? f.last() : f.first();
        (f = f.delete(v.key)),
          (u = u.delete(v.key)),
          r.track({ type: 1, doc: v });
      }
    return { wa: f, Da: r, ls: m, mutatedKeys: u };
  }
  va(t, i) {
    return (
      t.hasLocalMutations && i.hasCommittedMutations && !i.hasLocalMutations
    );
  }
  applyChanges(t, i, r, o) {
    const u = this.wa;
    (this.wa = t.wa), (this.mutatedKeys = t.mutatedKeys);
    const f = t.Da.X_();
    f.sort(
      (v, E) =>
        (function (D, B) {
          const F = (H) => {
            switch (H) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return xt();
            }
          };
          return F(D) - F(B);
        })(v.type, E.type) || this.ya(v.doc, E.doc)
    ),
      this.Ca(r),
      (o = o != null && o);
    const m = i && !o ? this.Fa() : [],
      p = this.pa.size === 0 && this.current && !o ? 1 : 0,
      g = p !== this.ga;
    return (
      (this.ga = p),
      f.length !== 0 || g
        ? {
            snapshot: new Ya(
              this.query,
              t.wa,
              u,
              f,
              t.mutatedKeys,
              p === 0,
              g,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            Ma: m,
          }
        : { Ma: m }
    );
  }
  sa(t) {
    return this.current && t === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { wa: this.wa, Da: new h_(), mutatedKeys: this.mutatedKeys, ls: !1 },
          !1
        ))
      : { Ma: [] };
  }
  xa(t) {
    return (
      !this.fa.has(t) && !!this.wa.has(t) && !this.wa.get(t).hasLocalMutations
    );
  }
  Ca(t) {
    t &&
      (t.addedDocuments.forEach((i) => (this.fa = this.fa.add(i))),
      t.modifiedDocuments.forEach((i) => {}),
      t.removedDocuments.forEach((i) => (this.fa = this.fa.delete(i))),
      (this.current = t.current));
  }
  Fa() {
    if (!this.current) return [];
    const t = this.pa;
    (this.pa = Ht()),
      this.wa.forEach((r) => {
        this.xa(r.key) && (this.pa = this.pa.add(r.key));
      });
    const i = [];
    return (
      t.forEach((r) => {
        this.pa.has(r) || i.push(new rb(r));
      }),
      this.pa.forEach((r) => {
        t.has(r) || i.push(new sb(r));
      }),
      i
    );
  }
  Oa(t) {
    (this.fa = t.gs), (this.pa = Ht());
    const i = this.ba(t.documents);
    return this.applyChanges(i, !0);
  }
  Na() {
    return Ya.fromInitialDocuments(
      this.query,
      this.wa,
      this.mutatedKeys,
      this.ga === 0,
      this.hasCachedResults
    );
  }
}
const dp = "SyncEngine";
class BC {
  constructor(t, i, r) {
    (this.query = t), (this.targetId = i), (this.view = r);
  }
}
class zC {
  constructor(t) {
    (this.key = t), (this.Ba = !1);
  }
}
class jC {
  constructor(t, i, r, o, u, f) {
    (this.localStore = t),
      (this.remoteStore = i),
      (this.eventManager = r),
      (this.sharedClientState = o),
      (this.currentUser = u),
      (this.maxConcurrentLimboResolutions = f),
      (this.La = {}),
      (this.ka = new Pr((m) => VE(m), dh)),
      (this.qa = new Map()),
      (this.Qa = new Set()),
      (this.$a = new Ee(Et.comparator)),
      (this.Ua = new Map()),
      (this.Ka = new ip()),
      (this.Wa = {}),
      (this.Ga = new Map()),
      (this.za = Ka.Kn()),
      (this.onlineState = "Unknown"),
      (this.ja = void 0);
  }
  get isPrimaryClient() {
    return this.ja === !0;
  }
}
async function qC(n, t, i = !0) {
  const r = cb(n);
  let o;
  const u = r.ka.get(t);
  return (
    u
      ? (r.sharedClientState.addLocalQueryTarget(u.targetId), (o = u.view.Na()))
      : (o = await ab(r, t, i, !0)),
    o
  );
}
async function HC(n, t) {
  const i = cb(n);
  await ab(i, t, !0, !1);
}
async function ab(n, t, i, r) {
  const o = await fC(n.localStore, pi(t)),
    u = o.targetId,
    f = n.sharedClientState.addLocalQueryTarget(u, i);
  let m;
  return (
    r && (m = await GC(n, t, u, f === "current", o.resumeToken)),
    n.isPrimaryClient && i && tb(n.remoteStore, o),
    m
  );
}
async function GC(n, t, i, r, o) {
  n.Ha = (E, w, D) =>
    (async function (F, H, $, st) {
      let nt = H.view.ba($);
      nt.ls &&
        (nt = await s_(F.localStore, H.query, !1).then(({ documents: M }) =>
          H.view.ba(M, nt)
        ));
      const mt = st && st.targetChanges.get(H.targetId),
        it = st && st.targetMismatches.get(H.targetId) != null,
        ct = H.view.applyChanges(nt, F.isPrimaryClient, mt, it);
      return p_(F, H.targetId, ct.Ma), ct.snapshot;
    })(n, E, w, D);
  const u = await s_(n.localStore, t, !0),
    f = new UC(t, u.gs),
    m = f.ba(u.documents),
    p = Yl.createSynthesizedTargetChangeForCurrentChange(
      i,
      r && n.onlineState !== "Offline",
      o
    ),
    g = f.applyChanges(m, n.isPrimaryClient, p);
  p_(n, i, g.Ma);
  const v = new BC(t, i, f);
  return (
    n.ka.set(t, v),
    n.qa.has(i) ? n.qa.get(i).push(t) : n.qa.set(i, [t]),
    g.snapshot
  );
}
async function FC(n, t, i) {
  const r = jt(n),
    o = r.ka.get(t),
    u = r.qa.get(o.targetId);
  if (u.length > 1)
    return (
      r.qa.set(
        o.targetId,
        u.filter((f) => !dh(f, t))
      ),
      void r.ka.delete(t)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(o.targetId),
      r.sharedClientState.isActiveQueryTarget(o.targetId) ||
        (await ym(r.localStore, o.targetId, !1)
          .then(() => {
            r.sharedClientState.clearQueryState(o.targetId),
              i && op(r.remoteStore, o.targetId),
              Tm(r, o.targetId);
          })
          .catch(lh)))
    : (Tm(r, o.targetId), await ym(r.localStore, o.targetId, !0));
}
async function KC(n, t) {
  const i = jt(n),
    r = i.ka.get(t),
    o = i.qa.get(r.targetId);
  i.isPrimaryClient &&
    o.length === 1 &&
    (i.sharedClientState.removeLocalQueryTarget(r.targetId),
    op(i.remoteStore, r.targetId));
}
async function ob(n, t) {
  const i = jt(n);
  try {
    const r = await cC(i.localStore, t);
    t.targetChanges.forEach((o, u) => {
      const f = i.Ua.get(u);
      f &&
        (ce(
          o.addedDocuments.size +
            o.modifiedDocuments.size +
            o.removedDocuments.size <=
            1
        ),
        o.addedDocuments.size > 0
          ? (f.Ba = !0)
          : o.modifiedDocuments.size > 0
          ? ce(f.Ba)
          : o.removedDocuments.size > 0 && (ce(f.Ba), (f.Ba = !1)));
    }),
      await ub(i, r, t);
  } catch (r) {
    await lh(r);
  }
}
function m_(n, t, i) {
  const r = jt(n);
  if ((r.isPrimaryClient && i === 0) || (!r.isPrimaryClient && i === 1)) {
    const o = [];
    r.ka.forEach((u, f) => {
      const m = f.view.sa(t);
      m.snapshot && o.push(m.snapshot);
    }),
      (function (f, m) {
        const p = jt(f);
        p.onlineState = m;
        let g = !1;
        p.queries.forEach((v, E) => {
          for (const w of E.ta) w.sa(m) && (g = !0);
        }),
          g && fp(p);
      })(r.eventManager, t),
      o.length && r.La.p_(o),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function QC(n, t, i) {
  const r = jt(n);
  r.sharedClientState.updateQueryState(t, "rejected", i);
  const o = r.Ua.get(t),
    u = o && o.key;
  if (u) {
    let f = new Ee(Et.comparator);
    f = f.insert(u, en.newNoDocument(u, St.min()));
    const m = Ht().add(u),
      p = new yh(St.min(), new Map(), new Ee(Ot), f, m);
    await ob(r, p), (r.$a = r.$a.remove(u)), r.Ua.delete(t), mp(r);
  } else
    await ym(r.localStore, t, !1)
      .then(() => Tm(r, t, i))
      .catch(lh);
}
function Tm(n, t, i = null) {
  n.sharedClientState.removeLocalQueryTarget(t);
  for (const r of n.qa.get(t)) n.ka.delete(r), i && n.La.Ja(r, i);
  n.qa.delete(t),
    n.isPrimaryClient &&
      n.Ka.br(t).forEach((r) => {
        n.Ka.containsKey(r) || lb(n, r);
      });
}
function lb(n, t) {
  n.Qa.delete(t.path.canonicalString());
  const i = n.$a.get(t);
  i !== null &&
    (op(n.remoteStore, i), (n.$a = n.$a.remove(t)), n.Ua.delete(i), mp(n));
}
function p_(n, t, i) {
  for (const r of i)
    r instanceof sb
      ? (n.Ka.addReference(r.key, t), YC(n, r))
      : r instanceof rb
      ? (ut(dp, "Document no longer in limbo: " + r.key),
        n.Ka.removeReference(r.key, t),
        n.Ka.containsKey(r.key) || lb(n, r.key))
      : xt();
}
function YC(n, t) {
  const i = t.key,
    r = i.path.canonicalString();
  n.$a.get(i) ||
    n.Qa.has(r) ||
    (ut(dp, "New document in limbo: " + i), n.Qa.add(r), mp(n));
}
function mp(n) {
  for (; n.Qa.size > 0 && n.$a.size < n.maxConcurrentLimboResolutions; ) {
    const t = n.Qa.values().next().value;
    n.Qa.delete(t);
    const i = new Et(pe.fromString(t)),
      r = n.za.next();
    n.Ua.set(r, new zC(i)),
      (n.$a = n.$a.insert(i, r)),
      tb(
        n.remoteStore,
        new Ds(pi(Wm(i.path)), r, "TargetPurposeLimboResolution", uh.ae)
      );
  }
}
async function ub(n, t, i) {
  const r = jt(n),
    o = [],
    u = [],
    f = [];
  r.ka.isEmpty() ||
    (r.ka.forEach((m, p) => {
      f.push(
        r.Ha(p, t, i).then((g) => {
          var v;
          if ((g || i) && r.isPrimaryClient) {
            const E = g
              ? !g.fromCache
              : (v = i == null ? void 0 : i.targetChanges.get(p.targetId)) ===
                  null || v === void 0
              ? void 0
              : v.current;
            r.sharedClientState.updateQueryState(
              p.targetId,
              E ? "current" : "not-current"
            );
          }
          if (g) {
            o.push(g);
            const E = rp.Yi(p.targetId, g);
            u.push(E);
          }
        })
      );
    }),
    await Promise.all(f),
    r.La.p_(o),
    await (async function (p, g) {
      const v = jt(p);
      try {
        await v.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (E) =>
            J.forEach(g, (w) =>
              J.forEach(w.Hi, (D) =>
                v.persistence.referenceDelegate.addReference(E, w.targetId, D)
              ).next(() =>
                J.forEach(w.Ji, (D) =>
                  v.persistence.referenceDelegate.removeReference(
                    E,
                    w.targetId,
                    D
                  )
                )
              )
            )
        );
      } catch (E) {
        if (!Wa(E)) throw E;
        ut(ap, "Failed to update sequence numbers: " + E);
      }
      for (const E of g) {
        const w = E.targetId;
        if (!E.fromCache) {
          const D = v.Ts.get(w),
            B = D.snapshotVersion,
            F = D.withLastLimboFreeSnapshotVersion(B);
          v.Ts = v.Ts.insert(w, F);
        }
      }
    })(r.localStore, u));
}
async function XC(n, t) {
  const i = jt(n);
  if (!i.currentUser.isEqual(t)) {
    ut(dp, "User change. New user:", t.toKey());
    const r = await ZE(i.localStore, t);
    (i.currentUser = t),
      (function (u, f) {
        u.Ga.forEach((m) => {
          m.forEach((p) => {
            p.reject(new Tt(ot.CANCELLED, f));
          });
        }),
          u.Ga.clear();
      })(i, "'waitForPendingWrites' promise is rejected due to a user change."),
      i.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await ub(i, r.Rs);
  }
}
function ZC(n, t) {
  const i = jt(n),
    r = i.Ua.get(t);
  if (r && r.Ba) return Ht().add(r.key);
  {
    let o = Ht();
    const u = i.qa.get(t);
    if (!u) return o;
    for (const f of u) {
      const m = i.ka.get(f);
      o = o.unionWith(m.view.Sa);
    }
    return o;
  }
}
function cb(n) {
  const t = jt(n);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = ob.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = ZC.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = QC.bind(null, t)),
    (t.La.p_ = PC.bind(null, t.eventManager)),
    (t.La.Ja = LC.bind(null, t.eventManager)),
    t
  );
}
class Wc {
  constructor() {
    (this.kind = "memory"), (this.synchronizeTabs = !1);
  }
  async initialize(t) {
    (this.serializer = JE(t.databaseInfo.databaseId)),
      (this.sharedClientState = this.Za(t)),
      (this.persistence = this.Xa(t)),
      await this.persistence.start(),
      (this.localStore = this.eu(t)),
      (this.gcScheduler = this.tu(t, this.localStore)),
      (this.indexBackfillerScheduler = this.nu(t, this.localStore));
  }
  tu(t, i) {
    return null;
  }
  nu(t, i) {
    return null;
  }
  eu(t) {
    return uC(this.persistence, new aC(), t.initialUser, this.serializer);
  }
  Xa(t) {
    return new XE(sp.ri, this.serializer);
  }
  Za(t) {
    return new mC();
  }
  async terminate() {
    var t, i;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(),
      (i = this.indexBackfillerScheduler) === null || i === void 0 || i.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
Wc.provider = { build: () => new Wc() };
class $C extends Wc {
  constructor(t) {
    super(), (this.cacheSizeBytes = t);
  }
  tu(t, i) {
    ce(this.persistence.referenceDelegate instanceof Jc);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new Fx(r, t.asyncQueue, i);
  }
  Xa(t) {
    const i =
      this.cacheSizeBytes !== void 0
        ? mn.withCacheSize(this.cacheSizeBytes)
        : mn.DEFAULT;
    return new XE((r) => Jc.ri(r, i), this.serializer);
  }
}
class Em {
  async initialize(t, i) {
    this.localStore ||
      ((this.localStore = t.localStore),
      (this.sharedClientState = t.sharedClientState),
      (this.datastore = this.createDatastore(i)),
      (this.remoteStore = this.createRemoteStore(i)),
      (this.eventManager = this.createEventManager(i)),
      (this.syncEngine = this.createSyncEngine(i, !t.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        m_(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = XC.bind(
        null,
        this.syncEngine
      )),
      await VC(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return (function () {
      return new OC();
    })();
  }
  createDatastore(t) {
    const i = JE(t.databaseInfo.databaseId),
      r = (function (u) {
        return new _C(u);
      })(t.databaseInfo);
    return (function (u, f, m, p) {
      return new AC(u, f, m, p);
    })(t.authCredentials, t.appCheckCredentials, r, i);
  }
  createRemoteStore(t) {
    return (function (r, o, u, f, m) {
      return new wC(r, o, u, f, m);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (i) => m_(this.syncEngine, i, 0),
      (function () {
        return o_.D() ? new o_() : new pC();
      })()
    );
  }
  createSyncEngine(t, i) {
    return (function (o, u, f, m, p, g, v) {
      const E = new jC(o, u, f, m, p, g);
      return v && (E.ja = !0), E;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      i
    );
  }
  async terminate() {
    var t, i;
    await (async function (o) {
      const u = jt(o);
      ut(Qa, "RemoteStore shutting down."),
        u.W_.add(5),
        await Xl(u),
        u.z_.shutdown(),
        u.j_.set("Unknown");
    })(this.remoteStore),
      (t = this.datastore) === null || t === void 0 || t.terminate(),
      (i = this.eventManager) === null || i === void 0 || i.terminate();
  }
}
Em.provider = { build: () => new Em() };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JC {
  constructor(t) {
    (this.observer = t), (this.muted = !1);
  }
  next(t) {
    this.muted || (this.observer.next && this.iu(this.observer.next, t));
  }
  error(t) {
    this.muted ||
      (this.observer.error
        ? this.iu(this.observer.error, t)
        : Zi("Uncaught Error in snapshot listener:", t.toString()));
  }
  su() {
    this.muted = !0;
  }
  iu(t, i) {
    setTimeout(() => {
      this.muted || t(i);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Us = "FirestoreClient";
class WC {
  constructor(t, i, r, o, u) {
    (this.authCredentials = t),
      (this.appCheckCredentials = i),
      (this.asyncQueue = r),
      (this.databaseInfo = o),
      (this.user = tn.UNAUTHENTICATED),
      (this.clientId = yE.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = u),
      this.authCredentials.start(r, async (f) => {
        ut(Us, "Received user=", f.uid),
          await this.authCredentialListener(f),
          (this.user = f);
      }),
      this.appCheckCredentials.start(
        r,
        (f) => (
          ut(Us, "Received new app check token=", f),
          this.appCheckCredentialListener(f, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new Mr();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (i) {
          const r = ib(i, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
async function Ud(n, t) {
  n.asyncQueue.verifyOperationInProgress(),
    ut(Us, "Initializing OfflineComponentProvider");
  const i = n.configuration;
  await t.initialize(i);
  let r = i.initialUser;
  n.setCredentialChangeListener(async (o) => {
    r.isEqual(o) || (await ZE(t.localStore, o), (r = o));
  }),
    t.persistence.setDatabaseDeletedListener(() => n.terminate()),
    (n._offlineComponents = t);
}
async function g_(n, t) {
  n.asyncQueue.verifyOperationInProgress();
  const i = await t2(n);
  ut(Us, "Initializing OnlineComponentProvider"),
    await t.initialize(i, n.configuration),
    n.setCredentialChangeListener((r) => c_(t.remoteStore, r)),
    n.setAppCheckTokenChangeListener((r, o) => c_(t.remoteStore, o)),
    (n._onlineComponents = t);
}
async function t2(n) {
  if (!n._offlineComponents)
    if (n._uninitializedComponentsProvider) {
      ut(Us, "Using user provided OfflineComponentProvider");
      try {
        await Ud(n, n._uninitializedComponentsProvider._offline);
      } catch (t) {
        const i = t;
        if (
          !(function (o) {
            return o.name === "FirebaseError"
              ? o.code === ot.FAILED_PRECONDITION || o.code === ot.UNIMPLEMENTED
              : !(typeof DOMException < "u" && o instanceof DOMException) ||
                  o.code === 22 ||
                  o.code === 20 ||
                  o.code === 11;
          })(i)
        )
          throw i;
        qa(
          "Error using user provided cache. Falling back to memory cache: " + i
        ),
          await Ud(n, new Wc());
      }
    } else
      ut(Us, "Using default OfflineComponentProvider"),
        await Ud(n, new $C(void 0));
  return n._offlineComponents;
}
async function e2(n) {
  return (
    n._onlineComponents ||
      (n._uninitializedComponentsProvider
        ? (ut(Us, "Using user provided OnlineComponentProvider"),
          await g_(n, n._uninitializedComponentsProvider._online))
        : (ut(Us, "Using default OnlineComponentProvider"),
          await g_(n, new Em()))),
    n._onlineComponents
  );
}
async function n2(n) {
  const t = await e2(n),
    i = t.eventManager;
  return (
    (i.onListen = qC.bind(null, t.syncEngine)),
    (i.onUnlisten = FC.bind(null, t.syncEngine)),
    (i.onFirstRemoteStoreListen = HC.bind(null, t.syncEngine)),
    (i.onLastRemoteStoreUnlisten = KC.bind(null, t.syncEngine)),
    i
  );
}
function i2(n, t, i = {}) {
  const r = new Mr();
  return (
    n.asyncQueue.enqueueAndForget(async () =>
      (function (u, f, m, p, g) {
        const v = new JC({
            next: (w) => {
              v.su(), f.enqueueAndForget(() => NC(u, E));
              const D = w.docs.has(m);
              !D && w.fromCache
                ? g.reject(
                    new Tt(
                      ot.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : D && w.fromCache && p && p.source === "server"
                ? g.reject(
                    new Tt(
                      ot.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : g.resolve(w);
            },
            error: (w) => g.reject(w),
          }),
          E = new kC(Wm(m.path), v, { includeMetadataChanges: !0, Ta: !0 });
        return IC(u, E);
      })(await n2(n), n.asyncQueue, t, i, r)
    ),
    r.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hb(n) {
  const t = {};
  return (
    n.timeoutSeconds !== void 0 && (t.timeoutSeconds = n.timeoutSeconds), t
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y_ = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function s2(n, t, i) {
  if (!i)
    throw new Tt(
      ot.INVALID_ARGUMENT,
      `Function ${n}() cannot be called with an empty ${t}.`
    );
}
function r2(n, t, i, r) {
  if (t === !0 && r === !0)
    throw new Tt(ot.INVALID_ARGUMENT, `${n} and ${i} cannot be used together.`);
}
function v_(n) {
  if (!Et.isDocumentKey(n))
    throw new Tt(
      ot.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`
    );
}
function a2(n) {
  if (n === void 0) return "undefined";
  if (n === null) return "null";
  if (typeof n == "string")
    return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean") return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(n);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : xt();
}
function bm(n, t) {
  if (("_delegate" in n && (n = n._delegate), !(n instanceof t))) {
    if (t.name === n.constructor.name)
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const i = a2(n);
      throw new Tt(
        ot.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${i}`
      );
    }
  }
  return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fb = "firestore.googleapis.com",
  __ = !0;
class T_ {
  constructor(t) {
    var i, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = fb), (this.ssl = __);
    } else
      (this.host = t.host),
        (this.ssl = (i = t.ssl) !== null && i !== void 0 ? i : __);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = YE;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < Hx)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    r2(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = hb(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (u) {
        if (u.timeoutSeconds !== void 0) {
          if (isNaN(u.timeoutSeconds))
            throw new Tt(
              ot.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`
            );
          if (u.timeoutSeconds < 5)
            throw new Tt(
              ot.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (u.timeoutSeconds > 30)
            throw new Tt(
              ot.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, o) {
        return r.timeoutSeconds === o.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class pp {
  constructor(t, i, r, o) {
    (this._authCredentials = t),
      (this._appCheckCredentials = i),
      (this._databaseId = r),
      (this._app = o),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new T_({})),
      (this._settingsFrozen = !1),
      (this._emulatorOptions = {}),
      (this._terminateTask = "notTerminated");
  }
  get app() {
    if (!this._app)
      throw new Tt(
        ot.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new Tt(
        ot.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new T_(t)),
      (this._emulatorOptions = t.emulatorOptions || {}),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new vR();
          switch (r.type) {
            case "firstParty":
              return new bR(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case "provider":
              return r.client;
            default:
              throw new Tt(
                ot.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (i) {
        const r = y_.get(i);
        r &&
          (ut("ComponentProvider", "Removing Datastore"),
          y_.delete(i),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function o2(n, t, i, r = {}) {
  var o;
  const u = (n = bm(n, pp))._getSettings(),
    f = Object.assign(Object.assign({}, u), {
      emulatorOptions: n._getEmulatorOptions(),
    }),
    m = `${t}:${i}`;
  u.host !== fb &&
    u.host !== m &&
    qa(
      "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
    );
  const p = Object.assign(Object.assign({}, u), {
    host: m,
    ssl: !1,
    emulatorOptions: r,
  });
  if (!Gc(p, f) && (n._setSettings(p), r.mockUserToken)) {
    let g, v;
    if (typeof r.mockUserToken == "string")
      (g = r.mockUserToken), (v = tn.MOCK_USER);
    else {
      g = Z1(
        r.mockUserToken,
        (o = n._app) === null || o === void 0 ? void 0 : o.options.projectId
      );
      const E = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!E)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      v = new tn(E);
    }
    n._authCredentials = new _R(new pE(g, v));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gp {
  constructor(t, i, r) {
    (this.converter = i),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = t);
  }
  withConverter(t) {
    return new gp(this.firestore, t, this._query);
  }
}
class Yi {
  constructor(t, i, r) {
    (this.converter = i),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new kl(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new Yi(this.firestore, t, this._key);
  }
}
class kl extends gp {
  constructor(t, i, r) {
    super(t, i, Wm(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new Yi(this.firestore, null, new Et(t));
  }
  withConverter(t) {
    return new kl(this.firestore, t, this._path);
  }
}
function l2(n, t, ...i) {
  if (
    ((n = rw(n)),
    arguments.length === 1 && (t = yE.newId()),
    s2("doc", "path", t),
    n instanceof pp)
  ) {
    const r = pe.fromString(t, ...i);
    return v_(r), new Yi(n, null, new Et(r));
  }
  {
    if (!(n instanceof Yi || n instanceof kl))
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = n._path.child(pe.fromString(t, ...i));
    return (
      v_(r),
      new Yi(n.firestore, n instanceof kl ? n.converter : null, new Et(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const E_ = "AsyncQueue";
class b_ {
  constructor(t = Promise.resolve()) {
    (this.Vu = []),
      (this.mu = !1),
      (this.fu = []),
      (this.gu = null),
      (this.pu = !1),
      (this.yu = !1),
      (this.wu = []),
      (this.a_ = new WE(this, "async_queue_retry")),
      (this.Su = () => {
        const r = kd();
        r && ut(E_, "Visibility state changed to " + r.visibilityState),
          this.a_.t_();
      }),
      (this.bu = t);
    const i = kd();
    i &&
      typeof i.addEventListener == "function" &&
      i.addEventListener("visibilitychange", this.Su);
  }
  get isShuttingDown() {
    return this.mu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Du(), this.vu(t);
  }
  enterRestrictedMode(t) {
    if (!this.mu) {
      (this.mu = !0), (this.yu = t || !1);
      const i = kd();
      i &&
        typeof i.removeEventListener == "function" &&
        i.removeEventListener("visibilitychange", this.Su);
    }
  }
  enqueue(t) {
    if ((this.Du(), this.mu)) return new Promise(() => {});
    const i = new Mr();
    return this.vu(() =>
      this.mu && this.yu
        ? Promise.resolve()
        : (t().then(i.resolve, i.reject), i.promise)
    ).then(() => i.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Vu.push(t), this.Cu()));
  }
  async Cu() {
    if (this.Vu.length !== 0) {
      try {
        await this.Vu[0](), this.Vu.shift(), this.a_.reset();
      } catch (t) {
        if (!Wa(t)) throw t;
        ut(E_, "Operation failed with retryable error: " + t);
      }
      this.Vu.length > 0 && this.a_.Xo(() => this.Cu());
    }
  }
  vu(t) {
    const i = this.bu.then(
      () => (
        (this.pu = !0),
        t()
          .catch((r) => {
            (this.gu = r), (this.pu = !1);
            const o = (function (f) {
              let m = f.message || "";
              return (
                f.stack &&
                  (m = f.stack.includes(f.message)
                    ? f.stack
                    : f.message +
                      `
` +
                      f.stack),
                m
              );
            })(r);
            throw (Zi("INTERNAL UNHANDLED ERROR: ", o), r);
          })
          .then((r) => ((this.pu = !1), r))
      )
    );
    return (this.bu = i), i;
  }
  enqueueAfterDelay(t, i, r) {
    this.Du(), this.wu.indexOf(t) > -1 && (i = 0);
    const o = hp.createAndSchedule(this, t, i, r, (u) => this.Fu(u));
    return this.fu.push(o), o;
  }
  Du() {
    this.gu && xt();
  }
  verifyOperationInProgress() {}
  async Mu() {
    let t;
    do (t = this.bu), await t;
    while (t !== this.bu);
  }
  xu(t) {
    for (const i of this.fu) if (i.timerId === t) return !0;
    return !1;
  }
  Ou(t) {
    return this.Mu().then(() => {
      this.fu.sort((i, r) => i.targetTimeMs - r.targetTimeMs);
      for (const i of this.fu)
        if ((i.skipDelay(), t !== "all" && i.timerId === t)) break;
      return this.Mu();
    });
  }
  Nu(t) {
    this.wu.push(t);
  }
  Fu(t) {
    const i = this.fu.indexOf(t);
    this.fu.splice(i, 1);
  }
}
class db extends pp {
  constructor(t, i, r, o) {
    super(t, i, r, o),
      (this.type = "firestore"),
      (this._queue = new b_()),
      (this._persistenceKey = (o == null ? void 0 : o.name) || "[DEFAULT]");
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate();
      (this._queue = new b_(t)), (this._firestoreClient = void 0), await t;
    }
  }
}
function u2(n, t) {
  const i = typeof n == "object" ? n : oR(),
    r = typeof n == "string" ? n : Qc,
    o = nR(i, "firestore").getImmediate({ identifier: r });
  if (!o._initialized) {
    const u = Y1("firestore");
    u && o2(o, ...u);
  }
  return o;
}
function c2(n) {
  if (n._terminated)
    throw new Tt(
      ot.FAILED_PRECONDITION,
      "The client has already been terminated."
    );
  return n._firestoreClient || h2(n), n._firestoreClient;
}
function h2(n) {
  var t, i, r;
  const o = n._freezeSettings(),
    u = (function (m, p, g, v) {
      return new UR(
        m,
        p,
        g,
        v.host,
        v.ssl,
        v.experimentalForceLongPolling,
        v.experimentalAutoDetectLongPolling,
        hb(v.experimentalLongPollingOptions),
        v.useFetchStreams
      );
    })(
      n._databaseId,
      ((t = n._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      n._persistenceKey,
      o
    );
  n._componentsProvider ||
    (!((i = o.localCache) === null || i === void 0) &&
      i._offlineComponentProvider &&
      !((r = o.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (n._componentsProvider = {
        _offline: o.localCache._offlineComponentProvider,
        _online: o.localCache._onlineComponentProvider,
      })),
    (n._firestoreClient = new WC(
      n._authCredentials,
      n._appCheckCredentials,
      n._queue,
      u,
      n._componentsProvider &&
        (function (m) {
          const p = m == null ? void 0 : m._online.build();
          return {
            _offline: m == null ? void 0 : m._offline.build(p),
            _online: p,
          };
        })(n._componentsProvider)
    ));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class th {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new th(Ye.fromBase64String(t));
    } catch (i) {
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + i
      );
    }
  }
  static fromUint8Array(t) {
    return new th(Ye.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mb {
  constructor(...t) {
    for (let i = 0; i < t.length; ++i)
      if (t[i].length === 0)
        throw new Tt(
          ot.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new un(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f2 {
  constructor(t, i) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t
      );
    if (!isFinite(i) || i < -180 || i > 180)
      throw new Tt(
        ot.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + i
      );
    (this._lat = t), (this._long = i);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return Ot(this._lat, t._lat) || Ot(this._long, t._long);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d2 {
  constructor(t) {
    this._values = (t || []).map((i) => i);
  }
  toArray() {
    return this._values.map((t) => t);
  }
  isEqual(t) {
    return (function (r, o) {
      if (r.length !== o.length) return !1;
      for (let u = 0; u < r.length; ++u) if (r[u] !== o[u]) return !1;
      return !0;
    })(this._values, t._values);
  }
}
const m2 = new RegExp("[~\\*/\\[\\]]");
function p2(n, t, i) {
  if (t.search(m2) >= 0)
    throw A_(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n
    );
  try {
    return new mb(...t.split("."))._internalPath;
  } catch {
    throw A_(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n
    );
  }
}
function A_(n, t, i, r, o) {
  let u = `Function ${t}() called with invalid data`;
  u += ". ";
  let f = "";
  return new Tt(ot.INVALID_ARGUMENT, u + n + f);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pb {
  constructor(t, i, r, o, u) {
    (this._firestore = t),
      (this._userDataWriter = i),
      (this._key = r),
      (this._document = o),
      (this._converter = u);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Yi(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new g2(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t) {
    if (this._document) {
      const i = this._document.data.field(gb("DocumentSnapshot.get", t));
      if (i !== null) return this._userDataWriter.convertValue(i);
    }
  }
}
class g2 extends pb {
  data() {
    return super.data();
  }
}
function gb(n, t) {
  return typeof t == "string"
    ? p2(n, t)
    : t instanceof mb
    ? t._internalPath
    : t._delegate._internalPath;
}
class y2 {
  convertValue(t, i = "none") {
    switch (Ls(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return Te(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, i);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(Ps(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, i);
      case 11:
        return this.convertObject(t.mapValue, i);
      case 10:
        return this.convertVectorValue(t.mapValue);
      default:
        throw xt();
    }
  }
  convertObject(t, i) {
    return this.convertObjectMap(t.fields, i);
  }
  convertObjectMap(t, i = "none") {
    const r = {};
    return (
      Ql(t, (o, u) => {
        r[o] = this.convertValue(u, i);
      }),
      r
    );
  }
  convertVectorValue(t) {
    var i, r, o;
    const u =
      (o =
        (r =
          (i = t.fields) === null || i === void 0
            ? void 0
            : i[om].arrayValue) === null || r === void 0
          ? void 0
          : r.values) === null || o === void 0
        ? void 0
        : o.map((f) => Te(f.doubleValue));
    return new d2(u);
  }
  convertGeoPoint(t) {
    return new f2(Te(t.latitude), Te(t.longitude));
  }
  convertArray(t, i) {
    return (t.values || []).map((r) => this.convertValue(r, i));
  }
  convertServerTimestamp(t, i) {
    switch (i) {
      case "previous":
        const r = hh(t);
        return r == null ? null : this.convertValue(r, i);
      case "estimate":
        return this.convertTimestamp(Nl(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const i = Ns(t);
    return new pn(i.seconds, i.nanos);
  }
  convertDocumentKey(t, i) {
    const r = pe.fromString(t);
    ce(QE(r));
    const o = new Pl(r.get(1), r.get(3)),
      u = new Et(r.popFirst(5));
    return (
      o.isEqual(i) ||
        Zi(
          `Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`
        ),
      u
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v2 {
  constructor(t, i) {
    (this.hasPendingWrites = t), (this.fromCache = i);
  }
  isEqual(t) {
    return (
      this.hasPendingWrites === t.hasPendingWrites &&
      this.fromCache === t.fromCache
    );
  }
}
class yb extends pb {
  constructor(t, i, r, o, u, f) {
    super(t, i, r, o, f),
      (this._firestore = t),
      (this._firestoreImpl = t),
      (this.metadata = u);
  }
  exists() {
    return super.exists();
  }
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const i = new _2(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(i, t);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        t.serverTimestamps
      );
    }
  }
  get(t, i = {}) {
    if (this._document) {
      const r = this._document.data.field(gb("DocumentSnapshot.get", t));
      if (r !== null)
        return this._userDataWriter.convertValue(r, i.serverTimestamps);
    }
  }
}
class _2 extends yb {
  data(t = {}) {
    return super.data(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T2(n) {
  n = bm(n, Yi);
  const t = bm(n.firestore, db);
  return i2(c2(t), n._key).then((i) => b2(t, n, i));
}
class E2 extends y2 {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new th(t);
  }
  convertReference(t) {
    const i = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Yi(this.firestore, null, i);
  }
}
function b2(n, t, i) {
  const r = i.docs.get(t._key),
    o = new E2(n);
  return new yb(
    n,
    o,
    t._key,
    r,
    new v2(i.hasPendingWrites, i.fromCache),
    t.converter
  );
}
(function (t, i = !0) {
  (function (o) {
    Ja = o;
  })(aR),
    Kc(
      new Ml(
        "firestore",
        (r, { instanceIdentifier: o, options: u }) => {
          const f = r.getProvider("app").getImmediate(),
            m = new db(
              new TR(r.getProvider("auth-internal")),
              new AR(f, r.getProvider("app-check-internal")),
              (function (g, v) {
                if (
                  !Object.prototype.hasOwnProperty.apply(g.options, [
                    "projectId",
                  ])
                )
                  throw new Tt(
                    ot.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Pl(g.options.projectId, v);
              })(f, o),
              f
            );
          return (
            (u = Object.assign({ useFetchStreams: i }, u)), m._setSettings(u), m
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    Ba(C0, D0, t),
    Ba(C0, D0, "esm2017");
})();
var A2 = "firebase",
  S2 = "11.6.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ba(A2, S2, "app");
const w2 = {
    apiKey: "AIzaSyA8kmXG9c_3inTaMvIgUwPVcHa92FNF324",
    authDomain: "lele-df605.firebaseapp.com",
    projectId: "lele-df605",
    storageBucket: "lele-df605.firebasestorage.app",
    messagingSenderId: "491417345289",
    appId: "1:491417345289:web:4fd7030c112a4a653bc7d8",
    measurementId: "G-TCKJJLF1PJ",
  },
  R2 = aE(w2),
  x2 = u2(R2),
  vb = pt.createContext({});
function C2(n) {
  const t = pt.useRef(null);
  return t.current === null && (t.current = n()), t.current;
}
const yp = typeof window < "u",
  D2 = yp ? pt.useLayoutEffect : pt.useEffect,
  vp = pt.createContext(null),
  _b = pt.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function V2(n = !0) {
  const t = pt.useContext(vp);
  if (t === null) return [!0, null];
  const { isPresent: i, onExitComplete: r, register: o } = t,
    u = pt.useId();
  pt.useEffect(() => {
    if (n) return o(u);
  }, [n]);
  const f = pt.useCallback(() => n && r && r(u), [u, r, n]);
  return !i && r ? [!1, f] : [!0];
}
let Tb = () => {};
const Hn = (n) => n,
  M2 = { useManualTiming: !1 },
  Mc = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  S_ = { value: null };
function O2(n, t) {
  let i = new Set(),
    r = new Set(),
    o = !1,
    u = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    p = 0;
  function g(E) {
    f.has(E) && (v.schedule(E), n()), p++, E(m);
  }
  const v = {
    schedule: (E, w = !1, D = !1) => {
      const F = D && o ? i : r;
      return w && f.add(E), F.has(E) || F.add(E), E;
    },
    cancel: (E) => {
      r.delete(E), f.delete(E);
    },
    process: (E) => {
      if (((m = E), o)) {
        u = !0;
        return;
      }
      (o = !0),
        ([i, r] = [r, i]),
        i.forEach(g),
        t && S_.value && S_.value.frameloop[t].push(p),
        (p = 0),
        i.clear(),
        (o = !1),
        u && ((u = !1), v.process(E));
    },
  };
  return v;
}
const I2 = 40;
function Eb(n, t) {
  let i = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (i = !0),
    f = Mc.reduce(($, st) => (($[st] = O2(u, t ? st : void 0)), $), {}),
    {
      read: m,
      resolveKeyframes: p,
      update: g,
      preRender: v,
      render: E,
      postRender: w,
    } = f,
    D = () => {
      const $ = performance.now();
      (i = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min($ - o.timestamp, I2), 1)),
        (o.timestamp = $),
        (o.isProcessing = !0),
        m.process(o),
        p.process(o),
        g.process(o),
        v.process(o),
        E.process(o),
        w.process(o),
        (o.isProcessing = !1),
        i && t && ((r = !1), n(D));
    },
    B = () => {
      (i = !0), (r = !0), o.isProcessing || n(D);
    };
  return {
    schedule: Mc.reduce(($, st) => {
      const nt = f[st];
      return (
        ($[st] = (mt, it = !1, ct = !1) => (i || B(), nt.schedule(mt, it, ct))),
        $
      );
    }, {}),
    cancel: ($) => {
      for (let st = 0; st < Mc.length; st++) f[Mc[st]].cancel($);
    },
    state: o,
    steps: f,
  };
}
const {
    schedule: se,
    cancel: Bs,
    state: Ke,
    steps: Bd,
  } = Eb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Hn, !0),
  bb = pt.createContext({ strict: !1 }),
  w_ = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xa = {};
for (const n in w_) Xa[n] = { isEnabled: (t) => w_[n].some((i) => !!t[i]) };
function N2(n) {
  for (const t in n) Xa[t] = { ...Xa[t], ...n[t] };
}
const P2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function eh(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    P2.has(n)
  );
}
let Ab = (n) => !eh(n);
function L2(n) {
  n && (Ab = (t) => (t.startsWith("on") ? !eh(t) : n(t)));
}
try {
  L2(require("@emotion/is-prop-valid").default);
} catch {}
function k2(n, t, i) {
  const r = {};
  for (const o in n)
    (o === "values" && typeof n.values == "object") ||
      ((Ab(o) ||
        (i === !0 && eh(o)) ||
        (!t && !eh(o)) ||
        (n.draggable && o.startsWith("onDrag"))) &&
        (r[o] = n[o]));
  return r;
}
function U2(n) {
  if (typeof Proxy > "u") return n;
  const t = new Map(),
    i = (...r) => n(...r);
  return new Proxy(i, {
    get: (r, o) =>
      o === "create" ? n : (t.has(o) || t.set(o, n(o)), t.get(o)),
  });
}
const _h = pt.createContext({});
function Th(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Ul(n) {
  return typeof n == "string" || Array.isArray(n);
}
const _p = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Tp = ["initial", ..._p];
function Eh(n) {
  return Th(n.animate) || Tp.some((t) => Ul(n[t]));
}
function Sb(n) {
  return !!(Eh(n) || n.variants);
}
function B2(n, t) {
  if (Eh(n)) {
    const { initial: i, animate: r } = n;
    return {
      initial: i === !1 || Ul(i) ? i : void 0,
      animate: Ul(r) ? r : void 0,
    };
  }
  return n.inherit !== !1 ? t : {};
}
function z2(n) {
  const { initial: t, animate: i } = B2(n, pt.useContext(_h));
  return pt.useMemo(() => ({ initial: t, animate: i }), [R_(t), R_(i)]);
}
function R_(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const j2 = Symbol.for("motionComponentSymbol");
function Na(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function q2(n, t, i) {
  return pt.useCallback(
    (r) => {
      r && n.onMount && n.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        i && (typeof i == "function" ? i(r) : Na(i) && (i.current = r));
    },
    [t]
  );
}
const { schedule: Ep } = Eb(queueMicrotask, !1),
  bp = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  H2 = "framerAppearId",
  wb = "data-" + bp(H2),
  Rb = pt.createContext({});
function G2(n, t, i, r, o) {
  var F, H;
  const { visualElement: u } = pt.useContext(_h),
    f = pt.useContext(bb),
    m = pt.useContext(vp),
    p = pt.useContext(_b).reducedMotion,
    g = pt.useRef(null);
  (r = r || f.renderer),
    !g.current &&
      r &&
      (g.current = r(n, {
        visualState: t,
        parent: u,
        props: i,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const v = g.current,
    E = pt.useContext(Rb);
  v &&
    !v.projection &&
    o &&
    (v.type === "html" || v.type === "svg") &&
    F2(g.current, i, o, E);
  const w = pt.useRef(!1);
  pt.useInsertionEffect(() => {
    v && w.current && v.update(i, m);
  });
  const D = i[wb],
    B = pt.useRef(
      !!D &&
        !((F = window.MotionHandoffIsComplete) != null && F.call(window, D)) &&
        ((H = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : H.call(window, D))
    );
  return (
    D2(() => {
      v &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        Ep.render(v.render),
        B.current && v.animationState && v.animationState.animateChanges());
    }),
    pt.useEffect(() => {
      v &&
        (!B.current && v.animationState && v.animationState.animateChanges(),
        B.current &&
          (queueMicrotask(() => {
            var $;
            ($ = window.MotionHandoffMarkAsComplete) == null ||
              $.call(window, D);
          }),
          (B.current = !1)));
    }),
    v
  );
}
function F2(n, t, i, r) {
  const {
    layoutId: o,
    layout: u,
    drag: f,
    dragConstraints: m,
    layoutScroll: p,
    layoutRoot: g,
  } = t;
  (n.projection = new i(
    n.latestValues,
    t["data-framer-portal-id"] ? void 0 : xb(n.parent)
  )),
    n.projection.setOptions({
      layoutId: o,
      layout: u,
      alwaysMeasureLayout: !!f || (m && Na(m)),
      visualElement: n,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: r,
      layoutScroll: p,
      layoutRoot: g,
    });
}
function xb(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : xb(n.parent);
}
function K2({
  preloadedFeatures: n,
  createVisualElement: t,
  useRender: i,
  useVisualState: r,
  Component: o,
}) {
  n && N2(n);
  function u(m, p) {
    let g;
    const v = { ...pt.useContext(_b), ...m, layoutId: Q2(m) },
      { isStatic: E } = v,
      w = z2(m),
      D = r(m, E);
    if (!E && yp) {
      Y2();
      const B = X2(v);
      (g = B.MeasureLayout),
        (w.visualElement = G2(o, D, v, t, B.ProjectionNode));
    }
    return qt.jsxs(_h.Provider, {
      value: w,
      children: [
        g && w.visualElement
          ? qt.jsx(g, { visualElement: w.visualElement, ...v })
          : null,
        i(o, m, q2(D, w.visualElement, p), D, E, w.visualElement),
      ],
    });
  }
  u.displayName = `motion.${
    typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`
  }`;
  const f = pt.forwardRef(u);
  return (f[j2] = o), f;
}
function Q2({ layoutId: n }) {
  const t = pt.useContext(vb).id;
  return t && n !== void 0 ? t + "-" + n : n;
}
function Y2(n, t) {
  pt.useContext(bb).strict;
}
function X2(n) {
  const { drag: t, layout: i } = Xa;
  if (!t && !i) return {};
  const r = { ...t, ...i };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(n)) || (i != null && i.isEnabled(n))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Cb = (n) => (t) => typeof t == "string" && t.startsWith(n),
  Ap = Cb("--"),
  Z2 = Cb("var(--"),
  Sp = (n) => (Z2(n) ? $2.test(n.split("/*")[0].trim()) : !1),
  $2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Bl = {};
function J2(n) {
  for (const t in n) (Bl[t] = n[t]), Ap(t) && (Bl[t].isCSSVariable = !0);
}
const eo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Lr = new Set(eo);
function Db(n, { layout: t, layoutId: i }) {
  return (
    Lr.has(n) ||
    n.startsWith("origin") ||
    ((t || i !== void 0) && (!!Bl[n] || n === "opacity"))
  );
}
const nn = (n) => !!(n && n.getVelocity),
  Vb = (n, t) => (t && typeof n == "number" ? t.transform(n) : n),
  $i = (n, t, i) => (i > t ? t : i < n ? n : i),
  no = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  zl = { ...no, transform: (n) => $i(0, 1, n) },
  Oc = { ...no, default: 1 },
  $l = (n) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(n) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${n}`,
  }),
  xs = $l("deg"),
  gi = $l("%"),
  _t = $l("px"),
  W2 = $l("vh"),
  tD = $l("vw"),
  x_ = {
    ...gi,
    parse: (n) => gi.parse(n) / 100,
    transform: (n) => gi.transform(n * 100),
  },
  eD = {
    borderWidth: _t,
    borderTopWidth: _t,
    borderRightWidth: _t,
    borderBottomWidth: _t,
    borderLeftWidth: _t,
    borderRadius: _t,
    radius: _t,
    borderTopLeftRadius: _t,
    borderTopRightRadius: _t,
    borderBottomRightRadius: _t,
    borderBottomLeftRadius: _t,
    width: _t,
    maxWidth: _t,
    height: _t,
    maxHeight: _t,
    top: _t,
    right: _t,
    bottom: _t,
    left: _t,
    padding: _t,
    paddingTop: _t,
    paddingRight: _t,
    paddingBottom: _t,
    paddingLeft: _t,
    margin: _t,
    marginTop: _t,
    marginRight: _t,
    marginBottom: _t,
    marginLeft: _t,
    backgroundPositionX: _t,
    backgroundPositionY: _t,
  },
  nD = {
    rotate: xs,
    rotateX: xs,
    rotateY: xs,
    rotateZ: xs,
    scale: Oc,
    scaleX: Oc,
    scaleY: Oc,
    scaleZ: Oc,
    skew: xs,
    skewX: xs,
    skewY: xs,
    distance: _t,
    translateX: _t,
    translateY: _t,
    translateZ: _t,
    x: _t,
    y: _t,
    z: _t,
    perspective: _t,
    transformPerspective: _t,
    opacity: zl,
    originX: x_,
    originY: x_,
    originZ: _t,
  },
  C_ = { ...no, transform: Math.round },
  wp = {
    ...eD,
    ...nD,
    zIndex: C_,
    size: _t,
    fillOpacity: zl,
    strokeOpacity: zl,
    numOctaves: C_,
  },
  iD = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  sD = eo.length;
function rD(n, t, i) {
  let r = "",
    o = !0;
  for (let u = 0; u < sD; u++) {
    const f = eo[u],
      m = n[f];
    if (m === void 0) continue;
    let p = !0;
    if (
      (typeof m == "number"
        ? (p = m === (f.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(m) === 0),
      !p || i)
    ) {
      const g = Vb(m, wp[f]);
      if (!p) {
        o = !1;
        const v = iD[f] || f;
        r += `${v}(${g}) `;
      }
      i && (t[f] = g);
    }
  }
  return (r = r.trim()), i ? (r = i(t, o ? "" : r)) : o && (r = "none"), r;
}
function Rp(n, t, i) {
  const { style: r, vars: o, transformOrigin: u } = n;
  let f = !1,
    m = !1;
  for (const p in t) {
    const g = t[p];
    if (Lr.has(p)) {
      f = !0;
      continue;
    } else if (Ap(p)) {
      o[p] = g;
      continue;
    } else {
      const v = Vb(g, wp[p]);
      p.startsWith("origin") ? ((m = !0), (u[p] = v)) : (r[p] = v);
    }
  }
  if (
    (t.transform ||
      (f || i
        ? (r.transform = rD(t, n.transform, i))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = u;
    r.transformOrigin = `${p} ${g} ${v}`;
  }
}
const xp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Mb(n, t, i) {
  for (const r in t) !nn(t[r]) && !Db(r, i) && (n[r] = t[r]);
}
function aD({ transformTemplate: n }, t) {
  return pt.useMemo(() => {
    const i = xp();
    return Rp(i, t, n), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function oD(n, t) {
  const i = n.style || {},
    r = {};
  return Mb(r, i, n), Object.assign(r, aD(n, t)), r;
}
function lD(n, t) {
  const i = {},
    r = oD(n, t);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((i.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (i.tabIndex = 0),
    (i.style = r),
    i
  );
}
const uD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Cp(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(uD.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
const cD = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  hD = { offset: "strokeDashoffset", array: "strokeDasharray" };
function fD(n, t, i = 1, r = 0, o = !0) {
  n.pathLength = 1;
  const u = o ? cD : hD;
  n[u.offset] = _t.transform(-r);
  const f = _t.transform(t),
    m = _t.transform(i);
  n[u.array] = `${f} ${m}`;
}
function D_(n, t, i) {
  return typeof n == "string" ? n : _t.transform(t + i * n);
}
function dD(n, t, i) {
  const r = D_(t, n.x, n.width),
    o = D_(i, n.y, n.height);
  return `${r} ${o}`;
}
function Dp(
  n,
  {
    attrX: t,
    attrY: i,
    attrScale: r,
    originX: o,
    originY: u,
    pathLength: f,
    pathSpacing: m = 1,
    pathOffset: p = 0,
    ...g
  },
  v,
  E
) {
  if ((Rp(n, g, E), v)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: w, style: D, dimensions: B } = n;
  w.transform && (B && (D.transform = w.transform), delete w.transform),
    B &&
      (o !== void 0 || u !== void 0 || D.transform) &&
      (D.transformOrigin = dD(
        B,
        o !== void 0 ? o : 0.5,
        u !== void 0 ? u : 0.5
      )),
    t !== void 0 && (w.x = t),
    i !== void 0 && (w.y = i),
    r !== void 0 && (w.scale = r),
    f !== void 0 && fD(w, f, m, p, !1);
}
const Ob = () => ({ ...xp(), attrs: {} }),
  Vp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function mD(n, t, i, r) {
  const o = pt.useMemo(() => {
    const u = Ob();
    return (
      Dp(u, t, Vp(r), n.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [t]);
  if (n.style) {
    const u = {};
    Mb(u, n.style, n), (o.style = { ...u, ...o.style });
  }
  return o;
}
function pD(n = !1) {
  return (i, r, o, { latestValues: u }, f) => {
    const p = (Cp(i) ? mD : lD)(r, u, f, i),
      g = k2(r, typeof i == "string", n),
      v = i !== pt.Fragment ? { ...g, ...p, ref: o } : {},
      { children: E } = r,
      w = pt.useMemo(() => (nn(E) ? E.get() : E), [E]);
    return pt.createElement(i, { ...v, children: w });
  };
}
function V_(n) {
  const t = [{}, {}];
  return (
    n == null ||
      n.values.forEach((i, r) => {
        (t[0][r] = i.get()), (t[1][r] = i.getVelocity());
      }),
    t
  );
}
function Mp(n, t, i, r) {
  if (typeof t == "function") {
    const [o, u] = V_(r);
    t = t(i !== void 0 ? i : n.custom, o, u);
  }
  if (
    (typeof t == "string" && (t = n.variants && n.variants[t]),
    typeof t == "function")
  ) {
    const [o, u] = V_(r);
    t = t(i !== void 0 ? i : n.custom, o, u);
  }
  return t;
}
const Am = (n) => Array.isArray(n),
  gD = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  yD = (n) => (Am(n) ? n[n.length - 1] || 0 : n);
function zc(n) {
  const t = nn(n) ? n.get() : n;
  return gD(t) ? t.toValue() : t;
}
function vD(
  { scrapeMotionValuesFromProps: n, createRenderState: t, onUpdate: i },
  r,
  o,
  u
) {
  const f = { latestValues: _D(r, o, u, n), renderState: t() };
  return (
    i &&
      ((f.onMount = (m) => i({ props: r, current: m, ...f })),
      (f.onUpdate = (m) => i(m))),
    f
  );
}
const Ib = (n) => (t, i) => {
  const r = pt.useContext(_h),
    o = pt.useContext(vp),
    u = () => vD(n, t, r, o);
  return i ? u() : C2(u);
};
function _D(n, t, i, r) {
  const o = {},
    u = r(n, {});
  for (const w in u) o[w] = zc(u[w]);
  let { initial: f, animate: m } = n;
  const p = Eh(n),
    g = Sb(n);
  t &&
    g &&
    !p &&
    n.inherit !== !1 &&
    (f === void 0 && (f = t.initial), m === void 0 && (m = t.animate));
  let v = i ? i.initial === !1 : !1;
  v = v || f === !1;
  const E = v ? m : f;
  if (E && typeof E != "boolean" && !Th(E)) {
    const w = Array.isArray(E) ? E : [E];
    for (let D = 0; D < w.length; D++) {
      const B = Mp(n, w[D]);
      if (B) {
        const { transitionEnd: F, transition: H, ...$ } = B;
        for (const st in $) {
          let nt = $[st];
          if (Array.isArray(nt)) {
            const mt = v ? nt.length - 1 : 0;
            nt = nt[mt];
          }
          nt !== null && (o[st] = nt);
        }
        for (const st in F) o[st] = F[st];
      }
    }
  }
  return o;
}
function Op(n, t, i) {
  var u;
  const { style: r } = n,
    o = {};
  for (const f in r)
    (nn(r[f]) ||
      (t.style && nn(t.style[f])) ||
      Db(f, n) ||
      ((u = i == null ? void 0 : i.getValue(f)) == null
        ? void 0
        : u.liveStyle) !== void 0) &&
      (o[f] = r[f]);
  return o;
}
const TD = {
  useVisualState: Ib({
    scrapeMotionValuesFromProps: Op,
    createRenderState: xp,
  }),
};
function Nb(n, t) {
  try {
    t.dimensions =
      typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function Pb(n, { style: t, vars: i }, r, o) {
  Object.assign(n.style, t, o && o.getProjectionStyles(r));
  for (const u in i) n.style.setProperty(u, i[u]);
}
const Lb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function kb(n, t, i, r) {
  Pb(n, t, void 0, r);
  for (const o in t.attrs) n.setAttribute(Lb.has(o) ? o : bp(o), t.attrs[o]);
}
function Ub(n, t, i) {
  const r = Op(n, t, i);
  for (const o in n)
    if (nn(n[o]) || nn(t[o])) {
      const u =
        eo.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[u] = n[o];
    }
  return r;
}
const M_ = ["x", "y", "width", "height", "cx", "cy", "r"],
  ED = {
    useVisualState: Ib({
      scrapeMotionValuesFromProps: Ub,
      createRenderState: Ob,
      onUpdate: ({
        props: n,
        prevProps: t,
        current: i,
        renderState: r,
        latestValues: o,
      }) => {
        if (!i) return;
        let u = !!n.drag;
        if (!u) {
          for (const m in o)
            if (Lr.has(m)) {
              u = !0;
              break;
            }
        }
        if (!u) return;
        let f = !t;
        if (t)
          for (let m = 0; m < M_.length; m++) {
            const p = M_[m];
            n[p] !== t[p] && (f = !0);
          }
        f &&
          se.read(() => {
            Nb(i, r),
              se.render(() => {
                Dp(r, o, Vp(i.tagName), n.transformTemplate), kb(i, r);
              });
          });
      },
    }),
  };
function bD(n, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Cp(r) ? ED : TD),
      preloadedFeatures: n,
      useRender: pD(o),
      createVisualElement: t,
      Component: r,
    };
    return K2(f);
  };
}
function jl(n, t, i) {
  const r = n.getProps();
  return Mp(r, t, i !== void 0 ? i : r.custom, n);
}
function Ip(n, t) {
  return (n == null ? void 0 : n[t]) ?? (n == null ? void 0 : n.default) ?? n;
}
const Bb = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...eo,
]);
function Np(n, t) {
  n.indexOf(t) === -1 && n.push(t);
}
function Pp(n, t) {
  const i = n.indexOf(t);
  i > -1 && n.splice(i, 1);
}
class Lp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Np(this.subscriptions, t), () => Pp(this.subscriptions, t);
  }
  notify(t, i, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, i, r);
      else
        for (let u = 0; u < o; u++) {
          const f = this.subscriptions[u];
          f && f(t, i, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function zb(n, t) {
  return t ? n * (1e3 / t) : 0;
}
let jc;
function AD() {
  jc = void 0;
}
const yi = {
    now: () => (
      jc === void 0 &&
        yi.set(
          Ke.isProcessing || M2.useManualTiming
            ? Ke.timestamp
            : performance.now()
        ),
      jc
    ),
    set: (n) => {
      (jc = n), queueMicrotask(AD);
    },
  },
  O_ = 30,
  SD = (n) => !isNaN(parseFloat(n));
class wD {
  constructor(t, i = {}) {
    (this.version = "12.6.3"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const u = yi.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = i.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = yi.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = SD(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new Lp());
    const r = this.events[t].add(i);
    return t === "change"
      ? () => {
          r(),
            se.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, i) {
    (this.passiveEffect = t), (this.stopPassiveEffect = i);
  }
  set(t, i = !0) {
    !i || !this.passiveEffect
      ? this.updateAndNotify(t, i)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, i, r) {
    this.set(i),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, i = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      i && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = yi.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > O_
    )
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, O_);
    return zb(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((i) => {
        (this.hasAnimated = !0),
          (this.animation = t(i)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ql(n, t) {
  return new wD(n, t);
}
function RD(n, t, i) {
  n.hasValue(t) ? n.getValue(t).set(i) : n.addValue(t, ql(i));
}
function xD(n, t) {
  const i = jl(n, t);
  let { transitionEnd: r = {}, transition: o = {}, ...u } = i || {};
  u = { ...u, ...r };
  for (const f in u) {
    const m = yD(u[f]);
    RD(n, f, m);
  }
}
function CD(n) {
  return !!(nn(n) && n.add);
}
function Sm(n, t) {
  const i = n.getValue("willChange");
  if (CD(i)) return i.add(t);
}
function jb(n) {
  return n.props[wb];
}
const vi = (n) => n * 1e3,
  _i = (n) => n / 1e3;
function kp(n) {
  let t;
  return () => (t === void 0 && (t = n()), t);
}
const DD = kp(() => window.ScrollTimeline !== void 0);
class VD {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, i) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = i;
  }
  attachTimeline(t, i) {
    const r = this.animations.map((o) => {
      if (DD() && o.attachTimeline) return o.attachTimeline(t);
      if (typeof i == "function") return i(o);
    });
    return () => {
      r.forEach((o, u) => {
        o && o(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let i = 0; i < this.animations.length; i++)
      t = Math.max(t, this.animations[i].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((i) => i[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class MD extends VD {
  then(t, i) {
    return this.finished.finally(t).then(() => {});
  }
}
const Up = (n) => Array.isArray(n) && typeof n[0] == "number",
  OD = {};
function ID(n, t) {
  const i = kp(n);
  return () => OD[t] ?? i();
}
const Hl = ID(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  qb = (n, t, i = 10) => {
    let r = "";
    const o = Math.max(Math.round(t / i), 2);
    for (let u = 0; u < o; u++) r += n(u / (o - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  El = ([n, t, i, r]) => `cubic-bezier(${n}, ${t}, ${i}, ${r})`,
  wm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: El([0, 0.65, 0.55, 1]),
    circOut: El([0.55, 0, 1, 0.45]),
    backIn: El([0.31, 0.01, 0.66, -0.59]),
    backOut: El([0.33, 1.53, 0.69, 0.99]),
  };
function Hb(n, t) {
  if (n)
    return typeof n == "function" && Hl()
      ? qb(n, t)
      : Up(n)
      ? El(n)
      : Array.isArray(n)
      ? n.map((i) => Hb(i, t) || wm.easeOut)
      : wm[n];
}
function ND(
  n,
  t,
  i,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: u = 0,
    repeatType: f = "loop",
    ease: m = "easeInOut",
    times: p,
  } = {},
  g = void 0
) {
  const v = { [t]: i };
  p && (v.offset = p);
  const E = Hb(m, o);
  return (
    Array.isArray(E) && (v.easing = E),
    n.animate(v, {
      delay: r,
      duration: o,
      easing: Array.isArray(E) ? "linear" : E,
      fill: "both",
      iterations: u + 1,
      direction: f === "reverse" ? "alternate" : "normal",
      pseudoElement: g,
    })
  );
}
function Bp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Gb(n) {
  return !!(
    (typeof n == "function" && Hl()) ||
    !n ||
    (typeof n == "string" && (n in wm || Hl())) ||
    Up(n) ||
    (Array.isArray(n) && n.every(Gb))
  );
}
function I_(n, t) {
  (n.timeline = t), (n.onfinish = null);
}
const Fb = (n, t, i) =>
    (((1 - 3 * i + 3 * t) * n + (3 * i - 6 * t)) * n + 3 * t) * n,
  PD = 1e-7,
  LD = 12;
function kD(n, t, i, r, o) {
  let u,
    f,
    m = 0;
  do (f = t + (i - t) / 2), (u = Fb(f, r, o) - n), u > 0 ? (i = f) : (t = f);
  while (Math.abs(u) > PD && ++m < LD);
  return f;
}
function Jl(n, t, i, r) {
  if (n === t && i === r) return Hn;
  const o = (u) => kD(u, 0, 1, n, i);
  return (u) => (u === 0 || u === 1 ? u : Fb(o(u), t, r));
}
const Kb = (n) => (t) => t <= 0.5 ? n(2 * t) / 2 : (2 - n(2 * (1 - t))) / 2,
  Qb = (n) => (t) => 1 - n(1 - t),
  Yb = Jl(0.33, 1.53, 0.69, 0.99),
  zp = Qb(Yb),
  Xb = Kb(zp),
  Zb = (n) =>
    (n *= 2) < 1 ? 0.5 * zp(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  jp = (n) => 1 - Math.sin(Math.acos(n)),
  $b = Qb(jp),
  Jb = Kb(jp),
  Wb = (n) => /^0[^.\s]+$/u.test(n);
function UD(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || Wb(n)
    : !0;
}
const xl = (n) => Math.round(n * 1e5) / 1e5,
  qp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function BD(n) {
  return n == null;
}
const zD =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hp = (n, t) => (i) =>
    !!(
      (typeof i == "string" && zD.test(i) && i.startsWith(n)) ||
      (t && !BD(i) && Object.prototype.hasOwnProperty.call(i, t))
    ),
  tA = (n, t, i) => (r) => {
    if (typeof r != "string") return r;
    const [o, u, f, m] = r.match(qp);
    return {
      [n]: parseFloat(o),
      [t]: parseFloat(u),
      [i]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  jD = (n) => $i(0, 255, n),
  zd = { ...no, transform: (n) => Math.round(jD(n)) },
  Dr = {
    test: Hp("rgb", "red"),
    parse: tA("red", "green", "blue"),
    transform: ({ red: n, green: t, blue: i, alpha: r = 1 }) =>
      "rgba(" +
      zd.transform(n) +
      ", " +
      zd.transform(t) +
      ", " +
      zd.transform(i) +
      ", " +
      xl(zl.transform(r)) +
      ")",
  };
function qD(n) {
  let t = "",
    i = "",
    r = "",
    o = "";
  return (
    n.length > 5
      ? ((t = n.substring(1, 3)),
        (i = n.substring(3, 5)),
        (r = n.substring(5, 7)),
        (o = n.substring(7, 9)))
      : ((t = n.substring(1, 2)),
        (i = n.substring(2, 3)),
        (r = n.substring(3, 4)),
        (o = n.substring(4, 5)),
        (t += t),
        (i += i),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(i, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Rm = { test: Hp("#"), parse: qD, transform: Dr.transform },
  Pa = {
    test: Hp("hsl", "hue"),
    parse: tA("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: t, lightness: i, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      gi.transform(xl(t)) +
      ", " +
      gi.transform(xl(i)) +
      ", " +
      xl(zl.transform(r)) +
      ")",
  },
  We = {
    test: (n) => Dr.test(n) || Rm.test(n) || Pa.test(n),
    parse: (n) =>
      Dr.test(n) ? Dr.parse(n) : Pa.test(n) ? Pa.parse(n) : Rm.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? Dr.transform(n)
        : Pa.transform(n),
  },
  HD =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function GD(n) {
  var t, i;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((t = n.match(qp)) == null ? void 0 : t.length) || 0) +
      (((i = n.match(HD)) == null ? void 0 : i.length) || 0) >
      0
  );
}
const eA = "number",
  nA = "color",
  FD = "var",
  KD = "var(",
  N_ = "${}",
  QD =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Gl(n) {
  const t = n.toString(),
    i = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let u = 0;
  const m = t
    .replace(
      QD,
      (p) => (
        We.test(p)
          ? (r.color.push(u), o.push(nA), i.push(We.parse(p)))
          : p.startsWith(KD)
          ? (r.var.push(u), o.push(FD), i.push(p))
          : (r.number.push(u), o.push(eA), i.push(parseFloat(p))),
        ++u,
        N_
      )
    )
    .split(N_);
  return { values: i, split: m, indexes: r, types: o };
}
function iA(n) {
  return Gl(n).values;
}
function sA(n) {
  const { split: t, types: i } = Gl(n),
    r = t.length;
  return (o) => {
    let u = "";
    for (let f = 0; f < r; f++)
      if (((u += t[f]), o[f] !== void 0)) {
        const m = i[f];
        m === eA
          ? (u += xl(o[f]))
          : m === nA
          ? (u += We.transform(o[f]))
          : (u += o[f]);
      }
    return u;
  };
}
const YD = (n) => (typeof n == "number" ? 0 : n);
function XD(n) {
  const t = iA(n);
  return sA(n)(t.map(YD));
}
const zs = {
    test: GD,
    parse: iA,
    createTransformer: sA,
    getAnimatableNone: XD,
  },
  ZD = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $D(n) {
  const [t, i] = n.slice(0, -1).split("(");
  if (t === "drop-shadow") return n;
  const [r] = i.match(qp) || [];
  if (!r) return n;
  const o = i.replace(r, "");
  let u = ZD.has(t) ? 1 : 0;
  return r !== i && (u *= 100), t + "(" + u + o + ")";
}
const JD = /\b([a-z-]*)\(.*?\)/gu,
  xm = {
    ...zs,
    getAnimatableNone: (n) => {
      const t = n.match(JD);
      return t ? t.map($D).join(" ") : n;
    },
  },
  WD = {
    ...wp,
    color: We,
    backgroundColor: We,
    outlineColor: We,
    fill: We,
    stroke: We,
    borderColor: We,
    borderTopColor: We,
    borderRightColor: We,
    borderBottomColor: We,
    borderLeftColor: We,
    filter: xm,
    WebkitFilter: xm,
  },
  rA = (n) => WD[n];
function aA(n, t) {
  let i = rA(n);
  return (
    i !== xm && (i = zs), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
  );
}
const tV = new Set(["auto", "none", "0"]);
function eV(n, t, i) {
  let r = 0,
    o;
  for (; r < n.length && !o; ) {
    const u = n[r];
    typeof u == "string" && !tV.has(u) && Gl(u).values.length && (o = n[r]),
      r++;
  }
  if (o && i) for (const u of t) n[u] = aA(i, o);
}
const Vr = (n) => (n * 180) / Math.PI,
  Cm = (n) => {
    const t = Vr(Math.atan2(n[1], n[0]));
    return Dm(t);
  },
  nV = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Cm,
    rotateZ: Cm,
    skewX: (n) => Vr(Math.atan(n[1])),
    skewY: (n) => Vr(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Dm = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  P_ = Cm,
  L_ = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  k_ = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  iV = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: L_,
    scaleY: k_,
    scale: (n) => (L_(n) + k_(n)) / 2,
    rotateX: (n) => Dm(Vr(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Dm(Vr(Math.atan2(-n[2], n[0]))),
    rotateZ: P_,
    rotate: P_,
    skewX: (n) => Vr(Math.atan(n[4])),
    skewY: (n) => Vr(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function U_(n) {
  return n.includes("scale") ? 1 : 0;
}
function Vm(n, t) {
  if (!n || n === "none") return U_(t);
  const i = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (i) (r = iV), (o = i);
  else {
    const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = nV), (o = m);
  }
  if (!o) return U_(t);
  const u = r[t],
    f = o[1].split(",").map(rV);
  return typeof u == "function" ? u(f) : f[u];
}
const sV = (n, t) => {
  const { transform: i = "none" } = getComputedStyle(n);
  return Vm(i, t);
};
function rV(n) {
  return parseFloat(n.trim());
}
const B_ = (n) => n === no || n === _t,
  aV = new Set(["x", "y", "z"]),
  oV = eo.filter((n) => !aV.has(n));
function lV(n) {
  const t = [];
  return (
    oV.forEach((i) => {
      const r = n.getValue(i);
      r !== void 0 &&
        (t.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Za = {
  width: ({ x: n }, { paddingLeft: t = "0", paddingRight: i = "0" }) =>
    n.max - n.min - parseFloat(t) - parseFloat(i),
  height: ({ y: n }, { paddingTop: t = "0", paddingBottom: i = "0" }) =>
    n.max - n.min - parseFloat(t) - parseFloat(i),
  top: (n, { top: t }) => parseFloat(t),
  left: (n, { left: t }) => parseFloat(t),
  bottom: ({ y: n }, { top: t }) => parseFloat(t) + (n.max - n.min),
  right: ({ x: n }, { left: t }) => parseFloat(t) + (n.max - n.min),
  x: (n, { transform: t }) => Vm(t, "x"),
  y: (n, { transform: t }) => Vm(t, "y"),
};
Za.translateX = Za.x;
Za.translateY = Za.y;
const Ir = new Set();
let Mm = !1,
  Om = !1;
function oA() {
  if (Om) {
    const n = Array.from(Ir).filter((r) => r.needsMeasurement),
      t = new Set(n.map((r) => r.element)),
      i = new Map();
    t.forEach((r) => {
      const o = lV(r);
      o.length && (i.set(r, o), r.render());
    }),
      n.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = i.get(r);
        o &&
          o.forEach(([u, f]) => {
            var m;
            (m = r.getValue(u)) == null || m.set(f);
          });
      }),
      n.forEach((r) => r.measureEndState()),
      n.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Om = !1), (Mm = !1), Ir.forEach((n) => n.complete()), Ir.clear();
}
function lA() {
  Ir.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Om = !0);
  });
}
function uV() {
  lA(), oA();
}
class Gp {
  constructor(t, i, r, o, u, f = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = i),
      (this.name = r),
      (this.motionValue = o),
      (this.element = u),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Ir.add(this),
          Mm || ((Mm = !0), se.read(lA), se.resolveKeyframes(oA)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: i,
      element: r,
      motionValue: o,
    } = this;
    for (let u = 0; u < t.length; u++)
      if (t[u] === null)
        if (u === 0) {
          const f = o == null ? void 0 : o.get(),
            m = t[t.length - 1];
          if (f !== void 0) t[0] = f;
          else if (r && i) {
            const p = r.readValue(i, m);
            p != null && (t[0] = p);
          }
          t[0] === void 0 && (t[0] = m), o && f === void 0 && o.set(t[0]);
        } else t[u] = t[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Ir.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ir.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const uA = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  cV = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hV(n) {
  const t = cV.exec(n);
  if (!t) return [,];
  const [, i, r, o] = t;
  return [`--${i ?? r}`, o];
}
function cA(n, t, i = 1) {
  const [r, o] = hV(n);
  if (!r) return;
  const u = window.getComputedStyle(t).getPropertyValue(r);
  if (u) {
    const f = u.trim();
    return uA(f) ? parseFloat(f) : f;
  }
  return Sp(o) ? cA(o, t, i + 1) : o;
}
const hA = (n) => (t) => t.test(n),
  fV = { test: (n) => n === "auto", parse: (n) => n },
  fA = [no, _t, gi, xs, tD, W2, fV],
  z_ = (n) => fA.find(hA(n));
class dA extends Gp {
  constructor(t, i, r, o, u) {
    super(t, i, r, o, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: r } = this;
    if (!i || !i.current) return;
    super.readKeyframes();
    for (let p = 0; p < t.length; p++) {
      let g = t[p];
      if (typeof g == "string" && ((g = g.trim()), Sp(g))) {
        const v = cA(g, i.current);
        v !== void 0 && (t[p] = v),
          p === t.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !Bb.has(r) || t.length !== 2)) return;
    const [o, u] = t,
      f = z_(o),
      m = z_(u);
    if (f !== m)
      if (B_(f) && B_(m))
        for (let p = 0; p < t.length; p++) {
          const g = t[p];
          typeof g == "string" && (t[p] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this,
      r = [];
    for (let o = 0; o < t.length; o++) UD(t[o]) && r.push(o);
    r.length && eV(t, r, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Za[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (i[0] = this.measuredOrigin);
    const o = i[i.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var m;
    const { element: t, name: i, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const o = t.getValue(i);
    o && o.jump(this.measuredOrigin, !1);
    const u = r.length - 1,
      f = r[u];
    (r[u] = Za[i](t.measureViewportBox(), window.getComputedStyle(t.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([p, g]) => {
          t.getValue(p).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
const j_ = (n, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (zs.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function dV(n) {
  const t = n[0];
  if (n.length === 1) return !0;
  for (let i = 0; i < n.length; i++) if (n[i] !== t) return !0;
}
function mV(n, t, i, r) {
  const o = n[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const u = n[n.length - 1],
    f = j_(o, t),
    m = j_(u, t);
  return !f || !m ? !1 : dV(n) || ((i === "spring" || Bp(i)) && r);
}
const pV = (n) => n !== null;
function bh(n, { repeat: t, repeatType: i = "loop" }, r) {
  const o = n.filter(pV),
    u = t && i !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !u || r === void 0 ? o[u] : r;
}
const gV = 40;
class mA {
  constructor({
    autoplay: t = !0,
    delay: i = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: u = 0,
    repeatType: f = "loop",
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = yi.now()),
      (this.options = {
        autoplay: t,
        delay: i,
        type: r,
        repeat: o,
        repeatDelay: u,
        repeatType: f,
        ...m,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > gV
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && uV(), this._resolved;
  }
  onKeyframesResolved(t, i) {
    (this.resolvedAt = yi.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: u,
      delay: f,
      onComplete: m,
      onUpdate: p,
      isGenerator: g,
    } = this.options;
    if (!g && !mV(t, r, o, u))
      if (f) this.options.duration = 0;
      else {
        p && p(bh(t, this.options, i)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(t, i);
    v !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: i, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, i) {
    return this.currentFinishedPromise.then(t, i);
  }
  flatten() {
    this.options.allowFlatten &&
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const nh = 2e4;
function Fp(n) {
  let t = 0;
  const i = 50;
  let r = n.next(t);
  for (; !r.done && t < nh; ) (t += i), (r = n.next(t));
  return t >= nh ? 1 / 0 : t;
}
const ue = (n, t, i) => n + (t - n) * i;
function jd(n, t, i) {
  return (
    i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6
      ? n + (t - n) * 6 * i
      : i < 1 / 2
      ? t
      : i < 2 / 3
      ? n + (t - n) * (2 / 3 - i) * 6
      : n
  );
}
function yV({ hue: n, saturation: t, lightness: i, alpha: r }) {
  (n /= 360), (t /= 100), (i /= 100);
  let o = 0,
    u = 0,
    f = 0;
  if (!t) o = u = f = i;
  else {
    const m = i < 0.5 ? i * (1 + t) : i + t - i * t,
      p = 2 * i - m;
    (o = jd(p, m, n + 1 / 3)), (u = jd(p, m, n)), (f = jd(p, m, n - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function ih(n, t) {
  return (i) => (i > 0 ? t : n);
}
const qd = (n, t, i) => {
    const r = n * n,
      o = i * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  vV = [Rm, Dr, Pa],
  _V = (n) => vV.find((t) => t.test(n));
function q_(n) {
  const t = _V(n);
  if (!t) return !1;
  let i = t.parse(n);
  return t === Pa && (i = yV(i)), i;
}
const H_ = (n, t) => {
    const i = q_(n),
      r = q_(t);
    if (!i || !r) return ih(n, t);
    const o = { ...i };
    return (u) => (
      (o.red = qd(i.red, r.red, u)),
      (o.green = qd(i.green, r.green, u)),
      (o.blue = qd(i.blue, r.blue, u)),
      (o.alpha = ue(i.alpha, r.alpha, u)),
      Dr.transform(o)
    );
  },
  TV = (n, t) => (i) => t(n(i)),
  Wl = (...n) => n.reduce(TV),
  Im = new Set(["none", "hidden"]);
function EV(n, t) {
  return Im.has(n) ? (i) => (i <= 0 ? n : t) : (i) => (i >= 1 ? t : n);
}
function bV(n, t) {
  return (i) => ue(n, t, i);
}
function Kp(n) {
  return typeof n == "number"
    ? bV
    : typeof n == "string"
    ? Sp(n)
      ? ih
      : We.test(n)
      ? H_
      : wV
    : Array.isArray(n)
    ? pA
    : typeof n == "object"
    ? We.test(n)
      ? H_
      : AV
    : ih;
}
function pA(n, t) {
  const i = [...n],
    r = i.length,
    o = n.map((u, f) => Kp(u)(u, t[f]));
  return (u) => {
    for (let f = 0; f < r; f++) i[f] = o[f](u);
    return i;
  };
}
function AV(n, t) {
  const i = { ...n, ...t },
    r = {};
  for (const o in i)
    n[o] !== void 0 && t[o] !== void 0 && (r[o] = Kp(n[o])(n[o], t[o]));
  return (o) => {
    for (const u in r) i[u] = r[u](o);
    return i;
  };
}
function SV(n, t) {
  const i = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const u = t.types[o],
      f = n.indexes[u][r[u]],
      m = n.values[f] ?? 0;
    (i[o] = m), r[u]++;
  }
  return i;
}
const wV = (n, t) => {
  const i = zs.createTransformer(t),
    r = Gl(n),
    o = Gl(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Im.has(n) && !o.values.length) || (Im.has(t) && !r.values.length)
      ? EV(n, t)
      : Wl(pA(SV(r, o), o.values), i)
    : ih(n, t);
};
function gA(n, t, i) {
  return typeof n == "number" && typeof t == "number" && typeof i == "number"
    ? ue(n, t, i)
    : Kp(n)(n, t);
}
function RV(n, t = 100, i) {
  const r = i({ ...n, keyframes: [0, t] }),
    o = Math.min(Fp(r), nh);
  return {
    type: "keyframes",
    ease: (u) => r.next(o * u).value / t,
    duration: _i(o),
  };
}
const xV = 5;
function yA(n, t, i) {
  const r = Math.max(t - xV, 0);
  return zb(i - n(r), t - r);
}
const me = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  G_ = 0.001;
function CV({
  duration: n = me.duration,
  bounce: t = me.bounce,
  velocity: i = me.velocity,
  mass: r = me.mass,
}) {
  let o,
    u,
    f = 1 - t;
  (f = $i(me.minDamping, me.maxDamping, f)),
    (n = $i(me.minDuration, me.maxDuration, _i(n))),
    f < 1
      ? ((o = (g) => {
          const v = g * f,
            E = v * n,
            w = v - i,
            D = Nm(g, f),
            B = Math.exp(-E);
          return G_ - (w / D) * B;
        }),
        (u = (g) => {
          const E = g * f * n,
            w = E * i + i,
            D = Math.pow(f, 2) * Math.pow(g, 2) * n,
            B = Math.exp(-E),
            F = Nm(Math.pow(g, 2), f);
          return ((-o(g) + G_ > 0 ? -1 : 1) * ((w - D) * B)) / F;
        }))
      : ((o = (g) => {
          const v = Math.exp(-g * n),
            E = (g - i) * n + 1;
          return -0.001 + v * E;
        }),
        (u = (g) => {
          const v = Math.exp(-g * n),
            E = (i - g) * (n * n);
          return v * E;
        }));
  const m = 5 / n,
    p = VV(o, u, m);
  if (((n = vi(n)), isNaN(p)))
    return { stiffness: me.stiffness, damping: me.damping, duration: n };
  {
    const g = Math.pow(p, 2) * r;
    return { stiffness: g, damping: f * 2 * Math.sqrt(r * g), duration: n };
  }
}
const DV = 12;
function VV(n, t, i) {
  let r = i;
  for (let o = 1; o < DV; o++) r = r - n(r) / t(r);
  return r;
}
function Nm(n, t) {
  return n * Math.sqrt(1 - t * t);
}
const MV = ["duration", "bounce"],
  OV = ["stiffness", "damping", "mass"];
function F_(n, t) {
  return t.some((i) => n[i] !== void 0);
}
function IV(n) {
  let t = {
    velocity: me.velocity,
    stiffness: me.stiffness,
    damping: me.damping,
    mass: me.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!F_(n, OV) && F_(n, MV))
    if (n.visualDuration) {
      const i = n.visualDuration,
        r = (2 * Math.PI) / (i * 1.2),
        o = r * r,
        u = 2 * $i(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      t = { ...t, mass: me.mass, stiffness: o, damping: u };
    } else {
      const i = CV(n);
      (t = { ...t, ...i, mass: me.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function sh(n = me.visualDuration, t = me.bounce) {
  const i =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: t }
      : n;
  let { restSpeed: r, restDelta: o } = i;
  const u = i.keyframes[0],
    f = i.keyframes[i.keyframes.length - 1],
    m = { done: !1, value: u },
    {
      stiffness: p,
      damping: g,
      mass: v,
      duration: E,
      velocity: w,
      isResolvedFromDuration: D,
    } = IV({ ...i, velocity: -_i(i.velocity || 0) }),
    B = w || 0,
    F = g / (2 * Math.sqrt(p * v)),
    H = f - u,
    $ = _i(Math.sqrt(p / v)),
    st = Math.abs(H) < 5;
  r || (r = st ? me.restSpeed.granular : me.restSpeed.default),
    o || (o = st ? me.restDelta.granular : me.restDelta.default);
  let nt;
  if (F < 1) {
    const it = Nm($, F);
    nt = (ct) => {
      const M = Math.exp(-F * $ * ct);
      return (
        f -
        M * (((B + F * $ * H) / it) * Math.sin(it * ct) + H * Math.cos(it * ct))
      );
    };
  } else if (F === 1)
    nt = (it) => f - Math.exp(-$ * it) * (H + (B + $ * H) * it);
  else {
    const it = $ * Math.sqrt(F * F - 1);
    nt = (ct) => {
      const M = Math.exp(-F * $ * ct),
        A = Math.min(it * ct, 300);
      return (
        f - (M * ((B + F * $ * H) * Math.sinh(A) + it * H * Math.cosh(A))) / it
      );
    };
  }
  const mt = {
    calculatedDuration: (D && E) || null,
    next: (it) => {
      const ct = nt(it);
      if (D) m.done = it >= E;
      else {
        let M = 0;
        F < 1 && (M = it === 0 ? vi(B) : yA(nt, it, ct));
        const A = Math.abs(M) <= r,
          R = Math.abs(f - ct) <= o;
        m.done = A && R;
      }
      return (m.value = m.done ? f : ct), m;
    },
    toString: () => {
      const it = Math.min(Fp(mt), nh),
        ct = qb((M) => mt.next(it * M).value, it, 30);
      return it + "ms " + ct;
    },
    toTransition: () => {},
  };
  return mt;
}
sh.applyToOptions = (n) => {
  const t = RV(n, 100, sh);
  return (
    (n.ease = Hl() ? t.ease : "easeOut"),
    (n.duration = vi(t.duration)),
    (n.type = "keyframes"),
    n
  );
};
function K_({
  keyframes: n,
  velocity: t = 0,
  power: i = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: u = 500,
  modifyTarget: f,
  min: m,
  max: p,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const E = n[0],
    w = { done: !1, value: E },
    D = (A) => (m !== void 0 && A < m) || (p !== void 0 && A > p),
    B = (A) =>
      m === void 0
        ? p
        : p === void 0 || Math.abs(m - A) < Math.abs(p - A)
        ? m
        : p;
  let F = i * t;
  const H = E + F,
    $ = f === void 0 ? H : f(H);
  $ !== H && (F = $ - E);
  const st = (A) => -F * Math.exp(-A / r),
    nt = (A) => $ + st(A),
    mt = (A) => {
      const R = st(A),
        O = nt(A);
      (w.done = Math.abs(R) <= g), (w.value = w.done ? $ : O);
    };
  let it, ct;
  const M = (A) => {
    D(w.value) &&
      ((it = A),
      (ct = sh({
        keyframes: [w.value, B(w.value)],
        velocity: yA(nt, A, w.value),
        damping: o,
        stiffness: u,
        restDelta: g,
        restSpeed: v,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let R = !1;
        return (
          !ct && it === void 0 && ((R = !0), mt(A), M(A)),
          it !== void 0 && A >= it ? ct.next(A - it) : (!R && mt(A), w)
        );
      },
    }
  );
}
const NV = Jl(0.42, 0, 1, 1),
  PV = Jl(0, 0, 0.58, 1),
  vA = Jl(0.42, 0, 0.58, 1),
  LV = (n) => Array.isArray(n) && typeof n[0] != "number",
  kV = {
    linear: Hn,
    easeIn: NV,
    easeInOut: vA,
    easeOut: PV,
    circIn: jp,
    circInOut: Jb,
    circOut: $b,
    backIn: zp,
    backInOut: Xb,
    backOut: Yb,
    anticipate: Zb,
  },
  Q_ = (n) => {
    if (Up(n)) {
      Tb(n.length === 4);
      const [t, i, r, o] = n;
      return Jl(t, i, r, o);
    } else if (typeof n == "string") return kV[n];
    return n;
  },
  Fl = (n, t, i) => {
    const r = t - n;
    return r === 0 ? 1 : (i - n) / r;
  };
function UV(n, t, i) {
  const r = [],
    o = i || gA,
    u = n.length - 1;
  for (let f = 0; f < u; f++) {
    let m = o(n[f], n[f + 1]);
    if (t) {
      const p = Array.isArray(t) ? t[f] || Hn : t;
      m = Wl(p, m);
    }
    r.push(m);
  }
  return r;
}
function BV(n, t, { clamp: i = !0, ease: r, mixer: o } = {}) {
  const u = n.length;
  if ((Tb(u === t.length), u === 1)) return () => t[0];
  if (u === 2 && t[0] === t[1]) return () => t[1];
  const f = n[0] === n[1];
  n[0] > n[u - 1] && ((n = [...n].reverse()), (t = [...t].reverse()));
  const m = UV(t, r, o),
    p = m.length,
    g = (v) => {
      if (f && v < n[0]) return t[0];
      let E = 0;
      if (p > 1) for (; E < n.length - 2 && !(v < n[E + 1]); E++);
      const w = Fl(n[E], n[E + 1], v);
      return m[E](w);
    };
  return i ? (v) => g($i(n[0], n[u - 1], v)) : g;
}
function zV(n, t) {
  const i = n[n.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Fl(0, t, r);
    n.push(ue(i, 1, o));
  }
}
function jV(n) {
  const t = [0];
  return zV(t, n.length - 1), t;
}
function qV(n, t) {
  return n.map((i) => i * t);
}
function HV(n, t) {
  return n.map(() => t || vA).splice(0, n.length - 1);
}
function rh({
  duration: n = 300,
  keyframes: t,
  times: i,
  ease: r = "easeInOut",
}) {
  const o = LV(r) ? r.map(Q_) : Q_(r),
    u = { done: !1, value: t[0] },
    f = qV(i && i.length === t.length ? i : jV(t), n),
    m = BV(f, t, { ease: Array.isArray(o) ? o : HV(t, o) });
  return {
    calculatedDuration: n,
    next: (p) => ((u.value = m(p)), (u.done = p >= n), u),
  };
}
const GV = (n) => {
    const t = ({ timestamp: i }) => n(i);
    return {
      start: () => se.update(t, !0),
      stop: () => Bs(t),
      now: () => (Ke.isProcessing ? Ke.timestamp : yi.now()),
    };
  },
  FV = { decay: K_, inertia: K_, tween: rh, keyframes: rh, spring: sh },
  KV = (n) => n / 100;
class Qp extends mA {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: p } = this.options;
        p && p();
      });
    const { name: i, motionValue: r, element: o, keyframes: u } = this.options,
      f = (o == null ? void 0 : o.KeyframeResolver) || Gp,
      m = (p, g) => this.onKeyframesResolved(p, g);
    (this.resolver = new f(u, m, i, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: i = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: u,
        velocity: f = 0,
      } = this.options,
      m = Bp(i) ? i : FV[i] || rh;
    let p, g;
    m !== rh &&
      typeof t[0] != "number" &&
      ((p = Wl(KV, gA(t[0], t[1]))), (t = [0, 100]));
    const v = m({ ...this.options, keyframes: t });
    u === "mirror" &&
      (g = m({ ...this.options, keyframes: [...t].reverse(), velocity: -f })),
      v.calculatedDuration === null && (v.calculatedDuration = Fp(v));
    const { calculatedDuration: E } = v,
      w = E + o,
      D = w * (r + 1) - o;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: p,
      calculatedDuration: E,
      resolvedDuration: w,
      totalDuration: D,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, i = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: u,
      mirroredGenerator: f,
      mapPercentToKeyframes: m,
      keyframes: p,
      calculatedDuration: g,
      totalDuration: v,
      resolvedDuration: E,
    } = r;
    if (this.startTime === null) return u.next(0);
    const {
      delay: w,
      repeat: D,
      repeatType: B,
      repeatDelay: F,
      onUpdate: H,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - v / this.speed, this.startTime)),
      i
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const $ = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
      st = this.speed >= 0 ? $ < 0 : $ > v;
    (this.currentTime = Math.max($, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let nt = this.currentTime,
      mt = u;
    if (D) {
      const A = Math.min(this.currentTime, v) / E;
      let R = Math.floor(A),
        O = A % 1;
      !O && A >= 1 && (O = 1),
        O === 1 && R--,
        (R = Math.min(R, D + 1)),
        !!(R % 2) &&
          (B === "reverse"
            ? ((O = 1 - O), F && (O -= F / E))
            : B === "mirror" && (mt = f)),
        (nt = $i(0, 1, O) * E);
    }
    const it = st ? { done: !1, value: p[0] } : mt.next(nt);
    m && (it.value = m(it.value));
    let { done: ct } = it;
    !st &&
      g !== null &&
      (ct = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const M =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ct));
    return (
      M && o !== void 0 && (it.value = bh(p, this.options, o)),
      H && H(it.value),
      M && this.finish(),
      it
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? _i(t.calculatedDuration) : 0;
  }
  get time() {
    return _i(this.currentTime);
  }
  set time(t) {
    (t = vi(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const i = this.playbackSpeed !== t;
    (this.playbackSpeed = t), i && (this.time = _i(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = GV, onPlay: i, startTime: r } = this.options;
    this.driver || (this.driver = t((u) => this.tick(u))), i && i();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"), (this.holdTime = this.currentTime ?? 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const QV = new Set(["opacity", "clipPath", "filter", "transform"]),
  YV = kp(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ah = 10,
  XV = 2e4;
function ZV(n) {
  return Bp(n.type) || n.type === "spring" || !Gb(n.ease);
}
function $V(n, t) {
  const i = new Qp({
    ...t,
    keyframes: n,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: n[0] };
  const o = [];
  let u = 0;
  for (; !r.done && u < XV; ) (r = i.sample(u)), o.push(r.value), (u += ah);
  return { times: void 0, keyframes: o, duration: u - ah, ease: "linear" };
}
const _A = { anticipate: Zb, backInOut: Xb, circInOut: Jb };
function JV(n) {
  return n in _A;
}
class Y_ extends mA {
  constructor(t) {
    super(t);
    const { name: i, motionValue: r, element: o, keyframes: u } = this.options;
    (this.resolver = new dA(
      u,
      (f, m) => this.onKeyframesResolved(f, m),
      i,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, i) {
    let {
      duration: r = 300,
      times: o,
      ease: u,
      type: f,
      motionValue: m,
      name: p,
      startTime: g,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof u == "string" && Hl() && JV(u) && (u = _A[u]), ZV(this.options))
    ) {
      const {
          onComplete: E,
          onUpdate: w,
          motionValue: D,
          element: B,
          ...F
        } = this.options,
        H = $V(t, F);
      (t = H.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = H.duration),
        (o = H.times),
        (u = H.ease),
        (f = "keyframes");
    }
    const v = ND(m.owner.current, p, t, {
      ...this.options,
      duration: r,
      times: o,
      ease: u,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (I_(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: E } = this.options;
            m.set(bh(t, this.options, i)),
              E && E(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: r, times: o, type: f, ease: u, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: i } = t;
    return _i(i);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: i } = t;
    return _i(i.currentTime || 0);
  }
  set time(t) {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: r } = i;
    r.currentTime = vi(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: i } = t;
    return i.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(t) {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: r } = i;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: i } = t;
    return i.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: i } = t;
    return i.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: i } = this;
      if (!i) return Hn;
      const { animation: r } = i;
      I_(r, t);
    }
    return Hn;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: i } = t;
    i.playState === "finished" && this.updateFinishedPromise(), i.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: i } = t;
    i.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: i,
      keyframes: r,
      duration: o,
      type: u,
      ease: f,
      times: m,
    } = t;
    if (i.playState === "idle" || i.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: g,
          onUpdate: v,
          onComplete: E,
          element: w,
          ...D
        } = this.options,
        B = new Qp({
          ...D,
          keyframes: r,
          duration: o,
          type: u,
          ease: f,
          times: m,
          isGenerator: !0,
        }),
        F = vi(this.time);
      g.setWithVelocity(B.sample(F - ah).value, B.sample(F).value, ah);
    }
    const { onStop: p } = this.options;
    p && p(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: i,
      name: r,
      repeatDelay: o,
      repeatType: u,
      damping: f,
      type: m,
    } = t;
    if (!i || !i.owner || !(i.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: p, transformTemplate: g } = i.owner.getProps();
    return (
      YV() &&
      r &&
      QV.has(r) &&
      (r !== "transform" || !g) &&
      !p &&
      !o &&
      u !== "mirror" &&
      f !== 0 &&
      m !== "inertia"
    );
  }
}
const WV = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  tM = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eM = { type: "keyframes", duration: 0.8 },
  nM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  iM = (n, { keyframes: t }) =>
    t.length > 2
      ? eM
      : Lr.has(n)
      ? n.startsWith("scale")
        ? tM(t[1])
        : WV
      : nM;
function sM({
  when: n,
  delay: t,
  delayChildren: i,
  staggerChildren: r,
  staggerDirection: o,
  repeat: u,
  repeatType: f,
  repeatDelay: m,
  from: p,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Yp =
  (n, t, i, r = {}, o, u) =>
  (f) => {
    const m = Ip(r, n) || {},
      p = m.delay || r.delay || 0;
    let { elapsed: g = 0 } = r;
    g = g - vi(p);
    let v = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...m,
      delay: -g,
      onUpdate: (w) => {
        t.set(w), m.onUpdate && m.onUpdate(w);
      },
      onComplete: () => {
        f(), m.onComplete && m.onComplete();
      },
      name: n,
      motionValue: t,
      element: u ? void 0 : o,
    };
    sM(m) || (v = { ...v, ...iM(n, v) }),
      v.duration && (v.duration = vi(v.duration)),
      v.repeatDelay && (v.repeatDelay = vi(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let E = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (E = !0)),
      (v.allowFlatten = !m.type && !m.ease),
      E && !u && t.get() !== void 0)
    ) {
      const w = bh(v.keyframes, m);
      if (w !== void 0)
        return (
          se.update(() => {
            v.onUpdate(w), v.onComplete();
          }),
          new MD([])
        );
    }
    return !u && Y_.supports(v) ? new Y_(v) : new Qp(v);
  };
function rM({ protectedKeys: n, needsAnimating: t }, i) {
  const r = n.hasOwnProperty(i) && t[i] !== !0;
  return (t[i] = !1), r;
}
function TA(n, t, { delay: i = 0, transitionOverride: r, type: o } = {}) {
  let { transition: u = n.getDefaultTransition(), transitionEnd: f, ...m } = t;
  r && (u = r);
  const p = [],
    g = o && n.animationState && n.animationState.getState()[o];
  for (const v in m) {
    const E = n.getValue(v, n.latestValues[v] ?? null),
      w = m[v];
    if (w === void 0 || (g && rM(g, v))) continue;
    const D = { delay: i, ...Ip(u || {}, v) };
    let B = !1;
    if (window.MotionHandoffAnimation) {
      const H = jb(n);
      if (H) {
        const $ = window.MotionHandoffAnimation(H, v, se);
        $ !== null && ((D.startTime = $), (B = !0));
      }
    }
    Sm(n, v),
      E.start(
        Yp(v, E, w, n.shouldReduceMotion && Bb.has(v) ? { type: !1 } : D, n, B)
      );
    const F = E.animation;
    F && p.push(F);
  }
  return (
    f &&
      Promise.all(p).then(() => {
        se.update(() => {
          f && xD(n, f);
        });
      }),
    p
  );
}
function Pm(n, t, i = {}) {
  var p;
  const r = jl(
    n,
    t,
    i.type === "exit"
      ? (p = n.presenceContext) == null
        ? void 0
        : p.custom
      : void 0
  );
  let { transition: o = n.getDefaultTransition() || {} } = r || {};
  i.transitionOverride && (o = i.transitionOverride);
  const u = r ? () => Promise.all(TA(n, r, i)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: E,
              staggerDirection: w,
            } = o;
            return aM(n, t, v + g, E, w, i);
          }
        : () => Promise.resolve(),
    { when: m } = o;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [u, f] : [f, u];
    return g().then(() => v());
  } else return Promise.all([u(), f(i.delay)]);
}
function aM(n, t, i = 0, r = 0, o = 1, u) {
  const f = [],
    m = (n.variantChildren.size - 1) * r,
    p = o === 1 ? (g = 0) => g * r : (g = 0) => m - g * r;
  return (
    Array.from(n.variantChildren)
      .sort(oM)
      .forEach((g, v) => {
        g.notify("AnimationStart", t),
          f.push(
            Pm(g, t, { ...u, delay: i + p(v) }).then(() =>
              g.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(f)
  );
}
function oM(n, t) {
  return n.sortNodePosition(t);
}
function lM(n, t, i = {}) {
  n.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((u) => Pm(n, u, i));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Pm(n, t, i);
  else {
    const o = typeof t == "function" ? jl(n, t, i.custom) : t;
    r = Promise.all(TA(n, o, i));
  }
  return r.then(() => {
    n.notify("AnimationComplete", t);
  });
}
function EA(n, t) {
  if (!Array.isArray(t)) return !1;
  const i = t.length;
  if (i !== n.length) return !1;
  for (let r = 0; r < i; r++) if (t[r] !== n[r]) return !1;
  return !0;
}
const uM = Tp.length;
function bA(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const i = n.parent ? bA(n.parent) || {} : {};
    return n.props.initial !== void 0 && (i.initial = n.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < uM; i++) {
    const r = Tp[i],
      o = n.props[r];
    (Ul(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const cM = [..._p].reverse(),
  hM = _p.length;
function fM(n) {
  return (t) =>
    Promise.all(t.map(({ animation: i, options: r }) => lM(n, i, r)));
}
function dM(n) {
  let t = fM(n),
    i = X_(),
    r = !0;
  const o = (p) => (g, v) => {
    var w;
    const E = jl(
      n,
      v,
      p === "exit"
        ? (w = n.presenceContext) == null
          ? void 0
          : w.custom
        : void 0
    );
    if (E) {
      const { transition: D, transitionEnd: B, ...F } = E;
      g = { ...g, ...F, ...B };
    }
    return g;
  };
  function u(p) {
    t = p(n);
  }
  function f(p) {
    const { props: g } = n,
      v = bA(n.parent) || {},
      E = [],
      w = new Set();
    let D = {},
      B = 1 / 0;
    for (let H = 0; H < hM; H++) {
      const $ = cM[H],
        st = i[$],
        nt = g[$] !== void 0 ? g[$] : v[$],
        mt = Ul(nt),
        it = $ === p ? st.isActive : null;
      it === !1 && (B = H);
      let ct = nt === v[$] && nt !== g[$] && mt;
      if (
        (ct && r && n.manuallyAnimateOnMount && (ct = !1),
        (st.protectedKeys = { ...D }),
        (!st.isActive && it === null) ||
          (!nt && !st.prevProp) ||
          Th(nt) ||
          typeof nt == "boolean")
      )
        continue;
      const M = mM(st.prevProp, nt);
      let A = M || ($ === p && st.isActive && !ct && mt) || (H > B && mt),
        R = !1;
      const O = Array.isArray(nt) ? nt : [nt];
      let N = O.reduce(o($), {});
      it === !1 && (N = {});
      const { prevResolvedValues: P = {} } = st,
        C = { ...P, ...N },
        re = (et) => {
          (A = !0),
            w.has(et) && ((R = !0), w.delete(et)),
            (st.needsAnimating[et] = !0);
          const X = n.getValue(et);
          X && (X.liveStyle = !1);
        };
      for (const et in C) {
        const X = N[et],
          Vt = P[et];
        if (D.hasOwnProperty(et)) continue;
        let V = !1;
        Am(X) && Am(Vt) ? (V = !EA(X, Vt)) : (V = X !== Vt),
          V
            ? X != null
              ? re(et)
              : w.add(et)
            : X !== void 0 && w.has(et)
            ? re(et)
            : (st.protectedKeys[et] = !0);
      }
      (st.prevProp = nt),
        (st.prevResolvedValues = N),
        st.isActive && (D = { ...D, ...N }),
        r && n.blockInitialAnimation && (A = !1),
        A &&
          (!(ct && M) || R) &&
          E.push(...O.map((et) => ({ animation: et, options: { type: $ } })));
    }
    if (w.size) {
      const H = {};
      if (typeof g.initial != "boolean") {
        const $ = jl(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        $ && $.transition && (H.transition = $.transition);
      }
      w.forEach(($) => {
        const st = n.getBaseTarget($),
          nt = n.getValue($);
        nt && (nt.liveStyle = !0), (H[$] = st ?? null);
      }),
        E.push({ animation: H });
    }
    let F = !!E.length;
    return (
      r &&
        (g.initial === !1 || g.initial === g.animate) &&
        !n.manuallyAnimateOnMount &&
        (F = !1),
      (r = !1),
      F ? t(E) : Promise.resolve()
    );
  }
  function m(p, g) {
    var E;
    if (i[p].isActive === g) return Promise.resolve();
    (E = n.variantChildren) == null ||
      E.forEach((w) => {
        var D;
        return (D = w.animationState) == null ? void 0 : D.setActive(p, g);
      }),
      (i[p].isActive = g);
    const v = f(p);
    for (const w in i) i[w].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: u,
    getState: () => i,
    reset: () => {
      (i = X_()), (r = !0);
    },
  };
}
function mM(n, t) {
  return typeof t == "string" ? t !== n : Array.isArray(t) ? !EA(t, n) : !1;
}
function Sr(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function X_() {
  return {
    animate: Sr(!0),
    whileInView: Sr(),
    whileHover: Sr(),
    whileTap: Sr(),
    whileDrag: Sr(),
    whileFocus: Sr(),
    exit: Sr(),
  };
}
class js {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class pM extends js {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Th(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let gM = 0;
class yM extends js {
  constructor() {
    super(...arguments), (this.id = gM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    i &&
      !t &&
      o.then(() => {
        i(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vM = { animation: { Feature: pM }, exit: { Feature: yM } },
  Zn = { x: !1, y: !1 };
function AA() {
  return Zn.x || Zn.y;
}
function _M(n) {
  return n === "x" || n === "y"
    ? Zn[n]
      ? null
      : ((Zn[n] = !0),
        () => {
          Zn[n] = !1;
        })
    : Zn.x || Zn.y
    ? null
    : ((Zn.x = Zn.y = !0),
      () => {
        Zn.x = Zn.y = !1;
      });
}
function Kl(n, t, i, r = { passive: !0 }) {
  return n.addEventListener(t, i, r), () => n.removeEventListener(t, i);
}
const Xp = (n) =>
  n.pointerType === "mouse"
    ? typeof n.button != "number" || n.button <= 0
    : n.isPrimary !== !1;
function tu(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const TM = (n) => (t) => Xp(t) && n(t, tu(t));
function Cl(n, t, i, r) {
  return Kl(n, t, TM(i), r);
}
function SA({ top: n, left: t, right: i, bottom: r }) {
  return { x: { min: t, max: i }, y: { min: n, max: r } };
}
function EM({ x: n, y: t }) {
  return { top: t.min, right: n.max, bottom: t.max, left: n.min };
}
function bM(n, t) {
  if (!t) return n;
  const i = t({ x: n.left, y: n.top }),
    r = t({ x: n.right, y: n.bottom });
  return { top: i.y, left: i.x, bottom: r.y, right: r.x };
}
const wA = 1e-4,
  AM = 1 - wA,
  SM = 1 + wA,
  RA = 0.01,
  wM = 0 - RA,
  RM = 0 + RA;
function cn(n) {
  return n.max - n.min;
}
function xM(n, t, i) {
  return Math.abs(n - t) <= i;
}
function Z_(n, t, i, r = 0.5) {
  (n.origin = r),
    (n.originPoint = ue(t.min, t.max, n.origin)),
    (n.scale = cn(i) / cn(t)),
    (n.translate = ue(i.min, i.max, n.origin) - n.originPoint),
    ((n.scale >= AM && n.scale <= SM) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= wM && n.translate <= RM) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function Dl(n, t, i, r) {
  Z_(n.x, t.x, i.x, r ? r.originX : void 0),
    Z_(n.y, t.y, i.y, r ? r.originY : void 0);
}
function $_(n, t, i) {
  (n.min = i.min + t.min), (n.max = n.min + cn(t));
}
function CM(n, t, i) {
  $_(n.x, t.x, i.x), $_(n.y, t.y, i.y);
}
function J_(n, t, i) {
  (n.min = t.min - i.min), (n.max = n.min + cn(t));
}
function Vl(n, t, i) {
  J_(n.x, t.x, i.x), J_(n.y, t.y, i.y);
}
const W_ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  La = () => ({ x: W_(), y: W_() }),
  tT = () => ({ min: 0, max: 0 }),
  _e = () => ({ x: tT(), y: tT() });
function qn(n) {
  return [n("x"), n("y")];
}
function Hd(n) {
  return n === void 0 || n === 1;
}
function Lm({ scale: n, scaleX: t, scaleY: i }) {
  return !Hd(n) || !Hd(t) || !Hd(i);
}
function xr(n) {
  return (
    Lm(n) ||
    xA(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function xA(n) {
  return eT(n.x) || eT(n.y);
}
function eT(n) {
  return n && n !== "0%";
}
function oh(n, t, i) {
  const r = n - i,
    o = t * r;
  return i + o;
}
function nT(n, t, i, r, o) {
  return o !== void 0 && (n = oh(n, o, r)), oh(n, i, r) + t;
}
function km(n, t = 0, i = 1, r, o) {
  (n.min = nT(n.min, t, i, r, o)), (n.max = nT(n.max, t, i, r, o));
}
function CA(n, { x: t, y: i }) {
  km(n.x, t.translate, t.scale, t.originPoint),
    km(n.y, i.translate, i.scale, i.originPoint);
}
const iT = 0.999999999999,
  sT = 1.0000000000001;
function DM(n, t, i, r = !1) {
  const o = i.length;
  if (!o) return;
  t.x = t.y = 1;
  let u, f;
  for (let m = 0; m < o; m++) {
    (u = i[m]), (f = u.projectionDelta);
    const { visualElement: p } = u.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Ua(n, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      f && ((t.x *= f.x.scale), (t.y *= f.y.scale), CA(n, f)),
      r && xr(u.latestValues) && Ua(n, u.latestValues));
  }
  t.x < sT && t.x > iT && (t.x = 1), t.y < sT && t.y > iT && (t.y = 1);
}
function ka(n, t) {
  (n.min = n.min + t), (n.max = n.max + t);
}
function rT(n, t, i, r, o = 0.5) {
  const u = ue(n.min, n.max, o);
  km(n, t, i, u, r);
}
function Ua(n, t) {
  rT(n.x, t.x, t.scaleX, t.scale, t.originX),
    rT(n.y, t.y, t.scaleY, t.scale, t.originY);
}
function DA(n, t) {
  return SA(bM(n.getBoundingClientRect(), t));
}
function VM(n, t, i) {
  const r = DA(n, i),
    { scroll: o } = t;
  return o && (ka(r.x, o.offset.x), ka(r.y, o.offset.y)), r;
}
const VA = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  aT = (n, t) => Math.abs(n - t);
function MM(n, t) {
  const i = aT(n.x, t.x),
    r = aT(n.y, t.y);
  return Math.sqrt(i ** 2 + r ** 2);
}
class MA {
  constructor(
    t,
    i,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: u = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const E = Fd(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          D = MM(E.offset, { x: 0, y: 0 }) >= 3;
        if (!w && !D) return;
        const { point: B } = E,
          { timestamp: F } = Ke;
        this.history.push({ ...B, timestamp: F });
        const { onStart: H, onMove: $ } = this.handlers;
        w ||
          (H && H(this.lastMoveEvent, E),
          (this.startEvent = this.lastMoveEvent)),
          $ && $(this.lastMoveEvent, E);
      }),
      (this.handlePointerMove = (E, w) => {
        (this.lastMoveEvent = E),
          (this.lastMoveEventInfo = Gd(w, this.transformPagePoint)),
          se.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (E, w) => {
        this.end();
        const { onEnd: D, onSessionEnd: B, resumeAnimation: F } = this.handlers;
        if (
          (this.dragSnapToOrigin && F && F(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const H = Fd(
          E.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Gd(w, this.transformPagePoint),
          this.history
        );
        this.startEvent && D && D(E, H), B && B(E, H);
      }),
      !Xp(t))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = i),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const f = tu(t),
      m = Gd(f, this.transformPagePoint),
      { point: p } = m,
      { timestamp: g } = Ke;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: v } = i;
    v && v(t, Fd(m, this.history)),
      (this.removeListeners = Wl(
        Cl(this.contextWindow, "pointermove", this.handlePointerMove),
        Cl(this.contextWindow, "pointerup", this.handlePointerUp),
        Cl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Bs(this.updatePoint);
  }
}
function Gd(n, t) {
  return t ? { point: t(n.point) } : n;
}
function oT(n, t) {
  return { x: n.x - t.x, y: n.y - t.y };
}
function Fd({ point: n }, t) {
  return {
    point: n,
    delta: oT(n, OA(t)),
    offset: oT(n, OM(t)),
    velocity: IM(t, 0.1),
  };
}
function OM(n) {
  return n[0];
}
function OA(n) {
  return n[n.length - 1];
}
function IM(n, t) {
  if (n.length < 2) return { x: 0, y: 0 };
  let i = n.length - 1,
    r = null;
  const o = OA(n);
  for (; i >= 0 && ((r = n[i]), !(o.timestamp - r.timestamp > vi(t))); ) i--;
  if (!r) return { x: 0, y: 0 };
  const u = _i(o.timestamp - r.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const f = { x: (o.x - r.x) / u, y: (o.y - r.y) / u };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function NM(n, { min: t, max: i }, r) {
  return (
    t !== void 0 && n < t
      ? (n = r ? ue(t, n, r.min) : Math.max(n, t))
      : i !== void 0 && n > i && (n = r ? ue(i, n, r.max) : Math.min(n, i)),
    n
  );
}
function lT(n, t, i) {
  return {
    min: t !== void 0 ? n.min + t : void 0,
    max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0,
  };
}
function PM(n, { top: t, left: i, bottom: r, right: o }) {
  return { x: lT(n.x, i, o), y: lT(n.y, t, r) };
}
function uT(n, t) {
  let i = t.min - n.min,
    r = t.max - n.max;
  return t.max - t.min < n.max - n.min && ([i, r] = [r, i]), { min: i, max: r };
}
function LM(n, t) {
  return { x: uT(n.x, t.x), y: uT(n.y, t.y) };
}
function kM(n, t) {
  let i = 0.5;
  const r = cn(n),
    o = cn(t);
  return (
    o > r
      ? (i = Fl(t.min, t.max - r, n.min))
      : r > o && (i = Fl(n.min, n.max - o, t.min)),
    $i(0, 1, i)
  );
}
function UM(n, t) {
  const i = {};
  return (
    t.min !== void 0 && (i.min = t.min - n.min),
    t.max !== void 0 && (i.max = t.max - n.min),
    i
  );
}
const Um = 0.35;
function BM(n = Um) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Um),
    { x: cT(n, "left", "right"), y: cT(n, "top", "bottom") }
  );
}
function cT(n, t, i) {
  return { min: hT(n, t), max: hT(n, i) };
}
function hT(n, t) {
  return typeof n == "number" ? n : n[t] || 0;
}
const zM = new WeakMap();
class jM {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = _e()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: i = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (v) => {
        const { dragSnapToOrigin: E } = this.getProps();
        E ? this.pauseAnimation() : this.stopAnimation(),
          i && this.snapToCursor(tu(v).point);
      },
      u = (v, E) => {
        const { drag: w, dragPropagation: D, onDragStart: B } = this.getProps();
        if (
          w &&
          !D &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _M(w)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          qn((H) => {
            let $ = this.getAxisMotionValue(H).get() || 0;
            if (gi.test($)) {
              const { projection: st } = this.visualElement;
              if (st && st.layout) {
                const nt = st.layout.layoutBox[H];
                nt && ($ = cn(nt) * (parseFloat($) / 100));
              }
            }
            this.originPoint[H] = $;
          }),
          B && se.postRender(() => B(v, E)),
          Sm(this.visualElement, "transform");
        const { animationState: F } = this.visualElement;
        F && F.setActive("whileDrag", !0);
      },
      f = (v, E) => {
        const {
          dragPropagation: w,
          dragDirectionLock: D,
          onDirectionLock: B,
          onDrag: F,
        } = this.getProps();
        if (!w && !this.openDragLock) return;
        const { offset: H } = E;
        if (D && this.currentDirection === null) {
          (this.currentDirection = qM(H)),
            this.currentDirection !== null && B && B(this.currentDirection);
          return;
        }
        this.updateAxis("x", E.point, H),
          this.updateAxis("y", E.point, H),
          this.visualElement.render(),
          F && F(v, E);
      },
      m = (v, E) => this.stop(v, E),
      p = () =>
        qn((v) => {
          var E;
          return (
            this.getAnimationState(v) === "paused" &&
            ((E = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : E.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new MA(
      t,
      {
        onSessionStart: o,
        onStart: u,
        onMove: f,
        onSessionEnd: m,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: VA(this.visualElement),
      }
    );
  }
  stop(t, i) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: u } = this.getProps();
    u && se.postRender(() => u(t, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      i && i.setActive("whileDrag", !1);
  }
  updateAxis(t, i, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ic(t, o, this.currentDirection)) return;
    const u = this.getAxisMotionValue(t);
    let f = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (f = NM(f, this.constraints[t], this.elastic[t])),
      u.set(f);
  }
  resolveConstraints() {
    var u;
    const { dragConstraints: t, dragElastic: i } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (u = this.visualElement.projection) == null
          ? void 0
          : u.layout,
      o = this.constraints;
    t && Na(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = PM(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = BM(i)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        qn((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = UM(r.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !Na(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const u = VM(r, o.root, this.visualElement.getTransformPagePoint());
    let f = LM(o.layout.layoutBox, u);
    if (i) {
      const m = i(EM(f));
      (this.hasMutatedConstraints = !!m), m && (f = SA(m));
    }
    return f;
  }
  startAnimation(t) {
    const {
        drag: i,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: u,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      p = this.constraints || {},
      g = qn((v) => {
        if (!Ic(v, i, this.currentDirection)) return;
        let E = (p && p[v]) || {};
        f && (E = { min: 0, max: 0 });
        const w = o ? 200 : 1e6,
          D = o ? 40 : 1e7,
          B = {
            type: "inertia",
            velocity: r ? t[v] : 0,
            bounceStiffness: w,
            bounceDamping: D,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...E,
          };
        return this.startAxisValueAnimation(v, B);
      });
    return Promise.all(g).then(m);
  }
  startAxisValueAnimation(t, i) {
    const r = this.getAxisMotionValue(t);
    return (
      Sm(this.visualElement, t), r.start(Yp(t, r, 0, i, this.visualElement, !1))
    );
  }
  stopAnimation() {
    qn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    qn((t) => {
      var i;
      return (i = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : i.pause();
    });
  }
  getAnimationState(t) {
    var i;
    return (i = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : i.state;
  }
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[i];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    qn((i) => {
      const { drag: r } = this.getProps();
      if (!Ic(i, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        u = this.getAxisMotionValue(i);
      if (o && o.layout) {
        const { min: f, max: m } = o.layout.layoutBox[i];
        u.set(t[i] - ue(f, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: i } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Na(i) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    qn((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const p = m.get();
        o[f] = kM({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      qn((f) => {
        if (!Ic(f, t, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: p, max: g } = this.constraints[f];
        m.set(ue(p, g, o[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    zM.set(this.visualElement, this);
    const t = this.visualElement.current,
      i = Cl(t, "pointerdown", (p) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(p);
      }),
      r = () => {
        const { dragConstraints: p } = this.getProps();
        Na(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      u = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      se.read(r);
    const f = Kl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = o.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (qn((v) => {
              const E = this.getAxisMotionValue(v);
              E &&
                ((this.originPoint[v] += p[v].translate),
                E.set(E.get() + p[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), i(), u(), m && m();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: i = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: u = !1,
        dragElastic: f = Um,
        dragMomentum: m = !0,
      } = t;
    return {
      ...t,
      drag: i,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function Ic(n, t, i) {
  return (t === !0 || t === n) && (i === null || i === n);
}
function qM(n, t = 10) {
  let i = null;
  return Math.abs(n.y) > t ? (i = "y") : Math.abs(n.x) > t && (i = "x"), i;
}
class HM extends js {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Hn),
      (this.removeListeners = Hn),
      (this.controls = new jM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Hn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fT = (n) => (t, i) => {
  n && se.postRender(() => n(t, i));
};
class GM extends js {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Hn);
  }
  onPointerDown(t) {
    this.session = new MA(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: VA(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: i,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: fT(t),
      onStart: fT(i),
      onMove: r,
      onEnd: (u, f) => {
        delete this.session, o && se.postRender(() => o(u, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Cl(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const qc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function dT(n, t) {
  return t.max === t.min ? 0 : (n / (t.max - t.min)) * 100;
}
const gl = {
    correct: (n, t) => {
      if (!t.target) return n;
      if (typeof n == "string")
        if (_t.test(n)) n = parseFloat(n);
        else return n;
      const i = dT(n, t.target.x),
        r = dT(n, t.target.y);
      return `${i}% ${r}%`;
    },
  },
  FM = {
    correct: (n, { treeScale: t, projectionDelta: i }) => {
      const r = n,
        o = zs.parse(n);
      if (o.length > 5) return r;
      const u = zs.createTransformer(n),
        f = typeof o[0] != "number" ? 1 : 0,
        m = i.x.scale * t.x,
        p = i.y.scale * t.y;
      (o[0 + f] /= m), (o[1 + f] /= p);
      const g = ue(m, p, 0.5);
      return (
        typeof o[2 + f] == "number" && (o[2 + f] /= g),
        typeof o[3 + f] == "number" && (o[3 + f] /= g),
        u(o)
      );
    },
  };
class KM extends pt.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: i,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: u } = t;
    J2(QM),
      u &&
        (i.group && i.group.add(u),
        r && r.register && o && r.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (qc.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: i,
        visualElement: r,
        drag: o,
        isPresent: u,
      } = this.props,
      f = r.projection;
    return (
      f &&
        ((f.isPresent = u),
        o || t.layoutDependency !== i || i === void 0 || t.isPresent !== u
          ? f.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== u &&
          (u
            ? f.promote()
            : f.relegate() ||
              se.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ep.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: i,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      i && i.group && i.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function IA(n) {
  const [t, i] = V2(),
    r = pt.useContext(vb);
  return qt.jsx(KM, {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: pt.useContext(Rb),
    isPresent: t,
    safeToRemove: i,
  });
}
const QM = {
  borderRadius: {
    ...gl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: gl,
  borderTopRightRadius: gl,
  borderBottomLeftRadius: gl,
  borderBottomRightRadius: gl,
  boxShadow: FM,
};
function YM(n, t, i) {
  const r = nn(n) ? n : ql(n);
  return r.start(Yp("", r, t, i)), r.animation;
}
function XM(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const ZM = (n, t) => n.depth - t.depth;
class $M {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Np(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Pp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ZM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function JM(n, t) {
  const i = yi.now(),
    r = ({ timestamp: o }) => {
      const u = o - i;
      u >= t && (Bs(r), n(u - t));
    };
  return se.read(r, !0), () => Bs(r);
}
const NA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  WM = NA.length,
  mT = (n) => (typeof n == "string" ? parseFloat(n) : n),
  pT = (n) => typeof n == "number" || _t.test(n);
function tO(n, t, i, r, o, u) {
  o
    ? ((n.opacity = ue(0, i.opacity !== void 0 ? i.opacity : 1, eO(r))),
      (n.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, nO(r))))
    : u &&
      (n.opacity = ue(
        t.opacity !== void 0 ? t.opacity : 1,
        i.opacity !== void 0 ? i.opacity : 1,
        r
      ));
  for (let f = 0; f < WM; f++) {
    const m = `border${NA[f]}Radius`;
    let p = gT(t, m),
      g = gT(i, m);
    if (p === void 0 && g === void 0) continue;
    p || (p = 0),
      g || (g = 0),
      p === 0 || g === 0 || pT(p) === pT(g)
        ? ((n[m] = Math.max(ue(mT(p), mT(g), r), 0)),
          (gi.test(g) || gi.test(p)) && (n[m] += "%"))
        : (n[m] = g);
  }
  (t.rotate || i.rotate) && (n.rotate = ue(t.rotate || 0, i.rotate || 0, r));
}
function gT(n, t) {
  return n[t] !== void 0 ? n[t] : n.borderRadius;
}
const eO = PA(0, 0.5, $b),
  nO = PA(0.5, 0.95, Hn);
function PA(n, t, i) {
  return (r) => (r < n ? 0 : r > t ? 1 : i(Fl(n, t, r)));
}
function yT(n, t) {
  (n.min = t.min), (n.max = t.max);
}
function jn(n, t) {
  yT(n.x, t.x), yT(n.y, t.y);
}
function vT(n, t) {
  (n.translate = t.translate),
    (n.scale = t.scale),
    (n.originPoint = t.originPoint),
    (n.origin = t.origin);
}
function _T(n, t, i, r, o) {
  return (
    (n -= t), (n = oh(n, 1 / i, r)), o !== void 0 && (n = oh(n, 1 / o, r)), n
  );
}
function iO(n, t = 0, i = 1, r = 0.5, o, u = n, f = n) {
  if (
    (gi.test(t) &&
      ((t = parseFloat(t)), (t = ue(f.min, f.max, t / 100) - f.min)),
    typeof t != "number")
  )
    return;
  let m = ue(u.min, u.max, r);
  n === u && (m -= t),
    (n.min = _T(n.min, t, i, m, o)),
    (n.max = _T(n.max, t, i, m, o));
}
function TT(n, t, [i, r, o], u, f) {
  iO(n, t[i], t[r], t[o], t.scale, u, f);
}
const sO = ["x", "scaleX", "originX"],
  rO = ["y", "scaleY", "originY"];
function ET(n, t, i, r) {
  TT(n.x, t, sO, i ? i.x : void 0, r ? r.x : void 0),
    TT(n.y, t, rO, i ? i.y : void 0, r ? r.y : void 0);
}
function bT(n) {
  return n.translate === 0 && n.scale === 1;
}
function LA(n) {
  return bT(n.x) && bT(n.y);
}
function AT(n, t) {
  return n.min === t.min && n.max === t.max;
}
function aO(n, t) {
  return AT(n.x, t.x) && AT(n.y, t.y);
}
function ST(n, t) {
  return (
    Math.round(n.min) === Math.round(t.min) &&
    Math.round(n.max) === Math.round(t.max)
  );
}
function kA(n, t) {
  return ST(n.x, t.x) && ST(n.y, t.y);
}
function wT(n) {
  return cn(n.x) / cn(n.y);
}
function RT(n, t) {
  return (
    n.translate === t.translate &&
    n.scale === t.scale &&
    n.originPoint === t.originPoint
  );
}
class oO {
  constructor() {
    this.members = [];
  }
  add(t) {
    Np(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Pp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    const i = this.members.findIndex((o) => t === o);
    if (i === 0) return !1;
    let r;
    for (let o = i; o >= 0; o--) {
      const u = this.members[o];
      if (u.isPresent !== !1) {
        r = u;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, i) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        i && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: i, resumingFrom: r } = t;
      i.onExitComplete && i.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function lO(n, t, i) {
  let r = "";
  const o = n.x.translate / t.x,
    u = n.y.translate / t.y,
    f = (i == null ? void 0 : i.z) || 0;
  if (
    ((o || u || f) && (r = `translate3d(${o}px, ${u}px, ${f}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    i)
  ) {
    const {
      transformPerspective: g,
      rotate: v,
      rotateX: E,
      rotateY: w,
      skewX: D,
      skewY: B,
    } = i;
    g && (r = `perspective(${g}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      E && (r += `rotateX(${E}deg) `),
      w && (r += `rotateY(${w}deg) `),
      D && (r += `skewX(${D}deg) `),
      B && (r += `skewY(${B}deg) `);
  }
  const m = n.x.scale * t.x,
    p = n.y.scale * t.y;
  return (m !== 1 || p !== 1) && (r += `scale(${m}, ${p})`), r || "none";
}
const Kd = ["", "X", "Y", "Z"],
  uO = { visibility: "hidden" },
  xT = 1e3;
let cO = 0;
function Qd(n, t, i, r) {
  const { latestValues: o } = t;
  o[n] && ((i[n] = o[n]), t.setStaticValue(n, 0), r && (r[n] = 0));
}
function UA(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: t } = n.options;
  if (!t) return;
  const i = jb(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: o, layoutId: u } = n.options;
    window.MotionCancelOptimisedAnimation(i, "transform", se, !(o || u));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && UA(r);
}
function BA({
  attachResizeListener: n,
  defaultParent: t,
  measureScroll: i,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(f = {}, m = t == null ? void 0 : t()) {
      (this.id = cO++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(dO),
            this.nodes.forEach(vO),
            this.nodes.forEach(_O),
            this.nodes.forEach(mO);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new $M());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Lp()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = XM(f)), (this.instance = f);
      const { layoutId: p, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (g || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let E;
        const w = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          (this.root.updateBlockedByResize = !0),
            E && E(),
            (E = JM(w, 250)),
            qc.hasAnimatedSinceResize &&
              ((qc.hasAnimatedSinceResize = !1), this.nodes.forEach(DT));
        });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          v &&
          (p || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: E,
              hasLayoutChanged: w,
              hasRelativeLayoutChanged: D,
              layout: B,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const F =
                  this.options.transition || v.getDefaultTransition() || SO,
                { onLayoutAnimationStart: H, onLayoutAnimationComplete: $ } =
                  v.getProps(),
                st = !this.targetLayout || !kA(this.targetLayout, B),
                nt = !w && D;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                nt ||
                (w && (st || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(E, nt);
                const mt = { ...Ip(F, "layout"), onPlay: H, onComplete: $ };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((mt.delay = 0), (mt.type = !1)),
                  this.startAnimation(mt);
              } else
                w || DT(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = B;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Bs(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(TO),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          UA(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const E = this.path[v];
        (E.shouldResetTransform = !0),
          E.updateScroll("snapshot"),
          E.options.layoutRoot && E.willUpdate(!1);
      }
      const { layoutId: m, layout: p } = this.options;
      if (m === void 0 && !p) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(CT);
        return;
      }
      this.isUpdating || this.nodes.forEach(gO),
        (this.isUpdating = !1),
        this.nodes.forEach(yO),
        this.nodes.forEach(hO),
        this.nodes.forEach(fO),
        this.clearAllSnapshots();
      const m = yi.now();
      (Ke.delta = $i(0, 1e3 / 60, m - Ke.timestamp)),
        (Ke.timestamp = m),
        (Ke.isProcessing = !0),
        Bd.update.process(Ke),
        Bd.preRender.process(Ke),
        Bd.render.process(Ke),
        (Ke.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ep.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(pO), this.sharedNodes.forEach(EO);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      se.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !cn(this.snapshot.measuredBox.x) &&
          !cn(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = _e()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !LA(this.projectionDelta),
        p = this.getTransformTemplate(),
        g = p ? p(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      f &&
        (m || xr(this.latestValues) || v) &&
        (o(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return (
        f && (p = this.removeTransform(p)),
        wO(p),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var g;
      const { visualElement: f } = this.options;
      if (!f) return _e();
      const m = f.measureViewportBox();
      if (
        !(
          ((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(RO)
        )
      ) {
        const { scroll: v } = this.root;
        v && (ka(m.x, v.offset.x), ka(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = _e();
      if ((jn(m, f), (p = this.scroll) != null && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: E, options: w } = v;
        v !== this.root &&
          E &&
          w.layoutScroll &&
          (E.wasRoot && jn(m, f), ka(m.x, E.offset.x), ka(m.y, E.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const p = _e();
      jn(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        !m &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          Ua(p, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          xr(v.latestValues) && Ua(p, v.latestValues);
      }
      return xr(this.latestValues) && Ua(p, this.latestValues), p;
    }
    removeTransform(f) {
      const m = _e();
      jn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!g.instance || !xr(g.latestValues)) continue;
        Lm(g.latestValues) && g.updateSnapshot();
        const v = _e(),
          E = g.measurePageBox();
        jn(v, E),
          ET(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v);
      }
      return xr(this.latestValues) && ET(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ke.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var w;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((w = this.parent) != null && w.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: E } = this.options;
      if (!(!this.layout || !(v || E))) {
        if (
          ((this.resolvedRelativeTargetAt = Ke.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const D = this.getClosestProjectingParent();
          D && D.layout && this.animationProgress !== 1
            ? ((this.relativeParent = D),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _e()),
              (this.relativeTargetOrigin = _e()),
              Vl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                D.layout.layoutBox
              ),
              jn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = _e()), (this.targetWithTransforms = _e())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              CM(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : jn(this.target, this.layout.layoutBox),
              CA(this.target, this.targetDelta))
            : jn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const D = this.getClosestProjectingParent();
          D &&
          !!D.resumingFrom == !!this.resumingFrom &&
          !D.options.layoutScroll &&
          D.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = D),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _e()),
              (this.relativeTargetOrigin = _e()),
              Vl(this.relativeTargetOrigin, this.target, D.target),
              jn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Lm(this.parent.latestValues) ||
          xA(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var B;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((B = this.parent) != null && B.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Ke.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      jn(this.layoutCorrected, this.layout.layoutBox);
      const E = this.treeScale.x,
        w = this.treeScale.y;
      DM(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = _e()));
      const { target: D } = f;
      if (!D) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (vT(this.prevProjectionDelta.x, this.projectionDelta.x),
          vT(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Dl(this.projectionDelta, this.layoutCorrected, D, this.latestValues),
        (this.treeScale.x !== E ||
          this.treeScale.y !== w ||
          !RT(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !RT(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", D));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = La()),
        (this.projectionDelta = La()),
        (this.projectionDeltaWithTransform = La());
    }
    setAnimationOrigin(f, m = !1) {
      const p = this.snapshot,
        g = p ? p.latestValues : {},
        v = { ...this.latestValues },
        E = La();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const w = _e(),
        D = p ? p.source : void 0,
        B = this.layout ? this.layout.source : void 0,
        F = D !== B,
        H = this.getStack(),
        $ = !H || H.members.length <= 1,
        st = !!(
          F &&
          !$ &&
          this.options.crossfade === !0 &&
          !this.path.some(AO)
        );
      this.animationProgress = 0;
      let nt;
      (this.mixTargetDelta = (mt) => {
        const it = mt / 1e3;
        VT(E.x, f.x, it),
          VT(E.y, f.y, it),
          this.setTargetDelta(E),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vl(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            bO(this.relativeTarget, this.relativeTargetOrigin, w, it),
            nt && aO(this.relativeTarget, nt) && (this.isProjectionDirty = !1),
            nt || (nt = _e()),
            jn(nt, this.relativeTarget)),
          F &&
            ((this.animationValues = v),
            tO(v, g, this.latestValues, it, st, $)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = it);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Bs(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = se.update(() => {
          (qc.hasAnimatedSinceResize = !0),
            (this.currentAnimation = YM(0, xT, {
              ...f,
              onUpdate: (m) => {
                this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(xT),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: p,
        layout: g,
        latestValues: v,
      } = f;
      if (!(!m || !p || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          zA(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          p = this.target || _e();
          const E = cn(this.layout.layoutBox.x);
          (p.x.min = f.target.x.min), (p.x.max = p.x.min + E);
          const w = cn(this.layout.layoutBox.y);
          (p.y.min = f.target.y.min), (p.y.max = p.y.min + w);
        }
        jn(m, p),
          Ua(m, v),
          Dl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new oO()),
        this.sharedNodes.get(f).add(m);
      const g = m.options.initialPromotionConfig;
      m.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      g && g.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const g = {};
      p.z && Qd("z", f, g, this.animationValues);
      for (let v = 0; v < Kd.length; v++)
        Qd(`rotate${Kd[v]}`, f, g, this.animationValues),
          Qd(`skew${Kd[v]}`, f, g, this.animationValues);
      f.render();
      for (const v in g)
        f.setStaticValue(v, g[v]),
          this.animationValues && (this.animationValues[v] = g[v]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return uO;
      const m = { visibility: "" },
        p = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = zc(f == null ? void 0 : f.pointerEvents) || ""),
          (m.transform = p ? p(this.latestValues, "") : "none"),
          m
        );
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const D = {};
        return (
          this.options.layoutId &&
            ((D.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (D.pointerEvents = zc(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !xr(this.latestValues) &&
            ((D.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)),
          D
        );
      }
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = lO(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v
        )),
        p && (m.transform = p(v, m.transform));
      const { x: E, y: w } = this.projectionDelta;
      (m.transformOrigin = `${E.origin * 100}% ${w.origin * 100}% 0`),
        g.animationValues
          ? (m.opacity =
              g === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (m.opacity =
              g === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const D in Bl) {
        if (v[D] === void 0) continue;
        const { correct: B, applyTo: F, isCSSVariable: H } = Bl[D],
          $ = m.transform === "none" ? v[D] : B(v[D], g);
        if (F) {
          const st = F.length;
          for (let nt = 0; nt < st; nt++) m[F[nt]] = $;
        } else
          H ? (this.options.visualElement.renderState.vars[D] = $) : (m[D] = $);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            g === this
              ? zc(f == null ? void 0 : f.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(CT),
        this.root.sharedNodes.clear();
    }
  };
}
function hO(n) {
  n.updateLayout();
}
function fO(n) {
  var i;
  const t = ((i = n.resumeFrom) == null ? void 0 : i.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && t && n.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = n.layout,
      { animationType: u } = n.options,
      f = t.source !== n.layout.source;
    u === "size"
      ? qn((E) => {
          const w = f ? t.measuredBox[E] : t.layoutBox[E],
            D = cn(w);
          (w.min = r[E].min), (w.max = w.min + D);
        })
      : zA(u, t.layoutBox, r) &&
        qn((E) => {
          const w = f ? t.measuredBox[E] : t.layoutBox[E],
            D = cn(r[E]);
          (w.max = w.min + D),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[E].max = n.relativeTarget[E].min + D));
        });
    const m = La();
    Dl(m, r, t.layoutBox);
    const p = La();
    f ? Dl(p, n.applyTransform(o, !0), t.measuredBox) : Dl(p, r, t.layoutBox);
    const g = !LA(m);
    let v = !1;
    if (!n.resumeFrom) {
      const E = n.getClosestProjectingParent();
      if (E && !E.resumeFrom) {
        const { snapshot: w, layout: D } = E;
        if (w && D) {
          const B = _e();
          Vl(B, t.layoutBox, w.layoutBox);
          const F = _e();
          Vl(F, r, D.layoutBox),
            kA(B, F) || (v = !0),
            E.options.layoutRoot &&
              ((n.relativeTarget = F),
              (n.relativeTargetOrigin = B),
              (n.relativeParent = E));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: p,
      layoutDelta: m,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v,
    });
  } else if (n.isLead()) {
    const { onExitComplete: r } = n.options;
    r && r();
  }
  n.options.transition = void 0;
}
function dO(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function mO(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function pO(n) {
  n.clearSnapshot();
}
function CT(n) {
  n.clearMeasurements();
}
function gO(n) {
  n.isLayoutDirty = !1;
}
function yO(n) {
  const { visualElement: t } = n.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function DT(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function vO(n) {
  n.resolveTargetDelta();
}
function _O(n) {
  n.calcProjection();
}
function TO(n) {
  n.resetSkewAndRotation();
}
function EO(n) {
  n.removeLeadSnapshot();
}
function VT(n, t, i) {
  (n.translate = ue(t.translate, 0, i)),
    (n.scale = ue(t.scale, 1, i)),
    (n.origin = t.origin),
    (n.originPoint = t.originPoint);
}
function MT(n, t, i, r) {
  (n.min = ue(t.min, i.min, r)), (n.max = ue(t.max, i.max, r));
}
function bO(n, t, i, r) {
  MT(n.x, t.x, i.x, r), MT(n.y, t.y, i.y, r);
}
function AO(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const SO = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  OT = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  IT = OT("applewebkit/") && !OT("chrome/") ? Math.round : Hn;
function NT(n) {
  (n.min = IT(n.min)), (n.max = IT(n.max));
}
function wO(n) {
  NT(n.x), NT(n.y);
}
function zA(n, t, i) {
  return (
    n === "position" || (n === "preserve-aspect" && !xM(wT(t), wT(i), 0.2))
  );
}
function RO(n) {
  var t;
  return n !== n.root && ((t = n.scroll) == null ? void 0 : t.wasRoot);
}
const xO = BA({
    attachResizeListener: (n, t) => Kl(n, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Yd = { current: void 0 },
  jA = BA({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Yd.current) {
        const n = new xO({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (Yd.current = n);
      }
      return Yd.current;
    },
    resetTransform: (n, t) => {
      n.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  CO = {
    pan: { Feature: GM },
    drag: { Feature: HM, ProjectionNode: jA, MeasureLayout: IA },
  };
function DO(n, t, i) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let r = document;
    const o = (i == null ? void 0 : i[n]) ?? r.querySelectorAll(n);
    return o ? Array.from(o) : [];
  }
  return Array.from(n);
}
function qA(n, t) {
  const i = DO(n),
    r = new AbortController(),
    o = { passive: !0, ...t, signal: r.signal };
  return [i, o, () => r.abort()];
}
function PT(n) {
  return !(n.pointerType === "touch" || AA());
}
function VO(n, t, i = {}) {
  const [r, o, u] = qA(n, i),
    f = (m) => {
      if (!PT(m)) return;
      const { target: p } = m,
        g = t(p, m);
      if (typeof g != "function" || !p) return;
      const v = (E) => {
        PT(E) && (g(E), p.removeEventListener("pointerleave", v));
      };
      p.addEventListener("pointerleave", v, o);
    };
  return (
    r.forEach((m) => {
      m.addEventListener("pointerenter", f, o);
    }),
    u
  );
}
function LT(n, t, i) {
  const { props: r } = n;
  n.animationState &&
    r.whileHover &&
    n.animationState.setActive("whileHover", i === "Start");
  const o = "onHover" + i,
    u = r[o];
  u && se.postRender(() => u(t, tu(t)));
}
class MO extends js {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = VO(
        t,
        (i, r) => (LT(this.node, r, "Start"), (o) => LT(this.node, o, "End"))
      ));
  }
  unmount() {}
}
class OO extends js {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Wl(
      Kl(this.node.current, "focus", () => this.onFocus()),
      Kl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const HA = (n, t) => (t ? (n === t ? !0 : HA(n, t.parentElement)) : !1),
  IO = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function NO(n) {
  return IO.has(n.tagName) || n.tabIndex !== -1;
}
const bl = new WeakSet();
function kT(n) {
  return (t) => {
    t.key === "Enter" && n(t);
  };
}
function Xd(n, t) {
  n.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const PO = (n, t) => {
  const i = n.currentTarget;
  if (!i) return;
  const r = kT(() => {
    if (bl.has(i)) return;
    Xd(i, "down");
    const o = kT(() => {
        Xd(i, "up");
      }),
      u = () => Xd(i, "cancel");
    i.addEventListener("keyup", o, t), i.addEventListener("blur", u, t);
  });
  i.addEventListener("keydown", r, t),
    i.addEventListener("blur", () => i.removeEventListener("keydown", r), t);
};
function UT(n) {
  return Xp(n) && !AA();
}
function LO(n, t, i = {}) {
  const [r, o, u] = qA(n, i),
    f = (m) => {
      const p = m.currentTarget;
      if (!UT(m) || bl.has(p)) return;
      bl.add(p);
      const g = t(p, m),
        v = (D, B) => {
          window.removeEventListener("pointerup", E),
            window.removeEventListener("pointercancel", w),
            !(!UT(D) || !bl.has(p)) &&
              (bl.delete(p), typeof g == "function" && g(D, { success: B }));
        },
        E = (D) => {
          v(
            D,
            p === window ||
              p === document ||
              i.useGlobalTarget ||
              HA(p, D.target)
          );
        },
        w = (D) => {
          v(D, !1);
        };
      window.addEventListener("pointerup", E, o),
        window.addEventListener("pointercancel", w, o);
    };
  return (
    r.forEach((m) => {
      (i.useGlobalTarget ? window : m).addEventListener("pointerdown", f, o),
        m instanceof HTMLElement &&
          (m.addEventListener("focus", (g) => PO(g, o)),
          !NO(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    u
  );
}
function BT(n, t, i) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    r.whileTap &&
    n.animationState.setActive("whileTap", i === "Start");
  const o = "onTap" + (i === "End" ? "" : i),
    u = r[o];
  u && se.postRender(() => u(t, tu(t)));
}
class kO extends js {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = LO(
        t,
        (i, r) => (
          BT(this.node, r, "Start"),
          (o, { success: u }) => BT(this.node, o, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Bm = new WeakMap(),
  Zd = new WeakMap(),
  UO = (n) => {
    const t = Bm.get(n.target);
    t && t(n);
  },
  BO = (n) => {
    n.forEach(UO);
  };
function zO({ root: n, ...t }) {
  const i = n || document;
  Zd.has(i) || Zd.set(i, {});
  const r = Zd.get(i),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(BO, { root: n, ...t })), r[o];
}
function jO(n, t, i) {
  const r = zO(t);
  return (
    Bm.set(n, i),
    r.observe(n),
    () => {
      Bm.delete(n), r.unobserve(n);
    }
  );
}
const qO = { some: 0, all: 1 };
class HO extends js {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: i, margin: r, amount: o = "some", once: u } = t,
      f = {
        root: i ? i.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : qO[o],
      },
      m = (p) => {
        const { isIntersecting: g } = p;
        if (
          this.isInView === g ||
          ((this.isInView = g), u && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: v, onViewportLeave: E } = this.node.getProps(),
          w = g ? v : E;
        w && w(p);
      };
    return jO(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(GO(t, i)) && this.startObserver();
  }
  unmount() {}
}
function GO({ viewport: n = {} }, { viewport: t = {} } = {}) {
  return (i) => n[i] !== t[i];
}
const FO = {
    inView: { Feature: HO },
    tap: { Feature: kO },
    focus: { Feature: OO },
    hover: { Feature: MO },
  },
  KO = { layout: { ProjectionNode: jA, MeasureLayout: IA } },
  zm = { current: null },
  GA = { current: !1 };
function QO() {
  if (((GA.current = !0), !!yp))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (zm.current = n.matches);
      n.addListener(t), t();
    } else zm.current = !1;
}
const YO = [...fA, We, zs],
  XO = (n) => YO.find(hA(n)),
  ZO = new WeakMap();
function $O(n, t, i) {
  for (const r in t) {
    const o = t[r],
      u = i[r];
    if (nn(o)) n.addValue(r, o);
    else if (nn(u)) n.addValue(r, ql(o, { owner: n }));
    else if (u !== o)
      if (n.hasValue(r)) {
        const f = n.getValue(r);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = n.getStaticValue(r);
        n.addValue(r, ql(f !== void 0 ? f : o, { owner: n }));
      }
  }
  for (const r in i) t[r] === void 0 && n.removeValue(r);
  return t;
}
const zT = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class JO {
  scrapeMotionValuesFromProps(t, i, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: i,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: u,
      visualState: f,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Gp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const D = yi.now();
        this.renderScheduledAt < D &&
          ((this.renderScheduledAt = D), se.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: g, onUpdate: v } = f;
    (this.onUpdate = v),
      (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = i.initial ? { ...p } : {}),
      (this.renderState = g),
      (this.parent = t),
      (this.props = i),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = m),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = Eh(i)),
      (this.isVariantNode = Sb(i)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: E, ...w } = this.scrapeMotionValuesFromProps(
      i,
      {},
      this
    );
    for (const D in w) {
      const B = w[D];
      p[D] !== void 0 && nn(B) && B.set(p[D], !1);
    }
  }
  mount(t) {
    (this.current = t),
      ZO.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, r) => this.bindToMotionValue(r, i)),
      GA.current || QO(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : zm.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Bs(this.notifyUpdate),
      Bs(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const i = this.features[t];
      i && (i.unmount(), (i.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, i) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Lr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = i.on("change", (m) => {
        (this.latestValues[t] = m),
          this.props.onUpdate && se.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = i.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, t, i)),
      this.valueSubscriptions.set(t, () => {
        o(), u(), f && f(), i.owner && i.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xa) {
      const i = Xa[t];
      if (!i) continue;
      const { isEnabled: r, Feature: o } = i;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const u = this.features[t];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : _e();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = i);
    for (let r = 0; r < zT.length; r++) {
      const o = zT[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const u = "on" + o,
        f = t[u];
      f && (this.propEventSubscriptions[o] = this.on(o, f));
    }
    (this.prevMotionValues = $O(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i)
      return (
        i.variantChildren && i.variantChildren.add(t),
        () => i.variantChildren.delete(t)
      );
  }
  addValue(t, i) {
    const r = this.values.get(t);
    i !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, i),
      this.values.set(t, i),
      (this.latestValues[t] = i.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        i !== void 0 &&
        ((r = ql(i === null ? void 0 : i, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, i) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (uA(r) || Wb(r))
          ? (r = parseFloat(r))
          : !XO(r) && zs.test(i) && (r = aA(t, i)),
        this.setBaseTarget(t, nn(r) ? r.get() : r)),
      nn(r) ? r.get() : r
    );
  }
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  getBaseTarget(t) {
    var u;
    const { initial: i } = this.props;
    let r;
    if (typeof i == "string" || typeof i == "object") {
      const f = Mp(
        this.props,
        i,
        (u = this.presenceContext) == null ? void 0 : u.custom
      );
      f && (r = f[t]);
    }
    if (i && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !nn(o)
      ? o
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new Lp()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
}
class FA extends JO {
  constructor() {
    super(...arguments), (this.KeyframeResolver = dA);
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    return t.style ? t.style[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: r }) {
    delete i[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    nn(t) &&
      (this.childSubscription = t.on("change", (i) => {
        this.current && (this.current.textContent = `${i}`);
      }));
  }
}
function WO(n) {
  return window.getComputedStyle(n);
}
class tI extends FA {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Pb);
  }
  readValueFromInstance(t, i) {
    if (Lr.has(i)) return sV(t, i);
    {
      const r = WO(t),
        o = (Ap(i) ? r.getPropertyValue(i) : r[i]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return DA(t, i);
  }
  build(t, i, r) {
    Rp(t, i, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, r) {
    return Op(t, i, r);
  }
}
class eI extends FA {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = _e),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          Nb(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (Lr.has(i)) {
      const r = rA(i);
      return (r && r.default) || 0;
    }
    return (i = Lb.has(i) ? i : bp(i)), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, r) {
    return Ub(t, i, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      se.postRender(this.updateDimensions);
  }
  build(t, i, r) {
    Dp(t, i, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, i, r, o) {
    kb(t, i, r, o);
  }
  mount(t) {
    (this.isSVGTag = Vp(t.tagName)), super.mount(t);
  }
}
const nI = (n, t) =>
    Cp(n) ? new eI(t) : new tI(t, { allowProjection: n !== pt.Fragment }),
  iI = bD({ ...vM, ...FO, ...CO, ...KO }, nI),
  jm = U2(iI);
function KA(n) {
  var t,
    i,
    r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (t = 0; t < o; t++)
        n[t] && (i = KA(n[t])) && (r && (r += " "), (r += i));
    } else for (i in n) n[i] && (r && (r += " "), (r += i));
  return r;
}
function QA() {
  for (var n, t, i = 0, r = "", o = arguments.length; i < o; i++)
    (n = arguments[i]) && (t = KA(n)) && (r && (r += " "), (r += t));
  return r;
}
const Zp = "-",
  sI = (n) => {
    const t = aI(n),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: r } = n;
    return {
      getClassGroupId: (f) => {
        const m = f.split(Zp);
        return m[0] === "" && m.length !== 1 && m.shift(), YA(m, t) || rI(f);
      },
      getConflictingClassGroupIds: (f, m) => {
        const p = i[f] || [];
        return m && r[f] ? [...p, ...r[f]] : p;
      },
    };
  },
  YA = (n, t) => {
    var f;
    if (n.length === 0) return t.classGroupId;
    const i = n[0],
      r = t.nextPart.get(i),
      o = r ? YA(n.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const u = n.join(Zp);
    return (f = t.validators.find(({ validator: m }) => m(u))) == null
      ? void 0
      : f.classGroupId;
  },
  jT = /^\[(.+)\]$/,
  rI = (n) => {
    if (jT.test(n)) {
      const t = jT.exec(n)[1],
        i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  aI = (n) => {
    const { theme: t, classGroups: i } = n,
      r = { nextPart: new Map(), validators: [] };
    for (const o in i) qm(i[o], r, o, t);
    return r;
  },
  qm = (n, t, i, r) => {
    n.forEach((o) => {
      if (typeof o == "string") {
        const u = o === "" ? t : qT(t, o);
        u.classGroupId = i;
        return;
      }
      if (typeof o == "function") {
        if (oI(o)) {
          qm(o(r), t, i, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: i });
        return;
      }
      Object.entries(o).forEach(([u, f]) => {
        qm(f, qT(t, u), i, r);
      });
    });
  },
  qT = (n, t) => {
    let i = n;
    return (
      t.split(Zp).forEach((r) => {
        i.nextPart.has(r) ||
          i.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(r));
      }),
      i
    );
  },
  oI = (n) => n.isThemeGetter,
  lI = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      i = new Map(),
      r = new Map();
    const o = (u, f) => {
      i.set(u, f), t++, t > n && ((t = 0), (r = i), (i = new Map()));
    };
    return {
      get(u) {
        let f = i.get(u);
        if (f !== void 0) return f;
        if ((f = r.get(u)) !== void 0) return o(u, f), f;
      },
      set(u, f) {
        i.has(u) ? i.set(u, f) : o(u, f);
      },
    };
  },
  Hm = "!",
  Gm = ":",
  uI = Gm.length,
  cI = (n) => {
    const { prefix: t, experimentalParseClassName: i } = n;
    let r = (o) => {
      const u = [];
      let f = 0,
        m = 0,
        p = 0,
        g;
      for (let B = 0; B < o.length; B++) {
        let F = o[B];
        if (f === 0 && m === 0) {
          if (F === Gm) {
            u.push(o.slice(p, B)), (p = B + uI);
            continue;
          }
          if (F === "/") {
            g = B;
            continue;
          }
        }
        F === "[" ? f++ : F === "]" ? f-- : F === "(" ? m++ : F === ")" && m--;
      }
      const v = u.length === 0 ? o : o.substring(p),
        E = hI(v),
        w = E !== v,
        D = g && g > p ? g - p : void 0;
      return {
        modifiers: u,
        hasImportantModifier: w,
        baseClassName: E,
        maybePostfixModifierPosition: D,
      };
    };
    if (t) {
      const o = t + Gm,
        u = r;
      r = (f) =>
        f.startsWith(o)
          ? u(f.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (i) {
      const o = r;
      r = (u) => i({ className: u, parseClassName: o });
    }
    return r;
  },
  hI = (n) =>
    n.endsWith(Hm)
      ? n.substring(0, n.length - 1)
      : n.startsWith(Hm)
      ? n.substring(1)
      : n,
  fI = (n) => {
    const t = Object.fromEntries(n.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const o = [];
      let u = [];
      return (
        r.forEach((f) => {
          f[0] === "[" || t[f] ? (o.push(...u.sort(), f), (u = [])) : u.push(f);
        }),
        o.push(...u.sort()),
        o
      );
    };
  },
  dI = (n) => ({
    cache: lI(n.cacheSize),
    parseClassName: cI(n),
    sortModifiers: fI(n),
    ...sI(n),
  }),
  mI = /\s+/,
  pI = (n, t) => {
    const {
        parseClassName: i,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: u,
      } = t,
      f = [],
      m = n.trim().split(mI);
    let p = "";
    for (let g = m.length - 1; g >= 0; g -= 1) {
      const v = m[g],
        {
          isExternal: E,
          modifiers: w,
          hasImportantModifier: D,
          baseClassName: B,
          maybePostfixModifierPosition: F,
        } = i(v);
      if (E) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      let H = !!F,
        $ = r(H ? B.substring(0, F) : B);
      if (!$) {
        if (!H) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        if ((($ = r(B)), !$)) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        H = !1;
      }
      const st = u(w).join(":"),
        nt = D ? st + Hm : st,
        mt = nt + $;
      if (f.includes(mt)) continue;
      f.push(mt);
      const it = o($, H);
      for (let ct = 0; ct < it.length; ++ct) {
        const M = it[ct];
        f.push(nt + M);
      }
      p = v + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function gI() {
  let n = 0,
    t,
    i,
    r = "";
  for (; n < arguments.length; )
    (t = arguments[n++]) && (i = XA(t)) && (r && (r += " "), (r += i));
  return r;
}
const XA = (n) => {
  if (typeof n == "string") return n;
  let t,
    i = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (t = XA(n[r])) && (i && (i += " "), (i += t));
  return i;
};
function yI(n, ...t) {
  let i,
    r,
    o,
    u = f;
  function f(p) {
    const g = t.reduce((v, E) => E(v), n());
    return (i = dI(g)), (r = i.cache.get), (o = i.cache.set), (u = m), m(p);
  }
  function m(p) {
    const g = r(p);
    if (g) return g;
    const v = pI(p, i);
    return o(p, v), v;
  }
  return function () {
    return u(gI.apply(null, arguments));
  };
}
const Oe = (n) => {
    const t = (i) => i[n] || [];
    return (t.isThemeGetter = !0), t;
  },
  ZA = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  $A = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vI = /^\d+\/\d+$/,
  _I = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  TI =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  EI = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  bI = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  AI =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Da = (n) => vI.test(n),
  Dt = (n) => !!n && !Number.isNaN(Number(n)),
  Rs = (n) => !!n && Number.isInteger(Number(n)),
  $d = (n) => n.endsWith("%") && Dt(n.slice(0, -1)),
  Qi = (n) => _I.test(n),
  SI = () => !0,
  wI = (n) => TI.test(n) && !EI.test(n),
  JA = () => !1,
  RI = (n) => bI.test(n),
  xI = (n) => AI.test(n),
  CI = (n) => !ft(n) && !dt(n),
  DI = (n) => io(n, eS, JA),
  ft = (n) => ZA.test(n),
  wr = (n) => io(n, nS, wI),
  Jd = (n) => io(n, NI, Dt),
  HT = (n) => io(n, WA, JA),
  VI = (n) => io(n, tS, xI),
  Nc = (n) => io(n, iS, RI),
  dt = (n) => $A.test(n),
  yl = (n) => so(n, nS),
  MI = (n) => so(n, PI),
  GT = (n) => so(n, WA),
  OI = (n) => so(n, eS),
  II = (n) => so(n, tS),
  Pc = (n) => so(n, iS, !0),
  io = (n, t, i) => {
    const r = ZA.exec(n);
    return r ? (r[1] ? t(r[1]) : i(r[2])) : !1;
  },
  so = (n, t, i = !1) => {
    const r = $A.exec(n);
    return r ? (r[1] ? t(r[1]) : i) : !1;
  },
  WA = (n) => n === "position" || n === "percentage",
  tS = (n) => n === "image" || n === "url",
  eS = (n) => n === "length" || n === "size" || n === "bg-size",
  nS = (n) => n === "length",
  NI = (n) => n === "number",
  PI = (n) => n === "family-name",
  iS = (n) => n === "shadow",
  LI = () => {
    const n = Oe("color"),
      t = Oe("font"),
      i = Oe("text"),
      r = Oe("font-weight"),
      o = Oe("tracking"),
      u = Oe("leading"),
      f = Oe("breakpoint"),
      m = Oe("container"),
      p = Oe("spacing"),
      g = Oe("radius"),
      v = Oe("shadow"),
      E = Oe("inset-shadow"),
      w = Oe("text-shadow"),
      D = Oe("drop-shadow"),
      B = Oe("blur"),
      F = Oe("perspective"),
      H = Oe("aspect"),
      $ = Oe("ease"),
      st = Oe("animate"),
      nt = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      mt = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      it = () => [...mt(), dt, ft],
      ct = () => ["auto", "hidden", "clip", "visible", "scroll"],
      M = () => ["auto", "contain", "none"],
      A = () => [dt, ft, p],
      R = () => [Da, "full", "auto", ...A()],
      O = () => [Rs, "none", "subgrid", dt, ft],
      N = () => ["auto", { span: ["full", Rs, dt, ft] }, Rs, dt, ft],
      P = () => [Rs, "auto", dt, ft],
      C = () => ["auto", "min", "max", "fr", dt, ft],
      re = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Kt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      K = () => ["auto", ...A()],
      et = () => [
        Da,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...A(),
      ],
      X = () => [n, dt, ft],
      Vt = () => [...mt(), GT, HT, { position: [dt, ft] }],
      V = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      W = () => ["auto", "cover", "contain", OI, DI, { size: [dt, ft] }],
      at = () => [$d, yl, wr],
      tt = () => ["", "none", "full", g, dt, ft],
      lt = () => ["", Dt, yl, wr],
      wt = () => ["solid", "dashed", "dotted", "double"],
      bt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      It = () => [Dt, $d, GT, HT],
      Yt = () => ["", "none", B, dt, ft],
      sn = () => ["none", Dt, dt, ft],
      gn = () => ["none", Dt, dt, ft],
      yn = () => [Dt, dt, ft],
      xn = () => [Da, "full", ...A()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Qi],
        breakpoint: [Qi],
        color: [SI],
        container: [Qi],
        "drop-shadow": [Qi],
        ease: ["in", "out", "in-out"],
        font: [CI],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Qi],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Qi],
        shadow: [Qi],
        spacing: ["px", Dt],
        text: [Qi],
        "text-shadow": [Qi],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Da, ft, dt, H] }],
        container: ["container"],
        columns: [{ columns: [Dt, ft, dt, m] }],
        "break-after": [{ "break-after": nt() }],
        "break-before": [{ "break-before": nt() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: it() }],
        overflow: [{ overflow: ct() }],
        "overflow-x": [{ "overflow-x": ct() }],
        "overflow-y": [{ "overflow-y": ct() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: R() }],
        "inset-x": [{ "inset-x": R() }],
        "inset-y": [{ "inset-y": R() }],
        start: [{ start: R() }],
        end: [{ end: R() }],
        top: [{ top: R() }],
        right: [{ right: R() }],
        bottom: [{ bottom: R() }],
        left: [{ left: R() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Rs, "auto", dt, ft] }],
        basis: [{ basis: [Da, "full", "auto", m, ...A()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Dt, Da, "auto", "initial", "none", ft] }],
        grow: [{ grow: ["", Dt, dt, ft] }],
        shrink: [{ shrink: ["", Dt, dt, ft] }],
        order: [{ order: [Rs, "first", "last", "none", dt, ft] }],
        "grid-cols": [{ "grid-cols": O() }],
        "col-start-end": [{ col: N() }],
        "col-start": [{ "col-start": P() }],
        "col-end": [{ "col-end": P() }],
        "grid-rows": [{ "grid-rows": O() }],
        "row-start-end": [{ row: N() }],
        "row-start": [{ "row-start": P() }],
        "row-end": [{ "row-end": P() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": C() }],
        "auto-rows": [{ "auto-rows": C() }],
        gap: [{ gap: A() }],
        "gap-x": [{ "gap-x": A() }],
        "gap-y": [{ "gap-y": A() }],
        "justify-content": [{ justify: [...re(), "normal"] }],
        "justify-items": [{ "justify-items": [...Kt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Kt()] }],
        "align-content": [{ content: ["normal", ...re()] }],
        "align-items": [{ items: [...Kt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Kt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": re() }],
        "place-items": [{ "place-items": [...Kt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Kt()] }],
        p: [{ p: A() }],
        px: [{ px: A() }],
        py: [{ py: A() }],
        ps: [{ ps: A() }],
        pe: [{ pe: A() }],
        pt: [{ pt: A() }],
        pr: [{ pr: A() }],
        pb: [{ pb: A() }],
        pl: [{ pl: A() }],
        m: [{ m: K() }],
        mx: [{ mx: K() }],
        my: [{ my: K() }],
        ms: [{ ms: K() }],
        me: [{ me: K() }],
        mt: [{ mt: K() }],
        mr: [{ mr: K() }],
        mb: [{ mb: K() }],
        ml: [{ ml: K() }],
        "space-x": [{ "space-x": A() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": A() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: et() }],
        w: [{ w: [m, "screen", ...et()] }],
        "min-w": [{ "min-w": [m, "screen", "none", ...et()] }],
        "max-w": [
          { "max-w": [m, "screen", "none", "prose", { screen: [f] }, ...et()] },
        ],
        h: [{ h: ["screen", ...et()] }],
        "min-h": [{ "min-h": ["screen", "none", ...et()] }],
        "max-h": [{ "max-h": ["screen", ...et()] }],
        "font-size": [{ text: ["base", i, yl, wr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, dt, Jd] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              $d,
              ft,
            ],
          },
        ],
        "font-family": [{ font: [MI, ft, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, dt, ft] }],
        "line-clamp": [{ "line-clamp": [Dt, "none", dt, Jd] }],
        leading: [{ leading: [u, ...A()] }],
        "list-image": [{ "list-image": ["none", dt, ft] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", dt, ft] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: X() }],
        "text-color": [{ text: X() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...wt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Dt, "from-font", "auto", dt, wr] },
        ],
        "text-decoration-color": [{ decoration: X() }],
        "underline-offset": [{ "underline-offset": [Dt, "auto", dt, ft] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: A() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              dt,
              ft,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", dt, ft] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Vt() }],
        "bg-repeat": [{ bg: V() }],
        "bg-size": [{ bg: W() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Rs,
                  dt,
                  ft,
                ],
                radial: ["", dt, ft],
                conic: [Rs, dt, ft],
              },
              II,
              VI,
            ],
          },
        ],
        "bg-color": [{ bg: X() }],
        "gradient-from-pos": [{ from: at() }],
        "gradient-via-pos": [{ via: at() }],
        "gradient-to-pos": [{ to: at() }],
        "gradient-from": [{ from: X() }],
        "gradient-via": [{ via: X() }],
        "gradient-to": [{ to: X() }],
        rounded: [{ rounded: tt() }],
        "rounded-s": [{ "rounded-s": tt() }],
        "rounded-e": [{ "rounded-e": tt() }],
        "rounded-t": [{ "rounded-t": tt() }],
        "rounded-r": [{ "rounded-r": tt() }],
        "rounded-b": [{ "rounded-b": tt() }],
        "rounded-l": [{ "rounded-l": tt() }],
        "rounded-ss": [{ "rounded-ss": tt() }],
        "rounded-se": [{ "rounded-se": tt() }],
        "rounded-ee": [{ "rounded-ee": tt() }],
        "rounded-es": [{ "rounded-es": tt() }],
        "rounded-tl": [{ "rounded-tl": tt() }],
        "rounded-tr": [{ "rounded-tr": tt() }],
        "rounded-br": [{ "rounded-br": tt() }],
        "rounded-bl": [{ "rounded-bl": tt() }],
        "border-w": [{ border: lt() }],
        "border-w-x": [{ "border-x": lt() }],
        "border-w-y": [{ "border-y": lt() }],
        "border-w-s": [{ "border-s": lt() }],
        "border-w-e": [{ "border-e": lt() }],
        "border-w-t": [{ "border-t": lt() }],
        "border-w-r": [{ "border-r": lt() }],
        "border-w-b": [{ "border-b": lt() }],
        "border-w-l": [{ "border-l": lt() }],
        "divide-x": [{ "divide-x": lt() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": lt() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...wt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...wt(), "hidden", "none"] }],
        "border-color": [{ border: X() }],
        "border-color-x": [{ "border-x": X() }],
        "border-color-y": [{ "border-y": X() }],
        "border-color-s": [{ "border-s": X() }],
        "border-color-e": [{ "border-e": X() }],
        "border-color-t": [{ "border-t": X() }],
        "border-color-r": [{ "border-r": X() }],
        "border-color-b": [{ "border-b": X() }],
        "border-color-l": [{ "border-l": X() }],
        "divide-color": [{ divide: X() }],
        "outline-style": [{ outline: [...wt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Dt, dt, ft] }],
        "outline-w": [{ outline: ["", Dt, yl, wr] }],
        "outline-color": [{ outline: X() }],
        shadow: [{ shadow: ["", "none", v, Pc, Nc] }],
        "shadow-color": [{ shadow: X() }],
        "inset-shadow": [{ "inset-shadow": ["none", E, Pc, Nc] }],
        "inset-shadow-color": [{ "inset-shadow": X() }],
        "ring-w": [{ ring: lt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: X() }],
        "ring-offset-w": [{ "ring-offset": [Dt, wr] }],
        "ring-offset-color": [{ "ring-offset": X() }],
        "inset-ring-w": [{ "inset-ring": lt() }],
        "inset-ring-color": [{ "inset-ring": X() }],
        "text-shadow": [{ "text-shadow": ["none", w, Pc, Nc] }],
        "text-shadow-color": [{ "text-shadow": X() }],
        opacity: [{ opacity: [Dt, dt, ft] }],
        "mix-blend": [
          { "mix-blend": [...bt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": bt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Dt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": It() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": It() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": X() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": X() }],
        "mask-image-t-from-pos": [{ "mask-t-from": It() }],
        "mask-image-t-to-pos": [{ "mask-t-to": It() }],
        "mask-image-t-from-color": [{ "mask-t-from": X() }],
        "mask-image-t-to-color": [{ "mask-t-to": X() }],
        "mask-image-r-from-pos": [{ "mask-r-from": It() }],
        "mask-image-r-to-pos": [{ "mask-r-to": It() }],
        "mask-image-r-from-color": [{ "mask-r-from": X() }],
        "mask-image-r-to-color": [{ "mask-r-to": X() }],
        "mask-image-b-from-pos": [{ "mask-b-from": It() }],
        "mask-image-b-to-pos": [{ "mask-b-to": It() }],
        "mask-image-b-from-color": [{ "mask-b-from": X() }],
        "mask-image-b-to-color": [{ "mask-b-to": X() }],
        "mask-image-l-from-pos": [{ "mask-l-from": It() }],
        "mask-image-l-to-pos": [{ "mask-l-to": It() }],
        "mask-image-l-from-color": [{ "mask-l-from": X() }],
        "mask-image-l-to-color": [{ "mask-l-to": X() }],
        "mask-image-x-from-pos": [{ "mask-x-from": It() }],
        "mask-image-x-to-pos": [{ "mask-x-to": It() }],
        "mask-image-x-from-color": [{ "mask-x-from": X() }],
        "mask-image-x-to-color": [{ "mask-x-to": X() }],
        "mask-image-y-from-pos": [{ "mask-y-from": It() }],
        "mask-image-y-to-pos": [{ "mask-y-to": It() }],
        "mask-image-y-from-color": [{ "mask-y-from": X() }],
        "mask-image-y-to-color": [{ "mask-y-to": X() }],
        "mask-image-radial": [{ "mask-radial": [dt, ft] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": It() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": It() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": X() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": X() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": mt() }],
        "mask-image-conic-pos": [{ "mask-conic": [Dt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": It() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": It() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": X() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": X() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Vt() }],
        "mask-repeat": [{ mask: V() }],
        "mask-size": [{ mask: W() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", dt, ft] }],
        filter: [{ filter: ["", "none", dt, ft] }],
        blur: [{ blur: Yt() }],
        brightness: [{ brightness: [Dt, dt, ft] }],
        contrast: [{ contrast: [Dt, dt, ft] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", D, Pc, Nc] }],
        "drop-shadow-color": [{ "drop-shadow": X() }],
        grayscale: [{ grayscale: ["", Dt, dt, ft] }],
        "hue-rotate": [{ "hue-rotate": [Dt, dt, ft] }],
        invert: [{ invert: ["", Dt, dt, ft] }],
        saturate: [{ saturate: [Dt, dt, ft] }],
        sepia: [{ sepia: ["", Dt, dt, ft] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", dt, ft] }],
        "backdrop-blur": [{ "backdrop-blur": Yt() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Dt, dt, ft] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Dt, dt, ft] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Dt, dt, ft] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Dt, dt, ft] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Dt, dt, ft] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Dt, dt, ft] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Dt, dt, ft] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Dt, dt, ft] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": A() }],
        "border-spacing-x": [{ "border-spacing-x": A() }],
        "border-spacing-y": [{ "border-spacing-y": A() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              dt,
              ft,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Dt, "initial", dt, ft] }],
        ease: [{ ease: ["linear", "initial", $, dt, ft] }],
        delay: [{ delay: [Dt, dt, ft] }],
        animate: [{ animate: ["none", st, dt, ft] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [F, dt, ft] }],
        "perspective-origin": [{ "perspective-origin": it() }],
        rotate: [{ rotate: sn() }],
        "rotate-x": [{ "rotate-x": sn() }],
        "rotate-y": [{ "rotate-y": sn() }],
        "rotate-z": [{ "rotate-z": sn() }],
        scale: [{ scale: gn() }],
        "scale-x": [{ "scale-x": gn() }],
        "scale-y": [{ "scale-y": gn() }],
        "scale-z": [{ "scale-z": gn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: yn() }],
        "skew-x": [{ "skew-x": yn() }],
        "skew-y": [{ "skew-y": yn() }],
        transform: [{ transform: [dt, ft, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: it() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: xn() }],
        "translate-x": [{ "translate-x": xn() }],
        "translate-y": [{ "translate-y": xn() }],
        "translate-z": [{ "translate-z": xn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: X() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: X() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              dt,
              ft,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": A() }],
        "scroll-mx": [{ "scroll-mx": A() }],
        "scroll-my": [{ "scroll-my": A() }],
        "scroll-ms": [{ "scroll-ms": A() }],
        "scroll-me": [{ "scroll-me": A() }],
        "scroll-mt": [{ "scroll-mt": A() }],
        "scroll-mr": [{ "scroll-mr": A() }],
        "scroll-mb": [{ "scroll-mb": A() }],
        "scroll-ml": [{ "scroll-ml": A() }],
        "scroll-p": [{ "scroll-p": A() }],
        "scroll-px": [{ "scroll-px": A() }],
        "scroll-py": [{ "scroll-py": A() }],
        "scroll-ps": [{ "scroll-ps": A() }],
        "scroll-pe": [{ "scroll-pe": A() }],
        "scroll-pt": [{ "scroll-pt": A() }],
        "scroll-pr": [{ "scroll-pr": A() }],
        "scroll-pb": [{ "scroll-pb": A() }],
        "scroll-pl": [{ "scroll-pl": A() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", dt, ft],
          },
        ],
        fill: [{ fill: ["none", ...X()] }],
        "stroke-w": [{ stroke: [Dt, yl, wr, Jd] }],
        stroke: [{ stroke: ["none", ...X()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  kI = yI(LI);
function eu(...n) {
  return kI(QA(n));
}
function UI({ className: n, ...t }) {
  return qt.jsx("div", {
    "data-slot": "card",
    className: eu(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      n
    ),
    ...t,
  });
}
function FT({ className: n, ...t }) {
  return qt.jsx("div", {
    "data-slot": "card-header",
    className: eu(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      n
    ),
    ...t,
  });
}
function KT({ className: n, ...t }) {
  return qt.jsx("div", {
    "data-slot": "card-title",
    className: eu("leading-none font-semibold", n),
    ...t,
  });
}
function QT({ className: n, ...t }) {
  return qt.jsx("div", {
    "data-slot": "card-content",
    className: eu("px-6", n),
    ...t,
  });
}
function YT(n, t) {
  if (typeof n == "function") return n(t);
  n != null && (n.current = t);
}
function BI(...n) {
  return (t) => {
    let i = !1;
    const r = n.map((o) => {
      const u = YT(o, t);
      return !i && typeof u == "function" && (i = !0), u;
    });
    if (i)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const u = r[o];
          typeof u == "function" ? u() : YT(n[o], null);
        }
      };
  };
}
function zI(n) {
  const t = qI(n),
    i = pt.forwardRef((r, o) => {
      const { children: u, ...f } = r,
        m = pt.Children.toArray(u),
        p = m.find(GI);
      if (p) {
        const g = p.props.children,
          v = m.map((E) =>
            E === p
              ? pt.Children.count(g) > 1
                ? pt.Children.only(null)
                : pt.isValidElement(g)
                ? g.props.children
                : null
              : E
          );
        return qt.jsx(t, {
          ...f,
          ref: o,
          children: pt.isValidElement(g) ? pt.cloneElement(g, void 0, v) : null,
        });
      }
      return qt.jsx(t, { ...f, ref: o, children: u });
    });
  return (i.displayName = `${n}.Slot`), i;
}
var jI = zI("Slot");
function qI(n) {
  const t = pt.forwardRef((i, r) => {
    const { children: o, ...u } = i;
    if (pt.isValidElement(o)) {
      const f = KI(o),
        m = FI(u, o.props);
      return (
        o.type !== pt.Fragment && (m.ref = r ? BI(r, f) : f),
        pt.cloneElement(o, m)
      );
    }
    return pt.Children.count(o) > 1 ? pt.Children.only(null) : null;
  });
  return (t.displayName = `${n}.SlotClone`), t;
}
var HI = Symbol("radix.slottable");
function GI(n) {
  return (
    pt.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === HI
  );
}
function FI(n, t) {
  const i = { ...t };
  for (const r in t) {
    const o = n[r],
      u = t[r];
    /^on[A-Z]/.test(r)
      ? o && u
        ? (i[r] = (...m) => {
            u(...m), o(...m);
          })
        : o && (i[r] = o)
      : r === "style"
      ? (i[r] = { ...o, ...u })
      : r === "className" && (i[r] = [o, u].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function KI(n) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : r.get,
    i = t && "isReactWarning" in t && t.isReactWarning;
  return i
    ? n.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : o.get),
      (i = t && "isReactWarning" in t && t.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
const XT = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  ZT = QA,
  QI = (n, t) => (i) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ZT(
        n,
        i == null ? void 0 : i.class,
        i == null ? void 0 : i.className
      );
    const { variants: o, defaultVariants: u } = t,
      f = Object.keys(o).map((g) => {
        const v = i == null ? void 0 : i[g],
          E = u == null ? void 0 : u[g];
        if (v === null) return null;
        const w = XT(v) || XT(E);
        return o[g][w];
      }),
      m =
        i &&
        Object.entries(i).reduce((g, v) => {
          let [E, w] = v;
          return w === void 0 || (g[E] = w), g;
        }, {}),
      p =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((g, v) => {
              let { class: E, className: w, ...D } = v;
              return Object.entries(D).every((B) => {
                let [F, H] = B;
                return Array.isArray(H)
                  ? H.includes({ ...u, ...m }[F])
                  : { ...u, ...m }[F] === H;
              })
                ? [...g, E, w]
                : g;
            }, []);
    return ZT(
      n,
      f,
      p,
      i == null ? void 0 : i.class,
      i == null ? void 0 : i.className
    );
  },
  YI = QI(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
          destructive:
            "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
          ghost:
            "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  );
function $T({ className: n, variant: t, size: i, asChild: r = !1, ...o }) {
  const u = r ? jI : "button";
  return qt.jsx(u, {
    "data-slot": "button",
    className: eu(YI({ variant: t, size: i, className: n })),
    ...o,
  });
}
const XI = "./le-CFwhAZ-C.png",
  JT = jm.create(UI);
function ZI() {
  var i, r;
  const [n, t] = pt.useState(null);
  return (
    pt.useEffect(() => {
      (async () => {
        const u = l2(x2, "lele", "vL8Oa10aQuuXo7VQUIjT"),
          f = await T2(u);
        f.exists() ? t(f.data()) : console.log("gada data");
      })();
    }, []),
    n
      ? qt.jsxs("main", {
          className:
            "overflow-x-hidden py-8 min-h-screen flex flex-col items-center md:gap-6 gap-4 grow  p-4 md:p-8 pb-0 bg-gray-800",
          children: [
            qt.jsx(jm.h1, {
              className:
                "p-2 px-8 md:w-1/3 text-3xl text-center md:text-6xl bg-gradient-to-r from-stone-800 via-40% via-sky-300 to-gray-900 bg-clip-text text-transparent font-bold ",
              animate: { translateX: [0, 100, 0, -70, 0] },
              transition: {
                duration: 4,
                ease: "easeIn",
                repeat: 1 / 0,
                repeatDelay: 1,
              },
              children: "Lele Dana",
            }),
            qt.jsx(jm.img, {
              animate: { scale: [1, 0.3, 1.2, 1] },
              transition: { ease: "easeIn", repeat: 1 / 0, duration: 2 },
              src: XI,
              alt: "lele",
              className:
                "my-8 w-1/2 md:w-32 rounded-md md:grayscale-100 hover:grayscale-0 transition-all duration-300",
            }),
            qt.jsxs("div", {
              className: "flex my-32 md:flex-row flex-col gap-8",
              children: [
                qt.jsxs(JT, {
                  className:
                    "w-full max-w-md bg-gray-800 border-sky-700 text-sky-100 shadow-lg",
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  children: [
                    qt.jsx(FT, {
                      children: qt.jsx(KT, {
                        className: "text-sky-300",
                        children: "Harga Terkini",
                      }),
                    }),
                    qt.jsxs(QT, {
                      className: "space-y-4",
                      children: [
                        qt.jsxs("div", {
                          className: "text-2xl font-semibold",
                          children: [
                            "Rp",
                            (i = n.harga) == null ? void 0 : i.toLocaleString(),
                            " / kg",
                          ],
                        }),
                        qt.jsxs($T, {
                          className: "w-full bg-sky-700 hover:bg-sky-800",
                          children: [
                            "Rp",
                            (r = n.harga) == null ? void 0 : r.toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                qt.jsxs(JT, {
                  className:
                    "w-full max-w-md bg-gray-800 border-sky-700 text-sky-100 shadow-lg",
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  children: [
                    qt.jsx(FT, {
                      children: qt.jsx(KT, {
                        className: "text-sky-300",
                        children: "Stock Terkini",
                      }),
                    }),
                    qt.jsxs(QT, {
                      className: "space-y-4",
                      children: [
                        qt.jsx("div", {
                          className: "text-2xl font-semibold",
                          children: n.stock == 0 ? "Kosong" : n.stock,
                        }),
                        qt.jsx($T, {
                          className: "w-full bg-sky-700 hover:bg-sky-800",
                          children: n.stock == 0 ? "Kosong" : n.stock,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            qt.jsx("h1", {
              className:
                "p-2 px-8 md:w-1/3 text-3xl text-center md:text-6xl bg-gradient-to-r from-stone-800 via-40% via-sky-300 to-gray-900 bg-clip-text text-transparent font-bold ",
              children: "Contact",
            }),
            qt.jsx("div", {
              className:
                "w-full my-8 text-stone-50 text-xs h-32 bg-stone-900 rounded-sm p-4 flex flex-col",
            }),
            qt.jsx("footer", {
              className: "text-xs text-stone-300",
              children: "Copyright 2025©",
            }),
          ],
        })
      : qt.jsx("main", {
          className:
            "bg-gray-800 text-neutral-200 flex h-screen items-center justify-center",
          children: qt.jsx("p", { children: "Loading..." }),
        })
  );
}
k1.createRoot(document.getElementById("root")).render(
  qt.jsx(pt.StrictMode, { children: qt.jsx(ZI, {}) })
);
