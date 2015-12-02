
var UserDao = require("../dao/UserDao");
var insert = UserDao.insert;
var deleteOne = UserDao.deleteOne;
var modify = UserDao.modify;
var selectOne = UserDao.selectOne;
var selectAll = UserDao.selectAll;

//insertTest
// var obj = {Admin_name:'0012',Admin_password:'123456'};
// insert(obj,function() {
// 	console.warn("插入用户成功");
// });
// 

//deleteTest
// deleteOne(7,function() {
// 	console.warn("插入用户成功");
// });

//modifyTest
// var obj = {id:6,password:'123456',username:'chensiman'};
// modify(obj,function() {

// });

//selectOneTest
// selectOne(1,function(user) {
// 	console.log(user);
// });

selectAll(function(rows) {
	console.log(rows);
});