<template>
  <div>
    <Navbar />
    <Joblist :jobs="jobs"/>
  </div>
</template>

<script>
const asyncData = async function({ $auth, app, route }) {
  let response;
  response = await app.$jobs.get()
  .catch(function(error) {
    console.log(error)
  })

  return {
    jobs: response.data.data
  }
}

const data = function() {
  return { name: 'MauKerja' }
}
export default {
  data,
  asyncData
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/configs/index';
</style>
