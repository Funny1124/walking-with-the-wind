<template>
  <header>
    <!--    <img src="../assets/logo.png" class="logo" alt="logo">-->
    <nav>
      <ul class="nav_links">
        <li style="font-size: 24px">
          <router-link to="/">Q穷游</router-link>
        </li>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/destination">目的地</router-link>
        </li>
        <li>
          <router-link to="/tips">锦囊</router-link>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link to="/community">社区<i class="el-icon-arrow-down el-icon--right"></i></router-link>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">旅行论坛</el-dropdown-item>
              <el-dropdown-item command="b">旅行问答</el-dropdown-item>
              <el-dropdown-item command="c">旅行专栏</el-dropdown-item>
              <el-dropdown-item command="d">旅行生活分享</el-dropdown-item>
              <el-dropdown-item command="e">旅行生活美学</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <router-link to="/assistant">行程助手</router-link>
        </li>
        <li>
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
        </li>
        <li>
          <el-dropdown>
                <span class="el-dropdown-link">
                  <router-link to="/hotel">酒店-民宿<i class="el-icon-arrow-down el-icon--right"></i></router-link>
                </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">酒店</el-dropdown-item>
              <el-dropdown-item command="b">民宿</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <router-link to="/cheap-hotels">特价酒店</router-link>
        </li>
      </ul>
    </nav>
    <router-link to="/login" v-if="$store.state.login_info.login===false">
      <button>login</button>
    </router-link>
    <router-link to="/login" v-if="$store.state.login_info.login===true">
      <!--      <button>login</button>-->
      <div class="block">
        <el-avatar :src="$store.state.login_info.avatar" size="medium"></el-avatar>
      </div>
    </router-link>
    <router-link to="/admin" v-if="$store.state.login_info.type==='admin'">
      <button>后台管理</button>
    </router-link>
  </header>

</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
li, a, button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.73);
}

.el-dropdown-menu__item {
  color: rgba(0, 0, 0, 0.8);
}

.el-dropdown-menu__item:hover {
  background-color: #198754;
  color: white;
}

.logo {
  cursor: pointer;
  margin-right: auto;
}

nav {
  margin-top: 8px;
}

.nav_links {
  list-style: none;
}
// 设置路由高亮效果
//.router-link-active {
//  background-color: #1ccdae;
//  position: relative;
//}
.nav_links li {
  display: inline-block;
  padding: 0 10px;
}

.nav_links li a {
  transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
  color: rgb(15, 176, 127);
  font-size: 24px;
}

button {
  padding: 5px 25px;
  background-color: #1580ff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgb(15, 176, 127);
}
</style>
