<template>
  <div>
    <button class="btn btn-primary" @click="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    id: Number,
    image: String
  },
  computed: {
    item() {
      return {
        productName: this.name,
        productPrice: this.price,
        productID: this.id,
        productImage: this.image,
        productQuantity: 1
      }
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.item)
      this.$bvModal.show('bv-modal-example')
    }
  }
}
</script>

<style lang="scss" scoped></style>
