<template>
  <div>
    <div class="headdd">
      <!-- 头部导航 -->
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
      <!-- 客户分类 -->
      <div class="Heels central">
        <div class="bot1" :class="akp === -1 ? 'bgggColors' : ''" @click="kehu">
          <div class="bot2">客户列表</div>
        </div>
        <div
          class="Heel_a"
          v-for="(item, index) in titlelist"
          :key="index"
          :class="item.bacolor === akp ? 'bgColors' : ''"
          @click="qblist(item.bacolor)"
        >
          <div class="box1">
            <div class="box2">{{ item.name }}</div>
          </div>
        </div>
        <div class="Heel_a backF5" @click="retreat">返回系统主页</div>
      </div>
      <!-- 搜索框33 -->
      <div class="Heel_c">
        <input
          type="text"
          v-model="values1"
          placeholder="客户名称、联系人、手机号码"
          @keydown.enter="kenter"
        /><button @click="search">搜索</button>
      </div>
      <!-- 客户数量限制： -->
      <div class="maxnumtip">
        <span class="iconfont icon-icon-test2"> </span>客户数量限制：<span
          class="tu1"
          >1</span
        >
        /
        <span class="col_red">无限制</span>
      </div>
      <!-- 客户列表 -->
      <div>
        <div class="m-list">
          <div
            class="m-list-e clearfix"
            v-for="(item, index) in listing"
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
              <span> 校区分类:</span>

              <span>
                客户来源:
                <small v-if="item.state == 0">网络</small>
                <small v-if="item.state == 1">拓展</small>
                <small v-if="item.state == 2">公海数据</small>
              </span>

              <span>
                QQ: <small>{{ item.qqCode }}</small>
              </span>

              <span> 咨询方式:{{ item.modeName }}</span>

              <span>
                电话:
                <a class="tu3" :href="'tel:' + item.mobile">{{
                  item.mobile
                }}</a>
                <a class="tu2 iconfont icon-dianhua"></a>
              </span>
              <span>搜索词:</span><span>微信号:{{ item.wechatCode }}</span>
              <span>预计到校时间:</span><span>网络面试时间:</span>
              <span> 录入者:{{ item.reporter }} </span>
              <span> 录入时间: {{ item.entryTime }}</span>
              <span>
                最后更新:
                <font color="red">{{ item.followRecord }}</font>
                分前
              </span>
              <span> 业务员: </span>
             <span> <div  class="gonghaiyy">
               <div>
                   <van-checkbox
                v-model="item.flag"
                shape="square"
                class="todo"
                @change="radio"
              ></van-checkbox>
               </div>
                <button class="gonghaipp" @click="gonghai(item)">加入公海</button>
              </div></span>
              <!-- (编号: {{ item.id }} ) -->
              <span></span>
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
          icon-size="22px"
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
          <van-button type="primary" size="mini" @click="Thesea">转入公海</van-button>
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
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      titlelist: [
        // {
        //   name: "客户列表",
        //   start: "",
        //   bacolor: 0,
        //   LangthNum: "",
        // },
        {
          name: "网络客户",
          start: "",
          bacolor: 0,
          LangthNum: "",
        },
        {
          name: "扩展客户",
          start: "",
          bacolor: 1,
          LangthNum: "",
        },
        {
          name: "公海客户",
          start: "",
          bacolor: 2,
          LangthNum: "",
        },
        {
          name: "我的共享",
          visit: "-1",
          bacolor: 3,
          LangthNum: "",
        },
        {
          name: "共享给我",
          visit: "0",
          bacolor: 4,
          LangthNum: "",
        },
        {
          name: "今日新增",
          visit: "1",
          bacolor: 5,
          LangthNum: "",
        },
        {
          name: "本周新增",
          foll: "0",
          bacolor: 6,
          LangthNum: "",
        },
        {
          name: "本月新增",
          foll: "1",
          bacolor: 7,
          LangthNum: "",
        },
        {
          name: "撞单查询",
          deal: "0",
          bacolor: 8,
          LangthNum: "",
        },
        {
          name: "新增客户",
          deal: "1",
          bacolor: 9,
          LangthNum: "",
        },
      ],
      akp: -1,
      values1: "", // 输入框数据
      checked: false, //选择框
      currentPage: 1, //当前页数
      value1: "", //点击变色高亮
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      currentPage: 1, //当前页分页
      pageSize: 10, //
      article:[], //筛选出的数据
      list:[] ,//筛选出的id
      separate:[] //删除单个
    };
  },
  methods: {
    ...userActions(["recommend"]),
    // 搜索
    search() {
      this.$store.dispatch("user/recommend", {
        id: this.usernameId,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.values1,
        marjon: this.current,
      });
    },
    // 搜索
    kenter() {
      this.search();
    },
    //返回首页
    retreat() {
      this.$router.push("/");
    },
    // 返回上一页
    goto() {
      this.$router.go(-1);
    },
    // 右边点击事件
    logoto() {},
    //导航点击分类
    qblist(value111) {
      this.akp = value111;
       this.$store.dispatch("user/recommend", {
        id: this.usernameId,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.values1,
        marjon: this.akp,
      });
    },
    //去详情页
    godetails(index) {
      this.$router.push({
        path: "/details",
        query: { id: this.listing[index].id },
      });
    },
    //客户列表
    kehu() {
        this.akp = -1;
         this.$store.dispatch("user/recommend", {
        id: this.usernameId,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.values1,
        marjon: this.akp,
      });
    },
    //列表内放入公海
    gonghai(item){
       this.separate = item.id
        this.$dialog.confirm({
          message:"你确认放入公海数据吗"
        }).then(res => {
           this.$store.dispatch("user/intoSeasCustomer", {
                ids:this.separate,
               accountId:this.usernameId,
            });
              this.recommend({
              id: this.usernameId,
              currentPage: this.currentPage,
              pageSize: this.pageSize,
              value: this.values1,
              marjon: this.akp,
          });
        this.$toast.success("放入成功");
        }).catch(err => {
           this.$toast({
          message: "你已取消",
        });
          console.log(err)
        })
    },
    //底部放入公海
    Thesea(){
      this.article = this.listing.filter(item => {
        return item.flag === true
      })
      if(this.article.length > 0){
        this.$dialog
          .confirm({
            message: "你确认放入公海数据吗"
          }).then(res => {
             this.article.map(item => {
              this.list.push(item.id)
            })
                this.recommend({
                id: this.usernameId,
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                value: this.values1,
                marjon: this.akp,
            });
             this.$toast.success("放入成功");
          }).catch(err => {
            console.log(err)
          })
      }else {
        this.$toast({
          message: "你还没有选择要放入的内容",
        });
      }
    },
    // 分页
    paging(e) {
      this.currentPage = e;
      this.$store.dispatch("user/recommend", {
        id: this.usernameId,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        value: this.values1,
        marjon: this.akp,
      });
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
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.recommend({
      id: this.usernameId,
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      value: this.values1,
      marjon: this.akp,
    });
  },
  watch: {
    // 监听输入框事件
    values1(val) {
      if (this.values1 === "") {
        this.search();
      }
    },
  },
  computed: {
    ...userState(["listing", "total"]),
  },
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
.gonghaipp{
  background-color: #096;
  border: none;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  padding: 0px 10px;
}
.gonghaiyy{
  height: 40px;
  display: flex;
  align-items: center;
}
</style>