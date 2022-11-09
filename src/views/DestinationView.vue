<template>
  <div>
    <div class="customized">
      <ul>
        <li v-for="(item,index) in cityList" :key="index">
          <img :src=item.image alt="">
          {{ item.city }}------
          {{ item.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DestinationView',
  data () {
    return {
      cityList: [
        {
          city: '桂林',
          image: require('@/assets/img/river.jpg'),
          desc: '欢迎来到GUET'
        },
        {
          city: '318线',
          image: require('@/assets/img/city.jpg'),
          desc: '此生必驾驶318'
        },
        {
          city: '内蒙古',
          image: require('@/assets/img/river.jpg'),
          desc: '内蒙古大草原'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.customized {
  text-align: center;
  background-color: aquamarine;
}

li {
  margin: 8px;
  padding: 8px;
  img {
    height: 100px;
    width: 200px;
  }
}
</style>
