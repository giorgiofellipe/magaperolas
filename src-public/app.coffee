'use strict'

app = angular.module 'magaperolas', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'Parse'
  'angulartics'
  'angulartics.google.analytics'
]

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  ParseProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'login',
    url: '/login'
    controller: 'LoginCtrl'
    templateUrl: 'views/login.html'
  .state 'perola',
    url: '/'
    controller: 'PerolaCtrl'
    templateUrl: 'views/perola.html'
  .state 'editPerola',
    url: '/edit0'
    controller: 'PerolaCtrl'
    templateUrl: 'views/editPerola.html'

  $urlRouterProvider.otherwise '/'

  ParseProvider.initialize(
    "S8eGLRNVVFAmU4QnSCyWM5HXVQQOmD6rbTyDKMLa", # Application ID
    "UBgeih7uP7Ngx0poLAPHFQWhE52cBQ3S8KSRMxVU"  # REST API Key
  )

app.run ($rootScope, $state, $location) ->
  $rootScope.$state = $state
  $rootScope.$on "$locationChangeStart", (event, next, current) ->
    console.log($rootScope.loggedInUser)
    if $rootScope.loggedInUser == null or $rootScope.loggedInUser == undefined
      $location.path("/login");