var BookTypeDap = require("../dao/BookTypeDao");
var insert = BookTypeDap.insert;
var deleteOne = BookTypeDap.deleteOne;
var modify = BookTypeDap.modify;
var selectOne = BookTypeDap.selectOne;
var selectAll = BookTypeDap.selectAll;

//insertTest *
// var obj = {Sort_name:'Java'};
// var obj = {
//     typeName: "金融"
// };
// insert(obj, function() {
//     console.warn("插入书籍类别成功");
// });

 
// deleteTest *
// deleteOne(3,function() {
// 	console.warn("删除用户类别成功");
// });

// modifyTest *
// var obj = {
// 	id:3,
// 	typeName:'历史'
// };
// modify(obj,function() {

// });

//selectOneTest *
// selectOne(1,function(user) {
// 	console.log(user);
// });

//selectAll *
// selectAll(function(rows) {
// 	console.log(rows);
// });