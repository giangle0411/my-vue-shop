<template>
  <div class="container">
    <Hero
      title="Accessories, we got all covered."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imageName="homeAccesories.jpg"
    />
    <div class="row">
      <Products
        v-for="product in laptops"
        :key="product.id"
        :product="product"
        class="col-md-4 d-flex align-items-stretch"
      />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import ProductService from '@/services/ProductService.js'
export default {
  components: {
    Hero,
    Products
  },
  data() {
    return {
      laptops: []
    }
  },
  created() {
    ProductService.getAccessories().then(response => {
      this.laptops = response.data
    })
  }
}
</script>
