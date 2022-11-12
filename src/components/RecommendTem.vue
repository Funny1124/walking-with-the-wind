<template>
  <div class=" px-4 py-5">
    <div>
      <el-row>
        <el-col span="10">
          <router-link to="/login">
            <button><i class="el-icon-warning-outline"></i> 出境旅游安全提示<i class="el-icon-arrow-right"></i></button>
          </router-link>
        </el-col>
        <el-col span="12">
          <h3>今日推荐</h3>
        </el-col>
      </el-row>
    </div>
    <div class="container  py-5" id="custom-cards">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2">
        <div class="col" v-for="(item, index) in $store.state.recommend_item" :key="index">
          <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-3 shadow-lg"
               :style="{'background-image':'url('+item.image+')'}">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ item.region }}</h2>
              <p style="text-indent: 2em">【{{ item.type }}】&nbsp;{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'RecommendTem'
}
</script>

<style scoped>
@import "../assets/css/features.css";

h2 {
  font-size: 36px;
  text-align: center;
}
h3 {
  font-size: 36px;
  padding-left: 20px;
}

button {
  font-size: 24px;
  padding: 5px 15px;
  margin-left: 50px;
  background-color: #02db94;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: #ebb563;
}
</style>
