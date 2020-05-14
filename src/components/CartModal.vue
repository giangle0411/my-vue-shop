<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        Your Cart
      </template>
      <div class="d-block text-center">
        <ul>
          <li v-for="(item, index) in $store.state.cart.cart" :key="index">
            <img
              :src="item.productImage"
              alt="..."
              width="80px"
              class="align-self-left mr-3"
            />
            <div class="media-body">
              <h5 class="mt-0">{{ item.productName }}</h5>
              <p class="mt-0">${{ item.productPrice }}</p>
            </div>
          </li>
          <!-- <p>{{ $store.state.cart }}</p> -->
        </ul>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style lang="scss" scoped></style>
