import { Q as push, X as slot, S as pop } from "../../../chunks/index.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { a as auth } from "../../../chunks/auth.js";
import "../../../chunks/client.js";
import { N as Navbar_1 } from "../../../chunks/Navbar.js";
function _layout($$payload, $$props) {
  push();
  let user = null;
  let loading = true;
  auth.subscribe((state) => {
    user = state.user;
    loading = state.loading;
  });
  if (loading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex justify-center items-center h-screen bg-black">`;
    Spinner($$payload, {
      size: "12",
      class: "text-gray-200 animate-spin"
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (user) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="min-h-screen text-gray-200">`;
      Navbar_1($$payload);
      $$payload.out += `<!----> <main class="pt-4.5"><div style="height: 72px;"></div> <!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!----></main></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="min-h-screen text-gray-200">`;
      Navbar_1($$payload);
      $$payload.out += `<!----> <main class="pt-4.5"><div style="height: 72px;"></div> <!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!----></main></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
