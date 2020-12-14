<template>
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" title="跟单详情">
        <template #left>
          <van-icon name="arrow-left" size="22" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <div class="m-list central">
        <div
          class="m-list-e clearfix"
          v-for="(item, index) in setlist"
          :key="index"
        >
          <div class="m-list-title clearfix goto">
            <span>{{ item.customerName }}</span>
          </div>
          <div class="m-list-con clearfix">
            <span> 跟单方式:{{ item.modeName }}</span>
            <span> 跟单状态:{{ item.statusName }}</span>
            <span>跟单对象:<a class="tu2 iconfont icon-dianhua"></a></span>
            <span> 下次联系: <small></small></span>
            <div class="note clearfix">备注:{{ item.remark }}</div>
            <span>跟单人:</span>
            <span>附件:</span>
            <div class="note clearfix">跟单时间:{{ item.createAt }}</div>
            <span></span>
            <div class="jiesu">
              <button class="gendna" @click="Theendpl(item)">结束跟单</button>
            </div>
            <div class="clear"></div>
          </div>

          <div class="kloepo">
            <div class="xinzeng" @click="listnew(item)">新增</div>
            <div class="guanbi" @click="guanbip">关闭</div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("documentary");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ids: "",
      username:'', //登陆人信息
      usernameId:'' //登陆人id
    };
  },
  methods: {
    ...userActions(["thedetalils","Theend"]),
    // 返回上一页
    goto() {
      this.$router.push("/documentary");
    },
    //关闭
    guanbip() {
      this.$router.push("/documentary");
    },
    //新增
    listnew(item) {
      this.$router.push({
        path: "/listnew",
        query: { name: item },
      });
    },
    //结束跟单
    Theendpl(item) {
      let customerId = this.ids;
      let id = item.id
      this.Theend({
        customerId:customerId,
        accountId:this.usernameId,
        id:id
      })
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.ids = JSON.parse(localStorage.getItem("ids"));
    this.thedetalils({
      id: this.ids,
    });
  },
  watch: {},
  computed: {
    ...userState(["setlist"]),
  },
  filters: {},
};
</script>

<style scoped lang='scss'>
.bottom {
  height: 40px;
}
.jiesu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

</style>