<template>
  <div class="container">
    <Hero
      title="Laptops for your work and entertainment purposes"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. "
      imageName="homeLaptop.jpg"
    />
    <div class="row">
      <Products
        v-for="product in laptop.laptops"
        :key="product.id"
        :product="product"
        class="col-md-4 d-flex align-items-stretch"
      />
    </div>
    <CartModal />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import { mapState } from 'vuex'
import CartModal from '@/components/CartModal.vue'

export default {
  components: {
    Hero,
    Products,
    CartModal
  },
  created() {
    this.$store.dispatch('laptop/fetchLaptops')
  },
  computed: {
    ...mapState(['laptop'])
  }
}
</script>
