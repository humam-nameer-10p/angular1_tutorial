'use strict';

module.exports = configuration;

/* @ngInject */
function configuration(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://alpha-dataflownode.zerionsoftware.com/code_assignment/');
}
