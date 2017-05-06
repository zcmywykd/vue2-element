// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//相对路径找起文件很麻烦，我们可以写成绝对路径
//import goods from './components/goods/goods'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller';
import './common/scss/index.scss'

//Vue.use()方法全局注册插件
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/goods',
  component: goods,
},
  {
    path: '/ratings',
    component: ratings,
  },
  {
    path: '/seller',
    component: seller,
  }];
const router = new VueRouter({
  routes
});

//router.go('/goods');
var app = new Vue({
  el: '#app',
  router,
  ...App
});
