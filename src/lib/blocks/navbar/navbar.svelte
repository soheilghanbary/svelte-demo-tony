<script lang="ts">
  import Logo from "./logo.svelte";
  import NavItem from "./nav-item.svelte";
  import { toggleTheme } from '$lib/components/theme.svelte'
</script>

<nav class="navbar">
  <Logo />
  <ul>
    <NavItem title="Home" href="/" />
    <NavItem title="Users" href="/users" />
    <NavItem title="Blog" href="/blog" />
    <NavItem title="About" href="/about" />
    <NavItem title="Register" href="/register" />
  </ul>
  <button
    class="flex items-center p-2 border-2 rounded-full shadow-md duration-150 bg-primary border-line active:scale-90"
    on:click={toggleTheme}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-5 h-5"
    >
      <path
        fill-rule="evenodd"
        d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</nav>
