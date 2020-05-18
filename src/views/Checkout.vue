<template>
  <div class="checkout">
    <div class="container mt-5 pt-2">
      <div class="row">
        <div class="col-md-6 mb-5">
          <CheckoutForm />
        </div>
        <div class="col-md-6">
          <h3>Checkout!</h3>
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
            </li>
          </ul>
          <div class="card" style="padding-top: 8px">
            <h5>Total price: {{ totalAmount | currency }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from '@/components/CheckoutForm.vue'
export default {
  components: {
    CheckoutForm
  },
  computed: {
    totalAmount() {
      var sum = 0
      this.$store.state.cart.cart.forEach(e => {
        sum += e.productPrice * e.productQuantity
      })
      return sum
    }
  }
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
  padding: 25px;
  margin-bottom: -1px;
  margin-left: 2px;
  width: 130px;
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
