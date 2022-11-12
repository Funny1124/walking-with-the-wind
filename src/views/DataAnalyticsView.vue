<template>
  <div>
    <div class="data-map">
      <el-row :gutter="20" style="margin: 20px 0">
        <el-col :span="12">
          <data-new-users></data-new-users>
        </el-col>
        <el-col :span="12">
          <data-total-users></data-total-users>
        </el-col>
      </el-row>
      <el-row style="margin: 20px 10px">
        <el-col :span="24">
          <data-sex-proportion></data-sex-proportion>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import DataNewUsers from '@/components/DataNewUsers'
import DataTotalUsers from '@/components/DataTotalUsers'
import DataSexProportion from '@/components/DataSexProportion'

export default {
  name: 'DataAnalytics',
  data () {
    return {}
  },
  components: {
    DataNewUsers,
    DataTotalUsers,
    DataSexProportion
  }
}
</script>

<style scoped>
.data-map {
  background-color: #1ccdae;
  padding: 10px;
}
</style>
