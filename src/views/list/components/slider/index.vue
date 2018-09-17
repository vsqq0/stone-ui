<script>
import { Model, CodeShow, Button,Slider } from '@/../index.js';

export default {
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
        <CodeShow title="滑块">
          <Slider></Slider>
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