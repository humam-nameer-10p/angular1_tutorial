'use strict';

require('./shell.scss');

var name = module.exports = 'zerion-assignment.shell';

angular
  .module(name, [])
  .config(configuration)
  .controller('Shell', require('./shell.controller.js'))
  .controller('Header', require('../header/header.controller.js'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('shell', {
      url: '/',
      template: require('./shell.html'),
      controller: 'Shell as vm',
      title: 'Zerion',
      abstract: true,
      views: {
        '@': {
          template: require('./shell.html'),
          controller: 'Shell as vm',

        },
        "header@shell" : {
          template: require('../header/header.html'),
          controller: 'Header as vm'
        }
      }
    });
}
