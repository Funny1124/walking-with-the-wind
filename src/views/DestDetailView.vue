<template>
  <div class="dest-weather">
    <nav-bar></nav-bar>
    <div style="margin: 20px 15%; text-align: center;display: block">
      <el-row style="margin: 20px 0">
        <el-col>
          <dest-weather></dest-weather>
        </el-col>
      </el-row>
      <h2>推荐景点</h2>
      <el-table
        :data="$store.state.guilin_ticket"
        class="table-tick"
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column
          label="序号"
          type="index"
          width="60">
        </el-table-column>
        <el-table-column
          label="图片"
          width="180">
          <template slot-scope="scope">
            <img :src=scope.row.image alt="加载失败" style="height: 100px; width: 160px;border-radius: 4px">
          </template>
        </el-table-column>
        <el-table-column
          prop="region"
          label="地区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="480">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <el-button type="danger" round>购票</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import DestWeather from '@/components/DestWeather'

export default {
  name: 'DestDetailView',
  components: {
    DestWeather
  }
}
</script>

<style scoped>
h2 {
  font-size: 36px;
  color: white;
  font-weight: bold;
  text-align: center;
}
.dest-weather {
  background: linear-gradient(#6dd27c,#1ccdae);
  padding-bottom: 20px;
}
.table-tick {
  text-align: center;
  border-radius: 4px;
}
</style>
