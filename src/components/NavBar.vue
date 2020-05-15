<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="main">
      <b-navbar-brand href="/">Giang's Vue Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/mobile-phones">Mobile Phones</b-nav-item>
          <b-nav-item to="/laptops">Laptops</b-nav-item>
          <b-nav-item to="/accessories">Accessories</b-nav-item>

          <b-nav-item to="/about">About Us</b-nav-item>
          <b-nav-item to="/sale" disabled>Sales</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/">Profile</b-dropdown-item>
            <b-dropdown-item to="/">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
