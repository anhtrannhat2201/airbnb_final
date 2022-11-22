import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Table,
  Upload,
} from "antd";

import Search from "antd/es/transfer/search";
import {
  UploadOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteLocationIdAction,
  getListLocation,
} from "../../../redux/actions/actionsLocations";

function LocationsAdmin() {
  // const { userInfor } = useSelector((state) => state.userReducer)
  const { lstLocation } = useSelector((state) => state.locationReducer);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListLocation());
  }, []);

  const data = lstLocation;
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => b.id - a.id,
      width: "15%",
    },

    {
      title: "Tên vị trí",
      dataIndex: "tenViTri",

      sorter: (a, b) => {
        let tenViTriA = a.tenViTri.toLowerCase().trim();
        let tenViTriB = b.tenViTri.toLowerCase().trim();
        if (tenViTriA > tenViTriB) {
          return 1;
        }
        return -1;
      },
      width: "15%",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tỉnh thành",
      dataIndex: "tinhThanh",

      width: "15%",
    },
    {
      title: "Quốc gia",
      dataIndex: "quocGia",

      width: "15%",
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
                <NavLink
                  className="mr-2 -ml-12 text-2xl"
                  style={{ color: "blue" }}
                  to={`/admin/locations/editimagelocations/${record?.id}`}
                >
                  <Button>Upload</Button>
                </NavLink>
              </Col>
            </Row>
          </Fragment>
        );
      },
      width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "id",

      render: (text, locations, index) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/locations/editlocations/${locations?.id}`}
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
                  window.confirm(
                    "Bạn có muốn xóa " + locations.tenViTri + " không"
                  )
                ) {
                  // gọi action
                  dispatch(deleteLocationIdAction(locations.id));
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
  const onChange = (pagination, filters, sorter, extra) => {};
  const onSearch = (value) => {
    // Goi api lấy danh sách Vị Trí

    dispatch(getListLocation(value));
  };

  return (
    <Fragment>
      <div className="text-4xl">
        <h3>Quản lý Vị Trí</h3>
        <NavLink to={"/admin/locations/addnew"}>
          <Button type="primary" className="bg-blue-600 mb-3 rounded">
            Thêm vị trí mới
          </Button>
        </NavLink>
        <Search
          placeholder="Tìm kiếm"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
        />
        <Table
          columns={columns}
          rowKey={"maPhim"}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </Fragment>
  );
}

export default LocationsAdmin;
// const [visibleImage, setVisibleImage] = useState(false);
// const [editFormImageValue, SetEditFormImageValue] = useState();
// const FormEditImage = ({ visibleImage, onCancel }) => {
//   const [form] = Form.useForm();
//   if (editFormImageValue) {
//     form.setFieldsValue({
//       id: editFormImageValue?.id,
//     });
//   }

//   return (
//     <Modal visible={visibleImage} title="Form sửa ảnh" onCancel={onCancel}>
//       <Form
//         onSubmitCapture={formik.handleSubmit}
//         form={form}
//         layout="vertical"
//         name="form_in_modal"
//         initialValues={{ modifier: "public" }}
//       >
//         <Form.Item
//           name="id"
//           label="Mã vị trí"
//           rules={[
//             {
//               required: true,
//               message: "Please input the title of collection!",
//             },
//           ]}
//           value={formik.values.id}
//         >
//           <Input disabled />
//         </Form.Item>
//         <Form.Item label="Hình Ảnh">
//           <input
//             type="file"
//             onChange={handleChangeFile}
//             accept="image/apng, image/gif, image/jpeg, image/png"
//           />
//           <br />
//           <img
//             style={{ width: 200, height: 200 }}
//             src={imgSrc === "" ? editFormImageValue?.hinhAnh : imgSrc}
//             alt="...."
//           />
//         </Form.Item>
//         <Form.Item>
//           <button
//             type="submit"
//             className="bg-blue-400 text-white p-3 rounded hover:bg-blue-500 "
//           >
//             Cập nhật ảnh
//           </button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// const onChangeImage = (values) => {
//   let maViTri = editFormImageValue?.id;
//   let imageForm = values.hinhAnh[0]?.thumbUrl;
//   let token = userInfor?.token;

//   let dataImage = {
//     token,
//     maViTri,
//     formFile: imageForm,
//   };
//   console.log("dataImage: ", dataImage);
//   dispatch(editImageLocationAction(dataImage));
//   setVisibleImage(false);
//   SetEditFormImageValue(undefined);
// };
/*end Sửa ảnh*/
{
  /* <FormEditImage
          visibleImage={visibleImage}
          onCancel={() => {
            setVisibleImage(false);
            SetEditFormImageValue(undefined);
          }}
        /> */
}
