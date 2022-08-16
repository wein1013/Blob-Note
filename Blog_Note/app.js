/*
 * @Author: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @Date: 2022-08-15 18:11:05
 * @LastEditors: GEOWAY\zhaoweiwen 2565088230@qq.com
 * @LastEditTime: 2022-08-16 18:16:45
 * @FilePath: \Blob-Note\Blog_Note\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var createError = require('http-errors'); // http错误处理模块
var express = require('express'); // 引入Express
var path = require('path'); //引入path
var cookieParser = require('cookie-parser'); //引入cookie处理对象
var logger = require('morgan'); //引入日志模块

var indexRouter = require('./routes/index'); // 引入路由目录中的index.js文件
var usersRouter = require('./routes/users');

var app = express();//创建express应用赋值给变量app

// view engine setup
app.set('views', path.join(__dirname, 'views')); //定义页面目录
// app.set('view engine', 'jade');    // 定义页面模板渲染引擎 框架默认是jade渲染
app.engine('html', require('express-art-template')); // 用插件art-template更改渲染引擎为html
app.set('view engine', 'html');

app.use(logger('dev')); //定义日志打印级别
app.use(express.json()); //定义json格式处理数据
app.use(express.urlencoded({ extended: false })); //定义使用urlencode处理数据以及querystring模块解析数据
app.use(cookieParser()); // 定义cookie处理对象
// 定义静态文件资源目录public 访问可以用/ 直接访问 接受两个参数 
// app.use(express.static('/static',path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'public'))); //原本定义的public目录为静态资源目录
app.use('/', indexRouter);
app.use('/blobnote', indexRouter); //定义指向index.js的路由
app.use('/blobnote/users', usersRouter); // 定义指向users.js的路由

// 定义404错误处理
app.use(function(req, res, next) {
  next(createError(404));
});

// 定义其他错误处理
app.use(function(err, req, res, next) {
  // 设置loaclas，旨在开发环境生效
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error'); //渲染错误页面
});

module.exports = app; // 暴露app变量供其他模块调用
