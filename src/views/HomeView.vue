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
      <a href="#hot-landscape"><img src="../assets/img/hot.svg" alt=""><span>热门景点</span></a>
      <a href="#shop"><img src="../assets/img/shop.svg" alt=""><span>穷游商城</span></a>
      <a href="#hot-topic"><img src="../assets/img/goodday.svg" alt=""><span>热门话题</span></a>
    </div>
    <!--    联系我们-->
    <router-link to="/contact">
      <img class="contact" src="@/assets/email.png" alt="联系我们">
    </router-link>
    <!--    轮播图-->
    <div id="carousel" class="carousel" style="z-index: 1">
      <carousel-tem :info_list="new_list"></carousel-tem>
    </div>

    <search-bar style="z-index: 5"></search-bar>

    <!--    广告-->
    <advertising-tem/>

    <!--    今日推荐-->
    <div id="recommend" class="recommend">
      <recommend-tem :info_list="new_list"></recommend-tem>
    </div>

    <!--  穷游商城-->
    <div id="shop" class="shop">
      <ShopTem></ShopTem>
    </div>

    <!--    热门景区-->
    <div id="hot-landscape" class="hot-landscape">
      <hot-landscape-tem :info_list="new_list"></hot-landscape-tem>
    </div>

    <!--    热门游记-话题-->
    <div id="hot-topic" class="hot-topic">
      <hot-topic-tem :info_list="new_list"></hot-topic-tem>
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
import HotLandscapeTem from '@/components/HotLandscapeTem'

export default {
  data () {
    return {
      currentDate: new Date(),
      srcList:
        [
          require('@/assets/img/river.jpg'),
          require('@/assets/img/city.jpg')
        ],
      new_list: [
        {
          city: '桂林',
          image: require('../assets/img/city.jpg'),
          description: '桂林，简称“桂”，广西壮族自治区辖地级市、省域副中心城市'
        },
        {
          city: '南宁',
          image: require('../assets/img/river.jpg'),
          description: '南宁，简称“邕”，别称绿城、邕城，是广西壮族自治区辖地级市'
        },
        {
          city: '深圳',
          image: require('../assets/img/river.jpg'),
          description: '深圳，简称“深”，别称鹏城，广东省辖地级市，是广东省副省级市'
        },
        {
          city: '广州',
          image: require('../assets/img/city.jpg'),
          description: '广州，简称“穗”，别称羊城、花城，是广东省辖地级市'
        },
        {
          city: '东莞',
          image: require('../assets/img/river.jpg'),
          description: '东莞，广东省辖地级市，国务院确定的珠江三角洲东岸中心城市。'
        },
        {
          city: '梧州',
          image: require('../assets/img/city.jpg'),
          description: '梧州，广西壮族自治区辖地级市。位于广西东部，地处西江黄金水道'
        }
      ]
    }
  },
  components: {
    SearchBar,
    CarouselTem,
    RecommendTem,
    ShopTem,
    HotTopicTem,
    AdvertisingTem,
    HotLandscapeTem
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
  background: linear-gradient(#6dd27c,#1ccdae);
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
  top: 30%;
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
