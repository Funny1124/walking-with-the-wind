<template>
  <div>
    <h2>今日推荐</h2>
    <el-row gutter="20">
      <el-col :span="6" v-for="(item, index) in new_list" :key="index">
        <b-card
          :title=item.city
          :img-src=item.image
          img-alt="Image"
          img-top
          tag="article"
          style=""
          class="mb-2"
        >
          <b-card-text>
            {{ item.description }}
          </b-card-text>
          <b-button href="#" variant="primary" style="float: right">查看详情</b-button>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RecommendTem',
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
