import { w as writable } from "./index2.js";
import { g as goto } from "./client.js";
import { ab as BROWSER, D as DEV } from "./index.js";
const browser = BROWSER;
const dev = DEV;
function createAuthStore() {
  const { subscribe, set, update } = writable({
    isAuthenticated: false,
    token: null,
    user: null,
    error: null,
    loading: true
  });
  return {
    subscribe,
    login: async (credentials) => {
      try {
        const response = await fetch("/v3/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
        });
        if (!response.ok) throw new Error("Login failed");
        const data = await response.json();
        set({
          isAuthenticated: true,
          token: data.token,
          user: data.user,
          error: null,
          loading: false
        });
        if (browser) ;
        goto("/dashboard");
      } catch (error) {
        set({
          isAuthenticated: false,
          token: null,
          user: null,
          error: error.message,
          loading: false
        });
      }
    },
    logout: () => {
      set({
        isAuthenticated: false,
        token: null,
        user: null,
        error: null,
        loading: false
      });
      goto();
    },
    checkAuth: async () => {
      return false;
    }
  };
}
const auth = createAuthStore();
export {
  auth as a,
  dev as d
};
