import { Y as sanitize_props, a2 as spread_props, X as slot, a3 as ensure_array_like, T as escape_html, a0 as attr, a7 as stringify } from "../../../../../chunks/index.js";
import { B as Building_2, U as Users } from "../../../../../chunks/users.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { C as Cloud } from "../../../../../chunks/cloud.js";
import { S as Server } from "../../../../../chunks/server.js";
import { D as Database } from "../../../../../chunks/database.js";
import { A as Activity } from "../../../../../chunks/activity.js";
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
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
function _page($$payload) {
  let org = {
    name: "Development Org",
    stats: {
      spaces: 5,
      users: 12,
      apps: 24,
      services: 15,
      memory_used: 8.5,
      memory_quota: 16,
      routes: 18,
      domains: 3
    },
    recent_activity: [
      {
        type: "app_start",
        name: "frontend-app",
        user: "john.doe",
        time: "10m ago"
      },
      {
        type: "service_bind",
        name: "database-service",
        user: "jane.smith",
        time: "25m ago"
      },
      {
        type: "space_created",
        name: "testing",
        user: "admin",
        time: "1h ago"
      }
    ],
    memory_trends: [
      { month: "Jan", usage: 6.2 },
      { month: "Feb", usage: 7.1 },
      { month: "Mar", usage: 8.5 }
    ]
  };
  const each_array = ensure_array_like(org.memory_trends);
  const each_array_1 = ensure_array_like(org.recent_activity);
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center"><div class="flex items-center space-x-3">`;
  Building_2($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">${escape_html(org.name)}</h1></div> <button class="flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">`;
  Settings($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Organization Settings</span></button></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-neutral-900 rounded-lg p-6"><div class="flex justify-between items-start"><div><p class="text-sm text-gray-400">Spaces</p> <p class="text-2xl font-semibold text-white mt-1">${escape_html(org.stats.spaces)}</p></div> `;
  Cloud($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----></div></div> <div class="bg-neutral-900 rounded-lg p-6"><div class="flex justify-between items-start"><div><p class="text-sm text-gray-400">Applications</p> <p class="text-2xl font-semibold text-white mt-1">${escape_html(org.stats.apps)}</p></div> `;
  Server($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----></div></div> <div class="bg-neutral-900 rounded-lg p-6"><div class="flex justify-between items-start"><div><p class="text-sm text-gray-400">Services</p> <p class="text-2xl font-semibold text-white mt-1">${escape_html(org.stats.services)}</p></div> `;
  Database($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----></div></div> <div class="bg-neutral-900 rounded-lg p-6"><div class="flex justify-between items-start"><div><p class="text-sm text-gray-400">Users</p> <p class="text-2xl font-semibold text-white mt-1">${escape_html(org.stats.users)}</p></div> `;
  Users($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 bg-neutral-900 rounded-lg p-6"><h2 class="text-lg font-semibold text-white mb-4">Memory Usage</h2> <div class="space-y-4"><div><div class="flex justify-between text-sm mb-2"><span class="text-gray-400">Current Usage</span> <span class="text-white">${escape_html(org.stats.memory_used)}GB / ${escape_html(org.stats.memory_quota)}GB</span></div> <div class="w-full bg-neutral-800 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full transition-all"${attr("style", `width: ${stringify(org.stats.memory_used / org.stats.memory_quota * 100)}%`)}></div></div></div> <div class="pt-4"><h3 class="text-sm text-gray-400 mb-4">3 Month Trend</h3> <div class="flex items-end space-x-2 h-32"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trend = each_array[$$index];
    $$payload.out += `<div class="flex-1 flex flex-col items-center"><div class="w-full bg-blue-900/50 rounded-t"${attr("style", `height: ${stringify(trend.usage / org.stats.memory_quota * 100)}%`)}></div> <span class="text-xs text-gray-400 mt-2">${escape_html(trend.month)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div> <div class="bg-neutral-900 rounded-lg p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-white">Recent Activity</h2> `;
  Activity($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----></div> <div class="space-y-4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let activity = each_array_1[$$index_1];
    $$payload.out += `<div class="flex items-start space-x-3"><div class="w-2 h-2 mt-2 rounded-full bg-blue-400"></div> <div><p class="text-sm text-white">${escape_html(activity.name)} <span class="text-gray-400">by ${escape_html(activity.user)}</span></p> <p class="text-xs text-gray-400">${escape_html(activity.time)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-neutral-900 rounded-lg p-6"><h2 class="text-lg font-semibold text-white mb-4">Routes</h2> <div class="flex justify-between items-center"><span class="text-3xl font-bold text-white">${escape_html(org.stats.routes)}</span> <span class="text-sm text-gray-400">Across ${escape_html(org.stats.domains)} domains</span></div></div> <div class="bg-neutral-900 rounded-lg p-6"><h2 class="text-lg font-semibold text-white mb-4">Quick Actions</h2> <div class="grid grid-cols-2 gap-3"><button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm">Create Space</button> <button class="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-sm">Invite User</button> <button class="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-sm">Manage Quotas</button> <button class="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-sm">View Billing</button></div></div></div></div>`;
}
export {
  _page as default
};
