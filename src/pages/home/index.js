import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {getHomeList} from '../../store/actions/home';

class Home extends Component {
  // 负责在服务器渲染之前把该路由所需要的数据加载好
  static loadData(store) {
    // 不要忘记加 return返回结果
    return store.dispatch(getHomeList());
  };

  // 在服务器端不执行
  componentDidMount() {
    this.props.getHomeList();
  }

  getList(list) {
    return list.map(item => (
      <li key={item.id}>{item.title}</li>
    ));
  }

  render() {
    const {name, newsList} = this.props;
    return (
      <Fragment>
        <ul>{this.getList(newsList)}</ul>
        {/*<button onClick={() => alert('同构实现按钮点击事件')}>{name}</button>*/}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList
});
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    // 派发一个action
    dispatch(getHomeList());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);