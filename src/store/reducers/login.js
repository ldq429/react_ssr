import {LOGIN} from '../Types';

const defaultState = {
  login: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.login
      };
    default:
      return state;
  }
}