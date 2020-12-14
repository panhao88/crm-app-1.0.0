<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" title="数据操纵" class="vanbar">
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
    </div>
     <dlist v-if="current === 0" :details="details"></dlist>
      <administration v-if="current === 2"></administration>
  </div>
</template>

<script>
import dlist from "../../components/dlist/Dlist";
import Administration from "../../components/dlist/Administration";
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {
    dlist, //客户资料
    Administration, //跟单管理
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
      current: 0,
      ids: "", //详情id
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

    // 头部返回
    page() {
      this.$router.go(-1);
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

</style>