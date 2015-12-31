'use strict';

//登陆模块，index
var booksManagementSystemApp = angular.module('booksManagementSystemApp', ['ui.router']);

/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次
 */
// booksManagementSystemApp.run(function($rootScope, $state, $stateParams) {
//     $rootScope.$state = $state;
//     $rootScope.$stateParams = $stateParams;
// });

/**
 * 配置路由
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router
 */
booksManagementSystemApp.config(function($stateProvider, $urlRouterProvider) { //设置路由
    $urlRouterProvider.otherwise('/index'); //设置其他路径跳转到index
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                //这里为index设置模板，index对应于login.html这个模板
                //login.html里面又为<div ui-view="footer"></div>指定了下一个模板
                //所以又配置了index里面的footer模板为footer.html
                '': { //设置默认模板,这里是相对HTML页面设置的路径
                    templateUrl: '/tpl/login.html',
                    controller: 'LoginCtrl'
                },
                'footer@index': { //footer部分
                    templateUrl: '/tpl/footer.html'
                }
            }
        })
        
        ;
});
// .state('admin', {
        //     url: '/admin/{id:[0-9]{1,4}}/:name',
        //     views: {
        //         '': { //设置默认模板,这里是相对HTML页面设置的路径
        //             templateUrl: '/tpl/admin.html',
        //             // controller: 'LoginCtrl'
        //         },
        //         'navSideBar@index': { //footer部分
        //             templateUrl: '/tpl/navSideBar.html'
        //         },
        //         'bookList@index': { //footer部分
        //             templateUrl: '/tpl/bookList.html'
        //         }
        //     }
        // })
