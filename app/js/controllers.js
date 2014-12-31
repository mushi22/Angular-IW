'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('indexController', [function() {

  }])


  .controller('AuthController', ['$scope',  function($scope) {

  	Parse.initialize("vBbvihMsKuxIfMc999TtrwCHAKxRW2PMarjtRVBn","Y53eTAGBxDeiWNDFOwomUhDFjlEnh2qEiAiY9GOi");
  	console.log('test');

  	$scope.user = {username: '', password: ''};
  	$scope.login = function() {
  		console.log("test");
  		Parse.User.logIn($scope.user, $scope.passwd, {
  			success: function(user) {
    			// Do stuff after successful login.
    			console.log(user);
    			console.log("successful login");
    			$location.path('/');
  			},
  			error: function(user, error) {
    			// The login failed. Check error to see why.
    			consle.log(user);
    			console.log(error);
    			console.log("login Failed");
  			}
		});

  	};

  }]);