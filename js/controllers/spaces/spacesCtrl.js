angular.module('app')
  .controller('SpacesController', SpacesController);

SpacesController.$inject = ['$state', 'SpacesFactory'];

function SpacesController($state, SpacesFactory){
  var vm = this;

  SpacesFactory.index()
    .then(function success(data){
      vm.spaces = data.data.data;
    }, function failure(data){
      if(data.status == 403){
        $state.go('login');
      }
    })
}
