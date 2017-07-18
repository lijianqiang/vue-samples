import VueRouter from 'vue-router'

const routes = [
    { path: '/', name: 'index', redirect: 'home' },
    { path: '/home', name: 'home', component: resolve => require(['../pages/home/index.vue'], resolve) },
    { path: '/user', name: 'user', component: resolve => require(['../pages/user/index.vue'], resolve) },
    { path: '/code', name: 'code', component: resolve => require(['../pages/code/index.vue'], resolve) },
    { path: '*', name: '404', component: resolve => require(['../components/NotFoundComponent.vue'], resolve) },
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
    console.log(__dirname);
    //console.log(router.options.routes);


    return router;
}
