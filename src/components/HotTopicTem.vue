<template>
  <div>
    <main>
      <section class="py-5 text-center container">
        <h2>热门游记-话题</h2>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="(item, index) in $store.state.recommend_item" :key="index">
              <div class="card shadow-sm" style="height: 380px">
                <img :src="item.image" height="260px" :alt="item.image" style="border-radius: 8px">
                <div class="card-body">
                  <p class="card-text" style="text-indent: 2em">【{{ item.type }}】{{ item.description }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">查看</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="more" style="">
          <a href="https://bbs.qyer.com/">
            <button>查看更多游记</button>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HotTopicTem',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
h2 {
  font-size: 36px;
  text-align: center;
}

.more {
  text-align: center;
  margin-top: 20px;

  button {
    font-size: 24px;
    padding: 5px 25px;
    background-color: #6cd27d;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: rgb(238, 229, 62);
  }

}
</style>
