<script>
import isPC from "@/Utils/lib/isPC.js";
export default {
  render() {
    return (
      <div class="slider-ui gray-c" ref="sliderDad">
        <div class="slider-btn" ref="sliderSui" style={{ left: this.left }} />
      </div>
    );
  },
  props: {
    show: {
      type: Boolean
    },
    foot: {
      type: Array,
      default: () => [
        {
          text: "确定",
          click() {}
        }
      ]
    }
  },

  computed: {},
  data() {
    return {
      left: 0,
      slider: this.$refs.sliderSui,
      clientX: 0
    };
  },
  methods: {
    con() {
      console.log(e);
    },
    move() {
      this.slider.addEventListener("mousemove", this.con);
    },
    up() {
      this.slider.addEventListener("mouseup", e => {
        console.log(e, "mouseup");
        this.slider.removeEventListener("mousemove", this.con);
      });
    }
  },

  mounted() {
    window.aa = this.$refs.sliderSui;
    window.bb = this.$refs.sliderDad;
    // 制作滑布
    let con = e => {
      console.log(e, e.clientX, "-", this.clientX);

      if (e.clientX - this.clientX < 0) {
        this.left = 0;
      } else if (e.clientX - this.clientX > this.$refs.sliderDad.offsetWidth-this.$refs.sliderSui.offsetWidth) {
        this.left = this.$refs.sliderDad.offsetWidth-this.$refs.sliderSui.offsetWidth+ "px";
      } else {
        this.left = e.clientX - this.clientX + "px";
      }
    };
    this.slider = this.$refs.sliderSui;
    document.addEventListener("mousedown", e => {
      console.log(e, this.left, "mousedown");
      this.clientX = e.clientX - (this.left + "").split("px")[0] * 1;
      document.addEventListener("mousemove", con);
    });

    document.addEventListener("mouseup", e => {
      console.log(e, "mouseup");
      document.removeEventListener("mousemove", con);
    });

    // slider.addEventListener("touchmove", e => {
    //   console.log(e, "touchmove");
    // });

    // slider.addEventListener("touchend", e => {
    //   console.log(e, "touchend");
    // });

    // 长按
    // slider.addEventListener("contextmenu", e => {
    //   console.log(e, "contextmenu");
    // });
  }
};
</script>

<style lang='less' scoped>
//
//
.slider-ui {
  position: relative;
  width: 100%;
  height: 50px;
  background: rgb(243, 243, 243);
  .slider-btn {
    top: 0;
    position: absolute;
    cursor: grab;
    width: 50px;
    height: 50px;
    background: red;
    &:click {
      cursor: grabbing;
    }
  }
}
</style>