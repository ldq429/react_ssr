import React, {Fragment} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to={'/'}>home</Link></li>
        {
          this.props.isLogin ?
            <Fragment>
              <li><Link to={'/login'}>translateList</Link></li>
              <li><Link to={'/login'}>signOut</Link></li>
            </Fragment>
            :
            <li><Link to={'/login'}>login</Link></li>
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  islogin: state.header.islogin
});
export default connect(mapStateToProps, null)(Header);