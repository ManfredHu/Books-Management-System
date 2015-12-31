'use strict';

/**
 * @ngdoc function
 * @name booksManagementSystemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the booksManagementSystemApp
 */
var booksManagementSystemApp = angular.module('booksManagementSystemApp');
booksManagementSystemApp.controller('MainCtrl', ['$scope',function($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function() {
        $scope.todos.push($scope.todo);
        $scoep.todo = "";
    };
    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index,1);
    }
    没用到
}]);
