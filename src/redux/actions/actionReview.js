import { roomAPI } from "../../Services/roomAPI";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";
export const getAllReview = () => {
  return async (dispatch) => {
    try {
      let review = await roomAPI.getAllReview();
      dispatch({
        type: "GET_ALL_REVIEW",
        allReview: review.data.content,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const getPhongReviewAction = (maPhong) => {
  return async (dispatch) => {
    try {
      let result = await roomAPI.getReviewPhong(maPhong);
      console.log("resut: ", result);
      dispatch({
        type: "GET_LIST_REVIEW",
        listReview: result.data.content,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
export const postReviewAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingOnAction());

      let result = await roomAPI.postReview(data);
      console.log("result: ", result);
      alert("Bình luận thành công");
      dispatch(setLoadingOffAction());
    } catch (error) {
      console.log("error: ", error);
      dispatch(setLoadingOffAction());
    }
  };
};
