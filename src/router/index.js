import Vue from 'vue'
import VueRouter from 'vue-router'
// @/ 表示 src/

Vue.use(VueRouter)

// 创建 路由数组
const routes = [

]

// 创建路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
