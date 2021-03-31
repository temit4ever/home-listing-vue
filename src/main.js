import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBxbeeVeotdg9ywGVOBVClQiOy2-2u62oo',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  VueGoogleMaps,
  render: h => h(App)
}).$mount('#app')
