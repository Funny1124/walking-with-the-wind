<template>
  <!--    轮播图-->
  <div>
    <el-carousel trigger="click" height="640px">
      <el-carousel-item v-for="(item, index) in new_list" :key="index">
        <div class="pic_item">
          <img class="small" :src="item.image" alt=""/>
          <h3>{{ item.description }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselTem',
  props: ['info_list'],
  data () {
    return {
      new_list: this.info_list
    }
  }
}
</script>

<style scoped>

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
