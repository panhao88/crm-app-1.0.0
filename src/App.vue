<template>
  <div id="app">
    <v-touch
      v-on:swipeleft="onSwipeLeft"
      v-on:swiperight="onSwipeRight"
      class="wrapper"
    >
      <keep-alive include="Customer,documentary,internationalwaters">
        <router-view />
      </keep-alive>
    </v-touch>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
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
