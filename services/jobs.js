export default function ($axios) {
  const http = $axios

  return {
    get: function () {
      const getUrl = '/jobs/'
      return http.get(getUrl)
    },
    filter: function (params) {
      return http.get('/jobs/', {
        params
      })
    },
  };
}
