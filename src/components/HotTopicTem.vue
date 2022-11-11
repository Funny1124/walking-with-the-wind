<template>
  <div>
    <h2>热门游记-话题</h2>
    <el-row>
      <!--        style="max-width: 540px;"-->
      <el-col :span="12" v-for="(item, index) in new_list" :key="index" style="padding: 10px">
        <b-card no-body class="overflow-hidden" >
          <b-row no-gutters >
            <b-col>
              <b-card-img :src=item.image :alt=item.city class="rounded-0"
                          style="object-fit: cover; height: 380px;width: 100%"></b-card-img>
            </b-col>
            <b-card-body :title=item.city>
              <b-card-text>
                {{
                  item.description
                }}
              </b-card-text>
            </b-card-body>
          </b-row>
        </b-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HotTopicTem',
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
