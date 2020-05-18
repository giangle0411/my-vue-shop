<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        Your Cart
      </template>
      <div class="d-block text-center">
        <ul style="list-style: none">
          <li v-for="(item, index) in $store.state.cart.cart" :key="index">
            <div class="card flex-row">
              <div class="card-header">
                <img
                  :src="item.productImage"
                  alt="..."
                  width="80px"
                  class="align-self-left mr-3"
                />
              </div>
              <div class="card-block px-2">
                <h5 class="mt-0">{{ item.productName }}</h5>
                <p class="mt-0">
                  {{ (item.productPrice * item.productQuantity) | currency }}
                </p>
                <div class="price-rm">
                  <label class="mt-0">Quantity: </label>
                  <button @click="$store.commit('decreaseQuantity', item)">
                    -
                  </button>
                  {{ item.productQuantity }}
                  <button @click="$store.commit('increaseQuantity', item)">
                    +
                  </button>

                  <button
                    class="rm-button ml-4"
                    @click="$store.commit('removeFromCart', item)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- <img
              :src="item.productImage"
              alt="..."
              width="80px"
              class="align-self-left mr-3"
            />
            <div class="media-body">
              <h5 class="mt-0">{{ item.productName }}</h5>
              <p class="mt-0">${{ item.productPrice }}</p>
            </div> -->
          </li>
          <!-- <p>{{ $store.state.cart }}</p> -->
        </ul>
      </div>
      <div class="float-right">
        <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')"
          >Continue Shopping</b-button
        >
        <b-button class="mt-3 ml-1" variant="primary" to="/checkout"
          >Checkout</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
.card-header {
  background-color: white;
  padding: 10px;
  margin-bottom: -1px;
  margin-left: 2px;
  width: 100px;
}
.card {
  margin-bottom: 2px;
}
.card-block {
  text-align: left;
  margin-top: 1rem;
}
.rm-button:hover {
  color: #a3a3a3;
}
.price-rm {
  display: inline-block;
  font-size: 90%;
}
</style>
