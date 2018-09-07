import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { get, post, put, del } from './Utils/request';
import {MsgModel} from '../index.js'


Vue.prototype.get = get;
Vue.prototype.post = post;
Vue.prototype.post = put;
Vue.prototype.post = del;
Vue.prototype.alert = MsgModel;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
