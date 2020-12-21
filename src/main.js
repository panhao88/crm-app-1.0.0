import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import api from './http/api'
import 'vant/lib/index.css';
import dayjs from 'dayjs'
import VueParticles from 'vue-particles'  
import touch from 'vue-directive-touch';

Vue.use(touch);
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
