<template>
  <div v-touch:right="goright" class="topcenteh">
    <!-- 联系人 -->
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" class="vanbar" title="新增客户">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 新增管理跟单 -->
    <div class="central">
      <div class="size">新增联系人</div>
      <table>
        <tr>
          <td class="boedee-a">姓名:</td>
          <td class="boedee-b">
            <van-field v-model="name" placeholder="请输入联系人姓名" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">电话:</td>
          <td class="boedee-b">
            <van-field v-model="phone" placeholder="请输入电话" />
          </td>
        </tr>
      </table>
      <div class="cunpl">
        <van-button type="primary" class="baocun" @click="save"
          >保存</van-button
        >
      </div>
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
      ids: "",
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      login: "",
      customerId: "",
      name: "",
      phone: "",
    };
  },
  methods: {
    ...userActions(["Addcntacts"]),
    //返回上一页
    goto() {
      this.$router.go(-1);
    },
      // 滑动事件
    goright(){
      this.$router.go(-1)
    },
    //保存联系人
    save() {
        this.Addcntacts({
          accountId: this.usernameId,
          customerId: this.ids,
          name: this.name,
          mobile: this.phone,
        });
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.ids = this.$route.query.id;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.van-cell {
  padding: 0px;
}
.topcenteh{
  height: 100vh;
}
</style>