<template>
  <div>
    <div class="m-list">
      <div
        class="m-list-e clearfix"
        v-for="(item, index) in genlist"
        :key="index"
      >
        <div class="m-list-title clearfix">
          <span @click="godetails(index)">{{ item.customerName }}</span>
        </div>
        <div class="m-list-con clearfix">
          <span> 跟单方式:{{ item.modeName }}</span>
          <span> 跟单状态:{{ item.statusName }}</span>
          <span>跟单对象:<a class="tu2 iconfont icon-dianhua"></a></span>
          <span>跟单人:{{ item.realName }}</span>
          <span></span>
          <div class="note clearfix">跟单时间:{{ item.createAt }}</div>
          <div class="note clearfix">下次联系时间:{{ item.lastAt }}</div>
          <span></span>
          <div class="note">跟单内容:{{ item.remark }}</div>
          <div class="clear"></div>
        </div>
      </div>
      <!-- 分页 -->
      <van-pagination
        v-model="currentPage"
        :total-items="totalRow"
        :show-page-size="5"
        :items-per-page="pageSize"
        @change="paging"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    genlist: {
      type: Array,
    },
    totalRow: {
      type: Number,
    },
    usernameId: {
      type: Number,
    },
  },
  components: {},
  data() {
    return {
      currentPage: 1, // 分页
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    godetails(index) {
      this.ids = this.genlist[index].customerId;
      this.$router.push({
        path: "/Petaliest",
        query: { idb: this.ids },
      });
    },
    //分页
    paging(e) {
      this.pageNum = e;
      this.$store.dispatch("documentary/documentary",{
        accountId: this.usernameId,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>