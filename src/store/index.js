import Vue from 'vue'
import Vuex from 'vuex'
import * as cart from '@/store/modules/cart.js'
import * as phone from '@/store/modules/phone.js'
import * as laptop from '@/store/modules/laptop.js'
import * as accessory from '@/store/modules/accessory.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    phone,
    laptop,
    accessory
  }
})
