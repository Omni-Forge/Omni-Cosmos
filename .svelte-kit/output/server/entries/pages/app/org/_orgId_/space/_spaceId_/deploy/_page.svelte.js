import { Q as push, V as store_get, a8 as copy_payload, a0 as attr, a3 as ensure_array_like, T as escape_html, a9 as assign_payload, W as unsubscribe_stores, S as pop } from "../../../../../../../../chunks/index.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import "../../../../../../../../chunks/client.js";
import { S as Slider } from "../../../../../../../../chunks/Slider.js";
import { S as Server } from "../../../../../../../../chunks/server.js";
import { M as Memory_stick, C as Cpu } from "../../../../../../../../chunks/memory-stick.js";
import { D as Database } from "../../../../../../../../chunks/database.js";
import { P as Play } from "../../../../../../../../chunks/play.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let sourceFields;
  const source = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("source");
  const { orgId, spaceId } = store_get($$store_subs ??= {}, "$page", page).params;
  let loading = false;
  let autoscalingEnabled = false;
  let formData = {
    name: "",
    instances: 1,
    memory: 256,
    disk_quota: 512,
    cpu_limit: 100,
    source_config: {},
    env: {}
  };
  function getSourceFields(source2) {
    switch (source2) {
      case "github":
        return [
          {
            id: "repo",
            label: "Repository",
            type: "text",
            placeholder: "owner/repo",
            required: true
          },
          {
            id: "branch",
            label: "Branch",
            type: "text",
            placeholder: "main",
            required: true
          }
        ];
      case "gitlab":
        return [
          {
            id: "project",
            label: "Project",
            type: "text",
            placeholder: "group/project",
            required: true
          },
          {
            id: "branch",
            label: "Branch",
            type: "text",
            placeholder: "main",
            required: true
          }
        ];
      case "git":
        return [
          {
            id: "url",
            label: "Repository URL",
            type: "text",
            placeholder: "https://github.com/user/repo.git",
            required: true
          },
          {
            id: "branch",
            label: "Branch",
            type: "text",
            placeholder: "main",
            required: true
          }
        ];
      case "docker":
        return [
          {
            id: "image",
            label: "Image",
            type: "text",
            placeholder: "nginx:latest",
            required: true
          }
        ];
      case "shell":
        return [];
      default:
        return [];
    }
  }
  let resourceConfigs = [
    {
      icon: Server,
      title: "Application Instances",
      value: 1,
      minValue: 1,
      maxValue: 10,
      min: 1,
      max: 20,
      step: 1,
      format: (val) => val.toString()
    },
    {
      icon: Memory_stick,
      title: "Memory per Instance",
      value: 256,
      minValue: 256,
      maxValue: 512,
      min: 128,
      max: 4096,
      step: 128,
      format: (val) => val >= 1024 ? `${(val / 1024).toFixed(1)}GB` : `${val}MB`
    },
    {
      icon: Database,
      title: "Disk Quota",
      value: 512,
      minValue: 512,
      maxValue: 1024,
      min: 512,
      max: 8192,
      step: 512,
      format: (val) => val >= 1024 ? `${(val / 1024).toFixed(1)}GB` : `${val}MB`
    },
    {
      icon: Cpu,
      title: "CPU Limit",
      value: 100,
      minValue: 0,
      maxValue: 400,
      min: 0,
      max: 400,
      step: 5,
      format: (val) => `${val}%`
    }
  ];
  {
    if (source) {
      const fields = getSourceFields(source);
      fields.forEach((field) => {
        if (!(field.id in formData)) {
          formData[field.id] = "";
        }
      });
    }
  }
  sourceFields = getSourceFields(source ?? "");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="max-w-4xl mx-auto my-8"><form class="space-y-6"><div class="space-y-4"><h2 class="text-lg font-medium text-white">Application Details</h2> <div class="space-y-2"><label for="name" class="block text-sm font-medium">Application Name</label> <input id="name" type="text"${attr("value", formData.name)} required class="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500" placeholder="my-application"></div></div> `;
    if (sourceFields.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(sourceFields);
      $$payload2.out += `<div class="space-y-4"><h2 class="text-lg font-medium text-white">Source Configuration</h2> <div class="space-y-4"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let field = each_array[$$index_1];
        $$payload2.out += `<div class="space-y-2"><label${attr("for", field.id)} class="block text-sm font-medium">${escape_html(field.label)}</label> `;
        if (field.type === "select") {
          $$payload2.out += "<!--[-->";
          const each_array_1 = ensure_array_like(field.options || []);
          $$payload2.out += `<select${attr("id", field.id)}${attr("required", field.required, true)} class="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500"><!--[-->`;
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let option = each_array_1[$$index];
            $$payload2.out += `<option${attr("value", option.value)}>${escape_html(option.label)}</option>`;
          }
          $$payload2.out += `<!--]--></select>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<input${attr("id", field.id)}${attr("type", field.type)}${attr("value", formData[field.id])}${attr("required", field.required, true)}${attr("placeholder", field.placeholder)} class="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500">`;
        }
        $$payload2.out += `<!--]--></div>`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="space-y-4"><div class="flex justify-between items-center"><h2 class="text-lg font-medium text-white">Resource Configuration</h2> <label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${attr("checked", autoscalingEnabled, true)} class="sr-only peer"> <div class="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div> <span class="ml-2">Enable Autoscaling</span></label></div> `;
    {
      $$payload2.out += "<!--[-->";
      const each_array_2 = ensure_array_like(resourceConfigs);
      $$payload2.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let config = each_array_2[$$index_2];
        Slider($$payload2, {
          icon: config.icon,
          title: config.title,
          get value() {
            return config.value;
          },
          set value($$value) {
            config.value = $$value;
            $$settled = false;
          },
          min: config.min,
          max: config.max,
          step: config.step,
          formatValue: config.format
        });
      }
      $$payload2.out += `<!--]--></div>`;
    }
    $$payload2.out += `<!--]--></div> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="flex justify-end space-x-4"><button type="button" class="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Cancel</button> <button type="submit"${attr("disabled", loading, true)} class="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50">`;
    Play($$payload2, { class: "w-4 h-4" });
    $$payload2.out += `<!----> <span>${escape_html("Deploy Application")}</span></button></div></form></div>`;
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
