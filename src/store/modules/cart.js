let cart = window.localStorage.getItem('cart')

export const state = {
  cart: cart ? JSON.parse(cart) : [],
  totalPrice: Number
}

export const mutations = {
  addToCart(state, item) {
    let inCart = state.cart.find(product => product.productID == item.productID)
    if (inCart) {
      inCart.productQuantity++
    } else {
      state.cart.push(item)
    }
    this.commit('saveData')
  },
  saveData(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
