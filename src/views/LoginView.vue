<template>
  <div>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style="background-color: #1ccdae">
      <header class="mb-auto text-white" style="padding: 0 30%">
        <h3 class="float-md-start mb-0">Q穷游</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link to="/home" class="nav-link ">首页</router-link>
          <router-link to="/contact" class="nav-link">联系我们</router-link>
          <router-link to="/login" class="nav-link">注册</router-link>
        </nav>
      </header>
    </div>
    <div class="container col-xl-10 col-xxl-8 px-5 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <img src="../assets/img/tree.svg" alt="logo" width="60%">
          <br>
          <small style="margin-left: 22%">美好正在路上！</small>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                     v-model="username">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                     v-model="password">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" @click="login">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginSuccess (p) {
      this.$notify({
        title: '成功',
        message: '您已成功登录成功，尊敬的' + p + '!',
        type: 'success'
      })
    },
    login () {
      if (this.username === 'admin' && this.password === '666666') {
        // 登录成功
        // 1. 存储 token
        localStorage.setItem('token', 'token-sdr646sg8r9s8g9srg896tr546w7th9wrt7h89')
        this.$store.commit('adminLogin')
        // 2. 跳转到后台主页
        this.$router.push('/admin')
        this.loginSuccess('管理员')
      } else {
        this.$router.push('/home')
        this.$store.commit('userLogin')
        this.loginSuccess('用户')
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 120px;
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
