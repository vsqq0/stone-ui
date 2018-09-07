<template>
  <div :style='{width:block,height:block}'>
  </div>
</template>

<script>
export default {
  props: {
    block: { type: String, default: '20px' }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='less' scoped>
</style>
