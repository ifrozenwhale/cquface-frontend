import Vue from 'vue'
import WelcomeApp from './WelcomeApp.vue'
import vuetify from './plugins/vuetify'
import router from './router'
export var Event = new Vue()
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: (h) => h(WelcomeApp),
}).$mount('#app')
