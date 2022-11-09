import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ElementUI from 'element-ui'
// 引入echarts文件
import * as echarts from 'echarts'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css'

import NavBar from '@/components/NavBar'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('nav-bar', NavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
