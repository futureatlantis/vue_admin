import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import 'font-awesome/css/font-awesome.css'
// 引用API文件
import api from './api/index.js'
import router from './router/index.js'
import utils from './utils/index.js'


Vue.use(ElementUI);
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
Vue.prototype.$api = api;

new Vue({
	router,
  el: '#app',
  render: h => h(App)
});
