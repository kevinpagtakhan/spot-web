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

  $urlRouterProvider.otherwise('/');
}
