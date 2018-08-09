<template>
  <div>
    <Head></Head>
    <div>list</div>
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
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    };
  },
  created() {
    // h.a();
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