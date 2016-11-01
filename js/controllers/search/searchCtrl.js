angular.module('app')
  .controller('SearchController', SearchController)

SearchController.$inject = ['$state', 'SearchFactory'];

function SearchController($state, SearchFactory){
  var vm = this;

  vm.searchNearby = function(){
    SearchFactory.nearby(vm.address)
      .then(function success(data){
        vm.nearby = data.data;
      }, function failure(data){
        if(data.status == 403){
          $state.go('login');
        }
      })
  }
}
