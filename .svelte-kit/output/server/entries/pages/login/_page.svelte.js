import { V as rest_props, P as push, W as fallback, a2 as spread_props, a0 as attr, Y as slot, Z as bind_props, R as pop, _ as sanitize_props, a3 as copy_payload, a4 as assign_payload, a8 as escape_html } from "../../../chunks/index.js";
import { F as Frame, I as Input, B as Button } from "../../../chunks/Input.js";
import { twMerge } from "tailwind-merge";
import { L as Label } from "../../../chunks/Label.js";
import "../../../chunks/client.js";
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "href",
    "horizontal",
    "reverse",
    "img",
    "padding",
    "size",
    "imgClass"
  ]);
  push();
  let href = fallback($$props["href"], () => void 0, true);
  let horizontal = fallback($$props["horizontal"], false);
  let reverse = fallback($$props["reverse"], false);
  let img = fallback($$props["img"], () => void 0, true);
  let padding = fallback($$props["padding"], "lg");
  let size = fallback($$props["size"], "sm");
  let imgClass = fallback($$props["imgClass"], "");
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgCls;
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$sanitized_props.class);
  imgCls = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"), imgClass);
  Frame($$payload, spread_props([
    {
      tag: href ? "a" : "div",
      rounded: true,
      shadow: true,
      border: true,
      href
    },
    $$restProps,
    {
      class: cardClass,
      children: ($$payload2) => {
        if (img) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<img${attr("class", imgCls)}${attr("src", img)} alt=""> <div${attr("class", innerPadding)}><!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!----></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, {
    href,
    horizontal,
    reverse,
    img,
    padding,
    size,
    imgClass
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  let loading = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">`;
    Card($$payload2, {
      class: "w-full max-w-md space-y-8",
      children: ($$payload3) => {
        $$payload3.out += `<div><img class="mx-auto h-12 w-auto" src="/cf-logo.svg" alt="Cloud Foundry"> <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2></div> <form class="mt-8 space-y-6">`;
        {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> <div class="space-y-4 rounded-md"><div>`;
        Label($$payload3, {
          for: "username",
          class: "sr-only",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Username`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "username",
          name: "username",
          type: "text",
          required: true,
          get value() {
            return username;
          },
          set value($$value) {
            username = $$value;
            $$settled = false;
          },
          placeholder: "Username"
        });
        $$payload3.out += `<!----></div> <div>`;
        Label($$payload3, {
          for: "password",
          class: "sr-only",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Password`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          id: "password",
          name: "password",
          type: "password",
          required: true,
          get value() {
            return password;
          },
          set value($$value) {
            password = $$value;
            $$settled = false;
          },
          placeholder: "Password"
        });
        $$payload3.out += `<!----></div></div> <div>`;
        Button($$payload3, {
          type: "submit",
          class: "w-full",
          color: "blue",
          disabled: loading,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html("Sign in")}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div></form>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
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
