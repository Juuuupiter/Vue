// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require("./assets/js/rem.js");
require("./assets/css/reset.css");
require("./assets/font-awesome-4.7.0/css/font-awesome.min.css")
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
