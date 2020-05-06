<template>
  <div class="about">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <h1>About our business</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div>
          <b-img
            :src="require(`../../public/img/hero/${imageName}`)"
            fluid
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageName: 'aboutUs.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: 1rem;
}
</style>
