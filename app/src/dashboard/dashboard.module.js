'use strict';

require('./dashboard.scss');
require('../common/dataservice.factory.js');

var name = module.exports = 'zerion-assignment.dashboard';

angular
  .module(name, ['angular-storage'])
  .config(configuration)
  .controller('Dashboard', require('./dashboard.controller.js'))
  .controller('Details', require('./details.controller.js'))

;

function configuration($stateProvider) {
  $stateProvider
    .state('shell.dashboard', {
      url: 'dashboard',
      template: require('./dashboard.html'),
      controller: 'Dashboard as vm',
      title: 'Zerion',
      views : {
        'content@shell' : {
          template: require('./dashboard.html'),
          controller: 'Dashboard as vm'
        }
      },
      resolve: {
        accessToken: function (dataservice, store) {
          return dataservice.signIn().then(function (response) {
            store.set('auth-token', response.accessToken);
            return response;
          });
        }
      }

    }
  )
  .state('shell.details', {
    url: 'details',
    title: 'Zerion',
    views : {
      'content@shell' : {
        template: require('./details.html'),
        controller: 'Details as vm'
      }
    }
  }
);
}
