export const state = () => ({
  listJobs: []
})

export const mutations = {
  add(state, job) {
    job.forEach(index => {
      state.listJobs.push(index)
    })
  },
  updateJobs(state, data) {
    state.listJobs = []
    data.forEach(index => {
      state.listJobs.push(index)
    })
  }
}