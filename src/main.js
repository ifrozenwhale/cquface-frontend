import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
export var Event = new Vue()

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app')
