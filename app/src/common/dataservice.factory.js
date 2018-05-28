'use strict';

module.exports = factory;

/* @ngInject */
function factory(Restangular, restangularWithToken, _restangular) {
  return {
    signIn: signIn,
    getList: getList
  }

  function signIn(password) {
    var user = {
        firstName: 'John', 
        lastName: 'Doe', 
        username: 'jDerererreere'
        };
    return Restangular.all('register').post(user);
  }

  function getList(){
      return restangularWithToken.all('records').get('');
  }
}