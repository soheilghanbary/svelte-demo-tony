import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from './index-b4c6a312.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { users } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"}">${each(users, (user) => {
    return `
    <div class="${"p-4 shadow-lg rounded-lg bg-secondary hover:ring-2 ring-blue duration-200 cursor-pointer active:scale-90"}"><img${add_attribute("src", user.image, 0)} draggable="${"false"}" loading="${"lazy"}"${add_attribute("alt", user.maidenName, 0)} class="${"rounded-lg shadow-md"}">
      <div class="${"flex flex-col gap-1 xl:text-sm lg:text-sm md:text-sm text-xs mt-4"}"><h2 class="${"font-medium text-base"}">${escape(user.firstName + " " + user.lastName)}</h2>
        <p class="${"opacity-80 break-words"}">${escape(user.email)}</p></div>
    </div>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b513de2e.js.map
