import App from './App'
import request from './api/request.js'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
//注入后，具体组件中即可直接使用this.$request()来发起网络请求。
Vue.prototype.$request = request
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif