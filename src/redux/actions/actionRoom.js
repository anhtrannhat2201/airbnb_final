import { message } from "antd";
import { roomAPI } from "../../Services/roomAPI";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";

export const getListRoomAction = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getListRoom();
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
export const getRoomDetailAction = (roomId = "") => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      const result = await roomAPI.getRoomDetail();
      console.log("result: ", result);

      dispatch({
        type: "ROOM_DETAIL",
        listRoom: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      message.error(err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
