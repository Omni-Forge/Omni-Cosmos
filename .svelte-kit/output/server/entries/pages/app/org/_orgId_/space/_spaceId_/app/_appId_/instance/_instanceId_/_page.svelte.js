import { a3 as ensure_array_like, T as escape_html, a0 as attr, Q as push, V as store_get, a7 as stringify, W as unsubscribe_stores, S as pop } from "../../../../../../../../../../../chunks/index.js";
import { p as page } from "../../../../../../../../../../../chunks/stores.js";
import { S as Search, a as Square, A as Arrow_up_down } from "../../../../../../../../../../../chunks/square.js";
import { P as Play } from "../../../../../../../../../../../chunks/play.js";
import { P as Plus } from "../../../../../../../../../../../chunks/plus.js";
import { A as Activity } from "../../../../../../../../../../../chunks/activity.js";
import { S as Server } from "../../../../../../../../../../../chunks/server.js";
import { g as get } from "../../../../../../../../../../../chunks/index2.js";
import { o as onDestroy } from "../../../../../../../../../../../chunks/index-server.js";
function Console($$payload) {
  let commandHistory = [];
  let currentCommand = "";
  const each_array = ensure_array_like(commandHistory);
  $$payload.out += `<div class="bg-neutral-900 rounded-lg p-4"><div class="h-[calc(100vh-400px)] overflow-y-auto mb-4 font-mono"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let command = each_array[$$index];
    $$payload.out += `<div class="py-1">${escape_html(command)}</div>`;
  }
  $$payload.out += `<!--]--></div> <input${attr("value", currentCommand)} class="w-full bg-neutral-800 text-white px-4 py-2 rounded" placeholder="Enter command..."></div>`;
}
function Sidecars($$payload, $$props) {
  push();
  var $$store_subs;
  let filteredSidecars;
  const generateMockSidecars = (count = 10) => {
    const sidecarTypes = [
      "consul",
      "spring-cloud-config-sidecar",
      "prometheus-node-exporter",
      "statsd",
      "prometheus-node-exporter",
      "statsd",
      "fluentd",
      "logstash",
      "vector",
      "envoy",
      "istio-proxy",
      "redis",
      "memcached"
    ];
    const states = ["RUNNING", "STOPPED", "FAILED"];
    const stateWeights = [0.85, 0.1, 0.05];
    const getWeightedState = () => {
      const rand = Math.random();
      let sum = 0;
      for (let i = 0; i < states.length; i++) {
        sum += stateWeights[i];
        if (rand < sum) return states[i];
      }
      return states[0];
    };
    return Array.from({ length: count }, (_, i) => {
      const sidecarType = sidecarTypes[Math.floor(Math.random() * sidecarTypes.length)];
      const state = getWeightedState();
      const processId = `pid-${Math.random().toString(36).substr(2, 9)}`;
      return {
        id: (i + 1).toString(),
        name: `${sidecarType}-0`,
        type: sidecarType,
        state,
        processId,
        memory_usage: state === "RUNNING" ? Math.floor(Math.random() * 512) : 0,
        cpu_usage: state === "RUNNING" ? Math.floor(Math.random() * 30) : 0,
        created_at: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1e3)).toISOString()
      };
    });
  };
  let searchQuery = "";
  let sortField = "name";
  let selectedSidecars = /* @__PURE__ */ new Set();
  let loading = false;
  const sidecars = generateMockSidecars(5);
  function getStateColor(state) {
    switch (state) {
      case "RUNNING":
        return "text-green-400";
      case "STOPPED":
        return "text-gray-400";
      case "FAILED":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  }
  filteredSidecars = sidecars.filter((sidecar) => sidecar.name.toLowerCase().includes(searchQuery.toLowerCase()) || sidecar.type.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    const direction = 1;
    return a[sortField] > b[sortField] ? direction : -direction;
  });
  store_get($$store_subs ??= {}, "$page", page).params.orgId;
  store_get($$store_subs ??= {}, "$page", page).params.spaceId;
  const each_array = ensure_array_like(filteredSidecars);
  $$payload.out += `<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"><div class="relative w-full sm:w-96">`;
  Search($$payload, {
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
  });
  $$payload.out += `<!----> <input type="text"${attr("value", searchQuery)} placeholder="Search sidecars..." class="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500"></div> <div class="flex space-x-3 w-full sm:w-auto"><button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedSidecars.size === 0 || loading, true)}>`;
  Play($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Start</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedSidecars.size === 0 || loading, true)}>`;
  Square($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Stop</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">`;
  Plus($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>New Sidecar</span></button></div></div> <div class="mt-6 overflow-x-auto"><table class="w-full"><thead><tr class="text-left border-b border-neutral-800"><th class="p-4"><input type="checkbox"${attr("checked", selectedSidecars.size === sidecars.length, true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></th><th class="p-4 cursor-pointer"><div class="flex items-center space-x-2"><span>Name</span> `;
  Arrow_up_down($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----></div></th><th class="p-4">Status</th><th class="p-4">Process ID</th><th class="p-4">Memory</th><th class="p-4">CPU</th><th class="p-4">Age</th><th class="p-4"></th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let sidecar = each_array[$$index];
    $$payload.out += `<tr class="border-b border-neutral-800 hover:bg-neutral-900/50"><td class="p-4"><input type="checkbox"${attr("checked", selectedSidecars.has(sidecar.id), true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></td><td class="p-4"><span class="text-white">${escape_html(sidecar.name)}</span> <div class="text-sm text-gray-400">${escape_html(sidecar.type)}</div></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Activity($$payload, {
      class: `w-4 h-4 ${stringify(getStateColor(sidecar.state))}`
    });
    $$payload.out += `<!----> <span${attr("class", getStateColor(sidecar.state))}>${escape_html(sidecar.state)}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Server($$payload, { class: "w-4 h-4 text-blue-400" });
    $$payload.out += `<!----> <span>${escape_html(sidecar.processId)}</span></div></td><td class="p-4"><span>${escape_html(sidecar.memory_usage)}MB</span></td><td class="p-4"><span>${escape_html(sidecar.cpu_usage)}%</span></td><td class="p-4"><span>${escape_html(new Date(sidecar.created_at).toLocaleDateString())}</span></td><td class="p-4"><div class="flex justify-end space-x-2"><button class="p-2 hover:bg-neutral-800 rounded-lg transition-colors">`;
    if (sidecar.state === "RUNNING") {
      $$payload.out += "<!--[-->";
      Square($$payload, { class: "w-4 h-4" });
    } else {
      $$payload.out += "<!--[!-->";
      Play($$payload, { class: "w-4 h-4" });
    }
    $$payload.out += `<!--]--></button></div></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  const { orgId, spaceId, appId, instanceId } = get(page).params;
  let activeTab = "Sidecars";
  const tabs = ["Sidecars", "console"];
  function handleKeydown(event) {
    const num = parseInt(event.key);
    if (num >= 1 && num <= 6 && !event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey) {
      if (!["INPUT", "TEXTAREA"].includes(event.target.tagName)) {
        event.preventDefault();
        activeTab = tabs[num - 1];
      }
    }
  }
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
  const each_array = ensure_array_like(tabs);
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center mb-6"><div class="text-sm text-gray-400"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations /</a> <a${attr("href", `/app/org/${stringify(orgId)}`)} class="hover:text-white transition-colors">${escape_html(orgId)}</a> <span class="mx-0">/ space /</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}`)} class="hover:text-white transition-colors">${escape_html(spaceId)}</a> <span class="mx-0">/ app /</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}/app/${stringify(appId)}`)} class="hover:text-white transition-colors">${escape_html(appId)}</a> <span class="mx-0">/instance/</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}/app/${stringify(appId)}/instance/${stringify(instanceId)}`)} class="hover:text-white transition-colors">${escape_html(instanceId)}</a> <div class="flex items-center space-x-3 pt-5">`;
  Server($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">Instance ${escape_html(instanceId)} of app ${escape_html(appId)}</h1></div></div></div> <div class="border-b border-gray-700"><nav class="-mb-px flex space-x-8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let tab = each_array[i];
    $$payload.out += `<button${attr("class", `py-2 px-1 border-b-2 ${stringify(activeTab === tab ? "border-blue-500 text-blue-500" : "border-transparent hover:border-gray-700 hover:text-gray-200")}`)}><div class="flex items-center gap-2"><span>${escape_html(tab.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))}</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-neutral-800 text-gray-400 rounded border border-neutral-700 shadow-sm">${escape_html(i + 1)}</span></div></button>`;
  }
  $$payload.out += `<!--]--></nav></div> <div class="py-4">`;
  if (activeTab === "Sidecars") {
    $$payload.out += "<!--[-->";
    Sidecars($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    if (activeTab === "console") {
      $$payload.out += "<!--[-->";
      Console($$payload);
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
