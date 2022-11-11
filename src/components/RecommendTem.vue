<template>
  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">今日推荐</h2>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" v-for="(item, index) in new_list" :key="index">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-3 shadow-lg"
             :style="{'background-image':'url('+item.image+')'}">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ item.city }}</h2>
            <p style="text-indent: 2em">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendTem',
  props: ['info_list'],
  data () {
    return {
      new_list: this.info_list
    }
  }
}
</script>

<style scoped>
@import "../assets/css/features.css";

h2 {
  font-size: 36px;
  text-align: center;
}
</style>
