<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">
              A Whole New Range of Smartphones Is Coming
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="hero-btn mt-3">
              <button class="btn custom-btn btn-main mr-4">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <b-img src="/img/jpg/2801276.jpg" fluid alt="Responsive image" />
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
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  padding-top: 2rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>
