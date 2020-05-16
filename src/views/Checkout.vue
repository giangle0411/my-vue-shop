<template>
  <div class="checkout">
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
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
                  <p class="mt-0">Quantity: {{ item.productQuantity }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>Total price: {{ totalAmount | currency }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
