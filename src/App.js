import React from 'react';
import Header from './components/Header';
import {renderRoutes} from 'react-router-config';
import {islogin} from './store/actions/header';

class App extends React.Component {
  static loadData(store) {
    return store.dispatch(islogin());
  }

  render() {
    return (
      <div>
        <Header/>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default App;