<template>
  <div v-touch:right="goright" v-touch:left="goleft">
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
        <mocuList
          v-if="current === 1"
          :genlist="genlist"
          :totalRow="totalRow"
          :usernameId="usernameId"
        ></mocuList>
        <todayList
          v-if="current === 2"
          :podaylist="podaylist"
          :listrow="listrow"
          :usernameId="usernameId"
        ></todayList>
        <phisweek
          v-if="current === 3"
          :weeklist="weeklist"
          :weekrowlist="weekrowlist"
          :usernameId="usernameId"
        ></phisweek>
      </div>
    </div>
  </div>
</template>

<script>
import MocuList from "../../components/docuList/MocuList";
import TodayList from "../../components/docuList/TodayList";
import Phisweek from "../../components/docuList/Phisweek";
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("documentary");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "documentary",
  props: {},
  components: {
    MocuList, //跟单列表
    TodayList, //今日跟单
    Phisweek, //本周跟单
  },
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
      values1: "", //输入框
      value_a: 1,
      current: 1, //判断客户高亮
      usernameId: 0, //用户id
      ids: "", //跟单详情列表
      todo: [],
    };
  },
  methods: {
    ...userActions(["documentary", "Theend", "Today", "Thiswe"]),
    //  点击状态
    qblist(value_a) {
      this.current = value_a;
      if (this.current === 1) {
        this.current = value_a;
      } else if (this.current === 2) {
        this.current = value_a;
      } else if (this.current === 3) {
        this.current = value_a;
      } else if (this.current === 4) {
        this.$toast.success("该功能暂未开通");
        this.current = 3;
      } else if (this.current === 5) {
        this.$toast.success("该功能暂未开通");
        this.current = 3;
      } else if (this.current === 6) {
        this.$toast.success("该功能暂未开通");
        this.current = 3;
      }
    },
    //  返回主页
    retreat() {
      this.$router.push("/home");
    },
    // 返回上一页
    goto() {
      this.$router.push("/");
    },
    //联系人关闭
    guanbip() {
      this.current = 1;
    },
    // 滑动事件
    goright() {
      this.$router.go(-1);
    },
    goleft() {
      this.$router.go(1);
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
    this.Today({
      accountId: this.usernameId,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    });
    this.Thiswe({
      accountId: this.usernameId,
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
    ...userState([
      "genlist",
      "totalRow",
      "setlist",
      "podaylist",
      "weeklist",
      "listrow",
      "weekrowlist",
    ]),
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