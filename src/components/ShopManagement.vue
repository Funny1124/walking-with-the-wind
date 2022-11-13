<template>
  <el-table
    :data="$store.state.shop_item"
    border
    style="width: 100%">
    <el-table-column
      prop="type"
      label="类型"
      width="150">
    </el-table-column>
    <el-table-column
      label="图片"
      width="180">
      <template slot-scope="scope">
        <img :src=scope.row.image alt="加载失败" style="height: 100px; width: 160px;">
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
      width="1000">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'ShopManagement',
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$store.commit('delete_shop_item', index)
    }
  },
  data () {
    return {}
  }
}
</script>
