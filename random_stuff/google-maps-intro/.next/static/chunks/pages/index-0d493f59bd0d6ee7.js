(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(3678);
        },
      ]);
    },
    3678: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return u;
          },
        });
      var i = e(5893),
        r = e(7294),
        o = e(7054);
      function u() {
        return (0, o.Db)({
          googleMapsApiKey: "AIzaSyDKWn6AZxHgZKUyImnFn0gttIDB8iWML2Q",
        }).isLoaded
          ? (0, i.jsx)(a, {})
          : (0, i.jsx)("div", { children: "Loading..." });
      }
      function a() {
        var n = (0, r.useMemo)(function () {
          return { lat: 44, lng: -80 };
        }, []);
        return (0, i.jsx)(o.b6, {
          zoom: 10,
          center: n,
          mapContainerClassName: "map-container",
          children: (0, i.jsx)(o.Jx, { position: n }),
        });
      }
    },
  },
  function (n) {
    n.O(0, [255, 774, 888, 179], function () {
      return (t = 8581), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
