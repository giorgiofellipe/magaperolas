app.controller 'PerolaCtrl', ($scope, $location, Perola, ParseAuth, sweet) ->

  $scope.addPerola = ->
    $scope.newPerola.liberada = 0
    if $scope.newPerola.frase and $scope.newPerola.autor
      $scope.newPerola.save().then (perola) ->
        $scope.fetchAllPerolas()
      $scope.newPerola = new Perola
    else
      sweet.show("Oops!", "Todos os campos devem ser preenchidos!", "error");
    

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
    perola.contexto = perola._cache.contexto
    perola.editing = false

  $scope.fetchAllPerolas = ->
    Perola.query()
    .then (perolas) ->
      $scope.perolas = perolas

  $scope.fetchPerolasLiberadas = ->
    Perola.query({
        # 'where': {
        #   'liberada': 1
        # }
        'order': '-createdAt'
      })
    .then (perolas) ->
      $scope.perolas = perolas
      
  $scope.fetchPerolasLiberadas()
  $scope.newPerola = new Perola