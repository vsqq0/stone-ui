<template>
  <div class="vux-demo">
    <Head></Head>
    <a> index</a>
    <Foot></Foot>
  </div>
</template>

<script>
import { Head, Foot } from '../../components/index.js';

export default {
  components: {
    Head,
    Foot
  },
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  async created() {
    // console.log(await $.get('flagStore'));
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>