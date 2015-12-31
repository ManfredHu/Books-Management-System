var UserCtrl = require('./controller/UserCtrl.js'),
    express = require('express');

module.exports = function(app) {
    //路径映射
    app.use('/static', express.static('./static'))
        .use('/lib', express.static('./lib'))
        .use('/tpl', express.static('./views'));

    app.get('/', function(req, res) {
        if (req.session.Admin_id) {
            //进入管理主界面
            console.log('----------------------用户已进入系统:登陆模块停止，进入admin模块-------------------');
                // res.redirect('/admin');
                // res.render('admin',{
                //     id:req.session.Admin_id,
                //     name: req.session.Admin_name
                // });
                // res.render('admin');
                // res.send("这里");

            var options = {
                root: __dirname + '/views/',
                headers: {
                    'id': req.session.Admin_id,
                    'name': req.session.Admin_name
                }
            };

            var fileName = 'admin.html';
            res.sendFile(fileName, options, function(err) {
                if (err) {
                    console.log(err);
                    res.status(err.status).end();
                } else {
                    console.log('Sent:', fileName);
                }
            });

        } else {
            //没有检测到session则输出index.html模板即登陆页面
            console.log('用户访问系统登陆页面');
            res.redirect('/login');
        }
    });

    //配置处理登陆的控制器
    app.post('/loginData', function(req, res) {
        console.log("接受到login页面的登陆信息");
        //调用login控制器传入req,res
        UserCtrl.login(req, res);
    });

    app.get('/login', function(req, res) {
        if (req.session.Admin_id) {
            res.redirect('/admin');
        }
        res.render('index');
    });

    app.get('/admin', function(req, res) {
        if (!req.session.Admin_id) {
            res.redirect('/login');
        }
        console.log("----------admin检测session:");
        console.log("sessionID" + req.session.Admin_id);
        console.log("sessionName" + req.session.Admin_name);

        res.redirect('/');
    });

    app.get('/logout', function(req, res) {
        req.session.destroy(function() {
            console.log("用户登出系统");
            res.redirect('/login');
        });
    });

    // app.get('/loginSuccess',function(req,res){
    //     // res.render('loginSuccess',{
    //     //     id: req.session.Admin_id,
    //     //     name: req.session.Admin_name
    //     // });
    //     // res.render('admin');
    // });
}
