<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        Your Cart
      </template>
      <div class="d-block text-center">
        <ul>
          <!-- <li v-for="(item, index) in this.$store.state.cart" :key="index">
            {{ item.productID }}
          </li> -->
          Hello
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
