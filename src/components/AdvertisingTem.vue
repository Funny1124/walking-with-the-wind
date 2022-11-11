<template>
  <div class="advertising">
    <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
    <img :src=advertising alt="广告招租" style="width: 30%; max-width: 300px">
  </div>
</template>

<script>
export default {
  name: 'AdvertisingTem',
  data () {
    return {
      advertising: require('@/assets/img/advertising.png')
    }
  }
}
</script>

<style scoped>
.advertising {
  /*height: 100px;*/
  background-color: #f5f5f5;
  padding: 0.5%;
  text-align: center;
}
</style>
