# 接口规范

需要实现基于 HTTP/JSON 的 API，至少包含以下接口:

1. [登录](#user-content-登录)
1. [添加书籍类别](#user-content-添加书籍类别)
1. [查看书籍类别](#user-content-查看书籍类别)
1. [修改书籍类别](#user-content-修改书籍类别)
1. [删除书籍类别](#user-content-删除书籍类别)
1. [添加书籍](#user-content-添加书籍)
1. [查看书籍](#user-content-查看书籍)
1. [修改书籍](#user-content-修改书籍)
1. [删除书籍](#user-content-删除书籍)
1. [添加学生](#user-content-添加学生)
1. [查看所有学生](#user-content-查看所有学生)
1. [修改学生](#user-content-修改学生)
1. [删除学生](#user-content-删除学生)
1. [新增订单](#user-content-新增订单)
1. [查看订单](#user-content-查看订单)
1. [修改订单](#user-content-修改订单)
1. [删除订单](#user-content-删除订单)


<a name="login" />

## 登录

`POST /login`

##### 请求体

参数名 | 类型 | 描述
---|---|---
username | string | 用户名
password | string | 密码


#### 请求示例

```
POST /login
{
    "username": "root",
    "password": "root"
}
```

#### 响应示例

```
200 OK
{
    "status": "yes",
    "username": "robot"
}
```

#### 异常示例

用户名或者密码错误：

```
403 Forbidden
{
    "status": "no",
    "message": "用户名或密码错误"
}
```


<a name="addType" />

## 添加书籍类别

`GET /addType`

#### 请求示例

```
GET /addType?sortName=xxx
```

#### 响应示例

```
200 OK
{
    "status": "yes",
    "message": "添加成功"
}
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "添加失败"
}
```

<a name="checkType" />
## 查看书籍类别

`GET /checkType`

#### 请求示例

```
GET /checkType
```

#### 响应示例

```
200 OK
[
    {
        "sortId":"1",
        "sortName":"计算机与互联网销量榜"
    },
    {
        "sortId":"2",
        "sortName":"文学"
    }

]
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "查看失败"
}
```

<a name="modifyType" />
## 修改书籍类别

`POST /modifyType`

##### 请求体

参数名 | 类型 | 描述
---|---|---
sortId | string | 类别主键
sortName | string | 类别名

#### 请求示例

```
POST /modifyType
```

#### 响应示例

```
200 OK
{
    "status": "yes",
    "message": "修改成功"
}
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "修改失败"
}
```

<a name="deleteType" />

## 删除书籍类别

`GET /deleteType`

#### 请求示例

```
GET /deleteType?sortId=xxx
```

#### 响应示例

```
200 OK
{
    "status": "yes",
    "message": "删除成功"
}
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "删除失败"
}
```


<a name="add" />
## 添加书籍

`POST /add`

##### 请求体

参数名 | 类型 | 描述
---|---|---
bookName | string | 类别主键
writer | string | 类别名
sortId | string | 类别名
price | string | 类别名
pubCompany | string | 类别名
pubDate | string | 类别名
totalNum | string | 类别名
currentNum | string | 类别名
buyDate | string | 类别名
brief | string | 类别名

#### 请求示例

```
POST /add
```

#### 响应示例

```
200 OK
[
    {
        "bookName":"JavaScript权威指南（第6版）",
        "writer":"David Flanagan",
        "sortId":"1", //外键
        "price":"￥99.80",
        "pubCompany":"机械工业出版社",
        "pubDate":"2012-04-01",
        "totalNum":"100",
        "currentNum":"99",
        "buyDate":"2012-04-01",
        "brief":"《JavaScript权威指南（第6版）》主要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书第6版涵盖了HTML5和ECMAScript 5，很多章节完全重写，增加了当今Web开发的最佳实践的内容，新增的章节包括jQuery、服务器端JavaScript、图形编程以及 JavaScript式的面向对象。本书不仅适合初学者系统学习，也适合有经验的 JavaScript 开发者随手翻阅"
    },
    {
        "bookName":"JavaScript权威指南（第6版）",
        "writer":"David Flanagan",
        "sortId":"1", //外键
        "price":"￥99.80",
        "pubCompany":"机械工业出版社",
        "pubDate":"2012-04-01",
        "totalNum":"100",
        "currentNum":"99",
        "buyDate":"2012-04-01",
        "brief":"《JavaScript权威指南（第6版）》主要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书第6版涵盖了HTML5和ECMAScript 5，很多章节完全重写，增加了当今Web开发的最佳实践的内容，新增的章节包括jQuery、服务器端JavaScript、图形编程以及 JavaScript式的面向对象。本书不仅适合初学者系统学习，也适合有经验的 JavaScript 开发者随手翻阅"
    }

]
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "查看失败"
}
```

<a name="check" />
## 查看书籍

`GET /check`

#### 请求示例

```
GET /check
```

#### 响应示例

```
200 OK
[
    {
        "bookNum":"1",
        "bookName":"JavaScript权威指南（第6版）",
        "writer":"David Flanagan",
        "sortId":"1", //外键
        "price":"￥99.80",
        "pubCompany":"机械工业出版社",
        "pubDate":"2012-04-01",
        "totalNum":"100",
        "currentNum":"99",
        "buyDate":"2012-04-01",
        "brief":"《JavaScript权威指南（第6版）》主要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书第6版涵盖了HTML5和ECMAScript 5，很多章节完全重写，增加了当今Web开发的最佳实践的内容，新增的章节包括jQuery、服务器端JavaScript、图形编程以及 JavaScript式的面向对象。本书不仅适合初学者系统学习，也适合有经验的 JavaScript 开发者随手翻阅"
    },
    {
        "bookNum":"2",
        "bookName":"JavaScript权威指南（第6版）",
        "writer":"David Flanagan",
        "sortId":"1", //外键
        "price":"￥99.80",
        "pubCompany":"机械工业出版社",
        "pubDate":"2012-04-01",
        "totalNum":"100",
        "currentNum":"99",
        "buyDate":"2012-04-01",
        "brief":"《JavaScript权威指南（第6版）》主要讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScript API。本书第6版涵盖了HTML5和ECMAScript 5，很多章节完全重写，增加了当今Web开发的最佳实践的内容，新增的章节包括jQuery、服务器端JavaScript、图形编程以及 JavaScript式的面向对象。本书不仅适合初学者系统学习，也适合有经验的 JavaScript 开发者随手翻阅"
    }

]
```

#### 异常示例

```
403 Forbidden
{
    "status": "no",
    "message": "查看失败"
}
```
