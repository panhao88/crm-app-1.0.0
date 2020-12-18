<template>
  <div>
    <!-- 新增客户 -->
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" class="vanbar" title="新增客户">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <div class="central">
      <table>
        <tr>
          <td class="boedee-a">客户名称:</td>
          <td class="boedee-b">
            <van-field v-model="name" placeholder="请输入客户名称" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">学历:</td>
          <td class="boedee-b">
            <select v-model="schooling" class="selectpl" @change="formal">
              <option value="" disabled selected>请选择学历</option>
              <option
                v-for="(item, index) in formallist"
                :key="index"
                :value="item"
              >
                <div>{{ item.name }}</div>
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">咨询方式:</td>
          <td class="boedee-b">
            <select v-model="consulting" class="selectpl" @change="way">
              <option value="" disabled selected>请选择咨询方式</option>
              <option
                v-for="(item, index) in loveconsulting"
                :key="index"
                :value="item"
              >
                {{ item.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">手机号码:</td>
          <td class="boedee-b">
            <van-field v-model="phone" placeholder="请输入手机号" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">微信号码:</td>
          <td class="boedee-b">
            <van-field v-model="WeChat" placeholder="请输入微信号" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">QQ号码:</td>
          <td class="boedee-b">
            <van-field v-model="qqCode" placeholder="请输入qq号" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">性别:</td>
          <td class="boedee-b">
            <select v-model="gender" class="selectpl" @change="addgender">
              <option value="" disabled selected>请选择性别</option>
              <option v-for="item in genderlist" :key="item.id" :value="item">
                {{ item.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">年龄:</td>
          <td class="boedee-b">
            <van-field v-model="age" placeholder="请输入年龄" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">客户来源:</td>
          <td class="boedee-b">
            <van-field
              v-model="information"
              placeholder="请输入信息来源"
              @click="showPopup"
              onfocus="this.blur()"
            />
            <van-popup v-model="show" position="bottom" class="popol">
              <van-picker
                :columns="lreosource"
                value-key="code"
                @confirm="setStudentClass"
                @cancel="show = false"
                show-toolbar
              />
            </van-popup>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">搜索词:</td>
          <td class="boedee-b">
            <van-field v-model="search" placeholder="请输入搜索词" />
          </td>
        </tr>
      </table>
      <div class="cunpl">
        <van-button type="primary" class="baocun" @click="save"
          >保存</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      person: "", // 登录人id
      name: "", //客户名称
      schooling: "", //学历
      schoolingId: "", //学历id
      consulting: "", //咨询方式
      consultingId: "", //咨询方式id
      phone: "", //电话
      WeChat: "", //微信
      qqCode: "", //Qq
      gender: "", //性别
      genderId: "", //性别id
      age: "", //年龄
      information: "", //信息来源
      informationid: "", //信息来源id
      search: "", //搜索词
      show: false,
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      formallist: [
        {
          id: 0,
          name: "高中",
        },
        {
          id: 1,
          name: "初中",
        },
      ],
      genderlist: [
        {
          id: 1,
          name: "男",
        },
        {
          id: 2,
          name: "女",
        },
      ],
    };
  },
  methods: {
    ...userActions(["lconsulting", "source", "listadd"]),
    //返回上一页
    goto() {
        this.$router.go(-1)
    },
    //保存
    save() {
        this.listadd({
          accountId: this.person,
          name: this.name,
          visitortype: this.schoolingId,
          modelId: this.consultingId,
          mobile: this.phone,
          wechatCode: this.WeChat,
          qqCode: this.qqCode,
          sex: this.genderId,
          age: this.age,
          sourceId: this.informationid,
          searchTerms: this.search,
        });
    },
    // 咨询方式
    way() {
      this.consultingId = this.consulting.id;
    },
    //获取学历
    formal() {
      this.schoolingId = this.schooling.id;
    },
    showPopup() {
      this.show = true;
    },
    //获取男女id
    addgender() {
      this.genderId = this.gender.id;
    },
    //确认回调
    setStudentClass(value) {
      this.information = value.code;
      this.informationid = value.id;
      this.show = false;
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.lconsulting(); //咨询方式
    this.source(); //信息来源
  },
  watch: {},
  computed: {
    ...userState(["loveconsulting", "lreosource"]),
  },
};
</script>

<style scoped lang='scss'>
.van-cell {
  padding: 0px;
}

</style>