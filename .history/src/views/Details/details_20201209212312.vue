<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" title="数据操纵">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="page"/>
        </template>
        <template #right>
          <van-icon name="wap-home-o" size="24" color="grey" @click=" homepage"/>
        </template>
      </van-nav-bar>
    </div>
    <!-- 客户分类 -->
    <div class="Heels central ">
      <div
        class="Heel_a"
        v-for="(item, index) in titlelist"
        :key="index"
        :class="{ bgColors: item.bacolor == current }"
        @click="qblist(index)"
      >
        <div class="box1">
          <div class="box2">{{ item.name }}</div>
        </div>
      </div>
      <div>
         <!-- 客户详情 -->
        <div class="love-a">
          <div class="love-b">基本信息：</div>
          <div class="love-c" >
            <div>最近更新{{Details.followupAt}}</div>
            <div>录入时间:{{Details.entryTime}}</div>
            </div>
        </div>
        <table>
          <tr>
            <td class="boedee-a">客户名称:</td>
            <td class="boedee-b">{{Details.name}}</td>
          </tr>
          <tr>
            <td class="boedee-a">联系人:</td>
            <td class="boedee-b">未填写</td>
          </tr>
          <tr>
            <td class="boedee-a">手机号码:</td>
            <td class="boedee-b">{{Details.mobile}}</td>
          </tr>
          <tr>
            <td class="boedee-a">QQ:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">咨询方式:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">所在地区:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">客服标识:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">客户类型:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">校区分类:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">客户名称:</td>
            <td class="boedee-b"></td>
          </tr><tr>
            <td class="boedee-a">客户来源:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">当前学历:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">搜索词:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">访客标识符:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">微信号:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">联系电话2:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">联系电话3:</td>
            <td class="boedee-b"></td>
          </tr><tr>
            <td class="boedee-a">预计到校时间:</td>
            <td class="boedee-b"></td>
          </tr><tr>
            <td class="boedee-a">网络面试时间:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">附件:</td>
            <td class="boedee-b"></td>
          </tr>
          <tr>
            <td class="boedee-a">备注:</td>
            <td class="boedee-b"></td>
          </tr>
        </table>
     
     
      </div>
       
    </div>
     <div class="placeholder"></div>
   <div>
        <van-button  class="didi">关闭</van-button>
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      titlelist: [
        {
          name: "客户资料",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "联系人",
          start: "",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "跟单管理",
          start: "",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "订单管理",
          start: "",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "合同管理",
          visit: "-1",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "售后管理",
          visit: "0",
          bacolor: 6,
          LangthNum: "",
        },
        {
          name: "财务管理",
          visit: "1",
          bacolor: 7,
          LangthNum: "",
        },
        {
          name: "工单管理",
          foll: "0",
          bacolor: 8,
          LangthNum: "",
        },
        {
          name: "附件管理",
          foll: "1",
          bacolor: 9,
          LangthNum: "",
        },
        {
          name: "客户共享",
          deal: "0",
          bacolor: 10,
          LangthNum: "",
        },
        {
          name: "操纵记录",
          deal: "1",
          bacolor: 11,
          LangthNum: "",
        },
      ],
      current: 1, //颜色选择
      ids: '', //详情id
      Details:{}
    };
  },
  methods: {
       ...userActions(["recommend"]),
     //详情数据
    // getdata() {
    //   this.$api
    //     .details(this.ids)
    //     .then((res) => {
    //       this.Details = res.data
    //       console.log(this.Details );
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    //点击选择数据
    qblist(index) {
      this.current = index
    },
    //   返回首页
    retreat() {
      this.$router.push("/home");
    },
    // 关闭
    previous(){
      this.$router.go('-1')
    },
    // 头部返回
    page(){
      this.$router.go('-1')
    },
    // 头部回首页
    homepage(){
      this.$router.push('/home')
    },
   
  },
  mounted() {
    this.ids = this.$route.query.id;
    // this.getdata() //详情数据
  },
  watch: {},
  computed: {
    ...userState(["listing", "total"]),
  },
};
</script>

<style scoped lang='scss'>
.love-a{
    width: 100%;
    display: flex;
}
.love-b{
  padding-left: 10px;
    width: 160px;
}
.love-c{
    width: 200px;
}
.didi{
  position: fixed;
  width: 100%;
  background: #505050;
  bottom: 0px;
  color: #fff;
  font-size: 16px;
}
.placeholder{
  height: 50px;
}
</style>