var User = require("../model/UserModel");
var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;

/**
 * 插入用户
 * @param  {User}   user
 * @param  {Function} callback
 * @return {String} success或者错误字符串
 * callback(err, rows);
 */
var insert = function(user, callback) {
    var sql = "insert into t_admin set ?";
    console.log(user);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, user, function(err, rows) {
            console.log("UserDaoInsertSuccess:" + rows);
            if (err) {
                console.error("UserDaoInsertError:" + err);
            }
        });
        return "success";
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoInsertCatchError:" + er);
        return er.toString();
    }
}

exports.insert = insert;

/**
 * 
 * @param  {Function} callback [description]
 * @return {String} success或者错误字符串
 * callback(err, rows);
 */

/**
 * 查找全部用户
 * @param  {Function} callback [description]
 * callback(rows);
 */
var select = function(callback) {
	var obj = {
		message:"";
		arr:[];
	}
    var sql = "select * from t_admin";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("UserDaoSelectSuccess:" + rows);
            if (err) {
                console.error("UserDaoSelectError:" + err);
            }

            if(arr.length < 1) {
				obj.arr = rows;				            	
            }else{
            	obj.arr.concat(rows);
            }
            obj.message = "success";

            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("UserDaoSelectCatchError:" + er);
        return er.toString();
    }
}

exports.select = select;
