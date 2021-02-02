<template>
  <!-- 跟单管理 -->
  <div>
    <div class="boxt">
      <div v-if="this.contact.length > 0">
        <div v-for="item in contact" :key="item.id">
          <table>
            <tr>
              <td class="boedee-apo">名字:{{ item.name }}</td>
              <td class="boedee-byt">职位:</td>
            </tr>
            <tr>
              <td class="boedee-apo">
                电话:<a class="tu3" :href="'tel:' + item.mobile">{{
                  item.mobile
                }}</a
                ><a class="tu2 iconfont icon-dianhua"></a>
              </td>
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
        </div>
      </div>
      <div v-if="this.contact.length === 0">
        <van-empty description="没有联系人哦"> </van-empty>
      </div>
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
  props: {
    contact: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    //联系人关闭
    guanbip() {
      this.current = 1;
    },
    // 关闭
    guanbip() {
      this.$router.push("/customer");
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
  width: 100%;
  margin-top: 10px;
}
</style>