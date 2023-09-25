import Vue from 'vue'
import App from './App.vue'
import './plugins/element'  // 要先引入 element 再引 路由 (路由中要使用)
import router from './router/index'
import store from './store'
import './assets/style.less'
import '@/components/index'
import './plugins/moment'
import './filters/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
