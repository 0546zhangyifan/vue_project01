import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import gotop from './directive/gotop.js'

import VueLazyload from 'vue-lazyload'
import { List, Overlay, Button, Icon } from 'vant'

import '../public/assets/style/reset.scss'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icon/error.jpg'),
  // 引入src目录中的图片需要使用require
  loading: require('./assets/icon/loading.jpg'),
  attempt: 2
})
Vue.use(List)
Vue.use(Overlay)
Vue.use(Button)
Vue.use(Icon)

new Vue({
  router,
  store,
  gotop,
  render: h => h(App)
}).$mount('#app')
