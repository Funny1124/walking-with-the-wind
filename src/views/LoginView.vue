<template>
  <div class="form">
    <h2>
      <span>登录</span>
    </h2>
    <div class="item">
      <input type="text" placeholder="账号">
    </div>
    <div class="item">
      <input type="password" placeholder="密码">
    </div>
    <div class="button">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.form{
  display: block;
  margin: 10% auto;
  width: 20%;
  min-width: 420px;
  /*background-color: rgb(94,93,91,.11);*/
  border-radius: 6mm;
  background-color: rgba(246, 241, 237, 0.98);
}
.form h2{
  text-align: center;
  font-size: 30px;
  color: black;
  border-bottom: 1px solid rgb(105,105,105);
  height: 50px;
  margin-bottom: 40px;
}
input[type="text"],input[type="password"]{
  border: 1px solid #dcdfe6;
  width: 75%;
  box-sizing: border-box;
  border-radius: 3px;
  height: 50px;
  text-indent: 1em;
  font-size: 14px;
  color: black;
  margin: 16px 48px;
  background-color: rgb(126,117,117,.20);
  /*background-image: linear-gradient(95deg,rgba(111,399,99,0.61),rgba(111,4557,180,0.5));*/
  background-image: linear-gradient(95deg,rgba(114,114,202,.3),rgba(90,187,182,0.5));
}
input[type="text"]::placeholder,input[type="password"]::placeholder{
  color: black;
}
input[type="text"]:hover,input[type="password"]:hover{
  border-color: #33476e;
}
.form .button{

}
button{
  width: 85px;
  height: 30px;
  margin: 45px 170px;
  background-color: #dcdfe6;
  background-image: linear-gradient(95deg,rgba(114,114,202,.3),rgba(90,187,182,0.5));
}
</style>
