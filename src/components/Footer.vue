<template>
  <div>
    <b-container class="footer">
      <div class="row">
        <div class="col-4 col-md">
          <h5>Shop</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Mobile Phones</a></li>
            <li><a class="text-muted" href="#">Laptop</a></li>
            <li><a class="text-muted" href="#">Accessories</a></li>
          </ul>
        </div>

        <div class="col-4 col-md">
          <h5>Connect</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Contact Us</a></li>
            <li><a class="text-muted" href="#">Location & Hours</a></li>
          </ul>
        </div>
        <div class="col-4 col-md">
          <h5>About Us</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Team</a></li>
            <li><a class="text-muted" href="#">Locations</a></li>
            <li><a class="text-muted" href="#">Privacy</a></li>
          </ul>
        </div>
        <div class="col-12 col-md">
          <h5>We accept</h5>
          <b-img src="/img/payment-methods.png" fluid alt="Responsive image" />
        </div>
      </div>
      <strong>Giang's Vue Shop - </strong>&copy; {{ new Date().getFullYear() }}
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 3rem;
}
</style>
