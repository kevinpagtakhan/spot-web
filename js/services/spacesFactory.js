angular.module('app')
  .factory('SpacesFactory', ['$http', SpacesFactory]);

function SpacesFactory($http){

  return {
    index: index,
    show: show,
    update: update,
    reserveSpace: reserveSpace,

    apiURL: 'http://localhost:3000/api/spaces/'
  }

  function index(){
    return $http.get(this.apiURL + '?token=' + localStorage.getItem('token'));
  }

  function show(id){
    return $http.get(this.apiURL + id + '?token=' + localStorage.getItem('token'));
  }

  function reserveSpace(body) {
    return $http.post('http://localhost:3000/api/reservations?token=' + localStorage.getItem('token'), body);
  }

  function update(space){
    return $http.patch(apiURL + space._id, space);
  }
}
