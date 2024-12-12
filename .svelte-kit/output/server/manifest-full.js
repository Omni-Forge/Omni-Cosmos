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
		client: {"start":"_app/immutable/entry/start.CQtJ0Psz.js","app":"_app/immutable/entry/app.WnHWiVVm.js","imports":["_app/immutable/entry/start.CQtJ0Psz.js","_app/immutable/chunks/entry.9noDchyj.js","_app/immutable/chunks/runtime.BpsoJ9mv.js","_app/immutable/chunks/index.CEIXVWp1.js","_app/immutable/chunks/utils.DRNWh1MO.js","_app/immutable/entry/app.WnHWiVVm.js","_app/immutable/chunks/runtime.BpsoJ9mv.js","_app/immutable/chunks/store.CIqAHlUC.js","_app/immutable/chunks/disclose-version.N1JcEE3x.js","_app/immutable/chunks/utils.DRNWh1MO.js","_app/immutable/chunks/index-client.CY8cH23_.js","_app/immutable/chunks/svelte-component.Czu3wW4G.js","_app/immutable/chunks/props.Du0vtbS7.js","_app/immutable/chunks/this.BefWiCQV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app/orgs",
				pattern: /^\/app\/orgs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]",
				pattern: /^\/app\/org\/([^/]+?)\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/spaces",
				pattern: /^\/app\/org\/([^/]+?)\/spaces\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/space/[spaceId]",
				pattern: /^\/app\/org\/([^/]+?)\/space\/([^/]+?)\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false},{"name":"spaceId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/space/[spaceId]/app/[appId]",
				pattern: /^\/app\/org\/([^/]+?)\/space\/([^/]+?)\/app\/([^/]+?)\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false},{"name":"spaceId","optional":false,"rest":false,"chained":false},{"name":"appId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/space/[spaceId]/app/[appId]/instance/[instanceId]",
				pattern: /^\/app\/org\/([^/]+?)\/space\/([^/]+?)\/app\/([^/]+?)\/instance\/([^/]+?)\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false},{"name":"spaceId","optional":false,"rest":false,"chained":false},{"name":"appId","optional":false,"rest":false,"chained":false},{"name":"instanceId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/space/[spaceId]/app/[appId]/scale",
				pattern: /^\/app\/org\/([^/]+?)\/space\/([^/]+?)\/app\/([^/]+?)\/scale\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false},{"name":"spaceId","optional":false,"rest":false,"chained":false},{"name":"appId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/app/org/[orgId]/space/[spaceId]/deploy",
				pattern: /^\/app\/org\/([^/]+?)\/space\/([^/]+?)\/deploy\/?$/,
				params: [{"name":"orgId","optional":false,"rest":false,"chained":false},{"name":"spaceId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
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
