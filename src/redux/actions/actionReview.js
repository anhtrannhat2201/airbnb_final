import { roomAPI } from "../../Services/roomAPI";
import { setLoadingOffAction, setLoadingOnAction } from "./actionSpinner";

export const getReviewAction = (maPhong) => {
  return async (dispatch) => {
    try {
      let resut = await roomAPI.getReview(maPhong);
      console.log("resut: ", resut);
      dispatch({
        type: "GET_LIST_REVIEW",
        listReview: resut.data.content,
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
