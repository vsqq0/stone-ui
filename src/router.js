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
      path: '/jsx',
      component: () => import(/* webpackChunkName: "home" */ './views/jsx')
    },
    {
      path: '/list',
      component: () => import(/* webpackChunkName: "list" */ './views/list'),
      children: [
        {
          path: 'model',
          component: () =>
            import(/* webpackChunkName: "model" */ './views/list/components/model')
        },
        {
          path: '',
          component: () =>
            import(/* webpackChunkName: "start" */ './views/list/components/start')
        },
        {
          path: 'highlight',
          component: () =>
            import(/* webpackChunkName: "highlight" */ './views/list/components/highlight')
        },
        {
          path: 'button',
          component: () =>
            import(/* webpackChunkName: "button" */ './views/list/components/button')
        }
      ]
    }
  ]
});
