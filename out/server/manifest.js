const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f92d40e3.js","imports":["_app/immutable/start-f92d40e3.js","_app/immutable/chunks/index-c06509ae.js","_app/immutable/chunks/singletons-42bcbb0f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-8ded82b4.js'),
			() => import('./chunks/1-bc323f8e.js'),
			() => import('./chunks/2-70a4b3b1.js'),
			() => import('./chunks/3-93e792b3.js'),
			() => import('./chunks/4-609a31e9.js'),
			() => import('./chunks/5-8b21b704.js'),
			() => import('./chunks/6-227f3c20.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/users/[id]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
