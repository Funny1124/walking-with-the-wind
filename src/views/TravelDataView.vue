<template>
  <div>
    <div class="data-map">
      <el-row :gutter="20">
        <el-col :span="10">
          <compare-new-users></compare-new-users>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CompareNewUsers from '@/components/CompareNewUsers'

export default {
  name: 'TravelDataView',
  data () {
    return {}
  },
  components: {
    CompareNewUsers
  }
}
</script>

<style scoped>
</style>
