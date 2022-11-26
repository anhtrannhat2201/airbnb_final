import { Button, Col, Row, Table } from "antd";

import Search from "antd/es/transfer/search";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  deleteRoomAction,
  getListRoomAction,
} from "../../../redux/actions/actionRoom";
import EditImageRoomsAdmin from "./EditImageRoomsAdmin/EditImageRoomsAdmin";

function RoomsAdmin() {
  const { listRoom } = useSelector((state) => state.roomReducer);
  console.log("listRoom: ", listRoom);

  const [q, setQ] = useState("");

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListRoomAction());
  }, []);
  const handleSearch = (e) => {
    setQ(e.target.value?.toLowerCase());
  };
  const fSearch = (rows) => {
    return rows.filter((row) => row?.tenViTri?.toLowerCase().indexOf(q) > -1);
  };
  const data = listRoom;
  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "id",
      sorter: (a, b) => b.id - a.id,
      width: "10%",
    },

    {
      title: "Tên Phòng",
      dataIndex: "tenPhong",

      sorter: (a, b) => {
        let tenViTriA = a.tenPhong.toLowerCase().trim();
        let tenViTriB = b.tenPhong.toLowerCase().trim();
        if (tenViTriA > tenViTriB) {
          return 1;
        }
        return -1;
      },
      width: "10%",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, record, index) => {
        return (
          <Fragment>
            <Row justify="space-around" align="middle">
              <Col>
                <img
                  className=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src={record.hinhAnh}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = `https://picsum.photos/id/${index}/50/50`;
                  }}
                />
              </Col>
              <Col>
                <EditImageRoomsAdmin
                  id={record?.id}
                  hinhAnh={record.hinhAnh}
                ></EditImageRoomsAdmin>
              </Col>
            </Row>
          </Fragment>
        );
      },
      width: "20%",
    },
    {
      title: "Khách tối đa",
      dataIndex: "khach",
      width: "10%",
    },
    {
      title: "Phòng ngủ",
      dataIndex: "phongNgu",

      width: "10%",
    },
    {
      title: "Giường",
      dataIndex: "giuong",

      width: "10%",
    },
    {
      title: "Giá tiền(USD)",
      dataIndex: "giaTien",

      width: "10%",
    },
    {
      title: "Hành động",
      dataIndex: "id",

      render: (text, rooms, index) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/rooms/editrooms/${rooms?.id}`}
              className="mr-2 ml-2 text-2xl"
              key={index}
              style={{ color: "blue" }}
            >
              <EditOutlined />
            </NavLink>
            <span
              className="text-2xl hover:cursor-pointer"
              onClick={() => {
                // gọi action xóa
                if (
                  window.confirm("Bạn có muốn xóa " + rooms.tenPhong + " không")
                ) {
                  // gọi action
                  dispatch(deleteRoomAction(rooms.id));
                }
              }}
              key={index}
              style={{ color: "red" }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: "20%",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('onChange: ', pagination,filters,sorter,extra);
  };
  const onSearch = (value) => {
    console.log("value: ", value);
    // Goi api lấy danh sách Vị Trí

    // dispatch(getListRoomAction(value));
  };

  return (
    <Fragment>
      <div className="text-4xl">
        <h3>Quản lý Phòng</h3>
        <NavLink to={"/admin/rooms/addnew"}>
          <Button type="primary" className="bg-blue-600 mb-3 rounded">
            Thêm phòng mới
          </Button>
        </NavLink>
        <Search
          placeholder="Tìm kiếm"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          onChange={handleSearch}
        />
        <Table
          columns={columns}
          rowKey={"id"}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
}

export default RoomsAdmin;
