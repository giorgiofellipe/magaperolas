'use strict';
var app;

app = angular.module('magaperolas', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse', 'angulartics', 'angulartics.google.analytics']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, ParseProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('perola', {
    url: '/:locale',
    controller: 'PerolaCtrl',
    templateUrl: 'perola.html'
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
    return perola.editing = false;
  };
  $scope.fetchAllPerolas = function() {
    return Perola.query().then(function(perolas) {
      return $scope.perolas = perolas;
    });
  };
  $scope.fetchPerolasLiberadas = function() {
    return Perola.query().then(function(perolas) {
      return $scope.perolas = perolas;
    });
  };
  $scope.fetchPerolasLiberadas();
  return $scope.newPerola = new Perola;
});

app.controller('TaskCtrl', function($scope, Task) {
  $scope.addTask = function() {
    $scope.newTask.save().then(function(task) {
      return $scope.fetchTasks();
    });
    return $scope.newTask = new Task;
  };
  $scope.removeTask = function(task) {
    return task.destroy().then(function() {
      return _.remove($scope.tasks, function(task) {
        return task.objectId === null;
      });
    });
  };
  $scope.editingTask = function(task) {
    return task.editing = true;
  };
  $scope.editTask = function(task) {
    task.save();
    return task.editing = false;
  };
  $scope.cancelEditing = function(task) {
    task.title = task._cache.title;
    return task.editing = false;
  };
  $scope.fetchTasks = function() {
    return Task.query().then(function(tasks) {
      return $scope.tasks = tasks;
    });
  };
  $scope.fetchTasks();
  return $scope.newTask = new Task;
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

    Perola.configure("Perola", "frase", "autor", "liberada");

    return Perola;

  })(Parse.Model);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('Task', function(Parse) {
  var Task;
  return Task = (function(_super) {
    __extends(Task, _super);

    function Task() {
      return Task.__super__.constructor.apply(this, arguments);
    }

    Task.configure("Task", "title");

    return Task;

  })(Parse.Model);
});
