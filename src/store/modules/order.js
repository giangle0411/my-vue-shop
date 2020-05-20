import OrderService from '@/services/OrderService.js'

export const namespaced = true

export const state = {
  orders: [],
  order: {}
}

export const mutations = {
  ADD_ORDER(state, order) {
    state.orders.push(order)
  },
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_ORDER(state, order) {
    state.order = order
  }
}

export const actions = {
  createOrder({ commit }, order) {
    return OrderService.postOrder(order)
      .then(() => commit('ADD_ORDER', order))
      .catch(error => {
        console.log('There was an error adding this order.' + error.message)
      })
  }
}
