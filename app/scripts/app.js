'use strict';

/**
 * @ngdoc overview
 * @name booksManagementSystemApp
 * @description
 * # booksManagementSystemApp
 *
 * Main module of the application.
 */
angular
  .module('booksManagementSystemApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) { //设置路由
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
