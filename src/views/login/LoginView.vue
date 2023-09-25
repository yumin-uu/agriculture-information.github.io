<template>
  <div class="login">
    <div class="login-inner">
      <h2>登录后 更精彩</h2>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="70px"
        class="login-form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <!--   -->
          <el-button class="logButton" type="primary" @click="submit()"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="link">
        <span>未有帐号？</span>
        <a href="#">去注册&rsaquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import { login } from '@/api/index'
export default {
  data() {
    return {
      loginForm: {
        username: "yumin",
        password: "9948d556-1825-416f-934f-b3ce046403e3",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    ...mapMutations(['getInfo']),
    submit() {
      this.$refs.loginForm.validate((boolean) => {
        if (boolean) {
          // 登录 token : 9948d556-1825-416f-934f-b3ce046403e3
          // 用户名：随意         密码：token
          const { password } = this.loginForm;
          if (password === "9948d556-1825-416f-934f-b3ce046403e3") {
            // 登陆成功  后端会返回 token 及用户信息
            // 将 token 及用户信息存储到浏览器本地 localStorage
            localStorage.setItem(
              'token',
              '9948d556-1825-416f-934f-b3ce046403e3'
            );
            localStorage.setItem(
              'userInfo',
              JSON.stringify({ username: "yumin" })
            );
            this.getInfo()
            this.$router.push("/");
          } else {
            this.$message.error("用户名密码不匹配");
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  background: url(@/assets/img/bg2.jpg) no-repeat left;
  background-size: cover;
}
.login-inner {
  width: 600px;
  height: 500px;
  margin: 0 auto;
  padding: 40px 90px;
  padding-bottom: 70px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 8px;
  box-shadow: 0 0 10px #0074c7;
  background-color: rgba(255, 255, 255, 0.9);
}

h2 {
  font-size: 28px;
  color: rgb(58, 58, 58);
  margin: 50px auto;
}

.logButton {
  background: linear-gradient(90deg, #151c2b, #5a5f6d);
  border: none;
  color: #759ce0;
  font-size: 20px;
  line-height: 28px;
  width: 100%;
  margin-bottom: 20px;
}

.link {
  display: flex;
  justify-content: flex-end;
}
.link span {
  font-size: 14px;
}
.link a {
  font-size: 14px;
  margin-left: 10px;
  color: #53b8f0;
}
</style>