var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session')
    // ,cookieSession = require('cookie-session')
;

//开启一个服务器
var app = express();

//对服务器设置.html后缀文件需要经过EJS模板引擎编译
app.engine('.html', require('ejs').__express);

//对服务器设置views模板映射到/views目录下
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

//全局定义express中间件
app.use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(expressSession({
        secret: 'secret', //加密
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: '/', 
            httpOnly: true, 
            secure: false, 
            maxAge: 60 * 60 * 1000 //1h 
        }
    }))
    // .use(cookieParser('MAGICString'))
    // .use(expressSession({
    //     secret: 'SECRET',
    //     cookie: {
    //         maxAge: 60 * 60 * 1000
    //     }
    // }))
;

//传入app参数到routes.js中配置后台路由
require('./routes.js')(app);

var port = 9000;
console.log("服务器开始监听" + port + "端口");

//监听80端口
app.listen(port);
