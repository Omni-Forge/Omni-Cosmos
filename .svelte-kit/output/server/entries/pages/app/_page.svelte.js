import { Y as sanitize_props, a2 as spread_props, X as slot, Q as push, a3 as ensure_array_like, V as store_get, T as escape_html, W as unsubscribe_stores, S as pop, Z as rest_props, _ as fallback, $ as spread_attributes, a1 as bind_props, a8 as copy_payload, a9 as assign_payload } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { C as Cloud } from "../../../chunks/cloud.js";
import { D as Database } from "../../../chunks/database.js";
import { S as Server } from "../../../chunks/server.js";
import { A as Activity } from "../../../chunks/activity.js";
import { StackedBarChart, LineChart as LineChart$1, ScaleTypes } from "@carbon/charts";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { I as Icon } from "../../../chunks/Icon.js";
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
const loading = writable(true);
const error = writable(null);
const stats = writable({
  apps: { total: 0, running: 0, crashed: 0 },
  services: { total: 0, bound: 0 },
  memory: { used_gb: 0, total_gb: 100, used_percentage: 0 },
  instances: { total: 0, running: 0, crashed: 0 }
});
const memoryHistory = writable([]);
const instanceHistory = writable([]);
function StatsCards($$payload, $$props) {
  push();
  var $$store_subs;
  const statsCards = [
    {
      name: "Applications",
      value: () => `${store_get($$store_subs ??= {}, "$stats", stats).apps.running}/${store_get($$store_subs ??= {}, "$stats", stats).apps.total}`,
      icon: Cloud,
      subtitle: () => store_get($$store_subs ??= {}, "$stats", stats).apps.crashed > 0 ? `${store_get($$store_subs ??= {}, "$stats", stats).apps.crashed} crashed` : "All healthy"
    },
    {
      name: "Services",
      value: () => `${store_get($$store_subs ??= {}, "$stats", stats).services.bound}/${store_get($$store_subs ??= {}, "$stats", stats).services.total}`,
      icon: Database,
      subtitle: () => "Bound Services"
    },
    {
      name: "Memory Usage",
      value: () => `${store_get($$store_subs ??= {}, "$stats", stats).memory.used_gb}GB`,
      icon: Server,
      subtitle: () => `${store_get($$store_subs ??= {}, "$stats", stats).memory.used_percentage}% of ${store_get($$store_subs ??= {}, "$stats", stats).memory.total_gb}GB`
    },
    {
      name: "App Instances",
      value: () => `${store_get($$store_subs ??= {}, "$stats", stats).instances.running}/${store_get($$store_subs ??= {}, "$stats", stats).instances.total}`,
      icon: Activity,
      subtitle: () => store_get($$store_subs ??= {}, "$stats", stats).instances.crashed > 0 ? `${store_get($$store_subs ??= {}, "$stats", stats).instances.crashed} crashed` : "All healthy"
    }
  ];
  const each_array = ensure_array_like(statsCards);
  $$payload.out += `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out += `<div class="bg-neutral-900 rounded-lg shadow p-6"><div class="flex items-start"><div class="inline-flex p-3 rounded-lg bg-gray-800"><!---->`;
    stat.icon?.($$payload, { class: "w-6 h-6 text-blue-400" });
    $$payload.out += `<!----></div> <div class="ml-4"><h3 class="text-base font-normal text-gray-400">${escape_html(stat.name)}</h3> <p class="mt-1 text-2xl font-semibold text-white">${escape_html(stat.value())}</p> <p class="mt-1 text-sm text-gray-500">${escape_html(stat.subtitle())}</p></div></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function BaseChart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "data",
    "options",
    "Chart",
    "chart",
    "ref",
    "id"
  ]);
  push();
  const chartHolderCssClass = "cds--chart-holder";
  let data = fallback($$props["data"], () => [], true);
  let options = fallback($$props["options"], () => ({}), true);
  let Chart = $$props["Chart"];
  let chart = $$props["chart"];
  let ref = $$props["ref"];
  let id = fallback($$props["id"], () => `chart-${Math.random().toString(36)}`, true);
  onDestroy(() => {
    if (chart) {
      chart.components.forEach((component) => component.destroy());
      chart.model.set({ destroyed: true }, { skipUpdate: true });
      chart = void 0;
    }
  });
  $$payload.out += `<div${spread_attributes({
    id,
    class: chartHolderCssClass,
    ...$$restProps
  })}></div>`;
  bind_props($$props, { data, options, Chart, chart, ref, id });
  pop();
}
function BarChartStacked($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["options", "data", "chart", "ref"]);
  let options = $$props["options"];
  let data = $$props["data"];
  let chart = fallback($$props["chart"], () => void 0, true);
  let ref = fallback($$props["ref"], () => void 0, true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    BaseChart($$payload2, spread_props([
      $$restProps,
      {
        Chart: StackedBarChart,
        options,
        data,
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get chart() {
          return chart;
        },
        set chart($$value) {
          chart = $$value;
          $$settled = false;
        }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { options, data, chart, ref });
}
function LineChart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["options", "data", "chart", "ref"]);
  let options = $$props["options"];
  let data = $$props["data"];
  let chart = fallback($$props["chart"], () => void 0, true);
  let ref = fallback($$props["ref"], () => void 0, true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    BaseChart($$payload2, spread_props([
      $$restProps,
      {
        Chart: LineChart$1,
        options,
        data,
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        get chart() {
          return chart;
        },
        set chart($$value) {
          chart = $$value;
          $$settled = false;
        }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { options, data, chart, ref });
}
function MemChart($$payload, $$props) {
  push();
  var $$store_subs;
  let chartData;
  const options = {
    title: "Memory Usage Over Time",
    axes: {
      left: {
        title: "GB Used",
        mapsTo: "value",
        scaleType: ScaleTypes.LINEAR,
        color: "#9CA3AF",
        // gray-400
        ticks: { color: "#9CA3AF" }
      },
      bottom: {
        title: "Time",
        mapsTo: "date",
        scaleType: ScaleTypes.TIME,
        color: "#9CA3AF",
        // gray-400
        ticks: { color: "#9CA3AF" }
      }
    },
    curve: "curveMonotoneX",
    height: "400px",
    theme: "g100",
    background: "#171717",
    // neutral-900
    color: {
      scale: {
        "Memory Usage": "#3B82F6"
        // blue-500
      }
    },
    grid: {
      x: {
        enabled: true,
        color: "#262626"
        // neutral-800
      },
      y: {
        enabled: true,
        color: "#262626"
        // neutral-800
      }
    },
    tooltip: {
      showTotal: false,
      style: {
        bg: "#1F2937",
        // gray-800
        color: "#F3F4F6"
        // gray-100
      }
    },
    legend: {
      alignment: "center",
      color: "#D1D5DB"
      // gray-300
    },
    margins: { top: 40, right: 50, bottom: 50, left: 60 },
    animations: true
  };
  chartData = store_get($$store_subs ??= {}, "$memoryHistory", memoryHistory).map((point) => ({
    group: "Memory Usage",
    date: new Date(point.timestamp),
    value: point.used_gb
  }));
  $$payload.out += `<div class="bg-neutral-900 rounded-lg shadow-lg"><div class="px-6 py-4 border-b border-neutral-700"><h2 class="text-lg font-semibold text-white">Memory Usage Over Time</h2></div> <div class="p-6 bg-neutral-900"><div class="chart-container">`;
  LineChart($$payload, { data: chartData, options });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function AppInstancesChart($$payload, $$props) {
  push();
  var $$store_subs;
  let chartData;
  const options = {
    title: "Application Instances Over Time",
    axes: {
      left: {
        title: "Instance Count",
        mapsTo: "value",
        stacked: true
      },
      bottom: {
        title: "Time",
        mapsTo: "date",
        scaleType: "time"
      }
    },
    height: "400px",
    theme: "g100",
    colors: {
      scale: { "Running": "#2ecc71", "Crashed": "#e74c3c" }
    },
    tooltip: { showTotal: true },
    legend: { alignment: "center" }
  };
  chartData = store_get($$store_subs ??= {}, "$instanceHistory", instanceHistory).flatMap((point) => [
    {
      group: "Running",
      date: new Date(point.timestamp),
      value: point.running
    },
    {
      group: "Crashed",
      date: new Date(point.timestamp),
      value: point.crashed
    }
  ]);
  $$payload.out += `<div class="bg-neutral-900 rounded-lg shadow-lg"><div class="px-6 py-4 border-b border-neutral-700"><h2 class="text-lg font-semibold text-white">Application Instances Over Time</h2></div> <div class="p-6">`;
  BarChartStacked($$payload, { data: chartData, options });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-900 text-gray-100 p-6">`;
  if (store_get($$store_subs ??= {}, "$loading", loading)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center py-8">`;
    Loader_circle($$payload, { class: "w-8 h-8 animate-spin text-gray-300" });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (store_get($$store_subs ??= {}, "$error", error)) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="bg-red-700 border border-red-500 text-red-100 px-4 py-3 rounded">${escape_html(store_get($$store_subs ??= {}, "$error", error))}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
      StatsCards($$payload);
      $$payload.out += `<!----> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">`;
      MemChart($$payload);
      $$payload.out += `<!----> `;
      AppInstancesChart($$payload);
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
