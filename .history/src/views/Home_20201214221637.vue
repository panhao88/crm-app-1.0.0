<template>
  <div>
    <!-- 头部导航1111111 -->
    <div id="_nav">
      <van-nav-bar :fixed="true" :z-index="3">
        <template #left>
          <van-icon name="flag-o" size="24" color="grey" />
        </template>
        <template #right>
          <van-icon name="friends" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 客户管理 -->
    <div class="central">
      <div>
        <div class="customer_a">客户管理</div>
        <div class="customer_b">
          <van-grid :column-num="4">
            <!-- 客户管理 -->
            <van-grid-item @click="goto(allocation.url)">
              <div class="box1 b-o">
                <div>
                  <img src="../assets/kehu.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ allocation.way }}</div>
            </van-grid-item>
            <!-- 跟单管理 -->
            <van-grid-item @click="goto(UserControl.url)">
              <div class="box1 b-r">
                <div>
                  <img src="../assets/biji.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ UserControl.way }}</div>
            </van-grid-item>
            <!-- 到访管理 -->
            <van-grid-item>
              <div class="box1 b-g" @click="goto(PerControl.url)">
                <div>
                  <img src="../assets/guanli.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ PerControl.way }}</div>
            </van-grid-item>
            <!-- 校区合同管理 -->
            <van-grid-item>
              <div class="box1 b-f" @click="goto(VisitControl.url)">
                <div>
                  <img src="../assets/hetong2.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ VisitControl.way }}</div>
            </van-grid-item>
            <!-- 售后管理 -->
            <van-grid-item>
              <div class="box1 b-l" @click="goto(TarControl.url)">
                <div>
                  <img src="../assets/shouhou.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ TarControl.way }}</div>
            </van-grid-item>
            <!-- 财务管理 -->
            <van-grid-item>
              <div class="box1 b-t" @click="goto(WageControl.url)">
                <div>
                  <img src="../assets/caiwu.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ WageControl.way }}</div>
            </van-grid-item>
            <!-- 客户公海 -->
            <van-grid-item>
              <div class="box1 b-n" @click="goto(SingControl.url)">
                <div>
                  <img src="../assets/gonghai.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ SingControl.way }}</div>
            </van-grid-item>
            <!-- 回收站 -->
            <van-grid-item>
              <div class="box1 b-h" @click="goto(recycle.url)">
                <div>
                  <img src="../assets/huishouzhan.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ recycle.way }}</div>
            </van-grid-item>
            <!-- 客户名片夹 -->
            <van-grid-item>
              <div class="box1 b-d" @click="goto(invite.url)">
                <div>
                  <img src="../assets/mingpian.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ invite.way }}</div>
            </van-grid-item>
            <!-- 客户生日提醒 -->
            <van-grid-item>
              <div class="box1 b-z" @click="goto(reception.url)">
                <div>
                  <img src="../assets/lingdang.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ reception.way }}</div>
            </van-grid-item>
            <!-- 更新版本 -->
            <van-grid-item>
              <div class="box1" @click="Popup">
                <div>
                  <img src="../assets/update.png" alt="" class="img" />
                </div>
              </div>
              <div class="f-s-12">{{ genxin.way }}</div>
              <!-- 弹窗 -->
              <van-popup
                round
                position="bottom"
                class="tanchuang"
                v-model="show"
              >
                <div v-if="flag === true">
                  <h4>发现新版本</h4>
                  <div>更新内容:{{ verseonexplain }}</div>
                  <div class="hplok">
                    <div class="didi" @click="previous">前往升级</div>
                  </div>
                </div>
                <div v-if="flag === false">
                  
                </div>
              </van-popup>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <!-- 其他应用 -->
      <div class="customer_a">其他应用</div>
      <div class="customer_b">
        <van-grid :column-num="4">
          <!-- 校区专业管理 -->
          <van-grid-item>
            <div class="box1 b-l" @click="goto(campus.url)">
              <div><img src="../assets/xuaoyuan.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ campus.way }}</div>
          </van-grid-item>
          <!-- 内部通讯 -->
          <van-grid-item>
            <div class="box1 b-d" @click="goto(maillist.url)">
              <div><img src="../assets/tongxun.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ maillist.way }}</div>
          </van-grid-item>
          <!-- 内部公告 -->
          <van-grid-item>
            <div class="box1 b-h" @click="goto(Internalannouncement.url)">
              <div><img src="../assets/gongao.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ Internalannouncement.way }}</div>
          </van-grid-item>
          <!-- 知识库 -->
          <van-grid-item>
            <div class="box1 b-f" @click="goto(knowledgebase.url)">
              <div><img src="../assets/aixin.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ knowledgebase.way }}</div>
          </van-grid-item>
          <!-- 工作报告 -->
          <van-grid-item>
            <div class="box1 b-g" @click="goto(report.url)">
              <div><img src="../assets/yuyu.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ report.way }}</div>
          </van-grid-item>
          <!-- 文件管理 -->
          <van-grid-item>
            <div class="box1 b-r" @click="goto(file.url)">
              <div><img src="../assets/wenjian.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ file.way }}</div>
          </van-grid-item>
          <!-- 到访工单管理 -->
          <van-grid-item>
            <div class="box1 b-o" @click="goto(Workorder.url)">
              <div><img src="../assets/gongdan.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ Workorder.way }}</div>
          </van-grid-item>
          <!-- 员工原理 -->
          <van-grid-item>
            <div class="box1 b-z" @click="goto(staff.url)">
              <div><img src="../assets/opop.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ staff.way }}</div>
          </van-grid-item>
          <!-- 登录日志 -->
          <van-grid-item>
            <div class="box1 b-d" @click="goto(journal.url)">
              <div><img src="../assets/rizhi.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ journal.way }}</div>
          </van-grid-item>
          <!-- 操纵记录 -->
          <van-grid-item>
            <div class="box1 b-n" @click="goto(record.url)">
              <div><img src="../assets/iiio.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ record.way }}</div>
          </van-grid-item>
          <!-- 快递查询 -->
          <van-grid-item>
            <div class="box1 b-t" @click="goto(express.url)">
              <div><img src="../assets/kuaidi.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ express.way }}</div>
          </van-grid-item>
          <!-- 帮助中心 -->
          <van-grid-item>
            <div class="box1 b-l" @click="goto(help.url)">
              <div><img src="../assets/deng.png" alt="" class="img" /></div>
            </div>
            <div class="f-s-12">{{ help.way }}</div>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="button_b">
        <van-button type="danger" class="button" @click="cancellation"
          >注销登录</van-button
        >
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
    return {
      allocation: { way: "客户管理", url: "/customer" },
      UserControl: { way: "跟单管理", url: "/documentary" },
      PerControl: { way: "到访管理", url: "/arrive" },
      VisitControl: { way: "校区合同管理", url: "/campus" },
      TarControl: { way: "售后管理", url: "/Aftersale" },
      WageControl: { way: "财务管理", url: "/Finance" },
      SingControl: { way: "客户公海", url: "/internationalwaters" },
      recycle: { way: "回收站", url: "/recyclebin" },
      invite: { way: "客户名片夹", url: "/businesscard" },
      reception: { way: "客户生日提醒", url: "/birthday" },
      genxin: { way: "更新版本", url: "/genxin" },
      campus: { way: "校区专业管理", url: "/addUser" },
      maillist: { way: "内部通讯录", url: "/User" },
      Internalannouncement: { way: "内部公告", url: "/Ment" },
      knowledgebase: { way: "知识库", url: "/visit" },
      report: { way: "工作报告", url: "/indic" },
      file: { way: "文件管理", url: "/Username" },
      Workorder: { way: "到访工单管理", url: "/Heel" },
      staff: { way: "员工管理", url: "/updata" },
      journal: { way: "登陆日志", url: "/invites" },
      record: { way: "操纵记录", url: "/reception" },
      express: { way: "快递查询", url: "/consult" },
      help: { way: "帮助中心", url: "/appfinance" },
      show: false, // 更新弹窗
      website: "", //更新的官网地址
      verseonexplain: "", //更新内容
      myversion: "", //当前版本号
      flag: true,
    };
  },
  methods: {
    //去内战
    goto(url) {
      this.$router.push(url);
    },
    // 注销登录
    cancellation() {
      localStorage.removeItem("user");
      this.$router.push("login");
    },
    //弹窗
    Popup() {
      this.show = true;
    },
    getdata() {
      this.$api
        .update()
        .then((res) => {
          this.myversion = plus.runtime.version;
          this.website = res.data.annex;
          this.verseonexplain = res.data.content;
          if (this.myversion !== res.data.version) {
            this.flag = true
          } 
          if()
          console.log(res, "版本更新");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //前往升级
    previous() {
      plus.runtime.openURL(`http://ce.96291.club:82${this.website}`);
    },
  },
  mounted() {
    this.getdata();
  },
};
// }
</script>

<style scoped lang='scss'>
.customer_a {
  font-size: 16px;
  font-weight: 550;
  margin-top: 10px;
  margin-left: 10px;
}
.customer_b {
  margin-top: 10px;
}
.central {
  margin-bottom: 50px;
  // max-height:windowHeight;
  // overflow: hidden;
  // margin-bottom: 40px;
  // margin-top: 50px;
}
.img {
  width: 35px;
  height: 35px;
}
.box1 {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}
.iconfont {
  font-size: 22px;
}
// /deep/ .van-nav-bar__content{
//   height:50px;
// }
//弹窗
.van-popup {
  text-align: center;
}
.van-popup p {
  margin-bottom: 20px;
}
.tanchuang {
  height: 30%;
}
.hplok {
  width: 100%;
  display: flex;
  justify-content: center;
}
.didi {
  position: fixed;
  width: 90%;
  background: red;
  border: 1px solid black;
  height: 40px;
  line-height: 40px;
  bottom: 0px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}
</style>