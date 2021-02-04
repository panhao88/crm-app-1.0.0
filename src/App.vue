<template>
  <div id="app">
    <v-touch
      v-on:swipeleft="onSwipeLeft"
      v-on:swiperight="onSwipeRight"
      class="wrapper"
    >
      <keep-alive include="Customer,documentary" v-if="isLoggedIn">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive||!isLoggedIn"></router-view>
    </v-touch>
  </div>
</template>
<script>
import router from './router'
export default {
  name: "App",
  data() {
    return {
       isLoggedIn: false,
    };
  },
  methods: {
    // 滑动事件
    onSwipeRight() {
      this.$router.go(-1);
    },
    onSwipeLeft() {
      this.$router.go(1);
    },
  },
  mounted() {},
  watch:{
     $route(to, from) {
      let token = localStorage.getItem("user")||''
      if (token) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../src/style/demo";
* {
  padding: 0;
  margin: 0;
}
.wrapper {
  touch-action: pan-y !important;
}
</style>
