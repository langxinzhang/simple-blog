import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
Vue.use(VueRouter)//使用路由插件
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  // 事件总线
  // beforeCreate(){
  //   Vue.prototype.$bus=this
  // }
}).$mount('#app')
