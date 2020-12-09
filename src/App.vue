<template>
  <div id="app">
    <keep-alive include="customer">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "../src/style/demo";
* {
  padding: 0;
  margin: 0;
}
</style>
