<template>
  <!--    轮播图-->
  <div>
    <el-carousel trigger="click" height="640px">
      <el-carousel-item v-for="(item, index) in $store.state.carousel_item" :key="index">
        <div class="pic_item">
          <img class="small" :src="item.image" alt=""/>
          <h2>{{item.region}}</h2>
          <p>{{ item.description }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselTem'
}
</script>

<style scoped>

.pic_item {
  position: relative;
  height: 100%;
}

.el-carousel__item h2 {
  color: white;
  font-size: 0.8rem;
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

.pic_item h2 {
  border-radius: 8px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  padding: 8px 10px;
  position: absolute;
  right: 5%;
  bottom: 15%;
}

.pic_item p {
  border-radius: 8px;
  font-size: 20px;
  color: white;
  padding: 8px 10px;
  position: absolute;
  right: 1%;
  bottom: 5%;
}
</style>
