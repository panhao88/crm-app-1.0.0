<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" title="数据操纵">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="page" />
        </template>
        <template #right>
          <van-icon
            name="wap-home-o"
            size="24"
            color="grey"
            @click="homepage"
          />
        </template>
      </van-nav-bar>
    </div>
    <dlist></dlist>
    <!-- 客户分类 -->
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
        </div>
      </div>

      <div class="boxt" v-if="current === 1">
        <!-- 客户详情 -->
        <div class="love-a">
          <div>
            <div class="love-b">基本信息：</div>
          </div>
          <div class="love-c">
            <div>最近更新{{ details.followupAt }}</div>
            <div>录入时间:{{ details.entryTime }}</div>
          </div>
        </div>
        <div class="love-d">
          <table>
            <tr>
              <td class="boedee-a">客户名称:</td>
              <td class="boedee-b">{{ details.name }}</td>
            </tr>
            <tr>
              <td class="boedee-a">联系人:</td>
              <td class="boedee-b">未填写</td>
            </tr>
            <tr>
              <td class="boedee-a">手机号码:</td>
              <td class="boedee-b">{{ details.mobile }}</td>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
              <td class="boedee-a">预计到校时间:</td>
              <td class="boedee-b"></td>
            </tr>
            <tr>
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
          <div class="placeholder"></div>
          <div class="didi" @click="previous">关闭</div>
        </div>
      </div>
      <div v-if="current === 2" class="boxt">
        <div>
          <table class="table1">
            <tr>
              <td class="boedee-apo">性别:</td>
              <td class="boedee-byt">职位:</td>
            </tr>
            <tr>
              <td class="boedee-apo">电话:</td>
              <td class="boedee-byt">微信:</td>
            </tr>
            <tr>
              <td class="boedee-apo">QQ:</td>
              <td class="boedee-byt">邮箱:</td>
            </tr>
            <tr>
              <td class="boedee-apo">生日:</td>
              <td class="boedee-byt">备注:</td>
            </tr>
            <tr>
              <td class="boedee-apo">录入时间:</td>
              <td class="boedee-byt"></td>
            </tr>
          </table>
        </div>
        <div>
          <div class="kloepo">
            <div class="xinzeng">新增</div>
            <div class="guanbi" @click="guanbip">关闭</div>
          </div>
        </div>
      </div>
      <!-- <div v-if="current === 3" class="boxt">
            111
        </div> -->
    </div>
  </div>
</template>

<script>
import dlist from "../../components/dlist/Dlist";
import { createNamespacedHelpers } from "vuex";
import Dlist from "../../components/dlist/Dlist.vue";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {
    dlist,
  },
  data() {
    return {
      titlelist: [
        {
          name: "客户资料",
          start: "",
          bacolor: 0,
          LangthNum: "",
        },
        {
          name: "联系人",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "跟单管理",
          start: "",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "订单管理",
          start: "",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "合同管理",
          visit: "-1",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "售后管理",
          visit: "0",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "财务管理",
          visit: "1",
          bacolor: 6,
          LangthNum: "",
        },
        {
          name: "工单管理",
          foll: "0",
          bacolor: 7,
          LangthNum: "",
        },
        {
          name: "附件管理",
          foll: "1",
          bacolor: 8,
          LangthNum: "",
        },
        {
          name: "客户共享",
          deal: "0",
          bacolor: 9,
          LangthNum: "",
        },
        {
          name: "操纵记录",
          deal: "1",
          bacolor: 10,
          LangthNum: "",
        },
      ],
      current: 1,
      ids: "", //详情id
      Details: {},
    };
  },
  methods: {
    ...userActions(["setter", "Thecontact"]),
    //点击选择数据
    qblist(bolo) {
      this.current = bolo;
    },
    //   返回首页
    retreat() {
      this.$router.push("/home");
    },
    // 关闭
    previous() {
      this.$router.go("-1");
    },
    //联系人关闭
    guanbip() {
      this.current = 1;
    },
    // 头部返回
    page() {
      this.$router.go("-1");
    },
    // 头部回首页
    homepage() {
      this.$router.push("/home");
    },
  },
  mounted() {
    this.ids = this.$route.query.id;
    this.Thecontact({ id: this.ids });
    this.setter({ id: this.ids });
  },
  watch: {},
  computed: {
    ...userState(["details"]),
  },
};
</script>

<style scoped lang='scss'>
.love-a {
  display: flex;
  background: #e1e2e4;
}
.love-b {
  margin-left: 5px;
  width: 140px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.didi {
  position: fixed;
  width: 100%;
  background: #505050;
  border: 1px solid black;
  height: 40px;
  line-height: 40px;
  bottom: 0px;
  color: #fff;
  font-size: 16px;
}
.placeholder {
  height: 50px;
}
.boxt {
  width: 100%;
  margin-top: 10px;
}
.love-d {
  margin-top: 10px;
}
</style>