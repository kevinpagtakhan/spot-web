angular.module('app')
  .controller('SpacesNewController', SpacesNewController);

SpacesNewController.$inject = ['$state', 'SpacesFactory'];

function SpacesNewController($state, SpacesFactory){
  var vm = this;
  vm.isLoading = false;


}
