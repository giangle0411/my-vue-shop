<template>
  <div class="container">
    <div class="row">
      <div class="product-img col-md-6">
        <img
          :src="require(`../../public/img/products/${product.imageName}`)"
          class="card-img-top"
          alt="..."
        />
      </div>
      <div class="product-info col-md-6">
        <div class="product-title">
          <h3>
            {{ product.name }}
          </h3>
        </div>
        <div class="product-desc">
          <small
            >SKU:{{ product.SKU ? product.SKU : 'Unavailable' }} ID:{{
              product.id
            }}</small
          >
          <p>{{ product.description }}</p>
          <ul class="more-desc">
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
          <div class="product-buy">
            <div class="row">
              <div class="col-md-6">
                <h2>${{ product.price }}</h2>
              </div>
              <div class="col-md-6">
                <a href="/accessories" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#ft" data-toggle="tab">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sp" data-toggle="tab">Specifications</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#rv"
              tabindex="-1"
              aria-disabled="true"
              data-toggle="tab"
              >Reviews</a
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane" id="ft">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              It's a broader card with text below as a natural lead-in to extra
              content. This content is a little longer.
            </p>
          </div>
          <div class="tab-pane" id="sp">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              It's a broader card with text below.
            </p>
          </div>
          <div class="tab-pane" id="rv">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              It's a broader card with text below as a natural lead-in to extra
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
  width: 70%;
}
.product-buy > .row > .col-md-6 h2 {
  margin-top: 3px;
}
.product-info {
  margin-top: 2rem;
}
.product-img {
  padding: 2rem;
}
.product-title h3 {
  font-weight: 700;
}
.product-desc small {
  color: #757575;
}
.product-desc p {
  font-size: 120%;
  font-weight: 500;
}
.more-desc {
  text-align: left;
  font-size: 90%;
  font-weight: 300;
}
</style>
