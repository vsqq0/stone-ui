<template>
  <div>
    <b class="wc f18">开始使用</b>
    <div class="wc">npm i stone-ui --save</div>
    <div class="wc">import { model } from 'stone-ui'</div>
  </div>
</template>

<script>
import { Head, Model } from '../../../../index.js';
// import { Head, Model } from 'stone-ui';

export default {
  components: { Head, Model },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showClick() {}
  },
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.list {
  .title {
    font-weight: bold;
  }
  .msg {
  }
}
</style>