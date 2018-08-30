import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './views/home')
    },
    {
      path: '/highLight',
      component: () => import(/* webpackChunkName: "home" */ './views/highLight')
    },
    {
      path: '/list',
      component: () => import(/* webpackChunkName: "list" */ './views/list'),
      children:[
        {
          path:'model',
          component:() => import(/* webpackChunkName: "list" */ './views/list/components/model.vue')
        },
        {
          path:'',
          component:() => import(/* webpackChunkName: "list" */ './views/list/components/start.vue')
        }
      ]
    }
  ]
});
