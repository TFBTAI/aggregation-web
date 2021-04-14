import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filter from './assets/js/filter'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$bus = new Vue()

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
