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
      controller: 'loginController as lc'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerController as rc'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'profileController as pc'
    })

  $urlRouterProvider.otherwise('/');
}
