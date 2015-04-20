app.controller 'LoginCtrl', ($scope, $location, ParseAuth, CustomUser, $rootScope) ->

  $scope.loginCallback = (user) ->
    $rootScope.loggedInUser = user
    $location.path('/')
    
  $scope.login = ->
    username = $scope.user.username
    password = $scope.user.password
    callback = $scope.loginCallback
    CustomUser.query({
        'where': {
          'username': $scope.user.username
        }
      })
    .then (users) ->
      if users[0].liberado == true
        ParseAuth.login(username, password, callback)
      else
        alert "Usuário não liberado!"
        $location.path('/login')

  $scope.signup = ->
    $scope.user.liberado = false
    username = $scope.user.username
    password = $scope.user.password
    if username and password
      $scope.user.save().then (user) ->   
        alert "Solicitação enviada com sucesso!"
      $scope.user = new CustomUser
    else
      alert "Todos os campos devem ser preenchidos!"

  $scope.user = new CustomUser
  # if ParseAuth.sessionToken != null
  ParseAuth.logout()