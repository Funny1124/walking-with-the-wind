<template>
  <div class="data-map">
    <el-button round @click="AddFormVisible=true" class="add-btn">添加
    </el-button>
    <el-table
      :data="$store.state.recommend_item"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      style="border-radius: 8px"
    >
      <el-table-column
        prop="type"
        label="类型"
        width="100">
      </el-table-column>
      <el-table-column
        label="图片"
        width="180">
        <template slot-scope="scope">
          <img :src=scope.row.image alt="加载失败" style="height: 100px; width: 160px; border-radius: 4px">
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
        width="600">
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
            @click="handleEdit">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HotTopicManagement',
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.data-map {
  background-color: #1ccdae;
  padding: 10px;
  border-radius: 8px;
}

.add-btn {
  padding: 6px 15px;
  width: 80px;
  margin: 0 0 10px 8px;
  tab-size: 20px;
}

.add-btn:hover {
  color: white;
  font-weight: 500;
  background-color: #e82c5f;
}
</style>
