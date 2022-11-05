import { message } from "antd";
import { locationSrv } from "../../Services/locationServices";
import { roomAPI } from "../../Services/roomAPI";

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
export const getLocationIdAction = (maViTri) => {
  return async (dispatch) => {
    try {
      const resultLocation = await locationSrv.getLocationId(maViTri);
      console.log("result: ", resultLocation);

      dispatch({
        type: "LOCATION_ID",
        locationId: resultLocation.data.content,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
export const getRoomDetailAction = (roomId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getRoomDetail(roomId);
      console.log("result: ", result);

      dispatch({
        type: "ROOM_DETAIL",
        roomDetail: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log(err.response?.data);
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
// export const getDatPhongIDAction = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoadingOnAction());

//       const result = await roomAPI.getDatPhongId(id);
//       console.log("datphongID: ", result);
//       dispatch({
//         type: "GET_DAT_PHONG_ID",
//         danhSachPhongDat: result.data.content,
//       });
//       dispatch(setLoadingOffAction());
//     } catch (err) {
//       console.log(err.response?.data);
//       dispatch(setLoadingOffAction());
//     }
//   };
// };
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
