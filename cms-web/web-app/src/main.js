import Vue     from 'vue'
import App     from './App.vue'
import router  from './router'
import store   from './store'
import             '@/public/ele.js'
import http    from '@/until/http'
import md5     from 'md5'
import {regType,isNull} from '@/until/isType'
import {setCookie,getCookie} from '@/until/cookie'
Vue.prototype.$http      = http;
Vue.prototype.$md5       = md5;
Vue.prototype.setCookie  = setCookie;
Vue.prototype.getCookie  = getCookie;
Vue.prototype.$regType   = regType;
Vue.prototype.$isNull    = isNull;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
