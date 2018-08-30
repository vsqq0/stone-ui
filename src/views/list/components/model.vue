<template>
    <div class="up">
      <div>
        <b class="title f16">弹窗</b>
        <div class="msg gray-c"></div>
        <div class="card">
          <button @click="show=true">model</button>
          <Model :show="show" :foot="[{text:'确定',click(){
            show=false;
          }}]">
            emmm...
          </Model>
        </div>
        <div id="mount-point" class="code">
        </div>
      </div>
      <div class="api">api</div>
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
  mounted() {
  }
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