<template>
  <div v-touch:right="goright" v-touch:left="goleft">
    <div class="headdd">
      <div id="top">
        <!-- 头部导航 -->
        <div>
          <van-nav-bar :fixed="true" class="vanbar">
            <template #left>
              <van-icon
                name="arrow-left"
                size="24"
                color="grey"
                @click="goto"
              />
            </template>
            <template #right>
              <van-icon name="bars" size="24" color="grey" @click="logoto" />
            </template>
          </van-nav-bar>
        </div>
        <!-- 客户分类 -->
        <div class="Heels central">
          <div
            class="Heel_a"
            v-for="(item, index) in titlelist"
            :key="index"
            :class="{ bgColors: item.bacolor === akp }"
            @click="qblist(item.bacolor)"
          >
            <div class="box1">
              <div class="box2">{{ item.name }}</div>
            </div>
          </div>
          <div class="Heel_a backF5" @click="retreat">返回系统主页</div>
        </div>
        <!-- 搜索框33 -->
        <div class="Heel_c">
          <input
            type="text"
            v-model="values1"
            placeholder="客户名称"
            @keydown.enter="kenter"
          /><button @click="search">搜索</button>
        </div>
      </div>
    </div>
    <!-- 客户列表 -->
    <div>
      <customerlist
        v-if="akp === 0"
        :listing="listing"
        :total="total"
        :usernameId="usernameId"
        :Source="Source"
        :salesmanlist="salesmanlist"
        :campuslist="campuslist"
        :teamlist="teamlist"
        :typelist="typelist"
      ></customerlist>
      <internationalwaters
        :internationalist="internationalist"
        :Seatotal="Seatotal"
        :usernameId="usernameId"
        v-if="akp === 1"
      >
      </internationalwaters>
    </div>
  </div>
</template>

<script>
import Customerlist from "../../components/customer/Customerlist";
import Internationalwaters from "../../components/customer/International_waters";
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "Customer",
  props: {},
  components: {
    Customerlist, //客户列表
    Internationalwaters, //公海客户
  },
  data() {
    return {
      titlelist: [
        {
          name: "客户列表",
          start: "",
          bacolor: 0,
          LangthNum: "",
        },
        {
          name: "公海客户",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "我的共享",
          visit: "-1",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "共享给我",
          visit: "0",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "今日新增",
          visit: "1",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "本周新增",
          foll: "0",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "本月新增",
          foll: "1",
          bacolor: 6,
          LangthNum: "",
        },
        {
          name: "撞单查询",
          deal: "0",
          bacolor: 7,
          LangthNum: "",
        },
        {
          name: "新增客户",
          deal: "1",
          bacolor: 8,
          LangthNum: "",
        },
      ],
      akp: 0,
      values1: "", // 输入框数据
      value1: "", //点击变色高亮
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      pageSize: 10,
      mobile: "",
    };
  },
  methods: {
    ...userActions([
      "recommend",
      "intoSeasCustomer",
      "Customer_source",
      "salesman",
      "Campus_information",
      "Team_information",
      "Customer_type",
      "getcustomerSeasPage",
    ]),
    // 搜索
    search() {
      this.recommend({
        accountId: this.usernameId,
        serarchPara: this.values1,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
    // 搜索
    kenter() {
      this.search();
    },
    //返回首页
    retreat() {
      this.$router.push("/");
    },
    // 返回上一页
    goto() {
      this.$router.push("/");
    },
    // 右边点击事件
    logoto() {},
    //导航点击分类
    qblist(value111) {
      if (value111 === 0) {
        this.akp = value111;
      } else if (value111 === 1) {
        this.akp = value111;
      } else if (value111 === 2) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 3) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 4) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 5) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 6) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 7) {
        this.$toast.success("该功能暂未开通");
      } else if (value111 === 8) {
        this.$router.push("/Newcustomer");
      }
      this.recommend({
        accountId: this.usernameId,
        serarchPara: this.values1,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
    // 滑动事件
    goright() {
      this.$router.go(-1);
    },
    goleft() {
      this.$router.go(1);
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.Customer_source();
    this.salesman();
    this.Campus_information();
    this.Customer_type();
    this.Team_information();
    this.getcustomerSeasPage({
      pageNum: this.currentPage,
      pageSize: this.pageSize,
    }); //客户公海列表
    this.recommend({
      accountId: this.usernameId,
      serarchPara: this.values1,
      pageNum: this.currentPage,
      pageSize: this.pageSize,
    });
  },
  watch: {
    // 监听输入框事件
    values1(val) {
      if (this.values1 === "") {
        this.search();
      }
    },
  },
  computed: {
    ...userState([
      "listing",
      "total",
      "Source",
      "salesmanlist",
      "campuslist",
      "teamlist",
      "typelist",
      "internationalist",
      "Seatotal",
    ]),
  },
};
</script>

<style scoped lang='scss'>
</style>