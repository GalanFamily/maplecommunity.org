// Minimal inline icon set — exposed on window.Icons (same pattern as carehub.org).
(function () {
  const I = (paths, extra = {}) => (props) =>
    React.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24, height: 24, viewBox: "0 0 24 24",
          fill: "none", stroke: "currentColor",
          strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round",
        },
        extra, props
      ),
      paths.map((d, i) => React.createElement("path", { key: i, d }))
    );

  const Circle = (cx, cy, r) => (props) =>
    React.createElement(
      "svg",
      Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }, props),
      React.createElement("circle", { cx, cy, r }),
      React.createElement("path", { d: "M12 8v8M8 12h8" })
    );

  window.Icons = {
    Menu: I(["M4 6h16", "M4 12h16", "M4 18h16"]),
    X: I(["M18 6 6 18", "M6 6l12 12"]),
    ArrowRight: I(["M5 12h14", "M13 6l6 6-6 6"]),
    ArrowDown: I(["M12 5v14", "M6 13l6 6 6-6"]),
    Heart: I(["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]),
    Users: I(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"], { extra: true }),
    Handshake: I(["M11 17 9.5 15.5", "m14 14-2.5-2.5", "M3 11l3-3 5 5", "M21 11l-3-3-5 5", "M3 11v4l5 4 2-2", "M21 11v4l-5 4-2-2"]),
    Calendar: I(["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"]),
    Sprout: I(["M7 20h10", "M12 20v-9", "M12 11C12 7 9 5 5 5c0 4 3 6 7 6Z", "M12 11c0-3 2-5 6-5 0 3-2 5-6 5Z"]),
    MapPin: I(["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 10a2 2 0 1 0 0-.001"]),
    Mail: I(["M22 6 12 13 2 6", "M2 6h20v12H2z"]),
    Phone: I(["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"]),
    Quote: I(["M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.24 0-2 .75-2 2v6c0 1.25.76 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2", "M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.24 0-2 .75-2 2v6c0 1.25.76 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2"]),
    HandHeart: I(["M11 14h2a2 2 0 0 0 0-4H9.5l-1.74-1.84a2 2 0 0 0-2.6-.2L2 11", "M5 18l4 2 6-1 6-3-2-3-5 1", "M14 9c.5-1 .5-2-.5-3s-2.5-.5-3 .5c-.5-1-2-1.5-3-.5s-1 2-.5 3"]),
  };
})();
