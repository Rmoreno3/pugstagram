<script>
  import Comments from "./Comments.svelte";
</script>

<div class="Card">
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img
          src="https://arepa.s3.amazonaws.com/elmo002.jpg"
          alt=""
          class="image-rounded"
        />
        <div class="Card-user__info">
          <h2>Elmo.pug</h2>
          <span>Bogota, Colombia</span>
        </div>
      </div>
      <div class="Card-settings">
        <i class="fas fa-ellipsis-h" />
      </div>
    </div>
    <div class="Card-photo">
      <figure>
        <img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt="" />
      </figure>
    </div>
    <div class="Card-icons">
      <div class="Card-icons__first">
        <i class="fas fa-heart" />
        <i class="fas fa-paper-plane" />
      </div>
      <div class="Card-icons__seconds">
        <i class="fas fa-bookmark active-bookmark" />
      </div>
    </div>
    <div class="Card-desciption">
      <h3>Elmo.pug</h3>
      <span>Hola</span>
    </div>
    <Comments />
  </div>
</div>

<style>
  .Card {
    margin-bottom: 15px;
  }

  /* HEADER */
  .Card-container {
    background-color: white;
    border: 1px solid rgba(219, 219, 219, 1);
  }

  .Card-user {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .image-rounded {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 10px;
  }

  .Card-user__info > h2 {
    font-size: 15px;
  }

  .Card-user__info > span {
    font-size: 15px;
  }

  .Card-settings {
    margin: 10px;
  }

  /* IMG */
  .Card-photo > figure {
    width: 100%;
    height: 100%;
  }

  figure > img {
    width: 100%;
  }

  /* ICONS */

  .Card-icons {
    display: flex;
    justify-content: space-between;
  }

  .Card-icons > div > i {
    padding: 10px;
  }

  /* DESCRIPTION */

  .Card-desciption {
    color: black;
    font-size: 13px;
    margin: 0px 0px 10px 10px;
  }

  .active-like {
    color: #bc1888;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
  }

  .active-bookmark {
    color: #f09433;
  }

  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
    }
    15% {
      transform: translate(0px, -25px);
    }
    30% {
      transform: translate(0px, 0px);
    }
    45% {
      transform: translate(0px, -15px);
    }
    60% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
</style>
