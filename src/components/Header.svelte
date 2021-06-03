<script>
  import { likeCount } from "../store/store";
</script>

<div class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <h1>Pugstagram</h1>
      </div>
      <div class="Header-nav">
        <ul>
          <li>
            <i class="fas fa-heart" />
            {$likeCount === 0 ? "" : $likeCount}
          </li>
          <li>
            <i class="fas fa-user-alt" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .Header {
    box-shadow: 2px 7px 15px -7px rgba(0, 0, 0, 0.9);
    width: 100%;
  }

  .Header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .Header-nav > ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  .Header-nav > ul > li {
    padding: 5px;
    margin-left: 5px;
  }

  .Header-nav {
    display: flex;
    align-items: center;
  }

  h1 {
    color: black;
    font-family: "Pacifico", cursive;
    cursor: pointer;
    mix-blend-mode: multiply;
    position: relative;
    background: #fff;
    margin-bottom: 5px;
  }

  h1:before {
    content: "";
    position: absolute;
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    mix-blend-mode: screen;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
