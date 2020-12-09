<template>
  <!-- 登录 -->
  <div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="start"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="login_box">
      <div class="top">惠冠</div>
      <van-form>
        <van-field
          v-model="username"
          type="name"
          label="用户名"
          size="large"
          name="pattern"
          label-width="60px"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          size="large"
          type="password"
          label="密码"
          name="pattern"
          label-width="55px"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-form>
      <div class="bou-a">
        <van-button type="primary" @click="getregister" class="dapo"
          >登录</van-button
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
      username: "",
      password: "",
    };
  },
  methods: {
    getregister() {
      this.$api
        .Signin({
          userName: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.state === "ok") {
            let user = res.loginAccount;
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/home");
            this.$dialog.alert({
              message: "登录成功",
            });
          } else if (res.state === "fail") {
            this.$dialog.alert({
              message: "用户名或密码错误",
            });
          } else {
            this.$dialog.alert({
              message: "登陆失败",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss' >
.lizi {
  background: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  width: 100vw;
  height: 100vh;
  // border: 1px solid red;
  position: relative;
}
.login_box {
  position: absolute;
  top: 20%;
  left: 16%;
  width: 260px;
  background: rgba(231, 226, 226, 0.3);
  border-radius: 7px;
}
.top {
  color: bisque;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid blanchedalmond;
}
 .van-cell--large .van-cell__title {
  font-size: 12px;
}
.van-cell{
  background: rgba(231, 226, 226, 0.3);
}
.bou-a {
  padding-top: 10px;
  width: 260px;
  display: flex;
  justify-content: center;
}
.dapo {
  width: 200px;
}
</style>
