import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListRentedRooms } from '../../redux/actions/actionRoom';

export default function InforRooms(props) {
    let { room } = props

    let { rentedRoom } = useSelector((state) => state.roomReducer)
    // console.log('rentedRoom: ', rentedRoom);
    // console.log('room: ', room);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListRentedRooms(room))
    }, [])
    return (
        <div>
            {/* {rentedRoom.map((rooms, index) => {
                <div key={index} className="flex-shrink-0 w-60 mb-6 h-60 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={rooms.hinhAnh} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
            })} */}


        </div>
    )
}
