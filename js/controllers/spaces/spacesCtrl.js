angular.module('app')
  .controller('SpacesController', SpacesController);

SpacesController.$inject = ['$state', 'SpacesFactory'];

function SpacesController($state, SpacesFactory){
  var vm = this;

  SpacesFactory.index()
    .success(function(data){
      vm.spaces = data.data;
    })
}
