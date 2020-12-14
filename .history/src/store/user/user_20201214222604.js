import Vue from 'vue'
import api from '../../http/api'
import { Toast } from 'vant';

export default {
    // 开启命名空间,这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        listing: [], //用户列表数据
        total: '',   //客户列表总条数
        details: {},  //客户详情
        listseas: [],  //公海列表
        totalRow: ''   //公海总条数
    },
    mutations: {
        //客户数据列表
        setlisting(state, data) {
            state.listing = data
        },
        //客户数据总数
        settotal(state, data) {
            state.total = data
        },
        //客户详情
        setdetails(state, data) {
            state.details = data
        },
        //公海列表
        setcustomerseas(state, data) {
            state.listseas = data
        },
        //公海总数
        settotalRow(state, data) {
            state.totalRow = data
        }
    },
    // 获取客户列表
    actions: {
        async recommend({ commit }, { id, currentPage, pageSize, value, marjon }) {
            try {
                let res = await api.recommend({
                    id, currentPage, pageSize, value, marjon
                })
                console.log(res, "列表");
                if (res.code === 200) {
                    commit('setlisting', res.list)
                    commit('settotal', res.totalRow)
                    res.list.map((item, index) => {
                        Vue.set(item, "flag", false);
                    });
                }
            } catch (err) {
                console.log(err)
            }
        },
        async recommend111({ commit }, { id, currentPage, pageSize, mobile, marjon }) {
            try {
                let res = await api.recommend111({
                    id, currentPage, pageSize, mobile, marjon
                })
                console.log(res, "列表");
                if (res.code === 200) {
                    commit('setlisting', res.list)
                    commit('settotal', res.totalRow)
                    res.list.map((item, index) => {

                        Vue.set(item, "flag", false);
                    });
                }
            } catch (err) {
                console.log(err)
            }
        },
        //数据详情页
        async setter({ commit }, { id }) {
            try {
                let res = await api.setter(id)
                console.log(res.data, "客户详情")
                if (res.code === 200) {
                    commit('setdetails', res.data)
                }
            } catch (err) {
                console.log(err)
            }
        },

        //客户联系人
        async Thecontact({ commit }, { id }) {
            try {
                let res = await api.Thecontact(id)
                console.log(res, "联系人")
            } catch (err) {
                console.log(err)
            }
        },

        //获取客户公海
        async customerseas({ commit }, { name, pageNum, pageSize }) {
            try {
                let res = await api.customerseas({ name, pageNum, pageSize })
                console.log(res, "客户公海")
                if (res.code === 200) {
                    res.list.map((item, index) => {
                        Vue.set(item, "flag", false);
                    });
                    commit('setcustomerseas', res.list)
                    commit('settotalRow', res.totalRow)
                }
            } catch (err) {
                console.log(err)
            }
        },
        //放入公海
        async intoSeasCustomer({ dispatch }, { ids, accountId }) {
            try {
                let res = await api.intoSeasCustomer({ ids, accountId })
                if(res.code === 200){
                    Toast.success(res.msg)
                }else if(res.code === 401){
                    Toast.success(res.msg)
                }
                console.log(res, "放入公海")
            } catch (err) {
                console.log(err)
            }
        },
        //获取公海信息
        async obtain({ dispatch }, { ids, accountId }) {
            try {
                let res = await api.obtain({ ids, accountId })
                if()
                console.log(res, "获取公海信息")
            } catch (err) {
                console.log(err)
            }
        }
    }
}