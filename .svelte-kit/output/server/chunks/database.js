import { Y as sanitize_props, a2 as spread_props, X as slot } from "./index.js";
import { I as Icon } from "./Icon.js";
function Database($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "ellipse",
      { "cx": "12", "cy": "5", "rx": "9", "ry": "3" }
    ],
    [
      "path",
      { "d": "M3 5V19A9 3 0 0 0 21 19V5" }
    ],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "database" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
export {
  Database as D
};
