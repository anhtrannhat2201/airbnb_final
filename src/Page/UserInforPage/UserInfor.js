import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditUser from "./EditUser";
import ProfileUser from "./ProfileUser";
import RentedRoom from "./RentedRoom";
import "./UserInfor.css";

export default function UserInfor() {
  const dispatch = useDispatch();
  let user = useSelector((state) => {
    return state.reducerUser.userInfor;
  });
  let { id, name, birthday } = user.user;
  // console.log('id: ', id);
  // useEffect(() => {
  //   const action = manageInforUser(id);
  //   dispatch(action);
  // }, []);

  // let { id, avatar, name, birthday } = userInforDetail
  // console.log('id: ', id);
  return (
    <div className="container userinfor mt-5">
      <ProfileUser />
      <div style={{ width: "70%" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "500", marginBottom: 15 }}>
          Xin Chào Bạn : <span style={{ color: "red" }}> {name}</span>
        </h1>
        <h1 style={{ fontSize: "0.8rem", fontWeight: "200", marginBottom: 15 }}>
          Ngày sinh của bạn : <span style={{ color: "red" }}> {birthday}</span>
        </h1>
        <EditUser id={id} />
        <h1 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: 15 }}>
          Phòng Đã Thuê
        </h1>
        <RentedRoom />
      </div>
    </div>
  );
}
