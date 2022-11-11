<template>
  <div class="box">
    <router-link to="/home/recommend"><img src="../assets/img/recommend.svg" alt=""><span>今日推荐</span></router-link>
    <router-link to="/"><img src="../assets/img/hot.svg" alt=""><span>热门景点</span></router-link>
    <router-link to="/home/shop"><img src="../assets/img/shop.svg" alt=""><span>穷游商城</span></router-link>
    <router-link to="/home/hot-topic"><img src="../assets/img/goodday.svg" alt=""><span>热门话题</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'SliderBar'
}
</script>

<style scoped>
.box {
  position: fixed;
  top: 30%;
  left: 0.5%;
  /*height: 500px;*/
  height: 40%;
  width: 3%;
  min-height: 250px;
  min-width: 60px;
  background-color: rgba(33, 206, 170, 0.57);
  border-radius: 10px;
  transition: 0.3s;
}

.box:hover {
  width: 195px;
}

.box a {
  /* overflow: hidden; */
  line-height: 50px;
  height: 50px;
  width: 88%;
  border-radius: 5px;
  position: relative;
}

.box {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

/*.box a:nth-of-type(1)::before, .box a:nth-of-type(5)::before {*/
/*  content: "";*/
/*  position: absolute;*/
/*  bottom: -8px;*/
/*  width: 100%;*/
/*  border-bottom: 1px solid rgb(165, 173, 201);*/
/*}*/

.box a img {

  vertical-align: middle;
  margin-left: 15px;
  height: 30px;
  width: 30px;
}

.box span {
  position: absolute;
  white-space: nowrap;
  transition: 0.3s;
  opacity: 0;
  margin-left: 8px;
  top: 2px;
}

.box a:hover {
  color: black;
  background-color: rgba(204, 204, 204, 0.5);
}

.box:hover span {
  opacity: 1;
}
</style>
