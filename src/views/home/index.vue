<template>
  <div class="home">
    <div class="beijing wc">
      <img src="../../assets/beijing.jpg" alt="">
    </div>
    <div class="block-9"></div>
    <!-- <div class="foot pd"></div> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  async created() {
    
  }
};
</script>

<style lang='less' scoped>
.home {
  .beijing {
    img {
      opacity: 0.8;
      width: 100%;
      height: 500px;
    }
  }
  .foot{
    background: black;
  }
}
</style>