<template>
  <div>
    <b-card class="products" footer-tag="footer" header-tag="header">
      <header class="header-solid">
        <h5 class="card-title">{{ product.name }}</h5>
      </header>
      <img
        :src="require(`../../public/img/products/${product.imageName}`)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text">
          {{ product.description }}
        </p>
      </div>
      <template v-slot:footer>
        <h4>Price: ${{ product.price }}</h4>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.products {
  margin-top: 3rem;
}
.header-solid {
  height: 4.2rem;
}
</style>
