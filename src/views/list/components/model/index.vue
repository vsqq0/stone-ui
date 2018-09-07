<script>
import { Model, CodeShow, Button } from '@/../index.js';
import dom from './dom.js';
// import { Head, Model } from 'stone-ui';

export default {
  // components: { Model, CodeShow },
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
  mounted() {},
  render() {
    return (
      <div>
        <CodeShow title="弹窗" code={dom.d1}>
          <Button click={() => (this.show = true)}>model</Button>
          <Model
            show={this.show}
            foot={[
              {
                text: '确定',
                click: () => {
                  this.show = false;
                }
              }
            ]}
          >
            emmm...
          </Model>
        </CodeShow>
      </div>
    );
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