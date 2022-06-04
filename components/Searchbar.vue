<template>
  <div>
    <div class="container">
      <b-nav class="search__nav">
        <b-col lg="3" class="pb-2"><b-form-input v-model="text" class="search__input" placeholder="Jobs Title Company"></b-form-input></b-col>
        <b-col lg="3" class="pb-2"><b-form-input v-model="text" class="search__input" placeholder="Jobs Title Company"></b-form-input></b-col>
        <b-col lg="3" class="pb-2"><b-form-input v-model="text" class="search__input" placeholder="Jobs Title Company"></b-form-input></b-col>
        <b-col lg="3" class="pb-2"><b-button pill variant="primary" class="search__button"><b-icon icon="search" class="search__icon"></b-icon>Find Jobs</b-button></b-col>
      </b-nav>
    </div>
    
  </div>
</template>

<script>
  import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue'

  const components = {
    BootstrapVue,
    BootstrapVueIcons,
    BIcon
  }

  const data = function (){
    return {
      text: ''
    }
  }
  export default {
    data,
    components
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/configs/index';
  // Override style
  @import "~/assets/scss/commons/index";
  // Override style
  @import "~/assets/scss/components/searchbar";
</style>