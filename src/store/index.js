import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import documentary from './documentary/documentary'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user ,//用户列表
    documentary,//跟单列表
  }
})

// ==========
// export default {
//   namespaced: true,
//   state:{

//   },
//   mutations:{

//   },
//   actions:{

//   } 
// }
