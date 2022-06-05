<template>
  <div>
    <div class="container">
      <b-nav class="search__nav">
        <b-col lg="3" class="pb-2"><b-form-input v-model="jobtitle" class="search__input" :placeholder="$t('searchbar.jobstitle')"></b-form-input></b-col>
        <b-col lg="3" class="pb-2"><b-form-input v-model="location" class="search__input" :placeholder="$t('searchbar.location')"></b-form-input></b-col>
        <b-col lg="3" class="pb-2"><b-form-input v-model="minsalary" type="number" class="search__input" :placeholder="$t('searchbar.minsalary')"></b-form-input></b-col>
        <b-col lg="3" class="pb-2">
          <b-button pill variant="primary" class="search__button" @click="filterData">
            <b-icon icon="search" class="search__icon"></b-icon>Find Jobs
          </b-button>
        </b-col>
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
      jobtitle: '',
      location: '',
      minsalary: ''
    }
  }

  const methods = {
    filterData: async function() {
      let params = {};
      if(this.jobtitle!='') {
        const key = "filter[title]"
        params[key] = this.jobtitle
      }

      if(this.location!='') {
        const key = "filter[state]"
        params[key] = this.location
      }

      if(this.minsalary!='') {
        const key = "filter[salary_min]"
        params[key] = this.minsalary
      }

      const response = await this.$jobs.filter(params)
      .catch(function(error) {
        console.log(error)
      })
      // console.log(response)
      if(response === undefined) {
        this.$store.commit('jobs/updateJobs', [])
      }else{
        this.$store.commit('jobs/updateJobs', response.data.data)
      }
    }
  }
  
  export default {
    data,
    components,
    methods
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/configs/index';
  // Override style
  @import "~/assets/scss/commons/index";
  // Override style
  @import "~/assets/scss/components/searchbar";
</style>