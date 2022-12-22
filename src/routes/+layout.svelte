<script lang="ts">
  import { navigating } from "$app/stores";
  import Navbar from "$lib/blocks/navbar/navbar.svelte";
  import Theme from "$lib/components/theme.svelte";
  import "$lib/styles/app.scss";
</script>

<Theme />

{#if $navigating}
  <div class="loading">
    <span />
    <p>Loading ...</p>
  </div>
{/if}

<main class="max-w-screen-xl mx-auto p-2">
  <Navbar />
  <main class="my-4">
    <slot />
  </main>
</main>
