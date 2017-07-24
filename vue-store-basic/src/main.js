// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import build from './router/router-build'
import http from './http/http-client'
import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$http = http

const router = build();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
