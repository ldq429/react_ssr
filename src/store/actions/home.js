import {
  CHANGE_HOME_LIST
} from '../Types';
import secret from "../secret";

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/news.json?secret=${secret}`)
      .then(res => {
        const list = res.data.data;
        dispatch({
          type: CHANGE_HOME_LIST,
          list
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};