import React, {Fragment} from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from "../routes";
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import {clientCreateStore as getStore} from "../store";

const store = getStore();
console.log(store);
/**
 * hydrate 用来在服务器端渲染 来代替 render
 */
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>
    </Provider>
  );
};
hydrate(<App/>, window.root);