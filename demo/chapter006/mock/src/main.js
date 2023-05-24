import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import mock from '@/mock/index'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  mock,
  render: h => h(App),
}).$mount('#app')
