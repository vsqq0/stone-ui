const dom = {};
dom.d1 = `<div>
 <Button click={() => (this.show = true)}>model</Button>
  <Model
    show={this.show}
    foot={[
      {
        text: '确定',
        click: () => {
          this.show = false;
        }
      }
    ]}
  >
    emmm...
  </Model>
</div>`;

export default dom;
