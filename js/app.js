angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])

function router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController as lc'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterController as rc'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile/profile.html',
      controller: 'ProfileController as pc'
    })
    .state('profileEdit', {
      url: '/profile/edit',
      templateUrl: 'templates/profile/profileEdit.html',
      controller: 'ProfileEditController as pec'
    })
    .state('profileShow', {
      url: '/profile/:id',
      templateUrl: 'templates/profile/profileShow.html',
      controller: 'ProfileShowController as psc'
    })
    .state('spaces', {
      url: '/spaces',
      templateUrl: 'templates/spaces/spaces.html',
      controller: 'SpacesController as sc'
    })
    .state('spacesShow', {
      url: '/spaces/:id',
      templateUrl: 'templates/spaces/spacesShow.html',
      controller: 'SpacesShowController as ssc'
    })

  $urlRouterProvider.otherwise('/');
}
