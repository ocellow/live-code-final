import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

let axios = Axios.create({
  baseURL: 'http://localhost:3000'
})


Vue.config.productionTip = false
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
