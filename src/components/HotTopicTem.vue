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
                  <p class="card-text" style="text-indent: 2em">【{{item.type}}】{{item.description}}</p>
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
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'HotTopicTem',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 36px;
  text-align: center;
}
</style>
