import { localServ } from "../../Services/localServices";
import {
  GET_INFOR_USER,
  GET_USER,
  SET_USER_LOGIN,
} from "../constants/constantUser";

const initialState = {
  userInfor: localServ.user.get(),
  userInforDetail: [],
  arrUser: [],
  searchUser: [],
};
// console.log('userInfor: ', userInfor);

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN: {
      state.userInfor = action.payload;
      return { ...state };
    }
    case GET_INFOR_USER: {
      state.userInforDetail = action.userInforDetail;
      return { ...state };
    }
    case GET_USER: {
      state.arrUser = action.arrUser;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
