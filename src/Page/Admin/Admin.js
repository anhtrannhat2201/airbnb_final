import { Layout, Menu } from "antd";

import React, { Fragment, useState } from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import LocationsAdmin from "./LocationsAdmin/LocationsAdmin";
import SubMenu from "antd/es/menu/SubMenu";
// import { Content, Footer, Header } from "antd/lib/layout/layout";
const { Header, Content, Footer, Sider } = Layout;

function Admin(props) {
  let { Component } = props;

  const [collapsed, setCollapsed] = useState(false);

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
                <NavLink to={"/admin/users"}>
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
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background  "
            style={{
              paddingBottom: 80,
            }}
          >
            {/* {opaerations()} */}
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
