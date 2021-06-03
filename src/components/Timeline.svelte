<script>
  import Card from "./Card.svelte";
  export let posts = [];
</script>

<div class="Timeline">
  <div class="Timeline-container">
    {#each posts as post}
      <Card {...post} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</div>

<style>
  .Timeline {
    padding: 1em 0 0 0;
  }
</style>
