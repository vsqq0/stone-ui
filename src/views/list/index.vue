<template>
  <div class="list left">
    <div style="width:20%;">
      <Menu :data="menu"></Menu>
    </div>
    <div class="component-detail flex1">
      <keep-alive>
        <router-view :apiCol="this.apiCol" />
      </keep-alive>
      <div style="height:20px;"></div>
    </div>
  </div>
</template>

<script>
import { Menu } from '@/../';
export default {
  components: { Menu },
  data() {
    return {
      apiCol: [
        {
          title: '参数',
          key: 'param'
        },
        {
          title: '说明',
          key: 'detail'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '默认值',
          key: 'default'
        }
      ],
      menu: [
        {
          menu: '开始',
          click: () => this.$router.push('/list')
        },
        {
          menu: '按钮（button）',
          click: () => this.$router.push('/list/button')
        },
        {
          menu: '弹窗（model）',
          click: () => this.$router.push('/list/model')
        },
        {
          menu: '进度条（progress）',
          click: () => {}
        },
        {
          menu: '菜单（menu）',
          click: () => {}
        },
        {
          menu: '分页（pagination）',
          click: () => {}
        },
        {
          menu: '代码块高亮（highlight）',
          click: () => this.$router.push('/list/highlight')
        }
      ]
    };
  },
  methods: {},
  watch: {},
  created() {},
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