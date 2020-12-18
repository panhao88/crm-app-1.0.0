<template>
  <!-- 修改 -->
  <div>
    <!-- 头部导航 -->
    <div>
      <van-nav-bar :fixed="true" :z-index="3" class="vanbar" title="编辑客户">
        <template #left>
          <van-icon name="arrow-left" size="24" color="grey" @click="goto" />
        </template>
        <template #right>
          <van-icon name="bars" size="24" color="grey" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 新增管理跟单 -->
    <div class="central">
      <div class="size">编辑客户详情</div>
      <table>
        <tr>
          <td class="boedee-a">客户名称:</td>
          <td class="boedee-b">
            <van-field v-model="Theeditor.name" placeholder="请输入客户名称" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">手机号码:</td>
          <td class="boedee-b">
            <van-field
              v-model="Theeditor.mobile"
              placeholder="请输入手机号码"
            />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">微信号码:</td>
          <td class="boedee-b">
            <van-field
              v-model="Theeditor.wechatCode"
              placeholder="请输入微信号码"
            />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">QQ号码:</td>
          <td class="boedee-b">
            <van-field v-model="Theeditor.qqCode" placeholder="请输入QQ号码" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">性别:</td>
          <td class="boedee-b">
            <select v-model="Theeditor.sex" class="selectpl">
              <option value="" disabled selected>请选择性别</option>
              <option
                v-for="item in genderlist"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">年龄:</td>
          <td class="boedee-b">
            <van-field v-model="Theeditor.age" placeholder="请输入年龄" />
          </td>
        </tr>
        <tr>
          <td class="boedee-a">学历:</td>
          <td class="boedee-b">
            <select v-model="Theeditor.visitortype" class="selectpl">
              <option value="" disabled selected>请选择学历</option>
              <option
                v-for="(item, index) in formallist"
                :key="index"
                :value="item.id"
              >
                <div>{{ item.name }}</div>
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">咨询方式:</td>
          <td class="boedee-b">
            <select v-model="Theeditor.modeId" class="selectpl">
              <option value="" disabled selected>请选择咨询方式</option>
              <option
                v-for="(item, index) in loveconsulting"
                :key="index"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="boedee-a">客户来源:</td>
          <td class="boedee-b">
            <van-field
              v-model="Theeditor.sourceId"
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
            <van-field
              v-model="Theeditor.searchTerms"
              placeholder="请输入搜索词"
            />
          </td>
        </tr>
      </table>
      <div class="cunpl">
        <van-button type="primary" class="baocun" @click="save"
          >保存编辑</van-button
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
      ids: "", //客户id
      username: {}, //获取用户信息
      usernameId: 0, //获取用户id
      id: "", //客户id
      name: "", //客户名字
      mobile: "", //手机号码
      wechatCode: "", //微信号码
      qqCode: "", //qq号码
      sex: "", //性别
      age: "", //年龄
      visitortype: "", //学历
      modeId: "", //咨询方式
      sourceId: "", //客户来源
      searchTerms: "", //搜索词
      show: false,
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
          id: 0,
          name: "未知",
        },
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
    ...userActions(["source", "lconsulting", "Modify", "storage"]),
    //返回上一页
    goto() {
      this.$router.push("/Customer");
    },
    //保存编辑
    save() {
      this.storage({
        accountId: this.id,
        customerId: this.ids,
        name: this.Theeditor.name,
        visitortype: this.Theeditor.visitortype,
        modelId: this.Theeditor.modeId,
        mobile: this.Theeditor.mobile,
        wechatCode: this.Theeditor.wechatCode,
        qqCode: this.Theeditor.qqCode,
        sex: this.Theeditor.sex,
        age: this.Theeditor.age,
        sourceId: this.Theeditor.modeId,
        searchTerms: this.Theeditor.searchTerms,
      });
    },
    showPopup() {
      this.show = true;
    },
    //确认回调
    setStudentClass(value) {
      this.Theeditor.sourceId = value.code;
      this.show = false;
    },
  },
  mounted() {
    this.username = JSON.parse(localStorage.getItem("user"));
    this.usernameId = this.username.id;
    this.ids = this.$route.query.id;
    this.Modify({
      accountId: this.usernameId,
      customerId: this.ids,
    });
    this.id = this.usernameId;
    this.lconsulting(); //咨询方式
    this.source(); //信息来源
  },
  watch: {},
  computed: {
    ...userState(["loveconsulting", "lreosource", "Theeditor"]),
  },
};
</script>

<style scoped lang='scss'>
.van-cell {
  padding: 0px;
}
</style>