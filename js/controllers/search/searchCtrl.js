angular.module('app')
  .controller('SearchController', SearchController)

SearchController.$inject = ['$state', 'SearchFactory'];

function SearchController($state, SearchFactory){
  var vm = this;

  vm.searchNearby = function(){
    SearchFactory.nearby(vm.address)
      .success(function(data){
        vm.nearby = data;
      })
  }
}
