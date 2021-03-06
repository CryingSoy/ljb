import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

Vue.use(ElementUI)

import axios from 'axios';
Vue.prototype.$axios = axios;

import routes from './router.config'

Vue.use(VueRouter);
import store from './vuex/'

const router = new VueRouter({
    // mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})