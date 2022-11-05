import { message } from "antd";
import { localServ } from "../../Services/localServices";
import { authAPI } from "../../Services/userServices";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";
const setUserLoginSuccess = (successValue) => {
  return {
    type: "SET_USER",
    payload: successValue,
  };
};
const setUserLoginFail = (failValue) => {
  return {
    type: "SET_USER",
    payload: failValue,
  };
};
// setUserActionService dùng khi có gọi api
export const setUserLoginAction = (dataLogin, onLoginSuccess, onLoginFail) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());

    try {
      let result = await authAPI.login(dataLogin);
      localServ.user.set(result.data.content);

      onLoginSuccess();

      await dispatch(setUserLoginSuccess(result.data.content));
      await dispatch(setLoadingOffAction());
    } catch (error) {
      console.log(error);
      onLoginFail();

      dispatch(setUserLoginFail());
      dispatch(setLoadingOffAction());
    }
  };
};
