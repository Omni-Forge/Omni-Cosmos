import { a1 as bind_props, Q as push, V as store_get, a3 as ensure_array_like, a0 as attr, a7 as stringify, T as escape_html, W as unsubscribe_stores, S as pop } from "../../../../../../../../../chunks/index.js";
import { p as page } from "../../../../../../../../../chunks/stores.js";
import { E as Ellipsis_vertical, R as Refresh_cw } from "../../../../../../../../../chunks/refresh-cw.js";
import { S as Search, a as Square, A as Arrow_up_down } from "../../../../../../../../../chunks/square.js";
import { P as Play } from "../../../../../../../../../chunks/play.js";
import { A as Activity } from "../../../../../../../../../chunks/activity.js";
import { S as Server } from "../../../../../../../../../chunks/server.js";
import { M as Memory_stick, C as Cpu } from "../../../../../../../../../chunks/memory-stick.js";
import { g as get } from "../../../../../../../../../chunks/index2.js";
import { o as onDestroy } from "../../../../../../../../../chunks/index-server.js";
function InstanceActions($$payload, $$props) {
  let instance = $$props["instance"];
  $$payload.out += `<div class="relative menu-container"><button class="p-2 hover:bg-neutral-800 rounded-lg transition-colors">`;
  Ellipsis_vertical($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { instance });
}
function Instances($$payload, $$props) {
  push();
  var $$store_subs;
  let filteredInstances, appId;
  const generateMockInstances = (count = 20) => {
    const environments = ["prod", "stage", "dev", "test"];
    const regions = ["us-east", "us-west", "eu-west", "ap-south"];
    const states = ["STARTED", "STOPPED", "CRASHED"];
    const stateWeights = [0.85, 0.12, 0.03];
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
      const env = environments[Math.floor(Math.random() * environments.length)];
      const region = regions[Math.floor(Math.random() * regions.length)];
      const state = getWeightedState();
      const memory = 2048;
      const timestamp = Date.now().toString(36).slice(-4);
      const randomness = Math.random().toString(36).substring(2, 8);
      const instanceId = `i-${env.slice(0, 3)}-${region.split("-")[0]}-${i % 3 + 1}-${timestamp}-${randomness}`;
      const randomDate = /* @__PURE__ */ new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 90));
      return {
        guid: (i + 1).toString(),
        instanceId,
        state,
        region,
        environment: env,
        memory,
        disk_quota: memory * 2,
        cpu_usage: state === "STARTED" ? Math.floor(Math.random() * 95) : 0,
        created_at: randomDate.toISOString(),
        ip_address: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
      };
    });
  };
  let searchQuery = "";
  let sortField = "name";
  let selectedApps = /* @__PURE__ */ new Set();
  function getStateColor(state) {
    switch (state) {
      case "STARTED":
        return "text-green-400";
      case "STOPPED":
        return "text-gray-400";
      case "CRASHED":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  }
  function formatMemory(mb) {
    return mb >= 1024 ? `${(mb / 1024).toFixed(1)}GB` : `${mb}MB`;
  }
  const instances = generateMockInstances(50);
  filteredInstances = instances.filter((app) => app.instanceId.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    const direction = 1;
    return a[sortField] > b[sortField] ? direction : -direction;
  });
  store_get($$store_subs ??= {}, "$page", page).params.orgId;
  store_get($$store_subs ??= {}, "$page", page).params.spaceId;
  appId = store_get($$store_subs ??= {}, "$page", page).params.appId;
  store_get($$store_subs ??= {}, "$page", page).params.instanceId;
  const each_array = ensure_array_like(filteredInstances);
  $$payload.out += `<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0"><div class="relative w-full sm:w-96">`;
  Search($$payload, {
    class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
  });
  $$payload.out += `<!----> <input type="text"${attr("value", searchQuery)} placeholder="Search applications..." class="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500"></div> <div class="flex space-x-3 w-full sm:w-auto"><button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
  Play($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Start</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
  Square($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Stop</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
  Refresh_cw($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>Restart</span></button></div></div> <div class="overflow-x-auto"><table class="w-full"><thead><tr class="text-left border-b border-neutral-800"><th class="p-4"><input type="checkbox"${attr("checked", selectedApps.size === instances.length, true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></th><th class="p-4 cursor-pointer"><div class="flex items-center space-x-2"><span>Name</span> `;
  Arrow_up_down($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----></div></th><th class="p-4">Status</th><th class="p-4">Instance ID</th><th class="p-4">Memory</th><th class="p-4">CPU</th><th class="p-4"></th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let instance = each_array[$$index];
    $$payload.out += `<tr class="border-b border-neutral-800 hover:bg-neutral-900/50"><td class="p-4"><input type="checkbox"${attr("checked", selectedApps.has(instance.guid), true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></td><td class="p-4"><span class="text-white"><a${attr("href", `./${stringify(appId)}/instance/${stringify(instance.instanceId)}`)} class="text-white hover:text-blue-400">${escape_html(instance.instanceId)}</a></span></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Activity($$payload, {
      class: `w-4 h-4 ${stringify(getStateColor(instance.state))}`
    });
    $$payload.out += `<!----> <span${attr("class", getStateColor(instance.state))}>${escape_html(instance.state)}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Server($$payload, { class: "w-4 h-4 text-blue-400" });
    $$payload.out += `<!----> <span>${escape_html(instance.instanceId)}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Memory_stick($$payload, { class: "w-4 h-4 text-blue-400" });
    $$payload.out += `<!----> <span>${escape_html(formatMemory(instance.memory))}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
    Cpu($$payload, { class: "w-4 h-4 text-blue-400" });
    $$payload.out += `<!----> <span>${escape_html(instance.cpu_usage)}%</span></div></td><td class="p-4">`;
    InstanceActions($$payload, { instance });
    $$payload.out += `<!----></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function EnvVariables($$payload) {
  let variables = [
    {
      key: "DATABASE_URL",
      value: "********",
      isSecret: true
    },
    {
      key: "API_KEY",
      value: "********",
      isSecret: true
    },
    { key: "PORT", value: "3000", isSecret: false }
  ];
  const each_array = ensure_array_like(variables);
  $$payload.out += `<div class="space-y-4"><div class="flex justify-between items-center"><h2 class="text-lg font-medium">Environment Variables</h2> <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Add Variable</button></div> <div class="bg-neutral-900 rounded-lg divide-y divide-neutral-800"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let variable = each_array[$$index];
    $$payload.out += `<div class="flex items-center justify-between p-4"><div class="space-y-1"><div class="font-medium flex items-center gap-2">${escape_html(variable.key)} `;
    if (variable.isSecret) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="text-xs bg-neutral-800 px-2 py-1 rounded-full">Secret</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="text-sm text-gray-400 font-mono">${escape_html(variable.value)}</div></div> <div class="flex items-center gap-3"><button class="text-gray-400 hover:text-white">Edit</button> <button class="text-red-400 hover:text-red-300">Delete</button></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function LogStream($$payload) {
  let logs = [
    {
      timestamp: "2024-01-01 12:00:00",
      level: "INFO",
      message: "Application started"
    },
    {
      timestamp: "2024-01-01 12:00:01",
      level: "ERROR",
      message: "Failed to connect to database"
    }
  ];
  const each_array = ensure_array_like(logs);
  $$payload.out += `<div class="bg-neutral-900 rounded-lg p-4"><div class="h-96 overflow-y-auto font-mono"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let log = each_array[$$index];
    $$payload.out += `<div class="py-1 flex gap-4"><span class="text-gray-400">${escape_html(log.timestamp)}</span> <span${attr("class", log.level === "ERROR" ? "text-red-400" : "text-green-400")}>[${escape_html(log.level)}]</span> <span>${escape_html(log.message)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
function Routes($$payload) {
  let endpoints = [
    { url: "my-app.cfcosmos.net", status: "active" },
    {
      url: "staging.my-app.cfcosmos.net",
      status: "staging"
    }
  ];
  const each_array = ensure_array_like(endpoints);
  $$payload.out += `<div class="space-y-4"><div class="flex justify-between items-center"><h2 class="text-lg font-medium">Public Endpoints</h2> <button class="text-sm text-blue-400 hover:text-blue-300">Add Custom Domain</button></div> <div class="bg-neutral-900 rounded-lg divide-y divide-neutral-800"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let endpoint = each_array[$$index];
    $$payload.out += `<div class="flex items-center justify-between p-4"><div class="flex items-center gap-3"><div${attr("class", `h-2 w-2 rounded-full ${stringify(endpoint.status === "active" ? "bg-green-400" : "bg-yellow-400")}`)}></div> <a${attr("href", `https://${stringify(endpoint.url)}`)} class="font-mono text-blue-400 hover:text-blue-300" target="_blank" rel="noopener">${escape_html(endpoint.url)}</a></div> <span class="text-sm text-gray-400 capitalize">${escape_html(endpoint.status)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload, $$props) {
  push();
  const { orgId, spaceId, appId } = get(page).params;
  let activeTab = "instances";
  const tabs = [
    "instances",
    "env-variables",
    "log-stream",
    "routes"
  ];
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
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center mb-6"><div class="text-sm text-gray-400"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations /</a> <a${attr("href", `/app/org/${stringify(orgId)}`)} class="hover:text-white transition-colors">${escape_html(orgId)}</a> <span class="mx-0">/ space /</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}`)} class="hover:text-white transition-colors">${escape_html(spaceId)}</a> <span class="mx-0">/ app /</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}/app/${stringify(appId)}`)} class="hover:text-white transition-colors">${escape_html(appId)}</a> <span class="mx-0">/</span> <div class="flex items-center space-x-3 pt-5">`;
  Server($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">Instances of app ${escape_html(appId)}</h1></div></div></div> <div class="border-b border-gray-700"><nav class="-mb-px flex space-x-8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let tab = each_array[i];
    $$payload.out += `<button${attr("class", `py-2 px-1 border-b-2 ${stringify(activeTab === tab ? "border-blue-500 text-blue-500" : "border-transparent hover:border-gray-700 hover:text-gray-200")}`)}><div class="flex items-center gap-2"><span>${escape_html(tab.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))}</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-neutral-800 text-gray-400 rounded border border-neutral-700 shadow-sm">${escape_html(i + 1)}</span></div></button>`;
  }
  $$payload.out += `<!--]--></nav></div> <div class="py-4">`;
  if (activeTab === "instances") {
    $$payload.out += "<!--[-->";
    Instances($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    if (activeTab === "env-variables") {
      $$payload.out += "<!--[-->";
      EnvVariables($$payload);
    } else {
      $$payload.out += "<!--[!-->";
      if (activeTab === "log-stream") {
        $$payload.out += "<!--[-->";
        LogStream($$payload);
      } else {
        $$payload.out += "<!--[!-->";
        if (activeTab === "routes") {
          $$payload.out += "<!--[-->";
          Routes($$payload);
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
