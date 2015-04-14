angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/editPerola.html","<h1>MagaPérolas \\o/</h1>\r\n<div ng-repeat=\"perola in perolas\" class=\"ng-scope\">\r\n  <form ng-hide=\"perola.editing\" class=\"ng-pristine ng-valid\">\r\n      <blockquote ng-model=\"perola._cache.frase\" ng-dblclick=\"editingPerola(perola)\" readonly=\"\" class=\"ng-pristine ng-valid\">\r\n        <h2 class=\"ng-binding\">{{perola._cache.frase}}</h2> \r\n        <h4 class=\"ng-binding\">{{perola._cache.contexto}}</h4>\r\n        <cite ng-model=\"perola._cache.autor\" readonly=\"\" class=\"ng-pristine ng-valid\">       \r\n          <h5 class=\"ng-binding\">{{perola._cache.autor}}</h5>\r\n        </cite>\r\n      </blockquote>\r\n    </form>\r\n    <form ng-submit=\"editPerola(perola)\" ng-show=\"perola.editing\" class=\"ng-pristine ng-valid ng-hide\">\r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\">Frase: </span>\r\n        <input type=\"text\" ng-model=\"perola.frase\" autofocus=\"\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\"> Contexto: </span>\r\n        <input type=\"text\" ng-model=\"perola.contexto\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\"> Autor: </span>\r\n        <input type=\"text\" ng-model=\"perola.autor\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <span class=\"input-group-btn\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Save</button>\r\n        <div ng-click=\"cancelEditing(perola)\" class=\"btn btn-default\">Cancel</div>\r\n        <div ng-click=\"removePerola(perola)\" class=\"btn btn-default\">Remove</div>\r\n      </span>\r\n  </form>\r\n</div>");
$templateCache.put("/perola.html","<h1>MagaPérolas \\o/</h1>\r\n<form role=\"form\" ng-submit=\"addPerola()\" class=\"ng-scope ng-pristine ng-valid\">\r\n  <div class=\"input-group-sm\">\r\n    <span class=\"input-group-addon\">Frase: </span>\r\n    <input type=\"text\" ng-model=\"newPerola.frase\" autofocus=\"\" class=\"form-control ng-pristine ng-valid\">\r\n  </div>\r\n  <div class=\"input-group-sm\">\r\n    <span class=\"input-group-addon\"> Contexto: </span>\r\n    <input type=\"text\" ng-model=\"newPerola.contexto\" class=\"form-control ng-pristine ng-valid\">\r\n  </div>\r\n  <div class=\"input-group-sm\">\r\n    <span class=\"input-group-addon\"> Autor: </span>\r\n    <input type=\"text\" ng-model=\"newPerola.autor\" class=\"form-control ng-pristine ng-valid\">\r\n  </div>\r\n  <span class=\"input-group-btn\">\r\n    <button type=\"submit\" class=\"btn btn-default btn-add\">Add</button>\r\n  </span>\r\n</form>\r\n<div ng-repeat=\"perola in perolas\" class=\"ng-scope\">\r\n  <form ng-hide=\"perola.editing\" class=\"ng-pristine ng-valid\">\r\n      <blockquote ng-model=\"perola._cache.frase\" readonly=\"\" class=\"ng-pristine ng-valid\">\r\n        <h2 class=\"ng-binding\">\"{{perola._cache.frase}}\"</h2> \r\n        <h4 class=\"ng-binding\">{{perola._cache.contexto}}</h4>\r\n        <cite ng-model=\"perola._cache.autor\" readonly=\"\" class=\"ng-pristine ng-valid\">       \r\n          <h5 class=\"ng-binding\">{{perola._cache.autor}}</h5>\r\n        </cite>\r\n      </blockquote>\r\n    </form>\r\n    <form ng-submit=\"editPerola(perola)\" ng-show=\"perola.editing\" class=\"ng-pristine ng-valid ng-hide\">    \r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\">Frase: </span>\r\n        <input type=\"text\" ng-model=\"perola.frase\" autofocus=\"\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\"> Contexto: </span>\r\n        <input type=\"text\" ng-model=\"perola.contexto\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <div class=\"input-group-sm\">\r\n        <span class=\"input-group-addon\"> Autor: </span>\r\n        <input type=\"text\" ng-model=\"perola.autor\" class=\"form-control ng-pristine ng-valid\">\r\n      </div>\r\n      <span class=\"input-group-btn\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Save</button>\r\n        <div ng-click=\"cancelEditing(perola)\" class=\"btn btn-default\">Cancel</div>\r\n        <div ng-click=\"removePerola(perola)\" class=\"btn btn-default\">Remove</div>\r\n      </span>\r\n  </form>\r\n</div>");}]);