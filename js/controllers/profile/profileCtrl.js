angular.module('app')
  .controller('ProfileController', ProfileController)

ProfileController.$inject = ['$state', 'ProfileFactory'];

function ProfileController($state, ProfileFactory){
  var  vm = this;

  ProfileFactory.loggedInUser()
    .success(function(data){
      vm.user = data.data
    })
}
