

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bdm6-SfK.js","_app/immutable/chunks/disclose-version.N1JcEE3x.js","_app/immutable/chunks/runtime.BpsoJ9mv.js"];
export const stylesheets = [];
export const fonts = [];
