<script>
export default {
  props: { data: Array },
  data() {
    return {};
  },
  created() {
  },
  mounted() {},
  render() {
    return (
      <div class="f16 lists ac up">
        {this.data.map((val, key) => {
          return <a key={key} onClick={val.click} class="pd">
            {val.menu}
          </a>;
        })}
      </div>
    );
  }
};
</script>

<style lang='less' scoped>
</style>
