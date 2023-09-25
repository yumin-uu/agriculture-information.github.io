<template>
  <div>
    <div v-if="topic">
      <!-- 文章详情 -->
      <LayoutContent>
        <!-- 主体： -->
        <div class="topic">
          <div class="topic-head">
            <h3>{{ topic.title }}</h3>
          </div>
          <div class="topic-content" v-html="topic.content"></div>
        </div>
      </LayoutContent>

      <!-- 评论 -->
      <LayoutContent>
        <template #head>
          <!-- 评论数 -->
          <span>{{ topic.replies.length }}</span
          >回复
        </template>

        <CommentItem
          v-for="(ele, index) in topic.replies"
          :key="ele.id"
          v-bind="{ ...ele, index }"
        />
      </LayoutContent>
    </div>

    <div>
      <LayoutContent>
        <el-empty v-if="noTopic" description="文章已被删除 或 没有此文章"></el-empty>
      </LayoutContent>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/api";
export default {
  data() {
    return {
      topic: null,
      noTopic: false,
    };
  },
  async created() {
    const { id } = this.$route.params;
    try {
      const { data } = await getDetail(id);
      this.topic = data;
    } catch (error) {
      this.noTopic = true;
    }
  },
};
</script>

<style lang="less" scoped>
.topic {
  padding: 20px;
  .topic-content {
    /deep/h2 {
      margin: 10px 0;
    }
    /deep/img {
      width: 100%;
    }
  }
}
.noTopic {
  color: #fff;
}
</style>