<template>
  <div>
    <Navbar />
    <Jobdetails :job="job" />
  </div>
</template>

<script>
import Jobdetails from '../../components/Jobdetails.vue';

const asyncData = async function({ $auth, app, route }) {
  const path = route.path.substring().split('/')
  // const pathLocation = path[2] || path[0]
  const idLab = path[2]
  const params = {
    "filter[id]": idLab,
  }
  let response;
  response = await app.$jobs.filter(params)
  .catch(function(error) {
    console.log(error)
  })

  return {
    job: response.data.data[0]
  }
}

const data = function() {
  return { name: 'MauKerja' }
}
export default {
  components: { Jobdetails },
  data,
  asyncData
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/configs/index';
</style>