<template>
  <van-empty description="正在开发中">
    <van-button round type="danger" class="bottom-button" @click="retreat">
      返回首页
    </van-button>
  </van-empty>
</template>

<script>
export default {
  methods:{
    retreat() {
      this.$router.push("/home");
    },

  }
}
</script>

<style scoped lang='scss'>
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>