<template>
  <div>
    <!-- 新增跟单 -->
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" title="数据操纵">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" @click="logoto" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 新增管理跟单 -->
    <div class="central">
      <div class="size">新增管理跟单</div>
      <div>
        <div>
          <table>
            <tr>
              <td class="boedee-a">客户名称:</td>
              <td class="boedee-b">
                {{ name.customerName }}(编号:{{ name.customerId }})
              </td>
            </tr>
            <tr>
              <td class="boedee-a">跟单方式:</td>
              <td class="boedee-b">
                <select v-model="valueone" class="selectpl" @change="gendan">
                  <option value="" disabled selected>请选择</option>
                  <option
                    v-for="item in statelist"
                    :key="item.id"
                    :value="item"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">跟单状态:</td>
              <td class="boedee-b">
                <select v-model="valuetow" class="selectpl" @change="zhugte">
                  <option value="" disabled selected>请选择</option>
                  <option
                    v-for="(item, index) in way"
                    :key="index"
                    :value="item"
                  >
                    <div class="choice">{{ item.name }}</div>
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">跟单对象:</td>
              <td class="boedee-b">
                <select v-model="valuesrrot" class="selectpl" @change="didi">
                  <option value="" disabled selected>请选择</option>
                  <option
                    v-for="item in Documentary"
                    :key="item.id"
                    :value="item"
                  >
                    {{ item.name }}-{{ item.mobile }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">下次联系:</td>
              <td class="boedee-b">
                <!-- <van-field
                  v-model="day"
                  placeholder="请输入出生年月"
                  @click="showPopup"
                ></van-field> -->
                <input
                  type="text"
                  v-model="day"
                  placeholder="请输入出生年月"
                  @click="showPopup"
                  onfocus="this.blur()"
                  class="year"
                />
                <van-popup
                  v-model="show"
                  position="bottom"
                  :style="{ height: '40%' }"
                >
                  <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="value111"
                    @cancel="cancel"
                  />
                </van-popup>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">附件:</td>
              <td class="boedee-b">
                <van-uploader :after-read="afterRead" v-model="fileList">
                  <van-button icon="plus" type="primary" class="wenjian"
                    >上传文件</van-button
                  >
                </van-uploader>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <div class="chat">用户聊天：</div>
        </div>
        <div>
          <textarea class="comments" v-model="valuezhi" id="demo"> </textarea>
        </div>
        <div class="cunpl">
          <van-button type="primary" class="baocun" @click="save"
            >保存</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upLoaderImg from "../../http/upLoaderImg";
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("documentary");
const { mapState: userState, mapActions: userActions } = userModule;
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      name: {}, //名字
      text: "", //年月日
      show: false, //弹出框
      currentDate: new Date(), //时间选择器
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2025, 10, 1),
      id: "", //客户id
      usernameId: 0, //获取用户id
      username: {}, //获取用户信息
      valueone: "", //跟单方式
      valuetow: "", //跟单状态
      valuesrrot: "", //跟单对象
      day: "", //跟单时间
      fileList: [], //文件上传
      valuezhi: "", //文本值
      ids: "", //列表id
      type: "", // 跟单类型
      contacts: "", //联系人id
      phway: "", //跟单方式id
      plstate: "", //跟单状态id
    };
  },
  methods: {
    ...userActions([
      "Documenway",
      "liststate",
      "listobject",
      "upload",
      "addseve",
    ]),
    //返回上一页
    goto() {
      this.$router.go(-1);
    },
    //返回首页
    logoto() {
      // this.$router.push("/");
    },
    //点击时间
    showPopup() {
      this.show = true;
    },
    //点击完成按钮时触发
    value111(value) {
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
      let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
      let time = hours +":"+minutes+":"+ seconds
      this.day = dayjs(value).format(`YYYY-MM-DD  ${time}`);
      // console.log(this.day)
      this.show = false;
    },
    //点击取消时触发
    cancel() {
      this.show = false;
    },
    //保存
    save() {
      if (this.valueone === "") {
        this.$toast.fail("跟单方式不能为空");
      } else if (this.plstate === "") {
        this.$toast.fail("跟单状态不能为空");
      } else if (this.contacts === "") {
        this.$toast.fail("跟单对象不能为空");
      } else if (this.day === "") {
        this.$toast.fail("跟单时间不能为空");
      } else if (this.valuezhi === "") {
        this.$toast.fail("跟单备注不能为空");
      } else {
        this.addseve({
          customerId: this.ids,
          modeId: this.phway,
          statusId: this.plstate,
          lastAt: this.day,
          remark: this.valuezhi,
          accountId: this.usernameId,
          type: this.type,
          contactsId: this.contacts,
        });
        this.$toast.success("保存成功");
        this.$router.push("/Petaliest");
      }
    },
    //跟单对象
    didi() {
      this.type = this.valuesrrot.type;
      //  console.log(this.type)
      this.contacts = this.valuesrrot.id;
      // console.log(this.contacts)
    },
    //跟单方式
    gendan() {
      this.phway = this.valueone.id;
    },
    //跟单状态
    zhugte() {
      this.plstate = this.valuetow.id;
      // console.log(this.plstate,"ouuu")
    },
    //文件上传
    async afterRead(file) {
      //文件读取完成后的回调函数
      let uploadImg = await upLoaderImg(file.file); //使用上传的方法。file.file
      console.log(uploadImg);
    },
    // afterRead(file) {
    // async onread(file) {
    //   let formdata = new window.formdata();
    //   formdata.append("file", file.file);
    //   try {
    //     let res = await api.upload(url, formdata, {
    //       headers: {
    //         "content-type": "multipart/form-data",
    //       },
    //     });
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //     this.$toast(`网络连接错误, 请稍后再试!`);
    //   }
    // 21 },
    // this.fileList = file.file.name
    //   console.log(file.file,11)
    //   console.log(file.file.name,55);
    // file.status = "uploading";file
    // file.message = "上传中...";
    // console.log(file,"111");
    // let data = {};
    // data.file = file;
    // console.log(data,"333");
    // this.$store.dispatch("documentary/upload", {
    //   file: file.file,
    //   accountId: this.usernameId,
    // });
    // // console.log(file,11)

    //  if(this.fileList.length > 1){
    //            this.fileList.splice(1);
    //            this.$msg({
    //                text:'只能选择这么多!',
    //                type:'info'
    //            })
    //            return false;
    //        }
    //        let Files = this.Files;
    //        Files.push(file.file);
    // 此时可以自行将文件上传至服务器
    // },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    // console.log(this.usernameId,"id")
    this.name = this.$route.query.name;
    this.id = this.name.customerId;
    this.Documenway();
    this.liststate();
    this.listobject({ id: this.id });
    this.ids = JSON.parse(localStorage.getItem("ids"));
  },
  watch: {},
  computed: {
    ...userState(["statelist", "way", "Documentary"]),
  },
};
</script>

<style scoped lang='scss'>
.size {
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  font-weight: 600;
}
.cunpl {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.baocun {
  width: 100%;
  z-index: 999;
}
.selectpl {
  width: 70%;
  height: 25px;
}
.van-cell {
  padding: 0px;
  background-color: #fff;
}
.wenjian {
  height: 30px;
}
.year {
  border: none;
}
.chat {
  padding: 10px;
}
.comments {
  width: 355px;
  height: 200px;
  margin-left: 10px;
}
</style>