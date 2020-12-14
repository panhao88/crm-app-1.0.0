<template>
  <div>
    <!-- 客户资料 -->
    <div class="love-a">
      <div>
        <div class="love-b">基本信息：</div>
      </div>
      <div class="love-c">
        <div>最近更新:{{ details.followupAt }}</div>
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
          <td class="boedee-b" v-if="details.visitortype === 0"></td>
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
          <td class="boedee-a">预计到校时间:</td>
          <td class="boedee-b"></td>
        </tr>
      </table>
      <div>
        <div>
          <div class="chat">用户聊天：</div>
        </div>
        <div>
          <textarea class="comments"  id="demo"> </textarea>
        </div>
      </div>
      <div class="placeholder"></div>
      <div class="didi" @click="previous">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    details: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // 关闭
    previous() {
      this.$router.go("-1");
    },
  },
  mounted() {},
  watch: {
    val: {
      details(newVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
.love-a {
  margin-top: 10px;
  width: 375px;
  display: flex;
  justify-content: space-around;
  background: #efeeee;
}
.love-d {
  margin-top: 10px;
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
  text-align: center;
}
.placeholder {
  height: 50px;
}
.chat {
  padding: 10px;
}
.comments {
  width: 365px;
  height: 200px;
  margin-left: 5px;
}
</style>