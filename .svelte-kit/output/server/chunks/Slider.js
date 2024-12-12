import { Q as push, _ as fallback, T as escape_html, a0 as attr, a1 as bind_props, S as pop } from "./index.js";
function Slider($$payload, $$props) {
  push();
  let icon = $$props["icon"];
  let title = $$props["title"];
  let value = $$props["value"];
  let min = $$props["min"];
  let max = $$props["max"];
  let step = $$props["step"];
  let unit = fallback($$props["unit"], "");
  let formatValue = fallback($$props["formatValue"], (val) => val?.toString() || "0");
  $$payload.out += `<div class="bg-neutral-900 rounded-lg p-6"><h2 class="text-lg font-semibold text-white mb-4 flex items-center space-x-2"><!---->`;
  icon?.($$payload, { class: "w-5 h-5 text-blue-400" });
  $$payload.out += `<!----> <span>${escape_html(title)}</span></h2> <div class="flex items-center space-x-4"><div class="flex-1"><input type="range"${attr("min", min)}${attr("max", max)}${attr("step", step)}${attr("value", value)} class="w-full accent-blue-500"></div> <div class="w-32 text-right"><span class="text-lg">${escape_html(formatValue(value))}${escape_html(unit)}</span></div></div></div>`;
  bind_props($$props, {
    icon,
    title,
    value,
    min,
    max,
    step,
    unit,
    formatValue
  });
  pop();
}
export {
  Slider as S
};
