<template>
 <div>
   <!-- 消息 -->
   <van-empty description="正在开发中">
    <van-button round type="danger" class="bottom-button" @click="retreat">
      返回首页
    </van-button>
  </van-empty>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
      retreat() {
      this.$router.push("/home");
    },
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>