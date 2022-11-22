let initalState = {
  allReview: [],
  listReview: [],
};

export const reviewReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_LIST_REVIEW":
      state.listReview = action.listReview;
      return { ...state };
    case "GET_ALL_REVIEW":
      state.allReview = action.allReview;
      return { ...state };
    default:
      return { ...state };
  }
};
