var mysql = require('mysql');

//获取数据库配置类
var DBconfig = require('./DBconfig').config;

//数据库连接池配置
var pool = mysql.createPool(DBconfig);

/**
 * getConnection方法
 * @param  {[function]} success [回调函数，创建连接成功将传入err和connection参数执行回调函数]
 * @param  {[function]} fail [回调函数，创建连接失败将传入err和connection参数执行回调函数]
 * success(connection)
 * fail(err,connection)
 */
var getConnection = function(success, fail) {
    pool.getConnection(function(err, connection) {
        if (err) {
            fail(err, connection);
            console.log("与MySQL数据库建立连接失败");
        } else {
            success(connection);
            console.log("与MySQL数据库建立连接成功");
        }
    });
};

exports.getConnection = getConnection;

/**
 * 根据查询字符串查询
 * @param  {[string]} queryString [查询字符串]
 * @param  {[function]} func        [回调函数]
 * func(err, rows)
 */
var query = function(queryString, func) {
    var success = function(connection) {
        console.log("queryString:"+queryString);
        connection.query(queryString, function(err, rows) {
            func(err, rows);
            connectionRelease(function() {
                console.log("释放链接");
            }, connection);
        });
    };
    getConnection(success);
}

exports.query = query;

/**
 * 带参执行查询字符串
 * @param  {[string]} queryString [查询字符串]
 * @param  {[object]} args        [参数对象]
 * @param  {[function]} func        [回调函数]
 */
var queryWithArgs = function(queryString, args, func) {
    var success = function(connection) {
    	console.log("queryString:"+queryString);
    	console.log("args:"+args);
        connection.query(queryString, args, function(err, rows) {
            func(err, rows);
            connectionRelease(function() {
                console.log("释放链接");
            }, connection);
        });
    };
    getConnection(success);
}

exports.queryWithArgs = queryWithArgs;

/**
 * 释放连接
 * @param  {[function]} doSomething [函数，在释放连接前执行]
 * @param  {[connection]} connection  [传入已经打开的连接]
 */
var connectionRelease = function(doSomething, connection) {
    doSomething();
    connection.release();
}

exports.connectionRelease = connectionRelease;
