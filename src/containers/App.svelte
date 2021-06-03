<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Timeline from "../components/Timeline.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import { onMount } from "svelte";

  let data = {};
  const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";

  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
  });
</script>

<Header />
<Main>
  <Timeline posts={data.posts} />
  <Sidebar {...data.user} />
</Main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: #fafafa;
    color: rgba(38, 38, 38, 0.7);
    font-family: "Lato", sans-serif;
  }
</style>
