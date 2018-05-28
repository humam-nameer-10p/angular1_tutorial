'use strict';

require('./core.scss');

var name = module.exports = 'zerion-assignment.core';

// Fix to make restangular work with webpack since it doesn't support common js.
// For more info: https://github.com/mgonto/restangular/issues/749
require('restangular');

angular
  .module(name, [
    require('angular-ui-router'),
    require('angular-storage'),
    'restangular'
  ])
  .value('lodash', _)
  .config(require('./restangular.config.js'))
  .config(require('./router.config.js'))
  .run(require('./router.run.js'))
  .factory('restangularWithToken', require('./restangularWithToken.factory.js'))
  .factory('_restangular', require('./restangular.factory.js'))
;






