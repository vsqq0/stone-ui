import Vue from 'vue';
let MessageBox = Vue.extend(require('./message.vue').default);
var message = function(options) {
  if (typeof options === 'string') {
    options = {
      msg: options
    };
  }
  let instance = new MessageBox({
    propsData: options
  });
  document.body.appendChild(instance.$mount().$el);
};

export default message;
