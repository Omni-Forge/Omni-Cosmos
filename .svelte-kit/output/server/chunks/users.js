import { Y as sanitize_props, a2 as spread_props, X as slot } from "./index.js";
import { I as Icon } from "./Icon.js";
function Building_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
      }
    ],
    [
      "path",
      { "d": "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }
    ],
    [
      "path",
      {
        "d": "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
      }
    ],
    ["path", { "d": "M10 6h4" }],
    ["path", { "d": "M10 10h4" }],
    ["path", { "d": "M10 14h4" }],
    ["path", { "d": "M10 18h4" }]
  ];
  Icon($$payload, spread_props([
    { name: "building-2" },
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
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "circle",
      { "cx": "9", "cy": "7", "r": "4" }
    ],
    [
      "path",
      { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }
    ],
    [
      "path",
      { "d": "M16 3.13a4 4 0 0 1 0 7.75" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
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
  Building_2 as B,
  Users as U
};
