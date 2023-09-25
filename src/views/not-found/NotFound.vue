<template>
  <div class="not-found">
    <h2>404</h2>
    <el-button class="btn" @click="goHome()">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转首页
    goHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="less" scoped>

</style>