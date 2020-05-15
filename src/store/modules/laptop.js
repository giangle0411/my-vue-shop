import ProductService from '@/services/ProductService.js'

export const namespaced = true

export const state = {
  laptops: []
  // laptop: {}
}

export const mutations = {
  SET_LAPTOPS(state, laptops) {
    state.laptops = laptops
  }
  // SET_LAPTOP(state, laptop) {
  //   state.laptop = laptop
  // }
}

export const actions = {
  fetchLaptops({ commit }) {
    return ProductService.getLaptops()
      .then(response => {
        commit('SET_LAPTOPS', response.data)
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
}
