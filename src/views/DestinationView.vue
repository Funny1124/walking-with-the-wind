<template>
  <div>
    <nav-bar></nav-bar>
    <div class="search">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="请输入目的地，如：桂林电子科技大学" aria-label="Search">
        <button class="btn " type="submit">Search</button>
      </form>
    </div>
    <div class="item">
      <el-tag type="info" class="tag" v-for="(item, index) in $store.state.dest_item" :key="index">
        <router-link to="/dest-detail" class="link">{{ item.city }}</router-link>
      </el-tag>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DestinationView',
  components: {}
}
</script>

<style lang="less" scoped>
.search {
  margin: 5% 20% 2%;
  padding: 2% 5%;
  background-color: #1ccdae;
  border-radius: 8px;

  input {
    height: 50px;
  }

  button {
    width: 150px;
    padding: 5px 25px;
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
  }

  button:hover {
    background-color: #c2f313;
  }
}

.item {
  margin: 0 20% 2%;
  border-radius: 8px;

  .tag {
    background-color: #dadada;
    height: 40px;
    margin: 5px 5px;
    padding: 4px 15px;
    font-size: 28px;
    color: black;
    transition: all 0.3s ease 0s;
  }

  .tag:hover {
    background-color: #0fb07f;
  }

  .link {
    text-decoration: none;
    color: #454545;
    transition: all 0.3s ease 0s;
  }
  .link:hover{
    color: white;
  }
}
</style>
