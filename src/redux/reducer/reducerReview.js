let initalState = {
  listReview: [],
};

export const reviewReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_LIST_REVIEW":
      state.listReview = action.listReview;
      return { ...state };

    default:
      return { ...state };
  }
};
