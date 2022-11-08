<template>
  <div>
    <el-carousel indicator-position="none" height="460px">
      <el-carousel-item v-for="(item,index) in srcList" :key="index">
        <img :src=item alt="加载失败">
        <h2>{{ index }}</h2>
      </el-carousel-item>
    </el-carousel>
    <div id="advertising">
      <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    </div>

    <div class="Content">
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

  </div>
</template>
<script>
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
  }
}
</script>
<style lang="less" scoped>
#advertising {
  /*height: 100px;*/
  background-color: #bacebe;
  text-align: center;
}

.Content {
  width: 80%;
  margin: 0 auto;
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

</style>
