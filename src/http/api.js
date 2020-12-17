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
  recommend({ id, currentPage, pageSize, value,marjon }) {
      return service.get(`/api/customer/customerPage?accountId=${id}&pageNum=${currentPage}&pageSize=${pageSize}&serarchPara=${value}&state=${marjon}`)
  },
  //3.客户详情页
  setter({id}) {
    return service.get(`/api/customer/findCustomerById?customerId=${id}`)
  },
  // 4.获取客户公海
  customerseas({ name, pageNum, pageSize }) {
    return service.get(`/api/customer/seasCustomerPage?name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
    // return service.post("/api/customer/seasCustomerPage",{
    //   name, pageNum, pageSize 
    // })
  },
  // 5.客户联系人
  Thecontact({id}) {
    return service.get(`/api/customer/findContactsByCustomerId?customerId=${id}`)
    // return service.post("/api/customer/findContactsByCustomerId",{id})
  },
  //6.放入公海
  intoSeasCustomer({ ids, accountId }) {
    return service.get(`/api/customer/intoSeasCustomer?ids=${ids}&accountId=${accountId}`)
  },
  //7跟单列表
  documentary({ id, name, pageNum, pageSize }) {
    return service.get(`/api/follow/followPage?accountId=${id}&name=${name}&pageNum=${pageNum}&pageSize=${pageSize}`)
  },
  //8.客户跟单详情列表
  thedetalils({ customer }) {
    return service.get(`/api/follow/findFollowByCustomerId?customerId=${customer}`)
  },
  //9.跟单方式
  Documenway() {
    return service.get(`/api/follow/followModel`)
  },
  //10.跟单状态
  liststate() {
    return service.get(`/api/follow/followStatus`)
  },
  //11.跟单对象
  listobject({ id }) {
    return service.get(`/api/follow/followContacts?customerId=${id}`)
  },
  //12.文件上传
  // {headers:{"Content-Type":"multipart/form-data"}}
  upload({ file, accountId }) {
    return service.post('/api/annex/upload', { file, accountId },)
  },
  //13.结束跟单
  Theend({ customerId, accountId, id }) {
    return service.get(`/api/follow/delFollow?customerId=${customerId}&accountId=${accountId}&ids=${id}`)
  },
  //14.跟单数据添加
  addseve({
    customerId,
    modeId,
    statusId,
    lastAt,
    remark,
    accountId,
    type,
    contactsId, }) {
    return service.get(`/api/follow/addFollow?customerId=${customerId}&modeId=${modeId}&statusId=${statusId}&lastAt=${lastAt}
    &remark=${remark}&accountId=${accountId}&type=${type}&contactsId=${contactsId}`, {
      customerId,
      modeId,
      statusId,
      lastAt,
      remark,
      accountId,
      type,
      contactsId,
    })
  },
  //15版本更新
  update(){
    return service.get(`/api/renew/latestVersion`)
  },
  //16.获取公海信息
  obtain({ids,accountId}){
    return service.get(`/api/customer/getSeasCustomer?ids=${ids}&accountId=${accountId}`)
  },
  //17.添加客户信息
  listadd({accountId,name,visitortype,modelId,mobile,wechatCode,qqCode,sex,age,sourceId,searchTerms}){
    return service.get(`/api/customer/addCustomer?accountId=${accountId}&name=${name}&visitortype=${visitortype}&modelId=${modelId}&mobile=${mobile}&wechatCode=${wechatCode}
    &qqCode=${qqCode}&sex=${sex}&age=${age}&sourceId=${sourceId}&searchTerms=${searchTerms}
    `)
  },
  //18咨询方式
  lconsulting(){
    return service.get(`/api/customer/modelList`)
  },
  //19信息来源
  source(){
    return service.get(`/api/customer/sourceList`)
  },
  //添加联系人
  Addcntacts({accountId,customerId,name,mobile}){
    return service.get(`/api/customer/addContacts?accountId=${accountId}&customerId=${customerId}&name=${name}&mobile=${mobile}`)
  }
}
