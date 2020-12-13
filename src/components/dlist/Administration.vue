<template>
<!-- 跟单管理 -->
  <div>
    <div class="boxt">
      <table>
        <tr>
          <td class="boedee-apo">性别:</td>
          <td class="boedee-byt">职位:</td>
        </tr>
        <tr>
          <td class="boedee-apo">电话:</td>
          <td class="boedee-byt">微信:</td>
        </tr>
        <tr>
          <td class="boedee-apo">QQ:</td>
          <td class="boedee-byt">邮箱:</td>
        </tr>
        <tr>
          <td class="boedee-apo">生日:</td>
          <td class="boedee-byt">备注:</td>
        </tr>
        <tr>
          <td class="boedee-apo">录入时间:</td>
          <td class="boedee-byt"></td>
        </tr>
      </table>
      <div>
        <div class="kloepo">
          <div class="xinzeng">新增</div>
          <div class="guanbi" @click="guanbip">关闭</div>
        </div>
      </div>
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
    //联系人关闭
    guanbip() {
      this.current = 1;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style scoped lang='scss'>
.boxt {
  width: 375px;
  margin-top: 10px;
}
</style>