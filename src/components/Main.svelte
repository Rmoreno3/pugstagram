<div class="Main">
  <div class="Main-container">
    <slot />
  </div>
</div>

<style>
  .Main {
    display: grid;
    grid-template-columns: minmax(auto, 936px);
    justify-content: center;
    background-color: rgba(219, 219, 219, 0.4);
  }
  .Main-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2em;
    padding: 2em 0;
  }
</style>
