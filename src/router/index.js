import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "about" */ '../views/WelcomeView')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView')
  },
  {
    path: '/destination',
    name: 'destination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DestinationView')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView')
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView'),
    redirect: '/admin/RecommendManagement',
    children: [
      {
        path: 'RecommendManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/RecommendManagement')
      },
      {
        path: 'ShopManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/ShopManagement')
      },
      {
        path: 'HotTopicManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/HotTopicManagement')
      },
      {
        path: 'DataAnalytics',
        component: () => import(/* webpackChunkName: "about" */ '../views/DataAnalyticsView')
      }

      // 用户详情页的路由规则
      // { path: 'userinfo/:id', component: UserDetail, props: true }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
