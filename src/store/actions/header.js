import secret from "../secret";
import {IS_LOGIN} from "../Types";

export const islogin = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get(`/api/isLogin.json?secret=${secret}`)
      .then(res => {
        console.log('hahhah',res);
        const data = res.data.data.login;
        dispatch({
          type: IS_LOGIN,
          data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};