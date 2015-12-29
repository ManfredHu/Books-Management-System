var UserCtrl = require('./controller/UserCtrl.js'),
    express = require('express');

module.exports = function(app) {
    //路径映射
    app.use('/static', express.static('./static'))
    .use('/lib', express.static('./lib'))
    .use('/tpl',express.static('./views'));

    app.get('/', function(req, res) {
        console.log("用户访问");
        if(req.session.Admin_id){
        	//进入管理主界面
            res.redirect('/admin');
        }else{
            //没有检测到session则输出index.html模板即登陆页面
            req.session.msg = "登陆错误";
            res.redirect('/login');
        }
    });

    //配置处理登陆的控制器
    app.post('/loginData', function(req, res) {
        console.log("接受到login页面的登陆信息");
        //调用login控制器传入req,res
        UserCtrl.login(req,res);
    });

    app.get('/login', function(req, res) {
        if(req.session.Admin_id){
            res.redirect('/admin');
        }
        res.render('index');
    });

    app.get('/admin', function(req, res) {
        if(!req.session.Admin_id){
            res.redirect('/login');
        }
        // res.render('admin',{userName:req.session.Admin_name});
        res.render('admin');
    });

    app.get('/logout',function(req,res){
        req.session.destroy(function(){
            console.log(req.session.Admin_name + "登出系统");
            res.redirect('/login');
        });
    });
}
