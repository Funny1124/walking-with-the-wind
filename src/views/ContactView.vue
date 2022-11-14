<template>
  <div>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style="background-color: #1ccdae">
      <header class="mb-auto text-white" style="padding: 0 30%">
        <h3 class="float-md-start mb-0">S随风</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link to="/home" class="nav-link ">首页</router-link>
          <router-link to="/login" class="nav-link">登录</router-link>
        </nav>
      </header>
    </div>
    <div class="container col-xl-10 col-xxl-8 px-5 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <img src="../assets/img/contractUs.png" alt="logo" width="40%">
          <br>
          <small style="margin-left: 5%">可扫描二维码与我们取得联系哦！</small>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="称呼">
              <el-col>
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="邮箱">
              <el-col>
                <el-input v-model="form.email"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="信息">
              <el-col>
                <el-input
                  type="textarea"
                  :rows="8"
                  placeholder="请输入内容"
                  v-model="form.desc">
                </el-input>
                <!--          <el-input type="textarea"  v-model="form.desc"></el-input>-->
              </el-col>
            </el-form-item>

            <el-form-item label="发送者">
              <el-radio-group v-model="form.sender">
                <el-radio label="个人"></el-radio>
                <el-radio label="公司"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit" round style=" padding:10px 30px;float: right">发送
              </el-button>
              <!--      <el-button>取消</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactView',
  data () {
    return {
      form: {
        name: '',
        email: '',
        sender: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
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
