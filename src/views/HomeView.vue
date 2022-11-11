<template>
  <div>
    <nav-bar
      style="z-index: 5;
      position: absolute;
      background-color: rgba(44, 62, 80, 0)">
    </nav-bar>
    <!--    侧边栏-->
    <slider-bar style="z-index: 3"></slider-bar>

    <!--    轮播图-->
    <div id="carousel" class="carousel" style="z-index: 1">
      <carousel-tem :info_list="new_list"></carousel-tem>
    </div>

    <search-bar style="z-index: 5"></search-bar>

    <!--    广告-->
    <div id="advertising">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    </div>

    <!--    今日推荐-->
    <div id="recommend" class="recommend">
        <recommend-tem :info_list="new_list"></recommend-tem>
    </div>

    <!--  穷游商城-->
    <div id="shop" class="shop">
      <ShopTem :info_list="new_list"></ShopTem>
    </div>

    <!--    热门游记-话题-->
    <div id="hot-topic" class="hot-topic">
      <hot-topic-tem :info_list="new_list"></hot-topic-tem>
    </div>
  </div>
</template>
<script>
import SliderBar from '@/components/SliderBar'
import SearchBar from '@/components/SearchBar'
import CarouselTem from '@/components/CarouselTem'
import RecommendTem from '@/components/RecommendTem'
import ShopTem from '@/components/ShopTem'
import HotTopicTem from '@/components/HotTopicTem'

export default {
  data () {
    return {
      currentDate: new Date(),
      advertising: require('@/assets/img/advertising.png'),
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
        },
        {
          city: '杭州',
          image: require('../assets/img/river.jpg'),
          description: '杭州，简称“杭”，古称临安、钱塘，浙江省辖地级市、省会、副省级市'
        },
        {
          city: '大理',
          image: require('../assets/img/city.jpg'),
          description: '云贵高原上的洱海平原，苍山之麓，洱海之滨，南诏国的都城'
        }
      ]
    }
  },
  components: {
    SliderBar,
    SearchBar,
    CarouselTem,
    RecommendTem,
    ShopTem,
    HotTopicTem
  }
}
</script>
<style lang="less" scoped>
#advertising {
  /*height: 100px;*/
  background-color: #f5f5f5;
  padding: 0.5%;
  text-align: center;
}

h2 {
  font-size: 36px;
  text-align: center;
}

.recommend {
  width: 80%;
  margin: 0 auto;
}

.shop {
  width: 80%;
  margin: 20px auto;
}

.hot-topic {
  width: 80%;
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

.pic_item {
  position: relative;
  height: 100%;
}

.el-carousel__item h3 {
  color: white;
  font-size: 0.8rem;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel {
  width: 100%;
}

.small {
  width: 100%;
  height: 100%;
  position: relative;
}

.pic_item {
  position: relative;
  height: 100%;
}

.pic_item:hover {
  cursor: pointer;
}

.pic_item img {
  width: 100%;
  height: 100%;
}

.pic_item h3 {
  border-radius: 8px;
  font-size: 20px;
  color: black;
  background-color: #99a9bf;
  padding: 8px 10px;
  position: absolute;
  right: 5%;
  bottom: 5%;
}

</style>
