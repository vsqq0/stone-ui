<script>
export default {
 data() {
  return {
   test: <a href="">dasd</a>
  };
 },
 render() {
  return (
   <div class="test" >
    { this.test }
   </div>
  );
 }
}
</script>
<style lang='less' scoped>
.test{
  background: red;
}
</style>