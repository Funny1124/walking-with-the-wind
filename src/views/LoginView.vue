<template>
  <div class="form">
    <form>
      <img class="mb-4" src="../assets/logo.png" alt="" width="108" height="108">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating item-margin">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating item-margin">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3 item-margin">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.form {
  display: block;
  margin: 10% auto;
  width: 20%;
  min-width: 420px;
  /*background-color: rgb(94,93,91,.11);*/
  border-radius: 6mm;
  text-align: center;
}

.item-margin {
  margin-top: 10px;
}
</style>
