<template>
  <div>
          <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" />
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
        :class="{ bgColors: item.bacolor == current }"
        @click="
          qblist(item.bacolor)
        "
      >
        <div class="box1">
          <div class="box2">{{ item.name }}</div>
          <div class="box3">（{{ item.LangthNum }}）</div>
        </div>
      </div>
      <div class="Heel_a backF5" @click="retreat">返回系统主页</div>
    </div>
    <!-- 搜索框 -->
      <div class="Heel_c">
        <input
          type="text"
          v-model="values1"
          placeholder="客户名称"
          maxlength="6"
        /><button @click="search">搜索</button>
      </div>
      <div>暂无数据</div>
       <!-- 分页 -->
      <div class="fenye">
        <van-pagination
          v-model="currentPage"
          :total-items="50"
          :show-page-size="5"
        >
          <template #prev-text>
            <van-icon name="arrow-left" />
          </template>
          <template #next-text>
            <van-icon name="arrow" />
          </template>
          <template #page="{ text }">{{ text }}</template>
        </van-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      current: 1, //判断客户高亮
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
        {
          name: "新增跟单",
          deal: "0",
          bacolor: 7,
          LangthNum: "",
        },
      ],
      currentPage:1, // 分页
      values1:'',//输入框
      value_a:1
    };
  },
  methods: {
    //  点击状态
    qblist(value_a) {
      this.current = value_a
      console.log(this.current)
    },
    //  返回主页
    retreat() {
      this.$router.push("/home");
    },
    // 搜索
    search(){

    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>

</style>