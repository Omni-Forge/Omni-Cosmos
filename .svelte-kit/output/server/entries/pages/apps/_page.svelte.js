import { T as sanitize_slots, V as rest_props, P as push, W as fallback, a3 as copy_payload, a4 as assign_payload, Z as bind_props, R as pop, _ as sanitize_props, a2 as spread_props, a0 as attr, Y as slot, X as spread_attributes, a8 as escape_html, ac as ensure_array_like, a1 as stringify } from "../../../chunks/index.js";
import { W as Wrapper, I as Input, F as Frame, C as CloseButton, B as Button } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import { twMerge } from "tailwind-merge";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Search($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "placeholder", "value"]);
  push();
  let size = fallback($$props["size"], "lg");
  let placeholder = fallback($$props["placeholder"], "Search");
  let value = fallback($$props["value"], () => void 0, true);
  const sizes = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Wrapper($$payload2, {
      class: "relative w-full",
      show: $$slots.default,
      children: ($$payload3) => {
        Input($$payload3, spread_props([
          {
            get value() {
              return value;
            },
            set value($$value) {
              value = $$value;
              $$settled = false;
            },
            type: "search",
            placeholder,
            size
          },
          $$restProps,
          {
            class: $$sanitized_props.class,
            $$slots: {
              left: ($$payload4) => {
                $$payload4.out += `<svg slot="left"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`;
              }
            }
          }
        ]));
        $$payload3.out += `<!----> `;
        if ($$slots.default) {
          $$payload3.out += "<!--[-->";
          $$payload3.out += `<div class="flex absolute inset-y-0 end-0 items-center text-gray-500 dark:text-gray-400"><!---->`;
          slot($$payload3, $$props, "default", {}, null);
          $$payload3.out += `<!----></div>`;
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { size, placeholder, value });
  pop();
}
function Select($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  push();
  let items = fallback($$props["items"], () => [], true);
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "Choose option ...");
  let underline = fallback($$props["underline"], false);
  let size = fallback($$props["size"], "md");
  let defaultClass = fallback($$props["defaultClass"], "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500");
  let underlineClass = fallback($$props["underlineClass"], "text-gray-500 disabled:text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:disabled:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer");
  const common = "block w-full";
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$sanitized_props.class);
  $$payload.out += `<select${spread_attributes({ ...$$restProps, class: selectClass })}>`;
  if (placeholder) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<option disabled${attr("selected", value === void 0 ? true : void 0, true)} value="">${escape_html(placeholder)}</option>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (items && items.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { value: itemValue, name, disabled } = each_array[$$index];
      $$payload.out += `<option${attr("disabled", disabled, true)}${attr("value", itemValue)}${attr("selected", itemValue === value ? true : void 0, true)}>${escape_html(name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></select>`;
  bind_props($$props, {
    items,
    value,
    placeholder,
    underline,
    size,
    defaultClass,
    underlineClass
  });
  pop();
}
function Modal($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "open",
    "title",
    "size",
    "color",
    "placement",
    "autoclose",
    "outsideclose",
    "dismissable",
    "backdropClass",
    "classBackdrop",
    "dialogClass",
    "classDialog",
    "defaultClass",
    "headerClass",
    "classHeader",
    "bodyClass",
    "classBody",
    "footerClass",
    "classFooter"
  ]);
  push();
  let backdropCls, dialogCls, frameCls, headerCls, bodyCls, footerCls;
  let open = fallback($$props["open"], false);
  let title = fallback($$props["title"], "");
  let size = fallback($$props["size"], "md");
  let color = fallback($$props["color"], "default");
  let placement = fallback($$props["placement"], "center");
  let autoclose = fallback($$props["autoclose"], false);
  let outsideclose = fallback($$props["outsideclose"], false);
  let dismissable = fallback($$props["dismissable"], true);
  let backdropClass = fallback($$props["backdropClass"], "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80");
  let classBackdrop = fallback($$props["classBackdrop"], () => void 0, true);
  let dialogClass = fallback($$props["dialogClass"], "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex");
  let classDialog = fallback($$props["classDialog"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "relative flex flex-col mx-auto");
  let headerClass = fallback($$props["headerClass"], "flex justify-between items-center p-4 md:p-5 rounded-t-lg");
  let classHeader = fallback($$props["classHeader"], () => void 0, true);
  let bodyClass = fallback($$props["bodyClass"], "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain");
  let classBody = fallback($$props["classBody"], () => void 0, true);
  let footerClass = fallback($$props["footerClass"], "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg");
  let classFooter = fallback($$props["classFooter"], () => void 0, true);
  const getPlacementClasses = (placement2) => {
    switch (placement2) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  backdropCls = twMerge(backdropClass, classBackdrop);
  dialogCls = twMerge(dialogClass, classDialog, getPlacementClasses(placement));
  frameCls = twMerge(defaultClass, "w-full divide-y", $$sanitized_props.class);
  headerCls = twMerge(headerClass, classHeader);
  bodyCls = twMerge(bodyClass, classBody);
  footerCls = twMerge(footerClass, classFooter);
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", backdropCls)}></div>  <div${attr("class", dialogCls)} tabindex="-1" aria-modal="true" role="dialog"><div${attr("class", `flex relative ${stringify(sizes[size])} w-full max-h-full`)}>`;
    Frame($$payload, spread_props([
      { rounded: true, shadow: true },
      $$restProps,
      {
        class: frameCls,
        color,
        children: ($$payload2) => {
          if ($$slots.header || title) {
            $$payload2.out += "<!--[-->";
            Frame($$payload2, {
              class: headerCls,
              color,
              children: ($$payload3) => {
                $$payload3.out += `<!---->`;
                slot($$payload3, $$props, "header", {}, () => {
                  $$payload3.out += `<h3${attr("class", `text-xl font-semibold ${stringify(color === "default" ? "" : "text-gray-900 dark:text-white")} p-0`)}>${escape_html(title)}</h3>`;
                });
                $$payload3.out += `<!----> `;
                if (dismissable) {
                  $$payload3.out += "<!--[-->";
                  CloseButton($$payload3, { name: "Close modal", color });
                } else {
                  $$payload3.out += "<!--[!-->";
                }
                $$payload3.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> <div${attr("class", bodyCls)} role="document">`;
          if (dismissable && !$$slots.header && !title) {
            $$payload2.out += "<!--[-->";
            CloseButton($$payload2, {
              name: "Close modal",
              class: "absolute top-3 end-2.5",
              color
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> <!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!----></div> `;
          if ($$slots.footer) {
            $$payload2.out += "<!--[-->";
            Frame($$payload2, {
              class: footerCls,
              color,
              children: ($$payload3) => {
                $$payload3.out += `<!---->`;
                slot($$payload3, $$props, "footer", {}, null);
                $$payload3.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    open,
    title,
    size,
    color,
    placement,
    autoclose,
    outsideclose,
    dismissable,
    backdropClass,
    classBackdrop,
    dialogClass,
    classDialog,
    defaultClass,
    headerClass,
    classHeader,
    bodyClass,
    classBody,
    footerClass,
    classFooter
  });
  pop();
}
function Filter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "polygon",
      {
        "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "filter" },
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
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  Icon($$payload, spread_props([
    { name: "plus" },
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
  let apps = [];
  let searchTerm = "";
  let selectedSpace = "all";
  let showNewAppModal = false;
  let newApp = {
    name: "",
    memory: 256,
    instances: 1,
    disk_quota: 1024,
    space_guid: ""
  };
  apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedSpace === "all" || app.space_guid === selectedSpace));
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="space-y-6"><div class="sm:flex sm:items-center sm:justify-between"><h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Applications</h1> `;
    Button($$payload2, {
      color: "blue",
      children: ($$payload3) => {
        Plus($$payload3, { class: "mr-2 h-5 w-5" });
        $$payload3.out += `<!----> New Application`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> <div class="flex flex-col md:flex-row gap-4 items-center justify-between"><div class="w-full md:w-1/3">`;
    Search($$payload2, {
      get value() {
        return searchTerm;
      },
      set value($$value) {
        searchTerm = $$value;
        $$settled = false;
      },
      placeholder: "Search applications..."
    });
    $$payload2.out += `<!----></div> <div class="flex gap-2 items-center">`;
    Select($$payload2, {
      class: "w-48",
      get value() {
        return selectedSpace;
      },
      set value($$value) {
        selectedSpace = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<option value="all">All Spaces</option>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      color: "alternative",
      children: ($$payload3) => {
        Filter($$payload3, { class: "mr-2 h-4 w-4" });
        $$payload3.out += `<!----> Filters`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex justify-center p-8">`;
      Spinner($$payload2, { size: "12" });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div> `;
    Modal($$payload2, {
      get open() {
        return showNewAppModal;
      },
      set open($$value) {
        showNewAppModal = $$value;
        $$settled = false;
      },
      size: "lg",
      title: "Create New Application",
      children: ($$payload3) => {
        $$payload3.out += `<form class="space-y-6"><div>`;
        Label($$payload3, {
          for: "name",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Application Name`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "name",
          type: "text",
          get value() {
            return newApp.name;
          },
          set value($$value) {
            newApp.name = $$value;
            $$settled = false;
          },
          required: true,
          placeholder: "my-awesome-app"
        });
        $$payload3.out += `<!----></div> <div class="grid grid-cols-2 gap-4"><div>`;
        Label($$payload3, {
          for: "memory",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Memory (MB)`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "memory",
          type: "number",
          get value() {
            return newApp.memory;
          },
          set value($$value) {
            newApp.memory = $$value;
            $$settled = false;
          },
          min: "64",
          step: "64",
          required: true
        });
        $$payload3.out += `<!----></div> <div>`;
        Label($$payload3, {
          for: "instances",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Instances`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "instances",
          type: "number",
          get value() {
            return newApp.instances;
          },
          set value($$value) {
            newApp.instances = $$value;
            $$settled = false;
          },
          min: "1",
          required: true
        });
        $$payload3.out += `<!----></div></div> <div>`;
        Label($$payload3, {
          for: "disk",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Disk Quota (MB)`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "disk",
          type: "number",
          get value() {
            return newApp.disk_quota;
          },
          set value($$value) {
            newApp.disk_quota = $$value;
            $$settled = false;
          },
          min: "512",
          step: "256",
          required: true
        });
        $$payload3.out += `<!----></div> <div>`;
        Label($$payload3, {
          for: "space",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Space`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Select($$payload3, {
          id: "space",
          get value() {
            return newApp.space_guid;
          },
          set value($$value) {
            newApp.space_guid = $$value;
            $$settled = false;
          },
          required: true,
          children: ($$payload4) => {
            $$payload4.out += `<option value="">Select a space</option>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div> <div class="flex justify-end gap-4">`;
        Button($$payload3, {
          color: "alternative",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Cancel`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Button($$payload3, {
          type: "submit",
          color: "blue",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Create Application`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div></form>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
