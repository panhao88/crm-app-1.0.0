<template>
  <div>
    <div class="backgroun">
      <div v-for="item in internationalist" :key="item.id" class="back_ground">
        <div class="name_size">
          <div>
            <van-checkbox
              v-model="item.flag"
              shape="square"
              class="todo"
              @change="radio"
            ></van-checkbox>
          </div>
          <div>
            {{ item.name }}({{ item.visitortype }})-{{ item.statusName }}
          </div>
        </div>
        <div class="glosizi">
          <div class="box-one">
            <div class="bot-to">
              <div class="dv_size">客户电话:{{ item.mobile }}</div>
              <div class="dv_size">QQ:{{ item.qqCode }}</div>
            </div>
            <div class="bot-to">
              <div class="dv_size">联系人:{{ item.num }}</div>
              <div class="dv_size">微信:{{ item.wechatCode }}</div>
            </div>
          </div>
          <div class="buom">
            <div>
              <button class="gonghaipp" @click="the_order(item)">
                查看跟单
              </button>
            </div>
            <div>
              <button class="gonghaippp" @click="gonghai(item)">
                获取信息
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sieze">
        <van-checkbox
          v-model="checked"
          checked-color="#07c160"
          icon-size="22px"
          @click="checkAllfalse"
        >
        </van-checkbox>
        <div class="bom">
          <van-button type="primary" size="mini" @click="Thesea"
            >全部获取</van-button
          >
        </div>
      </div>
      <van-pagination
        v-model="currentPage"
        :total-items="Seatotal"
        :show-page-size="5"
        :items-per-page="pageSize"
        @change="paging"
      />
    </div>
    <van-dialog v-model="show" title="跟单详情" :close-on-click-overlay="true" :show-confirm-button="false">
      <div v-if="setlist.length > 0">
        <van-divider />
          <div v-for="item in setlist" :key="item.id" >
          <div class="mername">
            <div>{{ item.customerName }}-{{ item.statusName }}</div>
            <div>{{ item.createAt }}</div>
          </div>
          <div class="remarksizi">
            <div>{{ item.remark }}</div>
          </div>
          <div class="bor-derone"></div>
        </div>
      </div>
      <div v-else>
        <van-empty description="暂无跟单"> </van-empty>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
const Module = createNamespacedHelpers("documentary");
const { mapState: listState, mapActions: listActions } = Module;
export default {
  name: "",
  props: {
    internationalist: {
      type: Array,
    },
    Seatotal: {
      type: Number,
    },
    usernameId: {
      type: Number,
    },
  },
  components: {},
  data() {
    return {
      checked: false,
      currentPage: 1, // 分页
      pageNum: 1,
      pageSize: 10,
      article: [], //筛选出的数据
      list: [], //筛选出的id
      show: false,
    };
  },
  methods: {
    ...userActions(["obtain"]),
    ...listActions(["thedetalils"]),
    //获取客户信息
    gonghai(item) {
      let id = item.id;
      this.obtain({
        accountId: this.usernameId,
        ids: id,
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
    //查看跟单
    the_order(item) {
      let id = item.id;
      this.show = true;
      this.thedetalils({
        customer: id,
      });
    },
    //全部获取
    Thesea() {
      if (this.list.length > 0) {
        this.$dialog
          .confirm({
            message: "你确认放入公海数据吗",
          })
          .then((res) => {
            this.obtain({
              accountId: this.usernameId,
              ids: this.list,
              pageNum: this.currentPage,
              pageSize: this.pageSize,
            });
            this.list = [];
            this.checked = false;
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
    //单选
    radio() {
      this.checked = this.internationalist.every((item) => {
        return item.flag === true;
      });
    },
    //全选
    checkAllfalse() {
      this.internationalist.map((item) => {
        item.flag = this.checked;
      });
      if (this.checked === true) {
        this.article = this.internationalist.filter((item) => {
          return item.flag === true;
        });
        this.article.map((item) => {
          this.list.push(item.id);
        });
      } else {
        this.list = [];
        this.checked = false;
      }
    },
    paging(e) {
      this.currentPage = e;
      this.$store.dispatch("user/getcustomerSeasPage", {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      });
    },
  },
  mounted() {},
  watch: {},
  computed: {
    ...listState(["setlist"]),
  },
};
</script>

<style scoped lang='scss'>
.gonghaipp {
  background-color: #096;
  border: none;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-end;
}
.gonghaippp {
  background-color: #1989fa;
  border: none;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-end;
}
.back_ground {
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
  font-weight: bold;
  background: #fff;
}
.name_size {
  font-size: 15px;
  font-weight: bold;
  color: #007aff;
  display: flex;
}
.glosizi {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.box-one {
  width: 80%;
  font-weight: 600;
  font-size: 14px;
}
.bot-to {
  width: 100%;
  display: flex;
  border-bottom: 1px dotted #ddd;
}
.dv_size {
  width: 50%;
  padding: 10px;
}
.buom {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.backgroun {
  background: #efeeee;
}
.sieze {
  padding: 0 10px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
}
.bom {
  padding: 0px 10px 10px 10px;
}
.mername {
  font-weight: bold;
  padding: 0 10px;
}
.bor-derone {
  border-bottom: 1px dotted #dede;
}
.remarksizi {
  padding: 10px;
}
.van-dialog {
  height: 55vh;
  overflow: auto;
}
.van-button::before{
  bottom: 0px;
}
</style>