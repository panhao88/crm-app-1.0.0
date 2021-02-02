import Vue from 'vue'
import api from '../../http/api'
import { Toast } from 'vant';
import dayjs from 'dayjs'
import router from "../../router"

export default {
    // 开启命名空间,这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        listing: [], //用户列表数据
        total: 0,   //客户列表总条数
        details: {},  //客户详情
        listseas: [],  //公海列表
        totalRow: '',//公海总条数
        contact: [],//客户联系人
        loveconsulting: [],//咨询方式
        lreosource: [], //信息来源
        Theeditor: {},//编辑客户信息
        Source: [],  //来源
        salesmanlist: [],//录入员，业务员
        campuslist: [],//校区信息
        teamlist: [], //团队信息
        typelist: [],//客户类型
        internationalist:[],//客户公海数据列表
        Seatotal:0, //客户公海数据总数
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
        setconsulting(state, data) {
            state.loveconsulting = data
        },
        //信息来源
        setsource(state, data) {
            state.lreosource = data
        },
        //编辑客户详情
        setlpmodify(state, data) {
            state.Theeditor = data
        },
        //客户来源
        Source_information(state, data) {
            state.Source = data
        },
        //录入员，业务员
        setsalesman(state, data) {
            state.salesmanlist = data
        },
        //校区信息
        setCampus_information(state, data) {
            state.campuslist = data
        },
        //团队信息
        setTeam_information(state, data) {
            state.teamlist = data
        },
        //客户类型
        setCustomer_type(state, data) {
            state.typelist = data
        },
        //客户公海数据列表
        setinternationa(state,data){
            state.internationalist =data
        },
        //客户公海数据总数
        internationawotal(state,data){
            state.Seatotal = data
        }
    },
    // 获取客户列表
    actions: {
        async recommend({ commit }, { accountId, serarchPara, pageNum, pageSize,name }) {
            try {
                let res = await api.recommend({
                    accountId, serarchPara, pageNum, pageSize,name
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
                        item.time = dayjs(item.lastAt).valueOf()
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
        //客户来源
        async Customer_source({ commit }) {
            try {
                let res = await api.Customer_source()
                commit("Source_information", res)
                console.log(res, "客户来源")
            } catch (err) {
                console.log(err)
            }
        },
        //业务员，录入员
        async salesman({ commit }) {
            try {
                let res = await api.salesman()
                commit("setsalesman", res)
                console.log(res, "业务员，录入员")
            } catch (err) {
                console.log(err)
            }
        },
        //校区信息
        async Campus_information({ commit }) {
            try {
                let res = await api.Campus_information()
                commit("setCampus_information", res)
                console.log(res, "校区信息")
            } catch (err) {
                console.log(err)
            }
        },
        //团队信息
        async Team_information({ commit }) {
            try {
                let res = await api.Team_information()
                commit("setTeam_information", res)
                console.log(res, "团队信息")
            } catch (err) {
                console.log(err)
            }
        },
        //客户类型
        async Customer_type({ commit }) {
            try {
                let res = await api.Customer_type()
                commit("setCustomer_type", res)
                console.log(res, "客户类型")
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
        //放入公海
        async intoSeasCustomer({ dispatch }, { ids, accountId, pageNum, pageSize, }) {
            try {
                let res = await api.intoSeasCustomer({ ids, accountId })
                if (res.code === 200) {
                    Toast.success(res.msg)
                    dispatch("recommend", {
                        accountId, pageNum, pageSize,
                    })
                } else if (res.code === 401) {
                    Toast.fail(res.msg)
                }
                console.log(res, "放入公海")
            } catch (err) {
                console.log(err)
            }
        },
        //获取公海信息
        async obtain({ dispatch }, { ids, accountId ,pageNum, pageSize}) {
            try {
                let res = await api.obtain({ ids, accountId })
                if (res.code === 200) {
                    Toast.success(res.msg)
                    dispatch("getcustomerSeasPage",{
                        pageNum, pageSize,accountId
                    })
                } else if (res.code === 401) {
                    Toast.fail(res.msg)
                }
                console.log(res, "获取公海信息")
            } catch (err) {
                console.log(err)
            }
        },
        //添加客户信息
        async listadd({ dispatch }, { accountId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms }) {
            try {
                let res = await api.listadd({ accountId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms })
                if (res.code === 200) {
                    Toast.success(res.msg)
                    router.push("/Customer")
                } else if (res.code === 401) {
                    Toast.fail(res.msg)
                } else if (res.code === 404) {
                    Toast.fail(res.msg)
                }
                dispatch("recommend", {
                    accountId
                })
                console.log(res, "添加客户列表777")
            } catch (err) {
                console.log(err)
            }
        },
        //咨询方式
        async lconsulting({ commit },) {
            try {
                let res = await api.lconsulting()
                commit('setconsulting', res.list)
                console.log(res.list, "咨询方式")
            } catch (err) {
                console.log(err)
            }
        },
        //客户信息来源
        async source({ commit }) {
            try {
                let res = await api.source()
                commit('setsource', res.list)
                console.log(res.list, "信息来源")
            } catch (err) {
                console.log(err)
            }
        },
        //添加联系人
        async Addcntacts({ dispatch }, { accountId, customerId, name, mobile, pageNum, pageSize, serarchPara }) {
            try {
                let res = await api.Addcntacts({ accountId, customerId, name, mobile })
                if (res.code === 200) {
                    Toast.success(res.msg)
                    dispatch("recommend", {
                        accountId, serarchPara, pageNum, pageSize,
                    })
                } else if (res.code === 401) {
                    Toast.fail(res.msg)
                }
                console.log(res, "添加联系人")
            } catch (err) {
                console.log(err)
            }
        },
        //编辑客户信息
        async Modify({ commit }, { accountId, customerId }) {
            try {
                let res = await api.Modify({ accountId, customerId })
                if (res.code === 200) {
                    commit('setlpmodify', res.data)
                }
                console.log(res, "编辑")
            } catch (err) {
                console.log(err)
            }
        },
        //保存客户信息
        async storage({ dispatch }, { accountId, customerId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms }) {
            try {
                let res = await api.storage({ accountId, customerId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms })
                if (res.code === 200) {
                    Toast.success(res.msg)
                    router.push("/Customer")
                } else if (res.code === 401) {
                    Toast.success(res.msg)
                }
                dispatch("recommend", {
                    accountId
                })
                console.log(res, "保存成功")
            } catch (err) {
                console.log(err)
            }
        },
        //获取客户公海列表
        async getcustomerSeasPage({ commit }, {accountId, pageNum, pageSize,name }) {
            try {
                    let res = await api.getcustomerSeasPage({accountId, pageNum, pageSize,name })
                    res.list.map(item => {
                        Vue.set(item, "flag", false);
                    })
                    commit("setinternationa",res.list)
                    commit("internationawotal",res.totalRow)
                console.log(res, "客户公海列表")
            } catch (err) {
                console.log(err)
            }
        }
    }
}