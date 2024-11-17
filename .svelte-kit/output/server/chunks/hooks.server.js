import { r as redirect } from "./index2.js";
const PUBLIC_PATHS = ["/login", "/forgot-password"];
async function handle({ event, resolve }) {
  const sessionToken = event.cookies.get("cf_token");
  const path = event.url.pathname;
  if (PUBLIC_PATHS.includes(path) || path.startsWith("/api")) {
    return await resolve(event);
  }
  if (!sessionToken) {
    throw redirect(303, "/login");
  }
  try {
    const response = await fetch(`${CF_API_URL}/v3/profile`, {
      headers: {
        "Authorization": `Bearer ${sessionToken}`
      }
    });
    if (!response.ok) {
      throw new Error("Invalid token");
    }
    const user = await response.json();
    event.locals.user = user;
  } catch (error) {
    event.cookies.delete("cf_token");
    throw redirect(303, "/login");
  }
  return await resolve(event);
}
function handleError({ error, event }) {
  return {
    message: error.message ?? "An unexpected error occurred",
    code: error?.code ?? "UNKNOWN"
  };
}
export {
  handle,
  handleError
};
