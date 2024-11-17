import { a2 as spread_props, Y as slot, _ as sanitize_props, R as pop, P as push } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
function Loader_circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M21 12a9 9 0 1 1-6.219-8.56" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "loader-circle" },
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
function _page($$payload, $$props) {
  push();
  [
    {
      guid: "1",
      name: "test-app",
      state: "STARTED",
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      lifecycle: { data: { stack: "cflinuxfs4" } }
    }
  ];
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center py-8">`;
    Loader_circle($$payload, { class: "w-8 h-8 animate-spin text-gray-400" });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
