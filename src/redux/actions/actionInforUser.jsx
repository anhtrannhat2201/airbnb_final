import { message } from "antd";
import { localServ } from "../../Services/localServices";
import { userServ } from "../../Services/userServices";
import {
  DELETE_USER,
  GET_INFOR_USER,
  GET_USER,
  SEARCH_USER,
  UPDATE_USER,
} from "../constants/constantUser";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";

export const manageInforUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await userServ.userInfor(id);
      console.log("res: ", res);
      dispatch({
        type: GET_INFOR_USER,
        userInforDetail: res.data.content,
      });
    } catch (err) {
      console.log("err: ", err.response.data);
    }
  };
};

export const upLoadAvatarUserAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await userServ.upLoadAvatarUser(formData);
      console.log("result: ", result);
      alert("Cap Nhat thnah Cong");
      dispatch(manageInforUser());
    } catch (err) {
      alert("Cap Nhat That Bai");
      console.log(err);
    }
  };
};

export const updateUserAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await userServ.updateUser(id);
      // console.log('res: ', res);
      // dispatch({
      //     type: UPDATE_USER,
      // })
      dispatch(manageInforUser());
    } catch (err) {
      // console.log('err: ', err);
    }
  };
};

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
      let result = await userServ.postLogin(dataLogin);
      localServ.user.set(result.data.content);

      onLoginSuccess();

      await dispatch(setUserLoginSuccess(result.data.content));
      await dispatch(setLoadingOffAction());
    } catch (error) {
      // console.log(error);
      onLoginFail();

      dispatch(setUserLoginFail());
      dispatch(setLoadingOffAction());
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());
    try {
      const res = await userServ.getUser();
      // console.log('res: ', res);
      dispatch({
        type: GET_USER,
        arrUser: res.data.content,
      });
      dispatch(setLoadingOffAction());

      // dispatch(manageInforUser());
    } catch (err) {
      console.log("err: ", err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};

export const searchUsers = (name = "") => {
  return async (dispatch) => {
    try {
      const res = await userServ.searchUser(name);
      // console.log('res: ', res);
      await dispatch({
        type: SEARCH_USER,
        searchUser: res.data.content,
      });
    } catch (err) {
      // console.log('err: ', err);
    }
  };
};

export const deleteUsers = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const res = await userServ.deleteUser(taiKhoan);
      message.success("Xóa người dùng thành công");
      // sau khi xoa load lai dah sach phim moi
      dispatch(getUsers());
    } catch (err) {
      console.log("err: ", err?.response.data);
    }
  };
};
