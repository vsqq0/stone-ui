import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
      import("./views/home")
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: "list" */ "./views/list")
    }
  ]
});
