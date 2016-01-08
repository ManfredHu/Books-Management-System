# books-management-system(未完)
使用MySQL+ExpressJS+AngularJS+NodeJS尝试开发的图书管理系统

## 目录详解
serve为后台服务器目录架构
app为AngularJS的前端目录架构

## 一些问题
express-session模块中[官方文档](https://github.com/expressjs/session?_ga=1.2960176.1066105876.1451139756)是

```javascript
app.use(session({
        secret: 'manfredHu', //加密
        resave: false,
        saveUninitialized: true
    }));
```

但是这样会报错，stackOverflow上面是下面这样的，居然通过了-_-!!


```javascript
app.use(expressSession({
        secret: 'manfredHu', //加密
        resave: false,
        saveUninitialized: true
    }));
```
