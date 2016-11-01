angular.module('app')
  .controller('ReservationsController', ReservationsController)

ReservationsController.$inject = ['$state', 'ReservationsFactory'];

function ReservationsController($state, ReservationsFactory){
  var vm = this;

  ReservationsFactory.index()
    .success(function(data){
      vm.reservations = data.data.reservations;
    })
}
