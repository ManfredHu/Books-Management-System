// var mysql = require("mysql");
// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user:"root",
// 	password:"123456",
// 	database:"db_book"
// });
// connection.connect();
// var str = "INSERT INTO t_admin SET ?";
// var obj = {Admin_name:'are',Admin_password:'123456'};
// connection.query(str,obj, function(err, rows, fields) {
//   if (err) throw err;

//   // console.log('The solution is: ', rows);
//   console.log('The solution is: ', JSON.stringify(rows));
// });
// connection.end();

// 测试
// var query = require('./serve/connectionPool').query;
// query('SELECT * FROM t_admin', function(err, rows) {
//     console.log("执行query回调函数");
//     console.log(rows);
// });

// connection();
// connection.query('SELECT * FROM t_admin', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', JSON.stringify(rows));
//   });
// connection.end();
// 
// 

var insertUser = require("./dao/UserDao").insert;
var obj = {Admin_name:'1440',Admin_password:'123456'};
insertUser(obj,function() {
	console.warn("哈哈哈哈");
});

var insertUser = require("./dao/UserDao").insert;
var obj = {Admin_name:'1440',Admin_password:'123456'};
insertUser(obj,function() {
	console.warn("哈哈哈哈");
});

var
