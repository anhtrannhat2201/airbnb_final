import { ThongTinPhong } from "../../_core/models/Rooms";
import { INFOR_ROOM, RENTED_ROOM } from "../constants/constantsRoom";

let initalState = {
  roomDetail: new ThongTinPhong(),
  roomDetailAddress: {},
  listRoom: [],
  inforRoom: [],
  rentedRoom: [],
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
    case "ROOM_DETAIL_ADDRESS":
      state.roomDetailAddress = action.roomDetailAddress;
      return { ...state };
    case INFOR_ROOM: {
      state.inforRoom = action.inforRoom;
      return { ...state };
    }
    case RENTED_ROOM: {
      state.rentedRoom = action.rentedRoom;
      return { ...state };
    }
    case "LOCATION_ID":
      state.locationId = action.locationId;
      return { ...state };

    case "GET_DAT_PHONG":
      state.arrDatPhong = action.arrDatPhong;
      return { ...state };

    case "GET_DAT_PHONG_ID":
      state.danhSachPhongDat = action.danhSachPhongDat;
      return { ...state };

    default:
      return { ...state };
  }
};
