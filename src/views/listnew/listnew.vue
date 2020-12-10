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
                <select placeholder="请选择" class="selectpl">
                  <option>请选择</option>
                  <option ></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">跟单状态:</td>
              <td class="boedee-b">
                <select placeholder="请选择" class="selectpl">
                  <option>请选择</option>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">跟单对象:</td>
              <td class="boedee-b">
                <select placeholder="请选择" class="selectpl">
                  <option>请选择</option>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">下次联系:</td>
              <td class="boedee-b">
                <van-field
                  v-model="text"
                  placeholder="请输入出生年月"
                  @click="showPopup"
                ></van-field>
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
                <van-uploader>
                  <van-button icon="plus" type="primary" class="wenjian"
                    >上传文件</van-button
                  >
                </van-uploader>
              </td>
            </tr>
            <tr>
              <td class="boedee-a">备注:</td>
              <td class="boedee-b">
                <textarea
            
                >
                </textarea>
              </td>
            </tr>
          </table>
        </div>
        <div class="cunpl">
          <van-button type="primary" class="baocun">保存</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
         ...userActions(["Documenway","liststate","listobject"]),
    //返回上一页
    goto() {
      this.$router.go(-1);
    },
    //返回首页
    logoto() {
      this.$router.push("/");
    },
    //点击时间
    showPopup() {
      this.show = true;
    },
    value111() {},
    cancel() {},
  },
  mounted() {
    this.name = this.$route.query.name;
    this.Documenway()
    this.liststate()
    this.listobject()
    // console.log(this.name, 22);
  },
  watch: {},
  computed: {},
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
  width: 95%;
  height: 25px;
}
.van-cell {
  padding: 0px;
  background-color: #fff;
}
.wenjian {
  height: 30px;
}
</style>