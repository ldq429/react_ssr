import secret from "../secret";
import {LOGIN} from "../Types";

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/login.json?secret=${secret}`)
      .then(res => {
        console.log(res);
        return false;
        const login = res.data.data.login;
        dispatch({
          type: LOGIN,
          login
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};