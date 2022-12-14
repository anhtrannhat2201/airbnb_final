import React, { Fragment, useEffect } from "react";
import { Button, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUsers,
  getUsers,
  searchUsers,
} from "../../../redux/actions/actionInforUser";
import { Input, Space } from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Search } = Input;
function UsersAdmin() {
  let { arrUser } = useSelector((state) => state.reducerUser);
  console.log("arrUser: ", arrUser);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const dataSource = arrUser;

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      width: "15%",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Name",
      dataIndex: "name",

      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      width: "15%",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    ,
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => {
        if (text == "ADMIN") {
          return <Tag color="red">ADMIN</Tag>;
        } else {
          return <Tag color="blue">USER</Tag>;
        }
      },
      sortDirections: ["descend", "ascend"],
    },
    ,
    {
      title: "Action",
      dataIndex: "id",
      render: (text, user) => {
        console.log("user: ", user);
        return (
          <Fragment>
            <NavLink
              to={`/admin/user/edituser/`}
              className="mr-2 ml-2 text-2xl"
              key={1}
              style={{ color: "blue" }}
            >
              <EditOutlined />
            </NavLink>
            <span
              className="text-2xl hover:cursor-pointer"
              onClick={() => {
                // g???i action x??a
                if (
                  window.confirm(
                    "B???n c?? mu???n x??a ng?????i d??ng " + user.name + " kh??ng"
                  )
                ) {
                  // g???i action
                  dispatch(deleteUsers(user?.id));
                }
              }}
              key={2}
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

  const onChange = (pagination, filters, sorter, extra) => {};
  const onSearch = (value) => {
    console.log("value: ", value);
    // Goi api laydanhsachphim
    // dispatch(searchUsers(value));
  };
  return (
    <Fragment>
      <div className="text-4xl">
        <h3>Qu???n l?? User</h3>

        <Button type="primary" className="mb-3 rounded">
          Th??m m???i Ngu???i d??ng
        </Button>

        <Search
          placeholder="T??m ki???m t??i kho???n ng?????i d??ng"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
        />
        <Table
          columns={columns}
          rowKey={"id"}
          dataSource={dataSource}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
}

export default UsersAdmin;
