var config = require('./config.js'),
    BookTypeDao = require('../dao/BookTypeDao.js');

exports.addType = function(req, res) {
    //封装obj
    var obj = {
        typeName: req.body.typeName
    };
    console.log("需要添加到数据库的类别名为：" + req.body.typeName);

    // 调用DAO层接口
    BookTypeDao.insert(obj, function() {
        console.warn("添加书籍类别成功");
        //返回给客户端200成功插入反馈
        res.status(200).json({
            success: '添加书籍类别成功'
        });
    });
};

exports.seeAllType = function(req, res) {
    console.log('收到全部类别的请求');
    res.status(200).json([{
        "bookId": "1",
        "index": "1",
        "name": "用AngularJS开发下一代WEB应用",
        "author": "大漠穷秋",
        "pubTime": "2014-01-01",
        "price": "35"
    }, {
        "bookId": "2",
        "index": "2",
        "name": "Ext江湖",
        "author": "大漠穷秋",
        "pubTime": "2014-01-01",
        "price": "35"
    }, {
        "bookId": "3",
        "index": "3",
        "name": "ActionScript3.0游戏设计基础（第二版）",
        "author": "大漠穷秋",
        "pubTime": "2014-01-01",
        "price": "35"
    }, {
        "bookId": "4",
        "index": "4",
        "name": "用AngularJS开发下一代WEB应用",
        "author": "大漠穷秋",
        "pubTime": "2014-01-01",
        "price": "35"
    }, {
        "bookId": "5",
        "index": "5",
        "name": "Ext江湖",
        "author": "大漠穷秋",
        "pubTime": "2014-01-01",
        "price": "35"
    }]);

};
