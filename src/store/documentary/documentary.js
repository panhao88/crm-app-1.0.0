import Vue from 'vue'
import api from '../../http/api'
import dayjs from 'dayjs'

export default {
    namespaced: true,
    state: {
        genlist: [], //跟单列表
        totalRow: '', //跟单总数
        setlist: [], //跟单详情列表
        statelist:[], //跟单方式
        way:[] //跟单状态
    },
    mutations: {
        //跟单列表
        setgenlist(state, data) {
            state.genlist = data
        },
        //跟单总数
        settotalRow(state, data) {
            state.totalRow = data
        },
        //跟单详情列表
        setthedetalils(state, data) {
            state.setlist = data
        },
        //跟单方式
        setDocumenway(state,data){
            state.statelist = data
        },
        //跟单状态
        setliststate(state,data){
            state.way = data
        },
        //跟单对象

    },
    actions: {
        //跟单列表
        async documentary({ commit }, { id, name, pageNum, pageSize }) {
            try {
                let res = await api.documentary({ id, name, pageNum, pageSize })
                //   console.log(res,"跟单列表")
                if (res.code === 200) {
                    commit('setgenlist', res.list)
                    commit('settotalRow', res.totalRow)
                }
            } catch (err) {
                console.log(err)
            }
        },
        //跟单详情列表
        async thedetalils({ commit }, { id }) {
            try {
                let res = await api.thedetalils({ id })
                console.log(res, "跟单详情列表")
                if (res.code === 200) {
                    commit('setthedetalils', res.list)
                    res.list.map((item, index) => {
                        item.entryTime = dayjs(item.createAt).format("YYYY-MM-DD");
                        Vue.set(item, "flag", false);
                    });
                }
            } catch (err) {
                console.log(err)
            }
        },
        //跟单方式
        async Documenway({commit},){
            try{
                let res = await api.Documenway()
                console.log(res,"跟单方式")
               commit('setDocumenway',res.list)
            }catch (err){
                console.log(err)
            }
        },
        //跟单状态
        async liststate ({commit},){
            try{
                let res = await api.liststate()
                console.log(res,"跟单状态")
                commit('setliststate',res.list)
            }catch(err){
                console.log(err)
            }
        },
        //跟单对象
        async listobject({commit},){
            try{
                let res = await api.listobject()
                console.log(res,"跟单对象")
            }catch(err){
                console.log(err)
            }
        }
    },
}