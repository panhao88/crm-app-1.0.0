import Vue from 'vue'
import api from '../../http/api'
import { Toast } from 'vant';
import dayjs from 'dayjs'

export default {
    // 开启命名空间,这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        listing: [], //用户列表数据
        total: '',   //客户列表总条数
        details: {},  //客户详情
        listseas: [],  //公海列表
        totalRow: '',//公海总条数
        contact: [] ,//客户联系人
        loveconsulting:[],//咨询方式
        lreosource:[] , //信息来源
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
        },
        // 客户联系人
        setcontact(state, data) {
            state.contact = data
        },
        //咨询方式
        setconsulting(state,data){
            state.loveconsulting = data
        },
        //信息来源
        setsource(state,data){
            state.lreosource = data
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
                    let minute = 1000 * 60; //分钟
                    let hour = minute * 60; //小时
                    let day = hour * 24; //天
                    let month = day * 30; //月
                    let nian = day * 365 //年
                    res.list.map((item) => {
                        Vue.set(item, "flag", false);
                        item.time = dayjs(item.createAt).valueOf()
                        let now = Date.now();
                        let diffValue = (now - item.time);
                        let monthC = diffValue / month;
                        let weekC = diffValue / (7 * day);
                        let dayC = diffValue / day;
                        let hourC = diffValue / hour;
                        let minC = diffValue / minute;
                        let year = diffValue / nian
                        Vue.set(item, "minC", minC)
                        Vue.set(item, "hourC", hourC)
                        Vue.set(item, "dayC", dayC)
                        Vue.set(item, "weekC", weekC)
                        Vue.set(item, "monthC", monthC)
                        Vue.set(item, "year", year)
                    });
                }
            } catch (err) {
                console.log(err)
            }
        },
        //数据详情页
        async setter({ commit }, { id }) {
            try {
                let res = await api.setter({ id })
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
                let res = await api.Thecontact({ id })
                commit('setcontact', res.list)
                console.log(res, "联系人")
            } catch (err) {
                console.log(err)
            }
        },

        //获取客户公海
        async customerseas({ commit }, { name, pageNum, pageSize }) {
            try {
                let res = await api.customerseas({ name, pageNum, pageSize })
                console.log(res, "11客户公海")
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
                if (res.code === 200) {
                    Toast.success(res.msg)
                } else if (res.code === 401) {
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
                if (res.code === 200) {
                    Toast.success(res.msg)
                } else if (res.code === 401) {
                    Toast.success(res.msg)
                }
                console.log(res, "获取公海信息")
            } catch (err) {
                console.log(err)
            }
        },
        //添加客户信息
        async listadd({dispatch},{accountId,name,visitortype,modelId,mobile,wechatCode,qqCode,sex,age,sourceId,searchTerms}){
            try{
                let res = await api.listadd({accountId,name,visitortype,modelId,mobile,wechatCode,qqCode,sex,age,sourceId,searchTerms})
                if(res.code === 200){
                    Toast.success(res.msg)
                    // dispatch("recommend",{
                    //     id
                    // })
                }else if(res.code === 401){
                    Toast.success(res.msg)
                }
                console.log(res,"添加客户列表777")
            }catch(err){
                console.log(err)
            }
        },
        //咨询方式
        async lconsulting({commit},){
            try{
                let res = await api.lconsulting()
                commit('setconsulting', res.list)
                console.log(res.list,"咨询方式")
            }catch(err){
                console.log(err)
            }
        },
        //信息来源
        async source({commit}){
            try{
                let res = await api.source()
                commit('setsource', res.list)
                console.log(res.list,"信息来源")
            }catch(err){
                console.log(err)
            }
        },
        //添加联系人
        async Addcntacts({dispatch},{accountId,customerId,name,mobile}){
            try{
                let res = await api.Addcntacts({accountId,customerId,name,mobile})
                if(res.code === 200){
                    Toast.success(res.msg)
                }else if(res.code === 401){
                    Toast.success(res.msg)
                }
                console.log(res,"添加联系人")
            }catch(err){
                console.log(err)
            }
        }
    }
}