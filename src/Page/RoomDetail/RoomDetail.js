import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HotelDetail from "../../Components/HotelDetail/HotelDetail";

export default function RoomDetail() {
  return (
    <>
      <HotelDetail />
    </>
  );
}
