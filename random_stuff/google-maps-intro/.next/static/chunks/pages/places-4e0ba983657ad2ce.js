(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [738],
  {
    2472: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/places",
        function () {
          return t(8979);
        },
      ]);
    },
    8979: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        });
      var r = t(4051),
        a = t.n(r),
        s = t(5893),
        i = t(7294),
        u = t(7054),
        c = t(2185),
        o = t(5336);
      t(720);
      function l(n, e, t, r, a, s, i) {
        try {
          var u = n[s](i),
            c = u.value;
        } catch (o) {
          return void t(o);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, a);
      }
      function d() {
        return (0, u.Db)({
          googleMapsApiKey: "AIzaSyDKWn6AZxHgZKUyImnFn0gttIDB8iWML2Q",
          libraries: ["places"],
        }).isLoaded
          ? (0, s.jsx)(f, {})
          : (0, s.jsx)("div", { children: "Loading..." });
      }
      function f() {
        var n = (0, i.useMemo)(function () {
            return { lat: 43.45, lng: -80.49 };
          }, []),
          e = (0, i.useState)(null),
          t = e[0],
          r = e[1];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: "places-container",
              children: (0, s.jsx)(p, { setSelected: r }),
            }),
            (0, s.jsx)(u.b6, {
              zoom: 10,
              center: n,
              mapContainerClassName: "map-container",
              children: t && (0, s.jsx)(u.Jx, { position: t }),
            }),
          ],
        });
      }
      var p = function (n) {
        var e = n.setSelected,
          t = (0, c.ZP)(),
          r = t.ready,
          i = t.value,
          u = t.setValue,
          d = t.suggestions,
          f = d.status,
          p = d.data,
          v = t.clearSuggestions,
          h = (function () {
            var n,
              t =
                ((n = a().mark(function n(t) {
                  var r, s, i, o;
                  return a().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            u(t, !1),
                            v(),
                            (n.next = 4),
                            (0, c.LM)({ address: t })
                          );
                        case 4:
                          return (r = n.sent), (n.next = 7), (0, c.WV)(r[0]);
                        case 7:
                          (s = n.sent),
                            (i = s.lat),
                            (o = s.lng),
                            e({ lat: i, lng: o });
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (r, a) {
                    var s = n.apply(e, t);
                    function i(n) {
                      l(s, r, a, i, u, "next", n);
                    }
                    function u(n) {
                      l(s, r, a, i, u, "throw", n);
                    }
                    i(void 0);
                  });
                });
            return function (n) {
              return t.apply(this, arguments);
            };
          })();
        return (0, s.jsxs)(o.hQ, {
          onSelect: h,
          children: [
            (0, s.jsx)(o.gA, {
              value: i,
              onChange: function (n) {
                return u(n.target.value);
              },
              disabled: !r,
              className: "combobox-input",
              placeholder: "Search an address",
            }),
            (0, s.jsx)(o.SF, {
              children: (0, s.jsx)(o.Gk, {
                children:
                  "OK" === f &&
                  p.map(function (n) {
                    var e = n.place_id,
                      t = n.description;
                    return (0, s.jsx)(o.O2, { value: t }, e);
                  }),
              }),
            }),
          ],
        });
      };
    },
  },
  function (n) {
    n.O(0, [255, 252, 774, 888, 179], function () {
      return (e = 2472), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
