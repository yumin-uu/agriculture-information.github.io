<template>
  <div>
    <LayoutContent>
      <!-- 头部：导航菜单 -->
      <template #head>
        <div class="head-nav">
          <router-link
            tag="li"
            :class="{
              'router-link-active': item.value === 'all' && $route.path === '/',
            }"
            :to="item.value"
            v-for="item in tabs"
            :key="item.id"
            >{{ item.label }}</router-link
          >
        </div>
      </template>

      <!-- 主体：列表 -->
      <div class="list">
        <!-- 骨架屏 -->
        <el-skeleton v-if="skeleton" :rows="20" animated />

        <!-- 列表 -->
        <TopicItem
          v-else-if="list.length"
          v-bind="ele"
          v-for="ele in list"
          :key="ele.id"
        />

        <!-- 成功发请求，但无数据 -->
        <el-empty v-else description="暂无数据"></el-empty>
      </div>

      <!-- 分页器 -->
      <div v-if="list.length" class="block">
        <el-pagination
          @current-change="handleCurrent"
          @size-change="handleSize"
          background
          :page-sizes="[20, 40, 60]"
          :current-page.sync="page"
          :page-size.sync="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </LayoutContent>
  </div>
</template>

<script>
import { getList } from "@/api/index";
export default {
  data() {
    return {
      // 列表数据
      list: [],
      // 导航菜单
      tabs: [
        {
          id: "tf8wrtgy",
          label: "全部",
          value: "all",
          total: 133,
        },
        {
          id: "h54yuyy",
          label: "精华",
          value: "good",
          total: 710,
        },
        {
          id: "6u56trte",
          label: "分享",
          value: "share",
          total: 95,
        },
        {
          id: "es5y56y5",
          label: "问答",
          value: "ask",
          total: 38,
        },
        {
          id: "srwat5yu6",
          label: "招聘",
          value: "job",
          total: 16,
        },
        {
          id: "sruy65u6u",
          label: "客户端测试",
          value: "dev",
          total: 145,
        },
      ],
      // 当前页
      page: 1,
      // 当前页 显示的数据条数
      limit: 40,
      // 当前导航下的 数据总条数
      total: 0,
      // 切换骨架屏
      skeleton: false,
    };
  },
  watch: {
    "$route.params.type": {
      handler(val) {
        const tab = val || "all";
        this.getTopicList(tab);
        this.page = 1;
        this.limit = 40;
        const totalInd = this.tabs.findIndex((ele) => ele.value === tab);
        this.total = this.tabs[totalInd].total;
      },
      immediate: true,
    },
  },
  methods: {
    async getTopicList(tab) {
      const { page, limit } = this;
      this.skeleton = true;
      const params = {
        page,
        limit,
        tab,
      };
      const { data } = await getList(params);
      // console.log(data);
      this.list = data;
      this.skeleton = false;
    },
    // 分页器 获取 当前页
    handleCurrent() {
      this.getTopicList();
    },
    // 分页器  获取 当前页多少条数据
    handleSize() {
      this.getTopicList();
    },
  },
};
</script>

<style lang="less" scoped>
.head-nav {
  display: flex;
  li {
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 3px;
    color: #2e98e4;
    font-size: 18px;
    cursor: pointer;
    &.router-link-active {
      background-color: #2e98e4;
      color: #fff;
    }
  }
}
</style>