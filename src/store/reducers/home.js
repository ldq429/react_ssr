import {
  CHANGE_HOME_LIST
} from '../Types';

const defaultState = {
  name: '按钮',
  newsList: []
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        newsList: action.list
      };
    default:
      return state;
  }
}