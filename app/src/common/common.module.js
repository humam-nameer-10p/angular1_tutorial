'use strict';

require('./common.scss');

var name = module.exports = 'zerion-assignment.common';

angular.module(name, [])
.factory('dataservice', require('./dataservice.factory.js'));
