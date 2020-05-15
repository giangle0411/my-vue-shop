import ProductService from '@/services/ProductService.js'

export const namespaced = true

export const state = {
  phones: []
  // phone: {}
}

export const mutations = {
  SET_PHONES(state, phones) {
    state.phones = phones
  }
  // SET_PHONE(state, phone) {
  //   state.phone = phone
  // }
}

export const actions = {
  fetchPhones({ commit }) {
    return ProductService.getPhones()
      .then(response => {
        commit('SET_PHONES', response.data)
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
  //   fetchPhone({ commit, getters }, id) {
  //     var phone = getters.getPhoneById(id)
  //     if (phone) {
  //       commit('SET_PHONE', phone)
  //       return phone
  //     } else {
  //       return ProductService.getPhone(id).then(response => {
  //         commit('SET_PHONE', response.data)
  //         return response.data
  //       })
  //     }
  //   }
  // }

  // export const getters = {
  //   getPhoneById: state => id => {
  //     return state.phones.find(phone => phone.id === id)
  //   }
}
