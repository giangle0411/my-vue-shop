<template>
  <div>
    <b-card class="products" footer-tag="footer" header-tag="header">
      <router-link
        class="product-link"
        :to="{
          name: 'product-details',
          params: { category: product.category, id: product.id }
        }"
      >
        <header class="header-solid">
          <h5 class="card-title">{{ product.name }}</h5>
        </header>
        <img :src="productImage" class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="card-text">
            {{ product.description }}
          </p>
        </div>
      </router-link>

      <template v-slot:footer>
        <h4>Price: ${{ product.price }}</h4>
        <AddToCart
          :image="productImage"
          :name="product.name"
          :id="product.id"
          :price="product.price"
        />
      </template>
    </b-card>
  </div>
</template>

<script>
import AddToCart from './AddToCart.vue'

export default {
  props: {
    product: Object
  },
  components: {
    AddToCart
  },
  computed: {
    productImage() {
      if (!this.product.imageName) {
        return
      }
      const fileName = this.product.imageName
      return require('../../public/img/products/' + fileName) // the module request
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  margin-top: 3rem;
}
.products:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.header-solid {
  height: 4.2rem;
}
.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
