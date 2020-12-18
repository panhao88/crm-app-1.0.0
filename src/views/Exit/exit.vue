<template>
  <div>
    <van-empty description="你确认要退出吗">
      <van-button round type="danger" class="bottom-button" @click="retreat">
        返回首页
      </van-button>
    </van-empty>
    <div class="button_b">
        <van-button type="danger" class="button" @click="cancellation"
          >注销登录</van-button
        >
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    retreat() {
      this.$router.push("/home");
    },
      // 注销登录
    cancellation() {
      localStorage.removeItem("user");
      this.$router.push("login");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>