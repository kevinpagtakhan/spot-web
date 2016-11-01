angular.module('app')
  .controller('SpacesShowController', SpacesShowController);

SpacesShowController.$inject = ['$state', '$stateParams','SpacesFactory'];

function SpacesShowController($state, $stateParams, SpacesFactory){
  var vm = this;
  vm.details = {};

  SpacesFactory.show($stateParams.id)
    .success(function(data){
      vm.space = data.data;
    })

  vm.details.space_id = $stateParams.id;

  vm.reserveSpace = function(){
    console.log(vm.details);
    SpacesFactory.reserveSpace(vm.details)
      .success(function(data){
        console.log(data);
      });
  }
}
