'use strict';

var booksManagementSystemApp = angular.module('booksManagementSystemApp');
booksManagementSystemApp.controller('LoginCtrl', function($scope) {
	$scope.submitForm = function(valid) {
		var user = {
			"username":$scope.userName,
			"password":$scope.password
		};
		if(valid) {
			//发送数据到后台
			alert(JSON.stringify(user));
		}else{

		}
	};
});
