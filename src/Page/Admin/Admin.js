import { Avatar, Layout, Menu } from "antd";

import React, { Fragment, useState } from "react";
import {
  UserOutlined,
  HomeFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { localServ, USER } from "../../Services/localServices";
import SubMenu from "antd/es/menu/SubMenu";
import { useSelector } from "react-redux";
// import { Content, Footer, Header } from "antd/lib/layout/layout";
const { Header, Content, Footer, Sider } = Layout;

function Admin(props) {
  const [visiable, SetVisiable] = useState(false);

  let { Component } = props;
  const { userInfor } = useSelector((state) => state.reducerUser);
  console.log("userInfor: ", userInfor);
  const admin = userInfor?.user.role;

  const [collapsed, setCollapsed] = useState(false);
  if (!localStorage.getItem(USER)) {
    alert("Vui lòng đăng nhập!");
    return (window.location.href = "/login");
  }
  if (admin !== "ADMIN") {
    alert("This page only grants access from admin");
    return <Navigate to="/" replace />;
  }

  let handleRemove = () => {
    localServ.user.remove();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  const handleClick = () => {
    SetVisiable(!visiable);
  };
  let opaerations = () => {
    if (userInfor) {
      return (
        <div className="flex justify-end relative">
          <div className="mt-2">
            <span
              style={{ padding: 5 }}
              className="text-2xl underline text-cyan-600"
            >
              {userInfor?.user.name}
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: 50, height: 50, marginLeft: 5, marginRight: 5 }}
              src={userInfor?.user.avatar}
            ></Avatar>
          </div>
          <div className="mt-2">
            <button className="" onClick={handleClick}>
              <div className="mr-3 ">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: 16,
                    width: 16,
                    stroke: "currentcolor",
                    strokeWidth: 3,
                    overflow: "visible",
                    marginTop: 5,
                  }}
                >
                  <g fill="none" fillRule="nonzero">
                    <path d="m2 16h28" />
                    <path d="m2 24h28" />
                    <path d="m2 8h28" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div
            className={
              visiable
                ? "absolute right-0 top-16 bg-white z-50 rounded-md shadow-lg  flex flex-col w-44"
                : "hidden"
            }
          >
            <NavLink
              to={`/admin/users/${userInfor?.user.id}/${userInfor?.user.name}`}
              className="hover:bg-gray-100 mt-1 transition-all duration-200 leading-none text-center py-3 px-7 "
            >
              Thông tin cá nhân
            </NavLink>
            <button
              onClick={handleRemove}
              className="hover:bg-red-500 hover:text-white transition-all duration-200 leading-none py-3 px-5 "
            >
              Đăng xuất
            </button>
          </div>
        </div>
      );
    }
  };
  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className=" bg-opacity-40 flex justify-between h-16 mx-auto ml-2 text-center">
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Back to homepage"
                className=""
              >
                <NavLink to={"/"}>
                  <h3
                    style={{ fontSize: 26, paddingTop: 10, paddingLeft: 5 }}
                    className=" h-8 text-amber-600  mt-3 ml-3"
                  >
                    airBnb Manage
                  </h3>
                </NavLink>
              </a>
            </div>
          </div>
          <Menu
            className="mt-10"
            theme="dark"
            defaultSelectedKeys={["0"]}
            mode="inline"
          >
            <SubMenu key="1" icon={<UserOutlined />} title="Quản Lý User ">
              <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to={"/admin/users"}>Quản lý Người dùng</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<EnvironmentOutlined />}
              title="Thông Tin Vị Trí "
            >
              <Menu.Item key="2" icon={<EnvironmentOutlined />}>
                <NavLink to={"/admin/locations"}>
                  Quản lý thông tin vị trí
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<HomeFilled />} title="Thông Tin Phòng ">
              <Menu.Item key="3" icon={<HomeFilled />}>
                <NavLink to={"/admin/rooms"}>Quản lý thông tin phòng</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background  "
            style={{
              background: "white",
              paddingBottom: 80,
            }}
          >
            {opaerations()}
            {/* <h2>TEst</h2> */}
          </Header>
          <Content
            style={{
              margin: "0 ",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Component />
            </div>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              fontSize: "25px",
              backgroundColor: "#001529",
              color: "rgb(217 119 6)",
            }}
          >
            Sản phẩm airBnb
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
}

export default Admin;
