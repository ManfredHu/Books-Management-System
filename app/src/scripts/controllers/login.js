'use strict';

// var host = '127.0.0.1';
var host = 'http://127.0.0.1:80';

var booksManagementSystemApp = angular.module('booksManagementSystemApp');
booksManagementSystemApp.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.submitForm = function(valid) {
        var user = {
            "username": $scope.userName,
            "password": $scope.password
        };
        //检验通过
        if (valid) {
            //发送数据到后台
            $http({
                method: 'POST',
                url: host + '/login',
                headers: {
                    //表单的报头格式
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(user) //发送user数据到后台
            }).then(function successCallback(response) {
                alert("成功响应");
                // if(response.status === 200) {
                //     alert(response.data.msg);
                // }
            }, function errorCallback(response) {
                alert(response.data.msg);
            });
        } else {
            alert("表单错误，请重新输入");
        }
    };
}]);
