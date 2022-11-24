import moment from "moment";
import React, { useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getInforRooms,
    getListRentedRooms,
} from "../../redux/actions/actionRoom";
import InforRooms from "./InforRooms";

import "./RentedRoom.css";
export default function RentedRoom() {
    let user = useSelector((state) => {
        return state.reducerUser.userInfor;
    });

    let { inforRoom, rentedRoom } = useSelector((state) => state.roomReducer);
    // console.log("inforRoom: ", inforRoom);
    // console.log("rentedRoom: ", rentedRoom);

    let {
        hinhAnh,
        khach,
        tenPhong,
        moTa,
        giuong,
        phongTam,
        banLa,
        banUi,
        bep,
        dieuHoa,
        doXe,
    } = rentedRoom;

    // console.log("hinhAnh: ", hinhAnh);

    let { id } = user.user;

    // console.log("id: ", id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInforRooms(id));
    }, []);

    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <div className="max-w-4xl p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        {inforRoom?.map((room, index) => {
                            return <InforRooms key={index} room={room.maPhong} />;
                        })}
                        <div className="flex-shrink-0 w-60 mb-6 h-60 sm:h-32 sm:w-32 sm:mb-0">
                            <img
                                src={hinhAnh}
                                alt=""
                                className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-xl">{tenPhong}</h2>
                                <span className="text-sm dark:text-gray-400">{moTa}</span>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                   
                                    <span className="dark:text-gray-400">
                                        Số Lượng Khách {khach} - Số Giường {giuong} - Phòng Tấm{" "}
                                        {phongTam}
                                    </span>
                                    <span className="dark:text-gray-400">
                                        {/* Ngày Dến: {moment(room.ngayDi).format("DD-MM-YYYY")} */}
                                    </span>
                                    <span className="dark:text-gray-400">
                                        {/* - Ngày Đi: {moment(room.ngayDen).format("DD-MM-YYYY")} . */}
                                    </span>
                                </span>
                                <span className="flex items-center space-x-2">
                
                                    <span className="dark:text-gray-400">{!banUi ? '' : 'Bàn Ủi'} - {!banLa ? '' : 'Bàn Là'}
                                        - {!bep ? '' : 'Bếp'} - {!dieuHoa ? '' : 'Điều Hòa'} - {!doXe ? '' : 'Đỗ Xe'}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
