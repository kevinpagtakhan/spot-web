angular.module('app')
  .factory('SpacesFactory', ['$http', SpacesFactory]);

function SpacesFactory($http){

  return {
    index: index,
    show: show,
    update: update,

    apiURL: 'http://localhost:3000/api/spaces/'
  }

  function index(){
    return $http.get(this.apiURL + '?token=' + localStorage.getItem('token'));
  }

  function show(id){
    return $http.get(this.apiURL + id + this.tokenQuery);
  }

  function update(space){
    return $http.patch(apiURL + space._id, space);
  }
}
