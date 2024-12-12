import { Y as sanitize_props, a2 as spread_props, X as slot, Q as push, a3 as ensure_array_like, T as escape_html, S as pop } from "../../chunks/index.js";
import { N as Navbar_1 } from "../../chunks/Navbar.js";
import { C as Cloud } from "../../chunks/cloud.js";
import { D as Database } from "../../chunks/database.js";
import { A as Activity } from "../../chunks/activity.js";
import { S as Server } from "../../chunks/server.js";
import { G as Github } from "../../chunks/github.js";
import { I as Icon } from "../../chunks/Icon.js";
function Coffee($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 2v2" }],
    ["path", { "d": "M14 2v2" }],
    [
      "path",
      {
        "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
      }
    ],
    ["path", { "d": "M6 2v2" }]
  ];
  Icon($$payload, spread_props([
    { name: "coffee" },
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
function Globe($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$payload, spread_props([
    { name: "globe" },
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
function Heart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "heart" },
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
  const features = [
    {
      title: "Modern Dashboard",
      description: "A sleek, intuitive interface for managing your Cloud Foundry applications and services with real-time updates and comprehensive monitoring.",
      icon: Cloud
    },
    {
      title: "Resource Management",
      description: "Easy-to-use tools for monitoring application states, service bindings, memory usage, and instance health across your Cloud Foundry environment.",
      icon: Database
    },
    {
      title: "Activity Tracking",
      description: "Detailed activity feeds and audit logs to help you stay informed about changes and events within your Cloud Foundry organization.",
      icon: Activity
    },
    {
      title: "Performance Metrics",
      description: "Visual representations of key performance indicators and resource utilization to help optimize your application deployment.",
      icon: Server
    }
  ];
  let intersectingFeatures = new Array(features.length).fill(false);
  const each_array_1 = ensure_array_like(features);
  $$payload.out += `<div class="bg-black">`;
  Navbar_1($$payload);
  $$payload.out += `<!----> <div class="min-h-screen bg-neutral-950 text-gray-300">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="py-16">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="py-16"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Powerful Features</h2> <p class="mt-4 text-lg text-gray-400">Everything you need to manage your Cloud Foundry environment</p></div> <div class="grid gap-8 grid-cols-1 sm:grid-cols-2"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let feature = each_array_1[i];
    $$payload.out += `<div>`;
    if (intersectingFeatures[i]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="relative group"><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div> <div class="relative px-8 py-10 bg-neutral-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"><!---->`;
      feature.icon?.($$payload, { class: "w-8 h-8 text-blue-400 flex-shrink-0" });
      $$payload.out += `<!----> <div class="space-y-2"><p class="text-xl font-semibold text-white">${escape_html(feature.title)}</p> <p class="text-gray-400">${escape_html(feature.description)}</p></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> <footer class="border-t border-neutral-800 mt-12"><div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"><div class="flex justify-center space-x-6 md:order-2"><a href="https://github.com/tristanpoland/CF-Cosmos" class="text-gray-400 hover:text-gray-300 transition-colors duration-300">`;
  Github($$payload, { class: "h-6 w-6" });
  $$payload.out += `<!----></a> <a href="#" class="text-gray-400 hover:text-gray-300 transition-colors duration-300">`;
  Globe($$payload, { class: "h-6 w-6" });
  $$payload.out += `<!----></a></div> <div class="mt-8 md:order-1 md:mt-0 text-center md:text-left"><div class="flex md:justify-start space-x-2 text-gray-400"><span>Made with</span> `;
  Heart($$payload, { class: "h-5 w-5 text-red-500" });
  $$payload.out += `<!----> <span>and</span> `;
  Coffee($$payload, { class: "h-5 w-5 text-yellow-500" });
  $$payload.out += `<!----> <span>by Tristan J. Poland</span></div> <p class="mt-2 text-xs text-gray-400">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Cosmos Web UI for Cloud Foundry. Licensed under Apache 2.0.</p></div></div></footer></div></div>`;
  pop();
}
export {
  _page as default
};
