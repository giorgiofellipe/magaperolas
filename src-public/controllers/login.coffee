app.controller 'LoginCtrl', ($scope, Config) ->

  $scope.login = (password) ->
    if password = $scope.config.password
      alert "OK!"
    else
      alert "Senha incorreta!"

  $scope.password = null
  $scope.config = new Config