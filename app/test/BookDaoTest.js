var BookDao = require("../dao/BookDao");
var insert = BookDao.insert;
var deleteOne = BookDao.deleteOne;
var modify = BookDao.modify;
var selectOne = BookDao.selectOne;
var selectAll = BookDao.selectAll;

//insertTest *
// var obj = {
//     bookName: 		'疯狂Java讲义（第3版 附光盘）',
//     writer: 		'李刚 著',
//     typeId: 		2, //连接类别的外键
//     price: 			91.30,
//     pubCompany: 	'电子工业出版社',
//     pubDate: 		'2014-07-01',
//     sum: 			10,
//     currentNum: 	10,
//     // buyDate: 		'2007-06-01',
//     brief: 			'IT图书作家李刚老师针对Java 8推出的全新升级版；',
//     imageName: 		''
// };

// console.log(obj);
// insert(obj, function() {
//     console.warn("新增书籍成功");
// });

 
// deleteTest *
// deleteOne(4,function() {
// 	console.warn("删除书籍成功");
// });

// modifyTest *
// var obj = {
// 	id: 			6,
//     bookName: 		'疯狂Java讲义（第3版 附光盘）',
//     writer: 		'李刚 著',
//     typeId: 		2, //连接类别的外键
//     price: 			91.30,
//     pubCompany: 	'电子工业出版社',
//     pubDate: 		'2014-07-01',
//     sum: 			6,
//     currentNum: 	10,
//     // buyDate: 		'2007-06-01',
//     brief: 			'IT图书作家李刚老师针对Java 8推出的全新升级版；',
//     imageName: 		''
// };
// modify(obj,function() {
// 	console.log("修改书籍成功");
// });

//selectOneTest *
// selectOne(6,function(book) {
// 	console.log(book);
// });

//selectAll *
// selectAll(function(rows) {
// 	console.log(rows);
// });