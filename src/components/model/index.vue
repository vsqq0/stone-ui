<template>
  <div class="model">
    <div v-show="show" class="myModel wc hc up">
      <div class="model ac">
        <div class="model-head">head</div>
        <div class="model-msg pd-lr pd-b px1-b">
          <slot></slot>
        </div>
        <div v-for="(i,key) in foot" :key="key" class="model-button bt ad hc f16">
          <div @click="i.click" class="flex1 pd-tb a">{{i.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../global.css'
export default {
  props: {
    show: {
      type: Boolean
    },
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
    return {};
  },
  created() {}
};
</script>

<style lang='less' scoped>
.model {
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
      }
      .model-button {
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
