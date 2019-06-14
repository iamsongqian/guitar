const testApi = {
  test:params=>console.log(params)
}

export default {
  install: function (Vue) {
    Vue.prototype.test = param => testApi.test(param)
  }
}