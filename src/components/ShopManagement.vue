<template>
  <div>
    <el-button
      type="primary"
      size="big"
      @click="handleAdd;dialogFormVisible=true">添加
    </el-button>

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
            @click="setTemp_item(scope.$index, scope.row) ;dialogFormVisible=true">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form :model="temp_item">
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="temp_item.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-input v-model="temp_item.image" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区" :label-width="formLabelWidth">
          <el-input v-model="temp_item.region" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="temp_item.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="temp_item.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;handleEdit(index,temp_item)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShopManagement',
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '300px',
      index: '',
      row: '',
      temp_item: {
        type: '',
        region: '',
        image: '',
        description: '',
        price: ''
      }
    }
  },
  methods: {
    setTemp_item (index, row) {
      console.log(index, row.type)
      this.index = index
      this.row = row
      this.temp_item.type = row.type
      this.temp_item.region = row.region
      this.temp_item.image = row.image
      this.temp_item.description = row.description
      this.temp_item.price = row.price
    },
    handleEdit (index, item) {
      this.$store.commit('edit_shop_item', [index, item])
      this.$forceUpdate()
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$store.commit('delete_shop_item', index)
    },
    handleAdd () {
      this.$store.commit('add_shop_item', this.temp_item)
    }
  }
}
</script>
