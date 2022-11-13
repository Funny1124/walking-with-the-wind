<template>
  <div>
    <h2>穷游商城</h2>
    <el-row>
      <!--        style="max-width: 540px;"-->
      <el-col :span="8" v-for="(item, index) in $store.state.shop_item" :key="index" style="padding: 10px">
        <b-card no-body class="overflow-hidden">
          <el-row style="height: 300px">
            <el-col :span="16">
              <b-card-img :src=item.image :alt=item.region class="rounded-3 px-1 py-1 "
                          style="object-fit: cover; height: 300px;width: 100%"></b-card-img>
            </el-col>
            <el-col :span="8">
              <b-card-body :title=item.region>
                <b-card-text>
                  [{{ item.type }}]{{ item.description }}
                </b-card-text>
                <b-card-text class="price">
                  {{ item.price }}
                </b-card-text>
              </b-card-body>
            </el-col>
          </el-row>
        </b-card>
      </el-col>
    </el-row>
    <div  style="text-align: center">
      <a href="https://z.qyer.com/">
        <button>查看更多商品</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopTem'
}
</script>

<style scoped>
h2 {
  font-size: 36px;
  text-align: center;
}

.price {
  position: absolute;
  right: 4px;
  bottom: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  color: crimson;
  font-size: 20px;
}
button {
  font-size: 24px;
  padding: 5px 25px;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgb(238, 229, 62);
}
</style>
