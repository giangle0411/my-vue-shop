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
      item.productQuantity++
      state.cart.push(item)
    }
    this.commit('saveData')
  },
  saveData(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeFromCart(state, item) {
    let index = state.cart.indexOf(item)
    state.cart.splice(index, 1)
    this.commit('saveData')
  },
  increaseQuantity(state, item) {
    let prod = state.cart.find(product => product.productID == item.productID)
    prod.productQuantity++
  },
  decreaseQuantity(state, item) {
    let prod = state.cart.find(product => product.productID == item.productID)
    if (prod.productQuantity > 1) {
      prod.productQuantity--
    } else {
      this.commit('removeFromCart', prod)
      this.commit('saveData')
    }
  }
}
