<template>
  <div>
    <li>
      <router-link :to="{
        name: 'user',
        params: {loginname: author.loginname}
      }">
        <img :src="author.avatar_url" alt="" />
      </router-link>

      <div v-if="visit_count != undefined" class="num">
        <span class="num1">{{ reply_count }}</span>/<span>{{ visit_count }}</span>
      </div>

      <el-tag v-if="top !== undefined" size="small" :type="top || good ? '' : 'info'">{{
        { top, good, tab } | transfromTab
      }}</el-tag>

      <span @click="goDetail()" class="title">{{ title }}</span>
      <span>{{ last_reply_at | fromNow }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "TopicItem",
  props: [
    "author",
    "reply_count",
    "visit_count",
    "tab",
    "top",
    "good",
    "title",
    "last_reply_at",
    "id",
  ],
  methods: {
    goDetail() {
      // 去详情页
      this.$router.push({
        name: "topic",
        params: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
li {
  border-bottom: 1px solid #e8e8e8;
  line-height: 30px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
  .num {
    display: inline-block;
    width: 106px;
    .num1 {
      font-size: 18px;
      color: #187cdf;
    }
  }
  .title {
    flex-grow: 1;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>