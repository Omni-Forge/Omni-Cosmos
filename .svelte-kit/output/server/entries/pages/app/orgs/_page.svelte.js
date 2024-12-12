import { Q as push, a1 as bind_props, S as pop, a3 as ensure_array_like, T as escape_html, a0 as attr, a7 as stringify } from "../../../../chunks/index.js";
import { X } from "../../../../chunks/x.js";
import { B as Building_2, U as Users } from "../../../../chunks/users.js";
import { P as Plus } from "../../../../chunks/plus.js";
import { C as Cloud } from "../../../../chunks/cloud.js";
function FormModal($$payload, $$props) {
  push();
  let title = $$props["title"];
  let show = $$props["show"];
  let endpoint = $$props["endpoint"];
  let fields = $$props["fields"];
  let formData = {};
  let formErrors = {};
  let loading = false;
  let error = null;
  {
    if (show) {
      formData = fields.reduce(
        (acc, field) => {
          acc[field.id] = "";
          return acc;
        },
        {}
      );
      formErrors = {};
      error = null;
    }
  }
  if (show) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(fields);
    $$payload.out += `<div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"><div class="bg-neutral-900 rounded-lg w-full max-w-md p-6 space-y-4"><div class="flex justify-between items-center"><h2 class="text-xl font-semibold text-white">${escape_html(title)}</h2> <button class="text-gray-400 hover:text-white transition-colors">`;
    X($$payload, { class: "w-5 h-5" });
    $$payload.out += `<!----></button></div> <form class="space-y-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let field = each_array[$$index_1];
      $$payload.out += `<div><label${attr("for", field.id)} class="block text-sm font-medium text-gray-300 mb-1">${escape_html(field.label)}</label> `;
      if (field.type === "select") {
        $$payload.out += "<!--[-->";
        const each_array_1 = ensure_array_like(field.options || []);
        $$payload.out += `<select${attr("id", field.id)} class="w-full px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"><option value="">Select ${escape_html(field.label)}</option><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let option = each_array_1[$$index];
          $$payload.out += `<option${attr("value", option.value)}>${escape_html(option.label)}</option>`;
        }
        $$payload.out += `<!--]--></select>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<input${attr("id", field.id)}${attr("type", field.type)}${attr("value", formData[field.id])}${attr("min", field.min)}${attr("max", field.max)}${attr("placeholder", field.placeholder)} class="w-full px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors">`;
      }
      $$payload.out += `<!--]--> `;
      if (formErrors[field.id]) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p class="mt-1 text-sm text-red-400">${escape_html(formErrors[field.id])}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--> `;
    if (error) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-sm text-red-400">${escape_html(error)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex justify-end space-x-3"><button type="button" class="px-4 py-2 text-gray-300 hover:text-white transition-colors">Cancel</button> <button type="submit"${attr("disabled", loading, true)} class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${escape_html("Submit")}</button></div></form></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { title, show, endpoint, fields });
  pop();
}
function _page($$payload, $$props) {
  push();
  let organizations = [
    {
      guid: "1",
      name: "FiveTwenty INC",
      slug: "fivetwenty-inc",
      spaces: 5,
      users: 12,
      memory_usage: 4.2,
      memory_quota: 10
    },
    {
      guid: "2",
      name: "CNCF",
      slug: "cncf",
      spaces: 3,
      users: 8,
      memory_usage: 7.8,
      memory_quota: 20
    }
  ];
  let showNewOrgModal = false;
  const newOrgFormConfig = {
    title: "New Organization",
    endpoint: "/api/organizations",
    fields: [
      {
        id: "name",
        label: "Organization Name",
        type: "text",
        placeholder: "Enter organization name",
        required: true,
        validations: [
          {
            rule: (value) => value.length >= 3,
            message: "Organization name must be at least 3 characters"
          },
          {
            rule: (value) => /^[a-zA-Z0-9\s-]+$/.test(value),
            message: "Organization name can only contain letters, numbers, spaces, and hyphens"
          }
        ]
      },
      {
        id: "memory_quota",
        label: "Memory Quota (GB)",
        type: "number",
        required: true,
        min: 1,
        max: 100,
        placeholder: "Enter memory quota in GB"
      },
      {
        id: "org_type",
        label: "Organization Type",
        type: "select",
        required: true,
        options: [
          { value: "business", label: "Business" },
          { value: "nonprofit", label: "Non-Profit" },
          { value: "education", label: "Educational" }
        ]
      }
    ]
  };
  const each_array = ensure_array_like(organizations);
  $$payload.out += `<div class="space-y-6 min-h-screen bg-neutral-950 text-gray-300 p-6"><div class="flex justify-between items-center"><div><div class="text-sm text-gray-400 mb-1"><a href="/app/orgs" class="hover:text-white transition-colors">Organizations</a> <span class="mx-2">/</span></div> <div class="flex items-center space-x-3">`;
  Building_2($$payload, { class: "w-6 h-6 text-blue-400" });
  $$payload.out += `<!----> <h1 class="text-2xl font-semibold text-white">Organizations</h1></div></div> <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">`;
  Plus($$payload, { class: "w-4 h-4" });
  $$payload.out += `<!----> <span>New Organization</span></button></div> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let org = each_array[$$index];
    $$payload.out += `<div class="group relative overflow-hidden rounded-lg bg-neutral-900 p-6"><div class="absolute inset-0 bg-gradient-to-bl from-blue-950/30 via-transparent to-transparent"></div> <div class="relative"><h3 class="text-xl font-semibold text-white mb-4">${escape_html(org.name)}</h3> <div class="space-y-4"><div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400">`;
    Cloud($$payload, { class: "w-4 h-4" });
    $$payload.out += `<!----> <span>Spaces</span></div> <span class="text-white">${escape_html(org.spaces)}</span></div> <div class="flex items-center justify-between"><div class="flex items-center space-x-2 text-gray-400">`;
    Users($$payload, { class: "w-4 h-4" });
    $$payload.out += `<!----> <span>Users</span></div> <span class="text-white">${escape_html(org.users)}</span></div> <div><div class="flex justify-between text-sm mb-2"><span class="text-gray-400">Memory Usage</span> <span class="text-white">${escape_html(org.memory_usage)}GB / ${escape_html(org.memory_quota)}GB</span></div> <div class="w-full bg-neutral-800 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full transition-all"${attr("style", `width: ${stringify(org.memory_usage / org.memory_quota * 100)}%`)}></div></div></div></div> <div class="mt-6 flex space-x-3"><a${attr("href", `/app/org/${stringify(org.slug)}/spaces`)}><button class="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">View Spaces</button></a> <button class="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Settings</button></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  FormModal($$payload, {
    show: showNewOrgModal,
    title: newOrgFormConfig.title,
    endpoint: newOrgFormConfig.endpoint,
    fields: newOrgFormConfig.fields
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
