import { localServ } from "../../Services/localServices";
let initalState = {
  userInfor: null || localServ.user.get(),
  // thongTinNguoiDung: {},
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN": {
      state.userInfor = action.payload;
      return { ...state };
    }
    case "SET_USER_SIGNUP": {
      state.userInfor = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
