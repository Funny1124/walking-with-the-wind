<template>
  <div id="app">
    <nav-bar></nav-bar>

    <!--    <nav>-->
<!--      <nav-bar></nav-bar>-->
<!--      <router-link to="/">Home</router-link>-->
<!--      |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
    <router-view/>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'
export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
router-view {
  height: 100%;
}
</style>
