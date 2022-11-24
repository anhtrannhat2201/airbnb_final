import { message } from "antd";
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
      message.success(`Thêm  ${result.data.content.tenViTri} thành công`);
      dispatch(setLoadingOffAction());
      dispatch(getListLocation());
    } catch (error) {
      console.log("error: ", error);
      message.error("Thêm vị trí không thành công");

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
export const deleteLocationIdAction = (maViTri) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());

    try {
      let deleteResult = await locationSrv.deleteLocationId(maViTri);
      console.log("deleteResult: ", deleteResult);
      message.success(`Xóa thành công`);
      dispatch(setLoadingOffAction());

      dispatch(getListLocation());
    } catch (error) {
      dispatch(setLoadingOffAction());

      console.log("error: ", error.response?.data);
    }
  };
};
export const updateLocationIdAction = (values) => {
  return async (dispatch) => {
    dispatch(setLoadingOnAction());

    try {
      let updateLocationResult = await locationSrv.updateLocationId(values);
      console.log("updateLocationResult: ", updateLocationResult);

      message.success("Cập nhật thành công");
      dispatch(setLoadingOffAction());

      dispatch(getListLocation());
    } catch (error) {
      dispatch(setLoadingOffAction());
      message.error("Cập nhật không thành công");
      console.log("error: ", error.response?.data);
    }
  };
};
