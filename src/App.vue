<template>
  <div id="app">
     <keep-alive include="Customer,documentary">
         <router-view v-if="isReload"/>
    </keep-alive>

  </div>
</template>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isReload: true
    }
  },
  methods: {
    reload() {
      this.isReload = false
      this.$nextTick(() => {
        this.isReload = true
      })
    }
  }
}
</script>
<style lang="scss">
@import "../src/style/demo";
* {
  padding: 0;
  margin: 0;
}
</style>
