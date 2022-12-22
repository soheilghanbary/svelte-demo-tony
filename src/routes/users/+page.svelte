<script lang="ts">
  import type { PageServerData } from "./$types";
  import { goto } from "$app/navigation";
  export let data: PageServerData;
  const { users } = data;
</script>

<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
  {#each users as user}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => goto(`/users/${user.id}`)}
      class="p-4 shadow-lg rounded-lg bg-secondary hover:ring-2 ring-blue duration-200 cursor-pointer active:scale-90"
    >
      <img
        src={user.image}
        draggable="false"
        loading="lazy"
        alt={user.maidenName}
        class="rounded-lg shadow-md"
      />
      <div class="flex flex-col gap-1 xl:text-sm lg:text-sm md:text-sm text-xs mt-4">
        <h2 class="font-medium text-base">
          {user.firstName + " " + user.lastName}
        </h2>
        <p class="opacity-80 break-words">{user.email}</p>
      </div>
    </div>
  {/each}
</div>
