let initalState = {
  lstLocation: [],
  locationID: {},
  inforLocation: {},
};

export const locationReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOCATION_ID":
      state.locationID = action.locationID;
      return { ...state };
    case "GET_LIST_LOCATION":
      state.lstLocation = action.lstLocation;
      return { ...state };
    case "GET_VI_TRI_ID":
      state.inforLocation = action.inforLocation;
      return { ...state };

    default:
      return { ...state };
  }
};
