import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(dataV)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
