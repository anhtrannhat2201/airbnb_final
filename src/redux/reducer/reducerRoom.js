import { ThongTinPhong } from "../../_core/models/Rooms";

let initalState = {
  roomDetail: new ThongTinPhong(),
  listRoom: [],
  arrDatPhong: {},
  locationId: {},
  danhSachPhongDat: {},
};

export const roomReducer = (state = initalState, action) => {
  switch (action.type) {
    case "LIST_ROOM":
      state.listRoom = action.listRoom;
      return { ...state };
    case "LIST_ROOM_BY_LOCATION":
      state.listRoom = action.listRoom;
      return { ...state };
    case "ROOM_DETAIL":
      state.roomDetail = action.roomDetail;
      return { ...state };
    case "LOCATION_ID":
      state.locationId = action.locationId;
    case "GET_DAT_PHONG":
      state.arrDatPhong = action.arrDatPhong;
    case "GET_DAT_PHONG_ID":
      state.danhSachPhongDat = action.danhSachPhongDat;
    default:
      return { ...state };
  }
};
