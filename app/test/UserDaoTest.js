var UserDao = require("../dao/UserDao");
var insert = UserDao.insert;
var deleteOne = UserDao.deleteOne;
var modify = UserDao.modify;
var selectOne = UserDao.selectOne;
var selectAll = UserDao.selectAll;

//insertTest *
// var obj = {Admin_name:'hwf',Admin_password:'hwf'};
// var obj = {
//     username: "hwf",
//     password: "hwf"
// };
// insert(obj, function() {
//     // console.warn("插入用户成功");
// });


//deleteTest *
// deleteOne(7,function() {
// 	console.warn("插入用户成功");
// });

//modifyTest *
// var obj = {id:6,password:'123456',username:'chensiman'};
// modify(obj,function() {

// });

//selectOneTest *
// selectOne(1,function(user) {
// 	console.log(user);
// });

//selectAll *
selectAll(function(rows) {
	console.log(rows);
});
