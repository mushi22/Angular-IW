'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.when('', {templateUrl: 'index.html', controller: 'MyCtrl1'});
  $routeProvider.when('/', {
  	templateUrl: 'index.html', 
  	controller: 'indexController'
  });
  $routeProvider.when('login', {
  	templateUrl: 'login.html',
  	controller: 'AuthController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
