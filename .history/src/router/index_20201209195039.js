
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    //底部导航栏
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        }
      },
      {
        path: 'News',
        name: 'News',
        component: () => import('../views/News/news.vue'),
        meta: {
          title: '消息',
        }
      },
      {
        path: 'MailList',
        name: 'MailList',
        component: () => import('../views/MailList/maillist.vue'),
        meta: {
          title: '通讯录',
        }
      },
    ]
  },
  // 登录
  {
    path: "/Login",
    name: "Login",
    component: () => import('../views/Login/login.vue')
  },
  // 客户管理
  {
    path: "/Customer",
    name: "Customer",
    component: () => import('../views/Customer/customer.vue')
  },
  // 跟单管理
  {
    path: "/DocumenTary",
    name: "DocumenTary",
    component: () => import('../views/DocumenTary/documentary.vue')
  },
  //到访管理
  {
    path: "/Arrive",
    name: "Arrive",
    component: () => import('../views/Arrive/arrive.vue')
  },
  // 校区合同管理
  {
    path: "/Campus",
    name: "Campus",
    component: () => import('../views/Campus/campus.vue')
  },
  // 售后管理
  {
    path: "/Aftersale",
    name: "Aftersale",
    component: () => import('../views/Aftersale/Aftersale.vue')
  },
  // 财务管理
  {
    path: "/Finance",
    name: "Finance",
    component: () => import('../views/Finance/Finance.vue')
  },
  // 客户公海
  {
    path: "/InternaTionalWaters",
    name: "InternaTionalWaters",
    component: () => import('../views/InternaTionalWaters/internationalwaters.vue')
  },
  // 回收站
  {
    path: "/RecycLebin",
    name: "RecycLebin",
    component: () => import('../views/RecycLebin/recycLebin.vue')
  },
  // 客户名片夹
  {
    path: "/BusinessCard",
    name: "BusinessCard",
    component: () => import('../views/BusinessCard/businesscard.vue')
  },
  // 客户生日提醒
  {
    path: "/BirthDay",
    name: "BirthDay",
    component: () => import('../views/BirthDay/birthday.vue')
  },
  //校区专业管理
  {
    path: "/AddUser",
    name: "AddUser",
    component: () => import('../views/AddUser/addUser.vue')
  },
  // 内部通讯录
  {
    path: "/User",
    name: "User",
    component: () => import('../views/User/User.vue')
  },
  //内部公告
  {
    path: "/Ment",
    name: "Ment",
    component: () => import('../views/Ment/Ment.vue')
  },
  // 知识库
  {
    path: "/Visit",
    name: "Visit",
    component: () => import('../views/Visit/visit.vue')
  },
  // 工作报告
  {
    path: "/Indic",
    name: "Indic",
    component: () => import('../views/Indic/indic.vue')
  },
  // 文件管理
  {
    path: "/Username",
    name: "Username",
    component: () => import('../views/Username/Username.vue')
  },
  // 到访工单管理
  {
    path: "/Heel",
    name: "Heel",
    component: () => import('../views/Heel/Heel.vue')
  },
  //  更新版本
   {
    path:"/Genxin",
    name:"Genxin",
    component: () => import('../views/Genxin/genxin.vue')
  },
  // 员工管理
  {
    path: "/Update",
    name: "Update",
    component: () => import('../views/Update/update.vue')
  },
  // 登录日志
  {
    path: "/InviTes",
    name: "InviTes",
    component: () => import('../views/InviTes/invites.vue')
  },
  // 快递查询
  {
    path: "/Consult",
    name: "Consult",
    component: () => import('../views/Consult/consult.vue')
  },
  // 帮助中心
  {
    path: "/Appfinance",
    name: "Appfinance",
    component: () => import('../views/Appfinance/appfinance.vue')
  },
  //详情页
  {
    path: "/Details",
    name: "Details",
    component: () => import('../views/Details/details.vue')
  },
  //关于
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

]
const isPro = process.env.NODE_ENV === 'production'
const router = new VueRouter({
  mode: isPro ? 'hash':'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  let user = JSON.parse(localStorage.getItem('user'))
  if (to.path === '/Login') next()
  else user ? next() : next('/Login')
})



export default router
