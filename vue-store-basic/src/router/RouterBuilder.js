import VueRouter from 'vue-router'

const routes = [
  { path: '/', name: 'index', other: '1', redirect: 'home' },
  { path: '/home', name: 'home', other: '2', component: resolve => require(['../pages/home/index.vue'], resolve) },
  { path: '/user', name: 'user', other: '3', component: resolve => require(['../pages/user/index.vue'], resolve) },
  { path: '/district', name: 'district', other: '4', component: resolve => require(['../pages/district/index.vue'], resolve) },
  { path: '/placer', name: 'placer', other: '5', component: resolve => require(['../pages/placer/Index.vue'], resolve) },
  { path: '*', name: '404', component: resolve => require(['../components/NotFoundComponent.vue'], resolve) }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

export default function build(mode = 'history', linkActiveClass = 'router-link-active') {
    console.log('now:' + new Date().getTime())
    console.log('mode:' + mode);
    let router = new VueRouter({
      mode: mode,
      routes: routes,
      scrollBehavior: scrollBehavior,
      base: __dirname,
      linkActiveClass: linkActiveClass
    });
    //console.log(__dirname);
    //console.log(router.options.routes);

    router.beforeEach((to, from, next) => {
      // console.log('beforeEach');
      // console.log(to);
      next();
    })

    return router;
}
