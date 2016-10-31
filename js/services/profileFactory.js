angular.module('app')
  .factory('ProfileFactory', ['$http', ProfileFactory]);

function ProfileFactory($http){

  return {
    loggedInUser: loggedInUser,
    show: show,
    update: update,

    apiURL: 'http://localhost:3000/api/users/'
  }
  function loggedInUser(){
    return $http.get(this.apiURL + '?token=' + localStorage.getItem('token'));
  }

  function show(id){
    return $http.get(this.apiURL + id + this.tokenQuery);
  }

  function update(user){
    return $http.patch(apiURL + user._id, user);
  }
}
