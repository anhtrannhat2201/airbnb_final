import { locationServ } from "../../Services/localServices";
import { locationSrv } from "../../Services/locationServices";
import { getRoomDetailAction } from "./actionRoom";

export const getLocationIdAction = (maViTri) => {
  return async (dispatch) => {
    try {
      const resultLocation = await locationSrv.getLocationId(maViTri);
      console.log("result: ", resultLocation);

      dispatch({
        type: "LOCATION_ID",
        locationId: resultLocation.data.content,
      });
      locationServ.location.set(resultLocation.data.content);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
// export const getLocationAction = () => {
//   return async (dispatch) => {
//     try {
//       let result = await locationSrv.getLocation();
//       console.log("result: ", result);
//       dispatch({
//         type: "ARR_LOCATION",
//         arrLocation: result.data.content,
//       });
//     } catch (error) {
//       console.log("error: ", error);
//       console.log(error.response?.data);
//     }
//   };
// };
