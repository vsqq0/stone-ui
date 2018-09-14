<script>
export default {
  render() {
    return (
      <div class="slider-ui">
      
      </div>
    );
  },
  props: {
    show: {
      type: Boolean
    },
    foot: {
      type: Array,
      default: () => [
        {
          text: "确定",
          click() {}
        }
      ]
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
  }
};
</script>

<style lang='less' scoped>
.slider-ui{

}
</style>