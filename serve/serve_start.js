var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session')
    // ,cookieSession = require('cookie-session')
    ;

//开启一个服务器
var app = express();

//全局定义express中间件
app.use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(expressSession({
        secret: 'manfredHu', //加密
        resave: false,
        saveUninitialized: true
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
//监听80端口
app.listen(80);
