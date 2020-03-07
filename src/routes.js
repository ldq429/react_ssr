import React from 'react';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';

const routes = [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    key: 'app',
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData
      }, {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login',
        loadData: Login.loadData,
      }
    ]
  }
];
export default routes;