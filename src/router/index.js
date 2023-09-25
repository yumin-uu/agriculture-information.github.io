import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 创建 路由数组
const routes = [
  // 404
  {
    path: '/404',
    component: () => import('@/views/not-found/NotFound.vue')
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },

  // 首页
  {
    path: '/',
    component: () => import('@/views/home/HomeView.vue'),
    children: [
      // 默认子页面 home
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/TopicList.vue')
      },
      // 文章详情页
      {
        path: '/topic/:id',
        name: 'topic',
        component: () => import('@/views/topic/TopicDetail.vue')
      },
      // 人物主页 (用户信息页)
      {
        path: '/user/:loginname',
        name: 'user',
        component: () => import('@/views/center/UserCenter.vue')
      },
      // 根据动态参数 type 跳转主页下数据列表
      {
        path: ':type',
        name: 'topicList',
        component: () => import('@/views/home/TopicList.vue')
      },
    ]
  },
  // 404
  {
    path: '/*',
    redirect: '/404'
  },
]

// 创建路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由导航守卫 (路由前置守卫)

// 登录后才能访问所有页面
// 1．直接访问首页 失败，提示请登录，直接跳转到登录页面
// 2．登录页成功登录，然后可正常访问其他页面
// 3. header 内新增 退出按钮，实现退出功能
// 4．退出后 访问首页 直接提示请登录，直接跳转到登录页面
const $message = Vue.prototype.$message
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
    $message({
      message: '没有登录，需要登录页登录',
      type: 'warning'
    })
  }
})

export default router
