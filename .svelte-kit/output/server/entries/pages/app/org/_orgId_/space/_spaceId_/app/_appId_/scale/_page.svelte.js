import { Y as sanitize_props, a2 as spread_props, X as slot, Q as push, _ as fallback, T as escape_html, a0 as attr, a7 as stringify, a1 as bind_props, S as pop, V as store_get, a8 as copy_payload, a3 as ensure_array_like, a9 as assign_payload, W as unsubscribe_stores } from "../../../../../../../../../../chunks/index.js";
import { p as page } from "../../../../../../../../../../chunks/stores.js";
import { S as Slider } from "../../../../../../../../../../chunks/Slider.js";
import { C as Cpu, M as Memory_stick } from "../../../../../../../../../../chunks/memory-stick.js";
import { D as Database } from "../../../../../../../../../../chunks/database.js";
import { I as Icon } from "../../../../../../../../../../chunks/Icon.js";
import { S as Server } from "../../../../../../../../../../chunks/server.js";
function Gauge($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 14 4-4" }],
    [
      "path",
      { "d": "M3.34 19a10 10 0 1 1 17.32 0" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "gauge" },
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
function Scale($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    [
      "path",
      {
        "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      }
    ],
    ["path", { "d": "M7 21h10" }],
    ["path", { "d": "M12 3v18" }],
    [
      "path",
      { "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "scale" },
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
function Meter($$payload, $$props) {
  push();
  let icon = $$props["icon"];
  let title = $$props["title"];
  let current = $$props["current"];
  let max = $$props["max"];
  let formatValue = fallback($$props["formatValue"], (val) => val?.toString() || "0");
  $$payload.out += `<div class="space-y-4 mb-6"><div class="flex justify-between items-center text-sm"><div class="flex items-center space-x-2"><!---->`;
  icon?.($$payload, { class: "w-4 h-4 text-blue-400" });
  $$payload.out += `<!----> <span class="text-gray-400">${escape_html(title)}</span></div> <span class="text-white">${escape_html(formatValue(current))} / ${escape_html(formatValue(max))}</span></div> <div class="w-full bg-neutral-800 rounded-lg h-4 overflow-hidden"><div class="bg-blue-500 h-full transition-all"${attr("style", `width: ${stringify(current / max * 100)}%`)}><div class="w-full h-full opacity-50 bg-gradient-to-r from-blue-400 to-blue-600"></div></div></div></div>`;
  bind_props($$props, { icon, title, current, max, formatValue });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const generateHistoricalData = (days = 7) => {
    return Array.from({ length: days * 24 }, (_, i) => {
      const date = /* @__PURE__ */ new Date();
      date.setHours(date.getHours() - i);
      return {
        timestamp: date.toISOString(),
        cpu: 30 + Math.random() * 50,
        memory: 300 + Math.random() * 200,
        disk: 600 + Math.random() * 300
      };
    }).reverse();
  };
  generateHistoricalData();
  let app = {
    name: "frontend-app",
    instances: 2,
    memory: 512,
    disk_quota: 1024,
    cpu_limit: 100,
    current_usage: { cpu: 78, memory: 423, disk: 756 }
  };
  let autoscalingEnabled = false;
  let instances = {
    min: app.instances,
    max: app.instances * 2,
    current: app.instances
  };
  let memory = {
    min: app.memory,
    max: app.memory * 2,
    current: app.memory
  };
  let disk = {
    min: app.disk_quota,
    max: app.disk_quota * 2,
    current: app.disk_quota
  };
  let cpu = { min: 0, max: 400, current: app.cpu_limit };
  function formatMemory(mb) {
    return mb >= 1024 ? `${(mb / 1024).toFixed(1)}GB` : `${mb}MB`;
  }
  const sliderConfigs = [
    {
      icon: Server,
      title: "Application Instances",
      bind: instances,
      min: 1,
      max: 20,
      step: 1,
      format: (val) => val.toString()
    },
    {
      icon: Memory_stick,
      title: "Memory per Instance",
      bind: memory,
      min: 128,
      max: 4096,
      step: 128,
      format: formatMemory
    },
    {
      icon: Cpu,
      title: "CPU Limit",
      bind: cpu,
      min: 0,
      max: 400,
      step: 5,
      format: (val) => `${val}%`
    },
    {
      icon: Database,
      title: "Disk Quota",
      bind: disk,
      min: 512,
      max: 8192,
      step: 512,
      format: formatMemory
    }
  ];
  const meterConfigs = [
    {
      icon: Cpu,
      title: "CPU Usage",
      current: app.current_usage.cpu,
      max: 100,
      format: (val) => `${val}%`
    },
    {
      icon: Memory_stick,
      title: "Memory Usage",
      current: app.current_usage.memory,
      max: memory.current,
      format: formatMemory
    },
    {
      icon: Database,
      title: "Disk Usage",
      current: app.current_usage.disk,
      max: disk.current,
      format: formatMemory
    }
  ];
  store_get($$store_subs ??= {}, "$page", page).params.appId;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array_2 = ensure_array_like(meterConfigs);
    $$payload2.out += `<div class="min-h-screen bg-neutral-950 text-gray-300 p-6 space-y-6"><div class="flex items-center space-x-3">`;
    Scale($$payload2, { class: "w-6 h-6 text-blue-400" });
    $$payload2.out += `<!----> <h1 class="text-2xl font-semibold text-white">Scale ${escape_html(app.name)}</h1></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="space-y-6 lg:col-span-2"><div class="bg-neutral-900 rounded-lg p-6"><div class="flex justify-between items-center"><h2 class="text-lg font-semibold text-white flex items-center space-x-2">`;
    Gauge($$payload2, { class: "w-5 h-5 text-blue-400" });
    $$payload2.out += `<!----> <span>Autoscaling</span></h2> <label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${attr("checked", autoscalingEnabled, true)} class="sr-only peer"> <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div></label></div></div> `;
    {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(sliderConfigs);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let config = each_array[$$index];
        Slider($$payload2, {
          icon: config.icon,
          title: config.title,
          get value() {
            return config.bind.current;
          },
          set value($$value) {
            config.bind.current = $$value;
            $$settled = false;
          },
          min: config.min,
          max: config.max,
          step: config.step,
          formatValue: config.format
        });
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div> <div class="space-y-6"><div class="bg-neutral-900 rounded-lg p-6"><h2 class="text-lg font-semibold text-white mb-6">Current Resource Usage</h2> <!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let config = each_array_2[$$index_2];
      Meter($$payload2, {
        icon: config.icon,
        title: config.title,
        current: config.current,
        max: config.max,
        formatValue: config.format
      });
    }
    $$payload2.out += `<!--]--></div> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div></div> <div class="flex justify-end space-x-4"><button class="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Cancel</button> <button class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center space-x-2">`;
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<span>Apply Changes</span>`;
    }
    $$payload2.out += `<!--]--></button></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
