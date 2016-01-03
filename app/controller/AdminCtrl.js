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
}
