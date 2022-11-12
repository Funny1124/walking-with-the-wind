<template>
  <div>
    <nav-bar></nav-bar>
    <div class="customized">
      <ul>
        <li v-for="(item,index) in $store.state.new_list" :key="index">
          <img :src=item.image alt="">
          {{ item.city }}------
          {{ item.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DestinationView',
  components: {}
}
</script>

<style lang="less" scoped>
.customized {
  text-align: left;
  background-color: aquamarine;
}

li {
  padding: 8px;
  img {
    height: 100px;
    width: 200px;
  }
}
</style>
