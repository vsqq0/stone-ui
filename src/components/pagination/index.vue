<script>
export default {
  props: {
    pageCount: { type: Number, default: 1 }, // 总页数
    page: { type: Number, default: 1 }, // 当前页
    onClick: { type: Function, required: true } // 点击事件 有参数
  },
  data() {
    return {
      current: this.page,
      showItem: 7
    };
  },
  computed: {
    // ...mapState([]),
    pages: function() {
      let pag = [];
      if (this.current < this.showItem) {
        // 如果当前的激活的项 小于要显示的条数
        // 总页数和要显示的条数那个大就显示多少条
        let i = Math.min(this.showItem, this.pageCount);
        while (i) {
          pag.unshift(i--);
        }
      } else {
        // 当前页数大于显示页数了
        let middle = this.current - Math.floor(this.showItem / 2), // 从哪里开始
          i = this.showItem;
        if (middle > this.pageCount - this.showItem) {
          middle = this.pageCount - this.showItem + 1;
        }
        while (i--) {
          pag.push(middle++);
        }
      }
      return pag;
    }
  },
  async created() {},
  methods: {
    // ...mapMutations([]),
    goto: function(index) {
      if (index === this.current) return;
      this.current = index;
      this.onClick(index);
      // 这里可以发送ajax请求
    }
  }
};
</script>
<template>
  <div>
    <ul class="pages">
      <a v-show="current !== 1" @click="goto(1)" class="prev">首页</a>
      <a v-for="index in pages" @click="goto(index)" :class="{'now':current === index}" :key="index">{{index}}</a>
      <a v-show="pageCount !== current && pageCount !== 0 " @click="goto(pageCount)" class="next">尾页</a>
      <span>共{{this.pageCount}}页</span>
    </ul>
  </div>
</template>
<style lang='less'>
.pages a {
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
}
</style>