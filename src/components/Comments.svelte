<script>
  import { text } from "svelte/internal";

  export let comments = [];

  const addComment = (event) => {
    const msg = event.target.text.value;
    if (msg.length > 3) {
      const message = {
        id: Date.now(),
        text: msg,
        username: "Rmoreno31",
      };
      comments = [...comments, message];
      event.target.text.value = "";
    }
  };
</script>

<div class="Comments">
  <div class="Comments-container">
    {#each comments as comment (comment.id)}
      <div class="Comments-user">
        <h3>{comment.username}</h3>
        <span>{comment.text}</span>
      </div>
    {/each}
    <div class="Coments-add">
      <form on:submit|preventDefault={addComment}>
        <input
          type="text"
          class="Comments-input"
          placeholder="Add comment..."
          id="text"
        />
        <button type="submit" class="btn">Post</button>
      </form>
    </div>
  </div>
</div>

<style>
  .Comments-user {
    display: flex;
    align-items: center;
    color: black;
    font-size: 13px;
    margin: 0px 0px 6px 10px;
  }

  .Comments-user > span {
    margin-left: 5px;
    color: rgba(38, 38, 38, 0.7);
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  form > input {
    border: none;
    width: 100%;
    outline: none;
    padding: 20px;
  }

  .Coments-add {
    border-top: 1px solid rgba(38, 38, 38, 0.2);
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin: 0px 20px 0px 20px;
  }

  .btn {
    border: none;
    background-color: white;
    color: blue;
    cursor: pointer;
  }
</style>
