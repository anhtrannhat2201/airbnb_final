let initalState = {
  roomDetail: null,
  listRoom: [],
};

export const roomReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LIST_ROOM":
      state.listRoom = action.listRoom;
      return { ...state };
    case "ROOM_DETAIL":
      state.roomDetail = action.roomDetail;
      return { ...state };
    default:
      return { ...state };
  }
};
