let initalState = {
  locationID: {},
};

export const locationReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOCATION_ID":
      state.locationID = action.locationID;
      return { ...state };

    default:
      return { ...state };
  }
};
