// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

import VueBarrel from 'vue-barrel';
Vue.use(VueBarrel);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper,);
// axios.defaults.baseURL = "http://localhost:3000";

import './assets/css/reset.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store,
})
