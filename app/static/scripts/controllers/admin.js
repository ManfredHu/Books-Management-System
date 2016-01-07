'use strict';

//为adminApp模块（后台管理）定义控制器
adminApp.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {

}]);

//后台管理模块左侧导航栏控制器
adminApp.controller('navCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        /**
         * 需求：默认为显示导航第一个功能，点击导航切换右侧页面，且高亮当前导航项
         */

        //设定功能名称
        var navGroups = [{
            navName: '添加类别', //显示的名称
            urlName: 'addType' //对应URL的名称
                //needAddClass：'active'
        }, {
            navName: '查看全部类别',
            urlName: 'seeAllType'
        }, {
            navName: '添加书籍',
            urlName: 'addBook'
        }, {
            navName: '查看全部书籍',
            urlName: 'seeAllBook'
        }, {
            navName: 'One more nav'
                // ,
        }, {
            navName: 'Nav item again'
                // ,
        }, {
            navName: 'Another nav item'
                // ,
        }];
        $scope.navGroups = navGroups;
    }
]);

//添加类别
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

//查看全部类别
adminApp.controller('seeAllType', ['$scope', '$http',
    function($scope, $http) {
        $scope.filterOptions = {
            filterText: "",
            useExternalFilter: true
        };
        $scope.totalServerItems = 0;
        $scope.pagingOptions = {
            pageSizes: [5, 10, 20],
            pageSize: 5,
            currentPage: 1
        };

        //设置页面数据
        $scope.setPagingData = function(data, page, pageSize) {
            var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
            $scope.bookTypes = pagedData;
            $scope.totalServerItems = data.length;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };

        //异步获取页面数据
        $scope.getPagedDataAsync = function(pageSize, page, searchText) {
            setTimeout(function() {
                var data;
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    //获取模拟的书籍json文件
                    $http.get('/seeAllType')
                        .success(function(largeLoad) {
                            data = largeLoad.filter(function(item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                            });
                            $scope.setPagingData(data, page, pageSize);
                        });
                    alert("有searchText");
                } else {
                    //
                    // $http.get('/seeAllType')
                    //     .success(function(largeLoad) {
                    //         $scope.setPagingData(largeLoad, page, pageSize);
                    //     });
                    $http({
                        method: 'GET',
                        url: '/seeAllType',
                        // headers: {
                        //     //表单的报头格式
                        //     'Content-Type': 'application/x-www-form-urlencoded'
                        // },
                        // data: $.param($scope.formData) //发送user数据到后台，这里用到了jQ
                    }).then(function successCallback(response) {
                        if (response.status === 200) {
                            $scope.setPagingData(response.data, page, pageSize);
                        }
                    }, function errorCallback(response) {
                        alert("获取书籍类别数据失败");
                    });
                }
            }, 100);
        };

        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

        //监听排序等
        $scope.$watch('pagingOptions', function(newVal, oldVal) {
            if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
            }
        }, true);
        $scope.$watch('filterOptions', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
            }
        }, true);

        $scope.gridOptions = {
            data: 'bookTypes',
            rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                '<div ng-cell></div>' +
                '</div></div>',
            multiSelect: false,
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true,
            enablePinning: true,
            columnDefs: [{
                field: 'index',
                displayName: '序号',
                width: 60,
                pinnable: false,
                sortable: false
            }, {
                field: 'name',
                displayName: '书名',
                enableCellEdit: true
            }, {
                field: 'author',
                displayName: '作者',
                enableCellEdit: true,
                width: 220
            }, {
                field: 'pubTime',
                displayName: '出版日期',
                enableCellEdit: true,
                width: 120
            }, {
                field: 'price',
                displayName: '定价',
                enableCellEdit: true,
                width: 120,
                cellFilter: 'currency:"￥"'
            }, {
                field: 'bookId',
                displayName: '操作',
                enableCellEdit: false,
                sortable: false,
                pinnable: false,
                cellTemplate: '<div><a ui-sref="bookdetail({bookId:row.getProperty(col.field)})" id="{{row.getProperty(col.field)}}">详情</a></div>'
            }],
            enablePaging: true,
            showFooter: true,
            totalServerItems: 'totalServerItems',
            pagingOptions: $scope.pagingOptions,
            filterOptions: $scope.filterOptions
        };
    }
]);
