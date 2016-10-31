angular.module('app')
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$http', '$state'];

function RegisterController($http, $state) {
  var vm = this;

  vm.createUser = function(){
    var apiURL = 'http://localhost:3000/api/';

    $http.post(apiURL + 'users/', vm.newUser)
      .then(function (data) {
        if(data.data.success){
          $state.go('login');
        } else {
          vm.user.password = '';
          vm.user.confirmPassword = '';
          // vm.feedback.type = 'error';
          // vm.feedback.message = 'Incorrect username/password';
        }
      })
  }
}
