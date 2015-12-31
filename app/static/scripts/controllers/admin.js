'use strict';

var adminApp = angular.module('adminApp');
adminApp.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.navName = "baonima";
    

}]);

// var user = {
    //     "username": $scope.userName,
    //     "password": $scope.password
    // };
    // //检验通过
    // if (valid) {
    //     //发送数据到后台
    //     $http({
    //         method: 'POST',
    //         url: host + '/login',
    //         headers: {
    //             //表单的报头格式
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: $.param(user) //发送user数据到后台，这里用到了jQ
    //     }).then(function successCallback(response) {
    //         if(response.status === 200) {

    //         }
    //     }, function errorCallback(response) {
    //         console.log(response);
    //         alert(response.data.msg);
    //     });
    // } else {
    //     alert("表单错误，请重新输入");
    // }
