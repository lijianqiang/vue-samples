// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import build from './router/RouterBuilder'
import httper from './http/HttpClient'

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$httper = httper

const router = build();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
