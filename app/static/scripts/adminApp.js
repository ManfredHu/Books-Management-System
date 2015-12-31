'use strict';

//管理系统模块，admin
var adminApp = angular.module('adminApp', ['ui.router']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次
 */
adminApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router
 * *****************注意这里的路径配置*****************
 * 执行这里的时候，indexAdmin页面已经载入，所以这里没写
 */
adminApp.config(function($stateProvider, $urlRouterProvider) { //设置路由
    $urlRouterProvider.otherwise('/admin/add'); //设置其他路径跳转到index
    $stateProvider
        .state('admin', {
            //这里捕获的路由参数(add/seeAll)可以在ui-sref="booklist({bookType:0})"获取得到
            //这里用正则式捕获类别参数，只能为add(添加类别)/seeAll(查看全部书籍类别)
            url: '/admin/{funcName:[a-zA-Z]{1,10}}', 
            views: {
                '': { //设置默认模板,这里是相对HTML页面设置的路径
                    templateUrl: '/tpl/indexAdmin.html',
                    controller: 'adminCtrl'
                },
                'navSideBar@admin': { //footer部分
                    templateUrl: '/tpl/navSideBar.html',
                    controller:'navCtrl'
                },
                'bookList@admin': { //footer部分
                    templateUrl: '/tpl/bookList.html',
                    controller:'bookListCtrl'
                }
            }
        })
        ;
});