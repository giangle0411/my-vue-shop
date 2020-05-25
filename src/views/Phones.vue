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
        v-for="product in phone.phones"
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
import CartModal from '@/components/CartModal.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Hero,
    Products,
    CartModal
  },

  // created() {
  //   this.$store.dispatch('phone/fetchPhones')
  // },
  computed: {
    ...mapState(['phone'])
  }
}
</script>
