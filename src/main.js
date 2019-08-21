import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import  axios from 'axios'
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})
import Scroller from '@/components/Scroller'
import Loding from '@/components/Loding'
Vue.component('Scroller',Scroller);
Vue.component('Loding',Loding);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
