app.controller 'LoginCtrl', ($scope, $location, ParseAuth, CustomUser, $rootScope, sweet) ->

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
        sweet.show("Usuário não liberado!")
        $location.path('/login')

  $scope.signup = ->
    $scope.user.liberado = false
    username = $scope.user.username
    password = $scope.user.password
    if username and password
      $scope.user.save().then (user) ->   
        sweet.show("Sucesso!","Solicitação enviada com sucesso!","success");
      $scope.user = new CustomUser
    else
      sweet.show("Oops!", "Todos os campos devem ser preenchidos!", "error");

  $scope.user = new CustomUser
  # if ParseAuth.sessionToken != null
  ParseAuth.logout()