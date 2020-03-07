import {IS_LOGIN} from '../Types';

const defaultState = {
  islogin: true
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        islogin: action.data
      };
    default:
      return state;
  }
}