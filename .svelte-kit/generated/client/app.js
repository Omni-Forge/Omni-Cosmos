export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/app": [5,[2]],
		"/app/orgs": [13,[2]],
		"/app/org/[orgId]": [6,[2]],
		"/app/org/[orgId]/spaces": [12,[2]],
		"/app/org/[orgId]/space/[spaceId]": [7,[2]],
		"/app/org/[orgId]/space/[spaceId]/app/[appId]": [8,[2]],
		"/app/org/[orgId]/space/[spaceId]/app/[appId]/instance/[instanceId]": [9,[2]],
		"/app/org/[orgId]/space/[spaceId]/app/[appId]/scale": [10,[2]],
		"/app/org/[orgId]/space/[spaceId]/deploy": [11,[2]],
		"/login": [14,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';