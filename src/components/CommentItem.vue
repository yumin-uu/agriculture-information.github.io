<template>
  <div class="comment-item">
    <router-link
      :to="{
        name: 'user',
        params: { loginname: author.loginname },
      }"
    >
      <img :src="author.avatar_url" alt="" />
    </router-link>

    <div class="comment">
      <div class="info">
        {{ author.loginname }} {{ index + 1 }} 楼 {{ create_at | fromNow }}
      </div>
      <div v-html="content"></div>
    </div>
    <div v-if="ups.length > 0">{{ ups.length }}</div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: ["author", "content", "create_at", "ups", "index"],
};
</script>

<style lang="less" scoped>
.comment-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  img {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
  .comment {
    flex-grow: 1;
    /deep/img {
      width: 100%;
    }
  }
}
</style>