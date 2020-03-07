import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
import home from './reducers/home';
import header from './reducers/header';
import login from './reducers/login';

const reducer = combineReducers({
  home, header, login
});
/**
 * client create store
 * withExtraArgument 是 redux-thunk中的方法
 * @returns {Store<CombinedState<unknown>, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
export const clientCreateStore = () => {
  console.log('window.initStoreState', window.context);
  // 第二个参数是 reducer的默认值
  const defaultReducerSatate = window.context.state;
  return createStore(reducer, defaultReducerSatate, applyMiddleware(thunk.withExtraArgument(clientAxios)));  // 避免单利的store
};
/**
 * server create store
 * @returns {Store<CombinedState<unknown> & S & {}, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
export const serverCreateStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));  // 避免单利的store
};