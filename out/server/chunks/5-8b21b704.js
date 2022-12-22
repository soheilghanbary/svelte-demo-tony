const load = async () => {
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data.users;
  };
  return {
    users: fetchUsers()
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-b513de2e.js')).default;
const file = '_app/immutable/components/pages/users/_page.svelte-8e95e0aa.js';
const imports = ["_app/immutable/components/pages/users/_page.svelte-8e95e0aa.js","_app/immutable/chunks/index-c06509ae.js","_app/immutable/chunks/navigation-5432e91f.js","_app/immutable/chunks/singletons-42bcbb0f.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=5-8b21b704.js.map
