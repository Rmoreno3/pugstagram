<div class="Comments">
  <div class="Comments-container">
    <div class="Comments-user">
      <h3>Crispeta</h3>
      <span>Hola Elmo</span>
    </div>
    <div class="Comments-user">
      <h3>Crispeta</h3>
      <span>Hola Elmo</span>
    </div>
    <div class="Comments-user">
      <h3>Crispeta</h3>
      <span>Hola Elmo</span>
    </div>
    <div class="Coments-add">
      <form>
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
