app.controller 'LoginCtrl', ($scope, $location, ParseAuth, ParseUser) ->

  $scope.login = ->
  	ParseAuth.login($scope.user.username, $scope.user.password)
  	$location.path('/');
  
  $scope.signup = ->
  	ParseAuth.register($scope.user.username, $scope.user.password)

  $scope.user = new ParseUser
  # if ParseAuth.sessionToken != null
  ParseAuth.logout()