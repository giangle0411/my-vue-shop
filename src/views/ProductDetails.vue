<template>
  <div>
    <h2>Hello</h2>
    <h2>{{ product.name }}</h2>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService.js'
export default {
  props: ['category', 'id'],
  data() {
    return {
      product: {}
    }
  },
  created() {
    ProductService.getProduct(this.category, this.id).then(response => {
      this.product = response.data
    })
  }
}
</script>

<style lang="scss" scoped></style>
