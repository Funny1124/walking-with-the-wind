<template>
  <div>
    <nav-bar
      style="z-index: 5;
      position: absolute;
      background-color: rgba(44, 62, 80, 0)
"></nav-bar>
    <!--    侧边栏-->
    <slider-bar style="z-index: 3"></slider-bar>

    <!--    轮播图-->
    <div class="carousel" style="z-index: 1">
      <el-carousel trigger="click" height="640px">
        <el-carousel-item v-for="(item, index) in new_list" :key="index">
          <div class="pic_item">
            <img class="small" :src="item.image" alt=""/>
            <h3>{{ item.description }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--    广告-->
    <div id="advertising">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    </div>

    <!--    今日推荐-->
    <div class="recommend">
      <el-row gutter="20">
        <el-col :span="8" v-for="(item, index) in new_list" :key="index">
          <el-card class="info-card">
            <img :src="item.image" alt="加载失败" class="image">
            <p style="text-indent:2em">{{ item.description }}</p>
            <div class="bottom clearfix">
              <el-button type="text" class="button">查看详情</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!--  穷游商城-->
    <div class="shop">

    </div>
    <!--    热门游记-话题-->
    <div class="hot-topic">

    </div>
  </div>
</template>
<script>
import SliderBar from '@/components/SliderBar'

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
          image: require('../assets/img/city.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        },
        {
          image: require('../assets/img/river.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        },
        {
          image: require('../assets/img/river.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        },
        {
          image: require('../assets/img/city.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        },
        {
          image: require('../assets/img/river.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        },
        {
          image: require('../assets/img/city.jpg'),
          description: '学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史'
        }
      ]
    }
  },
  components: {
    SliderBar
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
  font-size: 18px;
  color: crimson;
}

.recommend {
  width: 80%;
  margin: 0 auto;
}

.shop {

}

.info-card {
  margin: 20px;
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
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}

</style>
