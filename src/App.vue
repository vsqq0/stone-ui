<template>
  <div class="f14" id="app">
    <span class="f16 wc mg pd">我的组件库 ~(∩_∩)~ </span>
    <div style="max-width:300px;" class="f16 bt mg-lr pd-lr">
      <a @click='$router.push("/")' class="blue-c wc mg pd">首页</a>
      <a @click='$router.push("/list")' class="blue-c wc mg pd">组件</a>
      <a @click='$router.push("/action")' class="blue-c wc mg pd">方法</a>
    </div>
    <div style="position: relative;">
      <transition name="fadeq">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<style lang='less'>
.disabled{
  display: none !important;
}
.fadeq-enter-active,
.fadeq-leave-active {
  width: 100%;
  position: absolute;
  transition: opacity 1s;
  top: 0;
  left: 0;
}
.fadeq-enter, .fadeq-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@font-face {
  font-family: 'iconfont'; /* project id 584791 */
  src: url('//at.alicdn.com/t/font_584791_w2lxnk88zawkx1or.eot');
  src: url('//at.alicdn.com/t/font_584791_w2lxnk88zawkx1or.eot?#iefix')
      format('embedded-opentype'),
    url('//at.alicdn.com/t/font_584791_w2lxnk88zawkx1or.woff') format('woff'),
    url('//at.alicdn.com/t/font_584791_w2lxnk88zawkx1or.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_584791_w2lxnk88zawkx1or.svg#iconfont')
      format('svg');
}
.w1200 {
  width: 1200px;
}

</style>
