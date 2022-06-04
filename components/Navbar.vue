<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav__bar">
      <div class="container">
        <b-navbar-brand>
          <NuxtLink to="/">
            <b-img src="~/assets/images/maukerja-logo.png" class="img__logo" fluid alt="Mau Kerja Logo"></b-img>
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink to="/" class="nav-link">
              {{$t('navbar.alljob')}}
            </NuxtLink>
            <b-nav-item-dropdown :text="$t('navbar.tools')" right>
              <b-dropdown-item href="#">{{$t('navbar.tools')}} 1</b-dropdown-item>
              <b-dropdown-item href="#">{{$t('navbar.tools')}} 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown :text="$t('navbar.help')" right>
              <b-dropdown-item href="#">{{$t('navbar.help')}} 1</b-dropdown-item>
              <b-dropdown-item href="#">{{$t('navbar.help')}} 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">{{$t('navbar.blogs')}} </b-nav-item>
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