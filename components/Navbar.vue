<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav__bar">
      <div class="container">
         <b-navbar-brand href="#">
          <b-img src="~/assets/images/maukerja-logo.png" class="img__logo" fluid alt="Mau Kerja Logo"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">All Jobs</b-nav-item>
            <b-nav-item-dropdown text="Tools" right>
              <b-dropdown-item href="#">Tools 1</b-dropdown-item>
              <b-dropdown-item href="#">Tools 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Help" right>
              <b-dropdown-item href="#">Help 1</b-dropdown-item>
              <b-dropdown-item href="#">Help 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">Blogs</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <Searchbar />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/configs/index';
  // Override style
  @import "~/assets/scss/commons/index";
  // Override style
  @import "~/assets/scss/components/navbar";
</style>