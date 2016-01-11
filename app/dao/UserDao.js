// var User = require("../model/UserModel");
var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;
var md5 = require('md5');

/*
             输入       输出
insert       User       信息
delete       User.id    信息
modify       User       信息
selectAll    无         [User]     
selectOne    User.id    User
 */


/**
 * 插入用户
 * @param  {User}   	user     传入的User类
 * @param  {Function} 	callback 回调函数，执行如callback("success");或者callback(er);
 */
var insert = function(user, callback) {
    console.log("user:"+user);
    var sql = "insert into t_admin set ?";
    var obj = {
        Admin_name:user.username,
        Admin_password:md5(user.password)    //用MD5加密用户密码
    };
    console.log(obj);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("UserDaoInsertSuccess:" + rows);
            if (err) {
                console.error("UserDaoInsertError:" + err);
                callback("error",err);
                return;
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoInsertCatchError:" + er);
        callback(er);
    }
};

exports.insert = insert;

/**
 * 删除用户
 * @param  {var}   		id       要删除的User.id
 * @param  {Function} 	callback 回调函数，执行如callback("success");或者callback(er);
 */
var deleteOne = function(id, callback) {
    var sql = "DELETE FROM t_admin WHERE Admin_id = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("UserDaoDeleteSuccess:" + rows);
            if (err) {
                console.error("UserDaoDeleteError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoDeleteCatchError:" + er);
        callback(er);
    }
};

exports.deleteOne = deleteOne;

/**
 * 修改用户
 * @param  {User}   	user     传入的User类
 * @param  {Function} 	callback 回调函数，执行如callback("success");或者callback(er);
 */
var modify = function(user, callback) {
    var sql = "UPDATE t_admin SET Admin_name = '" + user.username + "',Admin_password = '" + user.password + "' WHERE Admin_id =" + user.id;
    console.log(sql);
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("UserDaoModifySuccess:" + rows);
            if (err) {
                console.error("UserDaoModifyError:" + err);
            }
            callback("success",err);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoModifyCatchError:" + er);
        callback(er);
    }
};

exports.modify = modify;

/**
 * 查找一个用户
 * @param  {var}   		id       查找的用户id
 * @param  {Function} 	callback 回调函数，执行如callback(rows[0]);也可以看callback(User);
 */
var selectOne = function(id, callback){
	var sql = "SELECT * FROM t_admin WHERE Admin_id = ?";
	try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("UserDaoSelectOneSuccess:" + rows);
            if (err) {
                console.error("UserDaoSelectOneError:" + err);
            }
            callback(rows[0]);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoSelectOneCatchError:" + er);
        callback(er);
    }
};

exports.selectOne = selectOne;

/**
 * 查找全部用户
 * @param  {Function} callback 回调函数，执行如callback(rows);也可以看callback([User]);
 */
var selectAll = function(callback) {
    var sql = "select * from t_admin";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("UserDaoSelectAllSuccess:" + rows);
            if (err) {
                console.error("UserDaoSelectAllError:" + err);
            }
            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoSelectAllCatchError:" + er);
        callback(er);
    }
};

exports.selectAll = selectAll;
