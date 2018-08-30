<template>
  <div class="list left">
    <div style="width:20%;" class="f16 lists ac up">
      <a class="pd">开始</a>
      <a class="pd">弹窗</a>
      <a class="pd">进度条</a>
    </div>
    <div class="component-detail">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import { Head, Model } from '../../../index.js';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; //样式文件

export default {
  components: { Head, Model },
  data() {
    return {
      show: false,
      html: `
        var express = require('express');
        var app = express();
        app.get('/', function (req, res) {
          res.send('http://yunkus.com');
        });
        var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('云库网', host, port);
        });`
    };
  },
  methods: {
    modifyCode() {
      setTimeout(() => {
        let blocks = document.querySelectorAll('pre code');
        console.log(blocks);
        blocks.forEach(block => {
          hljs.highlightBlock(block);
        });
      }, 1000);
    }
  },
  watch: {},
  created() {
    this.modifyCode();
  },
  mounted() {}
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