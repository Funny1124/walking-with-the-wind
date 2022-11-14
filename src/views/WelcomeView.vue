<template>
  <body class="d-flex h-100 text-center text-white" style="  background: linear-gradient(#6dd27c,#1ccdae);">
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0 active">
          <router-link to="/welcome" class="text-white nav-link">S随风</router-link>
        </h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link to="/home" class="nav-link ">首页</router-link>
          <router-link to="/contact" class="nav-link">联系我们</router-link>
          <router-link to="/login" class="nav-link">登录</router-link>
        </nav>
      </div>
    </header>
    <main class="px-3">
      <h1>欢迎来到随风而行</h1>
      <p style="text-indent: 2em">伴随着风，走遍世界的每一个角落。</p>
      <p style="text-indent: 2em">我们和大家一样热爱旅行，我们相信：</p>
      <p style="text-indent: 2em">无论你因为什么出发，旅行，都会让你的生命更加丰富多彩。</p>
      <p style="text-indent: 2em">风愿意陪你继续体验整个世界的精彩。</p>
      <p style="text-indent: 2em">让我们，继续，对世界上瘾！</p>

      <p class="lead">
        <router-link to="/home" class="btn btn-lg btn-secondary fw-bold border-white bg-white">开始旅途</router-link>
      </p>
    </main>
    <footer class="mt-auto text-white-80">
      <p>
        随风而行，为旅行者提供原创实用的出境游旅行指南和旅游攻略、旅行社区和问答交流平台，并提供签证、保险、机票、酒店预订、租车等服务。</p>
    </footer>
  </div>
  </body>
</template>

<script>
export default {
  name: 'WelcomeView',
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped>

/*
 * Globals
 */

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
  min-height: 1030px;
}

/*
 * Header
 */

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.94);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .65);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>
