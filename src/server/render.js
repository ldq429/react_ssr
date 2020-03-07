import React from 'react';
import {renderToString} from "react-dom/server";
import {StaticRouter, Switch, Route, matchPath} from "react-router-dom";
import {matchRoutes, renderRoutes} from 'react-router-config';
import routes from "../routes";
import {Provider} from 'react-redux';
import {serverCreateStore as getStore} from "../store";


/**
 * 在服务器端用renderToString 来代替render
 * 引入时需要注意的是 路径 react-dom/server
 * <div id="root">${content}</div>中间不要有文本节点 也就是空格
 *
 * 引入路由服务器端需要使用 StaticRouter 来 代替 BrowserRoute
 * 必须传递 location={req.path} StaticRouter没有 BrowserRouter智能 不能感知当前路径
 * 必须传递 context={{}}  后期做数据传递用
 */
export default (req, res) => {
  const store = getStore(req);
  // 在此处得到store的数据
  // inside a request
  const promises = [];
// use `some` to imitate `<Switch>` behavior of selecting only
// the first to match
  let matchedRoutes = matchRoutes(routes, req.path);
  console.log(matchedRoutes);
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  /**
   * 此处会多打印一个空数组 是由于网络请求中 有一次是对favicon.ico
   * 找到public目录 放置一个favicon.ico即可
   */

  Promise.all(promises).then(() => {
    console.log('dsadsa', store.getState());
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <html>
        <head>
            <title>react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
        <script>
          // 此注水位置和下面src="/index.js"链接位置不能够互换 另外需要注意的是 不要忽略JSON.stringify这个方法 
          window.context = {
            state : ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </html>
     `);
  });
}
