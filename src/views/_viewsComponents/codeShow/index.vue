<template>
  <div class="code-show">
    <div class="pd mg bold">按钮展示</div>
    <div class="pd mg">
      <slot></slot>
    </div>
    <div>
      <HighLight :dom="code" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: { type: String }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='less' scoped>
</style>
