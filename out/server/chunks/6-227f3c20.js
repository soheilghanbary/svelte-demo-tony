const load = async ({ params }) => {
  const fetchUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);
    const data = await response.json();
    return data;
  };
  return {
    user: fetchUser()
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-e8ca9713.js')).default;
const file = '_app/immutable/components/pages/users/_id_/_page.svelte-b25ca6dd.js';
const imports = ["_app/immutable/components/pages/users/_id_/_page.svelte-b25ca6dd.js","_app/immutable/chunks/index-c06509ae.js","_app/immutable/chunks/navigation-5432e91f.js","_app/immutable/chunks/singletons-42bcbb0f.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-227f3c20.js.map
