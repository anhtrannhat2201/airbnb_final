import Logout from "@mui/icons-material/Logout";
import { Divider, ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import { localServ, USER } from "../../Services/localServices";

export default function UserNav() {
  // let user = useSelector((state) => {
  //     return state.reducerUser.userInfor
  // })
  let { userInfor } = useSelector((state) => state.reducerUser);
  console.log("userInfor: ", userInfor);
  let handleRemove = () => {
    localServ.user.remove();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  const role = userInfor?.user.role;
  console.log("role: ", role);
  let renderContentUser = () => {
    if (localStorage.getItem(USER) && role !== "ADMIN") {
      return (
        <>
          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Tin nhắn
          </MenuItem>

          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Thông báo
          </MenuItem>

          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Chuyến đi
          </MenuItem>

          <MenuItem
            className="text-accountMenu mr-5"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Danh sách yêu thích
          </MenuItem>

          <Divider />
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Quản lí nhà/Phòng cho thuê
          </MenuItem>
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Tổ chức Trải Nghiệm
          </MenuItem>
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Tài khoản
          </MenuItem>

          <Divider />
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Trợ giúp
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleRemove();
            }}
            style={{ padding: "12px 10px", fontSize: 14 }}
          >
            Đăng Xuất
          </MenuItem>
        </>
      );
    } else {
      return (
        <div>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "rgb(16, 14, 14)" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng Nhập
            </MenuItem>
          </Link>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#000000DE" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng Ký
            </MenuItem>
          </Link>
          <Divider />
        </div>
      );
    }
  };
  let renderContentAdmin = () => {
    if (localStorage.getItem(USER) && role === "ADMIN") {
      return (
        <>
          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Tin nhắn
          </MenuItem>

          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Thông báo
          </MenuItem>

          <MenuItem
            className="text-accountMenu"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Chuyến đi
          </MenuItem>

          <MenuItem
            className="text-accountMenu mr-5"
            style={{ fontSize: 14, fontWeight: "bold", padding: "12px 10px" }}
          >
            Danh sách yêu thích
          </MenuItem>

          <Divider />
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Quản lí nhà/Phòng cho thuê
          </MenuItem>
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Tổ chức Trải Nghiệm
          </MenuItem>
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Tài khoản
          </MenuItem>
          <NavLink to="/admin/users">
            <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
              Trang Quản Lý
            </MenuItem>
          </NavLink>
          <Divider />
          <MenuItem style={{ padding: "12px 10px", fontSize: 14 }}>
            Trợ giúp
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleRemove();
            }}
            style={{ padding: "12px 10px", fontSize: 14 }}
          >
            Đăng Xuất
          </MenuItem>
        </>
      );
    } else {
      return (
        <div>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "rgb(16, 14, 14)" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng Nhập
            </MenuItem>
          </Link>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#000000DE" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng Ký
            </MenuItem>
          </Link>
          <Divider />
        </div>
      );
    }
  };
  let renderContentAll = () => {
    if (role !== "ADMIN") {
      return (
        <>
          <div>{renderContentUser()}</div>
        </>
      );
    } else {
      return (
        <>
          <div>{renderContentAdmin()}</div>
        </>
      );
    }
  };
  return <div>{renderContentAll()}</div>;
}
