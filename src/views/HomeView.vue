<template>
  <div>
    <nav-bar
      style="z-index: 5;
      position: absolute;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0))">
    </nav-bar>
    <!--    侧边栏-->
    <div class="box" style="z-index: 2">
      <a href="#recommend"><img src="../assets/img/recommend.svg" alt=""><span>今日推荐</span></a>
      <a href="#shop"><img src="../assets/img/shop.svg" alt=""><span>穷游商城</span></a>
      <a href="#hot-topic"><img src="../assets/img/goodday.svg" alt=""><span>热门话题</span></a>
    </div>
    <!--    联系我们-->
    <router-link to="/contact">
      <img class="contact" src="@/assets/img/email.png" alt="联系我们">
    </router-link>
    <!--    轮播图-->
    <div id="carousel" class="carousel" style="z-index: 1">
      <carousel-tem></carousel-tem>
    </div>

    <search-bar style="z-index: 5"></search-bar>

    <!--    广告-->
    <advertising-tem/>

    <!--    今日推荐-->
    <div id="recommend" class="recommend">
      <recommend-tem></recommend-tem>
    </div>

    <!--  穷游商城-->
    <div id="shop" class="shop">
      <ShopTem></ShopTem>
    </div>
    <!--    热门游记-话题-->
    <div id="hot-topic" class="hot-topic">
      <hot-topic-tem></hot-topic-tem>
    </div>
    <div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import CarouselTem from '@/components/CarouselTem'
import RecommendTem from '@/components/RecommendTem'
import ShopTem from '@/components/ShopTem'
import HotTopicTem from '@/components/HotTopicTem'
import AdvertisingTem from '@/components/AdvertisingTem'

export default {
  data () {
    return {}
  },
  components: {
    SearchBar,
    CarouselTem,
    RecommendTem,
    ShopTem,
    HotTopicTem,
    AdvertisingTem
  }
}
</script>
<style lang="less" scoped>
h2 {
  font-size: 36px;
  text-align: center;
}

.recommend {
  //width: 70%;
  padding: 0 15%;
  margin: 0 auto;
}

.hot-landscape {
  width: 70%;
  margin: 0 auto;
}

.shop {
  //width: 70%;
  padding: 2% 15% 1%;
  margin: 20px auto;
  background: linear-gradient(#6dd27c, #1ccdae);
}

.hot-topic {
  width: 70%;
  margin: 20px auto;
}

.info-card {
  margin: 10px 0;
  height: 450px;
  background-color: rgba(249, 250, 252, 0.45);
  border: medium #e7a722;
  border-radius: 8px;
}

.image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: medium #e7a722;
  border-radius: 8px;
}

.bottom {
  line-height: 13px;
}

.button {
  padding: 0;
  float: right;
}

.box {
  opacity: 0.3;
  position: fixed;
  top: 35%;
  left: 0.5%;
  /*height: 500px;*/
  height: 30%;
  width: 3%;
  min-height: 250px;
  min-width: 60px;
  padding: 0 15px;
  background-color: rgba(255, 255, 255, 0.57);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.3s;
}

.box:hover {
  width: 150px;
  opacity: 1;
}

.box a {
  /* overflow: hidden; */
  line-height: 50px;
  height: 50px;
  border-radius: 5px;
  position: relative;
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
  color: #ffffff;
  background-color: rgb(15, 176, 127);
}

.box:hover span {
  opacity: 1;
}

.contact {
  opacity: 0.3;
  position: fixed;
  left: 0.5%;
  bottom: 3%;
  width: 3%;
  height: auto;
  padding: 4px;
  border-radius: 8px;
  display: inline-block;
}

.contact:hover {
  width: 4%;
  opacity: 1;
}
</style>
