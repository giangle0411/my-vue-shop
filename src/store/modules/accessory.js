import ProductService from '@/services/ProductService.js'

export const namespaced = true

export const state = {
  accessories: []
  // accessory: {}
}

export const mutations = {
  SET_ACCESSORIES(state, accessories) {
    state.accessories = accessories
  }
  // SET_ACCESSORY(state, accessory) {
  //   state.accessory = accessory
  // }
}

export const actions = {
  fetchAccessories({ commit }) {
    return ProductService.getAccessories()
      .then(response => {
        commit('SET_ACCESSORIES', response.data)
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
}
