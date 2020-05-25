<template>
  <div class="container">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="product-img col-md-6 ">
        <img :src="productImage" class="card-img-top" alt="..." />
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
                <h2>{{ product.price | currency }}</h2>
              </div>
              <div class="col-md-6">
                <AddToCart
                  :image="productImage"
                  :name="product.name"
                  :id="product.id"
                  :price="product.price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card text-center" style="margin-top: 2rem">
      <b-tabs content-class="mt-3">
        <b-tab title="Features" active><p>Features</p></b-tab>
        <b-tab title="Specs"><p>Specifications</p></b-tab>
        <b-tab title="Reviews"><p>No review available.</p></b-tab>
      </b-tabs>
    </div>
    <CartModal />
  </div>
</template>

<script>
import AddToCart from '@/components/AddToCart.vue'
import CartModal from '@/components/CartModal.vue'
import ProductService from '@/services/ProductService.js'
// import NProgress from 'nprogress'
export default {
  props: {
    category: String,
    id: String
  },

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   NProgress.start()
  //   this.getProducts().then(() => {
  //     NProgress.done()
  //     next()
  //   })
  // },

  components: {
    AddToCart,
    CartModal
  },
  data() {
    return {
      product: {}
    }
  },
  computed: {
    productImage() {
      if (!this.product.imageName) {
        return
      }
      const fileName = this.product.imageName
      return require('../../public/img/products/' + fileName) // the module request
    }
  },
  methods: {
    getProducts() {
      return ProductService.getProduct(this.category, this.id).then(
        response => {
          this.product = response.data
        }
      )
    }
  },
  created() {
    this.getProducts()
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
  display: block;
  width: 100%;
}
.product-img {
  padding: 2rem;
  width: 100%;
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
