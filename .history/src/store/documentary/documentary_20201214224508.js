import Vue from 'vue'
import api from '../../http/api'
import { Toast } from 'vant';

export default {
    namespaced: true,
    state: {
        genlist: [], //跟单列表
        totalRow: '', //跟单总数
        setlist: [], //跟单详情列表
        statelist:[], //跟单方式
        way:[], //跟单状态
        Documentary :[], //跟单对象
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
        setdui(state,data){
            state.Documentary  = data
        }
    },
    actions: {
        //跟单列表
        async documentary({ commit }, { id, name, pageNum, pageSize }) {
            try {
                let res = await api.documentary({ id, name, pageNum, pageSize })
                  console.log(res,"跟单列表")
                if (res.code === 200) {
                    commit('setgenlist', res.list)
                    commit('settotalRow', res.totalRow)
                    res.list.map((item, index) => {
                        Vue.set(item, "flag", false);
                    });
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
              
                    commit('setthedetalils', res.list)
                    res.list.map((item, index) => {
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
        async listobject({commit},{id}){
            try{
                let res = await api.listobject({id})
                console.log(res,"跟单对象")
                commit('setdui',res.list)
            }catch(err){
                console.log(err)
            }
        },
        // 文件上传
        async upload({dispatch},{file,accountId}){
            console.log(file,accountId,"222")
            try{
                let res = await api.upload({file,accountId})
                console.log(res,"文件上传")
            }catch(err){
                console.log(err)
            }
        },
        //跟单删除
        async Theend({dispatch},{customerId,accountId,id}){
            try{
                let res = await api.Theend({customerId,accountId,id})
                if(res.code === 200){
                    Toast.success(res.msg)  
                }else if(res.code === 401){
                    Toast.success(res.msg)  
                }
                console.log(res,"文件删除")
            }catch(err){
                console.log(err)
            }
        },
        //跟单数据添加
        async addseve({dispatch},{ 
            customerId,
            modeId,
            statusId,
            lastAt,
            remark,
            accountId,
            type,
            contactsId,}){
                try{
                    let res = await api.addseve({
                        customerId,
                        modeId,
                        statusId,
                        lastAt,
                        remark,
                        accountId,
                        type,
                        contactsId,
                    })
                    console.log(res,"跟单添加")
                }catch(err){
                    console.log(err)
                }
            }
    },
}