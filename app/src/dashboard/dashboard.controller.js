'use strict';

module.exports = controller;

/* @ngInject */
function controller($log, dataservice, accessToken) {
  var vm = this;
  console.log(accessToken);
  vm.welcomeMessage = 'Yet another generator for angular powered by webpack.';
  init();

  function init() {
    return dataservice.getList().then(function(response) {
      console.log(response);
      return response;
    })
  }

}
