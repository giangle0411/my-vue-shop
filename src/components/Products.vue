<template>
  <div>
    <b-card class="product">
      <img
        :src="require(`../../public/img/products/${product.imageName}`)"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
        <h3>Price: ${{ product.price }}</h3>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
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
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
