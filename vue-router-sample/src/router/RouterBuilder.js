import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: resolve => require(['../components/Hello.vue'], resolve) },
    { path: '*', component: resolve => require(['../components/NotFoundComponent.vue'], resolve) },
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


    return router;
}
