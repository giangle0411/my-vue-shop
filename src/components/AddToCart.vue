<template>
  <div>
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    id: Number
  },
  data() {
    return {
      productName: this.name,
      productPrice: this.price,
      productID: this.id
    }
  }
}
</script>

<style lang="scss" scoped></style>
