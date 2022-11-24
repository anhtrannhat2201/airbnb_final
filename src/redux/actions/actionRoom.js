import { message } from "antd";
import { locationSrv } from "../../Services/locationServices";
import { roomAPI } from "../../Services/roomAPI";
import { INFOR_ROOM, RENTED_ROOM } from "../constants/constantsRoom";

import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";

export const getListRoomAction = (ID) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getListRoom(ID);
      console.log("result: ", result);

      dispatch({
        type: "LIST_ROOM",
        listRoom: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      message.error(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const getRoomDetailAction = (roomId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const roomDetail = await roomAPI.getRoomDetail(roomId);
      console.log("roomDetail: ", roomDetail);
      const addressDetail = await locationSrv.getLocationId(
        roomDetail.data.content.maViTri
      );
      console.log("addressDetail: ", addressDetail);

      let newRoomDetail = {
        ...roomDetail.data.content,
        addressDetail: { ...addressDetail.data.content },
      };
      console.log("newRoomDetail: ", newRoomDetail);
      dispatch({
        type: "ROOM_DETAIL_ADDRESS",
        roomDetailAddress: newRoomDetail,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const getInforRooms = (maNguoiDung) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getInforRoom(maNguoiDung);
      // console.log('result: ', result);
      dispatch({
        type: INFOR_ROOM,
        inforRoom: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      message.error(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const getListRentedRooms = (maPhong) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getRentedRoom(maPhong);
      // console.log('result render room: ', result);
      dispatch({
        type: RENTED_ROOM,
        rentedRoom: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      message.error(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const getDatPhongAction = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getDatPhong();
      console.log("datphong: ", result);
      dispatch({
        type: "GET_DAT_PHONG",
        arrDatPhong: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const getDatPhongIDAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getDatPhongId(id);
      console.log("getDatPhong: ", result);
      dispatch({
        type: "GET_DAT_PHONG_ID",
        danhSachPhongDat: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const postDatPhongAction = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.postDatPhong(value);
      console.log("datphongID: ", result);
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
