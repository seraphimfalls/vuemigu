import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./stylesheets/main.scss"
import "swiper/css/swiper.min.css"

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import axios from "axios"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
