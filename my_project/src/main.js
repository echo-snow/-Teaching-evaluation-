// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios= axios
import VueAxios from 'vue-axios'
//import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//引用 element-ui 样式
Vue.use(ElementUI )  //最后要use ElementUI ，不然会报错
Vue.use(VueAxios,axios)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store,
  components: { App },
  template: '<App/>'
})
