import { combineReducers } from "redux";
import { roomReducer } from "./reducerRoom";
import { spinnerReducer } from "./reducerSpinner";
export let rootReducer = combineReducers({ spinnerReducer, roomReducer });
