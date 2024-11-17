import { V as rest_props, P as push, W as fallback, X as spread_attributes, Y as slot, Z as bind_props, R as pop, _ as sanitize_props } from "./index.js";
import { twMerge } from "tailwind-merge";
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["color", "defaultClass", "show"]);
  push();
  let labelClass;
  let color = fallback($$props["color"], "gray");
  let defaultClass = fallback($$props["defaultClass"], "text-sm rtl:text-right font-medium block");
  let show = fallback($$props["show"], true);
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500 grayscale contrast-50"
  };
  {
    color = color;
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$sanitized_props.class);
  if (show) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${spread_attributes({ ...$$restProps, class: labelClass })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, defaultClass, show });
  pop();
}
export {
  Label as L
};
