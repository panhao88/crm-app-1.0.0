import axios from "axios"
import router from "../router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { Toast } from 'vant';


// 判断当前环境是生产环境还是开发环境
// process.env.NODE_ENV的值决定当前环境
// production为生产环境 development为开发环境1
const isProduction = process.env.NODE_ENV === "production"

// 创建axios配置对象
const service = axios.create({
  timeout: 10000,
  baseURL: isProduction ? 'http://192.168.10.9' : '/api'
  // baseURL: isProduction ? 'http://211.149.157.5:86' : '/api'
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  }, err => {
    if (err.response && err.response.status) {
      let status = err.response.status
      if (status === 401) {
        Toast.fail('登录过期,请重新登录')
        router.push('/login')
      }
      if (status === 404) {
        Toast.fail('请求接口路径错误')
      }
      if (status === 500) {
        Toast.fail('服务器出错')
      }
      if (status === 503) {
        Toast.fail('服务器正在维护')
      }
    }
    return Promise.reject(err)
  }
)

export default service