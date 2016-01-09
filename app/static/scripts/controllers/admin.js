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
        }, {
            navName: '管理全部类别',
            urlName: 'seeAllType'
        }, {
            navName: '添加书籍',
            urlName: 'addBook'
        }, {
            navName: '管理全部书籍',
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
            pageSizes: [5, 10, 50],
            pageSize: 10,
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
                } else {
                    $http({
                        method: 'GET',
                        url: '/seeAllType'
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
            enableCellEdit: true, //双击修改，单击选中
            enablePinning: true, //列固定
            columnDefs: [{
                field: 'Sort_id',
                displayName: 'id',
                width: 80,
                pinnable: true,
                sortable: true,
                enableCellEdit: false
            }, {
                field: 'Sort_name',
                displayName: '类别名',
                enableCellEdit: true,
                width: 220
            }, {
                field: 'Sort_id',
                displayName: '修改',
                enableCellEdit: false,
                sortable: false,
                pinnable: false,
                width: 120,
                cellTemplate: '<div><a class="btn btn-xs btn-success feng-btn-modify" ng-click="updateType(row)"  data="{{row.getProperty(col.field)}}">确认修改</a></div>'
            }, {
                field: 'Sort_id',
                displayName: '删除',
                enableCellEdit: false,
                sortable: false,
                pinnable: false,
                width: 120,
                cellTemplate: '<div><a class="btn btn-xs btn-danger feng-btn-delete" ng-click="deleteType(row)" data="{{row.getProperty(col.field)}}">删除</a></div>'
                    //ng-click时间触发的时候传入row
            }],
            enablePaging: true,
            showFooter: true,
            showGroupPanel: true, //顶部的分组选项，可以拖拽列
            // jqueryUITheme: true, //更换主题，需要jq-ui-theme文件
            // selectedItems: $scope.mySelections,
            // multiSelect: false, //多选
            totalServerItems: 'totalServerItems',
            // enableCellSelection: true, 
            pagingOptions: $scope.pagingOptions,
            filterOptions: $scope.filterOptions
        };

        $scope.updateType = function(row) {
            //包装数据传递到后台
            var obj = {
                id: row.entity.Sort_id,
                typeName: row.entity.Sort_name
            };
            // console.log($.param(obj))
            $http.put('/seeAllType/' + obj.id, obj).success(function(data, status) {
                if (status === 200) {
                    alert(data.success);
                }
            });
        };

        $scope.deleteType = function(row) {
            $http.delete('/seeAllType/' + row.entity.Sort_id).success(function(data, status) {
                if (status === 200) {
                    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
                    alert(data.success);
                }
            });
        };
    }
]);
