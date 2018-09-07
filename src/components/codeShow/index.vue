<template>
  <div class="code-show">
    <div class="pd mg bold">{{title}}</div>
    <div class="pd mg">
      <slot></slot>
    </div>
    <div>
      <HighLight v-show='code!=""' :dom="code" />
    </div>
  </div>
</template>

<script>
import { HighLight } from '@/../';
export default {
  components: { HighLight },
  props: {
    title: { type: String, default: 'api' },
    code: { type: String,default:"" }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='less' scoped>
.code-show {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  .component {
  }
  .code {
  }
  .api {
  }
}
</style>
