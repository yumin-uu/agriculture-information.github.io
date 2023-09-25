<template>
  <div class="content-layout">
    <div v-if="$slots.head" class="header">
      <slot name="head" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutContent',
};
</script>

<style lang="less" scoped>
.content-layout {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  .header {
    padding: 8px;
    background-color: #f1f1f1;
  }
  .content {
    padding: 0 8px;
    background-color: #fff;
  }
}
</style>