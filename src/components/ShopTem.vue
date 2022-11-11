<template>
  <div>
    <h2>穷游商城</h2>
    <el-row>
      <!--        style="max-width: 540px;"-->
      <el-col :span="8" v-for="(item, index) in new_list" :key="index" style="padding: 10px">
        <b-card no-body class="overflow-hidden">
          <el-row style="height: 300px">
            <el-col :span="16">
              <b-card-img :src=item.image :alt=item.city class="rounded-0"
                          style="object-fit: cover; height: 300px;width: 100%"></b-card-img>
            </el-col>
            <el-col :span="8">
              <b-card-body :title=item.city>
                <b-card-text>
                  {{
                    item.description
                  }}
                </b-card-text>
                <b-card-text style="float: right;color: crimson">
                  ￥100
                </b-card-text>
              </b-card-body>
            </el-col>
          </el-row>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ShopTem',
  props: ['info_list'],
  data () {
    return {
      new_list: this.info_list
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 36px;
  text-align: center;
}
</style>
