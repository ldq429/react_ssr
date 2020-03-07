import express from 'express';
import React from 'react';
import proxy from 'express-http-proxy';
import render from "./render";
import secret from "../store/secret";

const app = express();
app.use(express.static('public'));
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    const url = `/ssr/api${req.url}`;
    return url;
  }
}));
app.get('*', function (req, res) {
  render(req, res);
});
app.listen(3838, function () {
  console.log('ssr app listening on port 3838!');
});

/**
 * 服务器端只能渲染标签 不能渲染表内的js
 * 想到在 body 标签下面加入 script 引入 index.js
 * 这样子浏览器上面是有执行的
 * 想到 把react的代码打包编译后 到 index.js文件中去执行
 * 由于js是静态文件 不从路由角度考虑想到了 express的static中间件
 * 于是使用该中间件来把静态文件的路径寻找转到public文件夹下
 * app.use(express.static('public'));
 * 1.要想打包react代码 首先建立client文件夹下建立index.js文件来执行react代码
 * 2.在根目录下建立public文件夹
 * 3.在根目录下建立webpack.client.js的配置文件 内容和server基本相同  去掉node部分
 * 4.package.json中加入 webpack --config webpack.client.js 的同步执行的配置
 *
 * 加入路由后 有两个路由的情况 app.get('/'  不适用了 需要把get('/' 改成 ’*‘
 */