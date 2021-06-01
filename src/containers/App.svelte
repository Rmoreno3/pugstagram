<script>
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import Timeline from '../components/Timeline.svelte';
  import Sidebar from '../components/Sidebar.svelte';
</script>


<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: #676778;
    color: #FFFFFF;
  }
</style>

<Header />
<Main>
  <Timeline />
  <Sidebar />
</Main>