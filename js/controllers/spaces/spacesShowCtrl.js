angular.module('app')
  .controller('SpacesShowController', SpacesShowController);

SpacesShowController.$inject = ['$state', '$stateParams','SpacesFactory'];

function SpacesShowController($state, $stateParams, SpacesFactory){
  var vm = this;

  SpacesFactory.show($stateParams.id)
    .success(function(data){
      vm.space = data.data;
      console.log(data);
    })
}
