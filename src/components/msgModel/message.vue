<template>
  <div class="msg-model">
    <div v-show="show" class="myModel wc hc up">
      <div class="model ac">
        <b class="left mg-l mg-tb hc">{{title}}</b>
        <div class="model-msg pd-lr pd-b mg-b px1-b">
          {{msg}}
        </div>
        <div class="model-button bt ad hc f16">
          <div @click="show=false" class="flex1 pd-tb a">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: { type: String, default: '' },
    title: String,
    foot: {
      type: Array,
      default: () => [
        {
          text: '确定',
          click() {}
        }
      ]
    }
  },
  data() {
    return {
      show: true
    };
  },
  created() {}
};
</script>

<style lang='less' scoped>
.msg-model {
  .myModel {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 10000;
    // opacity:0.4;
    // filter:alpha(opacity=40);
    .model {
      max-width: 350px;
      width: 80%;
      background: white;
      border-radius: 4px;
      .model-msg {
        color: #606266;
      }
      .model-button {
        border-top: 1px solid #eee;
        div {
          border-left: 1px solid #eee;
          &:nth-child(1) {
            // background: red;
            border-left: none;
          }
        }
        div:active {
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1) inset;
          background: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>