import { Y as sanitize_props, a2 as spread_props, X as slot, Q as push, V as store_get, a3 as ensure_array_like, T as escape_html, a0 as attr, a7 as stringify, W as unsubscribe_stores, S as pop } from "../../../../../../chunks/index.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { I as Icon } from "../../../../../../chunks/Icon.js";
import { P as Plus } from "../../../../../../chunks/plus.js";
import { S as Server } from "../../../../../../chunks/server.js";
import { D as Database } from "../../../../../../chunks/database.js";
function Layers($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      {
        "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
      }
    ],
    [
      "path",
      {
        "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "layers" },
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
  var $$store_subs;
  let orgId;
  let spaces = [
    {
      guid: "1",
      name: "Development",
      apps_count: 8,
      services_count: 5,
      memory_usage: 2.1,
      memory_quota: 5
    },
    {
      guid: "2",
      name: "Staging",
      apps_count: 4,
      services_count: 3,
      memory_usage: 1.8,
      memory_quota: 5
    }
  ];
  orgId = store_get($$store_subs ??= {}, "$page", page).params.orgId;
  const each_array = ensure_array_like(spaces);
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center"><div><div class="text-sm text-gray-400 mb-1"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations</a> <span class="mx-2">/</span> <span>${escape_html(orgId)}</span></div> <div class="flex items-center space-x-3">`;
  Layers($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">Spaces</h1></div></div> <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">`;
  Plus($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>New Space</span></button></div> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let space = each_array[$$index];
    $$payload.out += `<div class="group relative overflow-hidden rounded-lg bg-neutral-900 p-6"><div class="absolute inset-0 bg-gradient-to-bl from-blue-950/30 via-transparent to-transparent"></div> <div class="relative"><h3 class="text-xl font-semibold text-white mb-4">${escape_html(space.name)}</h3> <div class="space-y-4"><div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400">`;
    Server($$payload, { class: "w-4 h-4" });
    $$payload.out += `<!----> <span>Applications</span></div> <span class="text-white">${escape_html(space.apps_count)}</span></div> <div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400">`;
    Database($$payload, { class: "w-4 h-4" });
    $$payload.out += `<!----> <span>Services</span></div> <span class="text-white">${escape_html(space.services_count)}</span></div> <div><div class="flex justify-between text-sm mb-2"><span class="text-gray-400">Memory Usage</span> <span class="text-white">${escape_html(space.memory_usage)}GB / ${escape_html(space.memory_quota)}GB</span></div> <div class="w-full bg-neutral-800 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full transition-all"${attr("style", `width: ${stringify(space.memory_usage / space.memory_quota * 100)}%`)}></div></div></div></div> <div class="mt-6 flex space-x-3"><a${attr("href", `./space/${stringify(space.guid)}/`)}><button class="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Dashboard</button></a> <button class="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Settings</button></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
