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
  .state 'perola',
    url: '/:locale'
    controller: 'PerolaCtrl'
    templateUrl: 'views/perola.html'

  $urlRouterProvider.otherwise '/'

  ParseProvider.initialize(
    "S8eGLRNVVFAmU4QnSCyWM5HXVQQOmD6rbTyDKMLa", # Application ID
    "UBgeih7uP7Ngx0poLAPHFQWhE52cBQ3S8KSRMxVU"  # REST API Key
  )

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
