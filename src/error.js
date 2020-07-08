import Vue from 'vue'
import Error from './Error.vue'
import vuetify from './plugins/vuetify'
import router from './router'
export var Event = new Vue()

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(Error),
  router,
}).$mount('#app')
