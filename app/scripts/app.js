'use strict';

/**
 * @ngdoc overview
 * @name booksManagementSystemApp
 * @description
 * # booksManagementSystemApp
 *
 * Main module of the application.
 */
var booksManagementSystemApp = angular.module('booksManagementSystemApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);
booksManagementSystemApp.config(function($stateProvider, $urlRouterProvider) { //设置路由
    $urlRouterProvider.otherwise('/index'); //设置其他路径跳转到index
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': { //设置默认模板
                    templateUrl: '../views/login.html',
                    controller:'LoginCtrl'
                },
                'footer@index': { //footer部分
                    templateUrl: '../views/footer.html'
                }
            }
        });
    // .when('/', {
    //     // templateUrl: 'views/main.html',
    //     // controller: 'MainCtrl',
    //     // controllerAs: 'main'
    // })
    // .when('/login', {
    //     templateUrl: 'views/login.html',
    //     controller: 'LoginCtrl'
    // })
    // .otherwise({
    //     redirectTo: '/login'
    // });
    // 
    // 
    // 
    // 'header@index': { //header部分
    //     templateUrl: '../views/header.html'
    // },
    // 'main@index': { //main部分
    //     templateUrl: '../views/main.html'
    // },
});
