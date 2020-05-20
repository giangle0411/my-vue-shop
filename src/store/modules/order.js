import OrderService from '@/services/OrderService.js'

export const namespaced = true

export const state = {
  orders: [],
  cart: [],
  order: {}
}

export const mutations = {
  ADD_ORDER(state, order, cart) {
    state.orders.push(order)
    state.cart.push(cart)
  },
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_ORDER(state, order) {
    state.order = order
  }
}

export const actions = {
  createOrder({ commit }, order, cart) {
    return OrderService.postOrder(order)
      .then(() => commit('ADD_ORDER', order, cart))
      .catch(error => {
        console.log('There was an error adding this order.' + error.message)
      })
  }
}
