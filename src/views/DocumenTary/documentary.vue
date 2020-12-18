<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" class="vanbar">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 跟单管理 -->
    <div class="Heels central">
      <div
        class="Heel_a"
        v-for="(item, index) in titlelist"
        :key="index"
        :class="{ bgColors: item.bacolor === current }"
        @click="qblist(item.bacolor)"
      >
        <div class="box1">
          <div class="box2">{{ item.name }}</div>
          <!-- <div class="box3"></div> -->
        </div>
      </div>
      <div class="Heel_a backF5" @click="retreat">返回系统主页</div>
    </div>
    <!-- 搜索框 -->
    <div>
      <div class="Heel_c">
        <input
          type="text"
          v-model="values1"
          placeholder="客户名称"
          maxlength="6"
          @keydown.enter="kenter"
        /><button @click="search">搜索</button>
      </div>
      <div>
        <div class="m-list">
          <div
            class="m-list-e clearfix"
            v-for="(item, index) in genlist"
            :key="index"
          >
            <div class="m-list-title clearfix">
              <span @click="godetails(index)">{{ item.customerName }}</span>
            </div>
            <div class="m-list-con clearfix">
              <span> 跟单方式:{{ item.modeName }}</span>
              <span> 跟单状态:{{ item.statusName }}</span>
              <span>跟单对象:<a class="tu2 iconfont icon-dianhua"></a></span>
              <span>跟单人:{{item.realName}}</span>
              <span></span>
              <div  class="note clearfix">跟单时间:{{item.createAt}}</div>
              <div class="note clearfix"> 下次联系时间:{{item.lastAt}} </div>
              <span></span>
              <div class="note">跟单内容:{{ item.remark }}</div>
              <div class="clear"></div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="fenye">
            <van-pagination
              v-model="currentPage"
              :total-items="totalRow"
              :show-page-size="5"
              :items-per-page="pageSize"
              @change="paging"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("documentary");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "documentary",
  props: {},
  components: {},
  data() {
    return {
     
      titlelist: [
        {
          name: "跟单列表",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "今日需跟进",
          visit: "-1",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "本周需跟进",
          visit: "0",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "今日跟单记录",
          visit: "1",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "本周跟单记录",
          foll: "0",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "本月跟单记录",
          foll: "1",
          bacolor: 6,
          LangthNum: "",
        },
      ],
      currentPage: 1, // 分页
      values1: "", //输入框
      // value_a: 1,
      current: 1, //判断客户高亮
      usernameId: "", //用户id
      pageNum: 1,
      pageSize: 10,
      ids: "", //跟单详情列表
      todo: [],
    };
  },
  methods: {
    ...userActions(["documentary", "Theend"]),
    //  点击状态
    qblist(value_a) {
      // this.current = value_a;
      if(this.current === 0){
        this.current = value_a;
      }else if(this.current === 1){
        this.$toast.success("该功能暂未开通")
      }else if(this.current === 2){
        this.$toast.success("该功能暂未开通")
      }else if(this.current === 3){
        this.$toast.success("该功能暂未开通")
      }else if(this.current === 4){
        this.$toast.success("该功能暂未开通")
      }
    },
    //  返回主页
    retreat() {
      this.$router.push("/home");
    },
    // 返回上一页
    goto() {
      this.$router.push('/');
    },
    //联系人关闭
    guanbip() {
      this.current = 1;
    },
   
    //名字点击
    godetails(index) {
      this.ids = this.genlist[index].customerId;
       this.$router.push({
        path: "/Petaliest",
        query: { idb: this.ids },
      });
    },
    // 搜索
    search() {
      this.$store.dispatch("documentary/documentary", {
         accountId: this.usernameId,
      name: this.values1,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      });
    },
    //回车搜索
    kenter() {
      this.search();
    },
    //分页
    paging(e) {
      this.pageNum = e;
      this.$store.dispatch("documentary/documentary", {
        accountId: this.usernameId,
      name: this.values1,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      });
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.documentary({
      accountId: this.usernameId,
      name: this.values1,
      pageNum: this.pageNum,
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
    ...userState(["genlist", "totalRow", "setlist"]),
  },
};
</script>

<style scoped lang='scss'>
.note {
  width: 100%;
}
.gendna {
  height: 30px;
  text-align: center;
  padding: 0px;
  line-height: 30px;
  font-size: 12px;
  background: #948a8a;
  border: none;
  padding: 0px 8px;
  color: #fff;
  margin-right: 10px;
}

</style>