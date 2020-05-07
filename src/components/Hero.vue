<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">
              {{ title }}
            </h1>
            <p>
              {{ description }}
            </p>
            <div class="hero-btn mt-3"></div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic" style="display:inline-block">
            <b-img
              :src="require(`../../public/img/hero/${imageName}`)"
              fluid
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String,
    title: String,
    description: String,
    imageName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  padding-top: 1rem;
  width: 100%;
  text-align: left;
}
</style>
