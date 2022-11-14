<template>
  <div class="footer_bar">
    <footer class="row row-cols-5 py-5 border-top footer_bar">
      <div class="col" style="text-align: center">
        <img :src="require('@/assets/img/logo.svg')" alt="logo" width="50px" height="50px">
        <p class="text-muted">&copy; 2021</p>
      </div>
      <div class="col">
        <h5>关于我们</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">简介</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">联系我们</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">合作伙伴</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>加入我们</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">招聘职位</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>网站条款</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">会员条款</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">社区指南</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">版权声明</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">免责声明</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"></a></li>
        </ul>
      </div>

      <div class="col">
        <h5>帮助中心</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">新手上路</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">使用帮助</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">网站地图</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">旅行工具</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="less" scoped>
.footer_bar {
  background-color: #323232;
  padding: 0 15%;

  h5 {
    color: #b7c0c0;
  }

  li {
    color: #c0c0c0;
  }
}
</style>
