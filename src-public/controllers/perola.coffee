app.controller 'PerolaCtrl', ($scope, Perola) ->

  $scope.addPerola = ->
    $scope.newPerola.liberada = 0
    if $scope.newPerola.frase and $scope.newPerola.autor
      $scope.newPerola.save().then (perola) ->
        $scope.fetchAllPerolas()
      $scope.newPerola = new Perola
    else
      alert "Todos os campos devem ser preenchidos!"
    

  $scope.removePerola = (perola) ->
    perola.destroy().then () ->
      _.remove $scope.perolas, (perola) ->
        perola.objectId is null

  $scope.editingPerola = (perola) ->
    perola.editing = true

  $scope.editPerola = (perola) ->
    perola.save()
    perola.editing = false

  $scope.cancelEditing = (perola) ->
    perola.frase = perola._cache.frase
    perola.autor = perola._cache.autor
    perola.liberada = perola._cache.liberada
    perola.editing = false

  $scope.fetchAllPerolas = ->
    Perola.query()
    .then (perolas) ->
      $scope.perolas = perolas

  $scope.fetchPerolasLiberadas = ->
    Perola.query()
    .then (perolas) ->
      $scope.perolas = perolas

  $scope.fetchPerolasLiberadas()
  $scope.newPerola = new Perola