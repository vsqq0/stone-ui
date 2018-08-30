<template>
  <div>dsadsad
    <pre>
    <code class="html hljs" v-text="html" v-hljs></code>
  </pre>
    <pre>
    <code class="xml hljs">
      <div>dasd</div>
    </code>
  </pre>
  </div>
</template>
<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; //样式文件
export default {
  name: 'Home',
  data() {
    return {
      html: `
      <div>dsd</div>
      <script>var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('http://yunkus.com');
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('云库网', host, port);
});<script>`
    };
  },
  // methods: {
  //   modifyCode() {
  //     this.$nextTick(function() {
  //       let blocks = document.querySelectorAll('pre code');
  //       blocks.forEach(block => {
  //         hljs.highlightBlock(block);
  //       });
  //     });
  //   }
  // },
  // created() {
  //   this.modifyCode();
  // }
};
</script>