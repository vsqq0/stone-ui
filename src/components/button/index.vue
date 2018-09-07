<template>
  <div @click="click" :class="classType">
    {{text}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    click:{type:Function,default:()=>{}},
    text: { type: String, default: '' },
    classType: { type: String, default: 'default-button' }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='less' scoped>
.default-button {
  padding: 12px 20px;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  border-radius: 4px;
  &:hover {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
}
</style>
