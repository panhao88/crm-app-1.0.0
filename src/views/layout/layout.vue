<template>
  <div>
    <div>
        <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="Home" >首页</van-tabbar-item>
      <van-tabbar-item
        icon="comment"
        to="news"
        v-if="username !== ''"
        :badge="20"
        >消息</van-tabbar-item
      >
      <van-tabbar-item icon="comment" to="news" v-if="username === ''" 
        >消息</van-tabbar-item
      >
      <van-tabbar-item icon="friends" to="maillist">通讯录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      username: "",
    };
  },
  components: {},
  methods: {},
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
  watch: {
    "$route.path": {
      handler(val) {
        // console.log(val)
        if (val === "Home") {
          this.active = 0;
        }
        if (val === "/classification") {
          this.active = 1;
        }
        if (val === "/Cart") {
          this.active = 2;
        }
        if (val === "/my") {
          this.active = 3;
        }
      },
      immediate: true,
    },
  },
  computed: {
   
  },
};
</script>

<style scoped lang='scss'>

</style>