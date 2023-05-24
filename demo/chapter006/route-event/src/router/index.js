import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 通过Vue.use(插件), 安装插件
Vue.use(Router);

// 创建VueRouter对象
const routes = [
  {
    // 默认页面
    path: '',
    redirect: '/home'
  },
  {
    // home路径页面
    path: '/home',
    component: Home
  },
  {
    // about路径页面
    path: '/about',
    component: About
  }
]

// 创建实例
const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history', // 路由模式
  linkActiveClass: 'active'
});

// 导出路由配置
export default router;
