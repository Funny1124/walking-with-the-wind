<template>
  <div class="data-map">
    <el-button round @click="AddFormVisible=true" class="add-btn">添加
    </el-button>
    <el-table
      :data="$store.state.shop_item"
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
    <!--    新增弹窗-->
    <el-dialog title="新增" :visible.sync="AddFormVisible">
      <el-form :model="temp_item">
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="temp_item.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :file-list="file_list"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
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
        <el-button @click="AddFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="AddFormVisible = false; handleAdd(temp_item)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShopManagement',
  data () {
    return {
      file_list: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      dialogFormVisible: false,
      AddFormVisible: false,
      formLabelWidth: '300px',
      index: '',
      row: '',
      temp_item: {
        type: ' ',
        region: ' ',
        image: ' ',
        description: ' ',
        price: ' '
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
    handleAdd (item) {
      this.$store.commit('add_shop_item', item)
    },
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.temp_item.image = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    }
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
  background-color: #ee3f4d;
}
</style>
