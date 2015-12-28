var config = require('./config.js'),
    model = require('../model/Model.js'),
    UserDao = require('../dao/UserDao.js'),
    md5 = require('md5');

//登陆的控制器
exports.login = function(req, res) {
    //传入response进行设置
    config.setResponse(res);

    //获取请求数据并查看数据库
    var Admin_name = req.body.username,
        Admin_password = md5(req.body.password); //这里对密码进行两次MD5加密来确认密码

    UserDao.selectAll(function(rows) {
        //缓存变量，提高查找效率
        var _Admin_name = Admin_name,
            i, len;
        //获得后台的用户列表数据
        // var userList = JSON.parse(JSON.stringify(rows));
        for (i = 0, len = rows.length; i < len; i++) {

            console.log("需要数据库匹配的账号为：" + _Admin_name);
            console.log("需要数据库匹配的密码为：" + Admin_password);

            if (rows[i].Admin_name === _Admin_name && rows[i].Admin_password === Admin_password) {
                console.log(rows[i]);
                break;
            }
        }

        if (i < len) {
            //找到了用户
            console.log("找到了用户");
            //检验通过，设置session
            
            req.session.regenerate(function() {
            	//设置用户id
                req.session.Admin_id = rows[i].Admin_id;
                //设置用户名
                req.session.Admin_name = _Admin_name;
                //设置信息
                req.session.msg = '登陆成功';
                console.log("检测session:"+req.session.Admin_id);
                res.redirect('/admin');
            });

            // res.status(200).json({
            //     "msg": '登陆成功'
            // });
            
        } else {
            //找不到用户
            console.log("找不到用户");
            res.status(404).json({
                "msg": '找不到用户或密码错误'
            });
        }
    });
}
