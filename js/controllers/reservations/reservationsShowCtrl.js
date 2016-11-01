angular.module('app')
  .controller('ReservationsShowController', ReservationsShowController);

ReservationsShowController.$inject = ['$stateParams', 'ReservationsFactory'];

function ReservationsShowController($stateParams, ReservationsFactory){
  var vm = this;
  vm.isLoading = true;

  vm.updateMap = function(){
    if(!vm.address.origin){
      vm.map.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBxDN6q_NrQougCGoZU22AsMrWNnri82u0&q=Santa+Monica+CA'
    }

      document.getElementById('mymap').setAttribute('src', vm.map.src);
  }

  vm.updateMap();

  ReservationsFactory.show($stateParams.id)
    .then(function success(data){
      console.log(data);
      vm.reservation = data.data.data;
      vm.isLoading = false;
    }, function failure(data){
      console.log(data);
    });
}
