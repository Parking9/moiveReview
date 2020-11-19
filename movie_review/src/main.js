import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
Vue.use(VModal, { dynamic: true })
