angular.module('app')
  .factory('SearchFactory', ['$http', SearchFactory]);

function SearchFactory($http){

  return {
    nearby: nearby,

    apiURL: 'http://localhost:3000/api/search/'
  }

  function nearby(body){
    return $http.post(this.apiURL + '?token=' + localStorage.getItem('token'), body);
  }
}
