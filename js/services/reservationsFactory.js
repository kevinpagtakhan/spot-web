angular.module('app')
  .factory('ReservationsFactory', ['$http', ReservationsFactory])

function ReservationsFactory($http){
  return {
    index: index,
    apiURL: 'http://localhost:3000/api/users/'
  }

  function index(){
    return $http.get(this.apiURL + '?token=' + localStorage.getItem('token'));
  }
}
