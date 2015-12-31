'use strict';

var adminApp = angular.module('adminApp');
adminApp.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {

}]);

//后台管理模块左侧导航栏控制器
adminApp.controller('navCtrl', ['$scope', '$http', function($scope, $http) {
    /**
     * 需求：默认为显示导航第一个功能，点击导航切换右侧页面，且高亮当前导航项
     */

    //设定功能名称
    $scope.navGroups = [
        //第一导航组
        {
            navName: '添加类别',
            urlName: 'addType'
        },{
            navName: '查看全部类别',
            urlName: 'seeAllType'
        },{
            navName: '添加书籍'
            // ,
        },{
            navName: '查看全部书籍'
            // ,
        },{
            navName: 'One more nav'
            // ,
        },{
            navName: 'Nav item again'
            // ,
        },{
            navName: 'Another nav item'
            // ,
        }
    ];
    //当前显示的项
    $scope.show = 1;
    // if(){
    //     $scope.now = '';
    // }
    //bootstrap显示当前XXX的一个html，需要加在链接后面
    var needAddHtml = '<span class="sr-only">(current)</span>';
    $scope.needAddHtml = needAddHtml;

}]);

adminApp.controller('bookListCtrl', ['$scope', '$http', function($scope, $http) {

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
