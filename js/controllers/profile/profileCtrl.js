angular.module('app')
  .controller('ProfileController', ProfileController)

ProfileController.$inject = ['$state', 'ProfileFactory'];

function ProfileController($state, ProfileFactory){
  var  vm = this;

  ProfileFactory.loggedInUser()
    .then(function success(data){
      vm.user = data.data.data
    }, function failure(data){
      if(data.status == 403){
        $state.go('login');
      }
    })
}
