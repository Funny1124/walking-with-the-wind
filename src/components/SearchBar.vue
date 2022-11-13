<template>
  <div class="search-bar">
    <b-card no-body>
      <b-tabs v-model="tabIndex" card align="center" fill="fill" pills="pills">
        <b-tab title="看攻略" :title-link-class="linkClass(0)">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="请输入关键词，如：自驾" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><i class="el-icon-search"></i></button>
          </form>
        </b-tab>
        <b-tab title="做行程" :title-link-class="linkClass(1)">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="出发地" aria-label="Search">
            <input class="form-control me-2" type="search" placeholder="目的地" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><i class="el-icon-search"></i></button>
          </form>
        </b-tab>
        <b-tab title="特价民宿" :title-link-class="linkClass(2)">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="请输入关键词，如：风景好" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><i class="el-icon-search"></i></button>
          </form>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-success', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  position: absolute;
  top: 23%;
  width: 40%;
  left: 30%;
  //text-align: center;
  ////background-color: aquamarine;
  //background-color: rgba(37, 193, 132, 0.44);
  border-radius: 10px;
}

.search {
  padding: 0 5%;
}
button {
  width: 100px;
  background: linear-gradient(#6dd27c,#1ccdae);
}
</style>
