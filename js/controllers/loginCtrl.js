angular.module('app')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$state'];

function LoginController($http, $state)

  var vm = this;
  vm.test = 'ok'
  vm.authenticateUser = function(){
    var apiURL = 'http://localhost:3000/api/';

    $http.post(apiURL + 'users/authenticate', vm.user)
      .then(function (data) {
        if(data.data.success){
          localStorage.setItem('token', data.data.data);
          vm.user = {};
          $state.go('profile');
        } else {
          localStorage.removeItem('token');
          vm.user.password = '';
          // vm.feedback.type = 'error';
          // vm.feedback.message = 'Incorrect username/password';
        }
      })
  }
}
