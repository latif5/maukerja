
import jobs from '~/services/jobs'

export default function ({ $axios }, inject) {
  const services = {
    jobs: jobs($axios)
  }

  Object.keys(services).forEach(function (key) {
    inject(key, services[key])
  })
}