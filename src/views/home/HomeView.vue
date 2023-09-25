<template>
  <div class="home">
    <header>
      <div class="inner">
        <router-link to="/">
          <div class="logo">logo</div>
        </router-link>
        <div>
          <span class="username">用户名：{{ userInfo.username }}</span>
          <el-button @click="logout()" type="info">退出</el-button>
        </div>
      </div>
    </header>
    <main>
      <!-- 列表 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  background-color: #1c668d;
  .inner {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      color: #b2d8fd;
      font-size: 24px;
      user-select: none;
    }
    .username {
      color: #fff;
      margin-right: 10px;
    }
  }
}
main {
  width: 1200px;
  margin: 20px auto;
}
</style>