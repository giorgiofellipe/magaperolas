app.controller 'AppCtrl', ($scope) ->
  $scope.currentUser = null;
 
  $scope.setCurrentUser = (user) ->
    $scope.currentUser = user;

app.factory 'AuthResolver', ($q, $rootScope, $state) ->
  resolve = () ->
    deferred = $q.defer();
    unwatch = $rootScope.$watch 'currentUser', (currentUser) ->
      console.log(currentUser)
      if angular.isDefined(currentUser)
        if currentUser
          deferred.resolve(currentUser);
        else
          deferred.reject();
          $state.go('login');
      else
        unwatch();
    deferred.promise;