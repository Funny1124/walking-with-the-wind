<template>
  <div class="search-bar">
    <b-card no-body>
      <b-tabs v-model="tabIndex" card align="center" fill="fill">
        <b-tab title="看攻略" :title-link-class="linkClass(0)">
          <div class="search">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </b-tab>
        <b-tab title="做行程" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
        <b-tab title="特价酒店" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
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
</style>
