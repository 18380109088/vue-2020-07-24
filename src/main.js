// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'ant-design-vue/dist/antd.css'; 
import {Button,Table} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Table);

import io from 'ant-design-vue';
Vue.use(io);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
