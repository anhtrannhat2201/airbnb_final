import { locationSrv } from "../../Services/locationServices";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";

export const getListLocation = () => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());
    try {
      let listLocation = await locationSrv.getListLocation();
      console.log("listLocation: ", listLocation);
      dispatch({
        type: "GET_LIST_LOCATION",
        lstLocation: listLocation.data?.content,
      });
      dispatch(setLoadingOffAction());
    } catch (error) {
      console.log("error: ", error.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
export const postLocationAction = (values) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());
    try {
      let result = await locationSrv.postLocation(values);
      console.log("result: ", result);
      dispatch(setLoadingOffAction());
      dispatch(getListLocation());
    } catch (error) {
      console.log("error: ", error);
      dispatch(setLoadingOffAction());
    }
  };
};
export const editImageLocationAction = (values) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());

    try {
      let imageEdit = await locationSrv.editImageLocation(values);
      console.log("imageEdit: ", imageEdit);

      // console.log("imageEdit: ", imageEdit);
      // dispatch(getListLocation());
      dispatch(setLoadingOffAction());
    } catch (error) {
      alert("Sửa ảnh thất bại");
      dispatch(setLoadingOffAction());

      console.log("error: ", error.response?.data);
    }
  };
};
export const getLocationIdAction = (values) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());
    try {
      let result = await locationSrv.getLocationId(values);
      dispatch({
        type: "GET_VI_TRI_ID",
        inforLocation: result.data.content,
      });
      dispatch(setLoadingOffAction());
    } catch (err) {
      console.log("err: ", err.response?.data);
      dispatch(setLoadingOffAction());
    }
  };
};
