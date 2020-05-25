import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vue2Filters from 'vue2-filters'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.scss'
import 'nprogress/nprogress.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vue2Filters)
Vue.use(Vuelidate)

import jQuery from 'jquery'
global.jQuery = jQuery

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
