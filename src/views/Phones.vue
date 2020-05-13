<template>
  <div class="container">
    <Hero
      title=" Shop the latest smartphones with us"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
      imageName="homePhone.jpg"
    />
    <div class="row">
      <Products
        v-for="product in phones"
        :key="product.id"
        :product="product"
        class="col-md-4 d-flex align-items-stretch"
      >
      </Products>
      <CartModal />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import ProductService from '@/services/ProductService.js'
import CartModal from '@/components/CartModal.vue'

export default {
  components: {
    Hero,
    Products,
    CartModal
  },
  data() {
    return {
      phones: []
    }
  },
  method: {
    displaydetails(id) {
      this.$router.push({ name: 'product-details', params: { id: id } })
      console.log('helo')
    }
  },
  created() {
    ProductService.getPhones().then(response => {
      this.phones = response.data
    })
  }
}
</script>
