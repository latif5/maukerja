<template>
  <div>
    <Navbar @jobsFiltered="updateJobList($event)"/>
    <Joblist :jobs="listJobs"/>
  </div>
</template>

<script>
const computed = {
  listJobs: function() {
    return this.$store.state.jobs.listJobs
  }
}

const asyncData = async function({ app, store }) {
  let response;
  response = await app.$jobs.get()
  .catch(function(error) {
    console.log(error)
  })
  store.commit('jobs/add', response.data.data) 
  // return {
  //   jobs: response.data.data
  // }
}

const data = function() {
  return { name: 'MauKerja' }
}

export default {
  computed,
  data,
  asyncData
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/configs/index';
</style>
