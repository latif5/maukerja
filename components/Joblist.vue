<template>
  <div class="page">
    <div class="container">
      <Carditem :jobs="jobs"/>
    </div>
  </div>
  
</template>

<script>
  const props = {
    jobs: {
      type: Array,
      required: true
    }
  }

  export default {
    props
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/configs/index';
  // Override style
  @import "~/assets/scss/commons/index";
  // Override style
  @import "~/assets/scss/components/joblist";
</style>