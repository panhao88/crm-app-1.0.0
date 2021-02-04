<template>
  <div class="topcenteh">
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
      <div class="m-list central" v-if="this.setlist.length > 0">
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
            <span v-if="usernameId === item.createAc">跟单人:{{ item.realName }}</span>
            <span v-else>跟单人:{{ item.userName }}</span>
            <div class="note clearfix">跟单时间:{{ item.createAt }}</div>
            <div class="note clearfix">下次联系时间:{{ item.lastAt }}</div>
            <div class="note clearfix">备注:{{ item.remark }}</div>
            <div class="jiesu" v-if="usernameId === 1">
              <button class="gendna" @click="Theendpl(item)">删除跟单</button>
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
      <div v-if="this.setlist.length === 0">
         <van-empty description="没有跟单信息哦"> </van-empty>
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
      username: "", //登陆人信息
      usernameId: "", //登陆人id
    };
  },
  methods: {
    ...userActions(["thedetalils", "Theend"]),
    // 返回上一页
    goto() {
     this.$router.go(-1)
    },
    //关闭
    guanbip() {
      this.$router.go(-1);
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
      let id = item.id;
      this.$dialog
        .confirm({
          message: "你确认删除跟单信息吗",
        })
        .then((res) => {
          this.Theend({
            customerId: customerId,
            accountId: this.usernameId,
            id: id,
            customer:this.ids
          });
        })
        .catch((err) => {
          this.$toast({
            message: "你已取消",
          });
          console.log(err);
        });
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.ids = this.$route.query.idb;
    this.thedetalils({
      customer: this.ids,
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
  background: #fff;
}
.jiesu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.gendna {
  background: red;
  border: none;
  border-radius: 6px;
  padding: 0px 6px;
  color: #fff;
}
.topcenteh{
  height: 100vh;
}
</style>