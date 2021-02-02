// api.js用来封装所有的请求
import service from './index'
import qs from "qs"
export default {
  // 1.登录
  Signin(
    { userName,
      password }
  ) {
    return service.get(`/api/login/doLogin?userName=${userName}&password=${password}`)
  },
  // 2.客户列表
  recommend({ accountId, serarchPara,pageNum, pageSize,name }) {
    return service.post("/api/customer/customerPage", qs.stringify({
      accountId, serarchPara, pageNum, pageSize,name
    }))
  },
  //客户来源
Customer_source(){
  return service.post("/api/share/customerSource")
},
//业务员，录入员
salesman(){
  return service.post("/api/share/staffList")
},
// 校区信息
Campus_information(){
  return service.post("/api/share/campusList")
},
// 团队信息
Team_information(){
  return service.post("/api/share/teamList")
},
// 客户类型
Customer_type(){
  return service.post("/api/share/customerTypeList")
},
  //3.客户详情页
  setter({ id }) {
    return service.get(`/api/customer/findCustomerById?customerId=${id}`)
  },
  // 4.获取客户公海
  customerseas({ name, pageNum, pageSize }) {
    return service.post("/api/customer/seasCustomerPage", qs.stringify({
      name, pageNum, pageSize
    }))
  },
  // 5.客户联系人
  Thecontact({ id }) {
    return service.get(`/api/customer/findContactsByCustomerId?customerId=${id}`)
  },
  //6.放入公海
  intoSeasCustomer({ ids, accountId }) {
    return service.get(`/api/customer/intoSeasCustomer?ids=${ids}&accountId=${accountId}`)
  },
  //7跟单列表
  documentary({ accountId, name, pageNum, pageSize }) {
    return service.post('/api/follow/followPage', qs.stringify({ accountId, name, pageNum, pageSize }))
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
  //13.删除跟单
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
    return service.post("/api/follow/addFollow", qs.stringify({
      customerId,
      modeId,
      statusId,
      lastAt,
      remark,
      accountId,
      type,
      contactsId,
    }))
  },
  //15版本更新
  update() {
    return service.get(`/api/renew/latestVersion`)
  },
  //16.获取公海信息
  obtain({ ids, accountId }) {
    return service.get(`/api/customer/getSeasCustomer?ids=${ids}&accountId=${accountId}`)
  },
  //17.添加客户信息
  listadd({ accountId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms }) {
    return service.post("/api/customer/addCustomer", qs.stringify({
      accountId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms
    }))
  },
  //18咨询方式
  lconsulting() {
    return service.get(`/api/customer/modelList`)
  },
  //19信息来源
  source() {
    return service.get(`/api/customer/sourceList`)
  },
  //20.添加联系人
  Addcntacts({ accountId, customerId, name, mobile }) {
    return service.get(`/api/customer/addContacts?accountId=${accountId}&customerId=${customerId}&name=${name}&mobile=${mobile}`)
  },
  //21.编辑客户详情
  Modify({ accountId, customerId }) {
    return service.get(`/api/customer/editCustomer?accountId=${accountId}&customerId=${customerId}`)
  },
  //22.保存客户信息
  storage({accountId,customerId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms}) {
    return service.post("/api/customer/updateCustomer",qs.stringify({
      accountId,customerId, name, visitortype, modelId, mobile, wechatCode, qqCode, sex, age, sourceId, searchTerms
    }))
  },
  //23.今日需跟进列表
  Today({accountId,pageNum,pageSize}){
    return service.post("/api/follow/orderToday",qs.stringify({
      accountId,pageNum,pageSize
    }))
  },
  //24.本周跟单
  Thiswe({accountId,pageNum,pageSize}){
    return service.post("/api/follow/orderWeek",qs.stringify({accountId,pageNum,pageSize}))
  },
  //获取客户公海列表
  getcustomerSeasPage({accountId,pageNum,pageSize,name}){
    return service.post("/api/customer/customerSeasPage",qs.stringify({
      accountId,pageNum,pageSize,name
    }))
  }
}
