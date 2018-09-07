<script>
import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css'; //样式文件 
import 'highlight.js/styles/atom-one-light.css'; //样式文件 
// import 'highlight.js/styles/default.css'; //样式文件 
// import 'highlight.js/styles/googlecode.css'; //样式文件 

export default {
  props: {
    text: { type: String },
    dom: { type: String }
  },
  data() {
    return {
    };
  },
  methods: {
    modifyCode() {
      this.$nextTick(function() {
        let blocks = document.querySelectorAll('pre code');
        blocks.forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    }
  },
  created() {
    this.modifyCode();
  },
  render() {
    return (
      <div>
        <pre>
          <code class="highlight">{this.dom}</code>
        </pre>
      </div>
    );
  }
};
</script>

<style lang='less' scoped>
.highlight {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
  font-size: 14px;
}
</style>