angular.module('app')
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$http'];

function RegisterController($http) {
  var vm = this;

  vm.createUser = function(){
    var apiURL = 'http://localhost:3000/api/';

    $http.post(apiURL + 'users/', vm.newUser)
      .then(function (data) {
        console.log(data);
      })
  }
}
