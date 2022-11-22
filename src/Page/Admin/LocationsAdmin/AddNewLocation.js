import { Form, Input } from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { postLocationAction } from "../../../redux/actions/actionsLocations";

const AddNewLocation = () => {
  // const { userInfor } = useSelector((state) => state.userReducer);
  // console.log("userInfor: ", userInfor);

  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    onSubmit: (values) => {
      // tạo đối tượng form data => đưa giá trị values từ formik vào form data
      let formData = new FormData();

      for (let key in values) {
        formData.append(key, values[key]);
      }
      dispatch(postLocationAction(values));
      setTimeout(() => {
        navigate("/admin/locations");
      }, 1500);
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="text-4xl">Thêm Vị Trí</h3>
        {/* <Form.Item label="Id">
          <Input name="id" onChange={formik.handleChange} />
        </Form.Item> */}
        <Form.Item label="Tên Vị Tri">
          <Input name="tenViTri" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Tỉnh Thành">
          <Input name="tinhThanh" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Quốc gia">
          <Input name="quocGia" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="URL Hình Ảnh">
          <Input name="hinhAnh" onChange={formik.handleChange} />
        </Form.Item>
        {/* <Form.Item label="Hình Ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/apng, image/gif, image/jpeg, image/png"
          />
          <br />
          <img style={{ width: 200, height: 200 }} src={imgSrc} alt="...." />
        </Form.Item> */}
        <Form.Item label="Tác Vụ">
          <button type="submit" className="bg-blue-400 text-white p-3 rounded ">
            Thêm vị trí
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewLocation;
