<template>
  <div>
    <div class="data-map">
      <el-row :gutter="20">
        <el-col :span="12">
          <data-new-users></data-new-users>
        </el-col>
        <el-col :span="12">
          <data-total-users></data-total-users>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import DataNewUsers from '@/components/DataNewUsers'
import DataTotalUsers from '@/components/DataTotalUsers'
export default {
  name: 'DataAnalytics',
  data () {
    return {}
  },
  components: {
    DataNewUsers,
    DataTotalUsers
  }
}
</script>

<style scoped>
.data-map {
  background-color: #1ccdae;
}
</style>
