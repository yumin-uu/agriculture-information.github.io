<template>
  <div v-if="info">
    <LayoutContent>
      <!-- 头部：导航菜单 -->
      <template #head>
        <span>最近参与的话题</span>
      </template>
      <div v-if="info.recent_replies.length">
        <TopicItem
          v-for="item in info.recent_replies"
          :key="item.id"
          v-bind="item"
        />
      </div>
    </LayoutContent>
  </div>
</template>

<script>
import { getUserInfo } from "@/api";
export default {
  data() {
    return {
      info: null,
    };
  },
  watch: {
    "$route.params.loginname": {
      handler(val) {
        this.getInfo(val)
      },
      immediate: true,
    },
  },
  methods: {
    async getInfo(loginname) {
      const { data } = await getUserInfo(loginname);
      this.info = data;
    }
  },
};
</script>

<style>
</style>