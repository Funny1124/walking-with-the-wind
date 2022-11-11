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

</style>
