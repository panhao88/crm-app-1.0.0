// api.js用来封装所有的请求
import service from './index'
<<<<<<< HEAD

=======
// import request from '@/utils/request';
>>>>>>> 9768ab3aa21d177de27ec0de9446be7b4763eacb
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
    if(marjon){
      return service.get(`/api/customer/customerPage?accountId=${id}&pageNum=${currentPage}&pageSize=${pageSize}&name=${value}&state=${marjon}`)
    }else{
      return service.get(`/api/customer/customerPage?accountId=${id}&pageNum=${currentPage}&pageSize=${pageSize}&name=${value}`)
    }
  },
  //3.客户详情页
  details({id}) {
    return service.get(`/api/customer/findCustomerById?customerId=${id}`)
  },
  // 4.获取客户公海
  customerseas({name,pageNum,pageSize}){
    return service.get(`/api/customer/seasCustomerPage?name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
  },
  // 5.客户联系人
  Thecontact(id){
    return service.get(`/api/customer/findContactsByCustomerId?customerId=${id}`)
  }
}
