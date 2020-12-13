<template>
  <div>
      <!-- 跟单列表 -->
    <!-- 搜索框 -->
    <div v-if="flag === false">
      <div class="Heel_c">
        <input
          type="text"
          v-model="values1"
          placeholder="客户名称"
          maxlength="6"
          @keydown.enter="kenter"
        /><button @click="search">搜索</button>
      </div>
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
              <span> 下次联系: <small></small></span>
              <div class="note">备注:{{ item.remark }}</div>
              <span>跟单人:{{ item.realName }}</span>
              <span>跟单时间:{{ item.createAt }}</span>
              <span>附件:</span>
              <span></span>
              <div class="clear"></div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="fenye">
            <van-pagination
              v-model="currentPage"
              :total-items="totalRow"
              :show-page-size="5"
              :items-per-page="pageSize"
              @change="paging"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="flag === true">
      <div>
        <div class="m-list">
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
              <div class="note">备注:{{ item.remark }}</div>
              <span>跟单人:</span>
              <span>跟单时间:{{ item.createAt }}</span>
              <span>附件:</span>
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
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      genlist:{
          type:Array
      },
      totalRow:{
          type:Number
      }
  },
  components: {},
  data() {
    return {
      flag: false,
      values1: "", //输入框
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style scoped lang='scss'>
</style>