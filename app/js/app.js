'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.when('', {templateUrl: 'index.html', controller: 'MyCtrl1'});
  $routeProvider.when('/', {templateUrl: 'index.html', controller: 'indexController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
