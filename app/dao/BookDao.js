var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;

/*
             输入           输出
insert       Book           信息
delete       Book.id        信息
modify       Book           信息
selectAll    无             [Book]     
selectOne    Book.id        Book
 */

//可以考虑将insert,delete,modify,selectOne,selectAll封装成方法
//将t_book等表格独立出来变成参数传入，然后将传入的对象也封装起来
//这样的话增删查改变成公共接口
var insert = function(book, callback) {
    console.log("book:" + book);
    var sql = "insert into t_book set ?";
    var obj = {
        Book_name:      book.bookName   || '',
        Writer:         book.writer     || '',
        Sort_id:        book.typeId     || 0, //连接类别的外键
        Price:          book.price      || 0,
        Pub_company:    book.pubCompany || '',
        Pub_date:       book.pubDate    || new Date(),
        Total_num:      book.sum        || 0,
        Current_num:    book.currentNum || 0,
        Buy_date:       book.buyDate    || new Date(),
        Brief:          book.brief      || '',
        imageName:      book.imageName  || ''
    };
    console.log(obj);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("BookDaoInsertSuccess:" + rows);
            if (err) {
                console.error("BookDaoInsertError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BookDaoInsertCatchError:" + er);
        callback(er);
    }
};

exports.insert = insert;

var deleteOne = function(id, callback) {
    var sql = "DELETE FROM t_book WHERE Book_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("BookDaoDeleteSuccess:" + rows);
            if (err) {
                console.error("BookDaoDeleteError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BookDaoDeleteCatchError:" + er);
        callback(er);
    }
};

exports.deleteOne = deleteOne;


var modify = function(book, callback) {
    var sql = "UPDATE t_book SET ? WHERE Book_num = " + book.id;
    console.log("sql:"+sql);

    var obj = {
        Book_num:       book.id,
        Book_name:      book.bookName   || '',
        Writer:         book.writer     || '',
        Sort_id:        book.typeId     || 0, //连接类别的外键
        Price:          book.price      || 0,
        Pub_company:    book.pubCompany || '',
        Pub_date:       book.pubDate    || new Date(),
        Total_num:      book.sum        || 0,
        Current_num:    book.currentNum || 0,
        Buy_date:       book.buyDate    || new Date(),
        Brief:          book.brief      || '',
        imageName:      book.imageName  || ''
    };

    console.log(obj);
    console.log(sql);

    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("BookDaoModifySuccess:" + rows);
            if (err) {
                console.error("BookDaoModifyError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BookDaoModifyCatchError:" + er);
        callback(er);
    }
};

exports.modify = modify;


var selectOne = function(id, callback){
    var sql = "SELECT * FROM t_book WHERE Book_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("BookDaoSelectOneSuccess:" + rows);
            if (err) {
                console.error("BookDaoSelectOneError:" + err);
            }
            callback(rows[0]);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BookDaoSelectOneCatchError:" + er);
        callback(er);
    }
};

exports.selectOne = selectOne;

var selectAll = function(callback) {
    var sql = "select * from t_book,t_type where t_book.Sort_id = t_type.Sort_id";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("BookDaoSelectAllSuccess:" + rows);
            if (err) {
                console.error("BookDaoSelectAllError:" + err);
            }
            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BookDaoSelectAllCatchError:" + er);
        callback(er);
    }
};

exports.selectAll = selectAll;

