<template>
  <div class="NavBar">
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand class="band">
        <router-link to="/">Q穷游</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">首页</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/destination">目的地</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/tips">锦囊</router-link>
          </b-nav-item>
          <b-nav-item>
            <!--            <router-link to="/about">社区</router-link>-->
            <el-dropdown>
              <span class="el-dropdown-link">
                <router-link to="/community">社区<i class="el-icon-arrow-down el-icon--right"></i></router-link>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">旅行论坛</el-dropdown-item>
                <el-dropdown-item command="b">旅行问答</el-dropdown-item>
                <el-dropdown-item command="c">旅行专栏</el-dropdown-item>
                <el-dropdown-item command="d" >旅行生活分享</el-dropdown-item>
                <el-dropdown-item command="e" >旅行生活美学</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/assistant">行程助手</router-link>
          </b-nav-item>
          <b-nav-item>
            <el-dropdown>
              <span class="el-dropdown-link">
                <router-link to="/shop">商城<i class="el-icon-arrow-down el-icon--right"></i></router-link>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">机酒自由行</el-dropdown-item>
                <el-dropdown-item command="b">当地玩乐</el-dropdown-item>
                <el-dropdown-item command="c">签证</el-dropdown-item>
                <el-dropdown-item command="d">保险</el-dropdown-item>
                <el-dropdown-item command="e">租车自驾</el-dropdown-item>
                <el-dropdown-item command="e">游轮</el-dropdown-item>
                <el-dropdown-item command="e">私人定制</el-dropdown-item>
                <el-dropdown-item command="e">欧洲铁路</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </b-nav-item>
          <b-nav-item>
<!--            <router-link to="/about">酒店-民宿</router-link>-->
            <el-dropdown>
              <span class="el-dropdown-link">
                <router-link to="/hotel">酒店-民宿<i class="el-icon-arrow-down el-icon--right"></i></router-link>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">酒店</el-dropdown-item>
                <el-dropdown-item command="b">民宿</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/cheap-hotels">特价酒店</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
        <b-navbar-nav class="ml-auto" style="margin-right: 5%">
          <b-nav-item>
            <router-link to="/register">注册</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login">登录</router-link>
          </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
//.NavBar {
//  //padding-left: 20px;
//}
.band {
  margin-left: 5%;
  a {
    font-size: 30px;
  }
}

a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;

  & .router-link-exact-active {
    color: #2963f1;
  }

}

</style>
