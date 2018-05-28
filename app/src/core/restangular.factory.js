'use strict';

module.exports = factory;

/*@ngInject*/
function factory(Restangular, $window, $timeout, lodash, $state, $injector, $rootScope) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setFullRequestInterceptor(function(element, operation, route, url, headers) {
            var header = {};
            return {
                headers: lodash.extend(headers, header)
            };
        });

        RestangularConfigurer.setErrorInterceptor(function(response, deferred, responseHandler) {
            return true;
        });
    });
}