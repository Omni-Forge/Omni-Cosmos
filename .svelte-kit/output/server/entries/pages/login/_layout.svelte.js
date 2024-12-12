import { Q as push, X as slot, S as pop } from "../../../chunks/index.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { a as auth, d as dev } from "../../../chunks/auth.js";
import "../../../chunks/client.js";
import { w as writable, d as derived } from "../../../chunks/index2.js";
import { N as Navbar_1 } from "../../../chunks/Navbar.js";
function createAuthGuard() {
  const { subscribe, set } = writable({
    isAuthenticated: false,
    isLoading: true,
    isDev: dev
  });
  auth.subscribe(({ isAuthenticated, loading }) => {
    set({
      isAuthenticated,
      isLoading: loading,
      isDev: dev
    });
  });
  return {
    subscribe,
    requireAuth: async (path) => {
      return true;
    }
  };
}
const authGuard = createAuthGuard();
derived(
  authGuard,
  ($authGuard) => $authGuard.isDev || $authGuard.isAuthenticated
);
function _layout($$payload, $$props) {
  push();
  let loading = false;
  auth.subscribe((state) => {
    state.user;
    loading = state.loading;
  });
  loading = false;
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
    $$payload.out += `<div class="min-h-screen text-gray-200">`;
    Navbar_1($$payload);
    $$payload.out += `<!----> WTF is this: Its a chemical burn <main class="pt-24 px-4 sm:px-6 lg:px-8"><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></main></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
