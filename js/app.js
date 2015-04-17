'use strict';
var app;

app = angular.module('magaperolas', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'Parse', 'angulartics', 'angulartics.google.analytics']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('perola', {
    url: '/',
    controller: 'PerolaCtrl',
    templateUrl: 'views/perola.html'
  }).state('editPerola', {
    url: '/edit0',
    controller: 'PerolaCtrl',
    templateUrl: 'views/editPerola.html'
  });
  $urlRouterProvider.otherwise('/');
  return ParseProvider.initialize("S8eGLRNVVFAmU4QnSCyWM5HXVQQOmD6rbTyDKMLa", "UBgeih7uP7Ngx0poLAPHFQWhE52cBQ3S8KSRMxVU");
});

app.run(function($rootScope, $state) {
  return $rootScope.$state = $state;
});

app.controller('PerolaCtrl', function($scope, Perola) {
  $scope.addPerola = function() {
    $scope.newPerola.liberada = 0;
    if ($scope.newPerola.frase && $scope.newPerola.autor) {
      $scope.newPerola.save().then(function(perola) {
        return $scope.fetchAllPerolas();
      });
      return $scope.newPerola = new Perola;
    } else {
      return alert("Todos os campos devem ser preenchidos!");
    }
  };
  $scope.removePerola = function(perola) {
    return perola.destroy().then(function() {
      return _.remove($scope.perolas, function(perola) {
        return perola.objectId === null;
      });
    });
  };
  $scope.editingPerola = function(perola) {
    return perola.editing = true;
  };
  $scope.editPerola = function(perola) {
    perola.save();
    return perola.editing = false;
  };
  $scope.cancelEditing = function(perola) {
    perola.frase = perola._cache.frase;
    perola.autor = perola._cache.autor;
    perola.liberada = perola._cache.liberada;
    perola.contexto = perola._cache.contexto;
    return perola.editing = false;
  };
  $scope.fetchAllPerolas = function() {
    return Perola.query().then(function(perolas) {
      return $scope.perolas = perolas;
    });
  };
  $scope.fetchPerolasLiberadas = function() {
    return Perola.query({
      'order': '-createdAt'
    }).then(function(perolas) {
      return $scope.perolas = perolas;
    });
  };
  $scope.fetchPerolasLiberadas();
  return $scope.newPerola = new Perola;
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('Perola', function(Parse) {
  var Perola;
  return Perola = (function(_super) {
    __extends(Perola, _super);

    function Perola() {
      return Perola.__super__.constructor.apply(this, arguments);
    }

    Perola.configure("Perola", "frase", "autor", "liberada", "contexto");

    return Perola;

  })(Parse.Model);
});
