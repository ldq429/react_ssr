import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/actions/login';
import {islogin} from '../../store/actions/header';

class Login extends React.Component {
  static loadData(store) {
    return store.dispatch(islogin());
  }

  login() {
    console.log(this.props);
    this.props.login();
    setTimeout(() => {
      this.props.isLogin();
    }, 2000);
  };

  render() {
    return (
      <div>
        <button onClick={this.login.bind(this)}>登录</button>
      </div>
    );
  }
}

const mapStateToProps = state => state.login;
const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch(login());
  },
  isLogin: () => {
    dispatch(islogin());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);