'use strict';
var app;

app = angular.module('magaperolas', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'Parse', 'angulartics', 'angulartics.google.analytics']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'views/login.html'
  }).state('perola', {
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
  $rootScope.$state = $state;
  return $rootScope.$on("$routeChangeStart", function(event, next, current) {
    if ($rootScope.loggedInUser === null) {
      return $location.path("/login");
    }
  });
});

app.controller('LoginCtrl', function($scope, $location, ParseAuth, CustomUser, $rootScope) {
  $scope.loginCallback = function(user) {
    $rootScope.loggedInUser = user;
    return $location.path('/');
  };
  $scope.login = function() {
    var callback, password, username;
    username = $scope.user.username;
    password = $scope.user.password;
    callback = $scope.loginCallback;
    return CustomUser.query({
      'where': {
        'username': $scope.user.username
      }
    }).then(function(users) {
      if (users[0].liberado === true) {
        return ParseAuth.login(username, password, callback);
      } else {
        alert("Usuário não liberado!");
        return $location.path('/login');
      }
    });
  };
  $scope.signup = function() {
    var password, username;
    $scope.user.liberado = false;
    username = $scope.user.username;
    password = $scope.user.password;
    if (username && password) {
      $scope.user.save().then(function(user) {
        return alert("Solicitação enviada com sucesso!");
      });
      return $scope.user = new CustomUser;
    } else {
      return alert("Todos os campos devem ser preenchidos!");
    }
  };
  $scope.user = new CustomUser;
  return ParseAuth.logout();
});

app.controller('PerolaCtrl', function($scope, $location, Perola, ParseAuth) {
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

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('CustomUser', function(ParseDefaultUser) {
  var CustomUser;
  return CustomUser = (function(_super) {
    __extends(CustomUser, _super);

    function CustomUser() {
      return CustomUser.__super__.constructor.apply(this, arguments);
    }

    CustomUser.configure('users', 'username', 'password', 'liberado');

    return CustomUser;

  })(ParseDefaultUser);
});
