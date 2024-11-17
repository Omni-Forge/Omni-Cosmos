export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cflogo.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.260Uxbpa.js","app":"_app/immutable/entry/app.CeNLqurb.js","imports":["_app/immutable/entry/start.260Uxbpa.js","_app/immutable/chunks/entry.D6x5xI2e.js","_app/immutable/chunks/utils.B3j9k9dF.js","_app/immutable/chunks/index.DRGX3P6P.js","_app/immutable/entry/app.CeNLqurb.js","_app/immutable/chunks/utils.B3j9k9dF.js","_app/immutable/chunks/disclose-version.8BCKBZeZ.js","_app/immutable/chunks/index-client.vpHALhMJ.js","_app/immutable/chunks/svelte-component.Bcyrjch7.js","_app/immutable/chunks/this.MMhnL31Q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/apps",
				pattern: /^\/apps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
