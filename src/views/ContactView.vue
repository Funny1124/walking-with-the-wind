<template>
  <div style="padding-top: 10px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-col :xs="6" :sm="4">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="邮箱">
        <el-col :xs="6" :sm="4">
          <el-input v-model="form.email"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="信息">
        <el-col :xs="12" :sm="10">
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入内容"
            v-model="form.desc">
          </el-input>
          <!--          <el-input type="textarea"  v-model="form.desc"></el-input>-->
        </el-col>
      </el-form-item>

      <el-form-item label="发送者">
        <el-radio-group v-model="form.sender">
          <el-radio label="个人"></el-radio>
          <el-radio label="公司"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" round style=" padding-left: 30px;padding-right: 30px ">发送
        </el-button>
        <!--      <el-button>取消</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data () {
    return {
      form: {
        name: '',
        email: '',
        sender: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }

}
</script>

<style scoped>

</style>
