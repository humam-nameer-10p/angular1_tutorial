'use strict';

module.exports = factory;

/*@ngInject*/
function factory(Restangular, store, $window, $timeout, lodash, $state, $injector, $rootScope) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setFullRequestInterceptor(function(element, operation, route, url, headers) {
      var header = {};
      header.Authorization = 'Bearer ' + store.get('auth-token');
      return {
        headers: lodash.extend(headers, header)
      };
    });

    RestangularConfigurer.setErrorInterceptor(function(response, deferred, responseHandler) {
      var promisePropogate = true;
    //   if(response.status > 400) {
    //     promisePropogate = false;
    //     if(response.status === httpConstant.UNAUTHORIZED) {
    //       return;
    //     }
    //     if(response.status === httpConstant.UNAUTHORIZED) {
    //       if ($state.current.name !== 'shell.login') {
    //         store.set('auth-token', '');
    //         $state.go('shell');
    //         $timeout(function() {
    //           if($state.current.name === 'shell.dashboard'){
    //             $window.location.reload();
    //           }
    //         });
    //       }
    //     } else if(response.status === httpConstant.UNPROCESSABLE_ENTITY || response.status === 404) {
    //       return;
    //     }
    //   }
      return promisePropogate;
    });
  });
}