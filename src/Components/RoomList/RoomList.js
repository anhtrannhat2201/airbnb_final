import React, { useEffect, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "./RoomList.css";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Pagination, Navigation, Thumbs } from "swiper";
import { getListRoomAction } from "../../redux/actions/actionRoom";
import { NavLink, useParams } from "react-router-dom";

export default function RoomList() {
  const { listRoom } = useSelector((state) => state.roomReducer);

  const dispatch = useDispatch();
  const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const createRandomStar = (min, max) => {
    return Math.floor(Math.random() * (max - min) * 100) / 100 + min;
  };

  useEffect(() => {
    dispatch(getListRoomAction());
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        {listRoom.map((room) => {
          return (
            <NavLink
              key={room.id}
              className="roomLink"
              to={`/roomdetail/${room.id}/${room.tenPhong}`}
            >
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="roomSwiper relative"
              >
                <SwiperSlide className="w-full object-cover">
                  <img src={room.hinhAnh} alt={room.hinhAnh} />
                </SwiperSlide>
                <SwiperSlide className="w-full object-cover">
                  <img src={room.hinhAnh} alt={room.hinhAnh} />
                </SwiperSlide>
                <SwiperSlide className="w-full object-cover">
                  <img src={room.hinhAnh} alt={room.hinhAnh} />
                </SwiperSlide>
                <button className="absolute top-3 right-3 z-30">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "rgba(0, 0, 0, 0.5)",
                      height: "24px",
                      width: "24px",
                      stroke: "#fff",
                      strokeWidth: 2,
                      overflow: "hidden",
                    }}
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                  </svg>
                </button>
              </Swiper>
              <div>
                <p className="flex justify-between mt-2">
                  <span className="font-bold truncate ">{room.tenPhong}</span>
                  <span>
                    <i className="fa fa-star"></i>{" "}
                    {createRandomStar(1, 10).toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-500">
                  {createRandomNumber(2, 10000)} km
                </p>
                <p className="text-gray-500">
                  Ng??y {createRandomNumber(1, 30)} - Ng??y{" "}
                  {createRandomNumber(1, 30)} th??ng {createRandomNumber(1, 12)}
                </p>
                <p className="mt-1">
                  <span className="font-bold">
                    ${createRandomNumber(99, 599)}
                  </span>{" "}
                  ????m
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
