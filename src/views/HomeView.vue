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
    <search-bar style="z-index: 5"></search-bar>
    <!--    广告-->
    <div id="advertising">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    </div>

    <!--    今日推荐-->
    <div class="recommend">
      <h2>今日推荐</h2>
      <el-row gutter="20">
        <el-col :span="6" v-for="(item, index) in new_list" :key="index">
          <b-card
            :title=item.city
            :img-src=item.image
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              {{ item.description }}
            </b-card-text>
            <b-button href="#" variant="primary" style="float: right">查看详情</b-button>
          </b-card>
        </el-col>
      </el-row>
    </div>

    <!--  穷游商城-->
    <div class="shop">
      <h2>穷游商城</h2>
      <el-row>
        <!--        style="max-width: 540px;"-->
        <el-col :span="8" v-for="(item, index) in new_list" :key="index" style="padding: 10px">
          <b-card no-body class="overflow-hidden">
            <el-row style="height: 300px">
              <el-col :span="16">
                <b-card-img :src=item.image :alt=item.city class="rounded-0"
                            style="object-fit: cover; height: 300px;width: 100%"></b-card-img>
              </el-col>
              <el-col :span="6">
                <b-card-body :title=item.city>
                  <b-card-text>
                    {{
                      item.description
                    }}
                  </b-card-text>
                  <b-card-text style="float: right;color: crimson">
                    ￥100
                  </b-card-text>
                </b-card-body>
              </el-col>
            </el-row>
          </b-card>
        </el-col>
      </el-row>
    </div>
    <!--    热门游记-话题-->
    <div class="hot-topic">
      <h2>热门游记-话题</h2>
      <el-row>
        <!--        style="max-width: 540px;"-->
        <el-col :span="12" v-for="(item, index) in new_list" :key="index" style="padding: 10px">
          <b-card no-body class="overflow-hidden" >
            <b-row no-gutters >
              <b-col>
                <b-card-img :src=item.image :alt=item.city class="rounded-0"
                            style="object-fit: cover; height: 380px;width: 100%"></b-card-img>
              </b-col>
              <b-card-body :title=item.city>
                <b-card-text>
                  {{
                    item.description
                  }}
                </b-card-text>
              </b-card-body>
            </b-row>
          </b-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import SliderBar from '@/components/SliderBar'
import SearchBar from '@/components/SearchBar'

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
    SearchBar
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
