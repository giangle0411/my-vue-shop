export const state = {
  cart: [],
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
  }
}
