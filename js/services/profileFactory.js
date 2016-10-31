angular.module('app')
  .factory('ProfileFactory', ['$http', ProfileFactory]);

function ProfileFactory($http){

  return {
    show: show,
    update: update,

    apiURL: 'http://localhost:3000/api/users/',
    token: localStorage.getItem('token'),
    tokenQuery: '?token=' + this.token
  }

  function show(id){
    return $http.get(this.apiURL + id + this.tokenQuery);
  }

  function update(user){
    return $http.patch(apiURL + user._id, user);
  }
}
