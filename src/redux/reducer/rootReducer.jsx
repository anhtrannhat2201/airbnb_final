import { combineReducers } from "redux";
import { roomReducer } from "./reducerRoom";
import { locationReducer } from "./reducerLocation";
import { spinnerReducer } from "./reducerSpinner";
import { userReducer } from "./reducerUser";
import { reviewReducer } from "./reducerReview";
export let rootReducer = combineReducers({
  spinnerReducer,
  roomReducer,
  userReducer,
  // locationReducer,
  reviewReducer,
});
