const dom = {};
dom.d1 = `<script>
import { Button, Block } from 'stone-ui';
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {},
  watch: {},
  created() {},
  render() {
    return (
      <div>
        <Button>默认</Button>
        <Block/>
        <Button classType="pri-button">默认</Button>
      </div>
    );
  }
};
</script>
<style lang='less' scoped>
.pri-button {
  padding: 12px 20px;
  font-size: 14px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
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
}
</style>`;

export default dom;
