import { Y as sanitize_props, a2 as spread_props, X as slot, Q as push, V as store_get, W as unsubscribe_stores, a1 as bind_props, S as pop, _ as fallback, a3 as ensure_array_like, a7 as stringify, T as escape_html, a8 as copy_payload, a0 as attr, a9 as assign_payload } from "../../../../../../../chunks/index.js";
import { o as onDestroy } from "../../../../../../../chunks/index-server.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { E as Ellipsis_vertical, R as Refresh_cw } from "../../../../../../../chunks/refresh-cw.js";
import { g as get } from "../../../../../../../chunks/index2.js";
import { G as Github } from "../../../../../../../chunks/github.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { X } from "../../../../../../../chunks/x.js";
import { S as Search, a as Square, A as Arrow_up_down } from "../../../../../../../chunks/square.js";
import { P as Play } from "../../../../../../../chunks/play.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { A as Activity } from "../../../../../../../chunks/activity.js";
import { S as Server } from "../../../../../../../chunks/server.js";
import { M as Memory_stick, C as Cpu } from "../../../../../../../chunks/memory-stick.js";
function Folder($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "folder" },
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
function Git_branch($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "line",
      { "x1": "6", "x2": "6", "y1": "3", "y2": "15" }
    ],
    [
      "circle",
      { "cx": "18", "cy": "6", "r": "3" }
    ],
    [
      "circle",
      { "cx": "6", "cy": "18", "r": "3" }
    ],
    ["path", { "d": "M18 9a9 9 0 0 1-9 9" }]
  ];
  Icon($$payload, spread_props([
    { name: "git-branch" },
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
function Terminal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["polyline", { "points": "4 17 10 11 4 5" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "20",
        "y1": "19",
        "y2": "19"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "terminal" },
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
function Upload($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "15"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "upload" },
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
function AppActions($$payload, $$props) {
  push();
  var $$store_subs;
  let app = $$props["app"];
  store_get($$store_subs ??= {}, "$page", page).params.spaceId;
  store_get($$store_subs ??= {}, "$page", page).params.appId;
  $$payload.out += `<div class="relative menu-container"><button class="p-2 hover:bg-neutral-800 rounded-lg transition-colors">`;
  Ellipsis_vertical($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { app });
  pop();
}
function DeploymentModal($$payload, $$props) {
  push();
  let show = fallback($$props["show"], false);
  const sources = [
    {
      id: "github",
      name: "GitHub",
      description: "Deploy from GitHub repository",
      icon: Github,
      color: "text-white"
    },
    {
      id: "gitlab",
      name: "GitLab",
      description: "Deploy from GitLab project",
      icon: Git_branch,
      color: "text-orange-400"
    },
    {
      id: "git",
      name: "Public Git URL",
      description: "Deploy from any Git repository",
      icon: Git_branch,
      color: "text-blue-400"
    },
    {
      id: "docker",
      name: "Docker Image",
      description: "Deploy from container image",
      icon: Git_branch,
      color: "text-blue-400"
    },
    {
      id: "archive",
      name: "Application Archive",
      description: "Upload and deploy archive file",
      icon: Upload,
      color: "text-purple-400"
    },
    {
      id: "folder",
      name: "Application Folder",
      description: "Deploy from local folder",
      icon: Folder,
      color: "text-yellow-400"
    },
    {
      id: "shell",
      name: "Application Shell",
      description: "Create new app from scratch",
      icon: Terminal,
      color: "text-green-400"
    }
  ];
  if (show) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(sources);
    $$payload.out += `<div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"><div class="bg-neutral-900 rounded-lg w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]"><div class="flex justify-between items-center mb-6"><h2 class="text-xl font-semibold text-white">Select Deployment Source</h2> <button class="text-gray-400 hover:text-white transition-colors">`;
    X($$payload, { class: "w-5 h-5" });
    $$payload.out += `<!----></button></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let source = each_array[$$index];
      $$payload.out += `<button class="flex flex-col items-center text-center p-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700 hover:border-neutral-600"><!---->`;
      source.icon?.($$payload, {
        class: `w-12 h-12 mb-4 ${stringify(source.color)}`
      });
      $$payload.out += `<!----> <h3 class="text-lg font-medium text-white mb-2">${escape_html(source.name)}</h3> <p class="text-sm text-gray-400">${escape_html(source.description)}</p></button>`;
    }
    $$payload.out += `<!--]--></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { show });
  pop();
}
function Apps($$payload, $$props) {
  push();
  let filteredApps;
  const { orgId, spaceId } = get(page).params;
  const generateMockApps = (count = 20) => {
    const appTypes = [
      "api",
      "worker",
      "frontend",
      "backend",
      "service",
      "job",
      "auth",
      "cache",
      "proxy",
      "monitor"
    ];
    const environments = ["dev", "staging", "prod", "test", "demo"];
    const buildpacks = [
      "nodejs_buildpack",
      "java_buildpack",
      "python_buildpack",
      "ruby_buildpack",
      "go_buildpack",
      "php_buildpack"
    ];
    const states = ["STARTED", "STOPPED", "CRASHED"];
    const stateWeights = [0.7, 0.2, 0.1];
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
      const appType = appTypes[Math.floor(Math.random() * appTypes.length)];
      const env = environments[Math.floor(Math.random() * environments.length)];
      const state = getWeightedState();
      const instances = Math.floor(Math.random() * 5) + 1;
      const running_instances = state === "STARTED" ? instances : 0;
      const memory = [256, 512, 1024, 2048][Math.floor(Math.random() * 4)];
      const buildpack = buildpacks[Math.floor(Math.random() * buildpacks.length)];
      const randomDate = /* @__PURE__ */ new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 90));
      return {
        guid: (i + 1).toString(),
        name: `${appType}-${env}-${Math.floor(Math.random() * 1e3)}`,
        state,
        instances,
        running_instances,
        memory,
        disk_quota: memory * 2,
        cpu_usage: state === "STARTED" ? Math.floor(Math.random() * 95) : 0,
        urls: state === "STOPPED" ? [] : [`${appType}-${env}.apps.cf.example.com`],
        created_at: randomDate.toISOString(),
        buildpack,
        stack: "cflinuxfs3"
      };
    });
  };
  let searchQuery = "";
  let sortField = "name";
  let selectedApps = /* @__PURE__ */ new Set();
  const applications = generateMockApps(50);
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
  let showDeployModal = false;
  filteredApps = applications.filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    const direction = 1;
    return a[sortField] > b[sortField] ? direction : -direction;
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(filteredApps);
    $$payload2.out += `<div class="h-full flex flex-col">`;
    DeploymentModal($$payload2, {
      get show() {
        return showDeployModal;
      },
      set show($$value) {
        showDeployModal = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6"><div class="relative w-full sm:w-96">`;
    Search($$payload2, {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
    });
    $$payload2.out += `<!----> <input type="text"${attr("value", searchQuery)} placeholder="Search applications..." class="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500"></div> <div class="flex space-x-3 w-full sm:w-auto"><button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
    Play($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----> <span>Start</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
    Square($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----> <span>Stop</span></button> <button class="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50"${attr("disabled", selectedApps.size === 0, true)}>`;
    Refresh_cw($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----> <span>Restart</span></button> <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">`;
    Plus($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----> <span>Deploy Application</span></button></div></div> <div class="flex-1"><table class="w-full"><thead><tr class="text-left border-b border-neutral-800"><th class="p-4"><input type="checkbox"${attr("checked", selectedApps.size === applications.length, true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></th><th class="p-4 cursor-pointer"><div class="flex items-center space-x-2"><span>Name</span> `;
    Arrow_up_down($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----></div></th><th class="p-4">Status</th><th class="p-4">Instances</th><th class="p-4">Memory</th><th class="p-4">CPU</th><th class="p-4">Routes</th><th class="p-4"></th></tr></thead><tbody><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let app = each_array[$$index_1];
      const each_array_1 = ensure_array_like(app.urls);
      $$payload2.out += `<tr class="border-b border-neutral-800 hover:bg-neutral-900/50"><td class="p-4"><input type="checkbox"${attr("checked", selectedApps.has(app.guid), true)} class="rounded border-neutral-700 text-blue-500 focus:ring-blue-500"></td><td class="p-4"><a${attr("href", `./${stringify(spaceId)}/app/${stringify(app.guid)}`)} class="text-white hover:text-blue-400">${escape_html(app.name)}</a> <div class="text-sm text-gray-400">${escape_html(app.buildpack)}</div></td><td class="p-4"><div class="flex items-center space-x-2">`;
      Activity($$payload2, {
        class: `w-4 h-4 ${stringify(getStateColor(app.state))}`
      });
      $$payload2.out += `<!----> <span${attr("class", getStateColor(app.state))}>${escape_html(app.state)}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
      Server($$payload2, { class: "w-4 h-4 text-blue-400" });
      $$payload2.out += `<!----> <span>${escape_html(app.running_instances)}/${escape_html(app.instances)}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
      Memory_stick($$payload2, { class: "w-4 h-4 text-blue-400" });
      $$payload2.out += `<!----> <span>${escape_html(formatMemory(app.memory))}</span></div></td><td class="p-4"><div class="flex items-center space-x-2">`;
      Cpu($$payload2, { class: "w-4 h-4 text-blue-400" });
      $$payload2.out += `<!----> <span>${escape_html(app.cpu_usage)}%</span></div></td><td class="p-4"><div class="space-y-1"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let url = each_array_1[$$index];
        $$payload2.out += `<div class="text-sm">${escape_html(url)}</div>`;
      }
      $$payload2.out += `<!--]--></div></td><td class="p-4">`;
      AppActions($$payload2, { app });
      $$payload2.out += `<!----></td></tr>`;
    }
    $$payload2.out += `<!--]--></tbody></table></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function _page($$payload, $$props) {
  push();
  const { orgId, spaceId } = get(page).params;
  let activeTab = "Applications";
  const tabs = ["Applications", "Access Control"];
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
  $$payload.out += `<div class="flex flex-col h-screen bg-neutral-950 text-gray-300"><div class="flex-none p-6 pb-10"><div class="flex justify-between items-center mb-6"><div class="text-sm text-gray-400"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations</a> <span class="mx-2">/</span> <a${attr("href", `/app/org/${stringify(orgId)}`)} class="hover:text-white transition-colors">${escape_html(orgId)}</a> <span class="mx-2">/</span> <a${attr("href", `/app/org/${stringify(orgId)}/space/${stringify(spaceId)}`)} class="hover:text-white transition-colors">${escape_html(spaceId)}</a> <span class="mx-2">/</span> <span>Apps/</span> <div class="flex items-center space-x-3 pt-5">`;
  Server($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">Space ${escape_html(spaceId)}</h1></div></div></div> <div class="border-b border-gray-700"><nav class="-mb-px flex space-x-8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let tab = each_array[i];
    $$payload.out += `<button${attr("class", `py-2 px-1 border-b-2 ${stringify(activeTab === tab ? "border-blue-500 text-blue-500" : "border-transparent hover:border-gray-700 hover:text-gray-200")}`)}><div class="flex items-center gap-2"><span>${escape_html(tab)}</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-neutral-800 text-gray-400 rounded border border-neutral-700 shadow-sm">${escape_html(i + 1)}</span></div></button>`;
  }
  $$payload.out += `<!--]--></nav></div></div> <div class="flex-1 min-h-0 p-6 pt-0">`;
  if (activeTab === "Applications") {
    $$payload.out += "<!--[-->";
    Apps($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    if (activeTab === "Access Control") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<h1 class="text-lg">NOT IMPLEMENTED</h1>`;
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
