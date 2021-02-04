import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import api from './http/api'
import 'vant/lib/index.css';
import dayjs from 'dayjs'
import VueParticles from 'vue-particles'
import VueTouch from 'vue-touch'
//进入页面时头部
router.afterEach((to, from) => {
  window.scrollTo(0,0);
})
//手机左右滑动插件
Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
Vue.use(VueParticles)
Vue.prototype.$api = api
Vue.prototype.$dayjs = dayjs
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
