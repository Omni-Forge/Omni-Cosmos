import { Q as push, T as escape_html, V as store_get, W as unsubscribe_stores, S as pop } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  Error as default
};
