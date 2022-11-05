import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HotelDetail from "../../Components/HotelDetail/HotelDetail";

import { getRoomDetailAction } from "../../redux/actions/actionRoom";
import { TabTitle } from "../../Utils/generalFunction";

export default function RoomDetail() {
  const { roomDetail } = useSelector((state) => state.roomReducer);

  console.log("roomDetail: ", roomDetail);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomDetailAction(id));
  }, []);

  TabTitle(
    `Airbnb - Chi tiết phòng - ${roomDetail ? roomDetail.tenPhong : ""}`
  );

  return (
    <div>
      <HotelDetail />
    </div>
  );
}
