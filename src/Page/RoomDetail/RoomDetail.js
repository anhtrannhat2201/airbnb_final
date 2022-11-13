import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HotelDetail from "../../Components/HotelDetail/HotelDetail";

import { getRoomDetailAction } from "../../redux/actions/actionRoom";

import { TabTitle } from "../../Utils/generalFunction";

export default function RoomDetail() {
  return (
    <>
      <HotelDetail />
    </>
  );
}
