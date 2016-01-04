'use strict';

var adminApp = angular.module('adminApp');
adminApp.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {

}]);

//后台管理模块左侧导航栏控制器
adminApp.controller('navCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        /**
         * 需求：默认为显示导航第一个功能，点击导航切换右侧页面，且高亮当前导航项
         */

        //设定功能名称
        var navGroups = [
            //第一导航组
            {
                navName: '添加类别', //显示的名称
                urlName: 'addType' //对应URL的名称
                //needAddClass：'active'
            }, {
                navName: '查看全部类别',
                urlName: 'seeAllType'
            }, {
                navName: '添加书籍'
                    // ,
            }, {
                navName: '查看全部书籍'
                    // ,
            }, {
                navName: 'One more nav'
                    // ,
            }, {
                navName: 'Nav item again'
                    // ,
            }, {
                navName: 'Another nav item'
                    // ,
            }
        ];
        $scope.navGroups = navGroups;

        //迭代功能数组选取当前项
        navGroups.forEach(function(eachOne) {
            var path = $location.path(); //获取URL参数部分    
            if (eachOne.urlName) {
                if (path.indexOf(eachOne.urlName) !== -1) {
                    eachOne.needAddClass = 'active'; //bootStrap显示当前项的类
                }
            }
        });
    }
]);

adminApp.controller('addBookType', ['$scope', '$http',
    function($scope, $http) {
        //检验通过
        $scope.addType = function(valid, event) {
            $scope.formData = {
                typeName: $scope.typeName
            };
            if (valid) {
                //发送数据到后台
                $http({
                    method: 'POST',
                    url: '/addType',
                    headers: {
                        //表单的报头格式
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: $.param($scope.formData) //发送user数据到后台，这里用到了jQ
                }).then(function successCallback(response) {
                    if (response.status === 200) {
                        $scope.typeName = "";
                        alert(response.data.success);
                    }
                }, function errorCallback(response) {
                    alert("添加书籍类别失败");
                });
            }
        }
    }
]);
