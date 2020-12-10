// api.js用来封装所有的请求
import service from './index'
export default {
  // 1.登录
  Signin(
    { userName,
      password }
  ) {
    return service.get(`/api/login/doLogin?userName=${userName}&password=${password}`)
  },
  // 2.客户列表
  recommend({id, currentPage, pageSize, value,marjon}) {
      return service.get(`/api/customer/customerPage?accountId=${id}&pageNum=${currentPage}&pageSize=${pageSize}&name=${value}&state=${marjon}`)
  },
  //3.客户详情页
  setter(id) {
    return service.get(`/api/customer/findCustomerById?customerId=${id}`)
  },
  // 4.获取客户公海
  customerseas({name,pageNum,pageSize}){
    return service.get(`/api/customer/seasCustomerPage?name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
  },
  // 5.客户联系人
  Thecontact(id){
    return service.get(`/api/customer/findContactsByCustomerId?customerId=${id}`)
  },
  //6.放入公海
  intoSeasCustomer({ids,accountId}){
    return service.get(`/api/customer/intoSeasCustomer?ids=${ids}&accountId=${accountId}`)
  },
  //7跟单列表
  documentary({id,name,pageNum,pageSize}){
    return service.get(`/api/follow/followPage?accountId=${id}&name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
  },
  //8.客户跟单详情列表
  thedetalils({id}){
    return service.get(`/api/follow/findFollowByCustomerId?customerId=${id}`)
  },
  //9.跟单方式
  Documenway(){
    return service.get(`/api/follow/followModel`)
  },
  //10.跟单状态
  liststate(){
    return service.get(`/api/follow/followStatus`)
  },
  //11.跟单对象
  listobject(){
    return service.get(`/api/follow/followContacts`)
  }
}
