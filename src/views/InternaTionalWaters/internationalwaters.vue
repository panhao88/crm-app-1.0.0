
<template>
  <div>
    <!-- 头部面包屑 -->
     <div>
        <van-nav-bar :fixed="true" :z-index="3">
          <template #left>
            <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
          </template>
          <template #right>
            <van-icon name="bars" size="24" color="grey" @click="logoto" />
          </template>
        </van-nav-bar>
      </div>
      <!-- 头部点击高亮 11-->
      <div class="Heels central">
        <div
          class="Heel_a"
          v-for="(item, index) in titlelist"
          :key="index"
          :class="item.bacolor === akp ? 'bgColors' : ''"
          @click="qblist(index)"
        >
          <div class="box1">
            <div class="box2">{{ item.name }}</div>
            <!-- <div class="box3">{{ item.LangthNum }}</div> -->
          </div>
        </div>
        <div class="Heel_a backF5" @click="retreat">返回系统主页</div>
      </div>
    <!-- 客户数量限制 -->
    <!-- <div class="shuliang">
      <p>客户数量限制:<span>2</span>/<span>无限制</span>(申请审核中:0)</p>
    </div> -->
     <!-- 搜索框33 -->
      <div class="Heel_c">
        <input
          type="text"
          v-model="value"
          placeholder="客户名称、手机号码"
          @keydown.enter="kenter"
        /><button @click="search">搜索</button>
      </div>
      <!-- 客户数量限制： -->
      <!-- <div class="maxnumtip">
        <span class="iconfont icon-icon-test2"> </span>客户数量限制：<span
          class="tu1"
          >1</span
        >
        /
        <span class="col_red">无限制</span>
      </div> -->
      <!-- 客户列表 -->
      <div>
        <div class="m-list">
          <div
            class="m-list-e clearfix"
            v-for="(item, index) in listseas"
            :key="index"
          >
            <div class="m-list-title clearfix goto">
              <span @click="godetails(index)">{{ item.name }}</span>
            </div>
            <div class="m-list-con clearfix">
              <span>
                客户类型:
                <small v-if="item.visitortype == 0">高中</small>
                <small v-if="item.visitortype == -1">无效</small>
                <small v-if="item.visitortype == 1">初中</small>
              </span>
              <span> 客户来源:</span>
              <span>
                客户标识:
                <small v-if="item.state == 0">网络</small>
                <small v-if="item.state == 1">拓展</small>
                <small v-if="item.state == 2">公海数据</small>
              </span>
              <span> 联系人: <small>{{ item.qqCode }}</small></span>
              <span> 电话:{{ item.mobile }}<a class="tu2 iconfont icon-dianhua"></a></span>
              <span>搜索词:</span>
              <span>微信号:</span>
              <span>预计到校时间:</span>
              <span>网络面试时间:</span><span>录入者:</span>
              <span> 录入时间:{{ item.reporter }} </span>
              <span> 最后更新: {{ item.entryTime }}</span>
              <span> 业务员: <font color="red">{{ item.followRecord }}</font></span>
              <span></span>
              <van-checkbox
                v-model="item.flag"
                shape="square"
                class="todo"
                @change="radio"
              ></van-checkbox>
              <span class="w100">
                <button
                  class="btn1 btnduanx"
                  data-width="900"
                  data-height="500"
                  href="#"
                  disabled
                >
                  短信
                </button>

                <button
                  class="btn1 btnduanx"
                  data-width="900"
                  data-height="500"
                  href="#"
                  disabled
                >
                  发邮件
                </button>
              </span>
              <span> (编号: {{ item.id }} )</span>

              <div class="clear"></div>
            </div>
            <div class="m-list-bottom">
              <span class="m-l-b-num">
                <span class="lianxi">联系人 </span><span> (0)</span>
              </span>
              <span class="m-l-b-num">
                <span class="lianxi" @click="Sing_go(item.id)">跟单管理 </span>
                <span v-if="item.recordNum == null"> (0)</span>
                <span v-else> ({{ item.recordNum }})</span>
              </span>
              <span class="m-l-b-num">
                <span class="lianxi">订单管理 </span><span>(0) </span>
              </span>
              <span class="m-l-b-num">
                <span class="lianxi">合同管理 </span> <span>(0)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 全选 -->
      <div class="backgr">
        <van-checkbox
          v-model="checked"
          checked-color="#07c160"
          shape="square"
          icon-size="16px"
          @click="checkAllfalse"
          >你可以将选中信息:
          <div v-if="checked === false"></div>
          <div v-if="checked === true"></div>
        </van-checkbox>
        <div class="zhuanyi">
          <div class="dropup">
            <button
              class="btn btn-default dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropup
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <div class="zhuanyi">
          <van-button type="info" size="mini">转移</van-button>
          <van-button type="primary" size="mini">转入公海</van-button>
        </div>
      </div>
      <!-- 转入公海 -->
      <div class="gonghai">
        <van-button type="primary" icon="share-o" size="mini"
          >保护期设置</van-button
        >
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
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  data() {
    return {
      titlelist: [
        {
          name: "公海客户列表",
          start: "",
          bacolor: 0,
          LangthNum: "",
        },
        {
          name: "导入重复数据",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "待审申请",
          start: "",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "新增资源",
          start: "",
          bacolor: 3,
          LangthNum: "",
        },
      ],
      akp:0,
      value: "", // 输入框数据
      mobile: "",
      checked: false, //选择框
      currentPage: 1, //当前页数
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      pageNum: 1, //当前页分页
      pageSize: 3, //当前多少条
    };
  },
  methods: {
     ...userActions(["customerseas"]),
    // 单选
    radio(){

    },
    //跟单管理
    Sing_go(){

    },
    // 全选
    checkAllfalse() {
      this.listing.map((item) => {
        item.flag = this.checked;
      });
    },
    //单选
    radio() {
      this.checked = this.listing.every((item) => {
        return item.flag === true;
      });
    },
     // 返回上一页
    goto() {
      this.$router.go(-1);
    },
      //返回首页
    retreat() {
      this.$router.push("/");
    },
    // 右边点击事件
    logoto() {},
    //搜索
    search(){

    },
    paging(e) {
      // this.pageNum = e;
      // console.log(e);
      // this.$api
      //   .seas(this.pageNum, this.pageSize)
      //   .then((res) => {
      //     console.log(res);
      //     this.lists = res.list;
      //     this.total = res.totalRow;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    //去详情页
    godetail(index) {
      // console.log(index)
      // this.$router.push({
      //   path: "/details",
      //   query: { id: this.lists[index].id },
      // });
    },
  },
  mounted() {
    this.customerseas(
      {
        name:this.value,
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
    );
  },
   computed: {
    ...userState(["listseas","totalRow"]),
  },
};
</script>

<style lang="scss" scoped>
// 全选
.backgr {
  border: 1px solid #e1e2e4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #eff0ef;
}
.gonghai {
  padding: 10px;
}
</style>