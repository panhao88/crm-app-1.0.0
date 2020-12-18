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
    <administration v-if="current === 1" :contact="contact"></administration>
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
          name: "订单管理",
          start: "",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "合同管理",
          visit: "-1",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "售后管理",
          visit: "0",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "财务管理",
          visit: "1",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "工单管理",
          foll: "0",
          bacolor: 6,
          LangthNum: "",
        },
        {
          name: "附件管理",
          foll: "1",
          bacolor: 7,
          LangthNum: "",
        },
        {
          name: "客户共享",
          deal: "0",
          bacolor: 8,
          LangthNum: "",
        },
        {
          name: "操纵记录",
          deal: "1",
          bacolor: 9,
          LangthNum: "",
        },
      ],
      current: 0,
      ids: "", //详情id
      idp:''
    };
  },
  methods: {
    ...userActions(["setter", "Thecontact"]),
    //点击选择数据
    qblist(bolo) {
      // this.current = bolo;
      if (bolo === 0) {
        this.current = bolo;
      } else if (bolo === 1) {
        this.current = bolo;
      } else if (bolo === 2) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 3) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 4) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 5) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 6) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 7) {
        this.$toast.success("该功能暂未开通");
      } else if (bolo === 8) {
        this.$toast.success("该功能暂未开通");
      }else if (bolo === 9) {
        this.$toast.success("该功能暂未开通");
      }else if (bolo === 10) {
        this.$toast.success("该功能暂未开通");
      }
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
    this.idp = this.$route.query.id
     if(this.$route.query.idb){
      this.current = 1
      this.idp = this.$route.query.idb
      this.ids = this.$route.query.idb
      this.setter({ id: this.ids });
      this.Thecontact({ id: this.idp });
    }
     this.setter({ id: this.ids });
     this.Thecontact({ id: this.idp });   
  },
  watch: {},
  computed: {
    ...userState(["details", "contact"]),
  },
};
</script>

<style scoped lang='scss'>
</style>