<template>
  <div>
    <div>
      <div>
         <!-- 搜索框33 -->
        <div class="Heel_c">
          <input
            type="text"
            v-model="values1"
            placeholder="客户名称"
            @keydown.enter="kenter"
          /><button @click="search">搜索</button>
        </div>
        <!-- 客户数量限制： -->
        <div class="maxnumtip">
          <span class="iconfont icon-icon-test2"
            >客户数量：(<small class="f-c-hong"> {{ total }}</small
            >)条数据</span
          >
        </div>
        <div class="m-list">
          <div
            class="m-list-e clearfix"
            v-for="(item, index) in listing"
            :key="index"
          >
            <div class="m-list-title clearfix goto">
              <span @click="godetails(index)"
                >{{ item.name }}-({{ item.id }})</span
              >
            </div>
            <div class="m-list-con clearfix">
              <span>
                类型:
                <small v-for="itemtype in typelist" :key="itemtype.id">
                  <small v-if="item.customerType === itemtype.id">{{
                    itemtype.name
                  }}</small>
                </small>
              </span>
              <span>
                来源:
                <small v-for="item1 in Source" :key="item1.id">
                  <small v-if="item.customerSource === item1.id">{{
                    item1.code
                  }}</small>
                </small>
              </span>
              <span
                >微信号:<small>{{ item.wechatCode }}</small></span
              >
              <span>
                QQ: <small>{{ item.qqCode }}</small>
              </span>

              <span>
                咨询方式:<small>{{ item.consultationType }}</small></span
              >

              <span>
                电话:
                <a class="tu3" :href="'tel:' + item.mobile">{{
                  item.mobile
                }}</a>
              </span>
              <span>
                录入者:
                <small v-for="item2 in salesmanlist" :key="item2.id">
                  <small v-if="item.reporter === item2.id">{{
                    item2.realName
                  }}</small>
                </small>
              </span>
              <span>
                业务员:
                <small v-for="item3 in salesmanlist" :key="item3.id">
                  <small v-if="item.accountId === item3.id">{{
                    item3.realName
                  }}</small>
                </small>
              </span>
              <span
                >校区:
                <small v-for="itemone in campuslist" :key="itemone.id">
                  <small v-if="item.campusId === itemone.id">{{
                    itemone.name
                  }}</small>
                </small></span
              >
              <span
                >团队:
                <small v-for="itemtwo in teamlist" :key="itemtwo.id">
                  <small v-if="item.teamId === itemtwo.id">{{
                    itemtwo.name
                  }}</small>
                </small>
              </span>
              <div class="note clearfix">
                录入时间: <small>{{ item.entryTime }}</small>
              </div>
              <div class="note clearfix">
                搜索词:<small>{{ item.searchTerms }}</small>
              </div>
              <span>
                最后更新:
                <small v-if="item.minC >= 1 && item.minC < 59">
                  {{ Math.ceil(item.minC) }}分钟前
                </small>
                <small v-if="item.hourC >= 1 && item.hourC < 24">
                  {{ Math.ceil(item.hourC) }}小时前
                </small>
                <small v-if="item.dayC >= 1 && item.dayC < 30">
                  {{ Math.ceil(item.dayC) }}天前
                </small>
                <small v-if="item.year >= 1">
                  {{ Math.ceil(item.year) }}年前
                </small>
              </span>
              <span></span>

              <div class="note clearfix">
                <div class="gonghaiyy">
                  <div>
                    <van-checkbox
                      v-model="item.flag"
                      shape="square"
                      class="todo"
                      @change="radio"
                    ></van-checkbox>
                  </div>
                  <div>
                    <button class="gonghaipp" @click="gonghai(item)">
                      加入公海
                    </button>
                  </div>
                  <div>
                    <button class="gonghaipp" @click="contact(item)">
                      增加联系人
                    </button>
                  </div>
                  <div>
                    <button class="gonghaipp" @click="Modify(item)">
                      修改
                    </button>
                  </div>
                </div>
              </div>
              <!-- (编号: {{ item.id }} ) -->
            </div>
            <div class="m-list-bottom">
              <span class="m-l-b-num">
                <span
                  class="lianxi"
                  @click="hecontact(index)"
                  v-if="item.contactsNum === null"
                  >联系人<span class="f-c-hong"> (0)</span></span
                >
                <span
                  class="lianxi"
                  @click="hecontact(item)"
                  v-if="item.contactsNum > 0"
                  >联系人<span class="f-c-hong">
                    ({{ item.contactsNum }})</span
                  ></span
                >
              </span>
              <span class="m-l-b-num" @click="Thedocumentary(item)">
                <span class="lianxi">跟单管理 </span>
                <span class="f-c-hong"></span>
              </span>
              <!-- <span class="m-l-b-num">
                <span class="lianxi">订单管理 </span><span>(0) </span>
              </span>
              <span class="m-l-b-num">
                <span class="lianxi">合同管理 </span> <span>(0)</span>
              </span> -->
            </div>
          </div>
        </div>
      </div>
      <!-- 全选 -->
      <div class="backgr">
        <van-checkbox
          v-model="checked"
          checked-color="#07c160"
          icon-size="22px"
          @click="checkAllfalse"
          >你可以将选中信息:
          <div v-if="checked === false"></div>
          <div v-if="checked === true"></div>
        </van-checkbox>
        <div class="zhuanyi"></div>
        <div class="zhuanyi">
          <van-button type="info" size="mini">转移</van-button>
          <van-button type="primary" size="mini" @click="Thesea"
            >转入公海</van-button
          >
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
        :total-items="total"
        :show-page-size="5"
        :items-per-page="pageSize"
        @change="paging"
      />
    </div>
    <!-- 查看联系人 -->
    <div>
      <van-dialog
        v-model="show"
        title="联系人"
        show-cancel-button
        :close-on-click-overlay="true"
        :show-confirm-button="false"
      >
          <div v-for="item in conlist" :key="item.id">
            <div class="dialog" v-if="conlist.length > 0">
              <div>姓名：{{ item.name }}</div>
              <div>
                电话：
                <a class="tu3" :href="'tel:' + item.mobile">{{ item.mobile }}</a
                ><a class="tu2 iconfont icon-dianhua"></a>
              </div>
            </div>
            <van-divider />
          </div>
      </van-dialog>
    </div>
    <!-- 新增联系人 -->
    <div>
      <van-dialog
        v-model="toshow"
        title="新增联系人"
        show-cancel-button
        :close-on-click-overlay="true"
        @confirm="ok"
      >
        <van-cell-group>
          <van-field v-model="name" label="姓名" placeholder="请输入姓名" />
          <van-field v-model="phone" label="电话" placeholder="请输入电话" />
        </van-cell-group>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {
    listing: {
      type: Array,
    },
    total: {
      type: Number,
    },
    usernameId: {
      type: Number,
    },
    Source: {
      type: Array,
    },
    salesmanlist: {
      type: Array,
    },
    campuslist: {
      type: Array,
    },
    teamlist: {
      type: Array,
    },
    typelist: {
      type: Array,
    },
    // "Source",
    // "salesmanlist",
    // "campuslist",
    // "teamlist",
    // "typelist",
  },
  components: {},
  data() {
    return {
      values1: "", // 输入框数据
      show: false, //联系人弹窗
      toshow: false, //新增联系人
      currentPage: 1, // 分页
      pageNum: 1,
      pageSize: 10,
      checked: false, //选择框
      article: [], //筛选出的数据
      list: [], //筛选出的id
      separate: [], //删除单个
      conlist: [], //联系人列表
      name: "",
      phone: "",
      id: "",
    };
  },
  methods: {
    ...userActions(["intoSeasCustomer", "Addcntacts","recommend"]),
    //去详情页
    godetails(index) {
      this.$router.push({
        path: "/details",
        query: { id: this.listing[index].id },
      });
    },
    //跳转到跟单管理
    Thedocumentary(item) {
      this.$router.push({
        path: "/Petaliest",
        query: { idb: item.id },
      });
    },
    //修改客户详情
    Modify(item) {
      let idp = item.id;
      this.$router.push({
        path: "/Modify",
        query: { id: idp },
      });
    },
     // 搜索
    search() {
      this.recommend({
        accountId: this.usernameId,
        name: this.values1,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
    // 搜索
    kenter() {
      this.search();
    },
    //底部放入公海
    Thesea() {
      if (this.list.length > 0) {
        this.$dialog
          .confirm({
            message: "你确认放入公海数据吗",
          })
          .then((res) => {
            this.intoSeasCustomer({
              ids: this.list,
              accountId: this.usernameId,
              pageNum: this.currentPage,
              pageSize: this.pageSize,
            });
            this.list = [];
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$toast({
          message: "你还没有选择要放入的内容",
        });
      }
    },
    //联系人
    hecontact(item) {
      let id = item.id;
      this.show = true;
      this.$api
        .Thecontact({ id: id })
        .then((res) => {
          this.conlist = res.list;
          console.log(res, "联系人");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //添加联系人
    contact(item) {
      this.id = item.id;
      this.toshow = true;
    },
    ok() {
      this.Addcntacts({
        accountId: this.usernameId,
        customerId: this.id,
        name: this.name,
        mobile: this.phone,
      });
      this.toshow = false;
      this.name = "";
      this.phone = "";
    },
    //列表内放入公海
    gonghai(item) {
      this.separate = item.id;
      this.intoSeasCustomer({
        ids: this.separate,
        accountId: this.usernameId,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
    // 分页
    paging(e) {
      this.currentPage = e;
      this.$store.dispatch("user/recommend", {
        accountId: this.usernameId,
        serarchPara: this.values1,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
      let topHeight = document.getElementById("top").offsetHeight;
      let timer = setInterval(() => {
        let height = document.documentElement.scrollTop % 500;
        if (height !== topHeight) {
          document.documentElement.scrollTop =
            document.documentElement.scrollTop - 500;
          if (
            document.documentElement.scrollTop >= 500 &&
            document.documentElement.scrollTop < 1000
          ) {
            let reduce = height + 500 - topHeight;
            document.documentElement.scrollTop =
              document.documentElement.scrollTop - reduce;
            clearInterval(timer);
          }
        }
      }, 30);
    },
    // 全选
    checkAllfalse() {
      this.listing.map((item) => {
        item.flag = this.checked;
      });
      if (this.checked === true) {
        this.article = this.listing.filter((item) => {
          return item.flag === true;
        });
        this.article.map((item) => {
          this.list.push(item.id);
        });
        console.log(this.list);
      } else {
        this.list = [];
        this.checked = false;
      }
    },
    //单选
    radio() {
      this.checked = this.listing.every((item) => {
        return item.flag === true;
      });
    },
  },
  mounted() {},
  watch: {
     // 监听输入框事件
    values1(val) {
      if (this.values1 === "") {
        this.search();
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
// 分页
.fenye {
  margin-top: 20px;
}
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
.bot1 {
  width: 33.3%;
  height: 30px;
  border: 0.1px solid #fff;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
  background-color: #488dc9;
}
.bgggColors {
  background-color: #f56659;
}
.bgColors {
  background-color: #f56659 !important;
}
.gonghaipp {
  background-color: #096;
  border: none;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  padding: 0px 10px;
  margin-left: 10px;
}
.gonghaiyy {
  height: 40px;
  display: flex;
  align-items: center;
}
.bot2 {
  text-align: center;
}
.dialog {
  padding-left: 10px;
}
</style>