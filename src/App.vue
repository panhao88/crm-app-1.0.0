<template>
  <div id="app">
     <keep-alive include="Customer,documentary,internationalwaters">
         <router-view/>
    </keep-alive>

  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  methods: {
   
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
