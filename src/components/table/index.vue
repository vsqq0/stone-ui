<script>
export default {
  props: {
    col: { type: Array },
    data: { type: Array }
  },
  data() {
    return {};
  },
  created() {},
  render() {
    return (
      <div class="table">
        <table>
          <thead>
            <tr>
              {this.col.map((val, key) => {
                return <td key={key}>{val.title}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.data.map((val, key) => {
              return (
                <tr key={key}>
                  {this.col.map((v, k) => {
                    return <td key={k}>{val[v.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
</script>

<style lang='less' scoped>
.table {
  table {
    width: 100%;
  }
}
</style>
