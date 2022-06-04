<template>
  <div>
    <b-card-group deck>
      <b-card
        no-body
        class="card__spacing"
        v-for="job in jobs"
        :key="job.id"
      >

        <b-card-body>
          <div class="card__group">
            <b-img :src="job.company.logo" class="card__logo" alt="Image" bottom></b-img>
            <div class="card__title">
              <NuxtLink :to="'/details/' + job.id">
                <b-card-title>{{ job.title }}</b-card-title>
                <b-card-sub-title class="mb-2">{{ job.company.name }}</b-card-sub-title>
              </NuxtLink>
            </div>
          </div>
          <b-row class="facility__key">
            <b-col cols="6">
              <b-icon icon="cash" class="facility__icon"></b-icon>
              <b-card-text>
                {{ job.salary.currency }} {{ job.salary.min }} - {{ job.salary.currency }} {{ job.salary.max }}
              </b-card-text>
            </b-col>
            <b-col cols="6">
              <b-icon icon="clock-fill" class="facility__icon"></b-icon>
              <b-card-text>
                {{ job.job_type }} 
              </b-card-text>
            </b-col>
            <b-col cols="6">
              <b-icon icon="pin-map-fill" class="facility__icon"></b-icon>
              <b-card-text>
                {{ job.location.country }} 
              </b-card-text>
            </b-col>
          </b-row>
          <b-card-text class="card__description">
            {{ job.descriptions.requirements }}
          </b-card-text>
        </b-card-body>
        <b-card-footer>
          <b-row class="card__action">
            <b-col cols="6">
              <b-icon icon="heart-fill" class="action__icon"></b-icon>
              <p>Save</p>
            </b-col>
            <b-col cols="6" >
              <b-icon icon="briefcase-fill" class="action__icon"></b-icon>
              <p>Apply</p>
            </b-col>
          </b-row>
        </b-card-footer>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue'

  const components = {
    BootstrapVue,
    BootstrapVueIcons,
    BIcon
  }

  const props = {
    jobs: {
      type: Array,
      required: true
    }
  }

  const data = function (){
    return {
      name: ''
    }
  }
  
  export default {
    props,
    data,
    components
  }
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/configs/index';
  // Override style
  @import "~/assets/scss/commons/index";
  // Override style
  @import "~/assets/scss/components/card";
</style>