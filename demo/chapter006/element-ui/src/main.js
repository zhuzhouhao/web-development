import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import mock from '@/mock/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

Vue.use(ElementUI);

new Vue({
  mock,
  render: h => h(App),
}).$mount('#app')
