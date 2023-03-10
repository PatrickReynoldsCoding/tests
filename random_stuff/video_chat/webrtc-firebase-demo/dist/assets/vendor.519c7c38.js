/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t = function (e, n) {
  return (t =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (t, e) {
        t.__proto__ = e;
      }) ||
    function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(e, n);
};
function e(e, n) {
  function r() {
    this.constructor = e;
  }
  t(e, n),
    (e.prototype =
      null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var n = function () {
  return (n =
    Object.assign ||
    function (t) {
      for (var e, n = 1, r = arguments.length; n < r; n++)
        for (var i in (e = arguments[n]))
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }).apply(this, arguments);
};
function r(t, e, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function s(t) {
      try {
        a(r.next(t));
      } catch (ud) {
        o(ud);
      }
    }
    function u(t) {
      try {
        a(r.throw(t));
      } catch (ud) {
        o(ud);
      }
    }
    function a(t) {
      var e;
      t.done
        ? i(t.value)
        : ((e = t.value),
          e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              })).then(s, u);
    }
    a((r = r.apply(t, e || [])).next());
  });
}
function i(t, e) {
  var n,
    r,
    i,
    o,
    s = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: u(0), throw: u(1), return: u(2) }),
    "function" == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function u(o) {
    return function (u) {
      return (function (o) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & o[0]
                    ? r.return
                    : o[0]
                    ? r.throw || ((i = r.return) && i.call(r), 0)
                    : r.next) &&
                !(i = i.call(r, o[1])).done)
            )
              return i;
            switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                return s.label++, { value: o[1], done: !1 };
              case 5:
                s.label++, (r = o[1]), (o = [0]);
                continue;
              case 7:
                (o = s.ops.pop()), s.trys.pop();
                continue;
              default:
                if (
                  !((i = s.trys),
                  (i = i.length > 0 && i[i.length - 1]) ||
                    (6 !== o[0] && 2 !== o[0]))
                ) {
                  s = 0;
                  continue;
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  s.label = o[1];
                  break;
                }
                if (6 === o[0] && s.label < i[1]) {
                  (s.label = i[1]), (i = o);
                  break;
                }
                if (i && s.label < i[2]) {
                  (s.label = i[2]), s.ops.push(o);
                  break;
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            o = e.call(t, s);
          } catch (ud) {
            (o = [6, ud]), (r = 0);
          } finally {
            n = i = 0;
          }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      })([o, u]);
    };
  }
}
function o(t, e) {
  var n = "function" == typeof Symbol && t[Symbol.iterator];
  if (!n) return t;
  var r,
    i,
    o = n.call(t),
    s = [];
  try {
    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) s.push(r.value);
  } catch (u) {
    i = { error: u };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return s;
}
function s() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(o(arguments[e]));
  return t;
}
function u() {
  for (var t = 0, e = 0, n = arguments.length; e < n; e++)
    t += arguments[e].length;
  var r = Array(t),
    i = 0;
  for (e = 0; e < n; e++)
    for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
      r[i] = o[s];
  return r;
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
 */ function a(t, e) {
  if (!(e instanceof Object)) return e;
  switch (e.constructor) {
    case Date:
      return new Date(e.getTime());
    case Object:
      void 0 === t && (t = {});
      break;
    case Array:
      t = [];
      break;
    default:
      return e;
  }
  for (var n in e)
    e.hasOwnProperty(n) && "__proto__" !== n && (t[n] = a(t[n], e[n]));
  return t;
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
 */
var c = (function () {
  function t() {
    var t = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, n) {
        (t.resolve = e), (t.reject = n);
      }));
  }
  return (
    (t.prototype.wrapCallback = function (t) {
      var e = this;
      return function (n, r) {
        n ? e.reject(n) : e.resolve(r),
          "function" == typeof t &&
            (e.promise.catch(function () {}), 1 === t.length ? t(n) : t(n, r));
      };
    }),
    t
  );
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
 */ function h() {
  return "undefined" != typeof navigator &&
    "string" == typeof navigator.userAgent
    ? navigator.userAgent
    : "";
}
function f() {
  try {
    return (
      "[object process]" === Object.prototype.toString.call(global.process)
    );
  } catch (ud) {
    return !1;
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
 */
var l = (function (t) {
    function n(e, r, i) {
      var o = t.call(this, r) || this;
      return (
        (o.code = e),
        (o.customData = i),
        (o.name = "FirebaseError"),
        Object.setPrototypeOf(o, n.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(o, p.prototype.create),
        o
      );
    }
    return e(n, t), n;
  })(Error),
  p = (function () {
    function t(t, e, n) {
      (this.service = t), (this.serviceName = e), (this.errors = n);
    }
    return (
      (t.prototype.create = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var r = e[0] || {},
          i = this.service + "/" + t,
          o = this.errors[t],
          s = o ? d(o, r) : "Error",
          u = this.serviceName + ": " + s + " (" + i + ").",
          a = new l(i, u, r);
        return a;
      }),
      t
    );
  })();
function d(t, e) {
  return t.replace(v, function (t, n) {
    var r = e[n];
    return null != r ? String(r) : "<" + n + "?>";
  });
}
var v = /\{\$([^}]+)}/g;
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
 */ function y(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function g(t, e) {
  var n = new m(t, e);
  return n.subscribe.bind(n);
}
var m = (function () {
  function t(t, e) {
    var n = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = e),
      this.task
        .then(function () {
          t(n);
        })
        .catch(function (t) {
          n.error(t);
        });
  }
  return (
    (t.prototype.next = function (t) {
      this.forEachObserver(function (e) {
        e.next(t);
      });
    }),
    (t.prototype.error = function (t) {
      this.forEachObserver(function (e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (t.prototype.complete = function () {
      this.forEachObserver(function (t) {
        t.complete();
      }),
        this.close();
    }),
    (t.prototype.subscribe = function (t, e, n) {
      var r,
        i = this;
      if (void 0 === t && void 0 === e && void 0 === n)
        throw new Error("Missing Observer.");
      void 0 ===
        (r = (function (t, e) {
          if ("object" != typeof t || null === t) return !1;
          for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            if (i in t && "function" == typeof t[i]) return !0;
          }
          return !1;
        })(t, ["next", "error", "complete"])
          ? t
          : { next: t, error: e, complete: n }).next && (r.next = b),
        void 0 === r.error && (r.error = b),
        void 0 === r.complete && (r.complete = b);
      var o = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(function () {
            try {
              i.finalError ? r.error(i.finalError) : r.complete();
            } catch (ud) {}
          }),
        this.observers.push(r),
        o
      );
    }),
    (t.prototype.unsubscribeOne = function (t) {
      void 0 !== this.observers &&
        void 0 !== this.observers[t] &&
        (delete this.observers[t],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (t.prototype.forEachObserver = function (t) {
      if (!this.finalized)
        for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t);
    }),
    (t.prototype.sendOne = function (t, e) {
      var n = this;
      this.task.then(function () {
        if (void 0 !== n.observers && void 0 !== n.observers[t])
          try {
            e(n.observers[t]);
          } catch (ud) {
            "undefined" != typeof console && console.error && console.error(ud);
          }
      });
    }),
    (t.prototype.close = function (t) {
      var e = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== t && (this.finalError = t),
        this.task.then(function () {
          (e.observers = void 0), (e.onNoObservers = void 0);
        }));
    }),
    t
  );
})();
function b() {}
var w = (function () {
    function t(t, e, n) {
      (this.name = t),
        (this.instanceFactory = e),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY");
    }
    return (
      (t.prototype.setInstantiationMode = function (t) {
        return (this.instantiationMode = t), this;
      }),
      (t.prototype.setMultipleInstances = function (t) {
        return (this.multipleInstances = t), this;
      }),
      (t.prototype.setServiceProps = function (t) {
        return (this.serviceProps = t), this;
      }),
      t
    );
  })(),
  E = (function () {
    function t(t, e) {
      (this.name = t),
        (this.container = e),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map());
    }
    return (
      (t.prototype.get = function (t) {
        void 0 === t && (t = "[DEFAULT]");
        var e = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(e)) {
          var n = new c();
          this.instancesDeferred.set(e, n);
          try {
            var r = this.getOrInitializeService(e);
            r && n.resolve(r);
          } catch (ud) {}
        }
        return this.instancesDeferred.get(e).promise;
      }),
      (t.prototype.getImmediate = function (t) {
        var e = n({ identifier: "[DEFAULT]", optional: !1 }, t),
          r = e.identifier,
          i = e.optional,
          o = this.normalizeInstanceIdentifier(r);
        try {
          var s = this.getOrInitializeService(o);
          if (!s) {
            if (i) return null;
            throw Error("Service " + this.name + " is not available");
          }
          return s;
        } catch (ud) {
          if (i) return null;
          throw ud;
        }
      }),
      (t.prototype.getComponent = function () {
        return this.component;
      }),
      (t.prototype.setComponent = function (t) {
        var e, n;
        if (t.name !== this.name)
          throw Error(
            "Mismatching Component " +
              t.name +
              " for Provider " +
              this.name +
              "."
          );
        if (this.component)
          throw Error(
            "Component for " + this.name + " has already been provided"
          );
        if (
          ((this.component = t),
          (function (t) {
            return "EAGER" === t.instantiationMode;
          })(
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
             */ t
          ))
        )
          try {
            this.getOrInitializeService("[DEFAULT]");
          } catch (ud) {}
        try {
          for (
            var r = (function (t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length)
                  return {
                    next: function () {
                      return (
                        t && r >= t.length && (t = void 0),
                        { value: t && t[r++], done: !t }
                      );
                    },
                  };
                throw new TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              })(this.instancesDeferred.entries()),
              i = r.next();
            !i.done;
            i = r.next()
          ) {
            var s = o(i.value, 2),
              u = s[0],
              a = s[1],
              c = this.normalizeInstanceIdentifier(u);
            try {
              var h = this.getOrInitializeService(c);
              a.resolve(h);
            } catch (ud) {}
          }
        } catch (f) {
          e = { error: f };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (t.prototype.clearInstance = function (t) {
        void 0 === t && (t = "[DEFAULT]"),
          this.instancesDeferred.delete(t),
          this.instances.delete(t);
      }),
      (t.prototype.delete = function () {
        return r(this, void 0, void 0, function () {
          var t;
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      s(
                        t
                          .filter(function (t) {
                            return "INTERNAL" in t;
                          })
                          .map(function (t) {
                            return t.INTERNAL.delete();
                          }),
                        t
                          .filter(function (t) {
                            return "_delete" in t;
                          })
                          .map(function (t) {
                            return t._delete();
                          })
                      )
                    ),
                  ]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (t.prototype.isInitialized = function (t) {
        return void 0 === t && (t = "[DEFAULT]"), this.instances.has(t);
      }),
      (t.prototype.getOrInitializeService = function (t) {
        var e = this.instances.get(t);
        return (
          !e &&
            this.component &&
            ((e = this.component.instanceFactory(
              this.container,
              (function (t) {
                return "[DEFAULT]" === t ? void 0 : t;
              })(t)
            )),
            this.instances.set(t, e)),
          e || null
        );
      }),
      (t.prototype.normalizeInstanceIdentifier = function (t) {
        return this.component
          ? this.component.multipleInstances
            ? t
            : "[DEFAULT]"
          : t;
      }),
      t
    );
  })();
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
 */ var _,
  I = (function () {
    function t(t) {
      (this.name = t), (this.providers = new Map());
    }
    return (
      (t.prototype.addComponent = function (t) {
        var e = this.getProvider(t.name);
        if (e.isComponentSet())
          throw new Error(
            "Component " +
              t.name +
              " has already been registered with " +
              this.name
          );
        e.setComponent(t);
      }),
      (t.prototype.addOrOverwriteComponent = function (t) {
        this.getProvider(t.name).isComponentSet() &&
          this.providers.delete(t.name),
          this.addComponent(t);
      }),
      (t.prototype.getProvider = function (t) {
        if (this.providers.has(t)) return this.providers.get(t);
        var e = new E(t, this);
        return this.providers.set(t, e), e;
      }),
      (t.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }),
      t
    );
  })();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function T() {
  for (var t = 0, e = 0, n = arguments.length; e < n; e++)
    t += arguments[e].length;
  var r = Array(t),
    i = 0;
  for (e = 0; e < n; e++)
    for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
      r[i] = o[s];
  return r;
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
 */ var N,
  A,
  S = [];
((A = N || (N = {}))[(A.DEBUG = 0)] = "DEBUG"),
  (A[(A.VERBOSE = 1)] = "VERBOSE"),
  (A[(A.INFO = 2)] = "INFO"),
  (A[(A.WARN = 3)] = "WARN"),
  (A[(A.ERROR = 4)] = "ERROR"),
  (A[(A.SILENT = 5)] = "SILENT");
var D,
  O = {
    debug: N.DEBUG,
    verbose: N.VERBOSE,
    info: N.INFO,
    warn: N.WARN,
    error: N.ERROR,
    silent: N.SILENT,
  },
  x = N.INFO,
  P =
    (((_ = {})[N.DEBUG] = "log"),
    (_[N.VERBOSE] = "log"),
    (_[N.INFO] = "info"),
    (_[N.WARN] = "warn"),
    (_[N.ERROR] = "error"),
    _),
  k = function (t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(e < t.logLevel)) {
      var i = new Date().toISOString(),
        o = P[e];
      if (!o)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: " +
            e +
            ")"
        );
      console[o].apply(console, T(["[" + i + "]  " + t.name + ":"], n));
    }
  },
  C = (function () {
    function t(t) {
      (this.name = t),
        (this._logLevel = x),
        (this._logHandler = k),
        (this._userLogHandler = null),
        S.push(this);
    }
    return (
      Object.defineProperty(t.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (t) {
          if (!(t in N))
            throw new TypeError(
              'Invalid value "' + t + '" assigned to `logLevel`'
            );
          this._logLevel = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.setLogLevel = function (t) {
        this._logLevel = "string" == typeof t ? O[t] : t;
      }),
      Object.defineProperty(t.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "userLogHandler", {
        get: function () {
          return this._userLogHandler;
        },
        set: function (t) {
          this._userLogHandler = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.debug = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, T([this, N.DEBUG], t)),
          this._logHandler.apply(this, T([this, N.DEBUG], t));
      }),
      (t.prototype.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, T([this, N.VERBOSE], t)),
          this._logHandler.apply(this, T([this, N.VERBOSE], t));
      }),
      (t.prototype.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, T([this, N.INFO], t)),
          this._logHandler.apply(this, T([this, N.INFO], t));
      }),
      (t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, T([this, N.WARN], t)),
          this._logHandler.apply(this, T([this, N.WARN], t));
      }),
      (t.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this._userLogHandler &&
          this._userLogHandler.apply(this, T([this, N.ERROR], t)),
          this._logHandler.apply(this, T([this, N.ERROR], t));
      }),
      t
    );
  })();
function L(t) {
  S.forEach(function (e) {
    e.setLogLevel(t);
  });
}
var R,
  V =
    (((D = {})["no-app"] =
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
    (D["bad-app-name"] = "Illegal App name: '{$appName}"),
    (D["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
    (D["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
    (D["invalid-app-argument"] =
      "firebase.{$appName}() takes either no argument or a Firebase App instance."),
    (D["invalid-log-argument"] =
      "First argument to `onLog` must be null or a function."),
    D),
  U = new p("app", "Firebase", V),
  M =
    (((R = {})["@firebase/app"] = "fire-core"),
    (R["@firebase/analytics"] = "fire-analytics"),
    (R["@firebase/auth"] = "fire-auth"),
    (R["@firebase/database"] = "fire-rtdb"),
    (R["@firebase/functions"] = "fire-fn"),
    (R["@firebase/installations"] = "fire-iid"),
    (R["@firebase/messaging"] = "fire-fcm"),
    (R["@firebase/performance"] = "fire-perf"),
    (R["@firebase/remote-config"] = "fire-rc"),
    (R["@firebase/storage"] = "fire-gcs"),
    (R["@firebase/firestore"] = "fire-fst"),
    (R["fire-js"] = "fire-js"),
    (R["firebase-wrapper"] = "fire-js-all"),
    R),
  j = new C("@firebase/app"),
  F = (function () {
    function t(t, e, n) {
      var r = this;
      (this.firebase_ = n),
        (this.isDeleted_ = !1),
        (this.name_ = e.name),
        (this.automaticDataCollectionEnabled_ =
          e.automaticDataCollectionEnabled || !1),
        (this.options_ = a(void 0, t)),
        (this.container = new I(e.name)),
        this._addComponent(
          new w(
            "app",
            function () {
              return r;
            },
            "PUBLIC"
          )
        ),
        this.firebase_.INTERNAL.components.forEach(function (t) {
          return r._addComponent(t);
        });
    }
    return (
      Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (t) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = t);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "name", {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "options", {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.delete = function () {
        var t = this;
        return new Promise(function (e) {
          t.checkDestroyed_(), e();
        })
          .then(function () {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function (t) {
                  return t.delete();
                })
              )
            );
          })
          .then(function () {
            t.isDeleted_ = !0;
          });
      }),
      (t.prototype._getService = function (t, e) {
        return (
          void 0 === e && (e = "[DEFAULT]"),
          this.checkDestroyed_(),
          this.container.getProvider(t).getImmediate({ identifier: e })
        );
      }),
      (t.prototype._removeServiceInstance = function (t, e) {
        void 0 === e && (e = "[DEFAULT]"),
          this.container.getProvider(t).clearInstance(e);
      }),
      (t.prototype._addComponent = function (t) {
        try {
          this.container.addComponent(t);
        } catch (ud) {
          j.debug(
            "Component " +
              t.name +
              " failed to register with FirebaseApp " +
              this.name,
            ud
          );
        }
      }),
      (t.prototype._addOrOverwriteComponent = function (t) {
        this.container.addOrOverwriteComponent(t);
      }),
      (t.prototype.toJSON = function () {
        return {
          name: this.name,
          automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
          options: this.options,
        };
      }),
      (t.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw U.create("app-deleted", { appName: this.name_ });
      }),
      t
    );
  })();
(F.prototype.name && F.prototype.options) ||
  F.prototype.delete ||
  console.log("dc");
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
 */
function q(t) {
  var e = {},
    n = new Map(),
    r = {
      __esModule: !0,
      initializeApp: function (n, i) {
        void 0 === i && (i = {});
        if ("object" != typeof i || null === i) {
          i = { name: i };
        }
        var o = i;
        void 0 === o.name && (o.name = "[DEFAULT]");
        var s = o.name;
        if ("string" != typeof s || !s)
          throw U.create("bad-app-name", { appName: String(s) });
        if (y(e, s)) throw U.create("duplicate-app", { appName: s });
        var u = new t(n, o, r);
        return (e[s] = u), u;
      },
      app: i,
      registerVersion: function (t, e, n) {
        var r,
          i = null !== (r = M[t]) && void 0 !== r ? r : t;
        n && (i += "-" + n);
        var s = i.match(/\s|\//),
          u = e.match(/\s|\//);
        if (s || u) {
          var a = [
            'Unable to register library "' + i + '" with version "' + e + '":',
          ];
          return (
            s &&
              a.push(
                'library name "' +
                  i +
                  '" contains illegal characters (whitespace or "/")'
              ),
            s && u && a.push("and"),
            u &&
              a.push(
                'version name "' +
                  e +
                  '" contains illegal characters (whitespace or "/")'
              ),
            void j.warn(a.join(" "))
          );
        }
        o(
          new w(
            i + "-version",
            function () {
              return { library: i, version: e };
            },
            "VERSION"
          )
        );
      },
      setLogLevel: L,
      onLog: function (t, e) {
        if (null !== t && "function" != typeof t)
          throw U.create("invalid-log-argument");
        !(function (t, e) {
          for (
            var n = function (n) {
                var r = null;
                e && e.level && (r = O[e.level]),
                  (n.userLogHandler =
                    null === t
                      ? null
                      : function (e, n) {
                          for (var i = [], o = 2; o < arguments.length; o++)
                            i[o - 2] = arguments[o];
                          var s = i
                            .map(function (t) {
                              if (null == t) return null;
                              if ("string" == typeof t) return t;
                              if ("number" == typeof t || "boolean" == typeof t)
                                return t.toString();
                              if (t instanceof Error) return t.message;
                              try {
                                return JSON.stringify(t);
                              } catch (e) {
                                return null;
                              }
                            })
                            .filter(function (t) {
                              return t;
                            })
                            .join(" ");
                          n >= (null != r ? r : e.logLevel) &&
                            t({
                              level: N[n].toLowerCase(),
                              message: s,
                              args: i,
                              type: e.name,
                            });
                        });
              },
              r = 0,
              i = S;
            r < i.length;
            r++
          )
            n(i[r]);
        })(
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
           */ t,
          e
        );
      },
      apps: null,
      SDK_VERSION: "8.2.9",
      INTERNAL: {
        registerComponent: o,
        removeApp: function (t) {
          delete e[t];
        },
        components: n,
        useAsService: function (t, e) {
          if ("serverAuth" === e) return null;
          return e;
        },
      },
    };
  function i(t) {
    if (!y(e, (t = t || "[DEFAULT]"))) throw U.create("no-app", { appName: t });
    return e[t];
  }
  function o(o) {
    var s = o.name;
    if (n.has(s))
      return (
        j.debug(
          "There were multiple attempts to register component " + s + "."
        ),
        "PUBLIC" === o.type ? r[s] : null
      );
    if ((n.set(s, o), "PUBLIC" === o.type)) {
      var u = function (t) {
        if ((void 0 === t && (t = i()), "function" != typeof t[s]))
          throw U.create("invalid-app-argument", { appName: s });
        return t[s]();
      };
      void 0 !== o.serviceProps && a(u, o.serviceProps),
        (r[s] = u),
        (t.prototype[s] = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = this._getService.bind(this, s);
          return n.apply(this, o.multipleInstances ? t : []);
        });
    }
    for (var c = 0, h = Object.keys(e); c < h.length; c++) {
      var f = h[c];
      e[f]._addComponent(o);
    }
    return "PUBLIC" === o.type ? r[s] : null;
  }
  return (
    (r.default = r),
    Object.defineProperty(r, "apps", {
      get: function () {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    }),
    (i.App = t),
    r
  );
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
 */ var z = (function t() {
    var e = q(F);
    return (
      (e.INTERNAL = n(n({}, e.INTERNAL), {
        createFirebaseNamespace: t,
        extendNamespace: function (t) {
          a(e, t);
        },
        createSubscribe: g,
        ErrorFactory: p,
        deepExtend: a,
      })),
      e
    );
  })(),
  B = (function () {
    function t(t) {
      this.container = t;
    }
    return (
      (t.prototype.getPlatformInfoString = function () {
        return this.container
          .getProviders()
          .map(function (t) {
            if (
              (function (t) {
                var e = t.getComponent();
                return "VERSION" === (null == e ? void 0 : e.type);
              })(
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
                 */ t
              )
            ) {
              var e = t.getImmediate();
              return e.library + "/" + e.version;
            }
            return null;
          })
          .filter(function (t) {
            return t;
          })
          .join(" ");
      }),
      t
    );
  })();
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
 */
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
 */
if ("object" == typeof self && self.self === self && void 0 !== self.firebase) {
  j.warn(
    "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
  );
  var G = self.firebase.SDK_VERSION;
  G &&
    G.indexOf("LITE") >= 0 &&
    j.warn(
      "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
    );
}
var H = z.initializeApp;
z.initializeApp = function () {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return (
    f() &&
      j.warn(
        '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
      ),
    H.apply(void 0, t)
  );
};
var Y,
  K,
  Q = z;
(Y = Q).INTERNAL.registerComponent(
  new w(
    "platform-logger",
    function (t) {
      return new B(t);
    },
    "PRIVATE"
  )
),
  Y.registerVersion("@firebase/app", "0.6.15", K),
  Y.registerVersion("fire-js", "");
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
 */
Q.registerVersion("firebase", "8.2.10", "app");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var X = function (t, e) {
  return (X =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (t, e) {
        t.__proto__ = e;
      }) ||
    function (t, e) {
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    })(t, e);
};
function W(t) {
  var e = "function" == typeof Symbol && Symbol.iterator,
    n = e && t[e],
    r = 0;
  if (n) return n.call(t);
  if (t && "number" == typeof t.length)
    return {
      next: function () {
        return (
          t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
var J,
  Z =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  $ = $ || {},
  tt = Z || self;
function et() {}
function nt(t) {
  var e = typeof t;
  return (
    "array" ==
      (e = "object" != e ? e : t ? (Array.isArray(t) ? "array" : e) : "null") ||
    ("object" == e && "number" == typeof t.length)
  );
}
function rt(t) {
  var e = typeof t;
  return ("object" == e && null != t) || "function" == e;
}
var it = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  ot = 0;
function st(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function ut(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var n = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(n, r), t.apply(e, n);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function at(t, e, n) {
  return (at =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? st
      : ut).apply(null, arguments);
}
function ct(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var e = n.slice();
    return e.push.apply(e, arguments), t.apply(this, e);
  };
}
function ht() {
  return Date.now();
}
function ft(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.X = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.Kb = function (t, n, r) {
      for (
        var i = Array(arguments.length - 2), o = 2;
        o < arguments.length;
        o++
      )
        i[o - 2] = arguments[o];
      return e.prototype[n].apply(t, i);
    });
}
function lt() {
  (this.j = this.j), (this.i = this.i);
}
(lt.prototype.j = !1),
  (lt.prototype.ja = function () {
    var t;
    !this.j &&
      ((this.j = !0), this.G(), 0) &&
      ((t = this),
      (Object.prototype.hasOwnProperty.call(t, it) && t[it]) || (t[it] = ++ot));
  }),
  (lt.prototype.G = function () {
    if (this.i) for (; this.i.length; ) this.i.shift()();
  });
var pt = Array.prototype.indexOf
    ? function (t, e) {
        return Array.prototype.indexOf.call(t, e, void 0);
      }
    : function (t, e) {
        if ("string" == typeof t)
          return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
        for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
        return -1;
      },
  dt = Array.prototype.forEach
    ? function (t, e, n) {
        Array.prototype.forEach.call(t, e, n);
      }
    : function (t, e, n) {
        for (
          var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0;
          o < r;
          o++
        )
          o in i && e.call(n, i[o], o, t);
      };
function vt(t) {
  return Array.prototype.concat.apply([], arguments);
}
function yt(t) {
  var e = t.length;
  if (0 < e) {
    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function gt(t) {
  return /^[\s\xa0]*$/.test(t);
}
var mt,
  bt = String.prototype.trim
    ? function (t) {
        return t.trim();
      }
    : function (t) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
      };
function wt(t, e) {
  return -1 != t.indexOf(e);
}
function Et(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
t: {
  var _t = tt.navigator;
  if (_t) {
    var It = _t.userAgent;
    if (It) {
      mt = It;
      break t;
    }
  }
  mt = "";
}
function Tt(t, e, n) {
  for (var r in t) e.call(n, t[r], r, t);
}
function Nt(t) {
  var e = {};
  for (var n in t) e[n] = t[n];
  return e;
}
var At =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function St(t, e) {
  for (var n, r, i = 1; i < arguments.length; i++) {
    for (n in (r = arguments[i])) t[n] = r[n];
    for (var o = 0; o < At.length; o++)
      (n = At[o]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function Dt(t) {
  return Dt[" "](t), t;
}
Dt[" "] = et;
var Ot,
  xt,
  Pt = wt(mt, "Opera"),
  kt = wt(mt, "Trident") || wt(mt, "MSIE"),
  Ct = wt(mt, "Edge"),
  Lt = Ct || kt,
  Rt =
    wt(mt, "Gecko") &&
    !(wt(mt.toLowerCase(), "webkit") && !wt(mt, "Edge")) &&
    !(wt(mt, "Trident") || wt(mt, "MSIE")) &&
    !wt(mt, "Edge"),
  Vt = wt(mt.toLowerCase(), "webkit") && !wt(mt, "Edge");
function Ut() {
  var t = tt.document;
  return t ? t.documentMode : void 0;
}
t: {
  var Mt = "",
    jt =
      ((xt = mt),
      Rt
        ? /rv:([^\);]+)(\)|;)/.exec(xt)
        : Ct
        ? /Edge\/([\d\.]+)/.exec(xt)
        : kt
        ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(xt)
        : Vt
        ? /WebKit\/(\S+)/.exec(xt)
        : Pt
        ? /(?:Version)[ \/]?(\S+)/.exec(xt)
        : void 0);
  if ((jt && (Mt = jt ? jt[1] : ""), kt)) {
    var Ft = Ut();
    if (null != Ft && Ft > parseFloat(Mt)) {
      Ot = String(Ft);
      break t;
    }
  }
  Ot = Mt;
}
var qt,
  zt = {};
function Bt(t) {
  return (function (t, e) {
    var n = zt;
    return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t));
  })(t, function () {
    for (
      var e = 0,
        n = bt(String(Ot)).split("."),
        r = bt(String(t)).split("."),
        i = Math.max(n.length, r.length),
        o = 0;
      0 == e && o < i;
      o++
    ) {
      var s = n[o] || "",
        u = r[o] || "";
      do {
        if (
          ((s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
          (u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""]),
          0 == s[0].length && 0 == u[0].length)
        )
          break;
        (e =
          Et(
            0 == s[1].length ? 0 : parseInt(s[1], 10),
            0 == u[1].length ? 0 : parseInt(u[1], 10)
          ) ||
          Et(0 == s[2].length, 0 == u[2].length) ||
          Et(s[2], u[2])),
          (s = s[3]),
          (u = u[3]);
      } while (0 == e);
    }
    return 0 <= e;
  });
}
if (tt.document && kt) {
  var Gt = Ut();
  qt = Gt || parseInt(Ot, 10) || void 0;
} else qt = void 0;
var Ht = qt,
  Yt = !kt || 9 <= Number(Ht),
  Kt = kt && !Bt("9"),
  Qt = (function () {
    if (!tt.addEventListener || !Object.defineProperty) return !1;
    var t = !1,
      e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
    try {
      tt.addEventListener("test", et, e), tt.removeEventListener("test", et, e);
    } catch (n) {}
    return t;
  })();
function Xt(t, e) {
  (this.type = t), (this.a = this.target = e), (this.defaultPrevented = !1);
}
function Wt(t, e) {
  if (
    (Xt.call(this, t ? t.type : ""),
    (this.relatedTarget = this.a = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.c = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.a = e),
      (e = t.relatedTarget))
    ) {
      if (Rt) {
        t: {
          try {
            Dt(e.nodeName);
            var i = !0;
            break t;
          } catch (o) {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      "mouseover" == n
        ? (e = t.fromElement)
        : "mouseout" == n && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
          (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
          (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        "string" == typeof t.pointerType
          ? t.pointerType
          : Jt[t.pointerType] || ""),
      (this.c = t),
      t.defaultPrevented && this.b();
  }
}
(Xt.prototype.b = function () {
  this.defaultPrevented = !0;
}),
  ft(Wt, Xt);
var Jt = { 2: "touch", 3: "pen", 4: "mouse" };
Wt.prototype.b = function () {
  Wt.X.b.call(this);
  var t = this.c;
  if (t.preventDefault) t.preventDefault();
  else if (((t.returnValue = !1), Kt))
    try {
      (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) && (t.keyCode = -1);
    } catch (e) {}
};
var Zt = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  $t = 0;
function te(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ca = i),
    (this.key = ++$t),
    (this.Y = this.Z = !1);
}
function ee(t) {
  (t.Y = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ca = null);
}
function ne(t) {
  (this.src = t), (this.a = {}), (this.b = 0);
}
function re(t, e) {
  var n = e.type;
  if (n in t.a) {
    var r,
      i = t.a[n],
      o = pt(i, e);
    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
      r && (ee(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
  }
}
function ie(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var o = t[i];
    if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r) return i;
  }
  return -1;
}
ne.prototype.add = function (t, e, n, r, i) {
  var o = t.toString();
  (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
  var s = ie(t, e, r, i);
  return (
    -1 < s
      ? ((e = t[s]), n || (e.Z = !1))
      : (((e = new te(e, this.src, o, !!r, i)).Z = n), t.push(e)),
    e
  );
};
var oe = "closure_lm_" + ((1e6 * Math.random()) | 0),
  se = {};
function ue(t, e, n, r, i) {
  if (r && r.once) return ce(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var o = 0; o < e.length; o++) ue(t, e[o], n, r, i);
    return null;
  }
  return (
    (n = ge(n)),
    t && t[Zt]
      ? t.va(e, n, rt(r) ? !!r.capture : !!r, i)
      : ae(t, e, n, !1, r, i)
  );
}
function ae(t, e, n, r, i, o) {
  if (!e) throw Error("Invalid event type");
  var s = rt(i) ? !!i.capture : !!i;
  if (s && !Yt) return null;
  var u = ve(t);
  if ((u || (t[oe] = u = new ne(t)), (n = u.add(e, n, r, s, o)).proxy))
    return n;
  if (
    ((r = (function () {
      var t = de,
        e = Yt
          ? function (n) {
              return t.call(e.src, e.listener, n);
            }
          : function (n) {
              if (!(n = t.call(e.src, e.listener, n))) return n;
            };
      return e;
    })()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    Qt || (i = s),
      void 0 === i && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(le(e.toString()), r);
  else {
    if (!t.addListener || !t.removeListener)
      throw Error("addEventListener and attachEvent are unavailable.");
    t.addListener(r);
  }
  return n;
}
function ce(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var o = 0; o < e.length; o++) ce(t, e[o], n, r, i);
    return null;
  }
  return (
    (n = ge(n)),
    t && t[Zt]
      ? t.wa(e, n, rt(r) ? !!r.capture : !!r, i)
      : ae(t, e, n, !0, r, i)
  );
}
function he(t, e, n, r, i) {
  if (Array.isArray(e)) for (var o = 0; o < e.length; o++) he(t, e[o], n, r, i);
  else
    (r = rt(r) ? !!r.capture : !!r),
      (n = ge(n)),
      t && t[Zt]
        ? ((t = t.c),
          (e = String(e).toString()) in t.a &&
            -1 < (n = ie((o = t.a[e]), n, r, i)) &&
            (ee(o[n]),
            Array.prototype.splice.call(o, n, 1),
            0 == o.length && (delete t.a[e], t.b--)))
        : t &&
          (t = ve(t)) &&
          ((e = t.a[e.toString()]),
          (t = -1),
          e && (t = ie(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && fe(n));
}
function fe(t) {
  if ("number" != typeof t && t && !t.Y) {
    var e = t.src;
    if (e && e[Zt]) re(e.c, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(le(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = ve(e))
          ? (re(n, t), 0 == n.b && ((n.src = null), (e[oe] = null)))
          : ee(t);
    }
  }
}
function le(t) {
  return t in se ? se[t] : (se[t] = "on" + t);
}
function pe(t, e) {
  var n = t.listener,
    r = t.ca || t.src;
  return t.Z && fe(t), n.call(r, e);
}
function de(t, e) {
  if (t.Y) return !0;
  if (!Yt) {
    if (!e)
      t: {
        e = ["window", "event"];
        for (var n = tt, r = 0; r < e.length; r++)
          if (null == (n = n[e[r]])) {
            e = null;
            break t;
          }
        e = n;
      }
    return pe(t, (e = new Wt(e, this)));
  }
  return pe(t, new Wt(e, this));
}
function ve(t) {
  return (t = t[oe]) instanceof ne ? t : null;
}
var ye = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function ge(t) {
  return "function" == typeof t
    ? t
    : (t[ye] ||
        (t[ye] = function (e) {
          return t.handleEvent(e);
        }),
      t[ye]);
}
function me() {
  lt.call(this), (this.c = new ne(this)), (this.J = this), (this.C = null);
}
function be(t, e) {
  var n,
    r = t.C;
  if (r) for (n = []; r; r = r.C) n.push(r);
  if (((t = t.J), (r = e.type || e), "string" == typeof e)) e = new Xt(e, t);
  else if (e instanceof Xt) e.target = e.target || t;
  else {
    var i = e;
    St((e = new Xt(r, t)), i);
  }
  if (((i = !0), n))
    for (var o = n.length - 1; 0 <= o; o--) {
      var s = (e.a = n[o]);
      i = we(s, r, !0, e) && i;
    }
  if (((i = we((s = e.a = t), r, !0, e) && i), (i = we(s, r, !1, e) && i), n))
    for (o = 0; o < n.length; o++) i = we((s = e.a = n[o]), r, !1, e) && i;
}
function we(t, e, n, r) {
  if (!(e = t.c.a[String(e)])) return !0;
  e = e.concat();
  for (var i = !0, o = 0; o < e.length; ++o) {
    var s = e[o];
    if (s && !s.Y && s.capture == n) {
      var u = s.listener,
        a = s.ca || s.src;
      s.Z && re(t.c, s), (i = !1 !== u.call(a, r) && i);
    }
  }
  return i && !r.defaultPrevented;
}
ft(me, lt),
  (me.prototype[Zt] = !0),
  ((J = me.prototype).addEventListener = function (t, e, n, r) {
    ue(this, t, e, n, r);
  }),
  (J.removeEventListener = function (t, e, n, r) {
    he(this, t, e, n, r);
  }),
  (J.G = function () {
    if ((me.X.G.call(this), this.c)) {
      var t,
        e = this.c;
      for (t in e.a) {
        for (var n = e.a[t], r = 0; r < n.length; r++) ee(n[r]);
        delete e.a[t], e.b--;
      }
    }
    this.C = null;
  }),
  (J.va = function (t, e, n, r) {
    return this.c.add(String(t), e, !1, n, r);
  }),
  (J.wa = function (t, e, n, r) {
    return this.c.add(String(t), e, !0, n, r);
  });
var Ee = tt.JSON.stringify;
function _e() {
  this.b = this.a = null;
}
var Ie,
  Te = new ((function () {
    function t(t, e) {
      (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
    }
    return (
      (t.prototype.get = function () {
        var t;
        return (
          0 < this.b
            ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
            : (t = this.c()),
          t
        );
      }),
      t
    );
  })())(
    function () {
      return new Ae();
    },
    function (t) {
      t.reset();
    }
  );
function Ne() {
  var t = xe,
    e = null;
  return (
    t.a && ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)),
    e
  );
}
function Ae() {
  this.next = this.b = this.a = null;
}
function Se(t) {
  tt.setTimeout(function () {
    throw t;
  }, 0);
}
function De(t, e) {
  Ie ||
    (function () {
      var t = tt.Promise.resolve(void 0);
      Ie = function () {
        t.then(Pe);
      };
    })(),
    Oe || (Ie(), (Oe = !0)),
    xe.add(t, e);
}
(_e.prototype.add = function (t, e) {
  var n = Te.get();
  n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
}),
  (Ae.prototype.set = function (t, e) {
    (this.a = t), (this.b = e), (this.next = null);
  }),
  (Ae.prototype.reset = function () {
    this.next = this.b = this.a = null;
  });
var Oe = !1,
  xe = new _e();
function Pe() {
  for (var t; (t = Ne()); ) {
    try {
      t.a.call(t.b);
    } catch (n) {
      Se(n);
    }
    var e = Te;
    e.f(t), 100 > e.b && (e.b++, (t.next = e.a), (e.a = t));
  }
  Oe = !1;
}
function ke(t, e) {
  me.call(this),
    (this.b = t || 1),
    (this.a = e || tt),
    (this.f = at(this.Za, this)),
    (this.g = ht());
}
function Ce(t) {
  (t.aa = !1), t.M && (t.a.clearTimeout(t.M), (t.M = null));
}
function Le(t, e, n) {
  if ("function" == typeof t) n && (t = at(t, n));
  else {
    if (!t || "function" != typeof t.handleEvent)
      throw Error("Invalid listener argument");
    t = at(t.handleEvent, t);
  }
  return 2147483647 < Number(e) ? -1 : tt.setTimeout(t, e || 0);
}
function Re(t) {
  t.a = Le(function () {
    (t.a = null), t.c && ((t.c = !1), Re(t));
  }, t.h);
  var e = t.b;
  (t.b = null), t.g.apply(null, e);
}
ft(ke, me),
  ((J = ke.prototype).aa = !1),
  (J.M = null),
  (J.Za = function () {
    if (this.aa) {
      var t = ht() - this.g;
      0 < t && t < 0.8 * this.b
        ? (this.M = this.a.setTimeout(this.f, this.b - t))
        : (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
          be(this, "tick"),
          this.aa && (Ce(this), this.start()));
    }
  }),
  (J.start = function () {
    (this.aa = !0),
      this.M || ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = ht()));
  }),
  (J.G = function () {
    ke.X.G.call(this), Ce(this), delete this.a;
  });
var Ve = (function (t) {
  function e(e, n) {
    var r = t.call(this) || this;
    return (r.g = e), (r.h = n), (r.b = null), (r.c = !1), (r.a = null), r;
  }
  return (
    (function (t, e) {
      function n() {
        this.constructor = t;
      }
      X(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    })(e, t),
    (e.prototype.f = function (t) {
      (this.b = arguments), this.a ? (this.c = !0) : Re(this);
    }),
    (e.prototype.G = function () {
      t.prototype.G.call(this),
        this.a &&
          (tt.clearTimeout(this.a),
          (this.a = null),
          (this.c = !1),
          (this.b = null));
    }),
    e
  );
})(lt);
function Ue(t) {
  lt.call(this), (this.b = t), (this.a = {});
}
ft(Ue, lt);
var Me = [];
function je(t, e, n, r) {
  Array.isArray(n) || (n && (Me[0] = n.toString()), (n = Me));
  for (var i = 0; i < n.length; i++) {
    var o = ue(e, n[i], r || t.handleEvent, !1, t.b || t);
    if (!o) break;
    t.a[o.key] = o;
  }
}
function Fe(t) {
  Tt(
    t.a,
    function (t, e) {
      this.a.hasOwnProperty(e) && fe(t);
    },
    t
  ),
    (t.a = {});
}
function qe() {
  this.a = !0;
}
function ze(t, e, n, r) {
  t.info(function () {
    return (
      "XMLHTTP TEXT (" +
      e +
      "): " +
      (function (t, e) {
        if (!t.a) return e;
        if (!e) return null;
        try {
          var n = JSON.parse(e);
          if (n)
            for (t = 0; t < n.length; t++)
              if (Array.isArray(n[t])) {
                var r = n[t];
                if (!(2 > r.length)) {
                  var i = r[1];
                  if (Array.isArray(i) && !(1 > i.length)) {
                    var o = i[0];
                    if ("noop" != o && "stop" != o && "close" != o)
                      for (var s = 1; s < i.length; s++) i[s] = "";
                  }
                }
              }
          return Ee(n);
        } catch (u) {
          return e;
        }
      })(t, n) +
      (r ? " " + r : "")
    );
  });
}
(Ue.prototype.G = function () {
  Ue.X.G.call(this), Fe(this);
}),
  (Ue.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  }),
  (qe.prototype.info = function () {});
var Be = {},
  Ge = null;
function He() {
  return (Ge = Ge || new me());
}
function Ye(t) {
  Xt.call(this, Be.Fa, t);
}
function Ke(t) {
  var e = He();
  be(e, new Ye(e, t));
}
function Qe(t, e) {
  Xt.call(this, Be.STAT_EVENT, t), (this.stat = e);
}
function Xe(t) {
  var e = He();
  be(e, new Qe(e, t));
}
function We(t) {
  Xt.call(this, Be.Ga, t);
}
function Je(t, e) {
  if ("function" != typeof t)
    throw Error("Fn must not be null and must be a function");
  return tt.setTimeout(function () {
    t();
  }, e);
}
(Be.Fa = "serverreachability"),
  ft(Ye, Xt),
  (Be.STAT_EVENT = "statevent"),
  ft(Qe, Xt),
  (Be.Ga = "timingevent"),
  ft(We, Xt);
var Ze = {
    NO_ERROR: 0,
    $a: 1,
    nb: 2,
    mb: 3,
    hb: 4,
    lb: 5,
    ob: 6,
    Da: 7,
    TIMEOUT: 8,
    rb: 9,
  },
  $e = {
    fb: "complete",
    Bb: "success",
    Ea: "error",
    Da: "abort",
    tb: "ready",
    ub: "readystatechange",
    TIMEOUT: "timeout",
    pb: "incrementaldata",
    sb: "progress",
    ib: "downloadprogress",
    Jb: "uploadprogress",
  };
function tn() {}
function en(t) {
  var e;
  return (e = t.a) || (e = t.a = {}), e;
}
function nn() {}
tn.prototype.a = null;
var rn,
  on = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
function sn() {
  Xt.call(this, "d");
}
function un() {
  Xt.call(this, "c");
}
function an() {}
function cn(t, e, n, r) {
  (this.g = t),
    (this.c = e),
    (this.f = n),
    (this.S = r || 1),
    (this.J = new Ue(this)),
    (this.P = hn),
    (t = Lt ? 125 : void 0),
    (this.R = new ke(t)),
    (this.B = null),
    (this.b = !1),
    (this.j = this.l = this.i = this.H = this.u = this.T = this.o = null),
    (this.s = []),
    (this.a = null),
    (this.D = 0),
    (this.h = this.m = null),
    (this.N = -1),
    (this.A = !1),
    (this.O = 0),
    (this.F = null),
    (this.V = this.C = this.U = this.I = !1);
}
ft(sn, Xt), ft(un, Xt), ft(an, tn), (rn = new an());
var hn = 45e3,
  fn = {},
  ln = {};
function pn(t, e, n) {
  (t.H = 1), (t.i = Rn(On(e))), (t.j = n), (t.I = !0), dn(t, null);
}
function dn(t, e) {
  (t.u = ht()), gn(t), (t.l = On(t.i));
  var n = t.l,
    r = t.S;
  Array.isArray(r) || (r = [String(r)]),
    Qn(n.b, "t", r),
    (t.D = 0),
    (t.a = zr(t.g, t.g.C ? e : null)),
    0 < t.O && (t.F = new Ve(at(t.Ca, t, t.a), t.O)),
    je(t.J, t.a, "readystatechange", t.Xa),
    (e = t.B ? Nt(t.B) : {}),
    t.j
      ? (t.m || (t.m = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.a.ba(t.l, t.m, t.j, e))
      : ((t.m = "GET"), t.a.ba(t.l, t.m, null, e)),
    Ke(1),
    (function (t, e, n, r, i, o) {
      t.info(function () {
        if (t.a)
          if (o)
            for (var s = "", u = o.split("&"), a = 0; a < u.length; a++) {
              var c = u[a].split("=");
              if (1 < c.length) {
                var h = c[0];
                c = c[1];
                var f = h.split("_");
                s =
                  2 <= f.length && "type" == f[1]
                    ? s + (h + "=") + c + "&"
                    : s + (h + "=redacted&");
              }
            }
          else s = null;
        else s = o;
        return (
          "XMLHTTP REQ (" +
          r +
          ") [attempt " +
          i +
          "]: " +
          e +
          "\n" +
          n +
          "\n" +
          s
        );
      });
    })(t.c, t.m, t.l, t.f, t.S, t.j);
}
function vn(t, e, n) {
  for (var r = !0; !t.A && t.D < n.length; ) {
    var i = yn(t, n);
    if (i == ln) {
      4 == e && ((t.h = 4), Xe(14), (r = !1)),
        ze(t.c, t.f, null, "[Incomplete Response]");
      break;
    }
    if (i == fn) {
      (t.h = 4), Xe(15), ze(t.c, t.f, n, "[Invalid Chunk]"), (r = !1);
      break;
    }
    ze(t.c, t.f, i, null), _n(t, i);
  }
  4 == e && 0 == n.length && ((t.h = 1), Xe(16), (r = !1)),
    (t.b = t.b && r),
    r
      ? 0 < n.length &&
        !t.V &&
        ((t.V = !0),
        (e = t.g).a == t &&
          e.U &&
          !e.F &&
          (e.c.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          Lr(e),
          (e.F = !0),
          Xe(11)))
      : (ze(t.c, t.f, n, "[Invalid Chunked Response]"), En(t), wn(t));
}
function yn(t, e) {
  var n = t.D,
    r = e.indexOf("\n", n);
  return -1 == r
    ? ln
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? fn
        : (r += 1) + n > e.length
        ? ln
        : ((e = e.substr(r, n)), (t.D = r + n), e));
}
function gn(t) {
  (t.T = ht() + t.P), mn(t, t.P);
}
function mn(t, e) {
  if (null != t.o) throw Error("WatchDog timer not null");
  t.o = Je(at(t.Va, t), e);
}
function bn(t) {
  t.o && (tt.clearTimeout(t.o), (t.o = null));
}
function wn(t) {
  0 == t.g.v || t.A || Ur(t.g, t);
}
function En(t) {
  bn(t);
  var e = t.F;
  e && "function" == typeof e.ja && e.ja(),
    (t.F = null),
    Ce(t.R),
    Fe(t.J),
    t.a && ((e = t.a), (t.a = null), e.abort(), e.ja());
}
function _n(t, e) {
  try {
    var n = t.g;
    if (0 != n.v && (n.a == t || er(n.b, t)))
      if (((n.I = t.N), !t.C && er(n.b, t) && 3 == n.v)) {
        try {
          var r = n.ka.a.parse(e);
        } catch (y) {
          r = null;
        }
        if (Array.isArray(r) && 3 == r.length) {
          var i = r;
          if (0 == i[0]) {
            t: if (!n.j) {
              if (n.a) {
                if (!(n.a.u + 3e3 < t.u)) break t;
                Vr(n), Nr(n);
              }
              Cr(n), Xe(18);
            }
          } else
            (n.oa = i[1]),
              0 < n.oa - n.P &&
                37500 > i[2] &&
                n.H &&
                0 == n.o &&
                !n.m &&
                (n.m = Je(at(n.Sa, n), 6e3));
          if (1 >= tr(n.b) && n.ea) {
            try {
              n.ea();
            } catch (y) {}
            n.ea = void 0;
          }
        } else jr(n, 11);
      } else if (((t.C || n.a == t) && Vr(n), !gt(e)))
        for (e = r = n.ka.a.parse(e), r = 0; r < e.length; r++)
          if (((i = e[r]), (n.P = i[0]), (i = i[1]), 2 == n.v))
            if ("c" == i[0]) {
              (n.J = i[1]), (n.ga = i[2]);
              var o = i[3];
              null != o && ((n.ha = o), n.c.info("VER=" + n.ha));
              var s = i[4];
              null != s && ((n.pa = s), n.c.info("SVER=" + n.pa));
              var u = i[5];
              if (null != u && "number" == typeof u && 0 < u) {
                var a = 1.5 * u;
                (n.D = a), n.c.info("backChannelRequestTimeoutMs_=" + a);
              }
              a = n;
              var c = t.a;
              if (c) {
                var h = c.a
                  ? c.a.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (h) {
                  var f = a.b;
                  !f.a &&
                    (wt(h, "spdy") || wt(h, "quic") || wt(h, "h2")) &&
                    ((f.f = f.g),
                    (f.a = new Set()),
                    f.b && (nr(f, f.b), (f.b = null)));
                }
                if (a.A) {
                  var l = c.a
                    ? c.a.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  l && ((a.na = l), Ln(a.B, a.A, l));
                }
              }
              (n.v = 3),
                n.f && n.f.ta(),
                n.U &&
                  ((n.N = ht() - t.u),
                  n.c.info("Handshake RTT: " + n.N + "ms"));
              var p = t;
              if ((((a = n).la = qr(a, a.C ? a.ga : null, a.fa)), p.C)) {
                rr(a.b, p);
                var d = p,
                  v = a.D;
                v && d.setTimeout(v), d.o && (bn(d), gn(d)), (a.a = p);
              } else kr(a);
              0 < n.g.length && Dr(n);
            } else ("stop" != i[0] && "close" != i[0]) || jr(n, 7);
          else
            3 == n.v &&
              ("stop" == i[0] || "close" == i[0]
                ? "stop" == i[0]
                  ? jr(n, 7)
                  : Tr(n)
                : "noop" != i[0] && n.f && n.f.sa(i),
              (n.o = 0));
    Ke(4);
  } catch (y) {}
}
function In(t, e) {
  if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
  else if (nt(t) || "string" == typeof t) dt(t, e, void 0);
  else {
    if (t.L && "function" == typeof t.L) var n = t.L();
    else if (t.K && "function" == typeof t.K) n = void 0;
    else if (nt(t) || "string" == typeof t) {
      n = [];
      for (var r = t.length, i = 0; i < r; i++) n.push(i);
    } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
    i = (r = (function (t) {
      if (t.K && "function" == typeof t.K) return t.K();
      if ("string" == typeof t) return t.split("");
      if (nt(t)) {
        for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
        return e;
      }
      for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
      return e;
    })(t)).length;
    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
  }
}
function Tn(t, e) {
  (this.b = {}), (this.a = []), (this.c = 0);
  var n = arguments.length;
  if (1 < n) {
    if (n % 2) throw Error("Uneven number of arguments");
    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
  } else if (t)
    if (t instanceof Tn)
      for (n = t.L(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
    else for (r in t) this.set(r, t[r]);
}
function Nn(t) {
  if (t.c != t.a.length) {
    for (var e = 0, n = 0; e < t.a.length; ) {
      var r = t.a[e];
      An(t.b, r) && (t.a[n++] = r), e++;
    }
    t.a.length = n;
  }
  if (t.c != t.a.length) {
    var i = {};
    for (n = e = 0; e < t.a.length; )
      An(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++;
    t.a.length = n;
  }
}
function An(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
((J = cn.prototype).setTimeout = function (t) {
  this.P = t;
}),
  (J.Xa = function (t) {
    t = t.target;
    var e = this.F;
    e && 3 == wr(t) ? e.f() : this.Ca(t);
  }),
  (J.Ca = function (t) {
    try {
      if (t == this.a)
        t: {
          var e = wr(this.a),
            n = this.a.ua(),
            r = this.a.W();
          if (!(3 > e || (3 == e && !Lt && !this.a.$()))) {
            this.A || 4 != e || 7 == n || Ke(8 == n || 0 >= r ? 3 : 2),
              bn(this);
            var i = this.a.W();
            this.N = i;
            var o = this.a.$();
            if (
              ((this.b = 200 == i),
              (function (t, e, n, r, i, o, s) {
                t.info(function () {
                  return (
                    "XMLHTTP RESP (" +
                    r +
                    ") [ attempt " +
                    i +
                    "]: " +
                    e +
                    "\n" +
                    n +
                    "\n" +
                    o +
                    " " +
                    s
                  );
                });
              })(this.c, this.m, this.l, this.f, this.S, e, i),
              this.b)
            ) {
              if (this.U && !this.C) {
                e: {
                  if (this.a) {
                    var s,
                      u = this.a;
                    if (
                      (s = u.a
                        ? u.a.getResponseHeader("X-HTTP-Initial-Response")
                        : null) &&
                      !gt(s)
                    ) {
                      var a = s;
                      break e;
                    }
                  }
                  a = null;
                }
                if (!a) {
                  (this.b = !1), (this.h = 3), Xe(12), En(this), wn(this);
                  break t;
                }
                ze(
                  this.c,
                  this.f,
                  a,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.C = !0),
                  _n(this, a);
              }
              this.I
                ? (vn(this, e, o),
                  Lt &&
                    this.b &&
                    3 == e &&
                    (je(this.J, this.R, "tick", this.Wa), this.R.start()))
                : (ze(this.c, this.f, o, null), _n(this, o)),
                4 == e && En(this),
                this.b &&
                  !this.A &&
                  (4 == e ? Ur(this.g, this) : ((this.b = !1), gn(this)));
            } else
              400 == i && 0 < o.indexOf("Unknown SID")
                ? ((this.h = 3), Xe(12))
                : ((this.h = 0), Xe(13)),
                En(this),
                wn(this);
          }
        }
    } catch (c) {}
  }),
  (J.Wa = function () {
    if (this.a) {
      var t = wr(this.a),
        e = this.a.$();
      this.D < e.length &&
        (bn(this), vn(this, t, e), this.b && 4 != t && gn(this));
    }
  }),
  (J.cancel = function () {
    (this.A = !0), En(this);
  }),
  (J.Va = function () {
    this.o = null;
    var t = ht();
    0 <= t - this.T
      ? ((function (t, e) {
          t.info(function () {
            return "TIMEOUT: " + e;
          });
        })(this.c, this.l),
        2 != this.H && (Ke(3), Xe(17)),
        En(this),
        (this.h = 2),
        wn(this))
      : mn(this, this.T - t);
  }),
  ((J = Tn.prototype).K = function () {
    Nn(this);
    for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
    return t;
  }),
  (J.L = function () {
    return Nn(this), this.a.concat();
  }),
  (J.get = function (t, e) {
    return An(this.b, t) ? this.b[t] : e;
  }),
  (J.set = function (t, e) {
    An(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
  }),
  (J.forEach = function (t, e) {
    for (var n = this.L(), r = 0; r < n.length; r++) {
      var i = n[r],
        o = this.get(i);
      t.call(e, o, i, this);
    }
  });
var Sn =
  /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Dn(t, e) {
  if (
    ((this.c = this.j = this.f = ""),
    (this.h = null),
    (this.i = this.g = ""),
    (this.a = !1),
    t instanceof Dn)
  ) {
    (this.a = void 0 !== e ? e : t.a),
      xn(this, t.f),
      (this.j = t.j),
      Pn(this, t.c),
      kn(this, t.h),
      (this.g = t.g),
      (e = t.b);
    var n = new Gn();
    (n.c = e.c),
      e.a && ((n.a = new Tn(e.a)), (n.b = e.b)),
      Cn(this, n),
      (this.i = t.i);
  } else
    t && (n = String(t).match(Sn))
      ? ((this.a = !!e),
        xn(this, n[1] || "", !0),
        (this.j = Vn(n[2] || "")),
        Pn(this, n[3] || "", !0),
        kn(this, n[4]),
        (this.g = Vn(n[5] || "", !0)),
        Cn(this, n[6] || "", !0),
        (this.i = Vn(n[7] || "")))
      : ((this.a = !!e), (this.b = new Gn(null, this.a)));
}
function On(t) {
  return new Dn(t);
}
function xn(t, e, n) {
  (t.f = n ? Vn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
}
function Pn(t, e, n) {
  t.c = n ? Vn(e, !0) : e;
}
function kn(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.h = e;
  } else t.h = null;
}
function Cn(t, e, n) {
  e instanceof Gn
    ? ((t.b = e),
      (function (t, e) {
        e &&
          !t.f &&
          (Hn(t),
          (t.c = null),
          t.a.forEach(function (t, e) {
            var n = e.toLowerCase();
            e != n && (Yn(this, e), Qn(this, n, t));
          }, t)),
          (t.f = e);
      })(t.b, t.a))
    : (n || (e = Un(e, zn)), (t.b = new Gn(e, t.a)));
}
function Ln(t, e, n) {
  t.b.set(e, n);
}
function Rn(t) {
  return (
    Ln(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ ht()).toString(36)
    ),
    t
  );
}
function Vn(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function Un(t, e, n) {
  return "string" == typeof t
    ? ((t = encodeURI(t).replace(e, Mn)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function Mn(t) {
  return (
    "%" +
    (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
    (15 & t).toString(16)
  );
}
Dn.prototype.toString = function () {
  var t = [],
    e = this.f;
  e && t.push(Un(e, jn, !0), ":");
  var n = this.c;
  return (
    (n || "file" == e) &&
      (t.push("//"),
      (e = this.j) && t.push(Un(e, jn, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      null != (n = this.h) && t.push(":", String(n))),
    (n = this.g) &&
      (this.c && "/" != n.charAt(0) && t.push("/"),
      t.push(Un(n, "/" == n.charAt(0) ? qn : Fn, !0))),
    (n = this.b.toString()) && t.push("?", n),
    (n = this.i) && t.push("#", Un(n, Bn)),
    t.join("")
  );
};
var jn = /[#\/\?@]/g,
  Fn = /[#\?:]/g,
  qn = /[#\?]/g,
  zn = /[#\?@]/g,
  Bn = /#/g;
function Gn(t, e) {
  (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
}
function Hn(t) {
  t.a ||
    ((t.a = new Tn()),
    (t.b = 0),
    t.c &&
      (function (t, e) {
        if (t) {
          t = t.split("&");
          for (var n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="),
              i = null;
            if (0 <= r) {
              var o = t[n].substring(0, r);
              i = t[n].substring(r + 1);
            } else o = t[n];
            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
          }
        }
      })(t.c, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
function Yn(t, e) {
  Hn(t),
    (e = Xn(t, e)),
    An(t.a.b, e) &&
      ((t.c = null),
      (t.b -= t.a.get(e).length),
      An((t = t.a).b, e) &&
        (delete t.b[e], t.c--, t.a.length > 2 * t.c && Nn(t)));
}
function Kn(t, e) {
  return Hn(t), (e = Xn(t, e)), An(t.a.b, e);
}
function Qn(t, e, n) {
  Yn(t, e),
    0 < n.length && ((t.c = null), t.a.set(Xn(t, e), yt(n)), (t.b += n.length));
}
function Xn(t, e) {
  return (e = String(e)), t.f && (e = e.toLowerCase()), e;
}
((J = Gn.prototype).add = function (t, e) {
  Hn(this), (this.c = null), (t = Xn(this, t));
  var n = this.a.get(t);
  return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
}),
  (J.forEach = function (t, e) {
    Hn(this),
      this.a.forEach(function (n, r) {
        dt(
          n,
          function (n) {
            t.call(e, n, r, this);
          },
          this
        );
      }, this);
  }),
  (J.L = function () {
    Hn(this);
    for (var t = this.a.K(), e = this.a.L(), n = [], r = 0; r < e.length; r++)
      for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
    return n;
  }),
  (J.K = function (t) {
    Hn(this);
    var e = [];
    if ("string" == typeof t)
      Kn(this, t) && (e = vt(e, this.a.get(Xn(this, t))));
    else {
      t = this.a.K();
      for (var n = 0; n < t.length; n++) e = vt(e, t[n]);
    }
    return e;
  }),
  (J.set = function (t, e) {
    return (
      Hn(this),
      (this.c = null),
      Kn(this, (t = Xn(this, t))) && (this.b -= this.a.get(t).length),
      this.a.set(t, [e]),
      (this.b += 1),
      this
    );
  }),
  (J.get = function (t, e) {
    return t && 0 < (t = this.K(t)).length ? String(t[0]) : e;
  }),
  (J.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var t = [], e = this.a.L(), n = 0; n < e.length; n++) {
      var r = e[n],
        i = encodeURIComponent(String(r));
      r = this.K(r);
      for (var o = 0; o < r.length; o++) {
        var s = i;
        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s);
      }
    }
    return (this.c = t.join("&"));
  });
var Wn = function (t, e) {
  (this.b = t), (this.a = e);
};
function Jn(t) {
  (this.g = t || Zn),
    tt.PerformanceNavigationTiming
      ? (t =
          0 < (t = tt.performance.getEntriesByType("navigation")).length &&
          ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol))
      : (t = !!(tt.ia && tt.ia.ya && tt.ia.ya() && tt.ia.ya().Lb)),
    (this.f = t ? this.g : 1),
    (this.a = null),
    1 < this.f && (this.a = new Set()),
    (this.b = null),
    (this.c = []);
}
var Zn = 10;
function $n(t) {
  return !!t.b || (!!t.a && t.a.size >= t.f);
}
function tr(t) {
  return t.b ? 1 : t.a ? t.a.size : 0;
}
function er(t, e) {
  return t.b ? t.b == e : !!t.a && t.a.has(e);
}
function nr(t, e) {
  t.a ? t.a.add(e) : (t.b = e);
}
function rr(t, e) {
  t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
}
function ir(t) {
  var e, n;
  if (null != t.b) return t.c.concat(t.b.s);
  if (null != t.a && 0 !== t.a.size) {
    var r = t.c;
    try {
      for (var i = W(t.a.values()), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        r = r.concat(s.s);
      }
    } catch (u) {
      e = { error: u };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  return yt(t.c);
}
function or() {}
function sr() {
  this.a = new or();
}
function ur(t, e, n) {
  var r = n || "";
  try {
    In(t, function (t, n) {
      var i = t;
      rt(t) && (i = Ee(t)), e.push(r + n + "=" + encodeURIComponent(i));
    });
  } catch (ud) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), ud);
  }
}
function ar(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch (o) {}
}
(Jn.prototype.cancel = function () {
  var t, e;
  if (((this.c = ir(this)), this.b)) this.b.cancel(), (this.b = null);
  else if (this.a && 0 !== this.a.size) {
    try {
      for (var n = W(this.a.values()), r = n.next(); !r.done; r = n.next()) {
        r.value.cancel();
      }
    } catch (i) {
      t = { error: i };
    } finally {
      try {
        r && !r.done && (e = n.return) && e.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    this.a.clear();
  }
}),
  (or.prototype.stringify = function (t) {
    return tt.JSON.stringify(t, void 0);
  }),
  (or.prototype.parse = function (t) {
    return tt.JSON.parse(t, void 0);
  });
var cr = tt.JSON.parse;
function hr(t) {
  me.call(this),
    (this.headers = new Tn()),
    (this.H = t || null),
    (this.b = !1),
    (this.s = this.a = null),
    (this.B = ""),
    (this.h = 0),
    (this.f = ""),
    (this.g = this.A = this.l = this.u = !1),
    (this.o = 0),
    (this.m = null),
    (this.I = fr),
    (this.D = this.F = !1);
}
ft(hr, me);
var fr = "",
  lr = /^https?$/i,
  pr = ["POST", "PUT"];
function dr(t) {
  return "content-type" == t.toLowerCase();
}
function vr(t, e) {
  (t.b = !1),
    t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
    (t.f = e),
    (t.h = 5),
    yr(t),
    mr(t);
}
function yr(t) {
  t.u || ((t.u = !0), be(t, "complete"), be(t, "error"));
}
function gr(t) {
  if (t.b && void 0 !== $ && (!t.s[1] || 4 != wr(t) || 2 != t.W()))
    if (t.l && 4 == wr(t)) Le(t.za, 0, t);
    else if ((be(t, "readystatechange"), 4 == wr(t))) {
      t.b = !1;
      try {
        var e,
          n = t.W();
        t: switch (n) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var r = !0;
            break t;
          default:
            r = !1;
        }
        if (!(e = r)) {
          var i;
          if ((i = 0 === n)) {
            var o = String(t.B).match(Sn)[1] || null;
            if (!o && tt.self && tt.self.location) {
              var s = tt.self.location.protocol;
              o = s.substr(0, s.length - 1);
            }
            i = !lr.test(o ? o.toLowerCase() : "");
          }
          e = i;
        }
        if (e) be(t, "complete"), be(t, "success");
        else {
          t.h = 6;
          try {
            var u = 2 < wr(t) ? t.a.statusText : "";
          } catch (a) {
            u = "";
          }
          (t.f = u + " [" + t.W() + "]"), yr(t);
        }
      } finally {
        mr(t);
      }
    }
}
function mr(t, e) {
  if (t.a) {
    br(t);
    var n = t.a,
      r = t.s[0] ? et : null;
    (t.a = null), (t.s = null), e || be(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch (ud) {}
  }
}
function br(t) {
  t.a && t.D && (t.a.ontimeout = null),
    t.m && (tt.clearTimeout(t.m), (t.m = null));
}
function wr(t) {
  return t.a ? t.a.readyState : 0;
}
function Er(t, e, n) {
  t: {
    for (r in n) {
      var r = !1;
      break t;
    }
    r = !0;
  }
  r ||
    ((n = (function (t) {
      var e = "";
      return (
        Tt(t, function (t, n) {
          (e += n), (e += ":"), (e += t), (e += "\r\n");
        }),
        e
      );
    })(n)),
    "string" == typeof t
      ? null != n && encodeURIComponent(String(n))
      : Ln(t, e, n));
}
function _r(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function Ir(t) {
  (this.pa = 0),
    (this.g = []),
    (this.c = new qe()),
    (this.ga =
      this.la =
      this.B =
      this.fa =
      this.a =
      this.na =
      this.A =
      this.V =
      this.i =
      this.O =
      this.l =
        null),
    (this.Oa = this.R = 0),
    (this.La = _r("failFast", !1, t)),
    (this.H = this.m = this.j = this.h = this.f = null),
    (this.S = !0),
    (this.I = this.oa = this.P = -1),
    (this.T = this.o = this.u = 0),
    (this.Ha = _r("baseRetryDelayMs", 5e3, t)),
    (this.Ra = _r("retryDelaySeedMs", 1e4, t)),
    (this.Ma = _r("forwardChannelMaxRetries", 2, t)),
    (this.ma = _r("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.Na = (t && t.g) || void 0),
    (this.D = void 0),
    (this.C = (t && t.supportsCrossDomainXhr) || !1),
    (this.J = ""),
    (this.b = new Jn(t && t.concurrentRequestLimit)),
    (this.ka = new sr()),
    (this.da = (t && t.fastHandshake) || !1),
    (this.Ia = (t && t.b) || !1),
    t && t.f && (this.c.a = !1),
    t && t.forceLongPolling && (this.S = !1),
    (this.U = (!this.da && this.S && t && t.detectBufferingProxy) || !1),
    (this.ea = void 0),
    (this.N = 0),
    (this.F = !1),
    (this.s = null),
    (this.Ka = (t && t.c) || !1) &&
      this.c.info("Opt-in to enable Chrome Origin Trials.");
}
function Tr(t) {
  if ((Ar(t), 3 == t.v)) {
    var e = t.R++,
      n = On(t.B);
    Ln(n, "SID", t.J),
      Ln(n, "RID", e),
      Ln(n, "TYPE", "terminate"),
      xr(t, n),
      ((e = new cn(t, t.c, e, void 0)).H = 2),
      (e.i = Rn(On(n))),
      (n = !1),
      tt.navigator &&
        tt.navigator.sendBeacon &&
        (n = tt.navigator.sendBeacon(e.i.toString(), "")),
      !n && tt.Image && ((new Image().src = e.i), (n = !0)),
      n || ((e.a = zr(e.g, null)), e.a.ba(e.i)),
      (e.u = ht()),
      gn(e);
  }
  Fr(t);
}
function Nr(t) {
  t.a && (Lr(t), t.a.cancel(), (t.a = null));
}
function Ar(t) {
  Nr(t),
    t.j && (tt.clearTimeout(t.j), (t.j = null)),
    Vr(t),
    t.b.cancel(),
    t.h && ("number" == typeof t.h && tt.clearTimeout(t.h), (t.h = null));
}
function Sr(t, e) {
  t.g.push(new Wn(t.Oa++, e)), 3 == t.v && Dr(t);
}
function Dr(t) {
  $n(t.b) || t.h || ((t.h = !0), De(t.Ba, t), (t.u = 0));
}
function Or(t, e) {
  var n;
  n = e ? e.f : t.R++;
  var r = On(t.B);
  Ln(r, "SID", t.J),
    Ln(r, "RID", n),
    Ln(r, "AID", t.P),
    xr(t, r),
    t.i && t.l && Er(r, t.i, t.l),
    (n = new cn(t, t.c, n, t.u + 1)),
    null === t.i && (n.B = t.l),
    e && (t.g = e.s.concat(t.g)),
    (e = Pr(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ma) + Math.round(0.5 * t.ma * Math.random())
    ),
    nr(t.b, n),
    pn(n, r, e);
}
function xr(t, e) {
  t.f &&
    In({}, function (t, n) {
      Ln(e, n, t);
    });
}
function Pr(t, e, n) {
  n = Math.min(t.g.length, n);
  var r = t.f ? at(t.f.Ja, t.f, t) : null;
  t: for (var i = t.g, o = -1; ; ) {
    var s = ["count=" + n];
    -1 == o
      ? 0 < n
        ? ((o = i[0].b), s.push("ofs=" + o))
        : (o = 0)
      : s.push("ofs=" + o);
    for (var u = !0, a = 0; a < n; a++) {
      var c = i[a].b,
        h = i[a].a;
      if (0 > (c -= o)) (o = Math.max(0, i[a].b - 100)), (u = !1);
      else
        try {
          ur(h, s, "req" + c + "_");
        } catch (f) {
          r && r(h);
        }
    }
    if (u) {
      r = s.join("&");
      break t;
    }
  }
  return (t = t.g.splice(0, n)), (e.s = t), r;
}
function kr(t) {
  t.a || t.j || ((t.T = 1), De(t.Aa, t), (t.o = 0));
}
function Cr(t) {
  return (
    !(t.a || t.j || 3 <= t.o) &&
    (t.T++, (t.j = Je(at(t.Aa, t), Mr(t, t.o))), t.o++, !0)
  );
}
function Lr(t) {
  null != t.s && (tt.clearTimeout(t.s), (t.s = null));
}
function Rr(t) {
  (t.a = new cn(t, t.c, "rpc", t.T)),
    null === t.i && (t.a.B = t.l),
    (t.a.O = 0);
  var e = On(t.la);
  Ln(e, "RID", "rpc"),
    Ln(e, "SID", t.J),
    Ln(e, "CI", t.H ? "0" : "1"),
    Ln(e, "AID", t.P),
    xr(t, e),
    Ln(e, "TYPE", "xmlhttp"),
    t.i && t.l && Er(e, t.i, t.l),
    t.D && t.a.setTimeout(t.D);
  var n = t.a;
  (t = t.ga), (n.H = 1), (n.i = Rn(On(e))), (n.j = null), (n.I = !0), dn(n, t);
}
function Vr(t) {
  null != t.m && (tt.clearTimeout(t.m), (t.m = null));
}
function Ur(t, e) {
  var n = null;
  if (t.a == e) {
    Vr(t), Lr(t), (t.a = null);
    var r = 2;
  } else {
    if (!er(t.b, e)) return;
    (n = e.s), rr(t.b, e), (r = 1);
  }
  if (((t.I = e.N), 0 != t.v))
    if (e.b)
      if (1 == r) {
        (n = e.j ? e.j.length : 0), (e = ht() - e.u);
        var i = t.u;
        be((r = He()), new We(r, n, e, i)), Dr(t);
      } else kr(t);
    else if (
      3 == (i = e.h) ||
      (0 == i && 0 < t.I) ||
      !(
        (1 == r &&
          (function (t, e) {
            return !(
              tr(t.b) >= t.b.f - (t.h ? 1 : 0) ||
              (t.h
                ? ((t.g = e.s.concat(t.g)), 0)
                : 1 == t.v ||
                  2 == t.v ||
                  t.u >= (t.La ? 0 : t.Ma) ||
                  ((t.h = Je(at(t.Ba, t, e), Mr(t, t.u))), t.u++, 0))
            );
          })(t, e)) ||
        (2 == r && Cr(t))
      )
    )
      switch ((n && 0 < n.length && ((e = t.b), (e.c = e.c.concat(n))), i)) {
        case 1:
          jr(t, 5);
          break;
        case 4:
          jr(t, 10);
          break;
        case 3:
          jr(t, 6);
          break;
        default:
          jr(t, 2);
      }
}
function Mr(t, e) {
  var n = t.Ha + Math.floor(Math.random() * t.Ra);
  return t.f || (n *= 2), n * e;
}
function jr(t, e) {
  if ((t.c.info("Error code " + e), 2 == e)) {
    var n = null;
    t.f && (n = null);
    var r = at(t.Ya, t);
    n ||
      ((n = new Dn("//www.google.com/images/cleardot.gif")),
      (tt.location && "http" == tt.location.protocol) || xn(n, "https"),
      Rn(n)),
      (function (t, e) {
        var n = new qe();
        if (tt.Image) {
          var r = new Image();
          (r.onload = ct(ar, n, r, "TestLoadImage: loaded", !0, e)),
            (r.onerror = ct(ar, n, r, "TestLoadImage: error", !1, e)),
            (r.onabort = ct(ar, n, r, "TestLoadImage: abort", !1, e)),
            (r.ontimeout = ct(ar, n, r, "TestLoadImage: timeout", !1, e)),
            tt.setTimeout(function () {
              r.ontimeout && r.ontimeout();
            }, 1e4),
            (r.src = t);
        } else e(!1);
      })(n.toString(), r);
  } else Xe(2);
  (t.v = 0), t.f && t.f.ra(e), Fr(t), Ar(t);
}
function Fr(t) {
  (t.v = 0),
    (t.I = -1),
    t.f &&
      ((0 == ir(t.b).length && 0 == t.g.length) ||
        ((t.b.c.length = 0), yt(t.g), (t.g.length = 0)),
      t.f.qa());
}
function qr(t, e, n) {
  var r = (function (t) {
    return t instanceof Dn ? On(t) : new Dn(t, void 0);
  })(n);
  if ("" != r.c) e && Pn(r, e + "." + r.c), kn(r, r.h);
  else {
    var i = tt.location;
    r = (function (t, e, n, r) {
      var i = new Dn(null, void 0);
      return t && xn(i, t), e && Pn(i, e), n && kn(i, n), r && (i.g = r), i;
    })(i.protocol, e ? e + "." + i.hostname : i.hostname, +i.port, n);
  }
  return (
    t.V &&
      Tt(t.V, function (t, e) {
        Ln(r, e, t);
      }),
    (e = t.A),
    (n = t.na),
    e && n && Ln(r, e, n),
    Ln(r, "VER", t.ha),
    xr(t, r),
    r
  );
}
function zr(t, e) {
  if (e && !t.C)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return ((e = new hr(t.Na)).F = t.C), e;
}
function Br() {}
function Gr() {
  if (kt && !(10 <= Number(Ht)))
    throw Error("Environmental error: no available transport.");
}
function Hr(t, e) {
  me.call(this),
    (this.a = new Ir(e)),
    (this.o = t),
    (this.b = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.a.l = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.a &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.a)
        : (t = { "X-WebChannel-Client-Profile": e.a })),
    (this.a.O = t),
    (t = e && e.httpHeadersOverwriteParam) && !gt(t) && (this.a.i = t),
    (this.m = (e && e.supportsCrossDomainXhr) || !1),
    (this.l = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !gt(e) &&
      ((this.a.A = e),
      null !== (t = this.b) && e in t && e in (t = this.b) && delete t[e]),
    (this.f = new Qr(this));
}
function Yr(t) {
  sn.call(this);
  var e = t.__sm__;
  if (e) {
    t: {
      for (var n in e) {
        t = n;
        break t;
      }
      t = void 0;
    }
    (this.c = t)
      ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
      : (this.data = e);
  } else this.data = t;
}
function Kr() {
  un.call(this), (this.status = 1);
}
function Qr(t) {
  this.a = t;
}
((J = hr.prototype).ba = function (t, e, n, r) {
  if (this.a)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.B +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.B = t),
    (this.f = ""),
    (this.h = 0),
    (this.u = !1),
    (this.b = !0),
    (this.a = new XMLHttpRequest()),
    (this.s = this.H ? en(this.H) : en(rn)),
    (this.a.onreadystatechange = at(this.za, this));
  try {
    (this.A = !0), this.a.open(e, String(t), !0), (this.A = !1);
  } catch (o) {
    return void vr(this, o);
  }
  t = n || "";
  var i = new Tn(this.headers);
  r &&
    In(r, function (t, e) {
      i.set(e, t);
    }),
    (r = (function (t) {
      t: {
        for (
          var e = dr,
            n = t.length,
            r = "string" == typeof t ? t.split("") : t,
            i = 0;
          i < n;
          i++
        )
          if (i in r && e.call(void 0, r[i], i, t)) {
            e = i;
            break t;
          }
        e = -1;
      }
      return 0 > e ? null : "string" == typeof t ? t.charAt(e) : t[e];
    })(i.L())),
    (n = tt.FormData && t instanceof tt.FormData),
    !(0 <= pt(pr, e)) ||
      r ||
      n ||
      i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
    i.forEach(function (t, e) {
      this.a.setRequestHeader(e, t);
    }, this),
    this.I && (this.a.responseType = this.I),
    "withCredentials" in this.a &&
      this.a.withCredentials !== this.F &&
      (this.a.withCredentials = this.F);
  try {
    br(this),
      0 < this.o &&
        ((this.D = (function (t) {
          return (
            kt &&
            Bt(9) &&
            "number" == typeof t.timeout &&
            void 0 !== t.ontimeout
          );
        })(this.a))
          ? ((this.a.timeout = this.o), (this.a.ontimeout = at(this.xa, this)))
          : (this.m = Le(this.xa, this.o, this))),
      (this.l = !0),
      this.a.send(t),
      (this.l = !1);
  } catch (o) {
    vr(this, o);
  }
}),
  (J.xa = function () {
    void 0 !== $ &&
      this.a &&
      ((this.f = "Timed out after " + this.o + "ms, aborting"),
      (this.h = 8),
      be(this, "timeout"),
      this.abort(8));
  }),
  (J.abort = function (t) {
    this.a &&
      this.b &&
      ((this.b = !1),
      (this.g = !0),
      this.a.abort(),
      (this.g = !1),
      (this.h = t || 7),
      be(this, "complete"),
      be(this, "abort"),
      mr(this));
  }),
  (J.G = function () {
    this.a &&
      (this.b && ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
      mr(this, !0)),
      hr.X.G.call(this);
  }),
  (J.za = function () {
    this.j || (this.A || this.l || this.g ? gr(this) : this.Ua());
  }),
  (J.Ua = function () {
    gr(this);
  }),
  (J.W = function () {
    try {
      return 2 < wr(this) ? this.a.status : -1;
    } catch (xt) {
      return -1;
    }
  }),
  (J.$ = function () {
    try {
      return this.a ? this.a.responseText : "";
    } catch (xt) {
      return "";
    }
  }),
  (J.Pa = function (t) {
    if (this.a) {
      var e = this.a.responseText;
      return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), cr(e);
    }
  }),
  (J.ua = function () {
    return this.h;
  }),
  (J.Qa = function () {
    return "string" == typeof this.f ? this.f : String(this.f);
  }),
  ((J = Ir.prototype).ha = 8),
  (J.v = 1),
  (J.Ba = function (t) {
    if (this.h)
      if (((this.h = null), 1 == this.v)) {
        if (!t) {
          (this.R = Math.floor(1e5 * Math.random())), (t = this.R++);
          var e,
            n = new cn(this, this.c, t, void 0),
            r = this.l;
          if (
            (this.O && (r ? St((r = Nt(r)), this.O) : (r = this.O)),
            null === this.i && (n.B = r),
            this.da)
          )
            t: {
              for (var i = (e = 0); i < this.g.length; i++) {
                var o = this.g[i];
                if (
                  void 0 ===
                  (o =
                    "__data__" in o.a && "string" == typeof (o = o.a.__data__)
                      ? o.length
                      : void 0)
                )
                  break;
                if (4096 < (e += o)) {
                  e = i;
                  break t;
                }
                if (4096 === e || i === this.g.length - 1) {
                  e = i + 1;
                  break t;
                }
              }
              e = 1e3;
            }
          else e = 1e3;
          (e = Pr(this, n, e)),
            Ln((i = On(this.B)), "RID", t),
            Ln(i, "CVER", 22),
            this.A && Ln(i, "X-HTTP-Session-Id", this.A),
            xr(this, i),
            this.i && r && Er(i, this.i, r),
            nr(this.b, n),
            this.Ia && Ln(i, "TYPE", "init"),
            this.da
              ? (Ln(i, "$req", e),
                Ln(i, "SID", "null"),
                (n.U = !0),
                pn(n, i, null))
              : pn(n, i, e),
            (this.v = 2);
        }
      } else
        3 == this.v &&
          (t ? Or(this, t) : 0 == this.g.length || $n(this.b) || Or(this));
  }),
  (J.Aa = function () {
    if (
      ((this.j = null),
      Rr(this),
      this.U && !(this.F || null == this.a || 0 >= this.N))
    ) {
      var t = 2 * this.N;
      this.c.info("BP detection timer enabled: " + t),
        (this.s = Je(at(this.Ta, this), t));
    }
  }),
  (J.Ta = function () {
    this.s &&
      ((this.s = null),
      this.c.info("BP detection timeout reached."),
      this.c.info("Buffering proxy detected and switch to long-polling!"),
      (this.H = !1),
      (this.F = !0),
      Xe(10),
      Nr(this),
      Rr(this));
  }),
  (J.Sa = function () {
    null != this.m && ((this.m = null), Nr(this), Cr(this), Xe(19));
  }),
  (J.Ya = function (t) {
    t
      ? (this.c.info("Successfully pinged google.com"), Xe(2))
      : (this.c.info("Failed to ping google.com"), Xe(1));
  }),
  ((J = Br.prototype).ta = function () {}),
  (J.sa = function () {}),
  (J.ra = function () {}),
  (J.qa = function () {}),
  (J.Ja = function () {}),
  (Gr.prototype.a = function (t, e) {
    return new Hr(t, e);
  }),
  ft(Hr, me),
  (Hr.prototype.g = function () {
    (this.a.f = this.f), this.m && (this.a.C = !0);
    var t = this.a,
      e = this.o,
      n = this.b || void 0;
    Xe(0),
      (t.fa = e),
      (t.V = n || {}),
      (t.H = t.S),
      (t.B = qr(t, null, t.fa)),
      Dr(t);
  }),
  (Hr.prototype.close = function () {
    Tr(this.a);
  }),
  (Hr.prototype.h = function (t) {
    if ("string" == typeof t) {
      var e = {};
      (e.__data__ = t), Sr(this.a, e);
    } else
      this.l ? (((e = {}).__data__ = Ee(t)), Sr(this.a, e)) : Sr(this.a, t);
  }),
  (Hr.prototype.G = function () {
    (this.a.f = null),
      delete this.f,
      Tr(this.a),
      delete this.a,
      Hr.X.G.call(this);
  }),
  ft(Yr, sn),
  ft(Kr, un),
  ft(Qr, Br),
  (Qr.prototype.ta = function () {
    be(this.a, "a");
  }),
  (Qr.prototype.sa = function (t) {
    be(this.a, new Yr(t));
  }),
  (Qr.prototype.ra = function (t) {
    be(this.a, new Kr(t));
  }),
  (Qr.prototype.qa = function () {
    be(this.a, "b");
  }),
  (Gr.prototype.createWebChannel = Gr.prototype.a),
  (Hr.prototype.send = Hr.prototype.h),
  (Hr.prototype.open = Hr.prototype.g),
  (Hr.prototype.close = Hr.prototype.close),
  (Ze.NO_ERROR = 0),
  (Ze.TIMEOUT = 8),
  (Ze.HTTP_ERROR = 6),
  ($e.COMPLETE = "complete"),
  (nn.EventType = on),
  (on.OPEN = "a"),
  (on.CLOSE = "b"),
  (on.ERROR = "c"),
  (on.MESSAGE = "d"),
  (me.prototype.listen = me.prototype.va),
  (hr.prototype.listenOnce = hr.prototype.wa),
  (hr.prototype.getLastError = hr.prototype.Qa),
  (hr.prototype.getLastErrorCode = hr.prototype.ua),
  (hr.prototype.getStatus = hr.prototype.W),
  (hr.prototype.getResponseJson = hr.prototype.Pa),
  (hr.prototype.getResponseText = hr.prototype.$),
  (hr.prototype.send = hr.prototype.ba);
var Xr = Ze,
  Wr = $e,
  Jr = Be,
  Zr = 10,
  $r = 11,
  ti = nn,
  ei = hr,
  ni = function (t, e, n, r, i, o) {
    (this.t = t),
      (this.persistenceKey = e),
      (this.host = n),
      (this.ssl = r),
      (this.forceLongPolling = i),
      (this.i = o);
  },
  ri = (function () {
    function t(t, e) {
      (this.projectId = t), (this.database = e || "(default)");
    }
    return (
      Object.defineProperty(t.prototype, "o", {
        get: function () {
          return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (e) {
        return (
          e instanceof t &&
          e.projectId === this.projectId &&
          e.database === this.database
        );
      }),
      t
    );
  })(),
  ii = new C("@firebase/firestore");
function oi() {
  return ii.logLevel;
}
function si(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (ii.logLevel <= N.DEBUG) {
    var r = e.map(ci);
    ii.debug.apply(ii, u(["Firestore (8.2.9): " + t], r));
  }
}
function ui(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (ii.logLevel <= N.ERROR) {
    var r = e.map(ci);
    ii.error.apply(ii, u(["Firestore (8.2.9): " + t], r));
  }
}
function ai(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (ii.logLevel <= N.WARN) {
    var r = e.map(ci);
    ii.warn.apply(ii, u(["Firestore (8.2.9): " + t], r));
  }
}
function ci(t) {
  if ("string" == typeof t) return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch (n) {
    return t;
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
   */ var e;
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
 */ function hi(t) {
  void 0 === t && (t = "Unexpected state");
  var e = "FIRESTORE (8.2.9) INTERNAL ASSERTION FAILED: " + t;
  throw (ui(e), new Error(e));
}
function fi(t, e) {
  t || hi();
}
function li(t, e) {
  return t;
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
 */ function pi(t) {
  var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
  else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
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
 */ var di = (function () {
  function t() {}
  return (
    (t.u = function () {
      for (
        var t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          e = Math.floor(256 / t.length) * t.length,
          n = "";
        n.length < 20;

      )
        for (var r = pi(40), i = 0; i < r.length; ++i)
          n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
      return n;
    }),
    t
  );
})();
function vi(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function yi(t, e, n) {
  return (
    t.length === e.length &&
    t.every(function (t, r) {
      return n(t, e[r]);
    })
  );
}
function gi(t) {
  return t + "\0";
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
 */ var mi = (function () {
  function t(t) {
    this.h = t;
  }
  return (
    (t.fromBase64String = function (e) {
      return new t(atob(e));
    }),
    (t.fromUint8Array = function (e) {
      return new t(
        (function (t) {
          for (var e = "", n = 0; n < t.length; ++n)
            e += String.fromCharCode(t[n]);
          return e;
        })(e)
      );
    }),
    (t.prototype.toBase64 = function () {
      return (t = this.h), btoa(t);
      var t;
    }),
    (t.prototype.toUint8Array = function () {
      return (function (t) {
        for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
          e[n] = t.charCodeAt(n);
        return e;
      })(this.h);
    }),
    (t.prototype.l = function () {
      return 2 * this.h.length;
    }),
    (t.prototype._ = function (t) {
      return vi(this.h, t.h);
    }),
    (t.prototype.isEqual = function (t) {
      return this.h === t.h;
    }),
    t
  );
})();
mi.T = new mi("");
var bi = {
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
  },
  wi = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this, n) || this).code = e),
        (r.message = n),
        (r.name = "FirebaseError"),
        (r.toString = function () {
          return r.name + ": [code=" + r.code + "]: " + r.message;
        }),
        r
      );
    }
    return e(n, t), n;
  })(Error),
  Ei = (function () {
    function t(t) {
      this.I = t;
    }
    return (
      (t.fromBase64String = function (e) {
        try {
          return new t(mi.fromBase64String(e));
        } catch (n) {
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Failed to construct data from Base64 string: " + n
          );
        }
      }),
      (t.fromUint8Array = function (e) {
        return new t(mi.fromUint8Array(e));
      }),
      (t.prototype.toBase64 = function () {
        return this.I.toBase64();
      }),
      (t.prototype.toUint8Array = function () {
        return this.I.toUint8Array();
      }),
      (t.prototype.toString = function () {
        return "Bytes(base64: " + this.toBase64() + ")";
      }),
      (t.prototype.isEqual = function (t) {
        return this.I.isEqual(t.I);
      }),
      t
    );
  })(),
  _i = (function () {
    function t(t) {
      this.uid = t;
    }
    return (
      (t.prototype.m = function () {
        return null != this.uid;
      }),
      (t.prototype.A = function () {
        return this.m() ? "uid:" + this.uid : "anonymous-user";
      }),
      (t.prototype.isEqual = function (t) {
        return t.uid === this.uid;
      }),
      t
    );
  })();
(_i.UNAUTHENTICATED = new _i(null)),
  (_i.R = new _i("google-credentials-uid")),
  (_i.P = new _i("first-party-uid"));
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
 */
var Ii = function (t, e) {
    (this.user = e),
      (this.type = "OAuth"),
      (this.g = {}),
      (this.g.Authorization = "Bearer " + t);
  },
  Ti = (function () {
    function t() {
      this.V = null;
    }
    return (
      (t.prototype.getToken = function () {
        return Promise.resolve(null);
      }),
      (t.prototype.p = function () {}),
      (t.prototype.v = function (t) {
        (this.V = t), t(_i.UNAUTHENTICATED);
      }),
      (t.prototype.S = function () {
        this.V = null;
      }),
      t
    );
  })(),
  Ni = (function () {
    function t(t) {
      var e = this;
      (this.D = null),
        (this.currentUser = _i.UNAUTHENTICATED),
        (this.C = !1),
        (this.N = 0),
        (this.V = null),
        (this.forceRefresh = !1),
        (this.D = function () {
          e.N++, (e.currentUser = e.$()), (e.C = !0), e.V && e.V(e.currentUser);
        }),
        (this.N = 0),
        (this.auth = t.getImmediate({ optional: !0 })),
        this.auth
          ? this.auth.addAuthTokenListener(this.D)
          : (this.D(null),
            t.get().then(
              function (t) {
                (e.auth = t), e.D && e.auth.addAuthTokenListener(e.D);
              },
              function () {}
            ));
    }
    return (
      (t.prototype.getToken = function () {
        var t = this,
          e = this.N,
          n = this.forceRefresh;
        return (
          (this.forceRefresh = !1),
          this.auth
            ? this.auth.getToken(n).then(function (n) {
                return t.N !== e
                  ? (si(
                      "FirebaseCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    t.getToken())
                  : n
                  ? (fi("string" == typeof n.accessToken),
                    new Ii(n.accessToken, t.currentUser))
                  : null;
              })
            : Promise.resolve(null)
        );
      }),
      (t.prototype.p = function () {
        this.forceRefresh = !0;
      }),
      (t.prototype.v = function (t) {
        (this.V = t), this.C && t(this.currentUser);
      }),
      (t.prototype.S = function () {
        this.auth && this.auth.removeAuthTokenListener(this.D),
          (this.D = null),
          (this.V = null);
      }),
      (t.prototype.$ = function () {
        var t = this.auth && this.auth.getUid();
        return fi(null === t || "string" == typeof t), new _i(t);
      }),
      t
    );
  })(),
  Ai = (function () {
    function t(t, e) {
      (this.F = t),
        (this.O = e),
        (this.type = "FirstParty"),
        (this.user = _i.P);
    }
    return (
      Object.defineProperty(t.prototype, "g", {
        get: function () {
          var t = { "X-Goog-AuthUser": this.O },
            e = this.F.auth.getAuthHeaderValueForFirstParty([]);
          return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })(),
  Si = (function () {
    function t(t, e) {
      (this.F = t), (this.O = e);
    }
    return (
      (t.prototype.getToken = function () {
        return Promise.resolve(new Ai(this.F, this.O));
      }),
      (t.prototype.v = function (t) {
        t(_i.P);
      }),
      (t.prototype.S = function () {}),
      (t.prototype.p = function () {}),
      t
    );
  })(),
  Di = (function () {
    function t(t, e) {
      var n = this;
      (this.previousValue = t),
        e &&
          ((e.k = function (t) {
            return n.M(t);
          }),
          (this.L = function (t) {
            return e.B(t);
          }));
    }
    return (
      (t.prototype.M = function (t) {
        return (
          (this.previousValue = Math.max(t, this.previousValue)),
          this.previousValue
        );
      }),
      (t.prototype.next = function () {
        var t = ++this.previousValue;
        return this.L && this.L(t), t;
      }),
      t
    );
  })();
Di.q = -1;
var Oi = (function () {
    function t(t, e) {
      if (((this.seconds = t), (this.nanoseconds = e), e < 0))
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Timestamp nanoseconds out of range: " + e
        );
      if (e >= 1e9)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Timestamp nanoseconds out of range: " + e
        );
      if (t < -62135596800)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Timestamp seconds out of range: " + t
        );
      if (t >= 253402300800)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Timestamp seconds out of range: " + t
        );
    }
    return (
      (t.now = function () {
        return t.fromMillis(Date.now());
      }),
      (t.fromDate = function (e) {
        return t.fromMillis(e.getTime());
      }),
      (t.fromMillis = function (e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
      }),
      (t.prototype.toDate = function () {
        return new Date(this.toMillis());
      }),
      (t.prototype.toMillis = function () {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }),
      (t.prototype.U = function (t) {
        return this.seconds === t.seconds
          ? vi(this.nanoseconds, t.nanoseconds)
          : vi(this.seconds, t.seconds);
      }),
      (t.prototype.isEqual = function (t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
      }),
      (t.prototype.toString = function () {
        return (
          "Timestamp(seconds=" +
          this.seconds +
          ", nanoseconds=" +
          this.nanoseconds +
          ")"
        );
      }),
      (t.prototype.toJSON = function () {
        return { seconds: this.seconds, nanoseconds: this.nanoseconds };
      }),
      (t.prototype.valueOf = function () {
        var t = this.seconds - -62135596800;
        return (
          String(t).padStart(12, "0") +
          "." +
          String(this.nanoseconds).padStart(9, "0")
        );
      }),
      t
    );
  })(),
  xi = (function () {
    function t(t) {
      this.timestamp = t;
    }
    return (
      (t.K = function (e) {
        return new t(e);
      }),
      (t.min = function () {
        return new t(new Oi(0, 0));
      }),
      (t.prototype._ = function (t) {
        return this.timestamp.U(t.timestamp);
      }),
      (t.prototype.isEqual = function (t) {
        return this.timestamp.isEqual(t.timestamp);
      }),
      (t.prototype.W = function () {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }),
      (t.prototype.toString = function () {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }),
      (t.prototype.j = function () {
        return this.timestamp;
      }),
      t
    );
  })(),
  Pi = (function () {
    function t(t, e, n) {
      void 0 === e ? (e = 0) : e > t.length && hi(),
        void 0 === n ? (n = t.length - e) : n > t.length - e && hi(),
        (this.segments = t),
        (this.offset = e),
        (this.G = n);
    }
    return (
      Object.defineProperty(t.prototype, "length", {
        get: function () {
          return this.G;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (e) {
        return 0 === t.H(this, e);
      }),
      (t.prototype.child = function (e) {
        var n = this.segments.slice(this.offset, this.limit());
        return (
          e instanceof t
            ? e.forEach(function (t) {
                n.push(t);
              })
            : n.push(e),
          this.J(n)
        );
      }),
      (t.prototype.limit = function () {
        return this.offset + this.length;
      }),
      (t.prototype.Y = function (t) {
        return (
          (t = void 0 === t ? 1 : t),
          this.J(this.segments, this.offset + t, this.length - t)
        );
      }),
      (t.prototype.X = function () {
        return this.J(this.segments, this.offset, this.length - 1);
      }),
      (t.prototype.Z = function () {
        return this.segments[this.offset];
      }),
      (t.prototype.tt = function () {
        return this.get(this.length - 1);
      }),
      (t.prototype.get = function (t) {
        return this.segments[this.offset + t];
      }),
      (t.prototype.et = function () {
        return 0 === this.length;
      }),
      (t.prototype.nt = function (t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++)
          if (this.get(e) !== t.get(e)) return !1;
        return !0;
      }),
      (t.prototype.st = function (t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++)
          if (this.get(e) !== t.get(e)) return !1;
        return !0;
      }),
      (t.prototype.forEach = function (t) {
        for (var e = this.offset, n = this.limit(); e < n; e++)
          t(this.segments[e]);
      }),
      (t.prototype.it = function () {
        return this.segments.slice(this.offset, this.limit());
      }),
      (t.H = function (t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
          var i = t.get(r),
            o = e.get(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
      }),
      t
    );
  })(),
  ki = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.J = function (t, e, r) {
        return new n(t, e, r);
      }),
      (n.prototype.rt = function () {
        return this.it().join("/");
      }),
      (n.prototype.toString = function () {
        return this.rt();
      }),
      (n.ot = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = [], i = 0, o = t; i < o.length; i++) {
          var s = o[i];
          if (s.indexOf("//") >= 0)
            throw new wi(
              bi.INVALID_ARGUMENT,
              "Invalid segment (" + s + "). Paths must not contain // in them."
            );
          r.push.apply(
            r,
            s.split("/").filter(function (t) {
              return t.length > 0;
            })
          );
        }
        return new n(r);
      }),
      (n.ct = function () {
        return new n([]);
      }),
      n
    );
  })(Pi),
  Ci = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
  Li = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.J = function (t, e, r) {
        return new n(t, e, r);
      }),
      (n.at = function (t) {
        return Ci.test(t);
      }),
      (n.prototype.rt = function () {
        return this.it()
          .map(function (t) {
            return (
              (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
              n.at(t) || (t = "`" + t + "`"),
              t
            );
          })
          .join(".");
      }),
      (n.prototype.toString = function () {
        return this.rt();
      }),
      (n.prototype.ut = function () {
        return 1 === this.length && "__name__" === this.get(0);
      }),
      (n.ht = function () {
        return new n(["__name__"]);
      }),
      (n.lt = function (t) {
        for (
          var e = [],
            r = "",
            i = 0,
            o = function () {
              if (0 === r.length)
                throw new wi(
                  bi.INVALID_ARGUMENT,
                  "Invalid field path (" +
                    t +
                    "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                );
              e.push(r), (r = "");
            },
            s = !1;
          i < t.length;

        ) {
          var u = t[i];
          if ("\\" === u) {
            if (i + 1 === t.length)
              throw new wi(
                bi.INVALID_ARGUMENT,
                "Path has trailing escape character: " + t
              );
            var a = t[i + 1];
            if ("\\" !== a && "." !== a && "`" !== a)
              throw new wi(
                bi.INVALID_ARGUMENT,
                "Path has invalid escape sequence: " + t
              );
            (r += a), (i += 2);
          } else
            "`" === u
              ? ((s = !s), i++)
              : "." !== u || s
              ? ((r += u), i++)
              : (o(), i++);
        }
        if ((o(), s))
          throw new wi(bi.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
      }),
      (n.ct = function () {
        return new n([]);
      }),
      n
    );
  })(Pi),
  Ri = (function () {
    function t(t) {
      this.path = t;
    }
    return (
      (t._t = function (e) {
        return new t(ki.ot(e));
      }),
      (t.ft = function (e) {
        return new t(ki.ot(e).Y(5));
      }),
      (t.prototype.dt = function (t) {
        return (
          this.path.length >= 2 && this.path.get(this.path.length - 2) === t
        );
      }),
      (t.prototype.isEqual = function (t) {
        return null !== t && 0 === ki.H(this.path, t.path);
      }),
      (t.prototype.toString = function () {
        return this.path.toString();
      }),
      (t.H = function (t, e) {
        return ki.H(t.path, e.path);
      }),
      (t.wt = function (t) {
        return t.length % 2 == 0;
      }),
      (t.Et = function (e) {
        return new t(new ki(e.slice()));
      }),
      t
    );
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
 */
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
 */ function Vi(t) {
  var e = 0;
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Ui(t, e) {
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function Mi(t) {
  for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
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
 */ var ji = (function () {
    function t(t) {
      (this.fields = t), t.sort(Li.H);
    }
    return (
      (t.prototype.Tt = function (t) {
        for (var e = 0, n = this.fields; e < n.length; e++)
          if (n[e].nt(t)) return !0;
        return !1;
      }),
      (t.prototype.isEqual = function (t) {
        return yi(this.fields, t.fields, function (t, e) {
          return t.isEqual(e);
        });
      }),
      t
    );
  })(),
  Fi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
 */ function qi(t) {
  if ((fi(!!t), "string" == typeof t)) {
    var e = 0,
      n = Fi.exec(t);
    if ((fi(!!n), n[1])) {
      var r = n[1];
      (r = (r + "000000000").substr(0, 9)), (e = Number(r));
    }
    var i = new Date(t);
    return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
  }
  return { seconds: zi(t.seconds), nanos: zi(t.nanos) };
}
function zi(t) {
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
function Bi(t) {
  return "string" == typeof t ? mi.fromBase64String(t) : mi.fromUint8Array(t);
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
 */ function Gi(t) {
  var e, n;
  return (
    "server_timestamp" ===
    (null ===
      (n = (
        (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
          ? void 0
          : e.fields) || {}
      ).__type__) || void 0 === n
      ? void 0
      : n.stringValue)
  );
}
function Hi(t) {
  var e = t.mapValue.fields.__previous_value__;
  return Gi(e) ? Hi(e) : e;
}
function Yi(t) {
  var e = qi(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Oi(e.seconds, e.nanos);
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
 */ function Ki(t) {
  return null == t;
}
function Qi(t) {
  return 0 === t && 1 / t == -1 / 0;
}
function Xi(t) {
  return (
    "number" == typeof t &&
    Number.isInteger(t) &&
    !Qi(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
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
 */ function Wi(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? Gi(t)
      ? 4
      : 10
    : hi();
}
function Ji(t, e) {
  var n,
    r = Wi(t);
  if (r !== Wi(e)) return !1;
  switch (r) {
    case 0:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Yi(t).isEqual(Yi(e));
    case 3:
      return (function (t, e) {
        if (
          "string" == typeof t.timestampValue &&
          "string" == typeof e.timestampValue &&
          t.timestampValue.length === e.timestampValue.length
        )
          return t.timestampValue === e.timestampValue;
        var n = qi(t.timestampValue),
          r = qi(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (n = e), Bi(t.bytesValue).isEqual(Bi(n.bytesValue));
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (t, e) {
        return (
          zi(t.geoPointValue.latitude) === zi(e.geoPointValue.latitude) &&
          zi(t.geoPointValue.longitude) === zi(e.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (t, e) {
        if ("integerValue" in t && "integerValue" in e)
          return zi(t.integerValue) === zi(e.integerValue);
        if ("doubleValue" in t && "doubleValue" in e) {
          var n = zi(t.doubleValue),
            r = zi(e.doubleValue);
          return n === r ? Qi(n) === Qi(r) : isNaN(n) && isNaN(r);
        }
        return !1;
      })(t, e);
    case 9:
      return yi(t.arrayValue.values || [], e.arrayValue.values || [], Ji);
    case 10:
      return (function (t, e) {
        var n = t.mapValue.fields || {},
          r = e.mapValue.fields || {};
        if (Vi(n) !== Vi(r)) return !1;
        for (var i in n)
          if (n.hasOwnProperty(i) && (void 0 === r[i] || !Ji(n[i], r[i])))
            return !1;
        return !0;
      })(t, e);
    default:
      return hi();
  }
}
function Zi(t, e) {
  return (
    void 0 !==
    (t.values || []).find(function (t) {
      return Ji(t, e);
    })
  );
}
function $i(t, e) {
  var n,
    r,
    i,
    o,
    s = Wi(t),
    u = Wi(e);
  if (s !== u) return vi(s, u);
  switch (s) {
    case 0:
      return 0;
    case 1:
      return vi(t.booleanValue, e.booleanValue);
    case 2:
      return (
        (r = e),
        (i = zi((n = t).integerValue || n.doubleValue)),
        (o = zi(r.integerValue || r.doubleValue)),
        i < o
          ? -1
          : i > o
          ? 1
          : i === o
          ? 0
          : isNaN(i)
          ? isNaN(o)
            ? 0
            : -1
          : 1
      );
    case 3:
      return to(t.timestampValue, e.timestampValue);
    case 4:
      return to(Yi(t), Yi(e));
    case 5:
      return vi(t.stringValue, e.stringValue);
    case 6:
      return (function (t, e) {
        var n = Bi(t),
          r = Bi(e);
        return n._(r);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (t, e) {
        for (
          var n = t.split("/"), r = e.split("/"), i = 0;
          i < n.length && i < r.length;
          i++
        ) {
          var o = vi(n[i], r[i]);
          if (0 !== o) return o;
        }
        return vi(n.length, r.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (t, e) {
        var n = vi(zi(t.latitude), zi(e.latitude));
        return 0 !== n ? n : vi(zi(t.longitude), zi(e.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (t, e) {
        for (
          var n = t.values || [], r = e.values || [], i = 0;
          i < n.length && i < r.length;
          ++i
        ) {
          var o = $i(n[i], r[i]);
          if (o) return o;
        }
        return vi(n.length, r.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (t, e) {
        var n = t.fields || {},
          r = Object.keys(n),
          i = e.fields || {},
          o = Object.keys(i);
        r.sort(), o.sort();
        for (var s = 0; s < r.length && s < o.length; ++s) {
          var u = vi(r[s], o[s]);
          if (0 !== u) return u;
          var a = $i(n[r[s]], i[o[s]]);
          if (0 !== a) return a;
        }
        return vi(r.length, o.length);
      })(t.mapValue, e.mapValue);
    default:
      throw hi();
  }
}
function to(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length)
    return vi(t, e);
  var n = qi(t),
    r = qi(e),
    i = vi(n.seconds, r.seconds);
  return 0 !== i ? i : vi(n.nanos, r.nanos);
}
function eo(t) {
  return no(t);
}
function no(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
    ? "" + t.booleanValue
    : "integerValue" in t
    ? "" + t.integerValue
    : "doubleValue" in t
    ? "" + t.doubleValue
    : "timestampValue" in t
    ? ((e = t.timestampValue),
      "time(" + (n = qi(e)).seconds + "," + n.nanos + ")")
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Bi(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((i = t.referenceValue), Ri.ft(i).toString())
    : "geoPointValue" in t
    ? "geo(" + (r = t.geoPointValue).latitude + "," + r.longitude + ")"
    : "arrayValue" in t
    ? (function (t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++)
          n ? (n = !1) : (e += ","), (e += no(i[r]));
        return e + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (t) {
        for (
          var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort();
          r < i.length;
          r++
        ) {
          var o = i[r];
          n ? (n = !1) : (e += ","), (e += o + ":" + no(t.fields[o]));
        }
        return e + "}";
      })(t.mapValue)
    : hi();
  var e, n, r, i;
}
function ro(t, e) {
  return {
    referenceValue:
      "projects/" +
      t.projectId +
      "/databases/" +
      t.database +
      "/documents/" +
      e.path.rt(),
  };
}
function io(t) {
  return !!t && "integerValue" in t;
}
function oo(t) {
  return !!t && "arrayValue" in t;
}
function so(t) {
  return !!t && "nullValue" in t;
}
function uo(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function ao(t) {
  return !!t && "mapValue" in t;
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
 */ var co = (function () {
    function t(t) {
      this.proto = t;
    }
    return (
      (t.empty = function () {
        return new t({ mapValue: {} });
      }),
      (t.prototype.field = function (t) {
        if (t.et()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
          if (!e.mapValue.fields) return null;
          if (!ao((e = e.mapValue.fields[t.get(n)]))) return null;
        }
        return (e = (e.mapValue.fields || {})[t.tt()]) || null;
      }),
      (t.prototype.isEqual = function (t) {
        return Ji(this.proto, t.proto);
      }),
      t
    );
  })(),
  ho = (function () {
    function t(t) {
      void 0 === t && (t = co.empty()), (this.It = t), (this.At = new Map());
    }
    return (
      (t.prototype.set = function (t, e) {
        return this.Rt(t, e), this;
      }),
      (t.prototype.delete = function (t) {
        return this.Rt(t, null), this;
      }),
      (t.prototype.Rt = function (t, e) {
        for (var n = this.At, r = 0; r < t.length - 1; ++r) {
          var i = t.get(r),
            o = n.get(i);
          o instanceof Map
            ? (n = o)
            : o && 10 === Wi(o)
            ? ((o = new Map(Object.entries(o.mapValue.fields || {}))),
              n.set(i, o),
              (n = o))
            : ((o = new Map()), n.set(i, o), (n = o));
        }
        n.set(t.tt(), e);
      }),
      (t.prototype.Pt = function () {
        var t = this.yt(Li.ct(), this.At);
        return null != t ? new co(t) : this.It;
      }),
      (t.prototype.yt = function (t, e) {
        var n = this,
          r = !1,
          i = this.It.field(t),
          o = ao(i) ? Object.assign({}, i.mapValue.fields) : {};
        return (
          e.forEach(function (e, i) {
            if (e instanceof Map) {
              var s = n.yt(t.child(i), e);
              null != s && ((o[i] = s), (r = !0));
            } else null !== e ? ((o[i] = e), (r = !0)) : o.hasOwnProperty(i) && (delete o[i], (r = !0));
          }),
          r ? { mapValue: { fields: o } } : null
        );
      }),
      t
    );
  })();
function fo(t) {
  var e = [];
  return (
    Ui(t.fields || {}, function (t, n) {
      var r = new Li([t]);
      if (ao(n)) {
        var i = fo(n.mapValue).fields;
        if (0 === i.length) e.push(r);
        else
          for (var o = 0, s = i; o < s.length; o++) {
            var u = s[o];
            e.push(r.child(u));
          }
      } else e.push(r);
    }),
    new ji(e)
  );
}
var lo = function (t, e) {
    (this.key = t), (this.version = e);
  },
  po = (function (t) {
    function n(e, n, r, i) {
      var o = this;
      return (
        ((o = t.call(this, e, n) || this).gt = r),
        (o.Vt = !!i.Vt),
        (o.hasCommittedMutations = !!i.hasCommittedMutations),
        o
      );
    }
    return (
      e(n, t),
      (n.prototype.field = function (t) {
        return this.gt.field(t);
      }),
      (n.prototype.data = function () {
        return this.gt;
      }),
      (n.prototype.bt = function () {
        return this.gt.proto;
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          this.key.isEqual(t.key) &&
          this.version.isEqual(t.version) &&
          this.Vt === t.Vt &&
          this.hasCommittedMutations === t.hasCommittedMutations &&
          this.gt.isEqual(t.gt)
        );
      }),
      (n.prototype.toString = function () {
        return (
          "Document(" +
          this.key +
          ", " +
          this.version +
          ", " +
          this.gt.toString() +
          ", {hasLocalMutations: " +
          this.Vt +
          "}), {hasCommittedMutations: " +
          this.hasCommittedMutations +
          "})"
        );
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.Vt || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0,
      }),
      n
    );
  })(lo),
  vo = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this, e, n) || this).hasCommittedMutations = !(
          !r || !r.hasCommittedMutations
        )),
        i
      );
    }
    return (
      e(n, t),
      (n.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          t.hasCommittedMutations === this.hasCommittedMutations &&
          t.version.isEqual(this.version) &&
          t.key.isEqual(this.key)
        );
      }),
      n
    );
  })(lo),
  yo = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
      }),
      Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return !0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof n &&
          t.version.isEqual(this.version) &&
          t.key.isEqual(this.key)
        );
      }),
      n
    );
  })(lo),
  go = function (t, e, n, r, i, o, s) {
    void 0 === e && (e = null),
      void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === i && (i = null),
      void 0 === o && (o = null),
      void 0 === s && (s = null),
      (this.path = t),
      (this.collectionGroup = e),
      (this.orderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.startAt = o),
      (this.endAt = s),
      (this.vt = null);
  };
function mo(t, e, n, r, i, o, s) {
  return (
    void 0 === e && (e = null),
    void 0 === n && (n = []),
    void 0 === r && (r = []),
    void 0 === i && (i = null),
    void 0 === o && (o = null),
    void 0 === s && (s = null),
    new go(t, e, n, r, i, o, s)
  );
}
function bo(t) {
  var e = li(t);
  if (null === e.vt) {
    var n = e.path.rt();
    null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters
        .map(function (t) {
          return (e = t).field.rt() + e.op.toString() + eo(e.value);
          var e;
        })
        .join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map(function (t) {
          return (e = t).field.rt() + e.dir;
          var e;
        })
        .join(",")),
      Ki(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt && ((n += "|lb:"), (n += ko(e.startAt))),
      e.endAt && ((n += "|ub:"), (n += ko(e.endAt))),
      (e.vt = n);
  }
  return e.vt;
}
function wo(t, e) {
  if (t.limit !== e.limit) return !1;
  if (t.orderBy.length !== e.orderBy.length) return !1;
  for (var n = 0; n < t.orderBy.length; n++)
    if (!Lo(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (var r = 0; r < t.filters.length; r++)
    if (
      ((i = t.filters[r]),
      (o = e.filters[r]),
      i.op !== o.op || !i.field.isEqual(o.field) || !Ji(i.value, o.value))
    )
      return !1;
  var i, o;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Vo(t.startAt, e.startAt) &&
    Vo(t.endAt, e.endAt)
  );
}
function Eo(t) {
  return Ri.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
var _o = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this) || this).field = e), (i.op = n), (i.value = r), i
      );
    }
    return (
      e(n, t),
      (n.create = function (t, e, r) {
        return t.ut()
          ? "in" === e || "not-in" === e
            ? this.St(t, e, r)
            : new Io(t, e, r)
          : "array-contains" === e
          ? new So(t, r)
          : "in" === e
          ? new Do(t, r)
          : "not-in" === e
          ? new Oo(t, r)
          : "array-contains-any" === e
          ? new xo(t, r)
          : new n(t, e, r);
      }),
      (n.St = function (t, e, n) {
        return "in" === e ? new To(t, n) : new No(t, n);
      }),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return "!=" === this.op
          ? null !== e && this.Dt($i(e, this.value))
          : null !== e &&
              Wi(this.value) === Wi(e) &&
              this.Dt($i(e, this.value));
      }),
      (n.prototype.Dt = function (t) {
        switch (this.op) {
          case "<":
            return t < 0;
          case "<=":
            return t <= 0;
          case "==":
            return 0 === t;
          case "!=":
            return 0 !== t;
          case ">":
            return t > 0;
          case ">=":
            return t >= 0;
          default:
            return hi();
        }
      }),
      (n.prototype.Ct = function () {
        return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
      }),
      n
    );
  })(function () {}),
  Io = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this, e, n, r) || this).key = Ri.ft(r.referenceValue)), i
      );
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        var e = Ri.H(t.key, this.key);
        return this.Dt(e);
      }),
      n
    );
  })(_o),
  To = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, e, "in", n) || this).keys = Ao("in", n)), r;
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        return this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }),
      n
    );
  })(_o),
  No = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this, e, "not-in", n) || this).keys = Ao("not-in", n)), r
      );
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        return !this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }),
      n
    );
  })(_o);
function Ao(t, e) {
  var n;
  return (
    (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []
  ).map(function (t) {
    return Ri.ft(t.referenceValue);
  });
}
var So = (function (t) {
    function n(e, n) {
      return t.call(this, e, "array-contains", n) || this;
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return oo(e) && Zi(e.arrayValue, this.value);
      }),
      n
    );
  })(_o),
  Do = (function (t) {
    function n(e, n) {
      return t.call(this, e, "in", n) || this;
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return null !== e && Zi(this.value.arrayValue, e);
      }),
      n
    );
  })(_o),
  Oo = (function (t) {
    function n(e, n) {
      return t.call(this, e, "not-in", n) || this;
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        if (Zi(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
        var e = t.field(this.field);
        return null !== e && !Zi(this.value.arrayValue, e);
      }),
      n
    );
  })(_o),
  xo = (function (t) {
    function n(e, n) {
      return t.call(this, e, "array-contains-any", n) || this;
    }
    return (
      e(n, t),
      (n.prototype.matches = function (t) {
        var e = this,
          n = t.field(this.field);
        return (
          !(!oo(n) || !n.arrayValue.values) &&
          n.arrayValue.values.some(function (t) {
            return Zi(e.value.arrayValue, t);
          })
        );
      }),
      n
    );
  })(_o),
  Po = function (t, e) {
    (this.position = t), (this.before = e);
  };
function ko(t) {
  return (
    (t.before ? "b" : "a") +
    ":" +
    t.position
      .map(function (t) {
        return eo(t);
      })
      .join(",")
  );
}
var Co = function (t, e) {
  void 0 === e && (e = "asc"), (this.field = t), (this.dir = e);
};
function Lo(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
function Ro(t, e, n) {
  for (var r = 0, i = 0; i < t.position.length; i++) {
    var o = e[i],
      s = t.position[i];
    if (
      ((r = o.field.ut()
        ? Ri.H(Ri.ft(s.referenceValue), n.key)
        : $i(s, n.field(o.field))),
      "desc" === o.dir && (r *= -1),
      0 !== r)
    )
      break;
  }
  return t.before ? r <= 0 : r < 0;
}
function Vo(t, e) {
  if (null === t) return null === e;
  if (null === e) return !1;
  if (t.before !== e.before || t.position.length !== e.position.length)
    return !1;
  for (var n = 0; n < t.position.length; n++)
    if (!Ji(t.position[n], e.position[n])) return !1;
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
 */ var Uo = function (t, e, n, r, i, o, s, u) {
  void 0 === e && (e = null),
    void 0 === n && (n = []),
    void 0 === r && (r = []),
    void 0 === i && (i = null),
    void 0 === o && (o = "F"),
    void 0 === s && (s = null),
    void 0 === u && (u = null),
    (this.path = t),
    (this.collectionGroup = e),
    (this.xt = n),
    (this.filters = r),
    (this.limit = i),
    (this.limitType = o),
    (this.startAt = s),
    (this.endAt = u),
    (this.Nt = null),
    (this.$t = null),
    this.startAt,
    this.endAt;
};
function Mo(t, e, n, r, i, o, s, u) {
  return new Uo(t, e, n, r, i, o, s, u);
}
function jo(t) {
  return new Uo(t);
}
function Fo(t) {
  return !Ki(t.limit) && "F" === t.limitType;
}
function qo(t) {
  return !Ki(t.limit) && "L" === t.limitType;
}
function zo(t) {
  return t.xt.length > 0 ? t.xt[0].field : null;
}
function Bo(t) {
  for (var e = 0, n = t.filters; e < n.length; e++) {
    var r = n[e];
    if (r.Ct()) return r.field;
  }
  return null;
}
function Go(t) {
  return null !== t.collectionGroup;
}
function Ho(t) {
  var e = li(t);
  if (null === e.Nt) {
    e.Nt = [];
    var n = Bo(e),
      r = zo(e);
    if (null !== n && null === r)
      n.ut() || e.Nt.push(new Co(n)), e.Nt.push(new Co(Li.ht(), "asc"));
    else {
      for (var i = !1, o = 0, s = e.xt; o < s.length; o++) {
        var u = s[o];
        e.Nt.push(u), u.field.ut() && (i = !0);
      }
      if (!i) {
        var a = e.xt.length > 0 ? e.xt[e.xt.length - 1].dir : "asc";
        e.Nt.push(new Co(Li.ht(), a));
      }
    }
  }
  return e.Nt;
}
function Yo(t) {
  var e = li(t);
  if (!e.$t)
    if ("F" === e.limitType)
      e.$t = mo(
        e.path,
        e.collectionGroup,
        Ho(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      for (var n = [], r = 0, i = Ho(e); r < i.length; r++) {
        var o = i[r],
          s = "desc" === o.dir ? "asc" : "desc";
        n.push(new Co(o.field, s));
      }
      var u = e.endAt ? new Po(e.endAt.position, !e.endAt.before) : null,
        a = e.startAt ? new Po(e.startAt.position, !e.startAt.before) : null;
      e.$t = mo(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
    }
  return e.$t;
}
function Ko(t, e, n) {
  return new Uo(
    t.path,
    t.collectionGroup,
    t.xt.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function Qo(t, e) {
  return wo(Yo(t), Yo(e)) && t.limitType === e.limitType;
}
function Xo(t) {
  return bo(Yo(t)) + "|lt:" + t.limitType;
}
function Wo(t) {
  return (
    "Query(target=" +
    ((e = Yo(t)),
    (n = e.path.rt()),
    null !== e.collectionGroup &&
      (n += " collectionGroup=" + e.collectionGroup),
    e.filters.length > 0 &&
      (n +=
        ", filters: [" +
        e.filters
          .map(function (t) {
            return (e = t).field.rt() + " " + e.op + " " + eo(e.value);
            var e;
          })
          .join(", ") +
        "]"),
    Ki(e.limit) || (n += ", limit: " + e.limit),
    e.orderBy.length > 0 &&
      (n +=
        ", orderBy: [" +
        e.orderBy
          .map(function (t) {
            return (e = t).field.rt() + " (" + e.dir + ")";
            var e;
          })
          .join(", ") +
        "]"),
    e.startAt && (n += ", startAt: " + ko(e.startAt)),
    e.endAt && (n += ", endAt: " + ko(e.endAt)),
    "Target(" + n + "); limitType=") +
    t.limitType +
    ")"
  );
  var e, n;
}
function Jo(t, e) {
  return (
    (n = t),
    (i = (r = e).key.path),
    (null !== n.collectionGroup
      ? r.key.dt(n.collectionGroup) && n.path.nt(i)
      : Ri.wt(n.path)
      ? n.path.isEqual(i)
      : n.path.st(i)) &&
      (function (t, e) {
        for (var n = 0, r = t.xt; n < r.length; n++) {
          var i = r[n];
          if (!i.field.ut() && null === e.field(i.field)) return !1;
        }
        return !0;
      })(t, e) &&
      (function (t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++)
          if (!r[n].matches(e)) return !1;
        return !0;
      })(t, e) &&
      (function (t, e) {
        return !(
          (t.startAt && !Ro(t.startAt, Ho(t), e)) ||
          (t.endAt && Ro(t.endAt, Ho(t), e))
        );
      })(t, e)
  );
  var n, r, i;
}
function Zo(t) {
  return function (e, n) {
    for (var r = !1, i = 0, o = Ho(t); i < o.length; i++) {
      var s = o[i],
        u = $o(s, e, n);
      if (0 !== u) return u;
      r = r || s.field.ut();
    }
    return 0;
  };
}
function $o(t, e, n) {
  var r,
    i,
    o,
    s,
    u = t.field.ut()
      ? Ri.H(e.key, n.key)
      : ((r = t.field),
        (i = n),
        (o = e.field(r)),
        (s = i.field(r)),
        null !== o && null !== s ? $i(o, s) : hi());
  switch (t.dir) {
    case "asc":
      return u;
    case "desc":
      return -1 * u;
    default:
      return hi();
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
 */ var ts = (function () {
  function t(t, e, n, r, i, o, s) {
    void 0 === i && (i = xi.min()),
      void 0 === o && (o = xi.min()),
      void 0 === s && (s = mi.T),
      (this.target = t),
      (this.targetId = e),
      (this.Ft = n),
      (this.sequenceNumber = r),
      (this.Ot = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = s);
  }
  return (
    (t.prototype.kt = function (e) {
      return new t(
        this.target,
        this.targetId,
        this.Ft,
        e,
        this.Ot,
        this.lastLimboFreeSnapshotVersion,
        this.resumeToken
      );
    }),
    (t.prototype.Mt = function (e, n) {
      return new t(
        this.target,
        this.targetId,
        this.Ft,
        this.sequenceNumber,
        n,
        this.lastLimboFreeSnapshotVersion,
        e
      );
    }),
    (t.prototype.Lt = function (e) {
      return new t(
        this.target,
        this.targetId,
        this.Ft,
        this.sequenceNumber,
        this.Ot,
        e,
        this.resumeToken
      );
    }),
    t
  );
})();
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
 */ function es(t, e) {
  if (t.Bt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Qi(e) ? "-0" : e };
}
function ns(t) {
  return { integerValue: "" + t };
}
function rs(t, e) {
  return Xi(e) ? ns(e) : es(t, e);
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
 */ var is = function () {
  this.qt = void 0;
};
function os(t, e, n) {
  return t instanceof as
    ? ((i = e),
      (o = {
        fields: {
          __type__: { stringValue: "server_timestamp" },
          __local_write_time__: {
            timestampValue: { seconds: (r = n).seconds, nanos: r.nanoseconds },
          },
        },
      }),
      i && (o.fields.__previous_value__ = i),
      { mapValue: o })
    : t instanceof cs
    ? hs(t, e)
    : t instanceof fs
    ? ls(t, e)
    : (function (t, e) {
        var n = us(t, e),
          r = ds(n) + ds(t.Ut);
        return io(n) && io(t.Ut) ? ns(r) : es(t.Qt, r);
      })(t, e);
  var r, i, o;
}
function ss(t, e, n) {
  return t instanceof cs ? hs(t, e) : t instanceof fs ? ls(t, e) : n;
}
function us(t, e) {
  return t instanceof ps
    ? io((r = e)) || ((n = r) && "doubleValue" in n)
      ? e
      : { integerValue: 0 }
    : null;
  var n, r;
}
var as = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return e(n, t), n;
  })(is),
  cs = (function (t) {
    function n(e) {
      var n = this;
      return ((n = t.call(this) || this).elements = e), n;
    }
    return e(n, t), n;
  })(is);
function hs(t, e) {
  for (
    var n = vs(e),
      r = function (t) {
        n.some(function (e) {
          return Ji(e, t);
        }) || n.push(t);
      },
      i = 0,
      o = t.elements;
    i < o.length;
    i++
  )
    r(o[i]);
  return { arrayValue: { values: n } };
}
var fs = (function (t) {
  function n(e) {
    var n = this;
    return ((n = t.call(this) || this).elements = e), n;
  }
  return e(n, t), n;
})(is);
function ls(t, e) {
  for (
    var n = vs(e),
      r = function (t) {
        n = n.filter(function (e) {
          return !Ji(e, t);
        });
      },
      i = 0,
      o = t.elements;
    i < o.length;
    i++
  )
    r(o[i]);
  return { arrayValue: { values: n } };
}
var ps = (function (t) {
  function n(e, n) {
    var r = this;
    return ((r = t.call(this) || this).Qt = e), (r.Ut = n), r;
  }
  return e(n, t), n;
})(is);
function ds(t) {
  return zi(t.integerValue || t.doubleValue);
}
function vs(t) {
  return oo(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
 */ var ys = function (t, e) {
    (this.field = t), (this.transform = e);
  },
  gs = function (t, e) {
    (this.version = t), (this.transformResults = e);
  },
  ms = (function () {
    function t(t, e) {
      (this.updateTime = t), (this.exists = e);
    }
    return (
      (t.Kt = function () {
        return new t();
      }),
      (t.exists = function (e) {
        return new t(void 0, e);
      }),
      (t.updateTime = function (e) {
        return new t(e);
      }),
      Object.defineProperty(t.prototype, "Wt", {
        get: function () {
          return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (t) {
        return (
          this.exists === t.exists &&
          (this.updateTime
            ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
            : !t.updateTime)
        );
      }),
      t
    );
  })();
function bs(t, e) {
  return void 0 !== t.updateTime
    ? e instanceof po && e.version.isEqual(t.updateTime)
    : void 0 === t.exists || t.exists === e instanceof po;
}
var ws = function () {};
function Es(t, e, n) {
  return t instanceof As
    ? (function (t, e, n) {
        var r = t.value;
        if (n.transformResults) {
          var i = Os(t.fieldTransforms, e, n.transformResults);
          r = Ps(t.fieldTransforms, r, i);
        }
        return new po(t.key, n.version, r, { hasCommittedMutations: !0 });
      })(t, e, n)
    : t instanceof Ss
    ? (function (t, e, n) {
        if (!bs(t.jt, e)) return new yo(t.key, n.version);
        var r = Ds(
          t,
          e,
          n.transformResults ? Os(t.fieldTransforms, e, n.transformResults) : []
        );
        return new po(t.key, n.version, r, { hasCommittedMutations: !0 });
      })(t, e, n)
    : ((r = n), new vo(t.key, r.version, { hasCommittedMutations: !0 }));
  var r;
}
function _s(t, e, n) {
  return t instanceof As
    ? (function (t, e, n) {
        if (!bs(t.jt, e)) return e;
        var r = t.value,
          i = xs(t.fieldTransforms, n, e);
        r = Ps(t.fieldTransforms, r, i);
        var o = Ns(e);
        return new po(t.key, o, r, { Vt: !0 });
      })(t, e, n)
    : t instanceof Ss
    ? (function (t, e, n) {
        if (!bs(t.jt, e)) return e;
        var r = Ns(e),
          i = Ds(t, e, xs(t.fieldTransforms, n, e));
        return new po(t.key, r, i, { Vt: !0 });
      })(t, e, n)
    : ((i = e), bs((r = t).jt, i) ? new vo(r.key, xi.min()) : i);
  var r, i;
}
function Is(t, e) {
  return (function (t, e) {
    for (var n = null, r = 0, i = t; r < i.length; r++) {
      var o = i[r],
        s = e instanceof po ? e.field(o.field) : void 0,
        u = us(o.transform, s || null);
      null != u &&
        (n = null == n ? new ho().set(o.field, u) : n.set(o.field, u));
    }
    return n ? n.Pt() : null;
  })(t.fieldTransforms, e);
}
function Ts(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.jt.isEqual(e.jt) &&
    ((n = t.fieldTransforms),
    (r = e.fieldTransforms),
    !!(
      (void 0 === n && void 0 === r) ||
      (n &&
        r &&
        yi(n, r, function (t, e) {
          return (
            (r = e),
            (n = t).field.isEqual(r.field) &&
              ((i = n.transform),
              (o = r.transform),
              (i instanceof cs && o instanceof cs) ||
              (i instanceof fs && o instanceof fs)
                ? yi(i.elements, o.elements, Ji)
                : i instanceof ps && o instanceof ps
                ? Ji(i.Ut, o.Ut)
                : i instanceof as && o instanceof as)
          );
          var n, r, i, o;
        }))
    )) &&
    (0 === t.type
      ? t.value.isEqual(e.value)
      : 1 !== t.type || (t.data.isEqual(e.data) && t.Gt.isEqual(e.Gt)))
  );
  var n, r;
}
function Ns(t) {
  return t instanceof po ? t.version : xi.min();
}
var As = (function (t) {
    function n(e, n, r, i) {
      void 0 === i && (i = []);
      var o = this;
      return (
        ((o = t.call(this) || this).key = e),
        (o.value = n),
        (o.jt = r),
        (o.fieldTransforms = i),
        (o.type = 0),
        o
      );
    }
    return e(n, t), n;
  })(ws),
  Ss = (function (t) {
    function n(e, n, r, i, o) {
      void 0 === o && (o = []);
      var s = this;
      return (
        ((s = t.call(this) || this).key = e),
        (s.data = n),
        (s.Gt = r),
        (s.jt = i),
        (s.fieldTransforms = o),
        (s.type = 1),
        s
      );
    }
    return e(n, t), n;
  })(ws);
function Ds(t, e, n) {
  var r, i, o, s;
  return (
    (i = t),
    (o = r = e instanceof po ? e.data() : co.empty()),
    (s = new ho(o)),
    i.Gt.fields.forEach(function (t) {
      if (!t.et()) {
        var e = i.data.field(t);
        null !== e ? s.set(t, e) : s.delete(t);
      }
    }),
    (r = s.Pt()),
    Ps(t.fieldTransforms, r, n)
  );
}
function Os(t, e, n) {
  var r = [];
  fi(t.length === n.length);
  for (var i = 0; i < n.length; i++) {
    var o = t[i],
      s = o.transform,
      u = null;
    e instanceof po && (u = e.field(o.field)), r.push(ss(s, u, n[i]));
  }
  return r;
}
function xs(t, e, n) {
  for (var r = [], i = 0, o = t; i < o.length; i++) {
    var s = o[i],
      u = s.transform,
      a = null;
    n instanceof po && (a = n.field(s.field)), r.push(os(u, a, e));
  }
  return r;
}
function Ps(t, e, n) {
  for (var r = new ho(e), i = 0; i < t.length; i++) {
    var o = t[i];
    r.set(o.field, n[i]);
  }
  return r.Pt();
}
var ks,
  Cs,
  Ls = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).key = e),
        (r.jt = n),
        (r.type = 2),
        (r.fieldTransforms = []),
        r
      );
    }
    return e(n, t), n;
  })(ws),
  Rs = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).key = e),
        (r.jt = n),
        (r.type = 3),
        (r.fieldTransforms = []),
        r
      );
    }
    return e(n, t), n;
  })(ws),
  Vs = function (t) {
    this.count = t;
  };
function Us(t) {
  switch (t) {
    case bi.OK:
      return hi();
    case bi.CANCELLED:
    case bi.UNKNOWN:
    case bi.DEADLINE_EXCEEDED:
    case bi.RESOURCE_EXHAUSTED:
    case bi.INTERNAL:
    case bi.UNAVAILABLE:
    case bi.UNAUTHENTICATED:
      return !1;
    case bi.INVALID_ARGUMENT:
    case bi.NOT_FOUND:
    case bi.ALREADY_EXISTS:
    case bi.PERMISSION_DENIED:
    case bi.FAILED_PRECONDITION:
    case bi.ABORTED:
    case bi.OUT_OF_RANGE:
    case bi.UNIMPLEMENTED:
    case bi.DATA_LOSS:
      return !0;
    default:
      return hi();
  }
}
function Ms(t) {
  if (void 0 === t) return ui("GRPC error has no .code"), bi.UNKNOWN;
  switch (t) {
    case ks.OK:
      return bi.OK;
    case ks.CANCELLED:
      return bi.CANCELLED;
    case ks.UNKNOWN:
      return bi.UNKNOWN;
    case ks.DEADLINE_EXCEEDED:
      return bi.DEADLINE_EXCEEDED;
    case ks.RESOURCE_EXHAUSTED:
      return bi.RESOURCE_EXHAUSTED;
    case ks.INTERNAL:
      return bi.INTERNAL;
    case ks.UNAVAILABLE:
      return bi.UNAVAILABLE;
    case ks.UNAUTHENTICATED:
      return bi.UNAUTHENTICATED;
    case ks.INVALID_ARGUMENT:
      return bi.INVALID_ARGUMENT;
    case ks.NOT_FOUND:
      return bi.NOT_FOUND;
    case ks.ALREADY_EXISTS:
      return bi.ALREADY_EXISTS;
    case ks.PERMISSION_DENIED:
      return bi.PERMISSION_DENIED;
    case ks.FAILED_PRECONDITION:
      return bi.FAILED_PRECONDITION;
    case ks.ABORTED:
      return bi.ABORTED;
    case ks.OUT_OF_RANGE:
      return bi.OUT_OF_RANGE;
    case ks.UNIMPLEMENTED:
      return bi.UNIMPLEMENTED;
    case ks.DATA_LOSS:
      return bi.DATA_LOSS;
    default:
      return hi();
  }
}
((Cs = ks || (ks = {}))[(Cs.OK = 0)] = "OK"),
  (Cs[(Cs.CANCELLED = 1)] = "CANCELLED"),
  (Cs[(Cs.UNKNOWN = 2)] = "UNKNOWN"),
  (Cs[(Cs.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (Cs[(Cs.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (Cs[(Cs.NOT_FOUND = 5)] = "NOT_FOUND"),
  (Cs[(Cs.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (Cs[(Cs.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (Cs[(Cs.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (Cs[(Cs.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (Cs[(Cs.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (Cs[(Cs.ABORTED = 10)] = "ABORTED"),
  (Cs[(Cs.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (Cs[(Cs.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (Cs[(Cs.INTERNAL = 13)] = "INTERNAL"),
  (Cs[(Cs.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (Cs[(Cs.DATA_LOSS = 15)] = "DATA_LOSS");
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
 */
var js = (function () {
    function t(t, e) {
      (this.H = t), (this.root = e || qs.EMPTY);
    }
    return (
      (t.prototype.zt = function (e, n) {
        return new t(
          this.H,
          this.root.zt(e, n, this.H).copy(null, null, qs.Ht, null, null)
        );
      }),
      (t.prototype.remove = function (e) {
        return new t(
          this.H,
          this.root.remove(e, this.H).copy(null, null, qs.Ht, null, null)
        );
      }),
      (t.prototype.get = function (t) {
        for (var e = this.root; !e.et(); ) {
          var n = this.H(t, e.key);
          if (0 === n) return e.value;
          n < 0 ? (e = e.left) : n > 0 && (e = e.right);
        }
        return null;
      }),
      (t.prototype.indexOf = function (t) {
        for (var e = 0, n = this.root; !n.et(); ) {
          var r = this.H(t, n.key);
          if (0 === r) return e + n.left.size;
          r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
        }
        return -1;
      }),
      (t.prototype.et = function () {
        return this.root.et();
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.root.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.Jt = function () {
        return this.root.Jt();
      }),
      (t.prototype.Yt = function () {
        return this.root.Yt();
      }),
      (t.prototype.Xt = function (t) {
        return this.root.Xt(t);
      }),
      (t.prototype.forEach = function (t) {
        this.Xt(function (e, n) {
          return t(e, n), !1;
        });
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.Xt(function (e, n) {
            return t.push(e + ":" + n), !1;
          }),
          "{" + t.join(", ") + "}"
        );
      }),
      (t.prototype.Zt = function (t) {
        return this.root.Zt(t);
      }),
      (t.prototype.te = function () {
        return new Fs(this.root, null, this.H, !1);
      }),
      (t.prototype.ee = function (t) {
        return new Fs(this.root, t, this.H, !1);
      }),
      (t.prototype.ne = function () {
        return new Fs(this.root, null, this.H, !0);
      }),
      (t.prototype.se = function (t) {
        return new Fs(this.root, t, this.H, !0);
      }),
      t
    );
  })(),
  Fs = (function () {
    function t(t, e, n, r) {
      (this.ie = r), (this.re = []);
      for (var i = 1; !t.et(); )
        if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
          t = this.ie ? t.left : t.right;
        else {
          if (0 === i) {
            this.re.push(t);
            break;
          }
          this.re.push(t), (t = this.ie ? t.right : t.left);
        }
    }
    return (
      (t.prototype.oe = function () {
        var t = this.re.pop(),
          e = { key: t.key, value: t.value };
        if (this.ie) for (t = t.left; !t.et(); ) this.re.push(t), (t = t.right);
        else for (t = t.right; !t.et(); ) this.re.push(t), (t = t.left);
        return e;
      }),
      (t.prototype.ce = function () {
        return this.re.length > 0;
      }),
      (t.prototype.ae = function () {
        if (0 === this.re.length) return null;
        var t = this.re[this.re.length - 1];
        return { key: t.key, value: t.value };
      }),
      t
    );
  })(),
  qs = (function () {
    function t(e, n, r, i, o) {
      (this.key = e),
        (this.value = n),
        (this.color = null != r ? r : t.RED),
        (this.left = null != i ? i : t.EMPTY),
        (this.right = null != o ? o : t.EMPTY),
        (this.size = this.left.size + 1 + this.right.size);
    }
    return (
      (t.prototype.copy = function (e, n, r, i, o) {
        return new t(
          null != e ? e : this.key,
          null != n ? n : this.value,
          null != r ? r : this.color,
          null != i ? i : this.left,
          null != o ? o : this.right
        );
      }),
      (t.prototype.et = function () {
        return !1;
      }),
      (t.prototype.Xt = function (t) {
        return this.left.Xt(t) || t(this.key, this.value) || this.right.Xt(t);
      }),
      (t.prototype.Zt = function (t) {
        return this.right.Zt(t) || t(this.key, this.value) || this.left.Zt(t);
      }),
      (t.prototype.min = function () {
        return this.left.et() ? this : this.left.min();
      }),
      (t.prototype.Jt = function () {
        return this.min().key;
      }),
      (t.prototype.Yt = function () {
        return this.right.et() ? this.key : this.right.Yt();
      }),
      (t.prototype.zt = function (t, e, n) {
        var r = this,
          i = n(t, r.key);
        return (r =
          i < 0
            ? r.copy(null, null, null, r.left.zt(t, e, n), null)
            : 0 === i
            ? r.copy(null, e, null, null, null)
            : r.copy(null, null, null, null, r.right.zt(t, e, n))).ue();
      }),
      (t.prototype.he = function () {
        if (this.left.et()) return t.EMPTY;
        var e = this;
        return (
          e.left.le() || e.left.left.le() || (e = e._e()),
          (e = e.copy(null, null, null, e.left.he(), null)).ue()
        );
      }),
      (t.prototype.remove = function (e, n) {
        var r,
          i = this;
        if (n(e, i.key) < 0)
          i.left.et() || i.left.le() || i.left.left.le() || (i = i._e()),
            (i = i.copy(null, null, null, i.left.remove(e, n), null));
        else {
          if (
            (i.left.le() && (i = i.fe()),
            i.right.et() || i.right.le() || i.right.left.le() || (i = i.de()),
            0 === n(e, i.key))
          ) {
            if (i.right.et()) return t.EMPTY;
            (r = i.right.min()),
              (i = i.copy(r.key, r.value, null, null, i.right.he()));
          }
          i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.ue();
      }),
      (t.prototype.le = function () {
        return this.color;
      }),
      (t.prototype.ue = function () {
        var t = this;
        return (
          t.right.le() && !t.left.le() && (t = t.we()),
          t.left.le() && t.left.left.le() && (t = t.fe()),
          t.left.le() && t.right.le() && (t = t.Ee()),
          t
        );
      }),
      (t.prototype._e = function () {
        var t = this.Ee();
        return (
          t.right.left.le() &&
            (t = (t = (t = t.copy(
              null,
              null,
              null,
              null,
              t.right.fe()
            )).we()).Ee()),
          t
        );
      }),
      (t.prototype.de = function () {
        var t = this.Ee();
        return t.left.left.le() && (t = (t = t.fe()).Ee()), t;
      }),
      (t.prototype.we = function () {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }),
      (t.prototype.fe = function () {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }),
      (t.prototype.Ee = function () {
        var t = this.left.copy(null, null, !this.left.color, null, null),
          e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
      }),
      (t.prototype.Te = function () {
        var t = this.Ie();
        return Math.pow(2, t) <= this.size + 1;
      }),
      (t.prototype.Ie = function () {
        if (this.le() && this.left.le()) throw hi();
        if (this.right.le()) throw hi();
        var t = this.left.Ie();
        if (t !== this.right.Ie()) throw hi();
        return t + (this.le() ? 0 : 1);
      }),
      t
    );
  })();
(qs.EMPTY = null),
  (qs.RED = !0),
  (qs.Ht = !1),
  (qs.EMPTY = new ((function () {
    function t() {
      this.size = 0;
    }
    return (
      Object.defineProperty(t.prototype, "key", {
        get: function () {
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "color", {
        get: function () {
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "left", {
        get: function () {
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "right", {
        get: function () {
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.copy = function (t, e, n, r, i) {
        return this;
      }),
      (t.prototype.zt = function (t, e, n) {
        return new qs(t, e);
      }),
      (t.prototype.remove = function (t, e) {
        return this;
      }),
      (t.prototype.et = function () {
        return !0;
      }),
      (t.prototype.Xt = function (t) {
        return !1;
      }),
      (t.prototype.Zt = function (t) {
        return !1;
      }),
      (t.prototype.Jt = function () {
        return null;
      }),
      (t.prototype.Yt = function () {
        return null;
      }),
      (t.prototype.le = function () {
        return !1;
      }),
      (t.prototype.Te = function () {
        return !0;
      }),
      (t.prototype.Ie = function () {
        return 0;
      }),
      t
    );
  })())());
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
 */
var zs = (function () {
    function t(t) {
      (this.H = t), (this.data = new js(this.H));
    }
    return (
      (t.prototype.has = function (t) {
        return null !== this.data.get(t);
      }),
      (t.prototype.first = function () {
        return this.data.Jt();
      }),
      (t.prototype.last = function () {
        return this.data.Yt();
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.data.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.indexOf = function (t) {
        return this.data.indexOf(t);
      }),
      (t.prototype.forEach = function (t) {
        this.data.Xt(function (e, n) {
          return t(e), !1;
        });
      }),
      (t.prototype.me = function (t, e) {
        for (var n = this.data.ee(t[0]); n.ce(); ) {
          var r = n.oe();
          if (this.H(r.key, t[1]) >= 0) return;
          e(r.key);
        }
      }),
      (t.prototype.Ae = function (t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ee(e) : this.data.te(); n.ce(); )
          if (!t(n.oe().key)) return;
      }),
      (t.prototype.Re = function (t) {
        var e = this.data.ee(t);
        return e.ce() ? e.oe().key : null;
      }),
      (t.prototype.te = function () {
        return new Bs(this.data.te());
      }),
      (t.prototype.ee = function (t) {
        return new Bs(this.data.ee(t));
      }),
      (t.prototype.add = function (t) {
        return this.copy(this.data.remove(t).zt(t, !0));
      }),
      (t.prototype.delete = function (t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
      }),
      (t.prototype.et = function () {
        return this.data.et();
      }),
      (t.prototype.Pe = function (t) {
        var e = this;
        return (
          e.size < t.size && ((e = t), (t = this)),
          t.forEach(function (t) {
            e = e.add(t);
          }),
          e
        );
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.te(), r = e.data.te(); n.ce(); ) {
          var i = n.oe().key,
            o = r.oe().key;
          if (0 !== this.H(i, o)) return !1;
        }
        return !0;
      }),
      (t.prototype.it = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e);
          }),
          t
        );
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            return t.push(e);
          }),
          "SortedSet(" + t.toString() + ")"
        );
      }),
      (t.prototype.copy = function (e) {
        var n = new t(this.H);
        return (n.data = e), n;
      }),
      t
    );
  })(),
  Bs = (function () {
    function t(t) {
      this.ye = t;
    }
    return (
      (t.prototype.oe = function () {
        return this.ye.oe().key;
      }),
      (t.prototype.ce = function () {
        return this.ye.ce();
      }),
      t
    );
  })(),
  Gs = new js(Ri.H);
function Hs() {
  return Gs;
}
function Ys() {
  return Hs();
}
var Ks = new js(Ri.H);
function Qs() {
  return Ks;
}
var Xs = new js(Ri.H);
var Ws = new zs(Ri.H);
function Js() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var n = Ws, r = 0, i = t; r < i.length; r++) {
    var o = i[r];
    n = n.add(o);
  }
  return n;
}
var Zs = new zs(vi);
function $s() {
  return Zs;
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
 */ var tu = (function () {
    function t(t) {
      (this.H = t
        ? function (e, n) {
            return t(e, n) || Ri.H(e.key, n.key);
          }
        : function (t, e) {
            return Ri.H(t.key, e.key);
          }),
        (this.ge = Qs()),
        (this.Ve = new js(this.H));
    }
    return (
      (t.pe = function (e) {
        return new t(e.H);
      }),
      (t.prototype.has = function (t) {
        return null != this.ge.get(t);
      }),
      (t.prototype.get = function (t) {
        return this.ge.get(t);
      }),
      (t.prototype.first = function () {
        return this.Ve.Jt();
      }),
      (t.prototype.last = function () {
        return this.Ve.Yt();
      }),
      (t.prototype.et = function () {
        return this.Ve.et();
      }),
      (t.prototype.indexOf = function (t) {
        var e = this.ge.get(t);
        return e ? this.Ve.indexOf(e) : -1;
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.Ve.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.forEach = function (t) {
        this.Ve.Xt(function (e, n) {
          return t(e), !1;
        });
      }),
      (t.prototype.add = function (t) {
        var e = this.delete(t.key);
        return e.copy(e.ge.zt(t.key, t), e.Ve.zt(t, null));
      }),
      (t.prototype.delete = function (t) {
        var e = this.get(t);
        return e ? this.copy(this.ge.remove(t), this.Ve.remove(e)) : this;
      }),
      (t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Ve.te(), r = e.Ve.te(); n.ce(); ) {
          var i = n.oe().key,
            o = r.oe().key;
          if (!i.isEqual(o)) return !1;
        }
        return !0;
      }),
      (t.prototype.toString = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e.toString());
          }),
          0 === t.length
            ? "DocumentSet ()"
            : "DocumentSet (\n  " + t.join("  \n") + "\n)"
        );
      }),
      (t.prototype.copy = function (e, n) {
        var r = new t();
        return (r.H = this.H), (r.ge = e), (r.Ve = n), r;
      }),
      t
    );
  })(),
  eu = (function () {
    function t() {
      this.be = new js(Ri.H);
    }
    return (
      (t.prototype.track = function (t) {
        var e = t.doc.key,
          n = this.be.get(e);
        n
          ? 0 !== t.type && 3 === n.type
            ? (this.be = this.be.zt(e, t))
            : 3 === t.type && 1 !== n.type
            ? (this.be = this.be.zt(e, { type: n.type, doc: t.doc }))
            : 2 === t.type && 2 === n.type
            ? (this.be = this.be.zt(e, { type: 2, doc: t.doc }))
            : 2 === t.type && 0 === n.type
            ? (this.be = this.be.zt(e, { type: 0, doc: t.doc }))
            : 1 === t.type && 0 === n.type
            ? (this.be = this.be.remove(e))
            : 1 === t.type && 2 === n.type
            ? (this.be = this.be.zt(e, { type: 1, doc: n.doc }))
            : 0 === t.type && 1 === n.type
            ? (this.be = this.be.zt(e, { type: 2, doc: t.doc }))
            : hi()
          : (this.be = this.be.zt(e, t));
      }),
      (t.prototype.ve = function () {
        var t = [];
        return (
          this.be.Xt(function (e, n) {
            t.push(n);
          }),
          t
        );
      }),
      t
    );
  })(),
  nu = (function () {
    function t(t, e, n, r, i, o, s, u) {
      (this.query = t),
        (this.docs = e),
        (this.Se = n),
        (this.docChanges = r),
        (this.De = i),
        (this.fromCache = o),
        (this.Ce = s),
        (this.xe = u);
    }
    return (
      (t.Ne = function (e, n, r, i) {
        var o = [];
        return (
          n.forEach(function (t) {
            o.push({ type: 0, doc: t });
          }),
          new t(e, n, tu.pe(n), o, r, i, !0, !1)
        );
      }),
      Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function () {
          return !this.De.et();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (t) {
        if (
          !(
            this.fromCache === t.fromCache &&
            this.Ce === t.Ce &&
            this.De.isEqual(t.De) &&
            Qo(this.query, t.query) &&
            this.docs.isEqual(t.docs) &&
            this.Se.isEqual(t.Se)
          )
        )
          return !1;
        var e = this.docChanges,
          n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
      }),
      t
    );
  })(),
  ru = (function () {
    function t(t, e, n, r, i) {
      (this.Ot = t), (this.$e = e), (this.Fe = n), (this.Oe = r), (this.ke = i);
    }
    return (
      (t.Me = function (e, n) {
        var r = new Map();
        return r.set(e, iu.Le(e, n)), new t(xi.min(), r, $s(), Hs(), Js());
      }),
      t
    );
  })(),
  iu = (function () {
    function t(t, e, n, r, i) {
      (this.resumeToken = t),
        (this.Be = e),
        (this.qe = n),
        (this.Ue = r),
        (this.Qe = i);
    }
    return (
      (t.Le = function (e, n) {
        return new t(mi.T, n, Js(), Js(), Js());
      }),
      t
    );
  })(),
  ou = function (t, e, n, r) {
    (this.Ke = t), (this.removedTargetIds = e), (this.key = n), (this.We = r);
  },
  su = function (t, e) {
    (this.targetId = t), (this.je = e);
  },
  uu = function (t, e, n, r) {
    void 0 === n && (n = mi.T),
      void 0 === r && (r = null),
      (this.state = t),
      (this.targetIds = e),
      (this.resumeToken = n),
      (this.cause = r);
  },
  au = (function () {
    function t() {
      (this.Ge = 0),
        (this.ze = fu()),
        (this.He = mi.T),
        (this.Je = !1),
        (this.Ye = !0);
    }
    return (
      Object.defineProperty(t.prototype, "Be", {
        get: function () {
          return this.Je;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "resumeToken", {
        get: function () {
          return this.He;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "Xe", {
        get: function () {
          return 0 !== this.Ge;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "Ze", {
        get: function () {
          return this.Ye;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.tn = function (t) {
        t.l() > 0 && ((this.Ye = !0), (this.He = t));
      }),
      (t.prototype.en = function () {
        var t = Js(),
          e = Js(),
          n = Js();
        return (
          this.ze.forEach(function (r, i) {
            switch (i) {
              case 0:
                t = t.add(r);
                break;
              case 2:
                e = e.add(r);
                break;
              case 1:
                n = n.add(r);
                break;
              default:
                hi();
            }
          }),
          new iu(this.He, this.Je, t, e, n)
        );
      }),
      (t.prototype.nn = function () {
        (this.Ye = !1), (this.ze = fu());
      }),
      (t.prototype.sn = function (t, e) {
        (this.Ye = !0), (this.ze = this.ze.zt(t, e));
      }),
      (t.prototype.rn = function (t) {
        (this.Ye = !0), (this.ze = this.ze.remove(t));
      }),
      (t.prototype.on = function () {
        this.Ge += 1;
      }),
      (t.prototype.cn = function () {
        this.Ge -= 1;
      }),
      (t.prototype.an = function () {
        (this.Ye = !0), (this.Je = !0);
      }),
      t
    );
  })(),
  cu = (function () {
    function t(t) {
      (this.un = t),
        (this.hn = new Map()),
        (this.ln = Hs()),
        (this._n = hu()),
        (this.fn = new zs(vi));
    }
    return (
      (t.prototype.dn = function (t) {
        for (var e = 0, n = t.Ke; e < n.length; e++) {
          var r = n[e];
          t.We instanceof po
            ? this.wn(r, t.We)
            : t.We instanceof vo && this.En(r, t.key, t.We);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
          (r = o[i]), this.En(r, t.key, t.We);
      }),
      (t.prototype.Tn = function (t) {
        var e = this;
        this.In(t, function (n) {
          var r = e.mn(n);
          switch (t.state) {
            case 0:
              e.An(n) && r.tn(t.resumeToken);
              break;
            case 1:
              r.cn(), r.Xe || r.nn(), r.tn(t.resumeToken);
              break;
            case 2:
              r.cn(), r.Xe || e.removeTarget(n);
              break;
            case 3:
              e.An(n) && (r.an(), r.tn(t.resumeToken));
              break;
            case 4:
              e.An(n) && (e.Rn(n), r.tn(t.resumeToken));
              break;
            default:
              hi();
          }
        });
      }),
      (t.prototype.In = function (t, e) {
        var n = this;
        t.targetIds.length > 0
          ? t.targetIds.forEach(e)
          : this.hn.forEach(function (t, r) {
              n.An(r) && e(r);
            });
      }),
      (t.prototype.Pn = function (t) {
        var e = t.targetId,
          n = t.je.count,
          r = this.yn(e);
        if (r) {
          var i = r.target;
          if (Eo(i))
            if (0 === n) {
              var o = new Ri(i.path);
              this.En(e, o, new vo(o, xi.min()));
            } else fi(1 === n);
          else this.gn(e) !== n && (this.Rn(e), (this.fn = this.fn.add(e)));
        }
      }),
      (t.prototype.Vn = function (t) {
        var e = this,
          n = new Map();
        this.hn.forEach(function (r, i) {
          var o = e.yn(i);
          if (o) {
            if (r.Be && Eo(o.target)) {
              var s = new Ri(o.target.path);
              null !== e.ln.get(s) || e.pn(i, s) || e.En(i, s, new vo(s, t));
            }
            r.Ze && (n.set(i, r.en()), r.nn());
          }
        });
        var r = Js();
        this._n.forEach(function (t, n) {
          var i = !0;
          n.Ae(function (t) {
            var n = e.yn(t);
            return !n || 2 === n.Ft || ((i = !1), !1);
          }),
            i && (r = r.add(t));
        });
        var i = new ru(t, n, this.fn, this.ln, r);
        return (this.ln = Hs()), (this._n = hu()), (this.fn = new zs(vi)), i;
      }),
      (t.prototype.wn = function (t, e) {
        if (this.An(t)) {
          var n = this.pn(t, e.key) ? 2 : 0;
          this.mn(t).sn(e.key, n),
            (this.ln = this.ln.zt(e.key, e)),
            (this._n = this._n.zt(e.key, this.bn(e.key).add(t)));
        }
      }),
      (t.prototype.En = function (t, e, n) {
        if (this.An(t)) {
          var r = this.mn(t);
          this.pn(t, e) ? r.sn(e, 1) : r.rn(e),
            (this._n = this._n.zt(e, this.bn(e).delete(t))),
            n && (this.ln = this.ln.zt(e, n));
        }
      }),
      (t.prototype.removeTarget = function (t) {
        this.hn.delete(t);
      }),
      (t.prototype.gn = function (t) {
        var e = this.mn(t).en();
        return this.un.vn(t).size + e.qe.size - e.Qe.size;
      }),
      (t.prototype.on = function (t) {
        this.mn(t).on();
      }),
      (t.prototype.mn = function (t) {
        var e = this.hn.get(t);
        return e || ((e = new au()), this.hn.set(t, e)), e;
      }),
      (t.prototype.bn = function (t) {
        var e = this._n.get(t);
        return e || ((e = new zs(vi)), (this._n = this._n.zt(t, e))), e;
      }),
      (t.prototype.An = function (t) {
        var e = null !== this.yn(t);
        return (
          e || si("WatchChangeAggregator", "Detected inactive target", t), e
        );
      }),
      (t.prototype.yn = function (t) {
        var e = this.hn.get(t);
        return e && e.Xe ? null : this.un.Sn(t);
      }),
      (t.prototype.Rn = function (t) {
        var e = this;
        this.hn.set(t, new au()),
          this.un.vn(t).forEach(function (n) {
            e.En(t, n, null);
          });
      }),
      (t.prototype.pn = function (t, e) {
        return this.un.vn(t).has(e);
      }),
      t
    );
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
 */ function hu() {
  return new js(Ri.H);
}
function fu() {
  return new js(Ri.H);
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
 */ var lu = { asc: "ASCENDING", desc: "DESCENDING" },
  pu = {
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
  du = function (t, e) {
    (this.t = t), (this.Bt = e);
  };
function vu(t, e) {
  return t.Bt
    ? new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "") +
        "." +
        ("000000000" + e.nanoseconds).slice(-9) +
        "Z"
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function yu(t, e) {
  return t.Bt ? e.toBase64() : e.toUint8Array();
}
function gu(t, e) {
  return vu(t, e.j());
}
function mu(t) {
  return fi(!!t), xi.K(((e = qi(t)), new Oi(e.seconds, e.nanos)));
  var e;
}
function bu(t, e) {
  return ((n = t), new ki(["projects", n.projectId, "databases", n.database]))
    .child("documents")
    .child(e)
    .rt();
  var n;
}
function wu(t) {
  var e = ki.ot(t);
  return fi(Bu(e)), e;
}
function Eu(t, e) {
  return bu(t.t, e.path);
}
function _u(t, e) {
  var n = wu(e);
  if (n.get(1) !== t.t.projectId)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.t.projectId
    );
  if (n.get(3) !== t.t.database)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.t.database
    );
  return new Ri(Au(n));
}
function Iu(t, e) {
  return bu(t.t, e);
}
function Tu(t) {
  var e = wu(t);
  return 4 === e.length ? ki.ct() : Au(e);
}
function Nu(t) {
  return new ki(["projects", t.t.projectId, "databases", t.t.database]).rt();
}
function Au(t) {
  return fi(t.length > 4 && "documents" === t.get(4)), t.Y(5);
}
function Su(t, e, n) {
  return { name: Eu(t, e), fields: n.proto.mapValue.fields };
}
function Du(t, e) {
  var n, r, i;
  if (e instanceof As) n = { update: Su(t, e.key, e.value) };
  else if (e instanceof Ls) n = { delete: Eu(t, e.key) };
  else if (e instanceof Ss)
    n = { update: Su(t, e.key, e.data), updateMask: zu(e.Gt) };
  else {
    if (!(e instanceof Rs)) return hi();
    n = { verify: Eu(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map(function (t) {
        return (function (t, e) {
          var n = e.transform;
          if (n instanceof as)
            return {
              fieldPath: e.field.rt(),
              setToServerValue: "REQUEST_TIME",
            };
          if (n instanceof cs)
            return {
              fieldPath: e.field.rt(),
              appendMissingElements: { values: n.elements },
            };
          if (n instanceof fs)
            return {
              fieldPath: e.field.rt(),
              removeAllFromArray: { values: n.elements },
            };
          if (n instanceof ps)
            return { fieldPath: e.field.rt(), increment: n.Ut };
          throw hi();
        })(0, t);
      })),
    e.jt.Wt ||
      (n.currentDocument =
        ((r = t),
        void 0 !== (i = e.jt).updateTime
          ? { updateTime: gu(r, i.updateTime) }
          : void 0 !== i.exists
          ? { exists: i.exists }
          : hi())),
    n
  );
}
function Ou(t, e) {
  var n,
    r = e.currentDocument
      ? void 0 !== (n = e.currentDocument).updateTime
        ? ms.updateTime(mu(n.updateTime))
        : void 0 !== n.exists
        ? ms.exists(n.exists)
        : ms.Kt()
      : ms.Kt(),
    i = e.updateTransforms
      ? e.updateTransforms.map(function (e) {
          return (function (t, e) {
            var n = null;
            if ("setToServerValue" in e)
              fi("REQUEST_TIME" === e.setToServerValue), (n = new as());
            else if ("appendMissingElements" in e) {
              var r = e.appendMissingElements.values || [];
              n = new cs(r);
            } else if ("removeAllFromArray" in e) {
              var i = e.removeAllFromArray.values || [];
              n = new fs(i);
            } else "increment" in e ? (n = new ps(t, e.increment)) : hi();
            var o = Li.lt(e.fieldPath);
            return new ys(o, n);
          })(t, e);
        })
      : [];
  if (e.update) {
    e.update.name;
    var o = _u(t, e.update.name),
      s = new co({ mapValue: { fields: e.update.fields } });
    if (e.updateMask) {
      var u = (function (t) {
        var e = t.fieldPaths || [];
        return new ji(
          e.map(function (t) {
            return Li.lt(t);
          })
        );
      })(e.updateMask);
      return new Ss(o, s, u, r, i);
    }
    return new As(o, s, r, i);
  }
  if (e.delete) {
    var a = _u(t, e.delete);
    return new Ls(a, r);
  }
  if (e.verify) {
    var c = _u(t, e.verify);
    return new Rs(c, r);
  }
  return hi();
}
function xu(t, e) {
  return { documents: [Iu(t, e.path)] };
}
function Pu(t, e) {
  var n = { structuredQuery: {} },
    r = e.path;
  null !== e.collectionGroup
    ? ((n.parent = Iu(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = Iu(t, r.X())),
      (n.structuredQuery.from = [{ collectionId: r.tt() }]));
  var i = (function (t) {
    if (0 !== t.length) {
      var e = t.map(function (t) {
        return (function (t) {
          if ("==" === t.op) {
            if (uo(t.value))
              return { unaryFilter: { field: Mu(t.field), op: "IS_NAN" } };
            if (so(t.value))
              return { unaryFilter: { field: Mu(t.field), op: "IS_NULL" } };
          } else if ("!=" === t.op) {
            if (uo(t.value))
              return { unaryFilter: { field: Mu(t.field), op: "IS_NOT_NAN" } };
            if (so(t.value))
              return { unaryFilter: { field: Mu(t.field), op: "IS_NOT_NULL" } };
          }
          return {
            fieldFilter: { field: Mu(t.field), op: Uu(t.op), value: t.value },
          };
        })(t);
      });
      return 1 === e.length
        ? e[0]
        : { compositeFilter: { op: "AND", filters: e } };
    }
  })(e.filters);
  i && (n.structuredQuery.where = i);
  var o = (function (t) {
    if (0 !== t.length)
      return t.map(function (t) {
        return { field: Mu((e = t).field), direction: Vu(e.dir) };
        var e;
      });
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  var s,
    u,
    a = ((s = t), (u = e.limit), s.Bt || Ki(u) ? u : { value: u });
  return (
    null !== a && (n.structuredQuery.limit = a),
    e.startAt && (n.structuredQuery.startAt = Lu(e.startAt)),
    e.endAt && (n.structuredQuery.endAt = Lu(e.endAt)),
    n
  );
}
function ku(t) {
  var e = Tu(t.parent),
    n = t.structuredQuery,
    r = n.from ? n.from.length : 0,
    i = null;
  if (r > 0) {
    fi(1 === r);
    var o = n.from[0];
    o.allDescendants ? (i = o.collectionId) : (e = e.child(o.collectionId));
  }
  var s = [];
  n.where && (s = Cu(n.where));
  var u = [];
  n.orderBy &&
    (u = n.orderBy.map(function (t) {
      return new Co(
        ju((e = t).field),
        (function (t) {
          switch (t) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        })(e.direction)
      );
      var e;
    }));
  var a,
    c,
    h = null;
  n.limit &&
    ((a = n.limit),
    (h = Ki((c = "object" == typeof a ? a.value : a)) ? null : c));
  var f = null;
  n.startAt && (f = Ru(n.startAt));
  var l = null;
  return n.endAt && (l = Ru(n.endAt)), Mo(e, i, u, s, h, "F", f, l);
}
function Cu(t) {
  return t
    ? void 0 !== t.unaryFilter
      ? [qu(t)]
      : void 0 !== t.fieldFilter
      ? [Fu(t)]
      : void 0 !== t.compositeFilter
      ? t.compositeFilter.filters
          .map(function (t) {
            return Cu(t);
          })
          .reduce(function (t, e) {
            return t.concat(e);
          })
      : hi()
    : [];
}
function Lu(t) {
  return { before: t.before, values: t.position };
}
function Ru(t) {
  var e = !!t.before,
    n = t.values || [];
  return new Po(n, e);
}
function Vu(t) {
  return lu[t];
}
function Uu(t) {
  return pu[t];
}
function Mu(t) {
  return { fieldPath: t.rt() };
}
function ju(t) {
  return Li.lt(t.fieldPath);
}
function Fu(t) {
  return _o.create(
    ju(t.fieldFilter.field),
    (function (t) {
      switch (t) {
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
        case "OPERATOR_UNSPECIFIED":
        default:
          return hi();
      }
    })(t.fieldFilter.op),
    t.fieldFilter.value
  );
}
function qu(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = ju(t.unaryFilter.field);
      return _o.create(e, "==", { doubleValue: NaN });
    case "IS_NULL":
      var n = ju(t.unaryFilter.field);
      return _o.create(n, "==", { nullValue: "NULL_VALUE" });
    case "IS_NOT_NAN":
      var r = ju(t.unaryFilter.field);
      return _o.create(r, "!=", { doubleValue: NaN });
    case "IS_NOT_NULL":
      var i = ju(t.unaryFilter.field);
      return _o.create(i, "!=", { nullValue: "NULL_VALUE" });
    case "OPERATOR_UNSPECIFIED":
    default:
      return hi();
  }
}
function zu(t) {
  var e = [];
  return (
    t.fields.forEach(function (t) {
      return e.push(t.rt());
    }),
    { fieldPaths: e }
  );
}
function Bu(t) {
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
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
 */ var Gu = function () {
    var t = this;
    this.promise = new Promise(function (e, n) {
      (t.resolve = e), (t.reject = n);
    });
  },
  Hu = (function () {
    function t(t) {
      var e = this;
      (this.Dn = null),
        (this.Cn = null),
        (this.result = void 0),
        (this.error = void 0),
        (this.xn = !1),
        (this.Nn = !1),
        t(
          function (t) {
            (e.xn = !0), (e.result = t), e.Dn && e.Dn(t);
          },
          function (t) {
            (e.xn = !0), (e.error = t), e.Cn && e.Cn(t);
          }
        );
    }
    return (
      (t.prototype.catch = function (t) {
        return this.next(void 0, t);
      }),
      (t.prototype.next = function (e, n) {
        var r = this;
        return (
          this.Nn && hi(),
          (this.Nn = !0),
          this.xn
            ? this.error
              ? this.$n(n, this.error)
              : this.Fn(e, this.result)
            : new t(function (t, i) {
                (r.Dn = function (n) {
                  r.Fn(e, n).next(t, i);
                }),
                  (r.Cn = function (e) {
                    r.$n(n, e).next(t, i);
                  });
              })
        );
      }),
      (t.prototype.On = function () {
        var t = this;
        return new Promise(function (e, n) {
          t.next(e, n);
        });
      }),
      (t.prototype.kn = function (e) {
        try {
          var n = e();
          return n instanceof t ? n : t.resolve(n);
        } catch (r) {
          return t.reject(r);
        }
      }),
      (t.prototype.Fn = function (e, n) {
        return e
          ? this.kn(function () {
              return e(n);
            })
          : t.resolve(n);
      }),
      (t.prototype.$n = function (e, n) {
        return e
          ? this.kn(function () {
              return e(n);
            })
          : t.reject(n);
      }),
      (t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }),
      (t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }),
      (t.Mn = function (e) {
        return new t(function (t, n) {
          var r = 0,
            i = 0,
            o = !1;
          e.forEach(function (e) {
            ++r,
              e.next(
                function () {
                  ++i, o && i === r && t();
                },
                function (t) {
                  return n(t);
                }
              );
          }),
            (o = !0),
            i === r && t();
        });
      }),
      (t.Ln = function (e) {
        for (
          var n = t.resolve(!1),
            r = function (e) {
              n = n.next(function (n) {
                return n ? t.resolve(n) : e();
              });
            },
            i = 0,
            o = e;
          i < o.length;
          i++
        )
          r(o[i]);
        return n;
      }),
      (t.forEach = function (t, e) {
        var n = this,
          r = [];
        return (
          t.forEach(function (t, i) {
            r.push(e.call(n, t, i));
          }),
          this.Mn(r)
        );
      }),
      t
    );
  })(),
  Yu = (function () {
    function t(t, e) {
      var n = this;
      (this.action = t),
        (this.transaction = e),
        (this.aborted = !1),
        (this.Bn = new Gu()),
        (this.transaction.oncomplete = function () {
          n.Bn.resolve();
        }),
        (this.transaction.onabort = function () {
          e.error ? n.Bn.reject(new Xu(t, e.error)) : n.Bn.resolve();
        }),
        (this.transaction.onerror = function (e) {
          var r = ta(e.target.error);
          n.Bn.reject(new Xu(t, r));
        });
    }
    return (
      (t.open = function (e, n, r, i) {
        try {
          return new t(n, e.transaction(i, r));
        } catch (o) {
          throw new Xu(n, o);
        }
      }),
      Object.defineProperty(t.prototype, "qn", {
        get: function () {
          return this.Bn.promise;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.abort = function (t) {
        t && this.Bn.reject(t),
          this.aborted ||
            (si(
              "SimpleDb",
              "Aborting transaction:",
              t ? t.message : "Client-initiated abort"
            ),
            (this.aborted = !0),
            this.transaction.abort());
      }),
      (t.prototype.store = function (t) {
        var e = this.transaction.objectStore(t);
        return new Ju(e);
      }),
      t
    );
  })(),
  Ku = (function () {
    function t(e, n, r) {
      (this.name = e),
        (this.version = n),
        (this.Un = r),
        12.2 === t.Qn(h()) &&
          ui(
            "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
          );
    }
    return (
      (t.delete = function (t) {
        return (
          si("SimpleDb", "Removing database:", t),
          Zu(window.indexedDB.deleteDatabase(t)).On()
        );
      }),
      (t.Kn = function () {
        if ("undefined" == typeof indexedDB) return !1;
        if (t.Wn()) return !0;
        var e = h(),
          n = t.Qn(e),
          r = 0 < n && n < 10,
          i = t.jn(e),
          o = 0 < i && i < 4.5;
        return !(
          e.indexOf("MSIE ") > 0 ||
          e.indexOf("Trident/") > 0 ||
          e.indexOf("Edge/") > 0 ||
          r ||
          o
        );
      }),
      (t.Wn = function () {
        var t;
        return (
          "undefined" != typeof process &&
          "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Gn)
        );
      }),
      (t.zn = function (t, e) {
        return t.store(e);
      }),
      (t.Qn = function (t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
          n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
      }),
      (t.jn = function (t) {
        var e = t.match(/Android ([\d.]+)/i),
          n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
      }),
      (t.prototype.Hn = function (t) {
        return r(this, void 0, void 0, function () {
          var e,
            n = this;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return this.db
                  ? [3, 2]
                  : (si("SimpleDb", "Opening database:", this.name),
                    (e = this),
                    [
                      4,
                      new Promise(function (e, r) {
                        var i = indexedDB.open(n.name, n.version);
                        (i.onsuccess = function (t) {
                          var n = t.target.result;
                          e(n);
                        }),
                          (i.onblocked = function () {
                            r(
                              new Xu(
                                t,
                                "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                              )
                            );
                          }),
                          (i.onerror = function (e) {
                            var n = e.target.error;
                            "VersionError" === n.name
                              ? r(
                                  new wi(
                                    bi.FAILED_PRECONDITION,
                                    "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                                  )
                                )
                              : r(new Xu(t, n));
                          }),
                          (i.onupgradeneeded = function (t) {
                            si(
                              "SimpleDb",
                              'Database "' +
                                n.name +
                                '" requires upgrade from version:',
                              t.oldVersion
                            );
                            var e = t.target.result;
                            n.Un.Jn(
                              e,
                              i.transaction,
                              t.oldVersion,
                              n.version
                            ).next(function () {
                              si(
                                "SimpleDb",
                                "Database upgrade to version " +
                                  n.version +
                                  " complete"
                              );
                            });
                          });
                      }),
                    ]);
              case 1:
                (e.db = r.sent()), (r.label = 2);
              case 2:
                return [
                  2,
                  (this.Yn &&
                    (this.db.onversionchange = function (t) {
                      return n.Yn(t);
                    }),
                  this.db),
                ];
            }
          });
        });
      }),
      (t.prototype.Xn = function (t) {
        (this.Yn = t),
          this.db &&
            (this.db.onversionchange = function (e) {
              return t(e);
            });
      }),
      (t.prototype.runTransaction = function (t, e, n, o) {
        return r(this, void 0, void 0, function () {
          var r, s, u, a, c;
          return i(this, function (h) {
            switch (h.label) {
              case 0:
                (r = "readonly" === e),
                  (s = 0),
                  (u = function () {
                    var e, u, c, h, f;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          ++s, (i.label = 1);
                        case 1:
                          return i.trys.push([1, 4, , 5]), [4, a.Hn(t)];
                        case 2:
                          return (
                            (a.db = i.sent()),
                            (e = Yu.open(
                              a.db,
                              t,
                              r ? "readonly" : "readwrite",
                              n
                            )),
                            (u = o(e)
                              .catch(function (t) {
                                return e.abort(t), Hu.reject(t);
                              })
                              .On()),
                            (c = {}),
                            u.catch(function () {}),
                            [4, e.qn]
                          );
                        case 3:
                          return [2, ((c.value = (i.sent(), u)), c)];
                        case 4:
                          return (
                            (h = i.sent()),
                            (f = "FirebaseError" !== h.name && s < 3),
                            si(
                              "SimpleDb",
                              "Transaction failed with error:",
                              h.message,
                              "Retrying:",
                              f
                            ),
                            a.close(),
                            f ? [3, 5] : [2, { value: Promise.reject(h) }]
                          );
                        case 5:
                          return [2];
                      }
                    });
                  }),
                  (a = this),
                  (h.label = 1);
              case 1:
                return [5, u()];
              case 2:
                if ("object" == typeof (c = h.sent())) return [2, c.value];
                h.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (t.prototype.close = function () {
        this.db && this.db.close(), (this.db = void 0);
      }),
      t
    );
  })(),
  Qu = (function () {
    function t(t) {
      (this.Zn = t), (this.ts = !1), (this.es = null);
    }
    return (
      Object.defineProperty(t.prototype, "xn", {
        get: function () {
          return this.ts;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "ns", {
        get: function () {
          return this.es;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "cursor", {
        set: function (t) {
          this.Zn = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.done = function () {
        this.ts = !0;
      }),
      (t.prototype.ss = function (t) {
        this.es = t;
      }),
      (t.prototype.delete = function () {
        return Zu(this.Zn.delete());
      }),
      t
    );
  })(),
  Xu = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r =
          t.call(
            this,
            bi.UNAVAILABLE,
            "IndexedDB transaction '" + e + "' failed: " + n
          ) || this).name = "IndexedDbTransactionError"),
        r
      );
    }
    return e(n, t), n;
  })(wi);
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
 */ function Wu(t) {
  return "IndexedDbTransactionError" === t.name;
}
var Ju = (function () {
  function t(t) {
    this.store = t;
  }
  return (
    (t.prototype.put = function (t, e) {
      var n;
      return (
        void 0 !== e
          ? (si("SimpleDb", "PUT", this.store.name, t, e),
            (n = this.store.put(e, t)))
          : (si("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
            (n = this.store.put(t))),
        Zu(n)
      );
    }),
    (t.prototype.add = function (t) {
      return (
        si("SimpleDb", "ADD", this.store.name, t, t), Zu(this.store.add(t))
      );
    }),
    (t.prototype.get = function (t) {
      var e = this;
      return Zu(this.store.get(t)).next(function (n) {
        return (
          void 0 === n && (n = null),
          si("SimpleDb", "GET", e.store.name, t, n),
          n
        );
      });
    }),
    (t.prototype.delete = function (t) {
      return (
        si("SimpleDb", "DELETE", this.store.name, t), Zu(this.store.delete(t))
      );
    }),
    (t.prototype.count = function () {
      return si("SimpleDb", "COUNT", this.store.name), Zu(this.store.count());
    }),
    (t.prototype.rs = function (t, e) {
      var n = this.cursor(this.options(t, e)),
        r = [];
      return this.os(n, function (t, e) {
        r.push(e);
      }).next(function () {
        return r;
      });
    }),
    (t.prototype.cs = function (t, e) {
      si("SimpleDb", "DELETE ALL", this.store.name);
      var n = this.options(t, e);
      n.us = !1;
      var r = this.cursor(n);
      return this.os(r, function (t, e, n) {
        return n.delete();
      });
    }),
    (t.prototype.hs = function (t, e) {
      var n;
      e ? (n = t) : ((n = {}), (e = t));
      var r = this.cursor(n);
      return this.os(r, e);
    }),
    (t.prototype.ls = function (t) {
      var e = this.cursor({});
      return new Hu(function (n, r) {
        (e.onerror = function (t) {
          var e = ta(t.target.error);
          r(e);
        }),
          (e.onsuccess = function (e) {
            var r = e.target.result;
            r
              ? t(r.primaryKey, r.value).next(function (t) {
                  t ? r.continue() : n();
                })
              : n();
          });
      });
    }),
    (t.prototype.os = function (t, e) {
      var n = [];
      return new Hu(function (r, i) {
        (t.onerror = function (t) {
          i(t.target.error);
        }),
          (t.onsuccess = function (t) {
            var i = t.target.result;
            if (i) {
              var o = new Qu(i),
                s = e(i.primaryKey, i.value, o);
              if (s instanceof Hu) {
                var u = s.catch(function (t) {
                  return o.done(), Hu.reject(t);
                });
                n.push(u);
              }
              o.xn ? r() : null === o.ns ? i.continue() : i.continue(o.ns);
            } else r();
          });
      }).next(function () {
        return Hu.Mn(n);
      });
    }),
    (t.prototype.options = function (t, e) {
      var n;
      return (
        void 0 !== t && ("string" == typeof t ? (n = t) : (e = t)),
        { index: n, range: e }
      );
    }),
    (t.prototype.cursor = function (t) {
      var e = "next";
      if ((t.reverse && (e = "prev"), t.index)) {
        var n = this.store.index(t.index);
        return t.us ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
      }
      return this.store.openCursor(t.range, e);
    }),
    t
  );
})();
function Zu(t) {
  return new Hu(function (e, n) {
    (t.onsuccess = function (t) {
      var n = t.target.result;
      e(n);
    }),
      (t.onerror = function (t) {
        var e = ta(t.target.error);
        n(e);
      });
  });
}
var $u = !1;
function ta(t) {
  var e = Ku.Qn(h());
  if (e >= 12.2 && e < 13) {
    var n = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n) >= 0) {
      var r = new wi(
        "internal",
        "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
          n +
          "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
      );
      return (
        $u ||
          (($u = !0),
          setTimeout(function () {
            throw r;
          }, 0)),
        r
      );
    }
  }
  return t;
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
 */ var ea = (function () {
  function t(t, e, n, r, i) {
    (this._s = t),
      (this.fs = e),
      (this.ds = n),
      (this.op = r),
      (this.ws = i),
      (this.Es = new Gu()),
      (this.then = this.Es.promise.then.bind(this.Es.promise)),
      this.Es.promise.catch(function (t) {});
  }
  return (
    (t.Ts = function (e, n, r, i, o) {
      var s = new t(e, n, Date.now() + r, i, o);
      return s.start(r), s;
    }),
    (t.prototype.start = function (t) {
      var e = this;
      this.Is = setTimeout(function () {
        return e.As();
      }, t);
    }),
    (t.prototype.Rs = function () {
      return this.As();
    }),
    (t.prototype.cancel = function (t) {
      null !== this.Is &&
        (this.clearTimeout(),
        this.Es.reject(
          new wi(bi.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
        ));
    }),
    (t.prototype.As = function () {
      var t = this;
      this._s.Ps(function () {
        return null !== t.Is
          ? (t.clearTimeout(),
            t.op().then(function (e) {
              return t.Es.resolve(e);
            }))
          : Promise.resolve();
      });
    }),
    (t.prototype.clearTimeout = function () {
      null !== this.Is &&
        (this.ws(this), clearTimeout(this.Is), (this.Is = null));
    }),
    t
  );
})();
function na(t, e) {
  if ((ui("AsyncQueue", e + ": " + t), Wu(t)))
    return new wi(bi.UNAVAILABLE, e + ": " + t);
  throw t;
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
 */ var ra =
    "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
  ia = (function () {
    function t() {
      this.ys = [];
    }
    return (
      (t.prototype.gs = function (t) {
        this.ys.push(t);
      }),
      (t.prototype.Vs = function () {
        this.ys.forEach(function (t) {
          return t();
        });
      }),
      t
    );
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
 */ function oa(t) {
  for (var e = "", n = 0; n < t.length; n++)
    e.length > 0 && (e = ua(e)), (e = sa(t.get(n), e));
  return ua(e);
}
function sa(t, e) {
  for (var n = e, r = t.length, i = 0; i < r; i++) {
    var o = t.charAt(i);
    switch (o) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += o;
    }
  }
  return n;
}
function ua(t) {
  return t + "";
}
function aa(t) {
  var e = t.length;
  if ((fi(e >= 2), 2 === e))
    return fi("" === t.charAt(0) && "" === t.charAt(1)), ki.ct();
  for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
    var s = t.indexOf("", o);
    switch (((s < 0 || s > n) && hi(), t.charAt(s + 1))) {
      case "":
        var u = t.substring(o, s),
          a = void 0;
        0 === i.length ? (a = u) : ((a = i += u), (i = "")), r.push(a);
        break;
      case "":
        (i += t.substring(o, s)), (i += "\0");
        break;
      case "":
        i += t.substring(o, s + 1);
        break;
      default:
        hi();
    }
    o = s + 2;
  }
  return new ki(r);
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
 */ var ca = function (t, e) {
    (this.seconds = t), (this.nanoseconds = e);
  },
  ha = function (t, e, n) {
    (this.ownerId = t),
      (this.allowTabSynchronization = e),
      (this.leaseTimestampMs = n);
  };
(ha.store = "owner"), (ha.key = "owner");
var fa = function (t, e, n) {
  (this.userId = t),
    (this.lastAcknowledgedBatchId = e),
    (this.lastStreamToken = n);
};
(fa.store = "mutationQueues"), (fa.keyPath = "userId");
var la = function (t, e, n, r, i) {
  (this.userId = t),
    (this.batchId = e),
    (this.localWriteTimeMs = n),
    (this.baseMutations = r),
    (this.mutations = i);
};
(la.store = "mutations"),
  (la.keyPath = "batchId"),
  (la.userMutationsIndex = "userMutationsIndex"),
  (la.userMutationsKeyPath = ["userId", "batchId"]);
var pa = (function () {
  function t() {}
  return (
    (t.prefixForUser = function (t) {
      return [t];
    }),
    (t.prefixForPath = function (t, e) {
      return [t, oa(e)];
    }),
    (t.key = function (t, e, n) {
      return [t, oa(e), n];
    }),
    t
  );
})();
(pa.store = "documentMutations"), (pa.PLACEHOLDER = new pa());
var da = function (t, e) {
    (this.path = t), (this.readTime = e);
  },
  va = function (t, e) {
    (this.path = t), (this.version = e);
  },
  ya = function (t, e, n, r, i, o) {
    (this.unknownDocument = t),
      (this.noDocument = e),
      (this.document = n),
      (this.hasCommittedMutations = r),
      (this.readTime = i),
      (this.parentPath = o);
  };
(ya.store = "remoteDocuments"),
  (ya.readTimeIndex = "readTimeIndex"),
  (ya.readTimeIndexPath = "readTime"),
  (ya.collectionReadTimeIndex = "collectionReadTimeIndex"),
  (ya.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
var ga = function (t) {
  this.byteSize = t;
};
(ga.store = "remoteDocumentGlobal"), (ga.key = "remoteDocumentGlobalKey");
var ma = function (t, e, n, r, i, o, s) {
  (this.targetId = t),
    (this.canonicalId = e),
    (this.readTime = n),
    (this.resumeToken = r),
    (this.lastListenSequenceNumber = i),
    (this.lastLimboFreeSnapshotVersion = o),
    (this.query = s);
};
(ma.store = "targets"),
  (ma.keyPath = "targetId"),
  (ma.queryTargetsIndexName = "queryTargetsIndex"),
  (ma.queryTargetsKeyPath = ["canonicalId", "targetId"]);
var ba = function (t, e, n) {
  (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
};
(ba.store = "targetDocuments"),
  (ba.keyPath = ["targetId", "path"]),
  (ba.documentTargetsIndex = "documentTargetsIndex"),
  (ba.documentTargetsKeyPath = ["path", "targetId"]);
var wa = function (t, e, n, r) {
  (this.highestTargetId = t),
    (this.highestListenSequenceNumber = e),
    (this.lastRemoteSnapshotVersion = n),
    (this.targetCount = r);
};
(wa.key = "targetGlobalKey"), (wa.store = "targetGlobal");
var Ea = function (t, e) {
  (this.collectionId = t), (this.parent = e);
};
(Ea.store = "collectionParents"), (Ea.keyPath = ["collectionId", "parent"]);
var _a = function (t, e, n, r) {
  (this.clientId = t),
    (this.updateTimeMs = e),
    (this.networkEnabled = n),
    (this.inForeground = r);
};
(_a.store = "clientMetadata"), (_a.keyPath = "clientId");
var Ia = function (t, e, n) {
  (this.bundleId = t), (this.createTime = e), (this.version = n);
};
(Ia.store = "bundles"), (Ia.keyPath = "bundleId");
var Ta = function (t, e, n) {
  (this.name = t), (this.readTime = e), (this.bundledQuery = n);
};
(Ta.store = "namedQueries"), (Ta.keyPath = "name");
var Na = u(
    u(
      u(
        u(
          [
            fa.store,
            la.store,
            pa.store,
            ya.store,
            ma.store,
            ha.store,
            wa.store,
            ba.store,
          ],
          [_a.store]
        ),
        [ga.store]
      ),
      [Ea.store]
    ),
    [Ia.store, Ta.store]
  ),
  Aa = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this) || this).ps = e), (r.bs = n), r;
    }
    return e(n, t), n;
  })(ia);
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
 */ function Sa(t, e) {
  var n = li(t);
  return Ku.zn(n.ps, e);
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
 */ var Da = (function () {
    function t(t, e, n, r) {
      (this.batchId = t),
        (this.vs = e),
        (this.baseMutations = n),
        (this.mutations = r);
    }
    return (
      (t.prototype.Ss = function (t, e, n) {
        for (var r = n.Ds, i = 0; i < this.mutations.length; i++) {
          var o = this.mutations[i];
          o.key.isEqual(t) && (e = Es(o, e, r[i]));
        }
        return e;
      }),
      (t.prototype.Cs = function (t, e) {
        for (var n = 0, r = this.baseMutations; n < r.length; n++)
          (s = r[n]).key.isEqual(t) && (e = _s(s, e, this.vs));
        for (var i = 0, o = this.mutations; i < o.length; i++) {
          var s;
          (s = o[i]).key.isEqual(t) && (e = _s(s, e, this.vs));
        }
        return e;
      }),
      (t.prototype.xs = function (t) {
        var e = this,
          n = t;
        return (
          this.mutations.forEach(function (r) {
            var i = e.Cs(r.key, t.get(r.key));
            i && (n = n.zt(r.key, i));
          }),
          n
        );
      }),
      (t.prototype.keys = function () {
        return this.mutations.reduce(function (t, e) {
          return t.add(e.key);
        }, Js());
      }),
      (t.prototype.isEqual = function (t) {
        return (
          this.batchId === t.batchId &&
          yi(this.mutations, t.mutations, function (t, e) {
            return Ts(t, e);
          }) &&
          yi(this.baseMutations, t.baseMutations, function (t, e) {
            return Ts(t, e);
          })
        );
      }),
      t
    );
  })(),
  Oa = (function () {
    function t(t, e, n, r) {
      (this.batch = t), (this.Ns = e), (this.Ds = n), (this.$s = r);
    }
    return (
      (t.from = function (e, n, r) {
        fi(e.mutations.length === r.length);
        for (var i = Xs, o = e.mutations, s = 0; s < o.length; s++)
          i = i.zt(o[s].key, r[s].version);
        return new t(e, n, r, i);
      }),
      t
    );
  })(),
  xa = function (t) {
    this.Fs = t;
  };
function Pa(t, e) {
  if (e.document)
    return (function (t, e, n) {
      var r = _u(t, e.name),
        i = mu(e.updateTime),
        o = new co({ mapValue: { fields: e.fields } });
      return new po(r, i, o, { hasCommittedMutations: !!n });
    })(t.Fs, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) {
    var n = Ri.Et(e.noDocument.path),
      r = Va(e.noDocument.readTime);
    return new vo(n, r, { hasCommittedMutations: !!e.hasCommittedMutations });
  }
  if (e.unknownDocument) {
    var i = Ri.Et(e.unknownDocument.path);
    return (r = Va(e.unknownDocument.version)), new yo(i, r);
  }
  return hi();
}
function ka(t, e, n) {
  var r,
    i,
    o = Ca(n),
    s = e.key.path.X().it();
  if (e instanceof po) {
    var u = {
        name: Eu((r = t.Fs), (i = e).key),
        fields: i.bt().mapValue.fields,
        updateTime: vu(r, i.version.j()),
      },
      a = e.hasCommittedMutations;
    return new ya(null, null, u, a, o, s);
  }
  if (e instanceof vo) {
    var c = e.key.path.it(),
      h = Ra(e.version);
    return (
      (a = e.hasCommittedMutations), new ya(null, new da(c, h), null, a, o, s)
    );
  }
  if (e instanceof yo) {
    var f = e.key.path.it(),
      l = Ra(e.version);
    return new ya(new va(f, l), null, null, !0, o, s);
  }
  return hi();
}
function Ca(t) {
  var e = t.j();
  return [e.seconds, e.nanoseconds];
}
function La(t) {
  var e = new Oi(t[0], t[1]);
  return xi.K(e);
}
function Ra(t) {
  var e = t.j();
  return new ca(e.seconds, e.nanoseconds);
}
function Va(t) {
  var e = new Oi(t.seconds, t.nanoseconds);
  return xi.K(e);
}
function Ua(t, e) {
  for (
    var n = (e.baseMutations || []).map(function (e) {
        return Ou(t.Fs, e);
      }),
      r = 0;
    r < e.mutations.length - 1;
    ++r
  ) {
    var i = e.mutations[r];
    if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
      var o = e.mutations[r + 1];
      (i.updateTransforms = o.transform.fieldTransforms),
        e.mutations.splice(r + 1, 1),
        ++r;
    }
  }
  var s = e.mutations.map(function (e) {
      return Ou(t.Fs, e);
    }),
    u = Oi.fromMillis(e.localWriteTimeMs);
  return new Da(e.batchId, u, n, s);
}
function Ma(t) {
  var e,
    n,
    r = Va(t.readTime),
    i =
      void 0 !== t.lastLimboFreeSnapshotVersion
        ? Va(t.lastLimboFreeSnapshotVersion)
        : xi.min();
  return (
    void 0 !== t.query.documents
      ? (fi(1 === (n = t.query).documents.length),
        (e = Yo(jo(Tu(n.documents[0])))))
      : (e = Yo(ku(t.query))),
    new ts(
      e,
      t.targetId,
      0,
      t.lastListenSequenceNumber,
      r,
      i,
      mi.fromBase64String(t.resumeToken)
    )
  );
}
function ja(t, e) {
  var n,
    r = Ra(e.Ot),
    i = Ra(e.lastLimboFreeSnapshotVersion);
  n = Eo(e.target) ? xu(t.Fs, e.target) : Pu(t.Fs, e.target);
  var o = e.resumeToken.toBase64();
  return new ma(e.targetId, bo(e.target), r, o, e.sequenceNumber, i, n);
}
function Fa(t) {
  var e = ku({ parent: t.parent, structuredQuery: t.structuredQuery });
  return "LAST" === t.limitType ? Ko(e, e.limit, "L") : e;
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
 */ var qa = (function () {
  function t() {}
  return (
    (t.prototype.Os = function (t, e) {
      return za(t)
        .get(e)
        .next(function (t) {
          if (t)
            return {
              id: (e = t).bundleId,
              createTime: Va(e.createTime),
              version: e.version,
            };
          var e;
        });
    }),
    (t.prototype.ks = function (t, e) {
      return za(t).put({
        bundleId: (n = e).id,
        createTime: Ra(mu(n.createTime)),
        version: n.version,
      });
      var n;
    }),
    (t.prototype.Ms = function (t, e) {
      return Ba(t)
        .get(e)
        .next(function (t) {
          if (t)
            return {
              name: (e = t).name,
              query: Fa(e.bundledQuery),
              readTime: Va(e.readTime),
            };
          var e;
        });
    }),
    (t.prototype.Ls = function (t, e) {
      return Ba(t).put({
        name: (n = e).name,
        readTime: Ra(mu(n.readTime)),
        bundledQuery: n.bundledQuery,
      });
      var n;
    }),
    t
  );
})();
function za(t) {
  return Sa(t, Ia.store);
}
function Ba(t) {
  return Sa(t, Ta.store);
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
 */ var Ga = (function () {
    function t() {
      this.Bs = new Ha();
    }
    return (
      (t.prototype.qs = function (t, e) {
        return this.Bs.add(e), Hu.resolve();
      }),
      (t.prototype.Us = function (t, e) {
        return Hu.resolve(this.Bs.getEntries(e));
      }),
      t
    );
  })(),
  Ha = (function () {
    function t() {
      this.index = {};
    }
    return (
      (t.prototype.add = function (t) {
        var e = t.tt(),
          n = t.X(),
          r = this.index[e] || new zs(ki.H),
          i = !r.has(n);
        return (this.index[e] = r.add(n)), i;
      }),
      (t.prototype.has = function (t) {
        var e = t.tt(),
          n = t.X(),
          r = this.index[e];
        return r && r.has(n);
      }),
      (t.prototype.getEntries = function (t) {
        return (this.index[t] || new zs(ki.H)).it();
      }),
      t
    );
  })(),
  Ya = (function () {
    function t() {
      this.Qs = new Ha();
    }
    return (
      (t.prototype.qs = function (t, e) {
        var n = this;
        if (!this.Qs.has(e)) {
          var r = e.tt(),
            i = e.X();
          t.gs(function () {
            n.Qs.add(e);
          });
          var o = { collectionId: r, parent: oa(i) };
          return Ka(t).put(o);
        }
        return Hu.resolve();
      }),
      (t.prototype.Us = function (t, e) {
        var n = [],
          r = IDBKeyRange.bound([e, ""], [gi(e), ""], !1, !0);
        return Ka(t)
          .rs(r)
          .next(function (t) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (o.collectionId !== e) break;
              n.push(aa(o.parent));
            }
            return n;
          });
      }),
      t
    );
  })();
function Ka(t) {
  return Sa(t, Ea.store);
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
 */ var Qa = { Ks: !1, Ws: 0, js: 0, Gs: 0 },
  Xa = (function () {
    function t(t, e, n) {
      (this.zs = t), (this.Hs = e), (this.Js = n);
    }
    return (
      (t.Ys = function (e) {
        return new t(e, t.Xs, t.Zs);
      }),
      t
    );
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
 */ function Wa(t) {
  return r(this, void 0, void 0, function () {
    return i(this, function (e) {
      if (t.code !== bi.FAILED_PRECONDITION || t.message !== ra) throw t;
      return si("LocalStore", "Unexpectedly lost primary lease"), [2];
    });
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
 */ (Xa.Xs = 10),
  (Xa.Zs = 1e3),
  (Xa.ti = new Xa(41943040, Xa.Xs, Xa.Zs)),
  (Xa.ei = new Xa(-1, 0, 0));
var Ja = (function () {
    function t(t, e) {
      (this.ni = t), (this.si = e), (this.ii = {});
    }
    return (
      (t.prototype.get = function (t) {
        var e = this.ni(t),
          n = this.ii[e];
        if (void 0 !== n)
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              s = o[0],
              u = o[1];
            if (this.si(s, t)) return u;
          }
      }),
      (t.prototype.has = function (t) {
        return void 0 !== this.get(t);
      }),
      (t.prototype.set = function (t, e) {
        var n = this.ni(t),
          r = this.ii[n];
        if (void 0 !== r) {
          for (var i = 0; i < r.length; i++)
            if (this.si(r[i][0], t)) return void (r[i] = [t, e]);
          r.push([t, e]);
        } else this.ii[n] = [[t, e]];
      }),
      (t.prototype.delete = function (t) {
        var e = this.ni(t),
          n = this.ii[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++)
          if (this.si(n[r][0], t))
            return 1 === n.length ? delete this.ii[e] : n.splice(r, 1), !0;
        return !1;
      }),
      (t.prototype.forEach = function (t) {
        Ui(this.ii, function (e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              s = o[0],
              u = o[1];
            t(s, u);
          }
        });
      }),
      (t.prototype.et = function () {
        return Mi(this.ii);
      }),
      t
    );
  })(),
  Za = (function () {
    function t() {
      (this.ri = new Ja(
        function (t) {
          return t.toString();
        },
        function (t, e) {
          return t.isEqual(e);
        }
      )),
        (this.oi = !1);
    }
    return (
      (t.prototype.ci = function (t) {
        var e = this.ri.get(t);
        return e ? e.readTime : xi.min();
      }),
      (t.prototype.ai = function (t, e) {
        this.ui(), this.ri.set(t.key, { hi: t, readTime: e });
      }),
      (t.prototype.li = function (t, e) {
        void 0 === e && (e = null),
          this.ui(),
          this.ri.set(t, { hi: null, readTime: e });
      }),
      (t.prototype._i = function (t, e) {
        this.ui();
        var n = this.ri.get(e);
        return void 0 !== n ? Hu.resolve(n.hi) : this.fi(t, e);
      }),
      (t.prototype.getEntries = function (t, e) {
        return this.di(t, e);
      }),
      (t.prototype.apply = function (t) {
        return this.ui(), (this.oi = !0), this.wi(t);
      }),
      (t.prototype.ui = function () {}),
      t
    );
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
 */
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
 */ function $a(t, e, n) {
  var r = t.store(la.store),
    i = t.store(pa.store),
    o = [],
    s = IDBKeyRange.only(n.batchId),
    u = 0,
    a = r.hs({ range: s }, function (t, e, n) {
      return u++, n.delete();
    });
  o.push(
    a.next(function () {
      fi(1 === u);
    })
  );
  for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
    var l = f[h],
      p = pa.key(e, l.key.path, n.batchId);
    o.push(i.delete(p)), c.push(l.key);
  }
  return Hu.Mn(o).next(function () {
    return c;
  });
}
function tc(t) {
  var e;
  if (t.document) e = t.document;
  else if (t.unknownDocument) e = t.unknownDocument;
  else {
    if (!t.noDocument) throw hi();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
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
 */ var ec = (function () {
  function t(t, e, n, r) {
    (this.userId = t),
      (this.Qt = e),
      (this.Ei = n),
      (this.Ti = r),
      (this.Ii = {});
  }
  return (
    (t.mi = function (e, n, r, i) {
      return fi("" !== e.uid), new t(e.m() ? e.uid : "", n, r, i);
    }),
    (t.prototype.Ai = function (t) {
      var e = !0,
        n = IDBKeyRange.bound(
          [this.userId, Number.NEGATIVE_INFINITY],
          [this.userId, Number.POSITIVE_INFINITY]
        );
      return rc(t)
        .hs({ index: la.userMutationsIndex, range: n }, function (t, n, r) {
          (e = !1), r.done();
        })
        .next(function () {
          return e;
        });
    }),
    (t.prototype.Ri = function (t, e, n, r) {
      var i = this,
        o = ic(t),
        s = rc(t);
      return s.add({}).next(function (u) {
        fi("number" == typeof u);
        for (
          var a = new Da(u, e, n, r),
            c = (function (t, e, n) {
              var r = n.baseMutations.map(function (e) {
                  return Du(t.Fs, e);
                }),
                i = n.mutations.map(function (e) {
                  return Du(t.Fs, e);
                });
              return new la(e, n.batchId, n.vs.toMillis(), r, i);
            })(i.Qt, i.userId, a),
            h = [],
            f = new zs(function (t, e) {
              return vi(t.rt(), e.rt());
            }),
            l = 0,
            p = r;
          l < p.length;
          l++
        ) {
          var d = p[l],
            v = pa.key(i.userId, d.key.path, u);
          (f = f.add(d.key.path.X())),
            h.push(s.put(c)),
            h.push(o.put(v, pa.PLACEHOLDER));
        }
        return (
          f.forEach(function (e) {
            h.push(i.Ei.qs(t, e));
          }),
          t.gs(function () {
            i.Ii[u] = a.keys();
          }),
          Hu.Mn(h).next(function () {
            return a;
          })
        );
      });
    }),
    (t.prototype.Pi = function (t, e) {
      var n = this;
      return rc(t)
        .get(e)
        .next(function (t) {
          return t ? (fi(t.userId === n.userId), Ua(n.Qt, t)) : null;
        });
    }),
    (t.prototype.yi = function (t, e) {
      var n = this;
      return this.Ii[e]
        ? Hu.resolve(this.Ii[e])
        : this.Pi(t, e).next(function (t) {
            if (t) {
              var r = t.keys();
              return (n.Ii[e] = r), r;
            }
            return null;
          });
    }),
    (t.prototype.gi = function (t, e) {
      var n = this,
        r = e + 1,
        i = IDBKeyRange.lowerBound([this.userId, r]),
        o = null;
      return rc(t)
        .hs({ index: la.userMutationsIndex, range: i }, function (t, e, i) {
          e.userId === n.userId && (fi(e.batchId >= r), (o = Ua(n.Qt, e))),
            i.done();
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.Vi = function (t) {
      var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
        n = -1;
      return rc(t)
        .hs(
          { index: la.userMutationsIndex, range: e, reverse: !0 },
          function (t, e, r) {
            (n = e.batchId), r.done();
          }
        )
        .next(function () {
          return n;
        });
    }),
    (t.prototype.pi = function (t) {
      var e = this,
        n = IDBKeyRange.bound(
          [this.userId, -1],
          [this.userId, Number.POSITIVE_INFINITY]
        );
      return rc(t)
        .rs(la.userMutationsIndex, n)
        .next(function (t) {
          return t.map(function (t) {
            return Ua(e.Qt, t);
          });
        });
    }),
    (t.prototype.bi = function (t, e) {
      var n = this,
        r = pa.prefixForPath(this.userId, e.path),
        i = IDBKeyRange.lowerBound(r),
        o = [];
      return ic(t)
        .hs({ range: i }, function (r, i, s) {
          var u = r[0],
            a = r[1],
            c = r[2],
            h = aa(a);
          if (u === n.userId && e.path.isEqual(h))
            return rc(t)
              .get(c)
              .next(function (t) {
                if (!t) throw hi();
                fi(t.userId === n.userId), o.push(Ua(n.Qt, t));
              });
          s.done();
        })
        .next(function () {
          return o;
        });
    }),
    (t.prototype.vi = function (t, e) {
      var n = this,
        r = new zs(vi),
        i = [];
      return (
        e.forEach(function (e) {
          var o = pa.prefixForPath(n.userId, e.path),
            s = IDBKeyRange.lowerBound(o),
            u = ic(t).hs({ range: s }, function (t, i, o) {
              var s = t[0],
                u = t[1],
                a = t[2],
                c = aa(u);
              s === n.userId && e.path.isEqual(c) ? (r = r.add(a)) : o.done();
            });
          i.push(u);
        }),
        Hu.Mn(i).next(function () {
          return n.Si(t, r);
        })
      );
    }),
    (t.prototype.Di = function (t, e) {
      var n = this,
        r = e.path,
        i = r.length + 1,
        o = pa.prefixForPath(this.userId, r),
        s = IDBKeyRange.lowerBound(o),
        u = new zs(vi);
      return ic(t)
        .hs({ range: s }, function (t, e, o) {
          var s = t[0],
            a = t[1],
            c = t[2],
            h = aa(a);
          s === n.userId && r.nt(h)
            ? h.length === i && (u = u.add(c))
            : o.done();
        })
        .next(function () {
          return n.Si(t, u);
        });
    }),
    (t.prototype.Si = function (t, e) {
      var n = this,
        r = [],
        i = [];
      return (
        e.forEach(function (e) {
          i.push(
            rc(t)
              .get(e)
              .next(function (t) {
                if (null === t) throw hi();
                fi(t.userId === n.userId), r.push(Ua(n.Qt, t));
              })
          );
        }),
        Hu.Mn(i).next(function () {
          return r;
        })
      );
    }),
    (t.prototype.Ci = function (t, e) {
      var n = this;
      return $a(t.ps, this.userId, e).next(function (r) {
        return (
          t.gs(function () {
            n.xi(e.batchId);
          }),
          Hu.forEach(r, function (e) {
            return n.Ti.Ni(t, e);
          })
        );
      });
    }),
    (t.prototype.xi = function (t) {
      delete this.Ii[t];
    }),
    (t.prototype.$i = function (t) {
      var e = this;
      return this.Ai(t).next(function (n) {
        if (!n) return Hu.resolve();
        var r = IDBKeyRange.lowerBound(pa.prefixForUser(e.userId)),
          i = [];
        return ic(t)
          .hs({ range: r }, function (t, n, r) {
            if (t[0] === e.userId) {
              var o = aa(t[1]);
              i.push(o);
            } else r.done();
          })
          .next(function () {
            fi(0 === i.length);
          });
      });
    }),
    (t.prototype.Fi = function (t, e) {
      return nc(t, this.userId, e);
    }),
    (t.prototype.Oi = function (t) {
      var e = this;
      return oc(t)
        .get(this.userId)
        .next(function (t) {
          return t || new fa(e.userId, -1, "");
        });
    }),
    t
  );
})();
function nc(t, e, n) {
  var r = pa.prefixForPath(e, n.path),
    i = r[1],
    o = IDBKeyRange.lowerBound(r),
    s = !1;
  return ic(t)
    .hs({ range: o, us: !0 }, function (t, n, r) {
      var o = t[0],
        u = t[1];
      t[2], o === e && u === i && (s = !0), r.done();
    })
    .next(function () {
      return s;
    });
}
function rc(t) {
  return Sa(t, la.store);
}
function ic(t) {
  return Sa(t, pa.store);
}
function oc(t) {
  return Sa(t, fa.store);
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
 */ var sc = (function () {
    function t(t) {
      this.ki = t;
    }
    return (
      (t.prototype.next = function () {
        return (this.ki += 2), this.ki;
      }),
      (t.Mi = function () {
        return new t(0);
      }),
      (t.Li = function () {
        return new t(-1);
      }),
      t
    );
  })(),
  uc = (function () {
    function t(t, e) {
      (this.Ti = t), (this.Qt = e);
    }
    return (
      (t.prototype.Bi = function (t) {
        var e = this;
        return this.qi(t).next(function (n) {
          var r = new sc(n.highestTargetId);
          return (
            (n.highestTargetId = r.next()),
            e.Ui(t, n).next(function () {
              return n.highestTargetId;
            })
          );
        });
      }),
      (t.prototype.Qi = function (t) {
        return this.qi(t).next(function (t) {
          return xi.K(
            new Oi(
              t.lastRemoteSnapshotVersion.seconds,
              t.lastRemoteSnapshotVersion.nanoseconds
            )
          );
        });
      }),
      (t.prototype.Ki = function (t) {
        return this.qi(t).next(function (t) {
          return t.highestListenSequenceNumber;
        });
      }),
      (t.prototype.Wi = function (t, e, n) {
        var r = this;
        return this.qi(t).next(function (i) {
          return (
            (i.highestListenSequenceNumber = e),
            n && (i.lastRemoteSnapshotVersion = n.j()),
            e > i.highestListenSequenceNumber &&
              (i.highestListenSequenceNumber = e),
            r.Ui(t, i)
          );
        });
      }),
      (t.prototype.ji = function (t, e) {
        var n = this;
        return this.Gi(t, e).next(function () {
          return n.qi(t).next(function (r) {
            return (r.targetCount += 1), n.zi(e, r), n.Ui(t, r);
          });
        });
      }),
      (t.prototype.Hi = function (t, e) {
        return this.Gi(t, e);
      }),
      (t.prototype.Ji = function (t, e) {
        var n = this;
        return this.Yi(t, e.targetId)
          .next(function () {
            return ac(t).delete(e.targetId);
          })
          .next(function () {
            return n.qi(t);
          })
          .next(function (e) {
            return fi(e.targetCount > 0), (e.targetCount -= 1), n.Ui(t, e);
          });
      }),
      (t.prototype.Xi = function (t, e, n) {
        var r = this,
          i = 0,
          o = [];
        return ac(t)
          .hs(function (s, u) {
            var a = Ma(u);
            a.sequenceNumber <= e &&
              null === n.get(a.targetId) &&
              (i++, o.push(r.Ji(t, a)));
          })
          .next(function () {
            return Hu.Mn(o);
          })
          .next(function () {
            return i;
          });
      }),
      (t.prototype.In = function (t, e) {
        return ac(t).hs(function (t, n) {
          var r = Ma(n);
          e(r);
        });
      }),
      (t.prototype.qi = function (t) {
        return cc(t)
          .get(wa.key)
          .next(function (t) {
            return fi(null !== t), t;
          });
      }),
      (t.prototype.Ui = function (t, e) {
        return cc(t).put(wa.key, e);
      }),
      (t.prototype.Gi = function (t, e) {
        return ac(t).put(ja(this.Qt, e));
      }),
      (t.prototype.zi = function (t, e) {
        var n = !1;
        return (
          t.targetId > e.highestTargetId &&
            ((e.highestTargetId = t.targetId), (n = !0)),
          t.sequenceNumber > e.highestListenSequenceNumber &&
            ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
          n
        );
      }),
      (t.prototype.Zi = function (t) {
        return this.qi(t).next(function (t) {
          return t.targetCount;
        });
      }),
      (t.prototype.tr = function (t, e) {
        var n = bo(e),
          r = IDBKeyRange.bound(
            [n, Number.NEGATIVE_INFINITY],
            [n, Number.POSITIVE_INFINITY]
          ),
          i = null;
        return ac(t)
          .hs(
            { range: r, index: ma.queryTargetsIndexName },
            function (t, n, r) {
              var o = Ma(n);
              wo(e, o.target) && ((i = o), r.done());
            }
          )
          .next(function () {
            return i;
          });
      }),
      (t.prototype.er = function (t, e, n) {
        var r = this,
          i = [],
          o = hc(t);
        return (
          e.forEach(function (e) {
            var s = oa(e.path);
            i.push(o.put(new ba(n, s))), i.push(r.Ti.nr(t, n, e));
          }),
          Hu.Mn(i)
        );
      }),
      (t.prototype.sr = function (t, e, n) {
        var r = this,
          i = hc(t);
        return Hu.forEach(e, function (e) {
          var o = oa(e.path);
          return Hu.Mn([i.delete([n, o]), r.Ti.ir(t, n, e)]);
        });
      }),
      (t.prototype.Yi = function (t, e) {
        var n = hc(t),
          r = IDBKeyRange.bound([e], [e + 1], !1, !0);
        return n.delete(r);
      }),
      (t.prototype.rr = function (t, e) {
        var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
          r = hc(t),
          i = Js();
        return r
          .hs({ range: n, us: !0 }, function (t, e, n) {
            var r = aa(t[1]),
              o = new Ri(r);
            i = i.add(o);
          })
          .next(function () {
            return i;
          });
      }),
      (t.prototype.Fi = function (t, e) {
        var n = oa(e.path),
          r = IDBKeyRange.bound([n], [gi(n)], !1, !0),
          i = 0;
        return hc(t)
          .hs(
            { index: ba.documentTargetsIndex, us: !0, range: r },
            function (t, e, n) {
              var r = t[0];
              t[1], 0 !== r && (i++, n.done());
            }
          )
          .next(function () {
            return i > 0;
          });
      }),
      (t.prototype.Sn = function (t, e) {
        return ac(t)
          .get(e)
          .next(function (t) {
            return t ? Ma(t) : null;
          });
      }),
      t
    );
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
 */ function ac(t) {
  return Sa(t, ma.store);
}
function cc(t) {
  return Sa(t, wa.store);
}
function hc(t) {
  return Sa(t, ba.store);
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
 */ function fc(t, e) {
  var n = t[0],
    r = t[1],
    i = e[0],
    o = e[1],
    s = vi(n, i);
  return 0 === s ? vi(r, o) : s;
}
var lc = (function () {
    function t(t) {
      (this.cr = t), (this.buffer = new zs(fc)), (this.ar = 0);
    }
    return (
      (t.prototype.ur = function () {
        return ++this.ar;
      }),
      (t.prototype.hr = function (t) {
        var e = [t, this.ur()];
        if (this.buffer.size < this.cr) this.buffer = this.buffer.add(e);
        else {
          var n = this.buffer.last();
          fc(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
      }),
      Object.defineProperty(t.prototype, "maxValue", {
        get: function () {
          return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })(),
  pc = (function () {
    function t(t, e) {
      (this.lr = t), (this._s = e), (this._r = !1), (this.dr = null);
    }
    return (
      (t.prototype.start = function (t) {
        -1 !== this.lr.params.zs && this.wr(t);
      }),
      (t.prototype.stop = function () {
        this.dr && (this.dr.cancel(), (this.dr = null));
      }),
      Object.defineProperty(t.prototype, "Er", {
        get: function () {
          return null !== this.dr;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.wr = function (t) {
        var e = this,
          n = this._r ? 3e5 : 6e4;
        si(
          "LruGarbageCollector",
          "Garbage collection scheduled in " + n + "ms"
        ),
          (this.dr = this._s.Tr("lru_garbage_collection", n, function () {
            return r(e, void 0, void 0, function () {
              var e;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    (this.dr = null), (this._r = !0), (n.label = 1);
                  case 1:
                    return n.trys.push([1, 3, , 7]), [4, t.Ir(this.lr)];
                  case 2:
                    return n.sent(), [3, 7];
                  case 3:
                    return Wu((e = n.sent()))
                      ? (si(
                          "LruGarbageCollector",
                          "Ignoring IndexedDB error during garbage collection: ",
                          e
                        ),
                        [3, 6])
                      : [3, 4];
                  case 4:
                    return [4, Wa(e)];
                  case 5:
                    n.sent(), (n.label = 6);
                  case 6:
                    return [3, 7];
                  case 7:
                    return [4, this.wr(t)];
                  case 8:
                    return n.sent(), [2];
                }
              });
            });
          }));
      }),
      t
    );
  })(),
  dc = (function () {
    function t(t, e) {
      (this.mr = t), (this.params = e);
    }
    return (
      (t.prototype.Ar = function (t, e) {
        return this.mr.Rr(t).next(function (t) {
          return Math.floor((e / 100) * t);
        });
      }),
      (t.prototype.Pr = function (t, e) {
        var n = this;
        if (0 === e) return Hu.resolve(Di.q);
        var r = new lc(e);
        return this.mr
          .In(t, function (t) {
            return r.hr(t.sequenceNumber);
          })
          .next(function () {
            return n.mr.yr(t, function (t) {
              return r.hr(t);
            });
          })
          .next(function () {
            return r.maxValue;
          });
      }),
      (t.prototype.Xi = function (t, e, n) {
        return this.mr.Xi(t, e, n);
      }),
      (t.prototype.gr = function (t, e) {
        return this.mr.gr(t, e);
      }),
      (t.prototype.Vr = function (t, e) {
        var n = this;
        return -1 === this.params.zs
          ? (si("LruGarbageCollector", "Garbage collection skipped; disabled"),
            Hu.resolve(Qa))
          : this.pr(t).next(function (r) {
              return r < n.params.zs
                ? (si(
                    "LruGarbageCollector",
                    "Garbage collection skipped; Cache size " +
                      r +
                      " is lower than threshold " +
                      n.params.zs
                  ),
                  Qa)
                : n.br(t, e);
            });
      }),
      (t.prototype.pr = function (t) {
        return this.mr.pr(t);
      }),
      (t.prototype.br = function (t, e) {
        var n,
          r,
          i,
          o,
          s,
          u,
          a,
          c = this,
          h = Date.now();
        return this.Ar(t, this.params.Hs)
          .next(function (e) {
            return (
              e > c.params.Js
                ? (si(
                    "LruGarbageCollector",
                    "Capping sequence numbers to collect down to the maximum of " +
                      c.params.Js +
                      " from " +
                      e
                  ),
                  (r = c.params.Js))
                : (r = e),
              (o = Date.now()),
              c.Pr(t, r)
            );
          })
          .next(function (r) {
            return (n = r), (s = Date.now()), c.Xi(t, n, e);
          })
          .next(function (e) {
            return (i = e), (u = Date.now()), c.gr(t, n);
          })
          .next(function (t) {
            return (
              (a = Date.now()),
              oi() <= N.DEBUG &&
                si(
                  "LruGarbageCollector",
                  "LRU Garbage Collection\n\tCounted targets in " +
                    (o - h) +
                    "ms\n\tDetermined least recently used " +
                    r +
                    " in " +
                    (s - o) +
                    "ms\n\tRemoved " +
                    i +
                    " targets in " +
                    (u - s) +
                    "ms\n\tRemoved " +
                    t +
                    " documents in " +
                    (a - u) +
                    "ms\nTotal Duration: " +
                    (a - h) +
                    "ms"
                ),
              Hu.resolve({ Ks: !0, Ws: r, js: i, Gs: t })
            );
          });
      }),
      t
    );
  })(),
  vc = (function () {
    function t(t, e) {
      (this.db = t), (this.lr = new dc(this, e));
    }
    return (
      (t.prototype.Rr = function (t) {
        var e = this.vr(t);
        return this.db
          .Sr()
          .Zi(t)
          .next(function (t) {
            return e.next(function (e) {
              return t + e;
            });
          });
      }),
      (t.prototype.vr = function (t) {
        var e = 0;
        return this.yr(t, function (t) {
          e++;
        }).next(function () {
          return e;
        });
      }),
      (t.prototype.In = function (t, e) {
        return this.db.Sr().In(t, e);
      }),
      (t.prototype.yr = function (t, e) {
        return this.Dr(t, function (t, n) {
          return e(n);
        });
      }),
      (t.prototype.nr = function (t, e, n) {
        return yc(t, n);
      }),
      (t.prototype.ir = function (t, e, n) {
        return yc(t, n);
      }),
      (t.prototype.Xi = function (t, e, n) {
        return this.db.Sr().Xi(t, e, n);
      }),
      (t.prototype.Ni = function (t, e) {
        return yc(t, e);
      }),
      (t.prototype.Cr = function (t, e) {
        return (
          (r = e),
          (i = !1),
          oc((n = t))
            .ls(function (t) {
              return nc(n, t, r).next(function (t) {
                return t && (i = !0), Hu.resolve(!t);
              });
            })
            .next(function () {
              return i;
            })
        );
        var n, r, i;
      }),
      (t.prototype.gr = function (t, e) {
        var n = this,
          r = this.db.$r().Nr(),
          i = [],
          o = 0;
        return this.Dr(t, function (s, u) {
          if (u <= e) {
            var a = n.Cr(t, s).next(function (e) {
              if (!e)
                return (
                  o++,
                  r._i(t, s).next(function () {
                    return r.li(s), hc(t).delete([0, oa(s.path)]);
                  })
                );
            });
            i.push(a);
          }
        })
          .next(function () {
            return Hu.Mn(i);
          })
          .next(function () {
            return r.apply(t);
          })
          .next(function () {
            return o;
          });
      }),
      (t.prototype.removeTarget = function (t, e) {
        var n = e.kt(t.bs);
        return this.db.Sr().Hi(t, n);
      }),
      (t.prototype.Fr = function (t, e) {
        return yc(t, e);
      }),
      (t.prototype.Dr = function (t, e) {
        var n,
          r = hc(t),
          i = Di.q;
        return r
          .hs({ index: ba.documentTargetsIndex }, function (t, r) {
            var o = t[0],
              s = (t[1], r.path),
              u = r.sequenceNumber;
            0 === o
              ? (i !== Di.q && e(new Ri(aa(n)), i), (i = u), (n = s))
              : (i = Di.q);
          })
          .next(function () {
            i !== Di.q && e(new Ri(aa(n)), i);
          });
      }),
      (t.prototype.pr = function (t) {
        return this.db.$r().Or(t);
      }),
      t
    );
  })();
function yc(t, e) {
  return hc(t).put(((n = e), (r = t.bs), new ba(0, oa(n.path), r)));
  var n, r;
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
 */ var gc = (function () {
    function t(t, e) {
      (this.Qt = t), (this.Ei = e);
    }
    return (
      (t.prototype.ai = function (t, e, n) {
        return wc(t).put(Ec(e), n);
      }),
      (t.prototype.li = function (t, e) {
        var n = wc(t),
          r = Ec(e);
        return n.delete(r);
      }),
      (t.prototype.updateMetadata = function (t, e) {
        var n = this;
        return this.getMetadata(t).next(function (r) {
          return (r.byteSize += e), n.kr(t, r);
        });
      }),
      (t.prototype._i = function (t, e) {
        var n = this;
        return wc(t)
          .get(Ec(e))
          .next(function (t) {
            return n.Mr(t);
          });
      }),
      (t.prototype.Lr = function (t, e) {
        var n = this;
        return wc(t)
          .get(Ec(e))
          .next(function (t) {
            var e = n.Mr(t);
            return e ? { hi: e, size: tc(t) } : null;
          });
      }),
      (t.prototype.getEntries = function (t, e) {
        var n = this,
          r = Ys();
        return this.Br(t, e, function (t, e) {
          var i = n.Mr(e);
          r = r.zt(t, i);
        }).next(function () {
          return r;
        });
      }),
      (t.prototype.qr = function (t, e) {
        var n = this,
          r = Ys(),
          i = new js(Ri.H);
        return this.Br(t, e, function (t, e) {
          var o = n.Mr(e);
          o
            ? ((r = r.zt(t, o)), (i = i.zt(t, tc(e))))
            : ((r = r.zt(t, null)), (i = i.zt(t, 0)));
        }).next(function () {
          return { Ur: r, Qr: i };
        });
      }),
      (t.prototype.Br = function (t, e, n) {
        if (e.et()) return Hu.resolve();
        var r = IDBKeyRange.bound(e.first().path.it(), e.last().path.it()),
          i = e.te(),
          o = i.oe();
        return wc(t)
          .hs({ range: r }, function (t, e, r) {
            for (var s = Ri.Et(t); o && Ri.H(o, s) < 0; )
              n(o, null), (o = i.oe());
            o && o.isEqual(s) && (n(o, e), (o = i.ce() ? i.oe() : null)),
              o ? r.ss(o.path.it()) : r.done();
          })
          .next(function () {
            for (; o; ) n(o, null), (o = i.ce() ? i.oe() : null);
          });
      }),
      (t.prototype.Kr = function (t, e, n) {
        var r = this,
          i = Qs(),
          o = e.path.length + 1,
          s = {};
        if (n.isEqual(xi.min())) {
          var u = e.path.it();
          s.range = IDBKeyRange.lowerBound(u);
        } else {
          var a = e.path.it(),
            c = Ca(n);
          (s.range = IDBKeyRange.lowerBound([a, c], !0)),
            (s.index = ya.collectionReadTimeIndex);
        }
        return wc(t)
          .hs(s, function (t, n, s) {
            if (t.length === o) {
              var u = Pa(r.Qt, n);
              e.path.nt(u.key.path)
                ? u instanceof po && Jo(e, u) && (i = i.zt(u.key, u))
                : s.done();
            }
          })
          .next(function () {
            return i;
          });
      }),
      (t.prototype.Nr = function (t) {
        return new mc(this, !!t && t.Wr);
      }),
      (t.prototype.Or = function (t) {
        return this.getMetadata(t).next(function (t) {
          return t.byteSize;
        });
      }),
      (t.prototype.getMetadata = function (t) {
        return bc(t)
          .get(ga.key)
          .next(function (t) {
            return fi(!!t), t;
          });
      }),
      (t.prototype.kr = function (t, e) {
        return bc(t).put(ga.key, e);
      }),
      (t.prototype.Mr = function (t) {
        if (t) {
          var e = Pa(this.Qt, t);
          return e instanceof vo && e.version.isEqual(xi.min()) ? null : e;
        }
        return null;
      }),
      t
    );
  })(),
  mc = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).jr = e),
        (r.Wr = n),
        (r.Gr = new Ja(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
        r
      );
    }
    return (
      e(n, t),
      (n.prototype.wi = function (t) {
        var e = this,
          n = [],
          r = 0,
          i = new zs(function (t, e) {
            return vi(t.rt(), e.rt());
          });
        return (
          this.ri.forEach(function (o, s) {
            var u = e.Gr.get(o);
            if (s.hi) {
              var a = ka(e.jr.Qt, s.hi, e.ci(o));
              i = i.add(o.path.X());
              var c = tc(a);
              (r += c - u), n.push(e.jr.ai(t, o, a));
            } else if (((r -= u), e.Wr)) {
              var h = ka(e.jr.Qt, new vo(o, xi.min()), e.ci(o));
              n.push(e.jr.ai(t, o, h));
            } else n.push(e.jr.li(t, o));
          }),
          i.forEach(function (r) {
            n.push(e.jr.Ei.qs(t, r));
          }),
          n.push(this.jr.updateMetadata(t, r)),
          Hu.Mn(n)
        );
      }),
      (n.prototype.fi = function (t, e) {
        var n = this;
        return this.jr.Lr(t, e).next(function (t) {
          return null === t
            ? (n.Gr.set(e, 0), null)
            : (n.Gr.set(e, t.size), t.hi);
        });
      }),
      (n.prototype.di = function (t, e) {
        var n = this;
        return this.jr.qr(t, e).next(function (t) {
          var e = t.Ur;
          return (
            t.Qr.forEach(function (t, e) {
              n.Gr.set(t, e);
            }),
            e
          );
        });
      }),
      n
    );
  })(Za);
function bc(t) {
  return Sa(t, ga.store);
}
function wc(t) {
  return Sa(t, ya.store);
}
function Ec(t) {
  return t.path.it();
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
 */ var _c = (function () {
  function t(t) {
    this.Qt = t;
  }
  return (
    (t.prototype.Jn = function (t, e, n, r) {
      var i = this;
      fi(n < r && n >= 0 && r <= 11);
      var o = new Yu("createOrUpgrade", e);
      n < 1 &&
        r >= 1 &&
        (t.createObjectStore(ha.store),
        (function (t) {
          t.createObjectStore(fa.store, { keyPath: fa.keyPath }),
            t
              .createObjectStore(la.store, {
                keyPath: la.keyPath,
                autoIncrement: !0,
              })
              .createIndex(la.userMutationsIndex, la.userMutationsKeyPath, {
                unique: !0,
              }),
            t.createObjectStore(pa.store);
        })(t),
        Ic(t),
        (function (t) {
          t.createObjectStore(ya.store);
        })(t));
      var s = Hu.resolve();
      return (
        n < 3 &&
          r >= 3 &&
          (0 !== n &&
            ((function (t) {
              t.deleteObjectStore(ba.store),
                t.deleteObjectStore(ma.store),
                t.deleteObjectStore(wa.store);
            })(t),
            Ic(t)),
          (s = s.next(function () {
            return (function (t) {
              var e = t.store(wa.store),
                n = new wa(0, 0, xi.min().j(), 0);
              return e.put(wa.key, n);
            })(o);
          }))),
        n < 4 &&
          r >= 4 &&
          (0 !== n &&
            (s = s.next(function () {
              return (function (t, e) {
                return e
                  .store(la.store)
                  .rs()
                  .next(function (n) {
                    t.deleteObjectStore(la.store),
                      t
                        .createObjectStore(la.store, {
                          keyPath: la.keyPath,
                          autoIncrement: !0,
                        })
                        .createIndex(
                          la.userMutationsIndex,
                          la.userMutationsKeyPath,
                          { unique: !0 }
                        );
                    var r = e.store(la.store),
                      i = n.map(function (t) {
                        return r.put(t);
                      });
                    return Hu.Mn(i);
                  });
              })(t, o);
            })),
          (s = s.next(function () {
            !(function (t) {
              t.createObjectStore(_a.store, { keyPath: _a.keyPath });
            })(t);
          }))),
        n < 5 &&
          r >= 5 &&
          (s = s.next(function () {
            return i.zr(o);
          })),
        n < 6 &&
          r >= 6 &&
          (s = s.next(function () {
            return (
              (function (t) {
                t.createObjectStore(ga.store);
              })(t),
              i.Hr(o)
            );
          })),
        n < 7 &&
          r >= 7 &&
          (s = s.next(function () {
            return i.Jr(o);
          })),
        n < 8 &&
          r >= 8 &&
          (s = s.next(function () {
            return i.Yr(t, o);
          })),
        n < 9 &&
          r >= 9 &&
          (s = s.next(function () {
            !(function (t) {
              t.objectStoreNames.contains("remoteDocumentChanges") &&
                t.deleteObjectStore("remoteDocumentChanges");
            })(t),
              (function (t) {
                var e = t.objectStore(ya.store);
                e.createIndex(ya.readTimeIndex, ya.readTimeIndexPath, {
                  unique: !1,
                }),
                  e.createIndex(
                    ya.collectionReadTimeIndex,
                    ya.collectionReadTimeIndexPath,
                    { unique: !1 }
                  );
              })(e);
          })),
        n < 10 &&
          r >= 10 &&
          (s = s.next(function () {
            return i.Xr(o);
          })),
        n < 11 &&
          r >= 11 &&
          (s = s.next(function () {
            !(function (t) {
              t.createObjectStore(Ia.store, { keyPath: Ia.keyPath });
            })(t),
              (function (t) {
                t.createObjectStore(Ta.store, { keyPath: Ta.keyPath });
              })(t);
          })),
        s
      );
    }),
    (t.prototype.Hr = function (t) {
      var e = 0;
      return t
        .store(ya.store)
        .hs(function (t, n) {
          e += tc(n);
        })
        .next(function () {
          var n = new ga(e);
          return t.store(ga.store).put(ga.key, n);
        });
    }),
    (t.prototype.zr = function (t) {
      var e = this,
        n = t.store(fa.store),
        r = t.store(la.store);
      return n.rs().next(function (n) {
        return Hu.forEach(n, function (n) {
          var i = IDBKeyRange.bound(
            [n.userId, -1],
            [n.userId, n.lastAcknowledgedBatchId]
          );
          return r.rs(la.userMutationsIndex, i).next(function (r) {
            return Hu.forEach(r, function (r) {
              fi(r.userId === n.userId);
              var i = Ua(e.Qt, r);
              return $a(t, n.userId, i).next(function () {});
            });
          });
        });
      });
    }),
    (t.prototype.Jr = function (t) {
      var e = t.store(ba.store),
        n = t.store(ya.store);
      return t
        .store(wa.store)
        .get(wa.key)
        .next(function (t) {
          var r = [];
          return n
            .hs(function (n, i) {
              var o = new ki(n),
                s = [0, oa(o)];
              r.push(
                e.get(s).next(function (n) {
                  return n
                    ? Hu.resolve()
                    : ((r = o),
                      e.put(new ba(0, oa(r), t.highestListenSequenceNumber)));
                  var r;
                })
              );
            })
            .next(function () {
              return Hu.Mn(r);
            });
        });
    }),
    (t.prototype.Yr = function (t, e) {
      t.createObjectStore(Ea.store, { keyPath: Ea.keyPath });
      var n = e.store(Ea.store),
        r = new Ha(),
        i = function (t) {
          if (r.add(t)) {
            var e = t.tt(),
              i = t.X();
            return n.put({ collectionId: e, parent: oa(i) });
          }
        };
      return e
        .store(ya.store)
        .hs({ us: !0 }, function (t, e) {
          var n = new ki(t);
          return i(n.X());
        })
        .next(function () {
          return e.store(pa.store).hs({ us: !0 }, function (t, e) {
            t[0];
            var n = t[1],
              r = (t[2], aa(n));
            return i(r.X());
          });
        });
    }),
    (t.prototype.Xr = function (t) {
      var e = this,
        n = t.store(ma.store);
      return n.hs(function (t, r) {
        var i = Ma(r),
          o = ja(e.Qt, i);
        return n.put(o);
      });
    }),
    t
  );
})();
function Ic(t) {
  t
    .createObjectStore(ba.store, { keyPath: ba.keyPath })
    .createIndex(ba.documentTargetsIndex, ba.documentTargetsKeyPath, {
      unique: !0,
    }),
    t
      .createObjectStore(ma.store, { keyPath: ma.keyPath })
      .createIndex(ma.queryTargetsIndexName, ma.queryTargetsKeyPath, {
        unique: !0,
      }),
    t.createObjectStore(wa.store);
}
var Tc =
    "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
  Nc = (function () {
    function t(e, n, r, i, o, s, u, a, c, h) {
      if (
        ((this.allowTabSynchronization = e),
        (this.persistenceKey = n),
        (this.clientId = r),
        (this.Zr = o),
        (this.window = s),
        (this.document = u),
        (this.eo = c),
        (this.no = h),
        (this.so = null),
        (this.io = !1),
        (this.isPrimary = !1),
        (this.networkEnabled = !0),
        (this.ro = null),
        (this.inForeground = !1),
        (this.oo = null),
        (this.co = null),
        (this.ao = Number.NEGATIVE_INFINITY),
        (this.uo = function (t) {
          return Promise.resolve();
        }),
        !t.Kn())
      )
        throw new wi(
          bi.UNIMPLEMENTED,
          "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
        );
      var f, l;
      (this.Ti = new vc(this, i)),
        (this.ho = n + "main"),
        (this.Qt = new xa(a)),
        (this.lo = new Ku(this.ho, 11, new _c(this.Qt))),
        (this._o = new uc(this.Ti, this.Qt)),
        (this.Ei = new Ya()),
        (this.fo = ((f = this.Qt), (l = this.Ei), new gc(f, l))),
        (this.wo = new qa()),
        this.window && this.window.localStorage
          ? (this.Eo = this.window.localStorage)
          : ((this.Eo = null),
            !1 === h &&
              ui(
                "IndexedDbPersistence",
                "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."
              ));
    }
    return (
      (t.prototype.start = function () {
        var t = this;
        return this.To()
          .then(function () {
            if (!t.isPrimary && !t.allowTabSynchronization)
              throw new wi(bi.FAILED_PRECONDITION, Tc);
            return (
              t.Io(),
              t.mo(),
              t.Ao(),
              t.runTransaction(
                "getHighestListenSequenceNumber",
                "readonly",
                function (e) {
                  return t._o.Ki(e);
                }
              )
            );
          })
          .then(function (e) {
            t.so = new Di(e, t.eo);
          })
          .then(function () {
            t.io = !0;
          })
          .catch(function (e) {
            return t.lo && t.lo.close(), Promise.reject(e);
          });
      }),
      (t.prototype.Ro = function (t) {
        var e = this;
        return (
          (this.uo = function (n) {
            return r(e, void 0, void 0, function () {
              return i(this, function (e) {
                return this.Er ? [2, t(n)] : [2];
              });
            });
          }),
          t(this.isPrimary)
        );
      }),
      (t.prototype.Po = function (t) {
        var e = this;
        this.lo.Xn(function (n) {
          return r(e, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return null === n.newVersion ? [4, t()] : [3, 2];
                case 1:
                  e.sent(), (e.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        });
      }),
      (t.prototype.yo = function (t) {
        var e = this;
        this.networkEnabled !== t &&
          ((this.networkEnabled = t),
          this.Zr.Ps(function () {
            return r(e, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.Er ? [4, this.To()] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }));
      }),
      (t.prototype.To = function () {
        var t = this;
        return this.runTransaction(
          "updateClientMetadataAndTryBecomePrimary",
          "readwrite",
          function (e) {
            return Sc(e)
              .put(
                new _a(t.clientId, Date.now(), t.networkEnabled, t.inForeground)
              )
              .next(function () {
                if (t.isPrimary)
                  return t.Vo(e).next(function (e) {
                    e ||
                      ((t.isPrimary = !1),
                      t.Zr.po(function () {
                        return t.uo(!1);
                      }));
                  });
              })
              .next(function () {
                return t.bo(e);
              })
              .next(function (n) {
                return t.isPrimary && !n
                  ? t.vo(e).next(function () {
                      return !1;
                    })
                  : !!n &&
                      t.So(e).next(function () {
                        return !0;
                      });
              });
          }
        )
          .catch(function (e) {
            if (Wu(e))
              return (
                si("IndexedDbPersistence", "Failed to extend owner lease: ", e),
                t.isPrimary
              );
            if (!t.allowTabSynchronization) throw e;
            return (
              si(
                "IndexedDbPersistence",
                "Releasing owner lease after error during lease refresh",
                e
              ),
              !1
            );
          })
          .then(function (e) {
            t.isPrimary !== e &&
              t.Zr.po(function () {
                return t.uo(e);
              }),
              (t.isPrimary = e);
          });
      }),
      (t.prototype.Vo = function (t) {
        var e = this;
        return Ac(t)
          .get(ha.key)
          .next(function (t) {
            return Hu.resolve(e.Do(t));
          });
      }),
      (t.prototype.Co = function (t) {
        return Sc(t).delete(this.clientId);
      }),
      (t.prototype.xo = function () {
        return r(this, void 0, void 0, function () {
          var t,
            e,
            n,
            r,
            o = this;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return !this.isPrimary || this.No(this.ao, 18e5)
                  ? [3, 2]
                  : ((this.ao = Date.now()),
                    [
                      4,
                      this.runTransaction(
                        "maybeGarbageCollectMultiClientState",
                        "readwrite-primary",
                        function (t) {
                          var e = Sa(t, _a.store);
                          return e.rs().next(function (t) {
                            var n = o.$o(t, 18e5),
                              r = t.filter(function (t) {
                                return -1 === n.indexOf(t);
                              });
                            return Hu.forEach(r, function (t) {
                              return e.delete(t.clientId);
                            }).next(function () {
                              return r;
                            });
                          });
                        }
                      ).catch(function () {
                        return [];
                      }),
                    ]);
              case 1:
                if (((t = i.sent()), this.Eo))
                  for (e = 0, n = t; e < n.length; e++)
                    (r = n[e]), this.Eo.removeItem(this.Fo(r.clientId));
                i.label = 2;
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Ao = function () {
        var t = this;
        this.co = this.Zr.Tr("client_metadata_refresh", 4e3, function () {
          return t
            .To()
            .then(function () {
              return t.xo();
            })
            .then(function () {
              return t.Ao();
            });
        });
      }),
      (t.prototype.Do = function (t) {
        return !!t && t.ownerId === this.clientId;
      }),
      (t.prototype.bo = function (t) {
        var e = this;
        return this.no
          ? Hu.resolve(!0)
          : Ac(t)
              .get(ha.key)
              .next(function (n) {
                if (
                  null !== n &&
                  e.No(n.leaseTimestampMs, 5e3) &&
                  !e.Oo(n.ownerId)
                ) {
                  if (e.Do(n) && e.networkEnabled) return !0;
                  if (!e.Do(n)) {
                    if (!n.allowTabSynchronization)
                      throw new wi(bi.FAILED_PRECONDITION, Tc);
                    return !1;
                  }
                }
                return (
                  !(!e.networkEnabled || !e.inForeground) ||
                  Sc(t)
                    .rs()
                    .next(function (t) {
                      return (
                        void 0 ===
                        e.$o(t, 5e3).find(function (t) {
                          if (e.clientId !== t.clientId) {
                            var n = !e.networkEnabled && t.networkEnabled,
                              r = !e.inForeground && t.inForeground,
                              i = e.networkEnabled === t.networkEnabled;
                            if (n || (r && i)) return !0;
                          }
                          return !1;
                        })
                      );
                    })
                );
              })
              .next(function (t) {
                return (
                  e.isPrimary !== t &&
                    si(
                      "IndexedDbPersistence",
                      "Client " +
                        (t ? "is" : "is not") +
                        " eligible for a primary lease."
                    ),
                  t
                );
              });
      }),
      (t.prototype.ko = function () {
        return r(this, void 0, void 0, function () {
          var t = this;
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this.io = !1),
                  this.Mo(),
                  this.co && (this.co.cancel(), (this.co = null)),
                  this.Lo(),
                  this.Bo(),
                  [
                    4,
                    this.lo.runTransaction(
                      "shutdown",
                      "readwrite",
                      [ha.store, _a.store],
                      function (e) {
                        var n = new Aa(e, Di.q);
                        return t.vo(n).next(function () {
                          return t.Co(n);
                        });
                      }
                    ),
                  ]
                );
              case 1:
                return e.sent(), this.lo.close(), this.qo(), [2];
            }
          });
        });
      }),
      (t.prototype.$o = function (t, e) {
        var n = this;
        return t.filter(function (t) {
          return n.No(t.updateTimeMs, e) && !n.Oo(t.clientId);
        });
      }),
      (t.prototype.Uo = function () {
        var t = this;
        return this.runTransaction(
          "getActiveClients",
          "readonly",
          function (e) {
            return Sc(e)
              .rs()
              .next(function (e) {
                return t.$o(e, 18e5).map(function (t) {
                  return t.clientId;
                });
              });
          }
        );
      }),
      Object.defineProperty(t.prototype, "Er", {
        get: function () {
          return this.io;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.Qo = function (t) {
        return ec.mi(t, this.Qt, this.Ei, this.Ti);
      }),
      (t.prototype.Sr = function () {
        return this._o;
      }),
      (t.prototype.$r = function () {
        return this.fo;
      }),
      (t.prototype.Ko = function () {
        return this.Ei;
      }),
      (t.prototype.Wo = function () {
        return this.wo;
      }),
      (t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        si("IndexedDbPersistence", "Starting transaction:", t);
        var i,
          o = "readonly" === e ? "readonly" : "readwrite";
        return this.lo
          .runTransaction(t, o, Na, function (o) {
            return (
              (i = new Aa(o, r.so ? r.so.next() : Di.q)),
              "readwrite-primary" === e
                ? r
                    .Vo(i)
                    .next(function (t) {
                      return !!t || r.bo(i);
                    })
                    .next(function (e) {
                      if (!e)
                        throw (
                          (ui(
                            "Failed to obtain primary lease for action '" +
                              t +
                              "'."
                          ),
                          (r.isPrimary = !1),
                          r.Zr.po(function () {
                            return r.uo(!1);
                          }),
                          new wi(bi.FAILED_PRECONDITION, ra))
                        );
                      return n(i);
                    })
                    .next(function (t) {
                      return r.So(i).next(function () {
                        return t;
                      });
                    })
                : r.jo(i).next(function () {
                    return n(i);
                  })
            );
          })
          .then(function (t) {
            return i.Vs(), t;
          });
      }),
      (t.prototype.jo = function (t) {
        var e = this;
        return Ac(t)
          .get(ha.key)
          .next(function (t) {
            if (
              null !== t &&
              e.No(t.leaseTimestampMs, 5e3) &&
              !e.Oo(t.ownerId) &&
              !e.Do(t) &&
              !(
                e.no ||
                (e.allowTabSynchronization && t.allowTabSynchronization)
              )
            )
              throw new wi(bi.FAILED_PRECONDITION, Tc);
          });
      }),
      (t.prototype.So = function (t) {
        var e = new ha(this.clientId, this.allowTabSynchronization, Date.now());
        return Ac(t).put(ha.key, e);
      }),
      (t.Kn = function () {
        return Ku.Kn();
      }),
      (t.prototype.vo = function (t) {
        var e = this,
          n = Ac(t);
        return n.get(ha.key).next(function (t) {
          return e.Do(t)
            ? (si("IndexedDbPersistence", "Releasing primary lease."),
              n.delete(ha.key))
            : Hu.resolve();
        });
      }),
      (t.prototype.No = function (t, e) {
        var n = Date.now();
        return !(
          t < n - e ||
          (t > n &&
            (ui(
              "Detected an update time that is in the future: " + t + " > " + n
            ),
            1))
        );
      }),
      (t.prototype.Io = function () {
        var t = this;
        null !== this.document &&
          "function" == typeof this.document.addEventListener &&
          ((this.oo = function () {
            t.Zr.Ps(function () {
              return (
                (t.inForeground = "visible" === t.document.visibilityState),
                t.To()
              );
            });
          }),
          this.document.addEventListener("visibilitychange", this.oo),
          (this.inForeground = "visible" === this.document.visibilityState));
      }),
      (t.prototype.Lo = function () {
        this.oo &&
          (this.document.removeEventListener("visibilitychange", this.oo),
          (this.oo = null));
      }),
      (t.prototype.mo = function () {
        var t,
          e = this;
        "function" ==
          typeof (null === (t = this.window) || void 0 === t
            ? void 0
            : t.addEventListener) &&
          ((this.ro = function () {
            e.Mo(),
              e.Zr.Ps(function () {
                return e.ko();
              });
          }),
          this.window.addEventListener("unload", this.ro));
      }),
      (t.prototype.Bo = function () {
        this.ro &&
          (this.window.removeEventListener("unload", this.ro),
          (this.ro = null));
      }),
      (t.prototype.Oo = function (t) {
        var e;
        try {
          var n =
            null !==
            (null === (e = this.Eo) || void 0 === e
              ? void 0
              : e.getItem(this.Fo(t)));
          return (
            si(
              "IndexedDbPersistence",
              "Client '" +
                t +
                "' " +
                (n ? "is" : "is not") +
                " zombied in LocalStorage"
            ),
            n
          );
        } catch (r) {
          return (
            ui("IndexedDbPersistence", "Failed to get zombied client id.", r),
            !1
          );
        }
      }),
      (t.prototype.Mo = function () {
        if (this.Eo)
          try {
            this.Eo.setItem(this.Fo(this.clientId), String(Date.now()));
          } catch (t) {
            ui("Failed to set zombie client id.", t);
          }
      }),
      (t.prototype.qo = function () {
        if (this.Eo)
          try {
            this.Eo.removeItem(this.Fo(this.clientId));
          } catch (t) {}
      }),
      (t.prototype.Fo = function (t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
      }),
      t
    );
  })();
function Ac(t) {
  return Sa(t, ha.store);
}
function Sc(t) {
  return Sa(t, _a.store);
}
function Dc(t, e) {
  var n = t.projectId;
  return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
}
var Oc = (function () {
    function t(t, e, n) {
      (this.fo = t), (this.zo = e), (this.Ei = n);
    }
    return (
      (t.prototype.Ho = function (t, e) {
        var n = this;
        return this.zo.bi(t, e).next(function (r) {
          return n.Jo(t, e, r);
        });
      }),
      (t.prototype.Jo = function (t, e, n) {
        return this.fo._i(t, e).next(function (t) {
          for (var r = 0, i = n; r < i.length; r++) t = i[r].Cs(e, t);
          return t;
        });
      }),
      (t.prototype.Yo = function (t, e, n) {
        var r = Ys();
        return (
          e.forEach(function (t, e) {
            for (var i = 0, o = n; i < o.length; i++) e = o[i].Cs(t, e);
            r = r.zt(t, e);
          }),
          r
        );
      }),
      (t.prototype.Xo = function (t, e) {
        var n = this;
        return this.fo.getEntries(t, e).next(function (e) {
          return n.Zo(t, e);
        });
      }),
      (t.prototype.Zo = function (t, e) {
        var n = this;
        return this.zo.vi(t, e).next(function (r) {
          var i = n.Yo(t, e, r),
            o = Hs();
          return (
            i.forEach(function (t, e) {
              e || (e = new vo(t, xi.min())), (o = o.zt(t, e));
            }),
            o
          );
        });
      }),
      (t.prototype.Kr = function (t, e, n) {
        return (
          (r = e),
          Ri.wt(r.path) && null === r.collectionGroup && 0 === r.filters.length
            ? this.tc(t, e.path)
            : Go(e)
            ? this.ec(t, e, n)
            : this.nc(t, e, n)
        );
        var r;
      }),
      (t.prototype.tc = function (t, e) {
        return this.Ho(t, new Ri(e)).next(function (t) {
          var e = Qs();
          return t instanceof po && (e = e.zt(t.key, t)), e;
        });
      }),
      (t.prototype.ec = function (t, e, n) {
        var r = this,
          i = e.collectionGroup,
          o = Qs();
        return this.Ei.Us(t, i).next(function (s) {
          return Hu.forEach(s, function (s) {
            var u,
              a,
              c =
                ((u = e),
                (a = s.child(i)),
                new Uo(
                  a,
                  null,
                  u.xt.slice(),
                  u.filters.slice(),
                  u.limit,
                  u.limitType,
                  u.startAt,
                  u.endAt
                ));
            return r.nc(t, c, n).next(function (t) {
              t.forEach(function (t, e) {
                o = o.zt(t, e);
              });
            });
          }).next(function () {
            return o;
          });
        });
      }),
      (t.prototype.nc = function (t, e, n) {
        var r,
          i,
          o = this;
        return this.fo
          .Kr(t, e, n)
          .next(function (n) {
            return (r = n), o.zo.Di(t, e);
          })
          .next(function (e) {
            return (
              (i = e),
              o.sc(t, i, r).next(function (t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++)
                  for (
                    var o = n[e], s = 0, u = o.mutations;
                    s < u.length;
                    s++
                  ) {
                    var a = u[s],
                      c = a.key,
                      h = _s(a, r.get(c), o.vs);
                    r = h instanceof po ? r.zt(c, h) : r.remove(c);
                  }
              })
            );
          })
          .next(function () {
            return (
              r.forEach(function (t, n) {
                Jo(e, n) || (r = r.remove(t));
              }),
              r
            );
          });
      }),
      (t.prototype.sc = function (t, e, n) {
        for (var r = Js(), i = 0, o = e; i < o.length; i++)
          for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Ss && null === n.get(a.key) && (r = r.add(a.key));
          }
        var c = n;
        return this.fo.getEntries(t, r).next(function (t) {
          return (
            t.forEach(function (t, e) {
              null !== e && e instanceof po && (c = c.zt(t, e));
            }),
            c
          );
        });
      }),
      t
    );
  })(),
  xc = (function () {
    function t(t, e, n, r) {
      (this.targetId = t), (this.fromCache = e), (this.ic = n), (this.rc = r);
    }
    return (
      (t.oc = function (e, n) {
        for (
          var r = Js(), i = Js(), o = 0, s = n.docChanges;
          o < s.length;
          o++
        ) {
          var u = s[o];
          switch (u.type) {
            case 0:
              r = r.add(u.doc.key);
              break;
            case 1:
              i = i.add(u.doc.key);
          }
        }
        return new t(e, n.fromCache, r, i);
      }),
      t
    );
  })(),
  Pc = (function () {
    function t() {}
    return (
      (t.prototype.cc = function (t) {
        this.ac = t;
      }),
      (t.prototype.Kr = function (t, e, n, r) {
        var i,
          o = this;
        return (0 === (i = e).filters.length &&
          null === i.limit &&
          null == i.startAt &&
          null == i.endAt &&
          (0 === i.xt.length || (1 === i.xt.length && i.xt[0].field.ut()))) ||
          n.isEqual(xi.min())
          ? this.uc(t, e)
          : this.ac.Xo(t, r).next(function (i) {
              var s = o.hc(e, i);
              return (Fo(e) || qo(e)) && o.lc(e.limitType, s, r, n)
                ? o.uc(t, e)
                : (oi() <= N.DEBUG &&
                    si(
                      "QueryEngine",
                      "Re-using previous result from %s to execute query: %s",
                      n.toString(),
                      Wo(e)
                    ),
                  o.ac.Kr(t, e, n).next(function (t) {
                    return (
                      s.forEach(function (e) {
                        t = t.zt(e.key, e);
                      }),
                      t
                    );
                  }));
            });
      }),
      (t.prototype.hc = function (t, e) {
        var n = new zs(Zo(t));
        return (
          e.forEach(function (e, r) {
            r instanceof po && Jo(t, r) && (n = n.add(r));
          }),
          n
        );
      }),
      (t.prototype.lc = function (t, e, n, r) {
        if (n.size !== e.size) return !0;
        var i = "F" === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version._(r) > 0);
      }),
      (t.prototype.uc = function (t, e) {
        return (
          oi() <= N.DEBUG &&
            si(
              "QueryEngine",
              "Using full collection scan to execute query:",
              Wo(e)
            ),
          this.ac.Kr(t, e, xi.min())
        );
      }),
      t
    );
  })(),
  kc = (function () {
    function t(t, e, n, r) {
      (this.persistence = t),
        (this._c = e),
        (this.Qt = r),
        (this.fc = new js(vi)),
        (this.dc = new Ja(function (t) {
          return bo(t);
        }, wo)),
        (this.wc = xi.min()),
        (this.zo = t.Qo(n)),
        (this.Ec = t.$r()),
        (this._o = t.Sr()),
        (this.Tc = new Oc(this.Ec, this.zo, this.persistence.Ko())),
        (this.wo = t.Wo()),
        this._c.cc(this.Tc);
    }
    return (
      (t.prototype.Ir = function (t) {
        var e = this;
        return this.persistence.runTransaction(
          "Collect garbage",
          "readwrite-primary",
          function (n) {
            return t.Vr(n, e.fc);
          }
        );
      }),
      t
    );
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
 */ function Cc(t, e, n, r) {
  return new kc(t, e, n, r);
}
function Lc(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            (n = li(t)),
            (r = n.zo),
            (o = n.Tc),
            [
              4,
              n.persistence.runTransaction(
                "Handle user change",
                "readonly",
                function (t) {
                  var i;
                  return n.zo
                    .pi(t)
                    .next(function (s) {
                      return (
                        (i = s),
                        (r = n.persistence.Qo(e)),
                        (o = new Oc(n.Ec, r, n.persistence.Ko())),
                        r.pi(t)
                      );
                    })
                    .next(function (e) {
                      for (
                        var n = [], r = [], s = Js(), u = 0, a = i;
                        u < a.length;
                        u++
                      ) {
                        var c = a[u];
                        n.push(c.batchId);
                        for (var h = 0, f = c.mutations; h < f.length; h++) {
                          var l = f[h];
                          s = s.add(l.key);
                        }
                      }
                      for (var p = 0, d = e; p < d.length; p++) {
                        var v = d[p];
                        r.push(v.batchId);
                        for (var y = 0, g = v.mutations; y < g.length; y++) {
                          var m = g[y];
                          s = s.add(m.key);
                        }
                      }
                      return o.Xo(t, s).next(function (t) {
                        return { Ic: t, mc: n, Ac: r };
                      });
                    });
                }
              ),
            ]
          );
        case 1:
          return (
            (s = i.sent()), [2, ((n.zo = r), (n.Tc = o), n._c.cc(n.Tc), s)]
          );
      }
    });
  });
}
function Rc(t, e) {
  var n = li(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    function (t) {
      var r,
        i,
        o,
        s,
        u,
        a,
        c,
        h = e.batch.keys(),
        f = n.Ec.Nr({ Wr: !0 });
      return ((r = n),
      (i = t),
      (o = e),
      (s = f),
      (u = o.batch),
      (a = u.keys()),
      (c = Hu.resolve()),
      a.forEach(function (t) {
        c = c
          .next(function () {
            return s._i(i, t);
          })
          .next(function (e) {
            var n = e,
              r = o.$s.get(t);
            fi(null !== r),
              (!n || n.version._(r) < 0) &&
                (n = u.Ss(t, n, o)) &&
                s.ai(n, o.Ns);
          });
      }),
      c.next(function () {
        return r.zo.Ci(i, u);
      }))
        .next(function () {
          return f.apply(t);
        })
        .next(function () {
          return n.zo.$i(t);
        })
        .next(function () {
          return n.Tc.Xo(t, h);
        });
    }
  );
}
function Vc(t) {
  var e = li(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    function (t) {
      return e._o.Qi(t);
    }
  );
}
function Uc(t, e) {
  var n = li(t),
    r = e.Ot,
    i = n.fc;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", function (t) {
      var o = n.Ec.Nr({ Wr: !0 });
      i = n.fc;
      var s = [];
      e.$e.forEach(function (e, o) {
        var u,
          a,
          c,
          h = i.get(o);
        if (h) {
          s.push(
            n._o.sr(t, e.Qe, o).next(function () {
              return n._o.er(t, e.qe, o);
            })
          );
          var f = e.resumeToken;
          if (f.l() > 0) {
            var l = h.Mt(f, r).kt(t.bs);
            (i = i.zt(o, l)),
              (u = h),
              (c = e),
              fi((a = l).resumeToken.l() > 0),
              (0 === u.resumeToken.l() ||
                a.Ot.W() - u.Ot.W() >= 3e8 ||
                c.qe.size + c.Ue.size + c.Qe.size > 0) &&
                s.push(n._o.Hi(t, l));
          }
        }
      });
      var u = Hs();
      if (
        (e.Oe.forEach(function (r, i) {
          e.ke.has(r) && s.push(n.persistence.Ti.Fr(t, r));
        }),
        s.push(
          (function (t, e, n, r, i) {
            var o = Js();
            return (
              n.forEach(function (t) {
                return (o = o.add(t));
              }),
              e.getEntries(t, o).next(function (t) {
                var o = Hs();
                return (
                  n.forEach(function (n, s) {
                    var u = t.get(n),
                      a = (null == i ? void 0 : i.get(n)) || r;
                    s instanceof vo && s.version.isEqual(xi.min())
                      ? (e.li(n, a), (o = o.zt(n, s)))
                      : null == u ||
                        s.version._(u.version) > 0 ||
                        (0 === s.version._(u.version) && u.hasPendingWrites)
                      ? (e.ai(s, a), (o = o.zt(n, s)))
                      : si(
                          "LocalStore",
                          "Ignoring outdated watch update for ",
                          n,
                          ". Current version:",
                          u.version,
                          " Watch version:",
                          s.version
                        );
                  }),
                  o
                );
              })
            );
          })(t, o, e.Oe, r, void 0).next(function (t) {
            u = t;
          })
        ),
        !r.isEqual(xi.min()))
      ) {
        var a = n._o.Qi(t).next(function (e) {
          return n._o.Wi(t, t.bs, r);
        });
        s.push(a);
      }
      return Hu.Mn(s)
        .next(function () {
          return o.apply(t);
        })
        .next(function () {
          return n.Tc.Zo(t, u);
        });
    })
    .then(function (t) {
      return (n.fc = i), t;
    });
}
function Mc(t, e) {
  var n = li(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    function (t) {
      return void 0 === e && (e = -1), n.zo.gi(t, e);
    }
  );
}
function jc(t, e) {
  var n = li(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", function (t) {
      var r;
      return n._o.tr(t, e).next(function (i) {
        return i
          ? ((r = i), Hu.resolve(r))
          : n._o.Bi(t).next(function (i) {
              return (
                (r = new ts(e, i, 0, t.bs)),
                n._o.ji(t, r).next(function () {
                  return r;
                })
              );
            });
      });
    })
    .then(function (t) {
      var r = n.fc.get(t.targetId);
      return (
        (null === r || t.Ot._(r.Ot) > 0) &&
          ((n.fc = n.fc.zt(t.targetId, t)), n.dc.set(e, t.targetId)),
        t
      );
    });
}
function Fc(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o, s, u;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (r = li(t)),
            (o = r.fc.get(e)),
            (s = n ? "readwrite" : "readwrite-primary"),
            (i.label = 1);
        case 1:
          return (
            i.trys.push([1, 4, , 5]),
            n
              ? [3, 3]
              : [
                  4,
                  r.persistence.runTransaction(
                    "Release target",
                    s,
                    function (t) {
                      return r.persistence.Ti.removeTarget(t, o);
                    }
                  ),
                ]
          );
        case 2:
          i.sent(), (i.label = 3);
        case 3:
          return [3, 5];
        case 4:
          if (!Wu((u = i.sent()))) throw u;
          return (
            si(
              "LocalStore",
              "Failed to update sequence numbers for target " + e + ": " + u
            ),
            [3, 5]
          );
        case 5:
          return (r.fc = r.fc.remove(e)), r.dc.delete(o.target), [2];
      }
    });
  });
}
function qc(t, e, n) {
  var r = li(t),
    i = xi.min(),
    o = Js();
  return r.persistence.runTransaction(
    "Execute query",
    "readonly",
    function (t) {
      return ((s = r),
      (u = t),
      (a = Yo(e)),
      (c = li(s)),
      (h = c.dc.get(a)),
      void 0 !== h ? Hu.resolve(c.fc.get(h)) : c._o.tr(u, a))
        .next(function (e) {
          if (e)
            return (
              (i = e.lastLimboFreeSnapshotVersion),
              r._o.rr(t, e.targetId).next(function (t) {
                o = t;
              })
            );
        })
        .next(function () {
          return r._c.Kr(t, e, n ? i : xi.min(), n ? o : Js());
        })
        .next(function (t) {
          return { documents: t, Rc: o };
        });
      var s, u, a, c, h;
    }
  );
}
function zc(t, e) {
  var n = li(t),
    r = li(n._o),
    i = n.fc.get(e);
  return i
    ? Promise.resolve(i.target)
    : n.persistence.runTransaction("Get target data", "readonly", function (t) {
        return r.Sn(t, e).next(function (t) {
          return t ? t.target : null;
        });
      });
}
function Bc(t) {
  var e = li(t);
  return e.persistence
    .runTransaction("Get new document changes", "readonly", function (t) {
      return (
        (n = e.Ec),
        (r = t),
        (i = e.wc),
        (o = li(n)),
        (s = Hs()),
        (u = Ca(i)),
        (a = wc(r)),
        (c = IDBKeyRange.lowerBound(u, !0)),
        a
          .hs({ index: ya.readTimeIndex, range: c }, function (t, e) {
            var n = Pa(o.Qt, e);
            (s = s.zt(n.key, n)), (u = e.readTime);
          })
          .next(function () {
            return { Go: s, readTime: La(u) };
          })
      );
      var n, r, i, o, s, u, a, c;
    })
    .then(function (t) {
      var n = t.Go,
        r = t.readTime;
      return (e.wc = r), n;
    });
}
function Gc(t) {
  return r(this, void 0, void 0, function () {
    var e;
    return i(this, function (n) {
      return [
        2,
        (e = li(t)).persistence
          .runTransaction(
            "Synchronize last document change read time",
            "readonly",
            function (t) {
              return (
                (e = wc(t)),
                (n = xi.min()),
                e
                  .hs(
                    { index: ya.readTimeIndex, reverse: !0 },
                    function (t, e, r) {
                      e.readTime && (n = La(e.readTime)), r.done();
                    }
                  )
                  .next(function () {
                    return n;
                  })
              );
              var e, n;
            }
          )
          .then(function (t) {
            e.wc = t;
          }),
      ];
    });
  });
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
 */ var Hc = (function () {
    function t(t) {
      (this.Qt = t), (this.Vc = new Map()), (this.bc = new Map());
    }
    return (
      (t.prototype.Os = function (t, e) {
        return Hu.resolve(this.Vc.get(e));
      }),
      (t.prototype.ks = function (t, e) {
        var n;
        return (
          this.Vc.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: mu(n.createTime),
          }),
          Hu.resolve()
        );
      }),
      (t.prototype.Ms = function (t, e) {
        return Hu.resolve(this.bc.get(e));
      }),
      (t.prototype.Ls = function (t, e) {
        return (
          this.bc.set(e.name, {
            name: (n = e).name,
            query: Fa(n.bundledQuery),
            readTime: mu(n.readTime),
          }),
          Hu.resolve()
        );
        var n;
      }),
      t
    );
  })(),
  Yc = (function () {
    function t() {
      (this.vc = new zs(Kc.Sc)), (this.Dc = new zs(Kc.Cc));
    }
    return (
      (t.prototype.et = function () {
        return this.vc.et();
      }),
      (t.prototype.nr = function (t, e) {
        var n = new Kc(t, e);
        (this.vc = this.vc.add(n)), (this.Dc = this.Dc.add(n));
      }),
      (t.prototype.xc = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.nr(t, e);
        });
      }),
      (t.prototype.ir = function (t, e) {
        this.Nc(new Kc(t, e));
      }),
      (t.prototype.$c = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.ir(t, e);
        });
      }),
      (t.prototype.Fc = function (t) {
        var e = this,
          n = new Ri(new ki([])),
          r = new Kc(n, t),
          i = new Kc(n, t + 1),
          o = [];
        return (
          this.Dc.me([r, i], function (t) {
            e.Nc(t), o.push(t.key);
          }),
          o
        );
      }),
      (t.prototype.Oc = function () {
        var t = this;
        this.vc.forEach(function (e) {
          return t.Nc(e);
        });
      }),
      (t.prototype.Nc = function (t) {
        (this.vc = this.vc.delete(t)), (this.Dc = this.Dc.delete(t));
      }),
      (t.prototype.kc = function (t) {
        var e = new Ri(new ki([])),
          n = new Kc(e, t),
          r = new Kc(e, t + 1),
          i = Js();
        return (
          this.Dc.me([n, r], function (t) {
            i = i.add(t.key);
          }),
          i
        );
      }),
      (t.prototype.Fi = function (t) {
        var e = new Kc(t, 0),
          n = this.vc.Re(e);
        return null !== n && t.isEqual(n.key);
      }),
      t
    );
  })(),
  Kc = (function () {
    function t(t, e) {
      (this.key = t), (this.Mc = e);
    }
    return (
      (t.Sc = function (t, e) {
        return Ri.H(t.key, e.key) || vi(t.Mc, e.Mc);
      }),
      (t.Cc = function (t, e) {
        return vi(t.Mc, e.Mc) || Ri.H(t.key, e.key);
      }),
      t
    );
  })(),
  Qc = (function () {
    function t(t, e) {
      (this.Ei = t),
        (this.Ti = e),
        (this.zo = []),
        (this.Lc = 1),
        (this.Bc = new zs(Kc.Sc));
    }
    return (
      (t.prototype.Ai = function (t) {
        return Hu.resolve(0 === this.zo.length);
      }),
      (t.prototype.Ri = function (t, e, n, r) {
        var i = this.Lc;
        this.Lc++, this.zo.length > 0 && this.zo[this.zo.length - 1];
        var o = new Da(i, e, n, r);
        this.zo.push(o);
        for (var s = 0, u = r; s < u.length; s++) {
          var a = u[s];
          (this.Bc = this.Bc.add(new Kc(a.key, i))),
            this.Ei.qs(t, a.key.path.X());
        }
        return Hu.resolve(o);
      }),
      (t.prototype.Pi = function (t, e) {
        return Hu.resolve(this.qc(e));
      }),
      (t.prototype.gi = function (t, e) {
        var n = e + 1,
          r = this.Uc(n),
          i = r < 0 ? 0 : r;
        return Hu.resolve(this.zo.length > i ? this.zo[i] : null);
      }),
      (t.prototype.Vi = function () {
        return Hu.resolve(0 === this.zo.length ? -1 : this.Lc - 1);
      }),
      (t.prototype.pi = function (t) {
        return Hu.resolve(this.zo.slice());
      }),
      (t.prototype.bi = function (t, e) {
        var n = this,
          r = new Kc(e, 0),
          i = new Kc(e, Number.POSITIVE_INFINITY),
          o = [];
        return (
          this.Bc.me([r, i], function (t) {
            var e = n.qc(t.Mc);
            o.push(e);
          }),
          Hu.resolve(o)
        );
      }),
      (t.prototype.vi = function (t, e) {
        var n = this,
          r = new zs(vi);
        return (
          e.forEach(function (t) {
            var e = new Kc(t, 0),
              i = new Kc(t, Number.POSITIVE_INFINITY);
            n.Bc.me([e, i], function (t) {
              r = r.add(t.Mc);
            });
          }),
          Hu.resolve(this.Qc(r))
        );
      }),
      (t.prototype.Di = function (t, e) {
        var n = e.path,
          r = n.length + 1,
          i = n;
        Ri.wt(i) || (i = i.child(""));
        var o = new Kc(new Ri(i), 0),
          s = new zs(vi);
        return (
          this.Bc.Ae(function (t) {
            var e = t.key.path;
            return !!n.nt(e) && (e.length === r && (s = s.add(t.Mc)), !0);
          }, o),
          Hu.resolve(this.Qc(s))
        );
      }),
      (t.prototype.Qc = function (t) {
        var e = this,
          n = [];
        return (
          t.forEach(function (t) {
            var r = e.qc(t);
            null !== r && n.push(r);
          }),
          n
        );
      }),
      (t.prototype.Ci = function (t, e) {
        var n = this;
        fi(0 === this.Kc(e.batchId, "removed")), this.zo.shift();
        var r = this.Bc;
        return Hu.forEach(e.mutations, function (i) {
          var o = new Kc(i.key, e.batchId);
          return (r = r.delete(o)), n.Ti.Ni(t, i.key);
        }).next(function () {
          n.Bc = r;
        });
      }),
      (t.prototype.xi = function (t) {}),
      (t.prototype.Fi = function (t, e) {
        var n = new Kc(e, 0),
          r = this.Bc.Re(n);
        return Hu.resolve(e.isEqual(r && r.key));
      }),
      (t.prototype.$i = function (t) {
        return this.zo.length, Hu.resolve();
      }),
      (t.prototype.Kc = function (t, e) {
        return this.Uc(t);
      }),
      (t.prototype.Uc = function (t) {
        return 0 === this.zo.length ? 0 : t - this.zo[0].batchId;
      }),
      (t.prototype.qc = function (t) {
        var e = this.Uc(t);
        return e < 0 || e >= this.zo.length ? null : this.zo[e];
      }),
      t
    );
  })(),
  Xc = (function () {
    function t(t, e) {
      (this.Ei = t), (this.Wc = e), (this.docs = new js(Ri.H)), (this.size = 0);
    }
    return (
      (t.prototype.ai = function (t, e, n) {
        var r = e.key,
          i = this.docs.get(r),
          o = i ? i.size : 0,
          s = this.Wc(e);
        return (
          (this.docs = this.docs.zt(r, { hi: e, size: s, readTime: n })),
          (this.size += s - o),
          this.Ei.qs(t, r.path.X())
        );
      }),
      (t.prototype.li = function (t) {
        var e = this.docs.get(t);
        e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
      }),
      (t.prototype._i = function (t, e) {
        var n = this.docs.get(e);
        return Hu.resolve(n ? n.hi : null);
      }),
      (t.prototype.getEntries = function (t, e) {
        var n = this,
          r = Ys();
        return (
          e.forEach(function (t) {
            var e = n.docs.get(t);
            r = r.zt(t, e ? e.hi : null);
          }),
          Hu.resolve(r)
        );
      }),
      (t.prototype.Kr = function (t, e, n) {
        for (
          var r = Qs(), i = new Ri(e.path.child("")), o = this.docs.ee(i);
          o.ce();

        ) {
          var s = o.oe(),
            u = s.key,
            a = s.value,
            c = a.hi,
            h = a.readTime;
          if (!e.path.nt(u.path)) break;
          h._(n) <= 0 || (c instanceof po && Jo(e, c) && (r = r.zt(c.key, c)));
        }
        return Hu.resolve(r);
      }),
      (t.prototype.jc = function (t, e) {
        return Hu.forEach(this.docs, function (t) {
          return e(t);
        });
      }),
      (t.prototype.Nr = function (t) {
        return new Wc(this);
      }),
      (t.prototype.Or = function (t) {
        return Hu.resolve(this.size);
      }),
      t
    );
  })(),
  Wc = (function (t) {
    function n(e) {
      var n = this;
      return ((n = t.call(this) || this).jr = e), n;
    }
    return (
      e(n, t),
      (n.prototype.wi = function (t) {
        var e = this,
          n = [];
        return (
          this.ri.forEach(function (r, i) {
            i && i.hi ? n.push(e.jr.ai(t, i.hi, e.ci(r))) : e.jr.li(r);
          }),
          Hu.Mn(n)
        );
      }),
      (n.prototype.fi = function (t, e) {
        return this.jr._i(t, e);
      }),
      (n.prototype.di = function (t, e) {
        return this.jr.getEntries(t, e);
      }),
      n
    );
  })(Za),
  Jc = (function () {
    function t(t) {
      (this.persistence = t),
        (this.Gc = new Ja(function (t) {
          return bo(t);
        }, wo)),
        (this.lastRemoteSnapshotVersion = xi.min()),
        (this.highestTargetId = 0),
        (this.zc = 0),
        (this.Hc = new Yc()),
        (this.targetCount = 0),
        (this.Jc = sc.Mi());
    }
    return (
      (t.prototype.In = function (t, e) {
        return (
          this.Gc.forEach(function (t, n) {
            return e(n);
          }),
          Hu.resolve()
        );
      }),
      (t.prototype.Qi = function (t) {
        return Hu.resolve(this.lastRemoteSnapshotVersion);
      }),
      (t.prototype.Ki = function (t) {
        return Hu.resolve(this.zc);
      }),
      (t.prototype.Bi = function (t) {
        return (
          (this.highestTargetId = this.Jc.next()),
          Hu.resolve(this.highestTargetId)
        );
      }),
      (t.prototype.Wi = function (t, e, n) {
        return (
          n && (this.lastRemoteSnapshotVersion = n),
          e > this.zc && (this.zc = e),
          Hu.resolve()
        );
      }),
      (t.prototype.Gi = function (t) {
        this.Gc.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId &&
          ((this.Jc = new sc(e)), (this.highestTargetId = e)),
          t.sequenceNumber > this.zc && (this.zc = t.sequenceNumber);
      }),
      (t.prototype.ji = function (t, e) {
        return this.Gi(e), (this.targetCount += 1), Hu.resolve();
      }),
      (t.prototype.Hi = function (t, e) {
        return this.Gi(e), Hu.resolve();
      }),
      (t.prototype.Ji = function (t, e) {
        return (
          this.Gc.delete(e.target),
          this.Hc.Fc(e.targetId),
          (this.targetCount -= 1),
          Hu.resolve()
        );
      }),
      (t.prototype.Xi = function (t, e, n) {
        var r = this,
          i = 0,
          o = [];
        return (
          this.Gc.forEach(function (s, u) {
            u.sequenceNumber <= e &&
              null === n.get(u.targetId) &&
              (r.Gc.delete(s), o.push(r.Yi(t, u.targetId)), i++);
          }),
          Hu.Mn(o).next(function () {
            return i;
          })
        );
      }),
      (t.prototype.Zi = function (t) {
        return Hu.resolve(this.targetCount);
      }),
      (t.prototype.tr = function (t, e) {
        var n = this.Gc.get(e) || null;
        return Hu.resolve(n);
      }),
      (t.prototype.er = function (t, e, n) {
        return this.Hc.xc(e, n), Hu.resolve();
      }),
      (t.prototype.sr = function (t, e, n) {
        this.Hc.$c(e, n);
        var r = this.persistence.Ti,
          i = [];
        return (
          r &&
            e.forEach(function (e) {
              i.push(r.Ni(t, e));
            }),
          Hu.Mn(i)
        );
      }),
      (t.prototype.Yi = function (t, e) {
        return this.Hc.Fc(e), Hu.resolve();
      }),
      (t.prototype.rr = function (t, e) {
        var n = this.Hc.kc(e);
        return Hu.resolve(n);
      }),
      (t.prototype.Fi = function (t, e) {
        return Hu.resolve(this.Hc.Fi(e));
      }),
      t
    );
  })(),
  Zc = (function () {
    function t(t, e) {
      var n,
        r = this;
      (this.Yc = {}),
        (this.so = new Di(0)),
        (this.io = !1),
        (this.io = !0),
        (this.Ti = t(this)),
        (this._o = new Jc(this)),
        (this.Ei = new Ga()),
        (this.fo =
          ((n = this.Ei),
          new Xc(n, function (t) {
            return r.Ti.Xc(t);
          }))),
        (this.Qt = new xa(e)),
        (this.wo = new Hc(this.Qt));
    }
    return (
      (t.prototype.start = function () {
        return Promise.resolve();
      }),
      (t.prototype.ko = function () {
        return (this.io = !1), Promise.resolve();
      }),
      Object.defineProperty(t.prototype, "Er", {
        get: function () {
          return this.io;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.Po = function () {}),
      (t.prototype.yo = function () {}),
      (t.prototype.Ko = function () {
        return this.Ei;
      }),
      (t.prototype.Qo = function (t) {
        var e = this.Yc[t.A()];
        return e || ((e = new Qc(this.Ei, this.Ti)), (this.Yc[t.A()] = e)), e;
      }),
      (t.prototype.Sr = function () {
        return this._o;
      }),
      (t.prototype.$r = function () {
        return this.fo;
      }),
      (t.prototype.Wo = function () {
        return this.wo;
      }),
      (t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        si("MemoryPersistence", "Starting transaction:", t);
        var i = new $c(this.so.next());
        return (
          this.Ti.Zc(),
          n(i)
            .next(function (t) {
              return r.Ti.ta(i).next(function () {
                return t;
              });
            })
            .On()
            .then(function (t) {
              return i.Vs(), t;
            })
        );
      }),
      (t.prototype.ea = function (t, e) {
        return Hu.Ln(
          Object.values(this.Yc).map(function (n) {
            return function () {
              return n.Fi(t, e);
            };
          })
        );
      }),
      t
    );
  })(),
  $c = (function (t) {
    function n(e) {
      var n = this;
      return ((n = t.call(this) || this).bs = e), n;
    }
    return e(n, t), n;
  })(ia),
  th = (function () {
    function t(t) {
      (this.persistence = t), (this.na = new Yc()), (this.sa = null);
    }
    return (
      (t.ia = function (e) {
        return new t(e);
      }),
      Object.defineProperty(t.prototype, "ra", {
        get: function () {
          if (this.sa) return this.sa;
          throw hi();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.nr = function (t, e, n) {
        return this.na.nr(n, e), this.ra.delete(n.toString()), Hu.resolve();
      }),
      (t.prototype.ir = function (t, e, n) {
        return this.na.ir(n, e), this.ra.add(n.toString()), Hu.resolve();
      }),
      (t.prototype.Ni = function (t, e) {
        return this.ra.add(e.toString()), Hu.resolve();
      }),
      (t.prototype.removeTarget = function (t, e) {
        var n = this;
        this.na.Fc(e.targetId).forEach(function (t) {
          return n.ra.add(t.toString());
        });
        var r = this.persistence.Sr();
        return r
          .rr(t, e.targetId)
          .next(function (t) {
            t.forEach(function (t) {
              return n.ra.add(t.toString());
            });
          })
          .next(function () {
            return r.Ji(t, e);
          });
      }),
      (t.prototype.Zc = function () {
        this.sa = new Set();
      }),
      (t.prototype.ta = function (t) {
        var e = this,
          n = this.persistence.$r().Nr();
        return Hu.forEach(this.ra, function (r) {
          var i = Ri._t(r);
          return e.oa(t, i).next(function (t) {
            t || n.li(i);
          });
        }).next(function () {
          return (e.sa = null), n.apply(t);
        });
      }),
      (t.prototype.Fr = function (t, e) {
        var n = this;
        return this.oa(t, e).next(function (t) {
          t ? n.ra.delete(e.toString()) : n.ra.add(e.toString());
        });
      }),
      (t.prototype.Xc = function (t) {
        return 0;
      }),
      (t.prototype.oa = function (t, e) {
        var n = this;
        return Hu.Ln([
          function () {
            return Hu.resolve(n.na.Fi(e));
          },
          function () {
            return n.persistence.Sr().Fi(t, e);
          },
          function () {
            return n.persistence.ea(t, e);
          },
        ]);
      }),
      t
    );
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
 */
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
 */ function eh(t, e) {
  return "firestore_clients_" + t + "_" + e;
}
function nh(t, e, n) {
  var r = "firestore_mutations_" + t + "_" + n;
  return e.m() && (r += "_" + e.uid), r;
}
function rh(t, e) {
  return "firestore_targets_" + t + "_" + e;
}
var ih = (function () {
    function t(t, e, n, r) {
      (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
    }
    return (
      (t.ca = function (e, n, r) {
        var i,
          o = JSON.parse(r),
          s =
            "object" == typeof o &&
            -1 !== ["pending", "acknowledged", "rejected"].indexOf(o.state) &&
            (void 0 === o.error || "object" == typeof o.error);
        return (
          s &&
            o.error &&
            (s =
              "string" == typeof o.error.message &&
              "string" == typeof o.error.code) &&
            (i = new wi(o.error.code, o.error.message)),
          s
            ? new t(e, n, o.state, i)
            : (ui(
                "SharedClientState",
                "Failed to parse mutation state for ID '" + n + "': " + r
              ),
              null)
        );
      }),
      (t.prototype.aa = function () {
        var t = { state: this.state, updateTimeMs: Date.now() };
        return (
          this.error &&
            (t.error = { code: this.error.code, message: this.error.message }),
          JSON.stringify(t)
        );
      }),
      t
    );
  })(),
  oh = (function () {
    function t(t, e, n) {
      (this.targetId = t), (this.state = e), (this.error = n);
    }
    return (
      (t.ca = function (e, n) {
        var r,
          i = JSON.parse(n),
          o =
            "object" == typeof i &&
            -1 !== ["not-current", "current", "rejected"].indexOf(i.state) &&
            (void 0 === i.error || "object" == typeof i.error);
        return (
          o &&
            i.error &&
            (o =
              "string" == typeof i.error.message &&
              "string" == typeof i.error.code) &&
            (r = new wi(i.error.code, i.error.message)),
          o
            ? new t(e, i.state, r)
            : (ui(
                "SharedClientState",
                "Failed to parse target state for ID '" + e + "': " + n
              ),
              null)
        );
      }),
      (t.prototype.aa = function () {
        var t = { state: this.state, updateTimeMs: Date.now() };
        return (
          this.error &&
            (t.error = { code: this.error.code, message: this.error.message }),
          JSON.stringify(t)
        );
      }),
      t
    );
  })(),
  sh = (function () {
    function t(t, e) {
      (this.clientId = t), (this.activeTargetIds = e);
    }
    return (
      (t.ca = function (e, n) {
        for (
          var r = JSON.parse(n),
            i = "object" == typeof r && r.activeTargetIds instanceof Array,
            o = $s(),
            s = 0;
          i && s < r.activeTargetIds.length;
          ++s
        )
          (i = Xi(r.activeTargetIds[s])), (o = o.add(r.activeTargetIds[s]));
        return i
          ? new t(e, o)
          : (ui(
              "SharedClientState",
              "Failed to parse client data for instance '" + e + "': " + n
            ),
            null);
      }),
      t
    );
  })(),
  uh = (function () {
    function t(t, e) {
      (this.clientId = t), (this.onlineState = e);
    }
    return (
      (t.ca = function (e) {
        var n = JSON.parse(e);
        return "object" == typeof n &&
          -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) &&
          "string" == typeof n.clientId
          ? new t(n.clientId, n.onlineState)
          : (ui("SharedClientState", "Failed to parse online state: " + e),
            null);
      }),
      t
    );
  })(),
  ah = (function () {
    function t() {
      this.activeTargetIds = $s();
    }
    return (
      (t.prototype.ua = function (t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
      }),
      (t.prototype.ha = function (t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
      }),
      (t.prototype.aa = function () {
        var t = {
          activeTargetIds: this.activeTargetIds.it(),
          updateTimeMs: Date.now(),
        };
        return JSON.stringify(t);
      }),
      t
    );
  })(),
  ch = (function () {
    function t(t, e, n, r, i) {
      (this.window = t),
        (this.Zr = e),
        (this.persistenceKey = n),
        (this.la = r),
        (this._a = null),
        (this.fa = null),
        (this.k = null),
        (this.da = this.wa.bind(this)),
        (this.Ea = new js(vi)),
        (this.Er = !1),
        (this.Ta = []);
      var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      (this.storage = this.window.localStorage),
        (this.currentUser = i),
        (this.Ia = eh(this.persistenceKey, this.la)),
        (this.ma = "firestore_sequence_number_" + this.persistenceKey),
        (this.Ea = this.Ea.zt(this.la, new ah())),
        (this.Aa = new RegExp("^firestore_clients_" + o + "_([^_]*)$")),
        (this.Ra = new RegExp(
          "^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"
        )),
        (this.Pa = new RegExp("^firestore_targets_" + o + "_(\\d+)$")),
        (this.ya = (function (t) {
          return "firestore_online_state_" + t;
        })(this.persistenceKey)),
        (this.ga = (function (t) {
          return "firestore_bundle_loaded_" + t;
        })(this.persistenceKey)),
        this.window.addEventListener("storage", this.da);
    }
    return (
      (t.Kn = function (t) {
        return !(!t || !t.localStorage);
      }),
      (t.prototype.start = function () {
        return r(this, void 0, void 0, function () {
          var t,
            e,
            n,
            r,
            o,
            s,
            u,
            a,
            c,
            h,
            f,
            l = this;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this._a.Uo()];
              case 1:
                for (t = i.sent(), e = 0, n = t; e < n.length; e++)
                  (r = n[e]) !== this.la &&
                    (o = this.getItem(eh(this.persistenceKey, r))) &&
                    (s = sh.ca(r, o)) &&
                    (this.Ea = this.Ea.zt(s.clientId, s));
                for (
                  this.Va(),
                    (u = this.storage.getItem(this.ya)) &&
                      (a = this.pa(u)) &&
                      this.ba(a),
                    c = 0,
                    h = this.Ta;
                  c < h.length;
                  c++
                )
                  (f = h[c]), this.wa(f);
                return (
                  (this.Ta = []),
                  this.window.addEventListener("unload", function () {
                    return l.ko();
                  }),
                  (this.Er = !0),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype.B = function (t) {
        this.setItem(this.ma, JSON.stringify(t));
      }),
      (t.prototype.va = function () {
        return this.Sa(this.Ea);
      }),
      (t.prototype.Da = function (t) {
        var e = !1;
        return (
          this.Ea.forEach(function (n, r) {
            r.activeTargetIds.has(t) && (e = !0);
          }),
          e
        );
      }),
      (t.prototype.Ca = function (t) {
        this.xa(t, "pending");
      }),
      (t.prototype.Na = function (t, e, n) {
        this.xa(t, e, n), this.$a(t);
      }),
      (t.prototype.Fa = function (t) {
        var e = "not-current";
        if (this.Da(t)) {
          var n = this.storage.getItem(rh(this.persistenceKey, t));
          if (n) {
            var r = oh.ca(t, n);
            r && (e = r.state);
          }
        }
        return this.Oa.ua(t), this.Va(), e;
      }),
      (t.prototype.ka = function (t) {
        this.Oa.ha(t), this.Va();
      }),
      (t.prototype.Ma = function (t) {
        return this.Oa.activeTargetIds.has(t);
      }),
      (t.prototype.La = function (t) {
        this.removeItem(rh(this.persistenceKey, t));
      }),
      (t.prototype.Ba = function (t, e, n) {
        this.qa(t, e, n);
      }),
      (t.prototype.Ua = function (t, e, n) {
        var r = this;
        e.forEach(function (t) {
          r.$a(t);
        }),
          (this.currentUser = t),
          n.forEach(function (t) {
            r.Ca(t);
          });
      }),
      (t.prototype.Qa = function (t) {
        this.Ka(t);
      }),
      (t.prototype.Wa = function () {
        this.ja();
      }),
      (t.prototype.ko = function () {
        this.Er &&
          (this.window.removeEventListener("storage", this.da),
          this.removeItem(this.Ia),
          (this.Er = !1));
      }),
      (t.prototype.getItem = function (t) {
        var e = this.storage.getItem(t);
        return si("SharedClientState", "READ", t, e), e;
      }),
      (t.prototype.setItem = function (t, e) {
        si("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
      }),
      (t.prototype.removeItem = function (t) {
        si("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
      }),
      (t.prototype.wa = function (t) {
        var e = this,
          n = t;
        if (n.storageArea === this.storage) {
          if (
            (si("SharedClientState", "EVENT", n.key, n.newValue),
            n.key === this.Ia)
          )
            return void ui(
              "Received WebStorage notification for local change. Another client might have garbage-collected our state"
            );
          this.Zr.po(function () {
            return r(e, void 0, void 0, function () {
              var t, e, r, o, s, u;
              return i(this, function (i) {
                if (this.Er) {
                  if (null !== n.key)
                    if (this.Aa.test(n.key)) {
                      if (null == n.newValue)
                        return (t = this.Ga(n.key)), [2, this.za(t, null)];
                      if ((e = this.Ha(n.key, n.newValue)))
                        return [2, this.za(e.clientId, e)];
                    } else if (this.Ra.test(n.key)) {
                      if (
                        null !== n.newValue &&
                        (r = this.Ja(n.key, n.newValue))
                      )
                        return [2, this.Ya(r)];
                    } else if (this.Pa.test(n.key)) {
                      if (
                        null !== n.newValue &&
                        (o = this.Xa(n.key, n.newValue))
                      )
                        return [2, this.Za(o)];
                    } else if (n.key === this.ya) {
                      if (null !== n.newValue && (s = this.pa(n.newValue)))
                        return [2, this.ba(s)];
                    } else if (n.key === this.ma)
                      (u = (function (t) {
                        var e = Di.q;
                        if (null != t)
                          try {
                            var n = JSON.parse(t);
                            fi("number" == typeof n), (e = n);
                          } catch (r) {
                            ui(
                              "SharedClientState",
                              "Failed to read sequence number from WebStorage",
                              r
                            );
                          }
                        return e;
                      })(n.newValue)) !== Di.q && this.k(u);
                    else if (n.key === this.ga) return [2, this._a.tu()];
                } else this.Ta.push(n);
                return [2];
              });
            });
          });
        }
      }),
      Object.defineProperty(t.prototype, "Oa", {
        get: function () {
          return this.Ea.get(this.la);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.Va = function () {
        this.setItem(this.Ia, this.Oa.aa());
      }),
      (t.prototype.xa = function (t, e, n) {
        var r = new ih(this.currentUser, t, e, n),
          i = nh(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.aa());
      }),
      (t.prototype.$a = function (t) {
        var e = nh(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
      }),
      (t.prototype.Ka = function (t) {
        var e = { clientId: this.la, onlineState: t };
        this.storage.setItem(this.ya, JSON.stringify(e));
      }),
      (t.prototype.qa = function (t, e, n) {
        var r = rh(this.persistenceKey, t),
          i = new oh(t, e, n);
        this.setItem(r, i.aa());
      }),
      (t.prototype.ja = function () {
        this.setItem(this.ga, "value-not-used");
      }),
      (t.prototype.Ga = function (t) {
        var e = this.Aa.exec(t);
        return e ? e[1] : null;
      }),
      (t.prototype.Ha = function (t, e) {
        var n = this.Ga(t);
        return sh.ca(n, e);
      }),
      (t.prototype.Ja = function (t, e) {
        var n = this.Ra.exec(t),
          r = Number(n[1]),
          i = void 0 !== n[2] ? n[2] : null;
        return ih.ca(new _i(i), r, e);
      }),
      (t.prototype.Xa = function (t, e) {
        var n = this.Pa.exec(t),
          r = Number(n[1]);
        return oh.ca(r, e);
      }),
      (t.prototype.pa = function (t) {
        return uh.ca(t);
      }),
      (t.prototype.Ya = function (t) {
        return r(this, void 0, void 0, function () {
          return i(this, function (e) {
            return t.user.uid === this.currentUser.uid
              ? [2, this._a.eu(t.batchId, t.state, t.error)]
              : (si(
                  "SharedClientState",
                  "Ignoring mutation for non-active user " + t.user.uid
                ),
                [2]);
          });
        });
      }),
      (t.prototype.Za = function (t) {
        return this._a.nu(t.targetId, t.state, t.error);
      }),
      (t.prototype.za = function (t, e) {
        var n = this,
          r = e ? this.Ea.zt(t, e) : this.Ea.remove(t),
          i = this.Sa(this.Ea),
          o = this.Sa(r),
          s = [],
          u = [];
        return (
          o.forEach(function (t) {
            i.has(t) || s.push(t);
          }),
          i.forEach(function (t) {
            o.has(t) || u.push(t);
          }),
          this._a.su(s, u).then(function () {
            n.Ea = r;
          })
        );
      }),
      (t.prototype.ba = function (t) {
        this.Ea.get(t.clientId) && this.fa(t.onlineState);
      }),
      (t.prototype.Sa = function (t) {
        var e = $s();
        return (
          t.forEach(function (t, n) {
            e = e.Pe(n.activeTargetIds);
          }),
          e
        );
      }),
      t
    );
  })(),
  hh = (function () {
    function t() {
      (this.iu = new ah()), (this.ru = {}), (this.fa = null), (this.k = null);
    }
    return (
      (t.prototype.Ca = function (t) {}),
      (t.prototype.Na = function (t, e, n) {}),
      (t.prototype.Fa = function (t) {
        return this.iu.ua(t), this.ru[t] || "not-current";
      }),
      (t.prototype.Ba = function (t, e, n) {
        this.ru[t] = e;
      }),
      (t.prototype.ka = function (t) {
        this.iu.ha(t);
      }),
      (t.prototype.Ma = function (t) {
        return this.iu.activeTargetIds.has(t);
      }),
      (t.prototype.La = function (t) {
        delete this.ru[t];
      }),
      (t.prototype.va = function () {
        return this.iu.activeTargetIds;
      }),
      (t.prototype.Da = function (t) {
        return this.iu.activeTargetIds.has(t);
      }),
      (t.prototype.start = function () {
        return (this.iu = new ah()), Promise.resolve();
      }),
      (t.prototype.Ua = function (t, e, n) {}),
      (t.prototype.Qa = function (t) {}),
      (t.prototype.ko = function () {}),
      (t.prototype.B = function (t) {}),
      (t.prototype.Wa = function () {}),
      t
    );
  })(),
  fh = (function () {
    function t() {}
    return (
      (t.prototype.ou = function (t) {}), (t.prototype.ko = function () {}), t
    );
  })(),
  lh = (function () {
    function t() {
      var t = this;
      (this.cu = function () {
        return t.au();
      }),
        (this.uu = function () {
          return t.hu();
        }),
        (this.lu = []),
        this._u();
    }
    return (
      (t.prototype.ou = function (t) {
        this.lu.push(t);
      }),
      (t.prototype.ko = function () {
        window.removeEventListener("online", this.cu),
          window.removeEventListener("offline", this.uu);
      }),
      (t.prototype._u = function () {
        window.addEventListener("online", this.cu),
          window.addEventListener("offline", this.uu);
      }),
      (t.prototype.au = function () {
        si("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.lu; t < e.length; t++) (0, e[t])(0);
      }),
      (t.prototype.hu = function () {
        si("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.lu; t < e.length; t++) (0, e[t])(1);
      }),
      (t.Kn = function () {
        return (
          "undefined" != typeof window &&
          void 0 !== window.addEventListener &&
          void 0 !== window.removeEventListener
        );
      }),
      t
    );
  })(),
  ph = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
  },
  dh = (function () {
    function t(t) {
      (this.fu = t.fu), (this.du = t.du);
    }
    return (
      (t.prototype.wu = function (t) {
        this.Eu = t;
      }),
      (t.prototype.Tu = function (t) {
        this.Iu = t;
      }),
      (t.prototype.onMessage = function (t) {
        this.mu = t;
      }),
      (t.prototype.close = function () {
        this.du();
      }),
      (t.prototype.send = function (t) {
        this.fu(t);
      }),
      (t.prototype.Au = function () {
        this.Eu();
      }),
      (t.prototype.Ru = function (t) {
        this.Iu(t);
      }),
      (t.prototype.Pu = function (t) {
        this.mu(t);
      }),
      t
    );
  })(),
  vh = (function (t) {
    function n(e) {
      var n = this;
      return (
        ((n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling),
        (n.i = e.i),
        n
      );
    }
    return (
      e(n, t),
      (n.prototype.Su = function (t, e, n, r) {
        return new Promise(function (i, o) {
          var s = new ei();
          s.listenOnce(Wr.COMPLETE, function () {
            try {
              switch (s.getLastErrorCode()) {
                case Xr.NO_ERROR:
                  var e = s.getResponseJson();
                  si("Connection", "XHR received:", JSON.stringify(e)), i(e);
                  break;
                case Xr.TIMEOUT:
                  si("Connection", 'RPC "' + t + '" timed out'),
                    o(new wi(bi.DEADLINE_EXCEEDED, "Request time out"));
                  break;
                case Xr.HTTP_ERROR:
                  var n = s.getStatus();
                  if (
                    (si(
                      "Connection",
                      'RPC "' + t + '" failed with status:',
                      n,
                      "response text:",
                      s.getResponseText()
                    ),
                    n > 0)
                  ) {
                    var r = s.getResponseJson().error;
                    if (r && r.status && r.message) {
                      var u =
                        ((a = r.status),
                        (c = a.toLowerCase().replace(/_/g, "-")),
                        Object.values(bi).indexOf(c) >= 0 ? c : bi.UNKNOWN);
                      o(new wi(u, r.message));
                    } else
                      o(
                        new wi(
                          bi.UNKNOWN,
                          "Server responded with status " + s.getStatus()
                        )
                      );
                  } else o(new wi(bi.UNAVAILABLE, "Connection failed."));
                  break;
                default:
                  hi();
              }
            } finally {
              si("Connection", 'RPC "' + t + '" completed.');
            }
            var a, c;
          });
          var u = JSON.stringify(r);
          s.send(e, "POST", u, n, 15);
        });
      }),
      (n.prototype.Cu = function (t, e) {
        var n,
          r,
          i = [
            this.gu,
            "/",
            "google.firestore.v1.Firestore",
            "/",
            t,
            "/channel",
          ],
          o = new Gr(),
          s = He(),
          u = {
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
              database:
                "projects/" +
                this.t.projectId +
                "/databases/" +
                this.t.database,
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.i,
          };
        this.vu(u.initMessageHeaders, e),
          ("undefined" != typeof window &&
            (window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())) ||
            ("object" == typeof navigator &&
              "ReactNative" === navigator.product) ||
            h().indexOf("Electron/") >= 0 ||
            (r = h()).indexOf("MSIE ") >= 0 ||
            r.indexOf("Trident/") >= 0 ||
            h().indexOf("MSAppHost/") >= 0 ||
            ("object" ==
              typeof (n =
                "object" == typeof chrome
                  ? chrome.runtime
                  : "object" == typeof browser
                  ? browser.runtime
                  : void 0) &&
              void 0 !== n.id) ||
            (u.httpHeadersOverwriteParam = "$httpHeaders");
        var a = i.join("");
        si("Connection", "Creating WebChannel: " + a, u);
        var c = o.createWebChannel(a, u),
          f = !1,
          l = !1,
          p = new dh({
            fu: function (t) {
              l
                ? si(
                    "Connection",
                    "Not sending because WebChannel is closed:",
                    t
                  )
                : (f ||
                    (si("Connection", "Opening WebChannel transport."),
                    c.open(),
                    (f = !0)),
                  si("Connection", "WebChannel sending:", t),
                  c.send(t));
            },
            du: function () {
              return c.close();
            },
          }),
          d = function (t, e, n) {
            t.listen(e, function (t) {
              try {
                n(t);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 0);
              }
            });
          };
        return (
          d(c, ti.EventType.OPEN, function () {
            l || si("Connection", "WebChannel transport opened.");
          }),
          d(c, ti.EventType.CLOSE, function () {
            l ||
              ((l = !0),
              si("Connection", "WebChannel transport closed"),
              p.Ru());
          }),
          d(c, ti.EventType.ERROR, function (t) {
            l ||
              ((l = !0),
              ai("Connection", "WebChannel transport errored:", t),
              p.Ru(
                new wi(bi.UNAVAILABLE, "The operation could not be completed")
              ));
          }),
          d(c, ti.EventType.MESSAGE, function (t) {
            var e;
            if (!l) {
              var n = t.data[0];
              fi(!!n);
              var r = n,
                i =
                  r.error ||
                  (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
              if (i) {
                si("Connection", "WebChannel received error:", i);
                var o = i.status,
                  s = (function (t) {
                    var e = ks[t];
                    if (void 0 !== e) return Ms(e);
                  })(o),
                  u = i.message;
                void 0 === s &&
                  ((s = bi.INTERNAL),
                  (u =
                    "Unknown error status: " +
                    o +
                    " with message " +
                    i.message)),
                  (l = !0),
                  p.Ru(new wi(s, u)),
                  c.close();
              } else si("Connection", "WebChannel received:", n), p.Pu(n);
            }
          }),
          d(s, Jr.STAT_EVENT, function (t) {
            t.stat === Zr
              ? si("Connection", "Detected buffering proxy")
              : t.stat === $r &&
                si("Connection", "Detected no buffering proxy");
          }),
          setTimeout(function () {
            p.Au();
          }, 0),
          p
        );
      }),
      n
    );
  })(
    (function () {
      function t(t) {
        (this.yu = t), (this.t = t.t);
        var e = t.ssl ? "https" : "http";
        (this.gu = e + "://" + t.host),
          (this.Vu =
            "projects/" +
            this.t.projectId +
            "/databases/" +
            this.t.database +
            "/documents");
      }
      return (
        (t.prototype.pu = function (t, e, n, r) {
          var i = this.bu(t, e);
          si("RestConnection", "Sending: ", i, n);
          var o = {};
          return (
            this.vu(o, r),
            this.Su(t, i, o, n).then(
              function (t) {
                return si("RestConnection", "Received: ", t), t;
              },
              function (e) {
                throw (
                  (ai(
                    "RestConnection",
                    t + " failed with error: ",
                    e,
                    "url: ",
                    i,
                    "request:",
                    n
                  ),
                  e)
                );
              }
            )
          );
        }),
        (t.prototype.Du = function (t, e, n, r) {
          return this.pu(t, e, n, r);
        }),
        (t.prototype.vu = function (t, e) {
          if (
            ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.2.9"),
            (t["Content-Type"] = "text/plain"),
            e)
          )
            for (var n in e.g) e.g.hasOwnProperty(n) && (t[n] = e.g[n]);
        }),
        (t.prototype.bu = function (t, e) {
          var n = ph[t];
          return this.gu + "/v1/" + e + ":" + n;
        }),
        t
      );
    })()
  );
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
 */
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
 */ function yh() {
  return "undefined" != typeof window ? window : null;
}
function gh() {
  return "undefined" != typeof document ? document : null;
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
 */ function mh(t) {
  return new du(t, !0);
}
var bh = (function () {
    function t(t, e, n, r, i) {
      void 0 === n && (n = 1e3),
        void 0 === r && (r = 1.5),
        void 0 === i && (i = 6e4),
        (this.Zr = t),
        (this.fs = e),
        (this.xu = n),
        (this.Nu = r),
        (this.$u = i),
        (this.Fu = 0),
        (this.Ou = null),
        (this.ku = Date.now()),
        this.reset();
    }
    return (
      (t.prototype.reset = function () {
        this.Fu = 0;
      }),
      (t.prototype.Mu = function () {
        this.Fu = this.$u;
      }),
      (t.prototype.Lu = function (t) {
        var e = this;
        this.cancel();
        var n = Math.floor(this.Fu + this.Bu()),
          r = Math.max(0, Date.now() - this.ku),
          i = Math.max(0, n - r);
        i > 0 &&
          si(
            "ExponentialBackoff",
            "Backing off for " +
              i +
              " ms (base delay: " +
              this.Fu +
              " ms, delay with jitter: " +
              n +
              " ms, last attempt: " +
              r +
              " ms ago)"
          ),
          (this.Ou = this.Zr.Tr(this.fs, i, function () {
            return (e.ku = Date.now()), t();
          })),
          (this.Fu *= this.Nu),
          this.Fu < this.xu && (this.Fu = this.xu),
          this.Fu > this.$u && (this.Fu = this.$u);
      }),
      (t.prototype.qu = function () {
        null !== this.Ou && (this.Ou.Rs(), (this.Ou = null));
      }),
      (t.prototype.cancel = function () {
        null !== this.Ou && (this.Ou.cancel(), (this.Ou = null));
      }),
      (t.prototype.Bu = function () {
        return (Math.random() - 0.5) * this.Fu;
      }),
      t
    );
  })(),
  wh = (function () {
    function t(t, e, n, r, i, o) {
      (this.Zr = t),
        (this.Uu = n),
        (this.Qu = r),
        (this.Ku = i),
        (this.listener = o),
        (this.state = 0),
        (this.Wu = 0),
        (this.ju = null),
        (this.stream = null),
        (this.Gu = new bh(t, e));
    }
    return (
      (t.prototype.zu = function () {
        return 1 === this.state || 2 === this.state || 4 === this.state;
      }),
      (t.prototype.Hu = function () {
        return 2 === this.state;
      }),
      (t.prototype.start = function () {
        3 !== this.state ? this.auth() : this.Ju();
      }),
      (t.prototype.stop = function () {
        return r(this, void 0, void 0, function () {
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return this.zu() ? [4, this.close(0)] : [3, 2];
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.Yu = function () {
        (this.state = 0), this.Gu.reset();
      }),
      (t.prototype.Xu = function () {
        var t = this;
        this.Hu() &&
          null === this.ju &&
          (this.ju = this.Zr.Tr(this.Uu, 6e4, function () {
            return t.Zu();
          }));
      }),
      (t.prototype.th = function (t) {
        this.eh(), this.stream.send(t);
      }),
      (t.prototype.Zu = function () {
        return r(this, void 0, void 0, function () {
          return i(this, function (t) {
            return this.Hu() ? [2, this.close(0)] : [2];
          });
        });
      }),
      (t.prototype.eh = function () {
        this.ju && (this.ju.cancel(), (this.ju = null));
      }),
      (t.prototype.close = function (t, e) {
        return r(this, void 0, void 0, function () {
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.eh(),
                  this.Gu.cancel(),
                  this.Wu++,
                  3 !== t
                    ? this.Gu.reset()
                    : e && e.code === bi.RESOURCE_EXHAUSTED
                    ? (ui(e.toString()),
                      ui(
                        "Using maximum backoff delay to prevent overloading the backend."
                      ),
                      this.Gu.Mu())
                    : e && e.code === bi.UNAUTHENTICATED && this.Ku.p(),
                  null !== this.stream &&
                    (this.nh(), this.stream.close(), (this.stream = null)),
                  (this.state = t),
                  [4, this.listener.Tu(e)]
                );
              case 1:
                return n.sent(), [2];
            }
          });
        });
      }),
      (t.prototype.nh = function () {}),
      (t.prototype.auth = function () {
        var t = this;
        this.state = 1;
        var e = this.sh(this.Wu),
          n = this.Wu;
        this.Ku.getToken().then(
          function (e) {
            t.Wu === n && t.ih(e);
          },
          function (n) {
            e(function () {
              var e = new wi(
                bi.UNKNOWN,
                "Fetching auth token failed: " + n.message
              );
              return t.rh(e);
            });
          }
        );
      }),
      (t.prototype.ih = function (t) {
        var e = this,
          n = this.sh(this.Wu);
        (this.stream = this.oh(t)),
          this.stream.wu(function () {
            n(function () {
              return (e.state = 2), e.listener.wu();
            });
          }),
          this.stream.Tu(function (t) {
            n(function () {
              return e.rh(t);
            });
          }),
          this.stream.onMessage(function (t) {
            n(function () {
              return e.onMessage(t);
            });
          });
      }),
      (t.prototype.Ju = function () {
        var t = this;
        (this.state = 4),
          this.Gu.Lu(function () {
            return r(t, void 0, void 0, function () {
              return i(this, function (t) {
                return (this.state = 0), this.start(), [2];
              });
            });
          });
      }),
      (t.prototype.rh = function (t) {
        return (
          si("PersistentStream", "close with error: " + t),
          (this.stream = null),
          this.close(3, t)
        );
      }),
      (t.prototype.sh = function (t) {
        var e = this;
        return function (n) {
          e.Zr.Ps(function () {
            return e.Wu === t
              ? n()
              : (si(
                  "PersistentStream",
                  "stream callback skipped by getCloseGuardedDispatcher."
                ),
                Promise.resolve());
          });
        };
      }),
      t
    );
  })(),
  Eh = (function (t) {
    function n(e, n, r, i, o) {
      var s = this;
      return (
        ((s =
          t.call(
            this,
            e,
            "listen_stream_connection_backoff",
            "listen_stream_idle",
            n,
            r,
            o
          ) || this).Qt = i),
        s
      );
    }
    return (
      e(n, t),
      (n.prototype.oh = function (t) {
        return this.Qu.Cu("Listen", t);
      }),
      (n.prototype.onMessage = function (t) {
        this.Gu.reset();
        var e = (function (t, e) {
            var n, r;
            if ("targetChange" in e) {
              e.targetChange;
              var i =
                  "NO_CHANGE" ===
                  (r = e.targetChange.targetChangeType || "NO_CHANGE")
                    ? 0
                    : "ADD" === r
                    ? 1
                    : "REMOVE" === r
                    ? 2
                    : "CURRENT" === r
                    ? 3
                    : "RESET" === r
                    ? 4
                    : hi(),
                o = e.targetChange.targetIds || [],
                s = (function (t, e) {
                  return t.Bt
                    ? (fi(void 0 === e || "string" == typeof e),
                      mi.fromBase64String(e || ""))
                    : (fi(void 0 === e || e instanceof Uint8Array),
                      mi.fromUint8Array(e || new Uint8Array()));
                })(t, e.targetChange.resumeToken),
                u =
                  (a = e.targetChange.cause) &&
                  (function (t) {
                    var e = void 0 === t.code ? bi.UNKNOWN : Ms(t.code);
                    return new wi(e, t.message || "");
                  })(a);
              n = new uu(i, o, s, u || null);
            } else if ("documentChange" in e) {
              e.documentChange,
                (i = e.documentChange).document,
                i.document.name,
                i.document.updateTime,
                (o = _u(t, i.document.name)),
                (s = mu(i.document.updateTime));
              var a = new co({ mapValue: { fields: i.document.fields } }),
                c = ((u = new po(o, s, a, {})), i.targetIds || []),
                h = i.removedTargetIds || [];
              n = new ou(c, h, u.key, u);
            } else if ("documentDelete" in e)
              e.documentDelete,
                (i = e.documentDelete).document,
                (o = _u(t, i.document)),
                (s = i.readTime ? mu(i.readTime) : xi.min()),
                (a = new vo(o, s)),
                (u = i.removedTargetIds || []),
                (n = new ou([], u, a.key, a));
            else if ("documentRemove" in e)
              e.documentRemove,
                (i = e.documentRemove).document,
                (o = _u(t, i.document)),
                (s = i.removedTargetIds || []),
                (n = new ou([], s, o, null));
            else {
              if (!("filter" in e)) return hi();
              e.filter;
              var f = e.filter;
              f.targetId,
                (i = f.count || 0),
                (o = new Vs(i)),
                (s = f.targetId),
                (n = new su(s, o));
            }
            return n;
          })(this.Qt, t),
          n = (function (t) {
            if (!("targetChange" in t)) return xi.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length
              ? xi.min()
              : e.readTime
              ? mu(e.readTime)
              : xi.min();
          })(t);
        return this.listener.ah(e, n);
      }),
      (n.prototype.uh = function (t) {
        var e,
          n,
          r,
          i,
          o = {};
        (o.database = Nu(this.Qt)),
          (o.addTarget =
            ((e = this.Qt),
            (i = (n = t).target),
            ((r = Eo(i)
              ? { documents: xu(e, i) }
              : { query: Pu(e, i) }).targetId = n.targetId),
            n.resumeToken.l() > 0
              ? (r.resumeToken = yu(e, n.resumeToken))
              : n.Ot._(xi.min()) > 0 && (r.readTime = vu(e, n.Ot.j())),
            r));
        var s = (function (t, e) {
          var n = (function (t, e) {
            switch (e) {
              case 0:
                return null;
              case 1:
                return "existence-filter-mismatch";
              case 2:
                return "limbo-document";
              default:
                return hi();
            }
          })(0, e.Ft);
          return null == n ? null : { "goog-listen-tags": n };
        })(this.Qt, t);
        s && (o.labels = s), this.th(o);
      }),
      (n.prototype.hh = function (t) {
        var e = {};
        (e.database = Nu(this.Qt)), (e.removeTarget = t), this.th(e);
      }),
      n
    );
  })(wh),
  _h = (function (t) {
    function n(e, n, r, i, o) {
      var s = this;
      return (
        ((s =
          t.call(
            this,
            e,
            "write_stream_connection_backoff",
            "write_stream_idle",
            n,
            r,
            o
          ) || this).Qt = i),
        (s.lh = !1),
        s
      );
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "_h", {
        get: function () {
          return this.lh;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.start = function () {
        (this.lh = !1),
          (this.lastStreamToken = void 0),
          t.prototype.start.call(this);
      }),
      (n.prototype.nh = function () {
        this.lh && this.fh([]);
      }),
      (n.prototype.oh = function (t) {
        return this.Qu.Cu("Write", t);
      }),
      (n.prototype.onMessage = function (t) {
        if (
          (fi(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.lh)
        ) {
          this.Gu.reset();
          var e =
              ((r = t.writeResults),
              (i = t.commitTime),
              r && r.length > 0
                ? (fi(void 0 !== i),
                  r.map(function (t) {
                    return (function (t, e) {
                      var n = t.updateTime ? mu(t.updateTime) : mu(e);
                      n.isEqual(xi.min()) && (n = mu(e));
                      var r = null;
                      return (
                        t.transformResults &&
                          t.transformResults.length > 0 &&
                          (r = t.transformResults),
                        new gs(n, r)
                      );
                    })(t, i);
                  }))
                : []),
            n = mu(t.commitTime);
          return this.listener.dh(n, e);
        }
        var r, i;
        return (
          fi(!t.writeResults || 0 === t.writeResults.length),
          (this.lh = !0),
          this.listener.wh()
        );
      }),
      (n.prototype.Eh = function () {
        var t = {};
        (t.database = Nu(this.Qt)), this.th(t);
      }),
      (n.prototype.fh = function (t) {
        var e = this,
          n = {
            streamToken: this.lastStreamToken,
            writes: t.map(function (t) {
              return Du(e.Qt, t);
            }),
          };
        this.th(n);
      }),
      n
    );
  })(wh),
  Ih = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this) || this).credentials = e),
        (i.Qu = n),
        (i.Qt = r),
        (i.Th = !1),
        i
      );
    }
    return (
      e(n, t),
      (n.prototype.Ih = function () {
        if (this.Th)
          throw new wi(
            bi.FAILED_PRECONDITION,
            "The client has already been terminated."
          );
      }),
      (n.prototype.pu = function (t, e, n) {
        var r = this;
        return (
          this.Ih(),
          this.credentials
            .getToken()
            .then(function (i) {
              return r.Qu.pu(t, e, n, i);
            })
            .catch(function (t) {
              throw (t.code === bi.UNAUTHENTICATED && r.credentials.p(), t);
            })
        );
      }),
      (n.prototype.Du = function (t, e, n) {
        var r = this;
        return (
          this.Ih(),
          this.credentials
            .getToken()
            .then(function (i) {
              return r.Qu.Du(t, e, n, i);
            })
            .catch(function (t) {
              throw (t.code === bi.UNAUTHENTICATED && r.credentials.p(), t);
            })
        );
      }),
      (n.prototype.terminate = function () {
        this.Th = !1;
      }),
      n
    );
  })(function () {}),
  Th = (function () {
    function t(t, e) {
      (this._s = t),
        (this.fa = e),
        (this.state = "Unknown"),
        (this.mh = 0),
        (this.Ah = null),
        (this.Rh = !0);
    }
    return (
      (t.prototype.Ph = function () {
        var t = this;
        0 === this.mh &&
          (this.yh("Unknown"),
          (this.Ah = this._s.Tr("online_state_timeout", 1e4, function () {
            return (
              (t.Ah = null),
              t.gh("Backend didn't respond within 10 seconds."),
              t.yh("Offline"),
              Promise.resolve()
            );
          })));
      }),
      (t.prototype.Vh = function (t) {
        "Online" === this.state
          ? this.yh("Unknown")
          : (this.mh++,
            this.mh >= 1 &&
              (this.ph(),
              this.gh(
                "Connection failed 1 times. Most recent error: " + t.toString()
              ),
              this.yh("Offline")));
      }),
      (t.prototype.set = function (t) {
        this.ph(), (this.mh = 0), "Online" === t && (this.Rh = !1), this.yh(t);
      }),
      (t.prototype.yh = function (t) {
        t !== this.state && ((this.state = t), this.fa(t));
      }),
      (t.prototype.gh = function (t) {
        var e =
          "Could not reach Cloud Firestore backend. " +
          t +
          "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Rh ? (ui(e), (this.Rh = !1)) : si("OnlineStateTracker", e);
      }),
      (t.prototype.ph = function () {
        null !== this.Ah && (this.Ah.cancel(), (this.Ah = null));
      }),
      t
    );
  })(),
  Nh = function (t, e, n, o, s) {
    var u = this;
    (this.bh = t),
      (this.Sh = e),
      (this._s = n),
      (this.Dh = {}),
      (this.Ch = []),
      (this.xh = new Map()),
      (this.Nh = new Set()),
      (this.$h = []),
      (this.Fh = s),
      this.Fh.ou(function (t) {
        n.Ps(function () {
          return r(u, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return Lh(this)
                    ? (si(
                        "RemoteStore",
                        "Restarting streams for network reachability change."
                      ),
                      [
                        4,
                        (function (t) {
                          return r(this, void 0, void 0, function () {
                            var e;
                            return i(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return (e = li(t)).Nh.add(4), [4, Sh(e)];
                                case 1:
                                  return (
                                    n.sent(),
                                    e.Oh.set("Unknown"),
                                    e.Nh.delete(4),
                                    [4, Ah(e)]
                                  );
                                case 2:
                                  return n.sent(), [2];
                              }
                            });
                          });
                        })(this),
                      ])
                    : [3, 2];
                case 1:
                  t.sent(), (t.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        });
      }),
      (this.Oh = new Th(n, o));
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
 */ function Ah(t) {
  return r(this, void 0, void 0, function () {
    var e, n;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          if (!Lh(t)) return [3, 4];
          (e = 0), (n = t.$h), (r.label = 1);
        case 1:
          return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
        case 2:
          r.sent(), (r.label = 3);
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function Sh(t) {
  return r(this, void 0, void 0, function () {
    var e, n;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          (e = 0), (n = t.$h), (r.label = 1);
        case 1:
          return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
        case 2:
          r.sent(), (r.label = 3);
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function Dh(t, e) {
  var n = li(t);
  n.xh.has(e.targetId) ||
    (n.xh.set(e.targetId, e), Ch(n) ? kh(n) : Xh(n).Hu() && xh(n, e));
}
function Oh(t, e) {
  var n = li(t),
    r = Xh(n);
  n.xh.delete(e),
    r.Hu() && Ph(n, e),
    0 === n.xh.size && (r.Hu() ? r.Xu() : Lh(n) && n.Oh.set("Unknown"));
}
function xh(t, e) {
  t.kh.on(e.targetId), Xh(t).uh(e);
}
function Ph(t, e) {
  t.kh.on(e), Xh(t).hh(e);
}
function kh(t) {
  (t.kh = new cu({
    vn: function (e) {
      return t.Dh.vn(e);
    },
    Sn: function (e) {
      return t.xh.get(e) || null;
    },
  })),
    Xh(t).start(),
    t.Oh.Ph();
}
function Ch(t) {
  return Lh(t) && !Xh(t).zu() && t.xh.size > 0;
}
function Lh(t) {
  return 0 === li(t).Nh.size;
}
function Rh(t) {
  t.kh = void 0;
}
function Vh(t) {
  return r(this, void 0, void 0, function () {
    return i(this, function (e) {
      return (
        t.xh.forEach(function (e, n) {
          xh(t, e);
        }),
        [2]
      );
    });
  });
}
function Uh(t, e) {
  return r(this, void 0, void 0, function () {
    return i(this, function (n) {
      return Rh(t), Ch(t) ? (t.Oh.Vh(e), kh(t)) : t.Oh.set("Unknown"), [2];
    });
  });
}
function Mh(t, e, n) {
  return r(this, void 0, void 0, function () {
    var o, s, u;
    return i(this, function (a) {
      switch (a.label) {
        case 0:
          if (
            (t.Oh.set("Online"), !(e instanceof uu && 2 === e.state && e.cause))
          )
            return [3, 6];
          a.label = 1;
        case 1:
          return (
            a.trys.push([1, 3, , 5]),
            [
              4,
              (function (t, e) {
                return r(this, void 0, void 0, function () {
                  var n, r, o, s;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (n = e.cause),
                          (r = 0),
                          (o = e.targetIds),
                          (i.label = 1);
                      case 1:
                        return r < o.length
                          ? ((s = o[r]),
                            t.xh.has(s) ? [4, t.Dh.Mh(s, n)] : [3, 3])
                          : [3, 5];
                      case 2:
                        i.sent(),
                          t.xh.delete(s),
                          t.kh.removeTarget(s),
                          (i.label = 3);
                      case 3:
                        i.label = 4;
                      case 4:
                        return r++, [3, 1];
                      case 5:
                        return [2];
                    }
                  });
                });
              })(t, e),
            ]
          );
        case 2:
          return a.sent(), [3, 5];
        case 3:
          return (
            (o = a.sent()),
            si(
              "RemoteStore",
              "Failed to remove targets %s: %s ",
              e.targetIds.join(","),
              o
            ),
            [4, jh(t, o)]
          );
        case 4:
          return a.sent(), [3, 5];
        case 5:
          return [3, 13];
        case 6:
          if (
            (e instanceof ou
              ? t.kh.dn(e)
              : e instanceof su
              ? t.kh.Pn(e)
              : t.kh.Tn(e),
            n.isEqual(xi.min()))
          )
            return [3, 13];
          a.label = 7;
        case 7:
          return a.trys.push([7, 11, , 13]), [4, Vc(t.bh)];
        case 8:
          return (
            (s = a.sent()),
            n._(s) >= 0
              ? [
                  4,
                  ((c = t),
                  (h = n),
                  (f = c.kh.Vn(h)),
                  f.$e.forEach(function (t, e) {
                    if (t.resumeToken.l() > 0) {
                      var n = c.xh.get(e);
                      n && c.xh.set(e, n.Mt(t.resumeToken, h));
                    }
                  }),
                  f.Fe.forEach(function (t) {
                    var e = c.xh.get(t);
                    if (e) {
                      c.xh.set(t, e.Mt(mi.T, e.Ot)), Ph(c, t);
                      var n = new ts(e.target, t, 1, e.sequenceNumber);
                      xh(c, n);
                    }
                  }),
                  c.Dh.Lh(f)),
                ]
              : [3, 10]
          );
        case 9:
          a.sent(), (a.label = 10);
        case 10:
          return [3, 13];
        case 11:
          return (
            si("RemoteStore", "Failed to raise snapshot:", (u = a.sent())),
            [4, jh(t, u)]
          );
        case 12:
          return a.sent(), [3, 13];
        case 13:
          return [2];
      }
      var c, h, f;
    });
  });
}
function jh(t, e, n) {
  return r(this, void 0, void 0, function () {
    var o = this;
    return i(this, function (s) {
      switch (s.label) {
        case 0:
          if (!Wu(e)) throw e;
          return t.Nh.add(1), [4, Sh(t)];
        case 1:
          return (
            s.sent(),
            t.Oh.set("Offline"),
            n ||
              (n = function () {
                return Vc(t.bh);
              }),
            t._s.po(function () {
              return r(o, void 0, void 0, function () {
                return i(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        si("RemoteStore", "Retrying IndexedDB access"), [4, n()]
                      );
                    case 1:
                      return e.sent(), t.Nh.delete(1), [4, Ah(t)];
                    case 2:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            [2]
          );
      }
    });
  });
}
function Fh(t, e) {
  return e().catch(function (n) {
    return jh(t, n, e);
  });
}
function qh(t) {
  return r(this, void 0, void 0, function () {
    var e, n, r, o, s;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (e = li(t)),
            (n = Wh(e)),
            (r = e.Ch.length > 0 ? e.Ch[e.Ch.length - 1].batchId : -1),
            (i.label = 1);
        case 1:
          if (!(Lh((u = e)) && u.Ch.length < 10)) return [3, 7];
          i.label = 2;
        case 2:
          return i.trys.push([2, 4, , 6]), [4, Mc(e.bh, r)];
        case 3:
          return null === (o = i.sent())
            ? (0 === e.Ch.length && n.Xu(), [3, 7])
            : ((r = o.batchId),
              (function (t, e) {
                t.Ch.push(e);
                var n = Wh(t);
                n.Hu() && n._h && n.fh(e.mutations);
              })(e, o),
              [3, 6]);
        case 4:
          return (s = i.sent()), [4, jh(e, s)];
        case 5:
          return i.sent(), [3, 6];
        case 6:
          return [3, 1];
        case 7:
          return zh(e) && Bh(e), [2];
      }
      var u;
    });
  });
}
function zh(t) {
  return Lh(t) && !Wh(t).zu() && t.Ch.length > 0;
}
function Bh(t) {
  Wh(t).start();
}
function Gh(t) {
  return r(this, void 0, void 0, function () {
    return i(this, function (e) {
      return Wh(t).Eh(), [2];
    });
  });
}
function Hh(t) {
  return r(this, void 0, void 0, function () {
    var e, n, r, o;
    return i(this, function (i) {
      for (e = Wh(t), n = 0, r = t.Ch; n < r.length; n++)
        (o = r[n]), e.fh(o.mutations);
      return [2];
    });
  });
}
function Yh(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            (r = t.Ch.shift()),
            (o = Oa.from(r, e, n)),
            [
              4,
              Fh(t, function () {
                return t.Dh.Bh(o);
              }),
            ]
          );
        case 1:
          return i.sent(), [4, qh(t)];
        case 2:
          return i.sent(), [2];
      }
    });
  });
}
function Kh(t, e) {
  return r(this, void 0, void 0, function () {
    return i(this, function (n) {
      switch (n.label) {
        case 0:
          return e && Wh(t)._h
            ? [
                4,
                (function (t, e) {
                  return r(this, void 0, void 0, function () {
                    var n, r;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return Us((r = e.code)) && r !== bi.ABORTED
                            ? ((n = t.Ch.shift()),
                              Wh(t).Yu(),
                              [
                                4,
                                Fh(t, function () {
                                  return t.Dh.qh(n.batchId, e);
                                }),
                              ])
                            : [3, 3];
                        case 1:
                          return i.sent(), [4, qh(t)];
                        case 2:
                          i.sent(), (i.label = 3);
                        case 3:
                          return [2];
                      }
                    });
                  });
                })(t, e),
              ]
            : [3, 2];
        case 1:
          n.sent(), (n.label = 2);
        case 2:
          return zh(t) && Bh(t), [2];
      }
    });
  });
}
function Qh(t, e) {
  return r(this, void 0, void 0, function () {
    var n;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          return (n = li(t)), e ? (n.Nh.delete(2), [4, Ah(n)]) : [3, 2];
        case 1:
          return r.sent(), [3, 5];
        case 2:
          return e ? [3, 4] : (n.Nh.add(2), [4, Sh(n)]);
        case 3:
          r.sent(), n.Oh.set("Unknown"), (r.label = 4);
        case 4:
          r.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function Xh(t) {
  var e,
    n,
    o,
    s,
    u = this;
  return (
    t.Uh ||
      ((t.Uh =
        ((e = t.Sh),
        (n = t._s),
        (o = {
          wu: Vh.bind(null, t),
          Tu: Uh.bind(null, t),
          ah: Mh.bind(null, t),
        }),
        (s = li(e)).Ih(),
        new Eh(n, s.Qu, s.credentials, s.Qt, o))),
      t.$h.push(function (e) {
        return r(u, void 0, void 0, function () {
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return e
                  ? (t.Uh.Yu(), Ch(t) ? kh(t) : t.Oh.set("Unknown"), [3, 3])
                  : [3, 1];
              case 1:
                return [4, t.Uh.stop()];
              case 2:
                n.sent(), Rh(t), (n.label = 3);
              case 3:
                return [2];
            }
          });
        });
      })),
    t.Uh
  );
}
function Wh(t) {
  var e,
    n,
    o,
    s,
    u = this;
  return (
    t.Qh ||
      ((t.Qh =
        ((e = t.Sh),
        (n = t._s),
        (o = {
          wu: Gh.bind(null, t),
          Tu: Kh.bind(null, t),
          wh: Hh.bind(null, t),
          dh: Yh.bind(null, t),
        }),
        (s = li(e)).Ih(),
        new _h(n, s.Qu, s.credentials, s.Qt, o))),
      t.$h.push(function (e) {
        return r(u, void 0, void 0, function () {
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return e ? (t.Qh.Yu(), [4, qh(t)]) : [3, 2];
              case 1:
                return n.sent(), [3, 4];
              case 2:
                return [4, t.Qh.stop()];
              case 3:
                n.sent(),
                  t.Ch.length > 0 &&
                    (si(
                      "RemoteStore",
                      "Stopping write stream with " +
                        t.Ch.length +
                        " pending writes"
                    ),
                    (t.Ch = [])),
                  (n.label = 4);
              case 4:
                return [2];
            }
          });
        });
      })),
    t.Qh
  );
}
var Jh = function () {
    (this.Kh = void 0), (this.listeners = []);
  },
  Zh = function () {
    (this.queries = new Ja(function (t) {
      return Xo(t);
    }, Qo)),
      (this.onlineState = "Unknown"),
      (this.Wh = new Set());
  };
function $h(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u, a, c;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          if (
            ((n = li(t)),
            (r = e.query),
            (o = !1),
            (s = n.queries.get(r)) || ((o = !0), (s = new Jh())),
            !o)
          )
            return [3, 4];
          i.label = 1;
        case 1:
          return i.trys.push([1, 3, , 4]), (u = s), [4, n.jh(r)];
        case 2:
          return (u.Kh = i.sent()), [3, 4];
        case 3:
          return (
            (a = i.sent()),
            (c = na(a, "Initialization of query '" + Wo(e.query) + "' failed")),
            [2, void e.onError(c)]
          );
        case 4:
          return (
            n.queries.set(r, s),
            s.listeners.push(e),
            e.Gh(n.onlineState),
            s.Kh && e.zh(s.Kh) && rf(n),
            [2]
          );
      }
    });
  });
}
function tf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u;
    return i(this, function (i) {
      return (
        (n = li(t)),
        (r = e.query),
        (o = !1),
        (s = n.queries.get(r)) &&
          (u = s.listeners.indexOf(e)) >= 0 &&
          (s.listeners.splice(u, 1), (o = 0 === s.listeners.length)),
        o ? [2, (n.queries.delete(r), n.Hh(r))] : [2]
      );
    });
  });
}
function ef(t, e) {
  for (var n = li(t), r = !1, i = 0, o = e; i < o.length; i++) {
    var s = o[i],
      u = s.query,
      a = n.queries.get(u);
    if (a) {
      for (var c = 0, h = a.listeners; c < h.length; c++)
        h[c].zh(s) && (r = !0);
      a.Kh = s;
    }
  }
  r && rf(n);
}
function nf(t, e, n) {
  var r = li(t),
    i = r.queries.get(e);
  if (i) for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
  r.queries.delete(e);
}
function rf(t) {
  t.Wh.forEach(function (t) {
    t.next();
  });
}
var of = (function () {
    function t(t, e, n) {
      (this.query = t),
        (this.Jh = e),
        (this.Yh = !1),
        (this.Xh = null),
        (this.onlineState = "Unknown"),
        (this.options = n || {});
    }
    return (
      (t.prototype.zh = function (t) {
        if (!this.options.includeMetadataChanges) {
          for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
            var i = r[n];
            3 !== i.type && e.push(i);
          }
          t = new nu(t.query, t.docs, t.Se, e, t.De, t.fromCache, t.Ce, !0);
        }
        var o = !1;
        return (
          this.Yh
            ? this.Zh(t) && (this.Jh.next(t), (o = !0))
            : this.tl(t, this.onlineState) && (this.el(t), (o = !0)),
          (this.Xh = t),
          o
        );
      }),
      (t.prototype.onError = function (t) {
        this.Jh.error(t);
      }),
      (t.prototype.Gh = function (t) {
        this.onlineState = t;
        var e = !1;
        return (
          this.Xh &&
            !this.Yh &&
            this.tl(this.Xh, t) &&
            (this.el(this.Xh), (e = !0)),
          e
        );
      }),
      (t.prototype.tl = function (t, e) {
        if (!t.fromCache) return !0;
        var n = "Offline" !== e;
        return !((this.options.nl && n) || (t.docs.et() && "Offline" !== e));
      }),
      (t.prototype.Zh = function (t) {
        if (t.docChanges.length > 0) return !0;
        var e = this.Xh && this.Xh.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Ce && !e) && !0 === this.options.includeMetadataChanges;
      }),
      (t.prototype.el = function (t) {
        (t = nu.Ne(t.query, t.docs, t.De, t.fromCache)),
          (this.Yh = !0),
          this.Jh.next(t);
      }),
      t
    );
  })(),
  sf = function (t) {
    this.key = t;
  },
  uf = function (t) {
    this.key = t;
  },
  af = (function () {
    function t(t, e) {
      (this.query = t),
        (this.cl = e),
        (this.al = null),
        (this.Be = !1),
        (this.ul = Js()),
        (this.De = Js()),
        (this.hl = Zo(t)),
        (this.ll = new tu(this.hl));
    }
    return (
      Object.defineProperty(t.prototype, "_l", {
        get: function () {
          return this.cl;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.fl = function (t, e) {
        var n = this,
          r = e ? e.dl : new eu(),
          i = e ? e.ll : this.ll,
          o = e ? e.De : this.De,
          s = i,
          u = !1,
          a = Fo(this.query) && i.size === this.query.limit ? i.last() : null,
          c = qo(this.query) && i.size === this.query.limit ? i.first() : null;
        if (
          (t.Xt(function (t, e) {
            var h = i.get(t),
              f = e instanceof po ? e : null;
            f && (f = Jo(n.query, f) ? f : null);
            var l = !!h && n.De.has(h.key),
              p = !!f && (f.Vt || (n.De.has(f.key) && f.hasCommittedMutations)),
              d = !1;
            h && f
              ? h.data().isEqual(f.data())
                ? l !== p && (r.track({ type: 3, doc: f }), (d = !0))
                : n.wl(h, f) ||
                  (r.track({ type: 2, doc: f }),
                  (d = !0),
                  ((a && n.hl(f, a) > 0) || (c && n.hl(f, c) < 0)) && (u = !0))
              : !h && f
              ? (r.track({ type: 0, doc: f }), (d = !0))
              : h &&
                !f &&
                (r.track({ type: 1, doc: h }), (d = !0), (a || c) && (u = !0)),
              d &&
                (f
                  ? ((s = s.add(f)), (o = p ? o.add(t) : o.delete(t)))
                  : ((s = s.delete(t)), (o = o.delete(t))));
          }),
          Fo(this.query) || qo(this.query))
        )
          for (; s.size > this.query.limit; ) {
            var h = Fo(this.query) ? s.last() : s.first();
            (s = s.delete(h.key)),
              (o = o.delete(h.key)),
              r.track({ type: 1, doc: h });
          }
        return { ll: s, dl: r, lc: u, De: o };
      }),
      (t.prototype.wl = function (t, e) {
        return t.Vt && e.hasCommittedMutations && !e.Vt;
      }),
      (t.prototype.wi = function (t, e, n) {
        var r = this,
          i = this.ll;
        (this.ll = t.ll), (this.De = t.De);
        var o = t.dl.ve();
        o.sort(function (t, e) {
          return (
            (n = t.type),
            (i = e.type),
            (o = function (t) {
              switch (t) {
                case 0:
                  return 1;
                case 2:
                case 3:
                  return 2;
                case 1:
                  return 0;
                default:
                  return hi();
              }
            })(n) - o(i) || r.hl(t.doc, e.doc)
          );
          var n, i, o;
        }),
          this.El(n);
        var s = e ? this.Tl() : [],
          u = 0 === this.ul.size && this.Be ? 1 : 0,
          a = u !== this.al;
        return (
          (this.al = u),
          0 !== o.length || a
            ? {
                snapshot: new nu(this.query, t.ll, i, o, t.De, 0 === u, a, !1),
                Il: s,
              }
            : { Il: s }
        );
      }),
      (t.prototype.Gh = function (t) {
        return this.Be && "Offline" === t
          ? ((this.Be = !1),
            this.wi({ ll: this.ll, dl: new eu(), De: this.De, lc: !1 }, !1))
          : { Il: [] };
      }),
      (t.prototype.ml = function (t) {
        return !this.cl.has(t) && !!this.ll.has(t) && !this.ll.get(t).Vt;
      }),
      (t.prototype.El = function (t) {
        var e = this;
        t &&
          (t.qe.forEach(function (t) {
            return (e.cl = e.cl.add(t));
          }),
          t.Ue.forEach(function (t) {}),
          t.Qe.forEach(function (t) {
            return (e.cl = e.cl.delete(t));
          }),
          (this.Be = t.Be));
      }),
      (t.prototype.Tl = function () {
        var t = this;
        if (!this.Be) return [];
        var e = this.ul;
        (this.ul = Js()),
          this.ll.forEach(function (e) {
            t.ml(e.key) && (t.ul = t.ul.add(e.key));
          });
        var n = [];
        return (
          e.forEach(function (e) {
            t.ul.has(e) || n.push(new uf(e));
          }),
          this.ul.forEach(function (t) {
            e.has(t) || n.push(new sf(t));
          }),
          n
        );
      }),
      (t.prototype.Al = function (t) {
        (this.cl = t.Rc), (this.ul = Js());
        var e = this.fl(t.documents);
        return this.wi(e, !0);
      }),
      (t.prototype.Rl = function () {
        return nu.Ne(this.query, this.ll, this.De, 0 === this.al);
      }),
      t
    );
  })(),
  cf = function (t, e, n) {
    (this.query = t), (this.targetId = e), (this.view = n);
  },
  hf = function (t) {
    (this.key = t), (this.Pl = !1);
  },
  ff = (function () {
    function t(t, e, n, r, i, o) {
      (this.bh = t),
        (this.yl = e),
        (this.gl = n),
        (this.Vl = r),
        (this.currentUser = i),
        (this.pl = o),
        (this.bl = {}),
        (this.vl = new Ja(function (t) {
          return Xo(t);
        }, Qo)),
        (this.Sl = new Map()),
        (this.Dl = new Set()),
        (this.Cl = new js(Ri.H)),
        (this.xl = new Map()),
        (this.Nl = new Yc()),
        (this.$l = {}),
        (this.Fl = new Map()),
        (this.Ol = sc.Li()),
        (this.onlineState = "Unknown"),
        (this.kl = void 0);
    }
    return (
      Object.defineProperty(t.prototype, "Ml", {
        get: function () {
          return !0 === this.kl;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
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
 */ function lf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u, a;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            (n = qf(t)),
            (s = n.vl.get(e))
              ? ((r = s.targetId), n.Vl.Fa(r), (o = s.view.Rl()), [3, 4])
              : [3, 1]
          );
        case 1:
          return [4, jc(n.bh, Yo(e))];
        case 2:
          return (
            (u = i.sent()),
            (a = n.Vl.Fa(u.targetId)),
            (r = u.targetId),
            [4, pf(n, e, r, "current" === a)]
          );
        case 3:
          (o = i.sent()), n.Ml && Dh(n.yl, u), (i.label = 4);
        case 4:
          return [2, o];
      }
    });
  });
}
function pf(t, e, n, o) {
  return r(this, void 0, void 0, function () {
    var s, u, a, c, h, f;
    return i(this, function (l) {
      switch (l.label) {
        case 0:
          return (
            (t.Ll = function (e, n, o) {
              return (function (t, e, n, o) {
                return r(this, void 0, void 0, function () {
                  var r, s, u;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (r = e.view.fl(n)).lc
                          ? [
                              4,
                              qc(t.bh, e.query, !1).then(function (t) {
                                var n = t.documents;
                                return e.view.fl(n, r);
                              }),
                            ]
                          : [3, 2];
                      case 1:
                        (r = i.sent()), (i.label = 2);
                      case 2:
                        return (
                          (s = o && o.$e.get(e.targetId)),
                          (u = e.view.wi(r, t.Ml, s)),
                          [2, (Af(t, e.targetId, u.Il), u.snapshot)]
                        );
                    }
                  });
                });
              })(t, e, n, o);
            }),
            [4, qc(t.bh, e, !0)]
          );
        case 1:
          return (
            (s = l.sent()),
            (u = new af(e, s.Rc)),
            (a = u.fl(s.documents)),
            (c = iu.Le(n, o && "Offline" !== t.onlineState)),
            (h = u.wi(a, t.Ml, c)),
            Af(t, n, h.Il),
            (f = new cf(e, n, u)),
            [
              2,
              (t.vl.set(e, f),
              t.Sl.has(n) ? t.Sl.get(n).push(e) : t.Sl.set(n, [e]),
              h.snapshot),
            ]
          );
      }
    });
  });
}
function df(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            (n = li(t)),
            (r = n.vl.get(e)),
            (o = n.Sl.get(r.targetId)).length > 1
              ? [
                  2,
                  (n.Sl.set(
                    r.targetId,
                    o.filter(function (t) {
                      return !Qo(t, e);
                    })
                  ),
                  void n.vl.delete(e)),
                ]
              : n.Ml
              ? (n.Vl.ka(r.targetId),
                n.Vl.Da(r.targetId)
                  ? [3, 2]
                  : [
                      4,
                      Fc(n.bh, r.targetId, !1)
                        .then(function () {
                          n.Vl.La(r.targetId),
                            Oh(n.yl, r.targetId),
                            Tf(n, r.targetId);
                        })
                        .catch(Wa),
                    ])
              : [3, 3]
          );
        case 1:
          i.sent(), (i.label = 2);
        case 2:
          return [3, 5];
        case 3:
          return Tf(n, r.targetId), [4, Fc(n.bh, r.targetId, !0)];
        case 4:
          i.sent(), (i.label = 5);
        case 5:
          return [2];
      }
    });
  });
}
function vf(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o, s, u;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (r = zf(t)), (i.label = 1);
        case 1:
          return (
            i.trys.push([1, 5, , 6]),
            [
              4,
              ((a = r.bh),
              (c = e),
              (f = li(a)),
              (l = Oi.now()),
              (p = c.reduce(function (t, e) {
                return t.add(e.key);
              }, Js())),
              f.persistence
                .runTransaction(
                  "Locally write mutations",
                  "readwrite",
                  function (t) {
                    return f.Tc.Xo(t, p).next(function (e) {
                      h = e;
                      for (var n = [], r = 0, i = c; r < i.length; r++) {
                        var o = i[r],
                          s = Is(o, h.get(o.key));
                        null != s &&
                          n.push(
                            new Ss(
                              o.key,
                              s,
                              fo(s.proto.mapValue),
                              ms.exists(!0)
                            )
                          );
                      }
                      return f.zo.Ri(t, l, n, c);
                    });
                  }
                )
                .then(function (t) {
                  var e = t.xs(h);
                  return { batchId: t.batchId, ri: e };
                })),
            ]
          );
        case 2:
          return (
            (o = i.sent()),
            r.Vl.Ca(o.batchId),
            (function (t, e, n) {
              var r = t.$l[t.currentUser.A()];
              r || (r = new js(vi)),
                (r = r.zt(e, n)),
                (t.$l[t.currentUser.A()] = r);
            })(r, o.batchId, n),
            [4, Of(r, o.ri)]
          );
        case 3:
          return i.sent(), [4, qh(r.yl)];
        case 4:
          return i.sent(), [3, 6];
        case 5:
          return (
            (s = i.sent()),
            (u = na(s, "Failed to persist write")),
            n.reject(u),
            [3, 6]
          );
        case 6:
          return [2];
      }
      var a, c, h, f, l, p;
    });
  });
}
function yf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (n = li(t)), (i.label = 1);
        case 1:
          return i.trys.push([1, 4, , 6]), [4, Uc(n.bh, e)];
        case 2:
          return (
            (r = i.sent()),
            e.$e.forEach(function (t, e) {
              var r = n.xl.get(e);
              r &&
                (fi(t.qe.size + t.Ue.size + t.Qe.size <= 1),
                t.qe.size > 0
                  ? (r.Pl = !0)
                  : t.Ue.size > 0
                  ? fi(r.Pl)
                  : t.Qe.size > 0 && (fi(r.Pl), (r.Pl = !1)));
            }),
            [4, Of(n, r, e)]
          );
        case 3:
          return i.sent(), [3, 6];
        case 4:
          return [4, Wa(i.sent())];
        case 5:
          return i.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function gf(t, e, n) {
  var r = li(t);
  if ((r.Ml && 0 === n) || (!r.Ml && 1 === n)) {
    var i = [];
    r.vl.forEach(function (t, n) {
      var r = n.view.Gh(e);
      r.snapshot && i.push(r.snapshot);
    }),
      (function (t, e) {
        var n = li(t);
        n.onlineState = e;
        var r = !1;
        n.queries.forEach(function (t, n) {
          for (var i = 0, o = n.listeners; i < o.length; i++)
            o[i].Gh(e) && (r = !0);
        }),
          r && rf(n);
      })(r.gl, e),
      i.length && r.bl.ah(i),
      (r.onlineState = e),
      r.Ml && r.Vl.Qa(e);
  }
}
function mf(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o, s, u, a, c;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            (r = li(t)).Vl.Ba(e, "rejected", n),
            (o = r.xl.get(e)),
            (s = o && o.key)
              ? ((u = (u = new js(Ri.H)).zt(s, new vo(s, xi.min()))),
                (a = Js().add(s)),
                (c = new ru(xi.min(), new Map(), new zs(vi), u, a)),
                [4, yf(r, c)])
              : [3, 2]
          );
        case 1:
          return (
            i.sent(), (r.Cl = r.Cl.remove(s)), r.xl.delete(e), Df(r), [3, 4]
          );
        case 2:
          return [
            4,
            Fc(r.bh, e, !1)
              .then(function () {
                return Tf(r, e, n);
              })
              .catch(Wa),
          ];
        case 3:
          i.sent(), (i.label = 4);
        case 4:
          return [2];
      }
    });
  });
}
function bf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (n = li(t)), (r = e.batch.batchId), (i.label = 1);
        case 1:
          return i.trys.push([1, 4, , 6]), [4, Rc(n.bh, e)];
        case 2:
          return (
            (o = i.sent()),
            If(n, r, null),
            _f(n, r),
            n.Vl.Na(r, "acknowledged"),
            [4, Of(n, o)]
          );
        case 3:
          return i.sent(), [3, 6];
        case 4:
          return [4, Wa(i.sent())];
        case 5:
          return i.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function wf(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (r = li(t)), (i.label = 1);
        case 1:
          return (
            i.trys.push([1, 4, , 6]),
            [
              4,
              ((s = r.bh),
              (u = e),
              (a = li(s)),
              a.persistence.runTransaction(
                "Reject batch",
                "readwrite-primary",
                function (t) {
                  var e;
                  return a.zo
                    .Pi(t, u)
                    .next(function (n) {
                      return fi(null !== n), (e = n.keys()), a.zo.Ci(t, n);
                    })
                    .next(function () {
                      return a.zo.$i(t);
                    })
                    .next(function () {
                      return a.Tc.Xo(t, e);
                    });
                }
              )),
            ]
          );
        case 2:
          return (
            (o = i.sent()),
            If(r, e, n),
            _f(r, e),
            r.Vl.Na(e, "rejected", n),
            [4, Of(r, o)]
          );
        case 3:
          return i.sent(), [3, 6];
        case 4:
          return [4, Wa(i.sent())];
        case 5:
          return i.sent(), [3, 6];
        case 6:
          return [2];
      }
      var s, u, a;
    });
  });
}
function Ef(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          Lh((n = li(t)).yl) ||
            si(
              "SyncEngine",
              "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
            ),
            (i.label = 1);
        case 1:
          return (
            i.trys.push([1, 3, , 4]),
            [
              4,
              ((a = n.bh),
              (c = li(a)),
              c.persistence.runTransaction(
                "Get highest unacknowledged batch id",
                "readonly",
                function (t) {
                  return c.zo.Vi(t);
                }
              )),
            ]
          );
        case 2:
          return -1 === (r = i.sent())
            ? [2, void e.resolve()]
            : ((o = n.Fl.get(r) || []).push(e), n.Fl.set(r, o), [3, 4]);
        case 3:
          return (
            (s = i.sent()),
            (u = na(
              s,
              "Initialization of waitForPendingWrites() operation failed"
            )),
            e.reject(u),
            [3, 4]
          );
        case 4:
          return [2];
      }
      var a, c;
    });
  });
}
function _f(t, e) {
  (t.Fl.get(e) || []).forEach(function (t) {
    t.resolve();
  }),
    t.Fl.delete(e);
}
function If(t, e, n) {
  var r = li(t),
    i = r.$l[r.currentUser.A()];
  if (i) {
    var o = i.get(e);
    o && (n ? o.reject(n) : o.resolve(), (i = i.remove(e))),
      (r.$l[r.currentUser.A()] = i);
  }
}
function Tf(t, e, n) {
  void 0 === n && (n = null), t.Vl.ka(e);
  for (var r = 0, i = t.Sl.get(e); r < i.length; r++) {
    var o = i[r];
    t.vl.delete(o), n && t.bl.Bl(o, n);
  }
  t.Sl.delete(e),
    t.Ml &&
      t.Nl.Fc(e).forEach(function (e) {
        t.Nl.Fi(e) || Nf(t, e);
      });
}
function Nf(t, e) {
  t.Dl.delete(e.path.rt());
  var n = t.Cl.get(e);
  null !== n && (Oh(t.yl, n), (t.Cl = t.Cl.remove(e)), t.xl.delete(n), Df(t));
}
function Af(t, e, n) {
  for (var r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    o instanceof sf
      ? (t.Nl.nr(o.key, e), Sf(t, o))
      : o instanceof uf
      ? (si("SyncEngine", "Document no longer in limbo: " + o.key),
        t.Nl.ir(o.key, e),
        t.Nl.Fi(o.key) || Nf(t, o.key))
      : hi();
  }
}
function Sf(t, e) {
  var n = e.key,
    r = n.path.rt();
  t.Cl.get(n) ||
    t.Dl.has(r) ||
    (si("SyncEngine", "New document in limbo: " + n), t.Dl.add(r), Df(t));
}
function Df(t) {
  for (; t.Dl.size > 0 && t.Cl.size < t.pl; ) {
    var e = t.Dl.values().next().value;
    t.Dl.delete(e);
    var n = new Ri(ki.ot(e)),
      r = t.Ol.next();
    t.xl.set(r, new hf(n)),
      (t.Cl = t.Cl.zt(n, r)),
      Dh(t.yl, new ts(Yo(jo(n.path)), r, 2, Di.q));
  }
}
function Of(t, e, n) {
  return r(this, void 0, void 0, function () {
    var o, s, u, a;
    return i(this, function (c) {
      switch (c.label) {
        case 0:
          return (
            (o = li(t)),
            (s = []),
            (u = []),
            (a = []),
            o.vl.et()
              ? [3, 3]
              : (o.vl.forEach(function (t, r) {
                  a.push(
                    o.Ll(r, e, n).then(function (t) {
                      if (t) {
                        o.Ml &&
                          o.Vl.Ba(
                            r.targetId,
                            t.fromCache ? "not-current" : "current"
                          ),
                          s.push(t);
                        var e = xc.oc(r.targetId, t);
                        u.push(e);
                      }
                    })
                  );
                }),
                [4, Promise.all(a)])
          );
        case 1:
          return (
            c.sent(),
            o.bl.ah(s),
            [
              4,
              (function (t, e) {
                return r(this, void 0, void 0, function () {
                  var n, r, o, s, u, a, c, h, f;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (n = li(t)), (i.label = 1);
                      case 1:
                        return (
                          i.trys.push([1, 3, , 4]),
                          [
                            4,
                            n.persistence.runTransaction(
                              "notifyLocalViewChanges",
                              "readwrite",
                              function (t) {
                                return Hu.forEach(e, function (e) {
                                  return Hu.forEach(e.ic, function (r) {
                                    return n.persistence.Ti.nr(
                                      t,
                                      e.targetId,
                                      r
                                    );
                                  }).next(function () {
                                    return Hu.forEach(e.rc, function (r) {
                                      return n.persistence.Ti.ir(
                                        t,
                                        e.targetId,
                                        r
                                      );
                                    });
                                  });
                                });
                              }
                            ),
                          ]
                        );
                      case 2:
                        return i.sent(), [3, 4];
                      case 3:
                        if (!Wu((r = i.sent()))) throw r;
                        return (
                          si(
                            "LocalStore",
                            "Failed to update sequence numbers: " + r
                          ),
                          [3, 4]
                        );
                      case 4:
                        for (o = 0, s = e; o < s.length; o++)
                          (u = s[o]),
                            (a = u.targetId),
                            u.fromCache ||
                              ((c = n.fc.get(a)),
                              (h = c.Ot),
                              (f = c.Lt(h)),
                              (n.fc = n.fc.zt(a, f)));
                        return [2];
                    }
                  });
                });
              })(o.bh, u),
            ]
          );
        case 2:
          c.sent(), (c.label = 3);
        case 3:
          return [2];
      }
    });
  });
}
function xf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (n = li(t)).currentUser.isEqual(e)
            ? [3, 3]
            : (si("SyncEngine", "User change. New user:", e.A()),
              [4, Lc(n.bh, e)]);
        case 1:
          return (
            (r = i.sent()),
            (n.currentUser = e),
            (o = n).Fl.forEach(function (t) {
              t.forEach(function (t) {
                t.reject(
                  new wi(
                    bi.CANCELLED,
                    "'waitForPendingWrites' promise is rejected due to a user change."
                  )
                );
              });
            }),
            o.Fl.clear(),
            n.Vl.Ua(e, r.mc, r.Ac),
            [4, Of(n, r.Ic)]
          );
        case 2:
          i.sent(), (i.label = 3);
        case 3:
          return [2];
      }
      var o;
    });
  });
}
function Pf(t, e) {
  var n = li(t),
    r = n.xl.get(e);
  if (r && r.Pl) return Js().add(r.key);
  var i = Js(),
    o = n.Sl.get(e);
  if (!o) return i;
  for (var s = 0, u = o; s < u.length; s++) {
    var a = u[s],
      c = n.vl.get(a);
    i = i.Pe(c.view._l);
  }
  return i;
}
function kf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return [4, qc((n = li(t)).bh, e.query, !0)];
        case 1:
          return (
            (r = i.sent()),
            (o = e.view.Al(r)),
            [2, (n.Ml && Af(n, e.targetId, o.Il), o)]
          );
      }
    });
  });
}
function Cf(t) {
  return r(this, void 0, void 0, function () {
    var e;
    return i(this, function (n) {
      return [
        2,
        Bc((e = li(t)).bh).then(function (t) {
          return Of(e, t);
        }),
      ];
    });
  });
}
function Lf(t, e, n, o) {
  return r(this, void 0, void 0, function () {
    var r, s;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return [
            4,
            ((u = (r = li(t)).bh),
            (a = e),
            (c = li(u)),
            (h = li(c.zo)),
            c.persistence.runTransaction(
              "Lookup mutation documents",
              "readonly",
              function (t) {
                return h.yi(t, a).next(function (e) {
                  return e ? c.Tc.Xo(t, e) : Hu.resolve(null);
                });
              }
            )),
          ];
        case 1:
          return null === (s = i.sent())
            ? [3, 6]
            : "pending" !== n
            ? [3, 3]
            : [4, qh(r.yl)];
        case 2:
          return i.sent(), [3, 4];
        case 3:
          "acknowledged" === n || "rejected" === n
            ? (If(r, e, o || null),
              _f(r, e),
              (function (t, e) {
                li(li(t).zo).xi(e);
              })(r.bh, e))
            : hi(),
            (i.label = 4);
        case 4:
          return [4, Of(r, s)];
        case 5:
          return i.sent(), [3, 7];
        case 6:
          si("SyncEngine", "Cannot apply mutation batch with id: " + e),
            (i.label = 7);
        case 7:
          return [2];
      }
      var u, a, c, h;
    });
  });
}
function Rf(t, e) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u, a, c, h;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (
            qf((n = li(t))),
            zf(n),
            !0 !== e || !0 === n.kl
              ? [3, 3]
              : ((r = n.Vl.va()), [4, Vf(n, r.it())])
          );
        case 1:
          return (o = i.sent()), (n.kl = !0), [4, Qh(n.yl, !0)];
        case 2:
          for (i.sent(), s = 0, u = o; s < u.length; s++)
            (a = u[s]), Dh(n.yl, a);
          return [3, 7];
        case 3:
          return !1 !== e || !1 === n.kl
            ? [3, 7]
            : ((c = []),
              (h = Promise.resolve()),
              n.Sl.forEach(function (t, e) {
                n.Vl.Ma(e)
                  ? c.push(e)
                  : (h = h.then(function () {
                      return Tf(n, e), Fc(n.bh, e, !0);
                    })),
                  Oh(n.yl, e);
              }),
              [4, h]);
        case 4:
          return i.sent(), [4, Vf(n, c)];
        case 5:
          return (
            i.sent(),
            (f = li(n)).xl.forEach(function (t, e) {
              Oh(f.yl, e);
            }),
            f.Nl.Oc(),
            (f.xl = new Map()),
            (f.Cl = new js(Ri.H)),
            (n.kl = !1),
            [4, Qh(n.yl, !1)]
          );
        case 6:
          i.sent(), (i.label = 7);
        case 7:
          return [2];
      }
      var f;
    });
  });
}
function Vf(t, e, n) {
  return r(this, void 0, void 0, function () {
    var n, r, o, s, u, a, c, h, f, l, p, d, v, y;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (n = li(t)), (r = []), (o = []), (s = 0), (u = e), (i.label = 1);
        case 1:
          return s < u.length
            ? ((a = u[s]),
              (c = void 0),
              (h = n.Sl.get(a)) && 0 !== h.length
                ? [4, jc(n.bh, Yo(h[0]))]
                : [3, 7])
            : [3, 13];
        case 2:
          (c = i.sent()), (f = 0), (l = h), (i.label = 3);
        case 3:
          return f < l.length
            ? ((p = l[f]), (d = n.vl.get(p)), [4, kf(n, d)])
            : [3, 6];
        case 4:
          (v = i.sent()).snapshot && o.push(v.snapshot), (i.label = 5);
        case 5:
          return f++, [3, 3];
        case 6:
          return [3, 11];
        case 7:
          return [4, zc(n.bh, a)];
        case 8:
          return (y = i.sent()), [4, jc(n.bh, y)];
        case 9:
          return (c = i.sent()), [4, pf(n, Uf(y), a, !1)];
        case 10:
          i.sent(), (i.label = 11);
        case 11:
          r.push(c), (i.label = 12);
        case 12:
          return s++, [3, 1];
        case 13:
          return [2, (n.bl.ah(o), r)];
      }
    });
  });
}
function Uf(t) {
  return Mo(
    t.path,
    t.collectionGroup,
    t.orderBy,
    t.filters,
    t.limit,
    "F",
    t.startAt,
    t.endAt
  );
}
function Mf(t) {
  var e = li(t);
  return li(li(e.bh).persistence).Uo();
}
function jf(t, e, n, o) {
  return r(this, void 0, void 0, function () {
    var r, s, u;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          return (r = li(t)).kl
            ? (si(
                "SyncEngine",
                "Ignoring unexpected query state notification."
              ),
              [3, 8])
            : [3, 1];
        case 1:
          if (!r.Sl.has(e)) return [3, 8];
          switch (n) {
            case "current":
            case "not-current":
              return [3, 2];
            case "rejected":
              return [3, 5];
          }
          return [3, 7];
        case 2:
          return [4, Bc(r.bh)];
        case 3:
          return (
            (s = i.sent()), (u = ru.Me(e, "current" === n)), [4, Of(r, s, u)]
          );
        case 4:
          return i.sent(), [3, 8];
        case 5:
          return [4, Fc(r.bh, e, !0)];
        case 6:
          return i.sent(), Tf(r, e, o), [3, 8];
        case 7:
          hi(), (i.label = 8);
        case 8:
          return [2];
      }
    });
  });
}
function Ff(t, e, n) {
  return r(this, void 0, void 0, function () {
    var r, o, s, u, a, c, h, f, l, p;
    return i(this, function (d) {
      switch (d.label) {
        case 0:
          if (!(r = qf(t)).kl) return [3, 10];
          (o = 0), (s = e), (d.label = 1);
        case 1:
          return o < s.length
            ? ((u = s[o]),
              r.Sl.has(u)
                ? (si("SyncEngine", "Adding an already active target " + u),
                  [3, 5])
                : [4, zc(r.bh, u)])
            : [3, 6];
        case 2:
          return (a = d.sent()), [4, jc(r.bh, a)];
        case 3:
          return (c = d.sent()), [4, pf(r, Uf(a), c.targetId, !1)];
        case 4:
          d.sent(), Dh(r.yl, c), (d.label = 5);
        case 5:
          return o++, [3, 1];
        case 6:
          (h = function (t) {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return r.Sl.has(t)
                    ? [
                        4,
                        Fc(r.bh, t, !1)
                          .then(function () {
                            Oh(r.yl, t), Tf(r, t);
                          })
                          .catch(Wa),
                      ]
                    : [3, 2];
                case 1:
                  e.sent(), (e.label = 2);
                case 2:
                  return [2];
              }
            });
          }),
            (f = 0),
            (l = n),
            (d.label = 7);
        case 7:
          return f < l.length ? ((p = l[f]), [5, h(p)]) : [3, 10];
        case 8:
          d.sent(), (d.label = 9);
        case 9:
          return f++, [3, 7];
        case 10:
          return [2];
      }
    });
  });
}
function qf(t) {
  var e = li(t);
  return (
    (e.yl.Dh.Lh = yf.bind(null, e)),
    (e.yl.Dh.vn = Pf.bind(null, e)),
    (e.yl.Dh.Mh = mf.bind(null, e)),
    (e.bl.ah = ef.bind(null, e.gl)),
    (e.bl.Bl = nf.bind(null, e.gl)),
    e
  );
}
function zf(t) {
  var e = li(t);
  return (e.yl.Dh.Bh = bf.bind(null, e)), (e.yl.Dh.qh = wf.bind(null, e)), e;
}
var Bf = (function () {
    function t() {
      this.synchronizeTabs = !1;
    }
    return (
      (t.prototype.initialize = function (t) {
        return r(this, void 0, void 0, function () {
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (this.Qt = mh(t.yu.t)),
                  (this.Vl = this.Wl(t)),
                  (this.persistence = this.jl(t)),
                  [4, this.persistence.start()]
                );
              case 1:
                return (
                  e.sent(), (this.Gl = this.zl(t)), (this.bh = this.Hl(t)), [2]
                );
            }
          });
        });
      }),
      (t.prototype.zl = function (t) {
        return null;
      }),
      (t.prototype.Hl = function (t) {
        return Cc(this.persistence, new Pc(), t.Jl, this.Qt);
      }),
      (t.prototype.jl = function (t) {
        return new Zc(th.ia, this.Qt);
      }),
      (t.prototype.Wl = function (t) {
        return new hh();
      }),
      (t.prototype.terminate = function () {
        return r(this, void 0, void 0, function () {
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return this.Gl && this.Gl.stop(), [4, this.Vl.ko()];
              case 1:
                return t.sent(), [4, this.persistence.ko()];
              case 2:
                return t.sent(), [2];
            }
          });
        });
      }),
      t
    );
  })(),
  Gf = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this) || this).Yl = e),
        (i.cacheSizeBytes = n),
        (i.forceOwnership = r),
        (i.synchronizeTabs = !1),
        i
      );
    }
    return (
      e(n, t),
      (n.prototype.initialize = function (e) {
        return r(this, void 0, void 0, function () {
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, t.prototype.initialize.call(this, e)];
              case 1:
                return n.sent(), [4, Gc(this.bh)];
              case 2:
                return n.sent(), [4, this.Yl.initialize(this, e)];
              case 3:
                return n.sent(), [4, zf(this.Yl._a)];
              case 4:
                return n.sent(), [4, qh(this.Yl.yl)];
              case 5:
                return n.sent(), [2];
            }
          });
        });
      }),
      (n.prototype.Hl = function (t) {
        return Cc(this.persistence, new Pc(), t.Jl, this.Qt);
      }),
      (n.prototype.zl = function (t) {
        var e = this.persistence.Ti.lr;
        return new pc(e, t._s);
      }),
      (n.prototype.jl = function (t) {
        var e = Dc(t.yu.t, t.yu.persistenceKey),
          n =
            void 0 !== this.cacheSizeBytes ? Xa.Ys(this.cacheSizeBytes) : Xa.ti;
        return new Nc(
          this.synchronizeTabs,
          e,
          t.clientId,
          n,
          t._s,
          yh(),
          gh(),
          this.Qt,
          this.Vl,
          !!this.forceOwnership
        );
      }),
      (n.prototype.Wl = function (t) {
        return new hh();
      }),
      n
    );
  })(Bf),
  Hf = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this, e, n, !1) || this).Yl = e),
        (r.cacheSizeBytes = n),
        (r.synchronizeTabs = !0),
        r
      );
    }
    return (
      e(n, t),
      (n.prototype.initialize = function (e) {
        return r(this, void 0, void 0, function () {
          var n,
            o = this;
          return i(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, t.prototype.initialize.call(this, e)];
              case 1:
                return (
                  s.sent(),
                  (n = this.Yl._a),
                  this.Vl instanceof ch
                    ? ((this.Vl._a = {
                        eu: Lf.bind(null, n),
                        nu: jf.bind(null, n),
                        su: Ff.bind(null, n),
                        Uo: Mf.bind(null, n),
                        tu: Cf.bind(null, n),
                      }),
                      [4, this.Vl.start()])
                    : [3, 3]
                );
              case 2:
                s.sent(), (s.label = 3);
              case 3:
                return [
                  4,
                  this.persistence.Ro(function (t) {
                    return r(o, void 0, void 0, function () {
                      return i(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, Rf(this.Yl._a, t)];
                          case 1:
                            return (
                              e.sent(),
                              this.Gl &&
                                (t && !this.Gl.Er
                                  ? this.Gl.start(this.bh)
                                  : t || this.Gl.stop()),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                ];
              case 4:
                return s.sent(), [2];
            }
          });
        });
      }),
      (n.prototype.Wl = function (t) {
        var e = yh();
        if (!ch.Kn(e))
          throw new wi(
            bi.UNIMPLEMENTED,
            "IndexedDB persistence is only available on platforms that support LocalStorage."
          );
        var n = Dc(t.yu.t, t.yu.persistenceKey);
        return new ch(e, t._s, n, t.clientId, t.Jl);
      }),
      n
    );
  })(Gf),
  Yf = (function () {
    function t() {}
    return (
      (t.prototype.initialize = function (t, e) {
        return r(this, void 0, void 0, function () {
          var n = this;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return this.bh
                  ? [3, 2]
                  : ((this.bh = t.bh),
                    (this.Vl = t.Vl),
                    (this.Sh = this.Xl(e)),
                    (this.yl = this.Zl(e)),
                    (this.gl = this.t_(e)),
                    (this._a = this.e_(e, !t.synchronizeTabs)),
                    (this.Vl.fa = function (t) {
                      return gf(n._a, t, 1);
                    }),
                    (this.yl.Dh.n_ = xf.bind(null, this._a)),
                    [4, Qh(this.yl, this._a.Ml)]);
              case 1:
                r.sent(), (r.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (t.prototype.t_ = function (t) {
        return new Zh();
      }),
      (t.prototype.Xl = function (t) {
        var e,
          n,
          r = mh(t.yu.t),
          i = ((e = t.yu), new vh(e));
        return (n = t.credentials), new Ih(n, i, r);
      }),
      (t.prototype.Zl = function (t) {
        var e,
          n,
          r,
          i,
          o,
          s = this;
        return (
          (e = this.bh),
          (n = this.Sh),
          (r = t._s),
          (i = function (t) {
            return gf(s._a, t, 0);
          }),
          (o = lh.Kn() ? new lh() : new fh()),
          new Nh(e, n, r, i, o)
        );
      }),
      (t.prototype.e_ = function (t, e) {
        return (
          (n = this.bh),
          (r = this.yl),
          (i = this.gl),
          (o = this.Vl),
          (s = t.Jl),
          (u = t.pl),
          (a = e),
          (c = new ff(n, r, i, o, s, u)),
          a && (c.kl = !0),
          c
        );
        var n, r, i, o, s, u, a, c;
      }),
      (t.prototype.terminate = function () {
        return (function (t) {
          return r(this, void 0, void 0, function () {
            var e;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (e = li(t)),
                    si("RemoteStore", "RemoteStore shutting down."),
                    e.Nh.add(5),
                    [4, Sh(e)]
                  );
                case 1:
                  return n.sent(), e.Fh.ko(), e.Oh.set("Unknown"), [2];
              }
            });
          });
        })(this.yl);
      }),
      t
    );
  })(),
  Kf = (function () {
    function t(t) {
      (this.observer = t), (this.muted = !1);
    }
    return (
      (t.prototype.next = function (t) {
        this.observer.next && this.s_(this.observer.next, t);
      }),
      (t.prototype.error = function (t) {
        this.observer.error
          ? this.s_(this.observer.error, t)
          : console.error("Uncaught Error in snapshot listener:", t);
      }),
      (t.prototype.i_ = function () {
        this.muted = !0;
      }),
      (t.prototype.s_ = function (t, e) {
        var n = this;
        this.muted ||
          setTimeout(function () {
            n.muted || t(e);
          }, 0);
      }),
      t
    );
  })(),
  Qf = (function () {
    function t() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      for (var n = 0; n < t.length; ++n)
        if (0 === t[n].length)
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Invalid field name at argument $(i + 1). Field names must not be empty."
          );
      this.f_ = new Li(t);
    }
    return (
      (t.prototype.isEqual = function (t) {
        return this.f_.isEqual(t.f_);
      }),
      t
    );
  })(),
  Xf = function (t) {
    this._methodName = t;
  },
  Wf = function (t) {
    this.d_ = t;
  };
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
 */
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
 */
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
 */
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
 */
function Jf(t, e, n) {
  if (!n)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Function " + t + "() cannot be called with an empty " + e + "."
    );
}
function Zf(t, e) {
  if (void 0 === e) return { merge: !1 };
  if (void 0 !== e.mergeFields && void 0 !== e.merge)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid options passed to function " +
        t +
        '(): You cannot specify both "merge" and "mergeFields".'
    );
  return e;
}
function $f(t, e, n, r) {
  if (!0 === e && !0 === r)
    throw new wi(
      bi.INVALID_ARGUMENT,
      t + " and " + n + " cannot be used together."
    );
}
function tl(t) {
  if (!Ri.wt(t))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid document reference. Document references must have an even number of segments, but " +
        t +
        " has " +
        t.length +
        "."
    );
}
function el(t) {
  if (Ri.wt(t))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid collection reference. Collection references must have an odd number of segments, but " +
        t +
        " has " +
        t.length +
        "."
    );
}
function nl(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t)
    return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) {
    if (t instanceof Array) return "an array";
    var e = (function (t) {
      if (t.constructor) {
        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
        if (e && e.length > 1) return e[1];
      }
      return null;
    })(t);
    return e ? "a custom " + e + " object" : "an object";
  }
  return "function" == typeof t ? "a function" : hi();
}
function rl(t, e) {
  if (("_delegate" in t && (t = t.d_), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new wi(
        bi.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    var n = nl(t);
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Expected type '" + e.name + "', but it was: " + n
    );
  }
  return t;
}
function il(t, e) {
  if (e <= 0)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Function " + t + "() requires a positive number, but it was: " + e + "."
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
 */ var ol = (function () {
    function t(t) {
      var e;
      if (void 0 === t.host) {
        if (void 0 !== t.ssl)
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Can't provide ssl option if host option is not set"
          );
        (this.host = "firestore.googleapis.com"), (this.ssl = !0);
      } else
        (this.host = t.host),
          (this.ssl = null === (e = t.ssl) || void 0 === e || e);
      if (
        ((this.credentials = t.credentials),
        (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
        void 0 === t.cacheSizeBytes)
      )
        this.cacheSizeBytes = 41943040;
      else {
        if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
          throw new wi(
            bi.INVALID_ARGUMENT,
            "cacheSizeBytes must be at least 1048576"
          );
        this.cacheSizeBytes = t.cacheSizeBytes;
      }
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
        (this.experimentalAutoDetectLongPolling =
          !!t.experimentalAutoDetectLongPolling),
        $f(
          "experimentalForceLongPolling",
          t.experimentalForceLongPolling,
          "experimentalAutoDetectLongPolling",
          t.experimentalAutoDetectLongPolling
        );
    }
    return (
      (t.prototype.isEqual = function (t) {
        return (
          this.host === t.host &&
          this.ssl === t.ssl &&
          this.credentials === t.credentials &&
          this.cacheSizeBytes === t.cacheSizeBytes &&
          this.experimentalForceLongPolling ===
            t.experimentalForceLongPolling &&
          this.experimentalAutoDetectLongPolling ===
            t.experimentalAutoDetectLongPolling &&
          this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
        );
      }),
      t
    );
  })(),
  sl = new Map(),
  ul = (function () {
    function t(t, e) {
      (this.w_ = "(lite)"),
        (this.E_ = new ol({})),
        (this.T_ = !1),
        t instanceof ri
          ? ((this.I_ = t), (this.m_ = new Ti()))
          : ((this.A_ = t),
            (this.I_ = (function (t) {
              if (
                !Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])
              )
                throw new wi(
                  bi.INVALID_ARGUMENT,
                  '"projectId" not provided in firebase.initializeApp.'
                );
              return new ri(t.options.projectId);
            })(t)),
            (this.m_ = new Ni(e)));
    }
    return (
      Object.defineProperty(t.prototype, "app", {
        get: function () {
          if (!this.A_)
            throw new wi(
              bi.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this.A_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "R_", {
        get: function () {
          return this.T_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "P_", {
        get: function () {
          return void 0 !== this.y_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.g_ = function (t) {
        if (this.T_)
          throw new wi(
            bi.FAILED_PRECONDITION,
            "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
          );
        (this.E_ = new ol(t)),
          void 0 !== t.credentials &&
            (this.m_ = (function (t) {
              if (!t) return new Ti();
              switch (t.type) {
                case "gapi":
                  var e = t.client;
                  return (
                    fi(
                      !(
                        "object" != typeof e ||
                        null === e ||
                        !e.auth ||
                        !e.auth.getAuthHeaderValueForFirstParty
                      )
                    ),
                    new Si(e, t.sessionIndex || "0")
                  );
                case "provider":
                  return t.client;
                default:
                  throw new wi(
                    bi.INVALID_ARGUMENT,
                    "makeCredentialsProvider failed due to invalid credential type"
                  );
              }
            })(t.credentials));
      }),
      (t.prototype.V_ = function () {
        return this.E_;
      }),
      (t.prototype.p_ = function () {
        return (this.T_ = !0), this.E_;
      }),
      (t.prototype._delete = function () {
        return this.y_ || (this.y_ = this.b_()), this.y_;
      }),
      (t.prototype.toJSON = function () {
        return { app: this.A_, t: this.I_, settings: this.E_ };
      }),
      (t.prototype.b_ = function () {
        return (
          this,
          (t = sl.get(this)) &&
            (si("ComponentProvider", "Removing Datastore"),
            sl.delete(this),
            t.terminate()),
          Promise.resolve()
        );
        var t;
      }),
      t
    );
  })(),
  al = (function () {
    function t(t, e, n) {
      (this.v_ = e),
        (this.S_ = n),
        (this.type = "document"),
        (this.firestore = t);
    }
    return (
      Object.defineProperty(t.prototype, "D_", {
        get: function () {
          return this.S_.path;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this.S_.path.tt();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this.S_.path.rt();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "parent", {
        get: function () {
          return new hl(this.firestore, this.v_, this.S_.path.X());
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.withConverter = function (e) {
        return new t(this.firestore, e, this.S_);
      }),
      t
    );
  })(),
  cl = (function () {
    function t(t, e, n) {
      (this.v_ = e), (this.C_ = n), (this.type = "query"), (this.firestore = t);
    }
    return (
      (t.prototype.withConverter = function (e) {
        return new t(this.firestore, e, this.C_);
      }),
      t
    );
  })(),
  hl = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this, e, n, jo(r)) || this).firestore = e),
        (i.D_ = r),
        (i.type = "collection"),
        i
      );
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "id", {
        get: function () {
          return this.C_.path.tt();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "path", {
        get: function () {
          return this.C_.path.rt();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "parent", {
        get: function () {
          var t = this.D_.X();
          return t.et() ? null : new al(this.firestore, null, new Ri(t));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.withConverter = function (t) {
        return new n(this.firestore, t, this.D_);
      }),
      n
    );
  })(cl);
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
 */ function fl(t, e) {
  for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
  if (
    (t instanceof Wf && (t = t.d_),
    Jf("collection", "path", e),
    t instanceof ul)
  )
    return el((n = ki.ot.apply(ki, u([e], r)))), new hl(t, null, n);
  if (!(t instanceof al || t instanceof hl))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
    );
  return (
    el((n = ki.ot.apply(ki, u([t.path], r)).child(ki.ot(e)))),
    new hl(t.firestore, null, n)
  );
}
function ll(t, e) {
  for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
  if (
    (t instanceof Wf && (t = t.d_),
    1 === arguments.length && (e = di.u()),
    Jf("doc", "path", e),
    t instanceof ul)
  )
    return tl((n = ki.ot.apply(ki, u([e], r)))), new al(t, null, new Ri(n));
  if (!(t instanceof al || t instanceof hl))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
    );
  return (
    tl((n = t.D_.child(ki.ot.apply(ki, u([e], r))))),
    new al(t.firestore, t instanceof hl ? t.v_ : null, new Ri(n))
  );
}
function pl(t, e) {
  return (
    t instanceof Wf && (t = t.d_),
    e instanceof Wf && (e = e.d_),
    (t instanceof al || t instanceof hl) &&
      (e instanceof al || e instanceof hl) &&
      t.firestore === e.firestore &&
      t.path === e.path &&
      t.v_ === e.v_
  );
}
function dl(t, e) {
  return (
    t instanceof Wf && (t = t.d_),
    e instanceof Wf && (e = e.d_),
    t instanceof cl &&
      e instanceof cl &&
      t.firestore === e.firestore &&
      Qo(t.C_, e.C_) &&
      t.v_ === e.v_
  );
}
var vl = (function () {
    function t(t, e) {
      if (!isFinite(t) || t < -90 || t > 90)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Latitude must be a number between -90 and 90, but was: " + t
        );
      if (!isFinite(e) || e < -180 || e > 180)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Longitude must be a number between -180 and 180, but was: " + e
        );
      (this.x_ = t), (this.N_ = e);
    }
    return (
      Object.defineProperty(t.prototype, "latitude", {
        get: function () {
          return this.x_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "longitude", {
        get: function () {
          return this.N_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.isEqual = function (t) {
        return this.x_ === t.x_ && this.N_ === t.N_;
      }),
      (t.prototype.toJSON = function () {
        return { latitude: this.x_, longitude: this.N_ };
      }),
      (t.prototype.U = function (t) {
        return vi(this.x_, t.x_) || vi(this.N_, t.N_);
      }),
      t
    );
  })(),
  yl = /^__.*__$/,
  gl = (function () {
    function t(t, e, n) {
      (this.data = t), (this.Gt = e), (this.fieldTransforms = n);
    }
    return (
      (t.prototype.F_ = function (t, e) {
        return null !== this.Gt
          ? new Ss(t, this.data, this.Gt, e, this.fieldTransforms)
          : new As(t, this.data, e, this.fieldTransforms);
      }),
      t
    );
  })(),
  ml = (function () {
    function t(t, e, n) {
      (this.data = t), (this.Gt = e), (this.fieldTransforms = n);
    }
    return (
      (t.prototype.F_ = function (t, e) {
        return new Ss(t, this.data, this.Gt, e, this.fieldTransforms);
      }),
      t
    );
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
 */ function bl(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw hi();
  }
}
var wl = (function () {
    function t(t, e, n, r, i, o) {
      (this.settings = t),
        (this.t = e),
        (this.Qt = n),
        (this.ignoreUndefinedProperties = r),
        void 0 === i && this.O_(),
        (this.fieldTransforms = i || []),
        (this.Gt = o || []);
    }
    return (
      Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this.settings.path;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "k_", {
        get: function () {
          return this.settings.k_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.M_ = function (e) {
        return new t(
          Object.assign(Object.assign({}, this.settings), e),
          this.t,
          this.Qt,
          this.ignoreUndefinedProperties,
          this.fieldTransforms,
          this.Gt
        );
      }),
      (t.prototype.L_ = function (t) {
        var e,
          n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
          r = this.M_({ path: n, B_: !1 });
        return r.q_(t), r;
      }),
      (t.prototype.U_ = function (t) {
        var e,
          n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
          r = this.M_({ path: n, B_: !1 });
        return r.O_(), r;
      }),
      (t.prototype.Q_ = function (t) {
        return this.M_({ path: void 0, B_: !0 });
      }),
      (t.prototype.K_ = function (t) {
        return Fl(
          t,
          this.settings.methodName,
          this.settings.W_ || !1,
          this.path,
          this.settings.j_
        );
      }),
      (t.prototype.contains = function (t) {
        return (
          void 0 !==
            this.Gt.find(function (e) {
              return t.nt(e);
            }) ||
          void 0 !==
            this.fieldTransforms.find(function (e) {
              return t.nt(e.field);
            })
        );
      }),
      (t.prototype.O_ = function () {
        if (this.path)
          for (var t = 0; t < this.path.length; t++) this.q_(this.path.get(t));
      }),
      (t.prototype.q_ = function (t) {
        if (0 === t.length) throw this.K_("Document fields must not be empty");
        if (bl(this.k_) && yl.test(t))
          throw this.K_('Document fields cannot begin and end with "__"');
      }),
      t
    );
  })(),
  El = (function () {
    function t(t, e, n) {
      (this.t = t),
        (this.ignoreUndefinedProperties = e),
        (this.Qt = n || mh(t));
    }
    return (
      (t.prototype.G_ = function (t, e, n, r) {
        return (
          void 0 === r && (r = !1),
          new wl(
            { k_: t, methodName: e, j_: n, path: Li.ct(), B_: !1, W_: r },
            this.t,
            this.Qt,
            this.ignoreUndefinedProperties
          )
        );
      }),
      t
    );
  })();
function _l(t) {
  var e = t.p_(),
    n = mh(t.I_);
  return new El(t.I_, !!e.ignoreUndefinedProperties, n);
}
function Il(t, e, n, r, i, o) {
  void 0 === o && (o = {});
  var s = t.G_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
  Vl("Data must be an object, but it was:", s, r);
  var u,
    a,
    c = Ll(r, s);
  if (o.merge) (u = new ji(s.Gt)), (a = s.fieldTransforms);
  else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var p = Ul(e, l[f], n);
      if (!s.contains(p))
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Field '" +
            p +
            "' is specified in your field mask but missing from your input data."
        );
      ql(h, p) || h.push(p);
    }
    (u = new ji(h)),
      (a = s.fieldTransforms.filter(function (t) {
        return u.Tt(t.field);
      }));
  } else (u = null), (a = s.fieldTransforms);
  return new gl(new co(c), u, a);
}
var Tl = (function (t) {
  function n() {
    return (null !== t && t.apply(this, arguments)) || this;
  }
  return (
    e(n, t),
    (n.prototype.z_ = function (t) {
      if (2 !== t.k_)
        throw 1 === t.k_
          ? t.K_(
              this._methodName +
                "() can only appear at the top level of your update data"
            )
          : t.K_(
              this._methodName +
                "() cannot be used with set() unless you pass {merge:true}"
            );
      return t.Gt.push(t.path), null;
    }),
    (n.prototype.isEqual = function (t) {
      return t instanceof n;
    }),
    n
  );
})(Xf);
function Nl(t, e, n) {
  return new wl(
    { k_: 3, j_: e.settings.j_, methodName: t._methodName, B_: n },
    e.t,
    e.Qt,
    e.ignoreUndefinedProperties
  );
}
var Al = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.z_ = function (t) {
        return new ys(t.path, new as());
      }),
      (n.prototype.isEqual = function (t) {
        return t instanceof n;
      }),
      n
    );
  })(Xf),
  Sl = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, e) || this).H_ = n), r;
    }
    return (
      e(n, t),
      (n.prototype.z_ = function (t) {
        var e = Nl(this, t, !0),
          n = this.H_.map(function (t) {
            return Cl(t, e);
          }),
          r = new cs(n);
        return new ys(t.path, r);
      }),
      (n.prototype.isEqual = function (t) {
        return this === t;
      }),
      n
    );
  })(Xf),
  Dl = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, e) || this).H_ = n), r;
    }
    return (
      e(n, t),
      (n.prototype.z_ = function (t) {
        var e = Nl(this, t, !0),
          n = this.H_.map(function (t) {
            return Cl(t, e);
          }),
          r = new fs(n);
        return new ys(t.path, r);
      }),
      (n.prototype.isEqual = function (t) {
        return this === t;
      }),
      n
    );
  })(Xf),
  Ol = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, e) || this).J_ = n), r;
    }
    return (
      e(n, t),
      (n.prototype.z_ = function (t) {
        var e = new ps(t.Qt, rs(t.Qt, this.J_));
        return new ys(t.path, e);
      }),
      (n.prototype.isEqual = function (t) {
        return this === t;
      }),
      n
    );
  })(Xf);
function xl(t, e, n, r) {
  var i = t.G_(1, e, n);
  Vl("Data must be an object, but it was:", i, r);
  var o = [],
    s = new ho();
  Ui(r, function (t, r) {
    var u = jl(e, t, n);
    r instanceof Wf && (r = r.d_);
    var a = i.U_(u);
    if (r instanceof Tl) o.push(u);
    else {
      var c = Cl(r, a);
      null != c && (o.push(u), s.set(u, c));
    }
  });
  var u = new ji(o);
  return new ml(s.Pt(), u, i.fieldTransforms);
}
function Pl(t, e, n, r, i, o) {
  var s = t.G_(1, e, n),
    u = [Ul(e, r, n)],
    a = [i];
  if (o.length % 2 != 0)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Function " +
        e +
        "() needs to be called with an even number of arguments that alternate between field names and values."
    );
  for (var c = 0; c < o.length; c += 2) u.push(Ul(e, o[c])), a.push(o[c + 1]);
  for (var h = [], f = new ho(), l = u.length - 1; l >= 0; --l)
    if (!ql(h, u[l])) {
      var p = u[l],
        d = a[l];
      d instanceof Wf && (d = d.d_);
      var v = s.U_(p);
      if (d instanceof Tl) h.push(p);
      else {
        var y = Cl(d, v);
        null != y && (h.push(p), f.set(p, y));
      }
    }
  var g = new ji(h);
  return new ml(f.Pt(), g, s.fieldTransforms);
}
function kl(t, e, n, r) {
  return void 0 === r && (r = !1), Cl(n, t.G_(r ? 4 : 3, e));
}
function Cl(t, e) {
  if ((t instanceof Wf && (t = t.d_), Rl(t)))
    return Vl("Unsupported field value:", e, t), Ll(t, e);
  if (t instanceof Xf)
    return (
      (function (t, e) {
        if (!bl(e.k_))
          throw e.K_(
            t._methodName + "() can only be used with update() and set()"
          );
        if (!e.path)
          throw e.K_(
            t._methodName + "() is not currently supported inside arrays"
          );
        var n = t.z_(e);
        n && e.fieldTransforms.push(n);
      })(t, e),
      null
    );
  if (void 0 === t && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.Gt.push(e.path), t instanceof Array)) {
    if (e.settings.B_ && 4 !== e.k_)
      throw e.K_("Nested arrays are not supported");
    return (function (t, e) {
      for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
        var s = Cl(o[i], e.Q_(r));
        null == s && (s = { nullValue: "NULL_VALUE" }), n.push(s), r++;
      }
      return { arrayValue: { values: n } };
    })(t, e);
  }
  return (function (t, e) {
    if ((t instanceof Wf && (t = t.d_), null === t))
      return { nullValue: "NULL_VALUE" };
    if ("number" == typeof t) return rs(e.Qt, t);
    if ("boolean" == typeof t) return { booleanValue: t };
    if ("string" == typeof t) return { stringValue: t };
    if (t instanceof Date) {
      var n = Oi.fromDate(t);
      return { timestampValue: vu(e.Qt, n) };
    }
    if (t instanceof Oi)
      return (
        (n = new Oi(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
        { timestampValue: vu(e.Qt, n) }
      );
    if (t instanceof vl)
      return {
        geoPointValue: { latitude: t.latitude, longitude: t.longitude },
      };
    if (t instanceof Ei) return { bytesValue: yu(e.Qt, t.I) };
    if (t instanceof al) {
      n = e.t;
      var r = t.firestore.I_;
      if (!r.isEqual(n))
        throw e.K_(
          "Document reference is for database " +
            r.projectId +
            "/" +
            r.database +
            " but should be for database " +
            n.projectId +
            "/" +
            n.database
        );
      return { referenceValue: bu(t.firestore.I_ || e.t, t.S_.path) };
    }
    throw e.K_("Unsupported field value: " + nl(t));
  })(t, e);
}
function Ll(t, e) {
  var n = {};
  return (
    Mi(t)
      ? e.path && e.path.length > 0 && e.Gt.push(e.path)
      : Ui(t, function (t, r) {
          var i = Cl(r, e.L_(t));
          null != i && (n[t] = i);
        }),
    { mapValue: { fields: n } }
  );
}
function Rl(t) {
  return !(
    "object" != typeof t ||
    null === t ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof Oi ||
    t instanceof vl ||
    t instanceof Ei ||
    t instanceof al ||
    t instanceof Xf
  );
}
function Vl(t, e, n) {
  if (
    !Rl(n) ||
    "object" != typeof (i = n) ||
    null === i ||
    (Object.getPrototypeOf(i) !== Object.prototype &&
      null !== Object.getPrototypeOf(i))
  ) {
    var r = nl(n);
    throw "an object" === r ? e.K_(t + " a custom object") : e.K_(t + " " + r);
  }
  var i;
}
function Ul(t, e, n) {
  if ((e instanceof Wf && (e = e.d_), e instanceof Qf)) return e.f_;
  if ("string" == typeof e) return jl(t, e);
  throw Fl(
    "Field path arguments must be of type string or FieldPath.",
    t,
    !1,
    void 0,
    n
  );
}
var Ml = new RegExp("[~\\*/\\[\\]]");
function jl(t, e, n) {
  if (e.search(Ml) >= 0)
    throw Fl(
      "Invalid field path (" +
        e +
        "). Paths must not contain '~', '*', '/', '[', or ']'",
      t,
      !1,
      void 0,
      n
    );
  try {
    return new (Qf.bind.apply(Qf, u([void 0], e.split("."))))().f_;
  } catch (r) {
    throw Fl(
      "Invalid field path (" +
        e +
        "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
      t,
      !1,
      void 0,
      n
    );
  }
}
function Fl(t, e, n, r, i) {
  var o = r && !r.et(),
    s = void 0 !== i,
    u = "Function " + e + "() called with invalid data";
  n && (u += " (via `toFirestore()`)");
  var a = "";
  return (
    (o || s) &&
      ((a += " (found"),
      o && (a += " in field " + r),
      s && (a += " in document " + i),
      (a += ")")),
    new wi(bi.INVALID_ARGUMENT, (u += ". ") + t + a)
  );
}
function ql(t, e) {
  return t.some(function (t) {
    return t.isEqual(e);
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
 */ var zl = (function () {
    function t(t) {
      (this.Sh = t),
        (this.Y_ = new Map()),
        (this.mutations = []),
        (this.X_ = !1),
        (this.Z_ = null),
        (this.tf = new Set());
    }
    return (
      (t.prototype.ef = function (t) {
        return r(this, void 0, void 0, function () {
          var e,
            n = this;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                if ((this.nf(), this.mutations.length > 0))
                  throw new wi(
                    bi.INVALID_ARGUMENT,
                    "Firestore transactions require all reads to be executed before all writes."
                  );
                return [
                  4,
                  (function (t, e) {
                    return r(this, void 0, void 0, function () {
                      var n, r, o, s, u, a;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return (
                              (n = li(t)),
                              (r = Nu(n.Qt) + "/documents"),
                              (o = {
                                documents: e.map(function (t) {
                                  return Eu(n.Qt, t);
                                }),
                              }),
                              [4, n.Du("BatchGetDocuments", r, o)]
                            );
                          case 1:
                            return (
                              (s = i.sent()),
                              (u = new Map()),
                              s.forEach(function (t) {
                                var e,
                                  r,
                                  i =
                                    ((e = n.Qt),
                                    "found" in (r = t)
                                      ? (function (t, e) {
                                          fi(!!e.found),
                                            e.found.name,
                                            e.found.updateTime;
                                          var n = _u(t, e.found.name),
                                            r = mu(e.found.updateTime),
                                            i = new co({
                                              mapValue: {
                                                fields: e.found.fields,
                                              },
                                            });
                                          return new po(n, r, i, {});
                                        })(e, r)
                                      : "missing" in r
                                      ? (function (t, e) {
                                          fi(!!e.missing), fi(!!e.readTime);
                                          var n = _u(t, e.missing),
                                            r = mu(e.readTime);
                                          return new vo(n, r);
                                        })(e, r)
                                      : hi());
                                u.set(i.key.toString(), i);
                              }),
                              (a = []),
                              [
                                2,
                                (e.forEach(function (t) {
                                  var e = u.get(t.toString());
                                  fi(!!e), a.push(e);
                                }),
                                a),
                              ]
                            );
                        }
                      });
                    });
                  })(this.Sh, t),
                ];
              case 1:
                return [
                  2,
                  ((e = o.sent()).forEach(function (t) {
                    t instanceof vo || t instanceof po ? n.sf(t) : hi();
                  }),
                  e),
                ];
            }
          });
        });
      }),
      (t.prototype.set = function (t, e) {
        this.write(e.F_(t, this.jt(t))), this.tf.add(t.toString());
      }),
      (t.prototype.update = function (t, e) {
        try {
          this.write(e.F_(t, this.rf(t)));
        } catch (n) {
          this.Z_ = n;
        }
        this.tf.add(t.toString());
      }),
      (t.prototype.delete = function (t) {
        this.write(new Ls(t, this.jt(t))), this.tf.add(t.toString());
      }),
      (t.prototype.commit = function () {
        return r(this, void 0, void 0, function () {
          var t,
            e = this;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                if ((this.nf(), this.Z_)) throw this.Z_;
                return (
                  (t = this.Y_),
                  this.mutations.forEach(function (e) {
                    t.delete(e.key.toString());
                  }),
                  t.forEach(function (t, n) {
                    var r = Ri._t(n);
                    e.mutations.push(new Rs(r, e.jt(r)));
                  }),
                  [
                    4,
                    (function (t, e) {
                      return r(this, void 0, void 0, function () {
                        var n, r, o;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (n = li(t)),
                                (r = Nu(n.Qt) + "/documents"),
                                (o = {
                                  writes: e.map(function (t) {
                                    return Du(n.Qt, t);
                                  }),
                                }),
                                [4, n.pu("Commit", r, o)]
                              );
                            case 1:
                              return i.sent(), [2];
                          }
                        });
                      });
                    })(this.Sh, this.mutations),
                  ]
                );
              case 1:
                return n.sent(), (this.X_ = !0), [2];
            }
          });
        });
      }),
      (t.prototype.sf = function (t) {
        var e;
        if (t instanceof po) e = t.version;
        else {
          if (!(t instanceof vo)) throw hi();
          e = xi.min();
        }
        var n = this.Y_.get(t.key.toString());
        if (n) {
          if (!e.isEqual(n))
            throw new wi(
              bi.ABORTED,
              "Document version changed between two reads."
            );
        } else this.Y_.set(t.key.toString(), e);
      }),
      (t.prototype.jt = function (t) {
        var e = this.Y_.get(t.toString());
        return !this.tf.has(t.toString()) && e ? ms.updateTime(e) : ms.Kt();
      }),
      (t.prototype.rf = function (t) {
        var e = this.Y_.get(t.toString());
        if (!this.tf.has(t.toString()) && e) {
          if (e.isEqual(xi.min()))
            throw new wi(
              bi.INVALID_ARGUMENT,
              "Can't update a document that doesn't exist."
            );
          return ms.updateTime(e);
        }
        return ms.exists(!0);
      }),
      (t.prototype.write = function (t) {
        this.nf(), this.mutations.push(t);
      }),
      (t.prototype.nf = function () {}),
      t
    );
  })(),
  Bl = (function () {
    function t(t, e, n, r) {
      (this._s = t),
        (this.Sh = e),
        (this.updateFunction = n),
        (this.Es = r),
        (this.cf = 5),
        (this.Gu = new bh(this._s, "transaction_retry"));
    }
    return (
      (t.prototype.run = function () {
        this.af();
      }),
      (t.prototype.af = function () {
        var t = this;
        this.Gu.Lu(function () {
          return r(t, void 0, void 0, function () {
            var t,
              e,
              n = this;
            return i(this, function (r) {
              return (
                (t = new zl(this.Sh)),
                (e = this.uf(t)) &&
                  e
                    .then(function (e) {
                      n._s.Ps(function () {
                        return t
                          .commit()
                          .then(function () {
                            n.Es.resolve(e);
                          })
                          .catch(function (t) {
                            n.hf(t);
                          });
                      });
                    })
                    .catch(function (t) {
                      n.hf(t);
                    }),
                [2]
              );
            });
          });
        });
      }),
      (t.prototype.uf = function (t) {
        try {
          var e = this.updateFunction(t);
          return !Ki(e) && e.catch && e.then
            ? e
            : (this.Es.reject(
                Error("Transaction callback must return a Promise")
              ),
              null);
        } catch (n) {
          return this.Es.reject(n), null;
        }
      }),
      (t.prototype.hf = function (t) {
        var e = this;
        this.cf > 0 && this.lf(t)
          ? ((this.cf -= 1),
            this._s.Ps(function () {
              return e.af(), Promise.resolve();
            }))
          : this.Es.reject(t);
      }),
      (t.prototype.lf = function (t) {
        if ("FirebaseError" === t.name) {
          var e = t.code;
          return "aborted" === e || "failed-precondition" === e || !Us(e);
        }
        return !1;
      }),
      t
    );
  })(),
  Gl = (function () {
    function t(t, e, n) {
      var r = this;
      (this.credentials = t),
        (this._s = e),
        (this.yu = n),
        (this.user = _i.UNAUTHENTICATED),
        (this.clientId = di.u()),
        (this._f = function () {}),
        (this.C = new Gu()),
        this.credentials.v(function (t) {
          si("FirestoreClient", "Received user=", t.uid),
            (r.user = t),
            r._f(t),
            r.C.resolve();
        });
    }
    return (
      (t.prototype.getConfiguration = function () {
        return r(this, void 0, void 0, function () {
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.C.promise];
              case 1:
                return [
                  2,
                  (t.sent(),
                  {
                    _s: this._s,
                    yu: this.yu,
                    clientId: this.clientId,
                    credentials: this.credentials,
                    Jl: this.user,
                    pl: 100,
                  }),
                ];
            }
          });
        });
      }),
      (t.prototype.ff = function (t) {
        var e = this;
        (this._f = t),
          this.C.promise.then(function () {
            return e._f(e.user);
          });
      }),
      (t.prototype.df = function () {
        if (this._s.wf)
          throw new wi(
            bi.FAILED_PRECONDITION,
            "The client has already been terminated."
          );
      }),
      (t.prototype.terminate = function () {
        var t = this;
        this._s.Ef();
        var e = new Gu();
        return (
          this._s.Tf(function () {
            return r(t, void 0, void 0, function () {
              var t, n;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 5, , 6]),
                      this.If ? [4, this.If.terminate()] : [3, 2]
                    );
                  case 1:
                    r.sent(), (r.label = 2);
                  case 2:
                    return this.mf ? [4, this.mf.terminate()] : [3, 4];
                  case 3:
                    r.sent(), (r.label = 4);
                  case 4:
                    return this.credentials.S(), e.resolve(), [3, 6];
                  case 5:
                    return (
                      (t = r.sent()),
                      (n = na(t, "Failed to shutdown persistence")),
                      e.reject(n),
                      [3, 6]
                    );
                  case 6:
                    return [2];
                }
              });
            });
          }),
          e.promise
        );
      }),
      t
    );
  })();
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
 */ function Hl(t, e) {
  return r(this, void 0, void 0, function () {
    var n,
      o,
      s = this;
    return i(this, function (u) {
      switch (u.label) {
        case 0:
          return (
            t._s.Af(),
            si("FirestoreClient", "Initializing OfflineComponentProvider"),
            [4, t.getConfiguration()]
          );
        case 1:
          return (n = u.sent()), [4, e.initialize(n)];
        case 2:
          return (
            u.sent(),
            (o = n.Jl),
            t.ff(function (n) {
              o.isEqual(n) ||
                ((o = n),
                t._s.po(function () {
                  return r(s, void 0, void 0, function () {
                    return i(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, Lc(e.bh, n)];
                        case 1:
                          return t.sent(), [2];
                      }
                    });
                  });
                }));
            }),
            e.persistence.Po(function () {
              return t.terminate();
            }),
            (t.mf = e),
            [2]
          );
      }
    });
  });
}
function Yl(t, e) {
  return r(this, void 0, void 0, function () {
    var n, o;
    return i(this, function (s) {
      switch (s.label) {
        case 0:
          return t._s.Af(), [4, Kl(t)];
        case 1:
          return (
            (n = s.sent()),
            si("FirestoreClient", "Initializing OnlineComponentProvider"),
            [4, t.getConfiguration()]
          );
        case 2:
          return (o = s.sent()), [4, e.initialize(n, o)];
        case 3:
          return (
            s.sent(),
            t.ff(function (n) {
              return t._s.po(function () {
                return (function (t, e) {
                  return r(this, void 0, void 0, function () {
                    var n, r;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = li(t))._s.Af(),
                            si(
                              "RemoteStore",
                              "RemoteStore received new credentials"
                            ),
                            (r = Lh(n)),
                            n.Nh.add(3),
                            [4, Sh(n)]
                          );
                        case 1:
                          return (
                            i.sent(), r && n.Oh.set("Unknown"), [4, n.Dh.n_(e)]
                          );
                        case 2:
                          return i.sent(), n.Nh.delete(3), [4, Ah(n)];
                        case 3:
                          return i.sent(), [2];
                      }
                    });
                  });
                })(e.yl, n);
              });
            }),
            (t.If = e),
            [2]
          );
      }
    });
  });
}
function Kl(t) {
  return r(this, void 0, void 0, function () {
    return i(this, function (e) {
      switch (e.label) {
        case 0:
          return t.mf
            ? [3, 2]
            : (si("FirestoreClient", "Using default OfflineComponentProvider"),
              [4, Hl(t, new Bf())]);
        case 1:
          e.sent(), (e.label = 2);
        case 2:
          return [2, t.mf];
      }
    });
  });
}
function Ql(t) {
  return r(this, void 0, void 0, function () {
    return i(this, function (e) {
      switch (e.label) {
        case 0:
          return t.If
            ? [3, 2]
            : (si("FirestoreClient", "Using default OnlineComponentProvider"),
              [4, Yl(t, new Yf())]);
        case 1:
          e.sent(), (e.label = 2);
        case 2:
          return [2, t.If];
      }
    });
  });
}
function Xl(t) {
  return Kl(t).then(function (t) {
    return t.persistence;
  });
}
function Wl(t) {
  return Kl(t).then(function (t) {
    return t.bh;
  });
}
function Jl(t) {
  return Ql(t).then(function (t) {
    return t.yl;
  });
}
function Zl(t) {
  return Ql(t).then(function (t) {
    return t._a;
  });
}
function $l(t) {
  return r(this, void 0, void 0, function () {
    var e, n;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          return [4, Ql(t)];
        case 1:
          return (
            (e = r.sent()),
            [
              2,
              (((n = e.gl).jh = lf.bind(null, e._a)),
              (n.Hh = df.bind(null, e._a)),
              n),
            ]
          );
      }
    });
  });
}
function tp(t, e, n) {
  var o = this;
  void 0 === n && (n = {});
  var s = new Gu();
  return (
    t._s.Ps(function () {
      return r(o, void 0, void 0, function () {
        var r;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              return (
                (r = function (t, e, n, r, i) {
                  var o = new Kf({
                      next: function (o) {
                        e.Ps(function () {
                          return tf(t, s);
                        });
                        var u = o.docs.has(n);
                        !u && o.fromCache
                          ? i.reject(
                              new wi(
                                bi.UNAVAILABLE,
                                "Failed to get document because the client is offline."
                              )
                            )
                          : u && o.fromCache && r && "server" === r.source
                          ? i.reject(
                              new wi(
                                bi.UNAVAILABLE,
                                'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                              )
                            )
                          : i.resolve(o);
                      },
                      error: function (t) {
                        return i.reject(t);
                      },
                    }),
                    s = new of(jo(n.path), o, {
                      includeMetadataChanges: !0,
                      nl: !0,
                    });
                  return $h(t, s);
                }),
                [4, $l(t)]
              );
            case 1:
              return [2, r.apply(void 0, [i.sent(), t._s, e, n, s])];
          }
        });
      });
    }),
    s.promise
  );
}
function ep(t, e, n) {
  var o = this;
  void 0 === n && (n = {});
  var s = new Gu();
  return (
    t._s.Ps(function () {
      return r(o, void 0, void 0, function () {
        var r;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              return (
                (r = function (t, e, n, r, i) {
                  var o = new Kf({
                      next: function (n) {
                        e.Ps(function () {
                          return tf(t, s);
                        }),
                          n.fromCache && "server" === r.source
                            ? i.reject(
                                new wi(
                                  bi.UNAVAILABLE,
                                  'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                )
                              )
                            : i.resolve(n);
                      },
                      error: function (t) {
                        return i.reject(t);
                      },
                    }),
                    s = new of(n, o, { includeMetadataChanges: !0, nl: !0 });
                  return $h(t, s);
                }),
                [4, $l(t)]
              );
            case 1:
              return [2, r.apply(void 0, [i.sent(), t._s, e, n, s])];
          }
        });
      });
    }),
    s.promise
  );
}
var np = (function () {
  function t() {
    var t = this;
    (this.Rf = Promise.resolve()),
      (this.Pf = []),
      (this.yf = !1),
      (this.gf = []),
      (this.Vf = null),
      (this.pf = !1),
      (this.bf = []),
      (this.Gu = new bh(this, "async_queue_retry")),
      (this.vf = function () {
        var e = gh();
        e &&
          si("AsyncQueue", "Visibility state changed to " + e.visibilityState),
          t.Gu.qu();
      });
    var e = gh();
    e &&
      "function" == typeof e.addEventListener &&
      e.addEventListener("visibilitychange", this.vf);
  }
  return (
    Object.defineProperty(t.prototype, "wf", {
      get: function () {
        return this.yf;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.Ps = function (t) {
      this.enqueue(t);
    }),
    (t.prototype.Tf = function (t) {
      this.Sf(), this.Df(t);
    }),
    (t.prototype.Ef = function () {
      if (!this.yf) {
        this.yf = !0;
        var t = gh();
        t &&
          "function" == typeof t.removeEventListener &&
          t.removeEventListener("visibilitychange", this.vf);
      }
    }),
    (t.prototype.enqueue = function (t) {
      return this.Sf(), this.yf ? new Promise(function (t) {}) : this.Df(t);
    }),
    (t.prototype.po = function (t) {
      var e = this;
      this.Ps(function () {
        return e.Pf.push(t), e.Cf();
      });
    }),
    (t.prototype.Cf = function () {
      return r(this, void 0, void 0, function () {
        var t,
          e = this;
        return i(this, function (n) {
          switch (n.label) {
            case 0:
              if (0 === this.Pf.length) return [3, 5];
              n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this.Pf[0]()];
            case 2:
              return n.sent(), this.Pf.shift(), this.Gu.reset(), [3, 4];
            case 3:
              if (!Wu((t = n.sent()))) throw t;
              return (
                si("AsyncQueue", "Operation failed with retryable error: " + t),
                [3, 4]
              );
            case 4:
              this.Pf.length > 0 &&
                this.Gu.Lu(function () {
                  return e.Cf();
                }),
                (n.label = 5);
            case 5:
              return [2];
          }
        });
      });
    }),
    (t.prototype.Df = function (t) {
      var e = this,
        n = this.Rf.then(function () {
          return (
            (e.pf = !0),
            t()
              .catch(function (t) {
                throw (
                  ((e.Vf = t),
                  (e.pf = !1),
                  ui(
                    "INTERNAL UNHANDLED ERROR: ",
                    ((r = (n = t).message || ""),
                    n.stack &&
                      (r = n.stack.includes(n.message)
                        ? n.stack
                        : n.message + "\n" + n.stack),
                    r)
                  ),
                  t)
                );
                var n, r;
              })
              .then(function (t) {
                return (e.pf = !1), t;
              })
          );
        });
      return (this.Rf = n), n;
    }),
    (t.prototype.Tr = function (t, e, n) {
      var r = this;
      this.Sf(), this.bf.indexOf(t) > -1 && (e = 0);
      var i = ea.Ts(this, t, e, n, function (t) {
        return r.xf(t);
      });
      return this.gf.push(i), i;
    }),
    (t.prototype.Sf = function () {
      this.Vf && hi();
    }),
    (t.prototype.Af = function () {}),
    (t.prototype.Nf = function () {
      return r(this, void 0, void 0, function () {
        var t;
        return i(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, (t = this.Rf)];
            case 1:
              e.sent(), (e.label = 2);
            case 2:
              if (t !== this.Rf) return [3, 0];
              e.label = 3;
            case 3:
              return [2];
          }
        });
      });
    }),
    (t.prototype.$f = function (t) {
      for (var e = 0, n = this.gf; e < n.length; e++)
        if (n[e].fs === t) return !0;
      return !1;
    }),
    (t.prototype.Ff = function (t) {
      var e = this;
      return this.Nf().then(function () {
        e.gf.sort(function (t, e) {
          return t.ds - e.ds;
        });
        for (var n = 0, r = e.gf; n < r.length; n++) {
          var i = r[n];
          if ((i.Rs(), "all" !== t && i.fs === t)) break;
        }
        return e.Nf();
      });
    }),
    (t.prototype.Of = function (t) {
      this.bf.push(t);
    }),
    (t.prototype.xf = function (t) {
      var e = this.gf.indexOf(t);
      this.gf.splice(e, 1);
    }),
    t
  );
})();
function rp(t) {
  return (function (t, e) {
    if ("object" != typeof t || null === t) return !1;
    for (
      var n = t, r = 0, i = ["next", "error", "complete"];
      r < i.length;
      r++
    ) {
      var o = i[r];
      if (o in n && "function" == typeof n[o]) return !0;
    }
    return !1;
  })(t);
}
var ip = (function (t) {
  function n(e, n) {
    var r = this;
    return (
      ((r = t.call(this, e, n) || this).Bf = new np()),
      (r.w_ = "name" in e ? e.name : "[DEFAULT]"),
      r
    );
  }
  return (
    e(n, t),
    (n.prototype.b_ = function () {
      return this.qf || sp(this), this.qf.terminate();
    }),
    n
  );
})(ul);
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
 */ function op(t) {
  return t.qf || sp(t), t.qf.df(), t.qf;
}
function sp(t) {
  var e,
    n,
    r,
    i = t.p_(),
    o =
      ((e = t.I_),
      (n = t.w_),
      new ni(
        e,
        n,
        (r = i).host,
        r.ssl,
        r.experimentalForceLongPolling,
        r.experimentalAutoDetectLongPolling
      ));
  t.qf = new Gl(t.m_, t.Bf, o);
}
function up(t, e, n) {
  var o = this,
    s = new Gu();
  return t._s
    .enqueue(function () {
      return r(o, void 0, void 0, function () {
        var r;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 3, , 4]), [4, Hl(t, n)];
            case 1:
              return i.sent(), [4, Yl(t, e)];
            case 2:
              return i.sent(), s.resolve(), [3, 4];
            case 3:
              if (
                !("FirebaseError" === (o = r = i.sent()).name
                  ? o.code === bi.FAILED_PRECONDITION ||
                    o.code === bi.UNIMPLEMENTED
                  : !(
                      "undefined" != typeof DOMException &&
                      o instanceof DOMException
                    ) ||
                    22 === o.code ||
                    20 === o.code ||
                    11 === o.code)
              )
                throw r;
              return (
                console.warn(
                  "Error enabling offline persistence. Falling back to persistence disabled: " +
                    r
                ),
                s.reject(r),
                [3, 4]
              );
            case 4:
              return [2];
          }
          var o;
        });
      });
    })
    .then(function () {
      return s.promise;
    });
}
function ap(t) {
  if (t.R_ || t.P_)
    throw new wi(
      bi.FAILED_PRECONDITION,
      "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."
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
 */ var cp = (function () {
    function t() {}
    return (
      (t.prototype.Uf = function (t, e) {
        switch ((void 0 === e && (e = "none"), Wi(t))) {
          case 0:
            return null;
          case 1:
            return t.booleanValue;
          case 2:
            return zi(t.integerValue || t.doubleValue);
          case 3:
            return this.Qf(t.timestampValue);
          case 4:
            return this.Kf(t, e);
          case 5:
            return t.stringValue;
          case 6:
            return this.Wf(Bi(t.bytesValue));
          case 7:
            return this.jf(t.referenceValue);
          case 8:
            return this.Gf(t.geoPointValue);
          case 9:
            return this.zf(t.arrayValue, e);
          case 10:
            return this.Hf(t.mapValue, e);
          default:
            throw hi();
        }
      }),
      (t.prototype.Hf = function (t, e) {
        var n = this,
          r = {};
        return (
          Ui(t.fields || {}, function (t, i) {
            r[t] = n.Uf(i, e);
          }),
          r
        );
      }),
      (t.prototype.Gf = function (t) {
        return new vl(zi(t.latitude), zi(t.longitude));
      }),
      (t.prototype.zf = function (t, e) {
        var n = this;
        return (t.values || []).map(function (t) {
          return n.Uf(t, e);
        });
      }),
      (t.prototype.Kf = function (t, e) {
        switch (e) {
          case "previous":
            var n = Hi(t);
            return null == n ? null : this.Uf(n, e);
          case "estimate":
            return this.Qf(Yi(t));
          default:
            return null;
        }
      }),
      (t.prototype.Qf = function (t) {
        var e = qi(t);
        return new Oi(e.seconds, e.nanos);
      }),
      (t.prototype.Jf = function (t, e) {
        var n = ki.ot(t);
        fi(Bu(n));
        var r = new ri(n.get(1), n.get(3)),
          i = new Ri(n.Y(5));
        return (
          r.isEqual(e) ||
            ui(
              "Document " +
                i +
                " contains a document reference within a different database (" +
                r.projectId +
                "/" +
                r.database +
                ") which is not supported. It will be treated as a reference in the current database (" +
                e.projectId +
                "/" +
                e.database +
                ") instead."
            ),
          i
        );
      }),
      t
    );
  })(),
  hp = (function () {
    function t(t, e, n, r, i) {
      (this.Yf = t), (this.Xf = e), (this.S_ = n), (this.Zf = r), (this.v_ = i);
    }
    return (
      Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this.S_.path.tt();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "ref", {
        get: function () {
          return new al(this.Yf, this.v_, this.S_);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.exists = function () {
        return null !== this.Zf;
      }),
      (t.prototype.data = function () {
        if (this.Zf) {
          if (this.v_) {
            var t = new fp(this.Yf, this.Xf, this.S_, this.Zf, null);
            return this.v_.fromFirestore(t);
          }
          return this.Xf.Uf(this.Zf.bt());
        }
      }),
      (t.prototype.get = function (t) {
        if (this.Zf) {
          var e = this.Zf.data().field(lp("DocumentSnapshot.get", t));
          if (null !== e) return this.Xf.Uf(e);
        }
      }),
      t
    );
  })(),
  fp = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.data = function () {
        return t.prototype.data.call(this);
      }),
      n
    );
  })(hp);
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
 */ function lp(t, e) {
  return "string" == typeof e ? jl(t, e) : e instanceof Wf ? e.d_.f_ : e.f_;
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
 */ function pp(t) {
  if (qo(t) && 0 === t.xt.length)
    throw new wi(
      bi.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
var dp = function () {};
function vp(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  for (var r = 0, i = e; r < i.length; r++) {
    var o = i[r];
    t = o.td(t);
  }
  return t;
}
var yp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this) || this).ed = e),
        (i.nd = n),
        (i.sd = r),
        (i.type = "where"),
        i
      );
    }
    return (
      e(n, t),
      (n.prototype.td = function (t) {
        var e,
          n,
          r,
          i = _l(t.firestore),
          o = (function (t, e, n, r, i, o, s) {
            var u;
            if (i.ut()) {
              if ("array-contains" === o || "array-contains-any" === o)
                throw new wi(
                  bi.INVALID_ARGUMENT,
                  "Invalid Query. You can't perform '" +
                    o +
                    "' queries on FieldPath.documentId()."
                );
              if ("in" === o || "not-in" === o) {
                Ip(s, o);
                for (var a = [], c = 0, h = s; c < h.length; c++) {
                  var f = h[c];
                  a.push(_p(r, t, f));
                }
                u = { arrayValue: { values: a } };
              } else u = _p(r, t, s);
            } else
              ("in" !== o && "not-in" !== o && "array-contains-any" !== o) ||
                Ip(s, o),
                (u = kl(n, "where", s, "in" === o || "not-in" === o));
            var l = _o.create(i, o, u);
            return (
              (function (t, e) {
                if (e.Ct()) {
                  var n = Bo(t);
                  if (null !== n && !n.isEqual(e.field))
                    throw new wi(
                      bi.INVALID_ARGUMENT,
                      "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                        n.toString() +
                        "' and '" +
                        e.field.toString() +
                        "'"
                    );
                  var r = zo(t);
                  null !== r && Tp(t, e.field, r);
                }
                var i = (function (t, e) {
                  for (var n = 0, r = t.filters; n < r.length; n++) {
                    var i = r[n];
                    if (e.indexOf(i.op) >= 0) return i.op;
                  }
                  return null;
                })(
                  t,
                  (function (t) {
                    switch (t) {
                      case "!=":
                        return ["!=", "not-in"];
                      case "array-contains":
                        return [
                          "array-contains",
                          "array-contains-any",
                          "not-in",
                        ];
                      case "in":
                        return ["array-contains-any", "in", "not-in"];
                      case "array-contains-any":
                        return [
                          "array-contains",
                          "array-contains-any",
                          "in",
                          "not-in",
                        ];
                      case "not-in":
                        return [
                          "array-contains",
                          "array-contains-any",
                          "in",
                          "not-in",
                          "!=",
                        ];
                      default:
                        return [];
                    }
                  })(e.op)
                );
                if (null !== i)
                  throw i === e.op
                    ? new wi(
                        bi.INVALID_ARGUMENT,
                        "Invalid query. You cannot use more than one '" +
                          e.op.toString() +
                          "' filter."
                      )
                    : new wi(
                        bi.INVALID_ARGUMENT,
                        "Invalid query. You cannot use '" +
                          e.op.toString() +
                          "' filters with '" +
                          i.toString() +
                          "' filters."
                      );
              })(t, l),
              l
            );
          })(t.C_, 0, i, t.firestore.I_, this.ed, this.nd, this.sd);
        return new cl(
          t.firestore,
          t.v_,
          ((e = t.C_),
          (n = o),
          (r = e.filters.concat([n])),
          new Uo(
            e.path,
            e.collectionGroup,
            e.xt.slice(),
            r,
            e.limit,
            e.limitType,
            e.startAt,
            e.endAt
          ))
        );
      }),
      n
    );
  })(dp),
  gp = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this) || this).ed = e), (r.rd = n), (r.type = "orderBy"), r
      );
    }
    return (
      e(n, t),
      (n.prototype.td = function (t) {
        var e,
          n,
          r,
          i = (function (t, e, n) {
            if (null !== t.startAt)
              throw new wi(
                bi.INVALID_ARGUMENT,
                "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
              );
            if (null !== t.endAt)
              throw new wi(
                bi.INVALID_ARGUMENT,
                "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
              );
            var r = new Co(e, n);
            return (
              (function (t, e) {
                if (null === zo(t)) {
                  var n = Bo(t);
                  null !== n && Tp(t, n, e.field);
                }
              })(t, r),
              r
            );
          })(t.C_, this.ed, this.rd);
        return new cl(
          t.firestore,
          t.v_,
          ((e = t.C_),
          (n = i),
          (r = e.xt.concat([n])),
          new Uo(
            e.path,
            e.collectionGroup,
            r,
            e.filters.slice(),
            e.limit,
            e.limitType,
            e.startAt,
            e.endAt
          ))
        );
      }),
      n
    );
  })(dp),
  mp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return ((i = t.call(this) || this).type = e), (i.od = n), (i.ad = r), i;
    }
    return (
      e(n, t),
      (n.prototype.td = function (t) {
        return new cl(t.firestore, t.v_, Ko(t.C_, this.od, this.ad));
      }),
      n
    );
  })(dp),
  bp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return ((i = t.call(this) || this).type = e), (i.ud = n), (i.hd = r), i;
    }
    return (
      e(n, t),
      (n.prototype.td = function (t) {
        var e,
          n,
          r = Ep(t, this.type, this.ud, this.hd);
        return new cl(
          t.firestore,
          t.v_,
          ((e = t.C_),
          (n = r),
          new Uo(
            e.path,
            e.collectionGroup,
            e.xt.slice(),
            e.filters.slice(),
            e.limit,
            e.limitType,
            n,
            e.endAt
          ))
        );
      }),
      n
    );
  })(dp),
  wp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return ((i = t.call(this) || this).type = e), (i.ud = n), (i.hd = r), i;
    }
    return (
      e(n, t),
      (n.prototype.td = function (t) {
        var e,
          n,
          r = Ep(t, this.type, this.ud, this.hd);
        return new cl(
          t.firestore,
          t.v_,
          ((e = t.C_),
          (n = r),
          new Uo(
            e.path,
            e.collectionGroup,
            e.xt.slice(),
            e.filters.slice(),
            e.limit,
            e.limitType,
            e.startAt,
            n
          ))
        );
      }),
      n
    );
  })(dp);
function Ep(t, e, n, r) {
  if ((n[0] instanceof Wf && (n[0] = n[0].d_), n[0] instanceof hp))
    return (function (t, e, n, r, i) {
      if (!r)
        throw new wi(
          bi.NOT_FOUND,
          "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."
        );
      for (var o = [], s = 0, u = Ho(t); s < u.length; s++) {
        var a = u[s];
        if (a.field.ut()) o.push(ro(e, r.key));
        else {
          var c = r.field(a.field);
          if (Gi(c))
            throw new wi(
              bi.INVALID_ARGUMENT,
              'Invalid query. You are trying to start or end a query using a document for which the field "' +
                a.field +
                '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
            );
          if (null === c) {
            var h = a.field.rt();
            throw new wi(
              bi.INVALID_ARGUMENT,
              "Invalid query. You are trying to start or end a query using a document for which the field '" +
                h +
                "' (used as the orderBy) does not exist."
            );
          }
          o.push(c);
        }
      }
      return new Po(o, i);
    })(t.C_, t.firestore.I_, e, n[0].Zf, r);
  var i = _l(t.firestore);
  return (function (t, e, n, r, i, o) {
    var s = t.xt;
    if (i.length > s.length)
      throw new wi(
        bi.INVALID_ARGUMENT,
        "Too many arguments provided to " +
          r +
          "(). The number of arguments must be less than or equal to the number of orderBy() clauses"
      );
    for (var u = [], a = 0; a < i.length; a++) {
      var c = i[a];
      if (s[a].field.ut()) {
        if ("string" != typeof c)
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Invalid query. Expected a string for document ID in " +
              r +
              "(), but got a " +
              typeof c
          );
        if (!Go(t) && -1 !== c.indexOf("/"))
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
              r +
              "() must be a plain document ID, but '" +
              c +
              "' contains a slash."
          );
        var h = t.path.child(ki.ot(c));
        if (!Ri.wt(h))
          throw new wi(
            bi.INVALID_ARGUMENT,
            "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
              r +
              "() must result in a valid document path, but '" +
              h +
              "' is not because it contains an odd number of segments."
          );
        var f = new Ri(h);
        u.push(ro(e, f));
      } else {
        var l = kl(n, r, c);
        u.push(l);
      }
    }
    return new Po(u, o);
  })(t.C_, t.firestore.I_, i, e, n, r);
}
function _p(t, e, n) {
  if ((n instanceof Wf && (n = n.d_), "string" == typeof n)) {
    if ("" === n)
      throw new wi(
        bi.INVALID_ARGUMENT,
        "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!Go(e) && -1 !== n.indexOf("/"))
      throw new wi(
        bi.INVALID_ARGUMENT,
        "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
          n +
          "' contains a '/' character."
      );
    var r = e.path.child(ki.ot(n));
    if (!Ri.wt(r))
      throw new wi(
        bi.INVALID_ARGUMENT,
        "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
          r +
          "' is not because it has an odd number of segments (" +
          r.length +
          ")."
      );
    return ro(t, new Ri(r));
  }
  if (n instanceof al) return ro(t, n.S_);
  throw new wi(
    bi.INVALID_ARGUMENT,
    "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
      nl(n) +
      "."
  );
}
function Ip(t, e) {
  if (!Array.isArray(t) || 0 === t.length)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid Query. A non-empty array is required for '" +
        e.toString() +
        "' filters."
    );
  if (t.length > 10)
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid Query. '" +
        e.toString() +
        "' filters support a maximum of 10 elements in the value array."
    );
}
function Tp(t, e, n) {
  if (!n.isEqual(e))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
        e.toString() +
        "' and so you must also use '" +
        e.toString() +
        "' as your first argument to orderBy(), but your first orderBy() is on field '" +
        n.toString() +
        "' instead."
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
 */ function Np(t, e, n) {
  return t
    ? n && (n.merge || n.mergeFields)
      ? t.toFirestore(e, n)
      : t.toFirestore(e)
    : e;
}
var Ap = (function (t) {
    function n(e) {
      var n = this;
      return ((n = t.call(this) || this).firestore = e), n;
    }
    return (
      e(n, t),
      (n.prototype.Wf = function (t) {
        return new Ei(t);
      }),
      (n.prototype.jf = function (t) {
        var e = this.Jf(t, this.firestore.I_);
        return new al(this.firestore, null, e);
      }),
      n
    );
  })(cp),
  Sp = (function () {
    function t(t, e) {
      (this.hasPendingWrites = t), (this.fromCache = e);
    }
    return (
      (t.prototype.isEqual = function (t) {
        return (
          this.hasPendingWrites === t.hasPendingWrites &&
          this.fromCache === t.fromCache
        );
      }),
      t
    );
  })(),
  Dp = (function (t) {
    function n(e, n, r, i, o, s) {
      var u = this;
      return (
        ((u = t.call(this, e, n, r, i, s) || this).Yf = e),
        (u.ld = e),
        (u.metadata = o),
        u
      );
    }
    return (
      e(n, t),
      (n.prototype.exists = function () {
        return t.prototype.exists.call(this);
      }),
      (n.prototype.data = function (t) {
        if ((void 0 === t && (t = {}), this.Zf)) {
          if (this.v_) {
            var e = new Op(
              this.Yf,
              this.Xf,
              this.S_,
              this.Zf,
              this.metadata,
              null
            );
            return this.v_.fromFirestore(e, t);
          }
          return this.Xf.Uf(this.Zf.bt(), t.serverTimestamps);
        }
      }),
      (n.prototype.get = function (t, e) {
        if ((void 0 === e && (e = {}), this.Zf)) {
          var n = this.Zf.data().field(lp("DocumentSnapshot.get", t));
          if (null !== n) return this.Xf.Uf(n, e.serverTimestamps);
        }
      }),
      n
    );
  })(hp),
  Op = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.data = function (e) {
        return void 0 === e && (e = {}), t.prototype.data.call(this, e);
      }),
      n
    );
  })(Dp),
  xp = (function () {
    function t(t, e, n, r) {
      (this.Yf = t),
        (this.Xf = e),
        (this._d = r),
        (this.metadata = new Sp(r.hasPendingWrites, r.fromCache)),
        (this.query = n);
    }
    return (
      Object.defineProperty(t.prototype, "docs", {
        get: function () {
          var t = [];
          return (
            this.forEach(function (e) {
              return t.push(e);
            }),
            t
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this._d.docs.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "empty", {
        get: function () {
          return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.forEach = function (t, e) {
        var n = this;
        this._d.docs.forEach(function (r) {
          t.call(
            e,
            new Op(
              n.Yf,
              n.Xf,
              r.key,
              r,
              new Sp(n._d.De.has(r.key), n._d.fromCache),
              n.query.v_
            )
          );
        });
      }),
      (t.prototype.docChanges = function (t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this._d.xe)
          throw new wi(
            bi.INVALID_ARGUMENT,
            "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
          );
        return (
          (this.fd && this.dd === e) ||
            ((this.fd = (function (t, e) {
              if (t._d.Se.et()) {
                var n = 0;
                return t._d.docChanges.map(function (e) {
                  var r = new Op(
                    t.Yf,
                    t.Xf,
                    e.doc.key,
                    e.doc,
                    new Sp(t._d.De.has(e.doc.key), t._d.fromCache),
                    t.query.v_
                  );
                  return (
                    e.doc,
                    { type: "added", doc: r, oldIndex: -1, newIndex: n++ }
                  );
                });
              }
              var r = t._d.Se;
              return t._d.docChanges
                .filter(function (t) {
                  return e || 3 !== t.type;
                })
                .map(function (e) {
                  var n = new Op(
                      t.Yf,
                      t.Xf,
                      e.doc.key,
                      e.doc,
                      new Sp(t._d.De.has(e.doc.key), t._d.fromCache),
                      t.query.v_
                    ),
                    i = -1,
                    o = -1;
                  return (
                    0 !== e.type &&
                      ((i = r.indexOf(e.doc.key)), (r = r.delete(e.doc.key))),
                    1 !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)),
                    { type: Pp(e.type), doc: n, oldIndex: i, newIndex: o }
                  );
                });
            })(this, e)),
            (this.dd = e)),
          this.fd
        );
      }),
      t
    );
  })();
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
 */ function Pp(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return hi();
  }
}
function kp(t, e) {
  return t instanceof Dp && e instanceof Dp
    ? t.Yf === e.Yf &&
        t.S_.isEqual(e.S_) &&
        (null === t.Zf ? null === e.Zf : t.Zf.isEqual(e.Zf)) &&
        t.v_ === e.v_
    : t instanceof xp &&
        e instanceof xp &&
        t.Yf === e.Yf &&
        dl(t.query, e.query) &&
        t.metadata.isEqual(e.metadata) &&
        t._d.isEqual(e._d);
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
 */ var Cp = (function (t) {
  function n(e) {
    var n = this;
    return ((n = t.call(this) || this).firestore = e), n;
  }
  return (
    e(n, t),
    (n.prototype.Wf = function (t) {
      return new Ei(t);
    }),
    (n.prototype.jf = function (t) {
      var e = this.Jf(t, this.firestore.I_);
      return new al(this.firestore, null, e);
    }),
    n
  );
})(cp);
function Lp(t, e, n) {
  for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
  t = rl(t, al);
  var o = rl(t.firestore, ip),
    s = _l(o);
  return (
    e instanceof Wf && (e = e.d_),
    Vp(o, [
      ("string" == typeof e || e instanceof Qf
        ? Pl(s, "updateDoc", t.S_, e, n, r)
        : xl(s, "updateDoc", t.S_, e)
      ).F_(t.S_, ms.exists(!0)),
    ])
  );
}
function Rp(t) {
  for (var e, n, o, s = [], u = 1; u < arguments.length; u++)
    s[u - 1] = arguments[u];
  t instanceof Wf && (t = t.d_);
  var a = { includeMetadataChanges: !1 },
    c = 0;
  "object" != typeof s[c] || rp(s[c]) || ((a = s[c]), c++);
  var h,
    f,
    l,
    p = { includeMetadataChanges: a.includeMetadataChanges };
  if (rp(s[c])) {
    var d = s[c];
    (s[c] = null === (e = d.next) || void 0 === e ? void 0 : e.bind(d)),
      (s[c + 1] = null === (n = d.error) || void 0 === n ? void 0 : n.bind(d)),
      (s[c + 2] =
        null === (o = d.complete) || void 0 === o ? void 0 : o.bind(d));
  }
  if (t instanceof al)
    (f = rl(t.firestore, ip)),
      (l = jo(t.S_.path)),
      (h = {
        next: function (e) {
          s[c] && s[c](Up(f, t, e));
        },
        error: s[c + 1],
        complete: s[c + 2],
      });
  else {
    var v = rl(t, cl);
    (f = rl(v.firestore, ip)), (l = v.C_);
    var y = new Cp(f);
    (h = {
      next: function (t) {
        s[c] && s[c](new xp(f, y, v, t));
      },
      error: s[c + 1],
      complete: s[c + 2],
    }),
      pp(t.C_);
  }
  return (function (t, e, n, o) {
    var s = this,
      u = new Kf(o),
      a = new of(e, u, n);
    return (
      t._s.Ps(function () {
        return r(s, void 0, void 0, function () {
          var e;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = $h), [4, $l(t)];
              case 1:
                return [2, e.apply(void 0, [n.sent(), a])];
            }
          });
        });
      }),
      function () {
        u.i_(),
          t._s.Ps(function () {
            return r(s, void 0, void 0, function () {
              var e;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (e = tf), [4, $l(t)];
                  case 1:
                    return [2, e.apply(void 0, [n.sent(), a])];
                }
              });
            });
          });
      }
    );
  })(op(f), l, p, h);
}
function Vp(t, e) {
  return (function (t, e) {
    var n = this,
      o = new Gu();
    return (
      t._s.Ps(function () {
        return r(n, void 0, void 0, function () {
          var n;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return (n = vf), [4, Zl(t)];
              case 1:
                return [2, n.apply(void 0, [r.sent(), e, o])];
            }
          });
        });
      }),
      o.promise
    );
  })(op(t), e);
}
function Up(t, e, n) {
  var r = n.docs.get(e.S_),
    i = new Cp(t);
  return new Dp(t, i, e.S_, r, new Sp(n.hasPendingWrites, n.fromCache), e.v_);
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
 */ var Mp = (function () {
  function t(t, e) {
    (this.Yf = t),
      (this.wd = e),
      (this.Ed = []),
      (this.Td = !1),
      (this.Id = _l(t));
  }
  return (
    (t.prototype.set = function (t, e, n) {
      this.md();
      var r = jp(t, this.Yf),
        i = Np(r.v_, e, n),
        o = Il(this.Id, "WriteBatch.set", r.S_, i, null !== r.v_, n);
      return this.Ed.push(o.F_(r.S_, ms.Kt())), this;
    }),
    (t.prototype.update = function (t, e, n) {
      for (var r = [], i = 3; i < arguments.length; i++)
        r[i - 3] = arguments[i];
      this.md();
      var o,
        s = jp(t, this.Yf);
      return (
        e instanceof Wf && (e = e.d_),
        (o =
          "string" == typeof e || e instanceof Qf
            ? Pl(this.Id, "WriteBatch.update", s.S_, e, n, r)
            : xl(this.Id, "WriteBatch.update", s.S_, e)),
        this.Ed.push(o.F_(s.S_, ms.exists(!0))),
        this
      );
    }),
    (t.prototype.delete = function (t) {
      this.md();
      var e = jp(t, this.Yf);
      return (this.Ed = this.Ed.concat(new Ls(e.S_, ms.Kt()))), this;
    }),
    (t.prototype.commit = function () {
      return (
        this.md(),
        (this.Td = !0),
        this.Ed.length > 0 ? this.wd(this.Ed) : Promise.resolve()
      );
    }),
    (t.prototype.md = function () {
      if (this.Td)
        throw new wi(
          bi.FAILED_PRECONDITION,
          "A write batch can no longer be used after commit() has been called."
        );
    }),
    t
  );
})();
function jp(t, e) {
  if ((t instanceof Wf && (t = t.d_), t.firestore !== e))
    throw new wi(
      bi.INVALID_ARGUMENT,
      "Provided document reference is from a different Firestore instance."
    );
  return t;
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
 */
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
 */ var Fp = (function (t) {
  function n(e, n) {
    var r = this;
    return ((r = t.call(this, e, n) || this).Yf = e), r;
  }
  return (
    e(n, t),
    (n.prototype.get = function (e) {
      var n = this,
        r = jp(e, this.Yf),
        i = new Cp(this.Yf);
      return t.prototype.get.call(this, e).then(function (t) {
        return new Dp(n.Yf, i, r.S_, t.Zf, new Sp(!1, !1), r.v_);
      });
    }),
    n
  );
})(
  (function () {
    function t(t, e) {
      (this.Yf = t), (this.Ad = e), (this.Id = _l(t));
    }
    return (
      (t.prototype.get = function (t) {
        var e = this,
          n = jp(t, this.Yf),
          r = new Ap(this.Yf);
        return this.Ad.ef([n.S_]).then(function (t) {
          if (!t || 1 !== t.length) return hi();
          var i = t[0];
          if (i instanceof vo) return new hp(e.Yf, r, n.S_, null, n.v_);
          if (i instanceof po) return new hp(e.Yf, r, i.key, i, n.v_);
          throw hi();
        });
      }),
      (t.prototype.set = function (t, e, n) {
        var r = jp(t, this.Yf),
          i = Np(r.v_, e, n),
          o = Il(this.Id, "Transaction.set", r.S_, i, null !== r.v_, n);
        return this.Ad.set(r.S_, o), this;
      }),
      (t.prototype.update = function (t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++)
          r[i - 3] = arguments[i];
        var o,
          s = jp(t, this.Yf);
        return (
          e instanceof Wf && (e = e.d_),
          (o =
            "string" == typeof e || e instanceof Qf
              ? Pl(this.Id, "Transaction.update", s.S_, e, n, r)
              : xl(this.Id, "Transaction.update", s.S_, e)),
          this.Ad.update(s.S_, o),
          this
        );
      }),
      (t.prototype.delete = function (t) {
        var e = jp(t, this.Yf);
        return this.Ad.delete(e.S_), this;
      }),
      t
    );
  })()
);
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
 */ function qp() {
  if ("undefined" == typeof Uint8Array)
    throw new wi(
      bi.UNIMPLEMENTED,
      "Uint8Arrays are not available in this environment."
    );
}
function zp() {
  if ("undefined" == typeof atob)
    throw new wi(
      bi.UNIMPLEMENTED,
      "Blobs are unavailable in Firestore in this environment."
    );
}
var Bp = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.fromBase64String = function (t) {
        return zp(), new n(Ei.fromBase64String(t));
      }),
      (n.fromUint8Array = function (t) {
        return qp(), new n(Ei.fromUint8Array(t));
      }),
      (n.prototype.toBase64 = function () {
        return zp(), this.d_.toBase64();
      }),
      (n.prototype.toUint8Array = function () {
        return qp(), this.d_.toUint8Array();
      }),
      (n.prototype.isEqual = function (t) {
        return this.d_.isEqual(t.d_);
      }),
      (n.prototype.toString = function () {
        return "Blob(base64: " + this.toBase64() + ")";
      }),
      n
    );
  })(Wf),
  Gp = (function () {
    function t() {}
    return (
      (t.prototype.enableIndexedDbPersistence = function (t, e) {
        return (function (t, e) {
          ap((t = rl(t, ip)));
          var n = op(t),
            r = t.p_(),
            i = new Yf();
          return up(
            n,
            i,
            new Gf(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership)
          );
        })(t.d_, { forceOwnership: e });
      }),
      (t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
        return (function (t) {
          ap((t = rl(t, ip)));
          var e = op(t),
            n = t.p_(),
            r = new Yf();
          return up(e, r, new Hf(r, n.cacheSizeBytes));
        })(t.d_);
      }),
      (t.prototype.clearIndexedDbPersistence = function (t) {
        return (function (t) {
          var e = this;
          if (t.R_ && !t.P_)
            throw new wi(
              bi.FAILED_PRECONDITION,
              "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."
            );
          var n = new Gu();
          return (
            t.Bf.Tf(function () {
              return r(e, void 0, void 0, function () {
                var e;
                return i(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        o.trys.push([0, 2, , 3]),
                        [
                          4,
                          (function (t) {
                            return r(this, void 0, void 0, function () {
                              var e;
                              return i(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return Ku.Kn()
                                      ? ((e = t + "main"), [4, Ku.delete(e)])
                                      : [2, Promise.resolve()];
                                  case 1:
                                    return n.sent(), [2];
                                }
                              });
                            });
                          })(Dc(t.I_, t.w_)),
                        ]
                      );
                    case 1:
                      return o.sent(), n.resolve(), [3, 3];
                    case 2:
                      return (e = o.sent()), n.reject(e), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            n.promise
          );
        })(t.d_);
      }),
      t
    );
  })(),
  Hp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return (
        ((i = t.call(this, n) || this).Rd = r),
        (i.INTERNAL = {
          delete: function () {
            return i.terminate();
          },
        }),
        e instanceof ri || (i.Pd = e),
        i
      );
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "I_", {
        get: function () {
          return this.d_.I_;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.settings = function (t) {
        t.merge &&
          delete (t = Object.assign(Object.assign({}, this.d_.V_()), t)).merge,
          this.d_.g_(t);
      }),
      (n.prototype.useEmulator = function (t, e) {
        var n, r, i, o;
        (n = this.d_),
          (r = t),
          (i = e),
          "firestore.googleapis.com" !== (o = (n = rl(n, ul)).V_()).host &&
            o.host !== r &&
            ai(
              "Host has been set in both settings() and useEmulator(), emulator host will be used"
            ),
          n.g_(
            Object.assign(Object.assign({}, o), { host: r + ":" + i, ssl: !1 })
          );
      }),
      (n.prototype.enableNetwork = function () {
        return (function (t) {
          var e = this;
          return t._s.enqueue(function () {
            return r(e, void 0, void 0, function () {
              var e, n;
              return i(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, Xl(t)];
                  case 1:
                    return (e = r.sent()), [4, Jl(t)];
                  case 2:
                    return (
                      (n = r.sent()),
                      [
                        2,
                        (e.yo(!0), (i = n), (o = li(i)), o.Nh.delete(0), Ah(o)),
                      ]
                    );
                }
                var i, o;
              });
            });
          });
        })(op(rl(this.d_, ip)));
      }),
      (n.prototype.disableNetwork = function () {
        return (function (t) {
          var e = this;
          return t._s.enqueue(function () {
            return r(e, void 0, void 0, function () {
              var e, n;
              return i(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, Xl(t)];
                  case 1:
                    return (e = o.sent()), [4, Jl(t)];
                  case 2:
                    return (
                      (n = o.sent()),
                      [
                        2,
                        (e.yo(!1),
                        (function (t) {
                          return r(this, void 0, void 0, function () {
                            var e;
                            return i(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return (e = li(t)).Nh.add(0), [4, Sh(e)];
                                case 1:
                                  return n.sent(), e.Oh.set("Offline"), [2];
                              }
                            });
                          });
                        })(n)),
                      ]
                    );
                }
              });
            });
          });
        })(op(rl(this.d_, ip)));
      }),
      (n.prototype.enablePersistence = function (t) {
        var e = !1,
          n = !1;
        return (
          t &&
            $f(
              "synchronizeTabs",
              (e = !!t.synchronizeTabs),
              "experimentalForceOwningTab",
              (n = !!t.experimentalForceOwningTab)
            ),
          e
            ? this.Rd.enableMultiTabIndexedDbPersistence(this)
            : this.Rd.enableIndexedDbPersistence(this, n)
        );
      }),
      (n.prototype.clearPersistence = function () {
        return this.Rd.clearIndexedDbPersistence(this);
      }),
      (n.prototype.terminate = function () {
        return (
          this.Pd &&
            (this.Pd._removeServiceInstance("firestore"),
            this.Pd._removeServiceInstance("firestore-exp")),
          this.d_._delete()
        );
      }),
      (n.prototype.waitForPendingWrites = function () {
        return (function (t) {
          var e = this,
            n = new Gu();
          return (
            t._s.Ps(function () {
              return r(e, void 0, void 0, function () {
                var e;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (e = Ef), [4, Zl(t)];
                    case 1:
                      return [2, e.apply(void 0, [r.sent(), n])];
                  }
                });
              });
            }),
            n.promise
          );
        })(op(rl(this.d_, ip)));
      }),
      (n.prototype.onSnapshotsInSync = function (t) {
        return (
          (e = this.d_),
          (n = t),
          (function (t, e) {
            var n = this,
              o = new Kf(e);
            return (
              t._s.Ps(function () {
                return r(n, void 0, void 0, function () {
                  var e;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = function (t, e) {
                            li(t).Wh.add(e), e.next();
                          }),
                          [4, $l(t)]
                        );
                      case 1:
                        return [2, e.apply(void 0, [n.sent(), o])];
                    }
                  });
                });
              }),
              function () {
                o.i_(),
                  t._s.Ps(function () {
                    return r(n, void 0, void 0, function () {
                      var e;
                      return i(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return (
                              (e = function (t, e) {
                                li(t).Wh.delete(e);
                              }),
                              [4, $l(t)]
                            );
                          case 1:
                            return [2, e.apply(void 0, [n.sent(), o])];
                        }
                      });
                    });
                  });
              }
            );
          })(op((e = rl(e, ip))), rp(n) ? n : { next: n })
        );
        var e, n;
      }),
      Object.defineProperty(n.prototype, "app", {
        get: function () {
          if (!this.Pd)
            throw new wi(
              bi.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this.Pd;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.collection = function (t) {
        try {
          return new od(this, fl(this.d_, t));
        } catch (e) {
          throw Jp(e, "collection()", "Firestore.collection()");
        }
      }),
      (n.prototype.doc = function (t) {
        try {
          return new Wp(this, ll(this.d_, t));
        } catch (e) {
          throw Jp(e, "doc()", "Firestore.doc()");
        }
      }),
      (n.prototype.collectionGroup = function (t) {
        try {
          return new nd(
            this,
            (function (t, e) {
              if (
                ((t = rl(t, ul)),
                Jf("collectionGroup", "collection id", e),
                e.indexOf("/") >= 0)
              )
                throw new wi(
                  bi.INVALID_ARGUMENT,
                  "Invalid collection ID '" +
                    e +
                    "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                );
              return new cl(t, null, ((n = e), new Uo(ki.ct(), n)));
              var n;
            })(this.d_, t)
          );
        } catch (e) {
          throw Jp(e, "collectionGroup()", "Firestore.collectionGroup()");
        }
      }),
      (n.prototype.runTransaction = function (t) {
        var e,
          n = this;
        return (function (t, e) {
          var n = this,
            o = new Gu();
          return (
            t._s.Ps(function () {
              return r(n, void 0, void 0, function () {
                var n;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        ((i = t),
                        Ql(i).then(function (t) {
                          return t.Sh;
                        })),
                      ];
                    case 1:
                      return (n = r.sent()), new Bl(t._s, n, e, o).run(), [2];
                  }
                  var i;
                });
              });
            }),
            o.promise
          );
        })(op((e = this.d_)), function (r) {
          return (function (e) {
            return t(new Kp(n, e));
          })(new Fp(e, r));
        });
      }),
      (n.prototype.batch = function () {
        var t = this;
        return (
          op(this.d_),
          new Qp(
            new Mp(this.d_, function (e) {
              return Vp(t.d_, e);
            })
          )
        );
      }),
      (n.prototype.loadBundle = function (t) {
        throw new wi(
          bi.FAILED_PRECONDITION,
          '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
        );
      }),
      (n.prototype.namedQuery = function (t) {
        throw new wi(
          bi.FAILED_PRECONDITION,
          '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
        );
      }),
      n
    );
  })(Wf),
  Yp = (function (t) {
    function n(e) {
      var n = this;
      return ((n = t.call(this) || this).firestore = e), n;
    }
    return (
      e(n, t),
      (n.prototype.Wf = function (t) {
        return new Bp(new Ei(t));
      }),
      (n.prototype.jf = function (t) {
        var e = this.Jf(t, this.firestore.I_);
        return Wp.yd(e, this.firestore, null);
      }),
      n
    );
  })(cp);
var Kp = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, n) || this).Yf = e), (r.Xf = new Yp(e)), r;
    }
    return (
      e(n, t),
      (n.prototype.get = function (t) {
        var e = this,
          n = sd(t);
        return this.d_.get(n).then(function (t) {
          return new td(
            e.Yf,
            new Dp(e.Yf.d_, e.Xf, t.S_, t.Zf, t.metadata, n.v_)
          );
        });
      }),
      (n.prototype.set = function (t, e, n) {
        var r = sd(t);
        return (
          n
            ? (Zf("Transaction.set", n), this.d_.set(r, e, n))
            : this.d_.set(r, e),
          this
        );
      }),
      (n.prototype.update = function (t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++)
          i[o - 3] = arguments[o];
        var s = sd(t);
        return (
          2 === arguments.length
            ? this.d_.update(s, e)
            : (r = this.d_).update.apply(r, u([s, e, n], i)),
          this
        );
      }),
      (n.prototype.delete = function (t) {
        var e = sd(t);
        return this.d_.delete(e), this;
      }),
      n
    );
  })(Wf),
  Qp = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.set = function (t, e, n) {
        var r = sd(t);
        return (
          n
            ? (Zf("WriteBatch.set", n), this.d_.set(r, e, n))
            : this.d_.set(r, e),
          this
        );
      }),
      (n.prototype.update = function (t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++)
          i[o - 3] = arguments[o];
        var s = sd(t);
        return (
          2 === arguments.length
            ? this.d_.update(s, e)
            : (r = this.d_).update.apply(r, u([s, e, n], i)),
          this
        );
      }),
      (n.prototype.delete = function (t) {
        var e = sd(t);
        return this.d_.delete(e), this;
      }),
      (n.prototype.commit = function () {
        return this.d_.commit();
      }),
      n
    );
  })(Wf),
  Xp = (function (t) {
    function n(e, n, r) {
      var i = this;
      return ((i = t.call(this, r) || this).Yf = e), (i.Xf = n), i;
    }
    return (
      e(n, t),
      (n.prototype.fromFirestore = function (t, e) {
        var n = new Op(this.Yf.d_, this.Xf, t.S_, t.Zf, t.metadata, null);
        return this.d_.fromFirestore(new ed(this.Yf, n), null != e ? e : {});
      }),
      (n.prototype.toFirestore = function (t, e) {
        return e ? this.d_.toFirestore(t, e) : this.d_.toFirestore(t);
      }),
      (n.gd = function (t, e) {
        var r = n.Vd,
          i = r.get(t);
        i || ((i = new WeakMap()), r.set(t, i));
        var o = i.get(e);
        return o || ((o = new n(t, new Yp(t), e)), i.set(e, o)), o;
      }),
      n
    );
  })(Wf);
Xp.Vd = new WeakMap();
var Wp = (function (t) {
  function n(e, n) {
    var r = this;
    return ((r = t.call(this, n) || this).firestore = e), (r.Xf = new Yp(e)), r;
  }
  return (
    e(n, t),
    (n.pd = function (t, e, r) {
      if (t.length % 2 != 0)
        throw new wi(
          bi.INVALID_ARGUMENT,
          "Invalid document reference. Document references must have an even number of segments, but " +
            t.rt() +
            " has " +
            t.length
        );
      return new n(e, new al(e.d_, r, new Ri(t)));
    }),
    (n.yd = function (t, e, r) {
      return new n(e, new al(e.d_, r, t));
    }),
    Object.defineProperty(n.prototype, "id", {
      get: function () {
        return this.d_.id;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(n.prototype, "parent", {
      get: function () {
        return new od(this.firestore, this.d_.parent);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(n.prototype, "path", {
      get: function () {
        return this.d_.path;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (n.prototype.collection = function (t) {
      try {
        return new od(this.firestore, fl(this.d_, t));
      } catch (e) {
        throw Jp(e, "collection()", "DocumentReference.collection()");
      }
    }),
    (n.prototype.isEqual = function (t) {
      return t instanceof Wf && (t = t.d_), t instanceof al && pl(this.d_, t);
    }),
    (n.prototype.set = function (t, e) {
      e = Zf("DocumentReference.set", e);
      try {
        return (function (t, e, n) {
          t = rl(t, al);
          var r = rl(t.firestore, ip),
            i = Np(t.v_, e, n);
          return Vp(r, [
            Il(_l(r), "setDoc", t.S_, i, null !== t.v_, n).F_(t.S_, ms.Kt()),
          ]);
        })(this.d_, t, e);
      } catch (n) {
        throw Jp(n, "setDoc()", "DocumentReference.set()");
      }
    }),
    (n.prototype.update = function (t, e) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      try {
        return 1 === arguments.length
          ? Lp(this.d_, t)
          : Lp.apply(void 0, u([this.d_, t, e], n));
      } catch (i) {
        throw Jp(i, "updateDoc()", "DocumentReference.update()");
      }
    }),
    (n.prototype.delete = function () {
      return Vp(rl((t = this.d_).firestore, ip), [new Ls(t.S_, ms.Kt())]);
      var t;
    }),
    (n.prototype.onSnapshot = function () {
      for (var t = this, e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n];
      var r = Zp(e),
        i = $p(e, function (e) {
          return new td(
            t.firestore,
            new Dp(t.firestore.d_, t.Xf, e.S_, e.Zf, e.metadata, t.d_.v_)
          );
        });
      return Rp(this.d_, r, i);
    }),
    (n.prototype.get = function (t) {
      var e = this;
      return (
        "cache" === (null == t ? void 0 : t.source)
          ? (function (t) {
              t = rl(t, al);
              var e = rl(t.firestore, ip),
                n = op(e),
                o = new Cp(e);
              return (function (t, e) {
                var n = this,
                  o = new Gu();
                return (
                  t._s.Ps(function () {
                    return r(n, void 0, void 0, function () {
                      var n;
                      return i(this, function (s) {
                        switch (s.label) {
                          case 0:
                            return (
                              (n = function (t, e, n) {
                                return r(this, void 0, void 0, function () {
                                  var r, o;
                                  return i(this, function (i) {
                                    switch (i.label) {
                                      case 0:
                                        return (
                                          i.trys.push([0, 2, , 3]),
                                          [
                                            4,
                                            ((s = t),
                                            (u = e),
                                            (a = li(s)),
                                            a.persistence.runTransaction(
                                              "read document",
                                              "readonly",
                                              function (t) {
                                                return a.Tc.Ho(t, u);
                                              }
                                            )),
                                          ]
                                        );
                                      case 1:
                                        return (
                                          (o = i.sent()) instanceof po
                                            ? n.resolve(o)
                                            : o instanceof vo
                                            ? n.resolve(null)
                                            : n.reject(
                                                new wi(
                                                  bi.UNAVAILABLE,
                                                  "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                )
                                              ),
                                          [3, 3]
                                        );
                                      case 2:
                                        return (
                                          (r = i.sent()),
                                          (o = na(
                                            r,
                                            "Failed to get document '" +
                                              e +
                                              " from cache"
                                          )),
                                          n.reject(o),
                                          [3, 3]
                                        );
                                      case 3:
                                        return [2];
                                    }
                                    var s, u, a;
                                  });
                                });
                              }),
                              [4, Wl(t)]
                            );
                          case 1:
                            return [2, n.apply(void 0, [s.sent(), e, o])];
                        }
                      });
                    });
                  }),
                  o.promise
                );
              })(n, t.S_).then(function (n) {
                return new Dp(
                  e,
                  o,
                  t.S_,
                  n,
                  new Sp(n instanceof po && n.Vt, !0),
                  t.v_
                );
              });
            })(this.d_)
          : "server" === (null == t ? void 0 : t.source)
          ? (function (t) {
              t = rl(t, al);
              var e = rl(t.firestore, ip);
              return tp(op(e), t.S_, { source: "server" }).then(function (n) {
                return Up(e, t, n);
              });
            })(this.d_)
          : (function (t) {
              t = rl(t, al);
              var e = rl(t.firestore, ip);
              return tp(op(e), t.S_).then(function (n) {
                return Up(e, t, n);
              });
            })(this.d_)
      ).then(function (t) {
        return new td(
          e.firestore,
          new Dp(e.firestore.d_, e.Xf, t.S_, t.Zf, t.metadata, e.d_.v_)
        );
      });
    }),
    (n.prototype.withConverter = function (t) {
      return new n(
        this.firestore,
        this.d_.withConverter(Xp.gd(this.firestore, t))
      );
    }),
    n
  );
})(Wf);
function Jp(t, e, n) {
  return (t.message = t.message.replace(e, n)), t;
}
function Zp(t) {
  for (var e = 0, n = t; e < n.length; e++) {
    var r = n[e];
    if ("object" == typeof r && !rp(r)) return r;
  }
  return {};
}
function $p(t, e) {
  var n, r, i;
  return {
    next: function (t) {
      i.next && i.next(e(t));
    },
    error:
      null ===
        (n = (i = rp(t[0])
          ? t[0]
          : rp(t[1])
          ? t[1]
          : "function" == typeof t[0]
          ? { next: t[0], error: t[1], complete: t[2] }
          : { next: t[1], error: t[2], complete: t[3] }).error) || void 0 === n
        ? void 0
        : n.bind(i),
    complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i),
  };
}
var td = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, n) || this).Yf = e), r;
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "ref", {
        get: function () {
          return new Wp(this.Yf, this.d_.ref);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "id", {
        get: function () {
          return this.d_.id;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "metadata", {
        get: function () {
          return this.d_.metadata;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "exists", {
        get: function () {
          return this.d_.exists();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.data = function (t) {
        return this.d_.data(t);
      }),
      (n.prototype.get = function (t, e) {
        return this.d_.get(t, e);
      }),
      (n.prototype.isEqual = function (t) {
        return kp(this.d_, t.d_);
      }),
      n
    );
  })(Wf),
  ed = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.prototype.data = function (t) {
        return this.d_.data(t);
      }),
      n
    );
  })(td),
  nd = (function (t) {
    function n(e, n) {
      var r = this;
      return (
        ((r = t.call(this, n) || this).firestore = e), (r.Xf = new Yp(e)), r
      );
    }
    return (
      e(n, t),
      (n.prototype.where = function (t, e, r) {
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              ((o = r), (s = e), (u = lp("where", (i = t))), new yp(u, s, o))
            )
          );
        } catch (i) {
          throw Jp(i, /(orderBy|where)\(\)/, "Query.$1()");
        }
        var i, o, s, u;
      }),
      (n.prototype.orderBy = function (t, e) {
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              (function (t, e) {
                void 0 === e && (e = "asc");
                var n = e,
                  r = lp("orderBy", t);
                return new gp(r, n);
              })(t, e)
            )
          );
        } catch (r) {
          throw Jp(r, /(orderBy|where)\(\)/, "Query.$1()");
        }
      }),
      (n.prototype.limit = function (t) {
        try {
          return new n(
            this.firestore,
            vp(this.d_, (il("limit", (e = t)), new mp("limit", e, "F")))
          );
        } catch (e) {
          throw Jp(e, "limit()", "Query.limit()");
        }
        var e;
      }),
      (n.prototype.limitToLast = function (t) {
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              (il("limitToLast", (e = t)), new mp("limitToLast", e, "L"))
            )
          );
        } catch (e) {
          throw Jp(e, "limitToLast()", "Query.limitToLast()");
        }
        var e;
      }),
      (n.prototype.startAt = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return new bp("startAt", t, !0);
              }.apply(void 0, t)
            )
          );
        } catch (r) {
          throw Jp(r, "startAt()", "Query.startAt()");
        }
      }),
      (n.prototype.startAfter = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return new bp("startAfter", t, !1);
              }.apply(void 0, t)
            )
          );
        } catch (r) {
          throw Jp(r, "startAfter()", "Query.startAfter()");
        }
      }),
      (n.prototype.endBefore = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return new wp("endBefore", t, !0);
              }.apply(void 0, t)
            )
          );
        } catch (r) {
          throw Jp(r, "endBefore()", "Query.endBefore()");
        }
      }),
      (n.prototype.endAt = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        try {
          return new n(
            this.firestore,
            vp(
              this.d_,
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return new wp("endAt", t, !1);
              }.apply(void 0, t)
            )
          );
        } catch (r) {
          throw Jp(r, "endAt()", "Query.endAt()");
        }
      }),
      (n.prototype.isEqual = function (t) {
        return dl(this.d_, t.d_);
      }),
      (n.prototype.get = function (t) {
        var e = this;
        return (
          "cache" === (null == t ? void 0 : t.source)
            ? (function (t) {
                t = rl(t, cl);
                var e = rl(t.firestore, ip),
                  n = op(e),
                  o = new Cp(e);
                return (function (t, e) {
                  var n = this,
                    o = new Gu();
                  return (
                    t._s.Ps(function () {
                      return r(n, void 0, void 0, function () {
                        var n;
                        return i(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (
                                (n = function (t, e, n) {
                                  return r(this, void 0, void 0, function () {
                                    var r, o, s, u, a;
                                    return i(this, function (i) {
                                      switch (i.label) {
                                        case 0:
                                          return (
                                            i.trys.push([0, 2, , 3]),
                                            [4, qc(t, e, !0)]
                                          );
                                        case 1:
                                          return (
                                            (a = i.sent()),
                                            (r = new af(e, a.Rc)),
                                            (o = r.fl(a.documents)),
                                            (s = r.wi(o, !1)),
                                            n.resolve(s.snapshot),
                                            [3, 3]
                                          );
                                        case 2:
                                          return (
                                            (u = i.sent()),
                                            (a = na(
                                              u,
                                              "Failed to execute query '" +
                                                e +
                                                " against cache"
                                            )),
                                            n.reject(a),
                                            [3, 3]
                                          );
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  });
                                }),
                                [4, Wl(t)]
                              );
                            case 1:
                              return [2, n.apply(void 0, [s.sent(), e, o])];
                          }
                        });
                      });
                    }),
                    o.promise
                  );
                })(n, t.C_).then(function (n) {
                  return new xp(e, o, t, n);
                });
              })(this.d_)
            : "server" === (null == t ? void 0 : t.source)
            ? (function (t) {
                t = rl(t, cl);
                var e = rl(t.firestore, ip),
                  n = op(e),
                  r = new Cp(e);
                return ep(n, t.C_, { source: "server" }).then(function (n) {
                  return new xp(e, r, t, n);
                });
              })(this.d_)
            : (function (t) {
                t = rl(t, cl);
                var e = rl(t.firestore, ip),
                  n = op(e),
                  r = new Cp(e);
                return (
                  pp(t.C_),
                  ep(n, t.C_).then(function (n) {
                    return new xp(e, r, t, n);
                  })
                );
              })(this.d_)
        ).then(function (t) {
          return new id(e.firestore, new xp(e.firestore.d_, e.Xf, e.d_, t._d));
        });
      }),
      (n.prototype.onSnapshot = function () {
        for (var t = this, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        var r = Zp(e),
          i = $p(e, function (e) {
            return new id(
              t.firestore,
              new xp(t.firestore.d_, t.Xf, t.d_, e._d)
            );
          });
        return Rp(this.d_, r, i);
      }),
      (n.prototype.withConverter = function (t) {
        return new n(
          this.firestore,
          this.d_.withConverter(Xp.gd(this.firestore, t))
        );
      }),
      n
    );
  })(Wf),
  rd = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, n) || this).Yf = e), r;
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "type", {
        get: function () {
          return this.d_.type;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "doc", {
        get: function () {
          return new ed(this.Yf, this.d_.doc);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "oldIndex", {
        get: function () {
          return this.d_.oldIndex;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "newIndex", {
        get: function () {
          return this.d_.newIndex;
        },
        enumerable: !1,
        configurable: !0,
      }),
      n
    );
  })(Wf),
  id = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, n) || this).Yf = e), r;
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "query", {
        get: function () {
          return new nd(this.Yf, this.d_.query);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "metadata", {
        get: function () {
          return this.d_.metadata;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "size", {
        get: function () {
          return this.d_.size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "empty", {
        get: function () {
          return this.d_.empty;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "docs", {
        get: function () {
          var t = this;
          return this.d_.docs.map(function (e) {
            return new ed(t.Yf, e);
          });
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.docChanges = function (t) {
        var e = this;
        return this.d_.docChanges(t).map(function (t) {
          return new rd(e.Yf, t);
        });
      }),
      (n.prototype.forEach = function (t, e) {
        var n = this;
        this.d_.forEach(function (r) {
          t.call(e, new ed(n.Yf, r));
        });
      }),
      (n.prototype.isEqual = function (t) {
        return kp(this.d_, t.d_);
      }),
      n
    );
  })(Wf),
  od = (function (t) {
    function n(e, n) {
      var r = this;
      return ((r = t.call(this, e, n) || this).firestore = e), (r.d_ = n), r;
    }
    return (
      e(n, t),
      Object.defineProperty(n.prototype, "id", {
        get: function () {
          return this.d_.id;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "path", {
        get: function () {
          return this.d_.path;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n.prototype, "parent", {
        get: function () {
          var t = this.d_.parent;
          return t ? new Wp(this.firestore, t) : null;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.doc = function (t) {
        try {
          return new Wp(
            this.firestore,
            void 0 === t ? ll(this.d_) : ll(this.d_, t)
          );
        } catch (e) {
          throw Jp(e, "doc()", "CollectionReference.doc()");
        }
      }),
      (n.prototype.add = function (t) {
        var e,
          n,
          r,
          i,
          o,
          s = this;
        return ((e = this.d_),
        (n = t),
        (r = rl(e.firestore, ip)),
        (i = ll(e)),
        (o = Np(e.v_, n)),
        Vp(r, [
          Il(_l(e.firestore), "addDoc", i.S_, o, null !== e.v_, {}).F_(
            i.S_,
            ms.exists(!1)
          ),
        ]).then(function () {
          return i;
        })).then(function (t) {
          return new Wp(s.firestore, t);
        });
      }),
      (n.prototype.isEqual = function (t) {
        return pl(this.d_, t.d_);
      }),
      (n.prototype.withConverter = function (t) {
        return new n(
          this.firestore,
          this.d_.withConverter(Xp.gd(this.firestore, t))
        );
      }),
      n
    );
  })(nd);
function sd(t) {
  return t instanceof Wf && (t = t.d_), rl(t, al);
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
   */
}
var ud,
  ad = (function (t) {
    function n() {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return t.call(this, new (Qf.bind.apply(Qf, u([void 0], e)))()) || this;
    }
    return (
      e(n, t),
      (n.documentId = function () {
        return new n(Li.ht().rt());
      }),
      (n.prototype.isEqual = function (t) {
        return (
          t instanceof Wf && (t = t.d_),
          t instanceof Qf && this.d_.f_.isEqual(t.f_)
        );
      }),
      n
    );
  })(Wf),
  cd = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      e(n, t),
      (n.serverTimestamp = function () {
        var t = new Al("serverTimestamp");
        return (t._methodName = "FieldValue.serverTimestamp"), new n(t);
      }),
      (n.delete = function () {
        var t = new Tl("deleteField");
        return (t._methodName = "FieldValue.delete"), new n(t);
      }),
      (n.arrayUnion = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return new Sl("arrayUnion", t);
        }.apply(void 0, t);
        return (r._methodName = "FieldValue.arrayUnion"), new n(r);
      }),
      (n.arrayRemove = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return new Dl("arrayRemove", t);
        }.apply(void 0, t);
        return (r._methodName = "FieldValue.arrayRemove"), new n(r);
      }),
      (n.increment = function (t) {
        var e = new Ol("increment", t);
        return (e._methodName = "FieldValue.increment"), new n(e);
      }),
      (n.prototype.isEqual = function (t) {
        return this.d_.isEqual(t.d_);
      }),
      n
    );
  })(Wf),
  hd = {
    Firestore: Hp,
    GeoPoint: vl,
    Timestamp: Oi,
    Blob: Bp,
    Transaction: Kp,
    WriteBatch: Qp,
    DocumentReference: Wp,
    DocumentSnapshot: td,
    Query: nd,
    QueryDocumentSnapshot: ed,
    QuerySnapshot: id,
    CollectionReference: od,
    FieldPath: ad,
    FieldValue: cd,
    setLogLevel: function (t) {
      var e;
      (e = t), ii.setLogLevel(e);
    },
    CACHE_SIZE_UNLIMITED: -1,
  };
(ud = Q).INTERNAL.registerComponent(
  new w(
    "firestore",
    function (t) {
      return (function (t, e) {
        return new Hp(t, new ip(t, e), new Gp());
      })(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
    },
    "PUBLIC"
  ).setServiceProps(Object.assign({}, hd))
),
  ud.registerVersion("@firebase/firestore", "2.1.7");
export { Q as f };
