angular.module('app')
  .factory('SearchFactory', ['$http', SearchFactory]);

function SearchFactory($http){

  return {
    nearby: nearby,

    apiURL: 'http://kevinpagtakhan.com:3001/api/search/'
  }

  function nearby(body){
    return $http.post(this.apiURL + '?token=' + localStorage.getItem('token'), body);
  }
}
