<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <NavBar></NavBar>
    <!-- 页面主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <AdminSlider></AdminSlider>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import AdminSlider from '@/components/AdminSlider'

export default {
  name: 'AdminView',
  // 注册组件
  components: {
    NavBar,
    AdminSlider
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;

    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
