import { Y as sanitize_props, a2 as spread_props, X as slot } from "./index.js";
import { I as Icon } from "./Icon.js";
function Cpu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "16",
        "x": "4",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "6",
        "x": "9",
        "y": "9",
        "rx": "1"
      }
    ],
    ["path", { "d": "M15 2v2" }],
    ["path", { "d": "M15 20v2" }],
    ["path", { "d": "M2 15h2" }],
    ["path", { "d": "M2 9h2" }],
    ["path", { "d": "M20 15h2" }],
    ["path", { "d": "M20 9h2" }],
    ["path", { "d": "M9 2v2" }],
    ["path", { "d": "M9 20v2" }]
  ];
  Icon($$payload, spread_props([
    { name: "cpu" },
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
function Memory_stick($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M6 19v-3" }],
    ["path", { "d": "M10 19v-3" }],
    ["path", { "d": "M14 19v-3" }],
    ["path", { "d": "M18 19v-3" }],
    ["path", { "d": "M8 11V9" }],
    ["path", { "d": "M16 11V9" }],
    ["path", { "d": "M12 11V9" }],
    ["path", { "d": "M2 15h20" }],
    [
      "path",
      {
        "d": "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "memory-stick" },
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
  Cpu as C,
  Memory_stick as M
};
