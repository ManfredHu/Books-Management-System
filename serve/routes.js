var loginCtrl = require('./controller/login.js')
module.exports = function(app) {
    app.get('/', function(req, res) {
        console.log("用户访问");
    });

    //配置登陆的控制器
    app.post('/login', function(req, res) {
        console.log("接受到login页面的登陆信息");
        //调用login控制器传入req,res
        loginCtrl.login(req,res);
    });

    app.get('/login', function(req, res) {
        res.send("欢迎访问login页面");
    });

    app.get('/admin', function(req, res) {
        res.send("后台admin页面");
    });
}
