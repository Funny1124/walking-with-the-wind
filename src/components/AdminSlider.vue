<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item">
        <router-link to="/admin/RecommendManagement">今日推荐</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/admin/ShopManagement">随风商城</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/admin/HotTopicManagement">热门话题</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/admin/DataAnalytics">数据分析</router-link>
      </li>
      <!--      <li class="menu-item">-->
      <!--        <router-link to="/admin">系统设置</router-link>-->
      <!--      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminSlider'
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  padding: 12px 0;
  width: 8%;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;

  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;

    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }

    a {
      display: block;
      color: black;
      padding: 5px 25%;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #1ccdae;
  border-radius: 4px;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
}
</style>
