export const state = {
  cart: []
}

export const mutations = {
  addToCart(state, cart) {
    state.cart.push(cart)
  }
}
