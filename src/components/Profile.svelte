<script>
  export let nickname;
  export let name;
</script>

<div class="Profile">
  <div class="Profile-content">
    <div class="Profile-avatar">
      <img
        src="https://arepa.s3.amazonaws.com/oscar.png"
        alt="Foto Avatar"
        class="image-rounded"
      />
    </div>
    <div class="Profile-info">
      <h2>{nickname}</h2>
      <span>{name}</span>
    </div>
  </div>
</div>

<style>
  .Profile-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .image-rounded {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }

  .Profile-info {
    margin-left: 8px;
  }

  h2 {
    font-size: 18px;
  }
</style>
