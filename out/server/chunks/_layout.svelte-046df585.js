import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as escape } from './index-b4c6a312.js';
import { n as navigating } from './stores-d3d0fc5f.js';

const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"logo"}"><svg width="${"36"}" height="${"36"}" viewBox="${"0 0 43 43"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M21.5 0C9.6277 0 0 9.6277 0 21.5C0 33.3723 9.6277 43 21.5 43C33.3723 43 43 33.3723 43 21.5C43 9.6277 33.3766 0 21.5 0ZM10.6081 22.2224L10.6984 22.0762L16.2927 13.3257C16.3744 13.201 16.5679 13.2139 16.6281 13.3515C17.5612 15.4456 18.3696 18.0514 17.9912 19.6725C17.8321 20.339 17.3892 21.242 16.8904 22.0762C16.8259 22.1966 16.7571 22.317 16.6797 22.4331C16.6453 22.4847 16.5851 22.5148 16.5206 22.5148H10.7715C10.6167 22.5148 10.5264 22.3471 10.6081 22.2224ZM35.5352 25.2324C35.5352 25.3141 35.4879 25.3829 35.4191 25.413C34.9848 25.5979 33.5013 26.2816 32.8864 27.1373C31.3126 29.326 30.1129 32.4564 27.4254 32.4564H16.2196C12.2464 32.4564 9.03 29.2271 9.03 25.241V25.112C9.03 25.0088 9.116 24.9228 9.2235 24.9228H15.4671C15.5918 24.9228 15.6821 25.0346 15.6735 25.1593C15.6262 25.5635 15.7036 25.9806 15.8971 26.359C16.2669 27.1115 17.0366 27.5802 17.8665 27.5802H20.9582V25.1679H17.9009C17.7461 25.1679 17.6515 24.9873 17.7418 24.8583C17.7762 24.8067 17.8106 24.7551 17.8536 24.6949C18.1417 24.2821 18.5545 23.6457 18.9673 22.919C19.2468 22.4288 19.5177 21.9042 19.737 21.3796C19.78 21.285 19.8144 21.1861 19.8531 21.0915C19.9133 20.9238 19.9735 20.7647 20.0165 20.6099C20.0595 20.4766 20.0982 20.339 20.1326 20.21C20.2358 19.7628 20.2788 19.2898 20.2788 18.7996C20.2788 18.6061 20.2702 18.404 20.253 18.2148C20.2444 18.0041 20.2186 17.7934 20.1928 17.5827C20.1756 17.3978 20.1412 17.2129 20.1068 17.0237C20.0595 16.7442 19.9993 16.4647 19.9305 16.1852L19.9047 16.0777C19.8531 15.8842 19.8058 15.7036 19.7456 15.5101C19.5693 14.9081 19.3715 14.319 19.1565 13.7686C19.0791 13.5493 18.9931 13.3386 18.9028 13.1322C18.7738 12.814 18.6405 12.5259 18.5201 12.255C18.4556 12.1303 18.404 12.0185 18.3524 11.9024C18.2922 11.7734 18.232 11.6444 18.1675 11.5197C18.1245 11.4251 18.0729 11.3348 18.0385 11.2488L17.6601 10.5522C17.6085 10.4576 17.6945 10.3415 17.7977 10.3716L20.1627 11.0123H20.1713C20.1756 11.0123 20.1756 11.0123 20.1799 11.0123L20.4895 11.1026L20.8335 11.1972L20.9582 11.2316V9.8298C20.9582 9.1504 21.5 8.6 22.1751 8.6C22.5105 8.6 22.8158 8.7376 23.0308 8.9612C23.2501 9.1848 23.3877 9.4901 23.3877 9.8298V11.9153L23.6414 11.9841C23.6586 11.9927 23.6801 12.0013 23.6973 12.0142C23.7575 12.0572 23.8478 12.126 23.9596 12.212C24.0499 12.2808 24.1445 12.3668 24.2563 12.4571C24.4842 12.642 24.7594 12.8785 25.0561 13.1494C25.1335 13.2182 25.2109 13.287 25.284 13.3601C25.6667 13.717 26.0967 14.1341 26.5095 14.5985C26.6256 14.7318 26.7374 14.8608 26.8535 15.0027C26.9653 15.1446 27.09 15.2822 27.1932 15.4198C27.3351 15.6047 27.4813 15.7982 27.6146 16.0003C27.6748 16.0949 27.7479 16.1938 27.8038 16.2884C27.9758 16.5421 28.122 16.8044 28.2639 17.0667C28.3241 17.1871 28.3843 17.3204 28.4359 17.4494C28.595 17.802 28.7197 18.1589 28.7971 18.5201C28.8229 18.5975 28.8401 18.6792 28.8487 18.7566V18.7738C28.8745 18.877 28.8831 18.9888 28.8917 19.1049C28.9261 19.4704 28.9089 19.8402 28.8315 20.21C28.7971 20.3648 28.7541 20.511 28.7025 20.6701C28.6466 20.8206 28.595 20.9754 28.5262 21.1259C28.3929 21.4312 28.2381 21.7408 28.0532 22.0246C27.993 22.1321 27.9199 22.2439 27.8511 22.3514C27.7737 22.4632 27.692 22.5707 27.6232 22.6739C27.5243 22.8072 27.4211 22.9448 27.3136 23.0695C27.219 23.1985 27.1244 23.3275 27.0169 23.4436C26.8707 23.6199 26.7288 23.7833 26.5783 23.9424C26.4923 24.0456 26.3977 24.1531 26.2988 24.2477C26.2042 24.3552 26.1053 24.4498 26.0193 24.5358C25.8688 24.6863 25.7484 24.7981 25.6452 24.897L25.4001 25.1163C25.3657 25.1507 25.3184 25.1679 25.2711 25.1679H23.3877V27.5802H25.757C26.2859 27.5802 26.789 27.3953 27.1975 27.047C27.3351 26.9266 27.9414 26.402 28.6595 25.6108C28.6853 25.5807 28.7154 25.5635 28.7498 25.5549L35.2901 23.6629C35.4148 23.6285 35.5352 23.7188 35.5352 23.8478V25.2324Z"}" fill="${"#60A5FA"}"></path></svg>
  <h3 class="${"font-semibold text-heading"}">NFT SOLY</h3></div>`;
});
const Nav_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, href } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<li><a${add_attribute("href", href, 0)}>${escape(title)}</a></li>`;
});
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"navbar"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
  <ul>${validate_component(Nav_item, "NavItem").$$render($$result, { title: "Home", href: "/" }, {}, {})}
    ${validate_component(Nav_item, "NavItem").$$render($$result, { title: "Users", href: "/users" }, {}, {})}
    ${validate_component(Nav_item, "NavItem").$$render($$result, { title: "Blog", href: "/blog" }, {}, {})}
    ${validate_component(Nav_item, "NavItem").$$render($$result, { title: "About", href: "/about" }, {}, {})}
    ${validate_component(Nav_item, "NavItem").$$render($$result, { title: "Register", href: "/register" }, {}, {})}</ul>
  <button class="${"flex items-center p-2 border-2 rounded-full shadow-md duration-150 bg-primary border-line active:scale-90"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"}" clip-rule="${"evenodd"}"></path></svg></button></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}

${$navigating ? `<div class="${"loading"}"><span></span>
    <p>Loading ...</p></div>` : ``}

<main class="${"max-w-screen-xl mx-auto p-2"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  <main class="${"my-4"}">${slots.default ? slots.default({}) : ``}</main></main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-046df585.js.map
