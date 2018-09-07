<script>
import { Button, Table, Block, CodeShow } from '@/../index.js';
import dom from './dom.js';

export default {
  props: {
    apiCol: { type: Array }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  render() {
    return (
      <div class="test">
        <CodeShow title="按钮展示" code={dom.d1}>
          <Button>默认</Button>
          <Block />
          <Button classType="pri-button">默认</Button>
        </CodeShow>
        <Block Block="50px" />
        <CodeShow>
          <Table
            col={this.apiCol}
            data={[
              {
                param: 'classType',
                type: 'string',
                detail: '自定义样式名'
              }
            ]}
          />
        </CodeShow>
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
  &:hover {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
}

</style>
