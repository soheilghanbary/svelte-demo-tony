import { c as create_ssr_component, d as add_attribute, e as escape } from './index-b4c6a312.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { user } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col xl:grid lg:grid md:grid sm:grid xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-8 gap-4"}"><div class="${"xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-8"}"><div class="${"p-4 shadow-lg rounded-lg bg-secondary relative"}"><button class="${"absolute left-4 top-4 hover:text-heading hover:px-3 flex items-center p-1 border-2 rounded-full shadow-md duration-150 bg-primary border-line active:scale-90"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"}" clip-rule="${"evenodd"}"></path></svg></button>
      <img${add_attribute("src", user.image, 0)} draggable="${"false"}" loading="${"lazy"}"${add_attribute("alt", user.maidenName, 0)} class="${"rounded-lg shadow-md object-cover mx-auto"}">
      <div class="${"flex flex-col gap-1 text-sm mt-5 text-center"}"><h2 class="${"font-medium text-base text-heading"}">${escape(user.firstName + " " + user.lastName)}</h2>
        <p class="${"opacity-80"}">${escape(user.email)}</p></div></div></div>
  <div class="${"col-span-3 sm:col-span-4 md:col-span-3"}"><div class="${"p-4 shadow-lg rounded-lg bg-secondary"}"><h2 class="${"font-medium text-heading text-lg mb-4"}">Company</h2>
      <ul class="${"text-sm flex flex-col gap-3"}"><li class="${"flex justify-between items-center"}"><span>Title: </span>
          <span class="${"text-heading"}">${escape(user.company.title)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Name: </span>
          <span class="${"text-heading"}">${escape(user.company.name)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Department: </span>
          <span class="${"text-heading"}">${escape(user.company.department)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Address: </span>
          <span class="${"text-heading"}">${escape(user.company.address.address)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>City: </span>
          <span class="${"text-heading"}">${escape(user.company.address.city)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>PostalCode: </span>
          <span class="${"text-heading"}">${escape(user.company.address.postalCode)}</span></li></ul></div></div>
  <div class="${"col-span-3 sm:col-span-4 md:col-span-3"}"><div class="${"p-4 shadow-lg rounded-lg bg-secondary"}"><h2 class="${"font-medium text-heading text-lg mb-4"}">Information</h2>
      <ul class="${"text-sm flex flex-col gap-3"}"><li class="${"flex justify-between items-center"}"><span>Name: </span>
          <span class="${"text-heading"}">${escape(user.firstName + " " + user.lastName)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Age: </span>
          <span class="${"text-heading"}">${escape(user.age)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Gender: </span>
          <span class="${"text-heading"}">${escape(user.gender)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Phone: </span>
          <span class="${"text-heading"}">${escape(user.phone)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>website: </span>
          <span class="${"text-heading"}">${escape(user.domain)}</span></li>
        <li class="${"flex justify-between items-center"}"><span>Blood Group: </span>
          <span class="${"text-heading"}">${escape(user.bloodGroup)}</span></li></ul></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e8ca9713.js.map
