import { Form, Input, Switch } from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
// import { postLocationAction } from "../../../redux/actions/actionsLocations";

function AddNewRoomsAdmin() {
  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: 0,
      tenPhong: "",
      khach: 0,
      phongNgu: 0,
      giuong: 0,
      phongTam: 0,
      moTa: "",
      giaTien: 0,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 0,
      hinhAnh: "",
    },
    onSubmit: (values) => {
      // tạo đối tượng form data => đưa giá trị values từ formik vào form data
      let formData = new FormData();

      for (let key in values) {
        formData.append(key, values[key]);
      }
      // dispatch(postLocationAction(formData));
      setTimeout(() => {
        navigate("/admin/locations");
      }, 1500);
    },
  });
  const handleChangeSwitch = (name) => {
    // Đây là Close Function
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

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
        <Form.Item label="Tên Phòng">
          <Input name="tenphong" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Khách">
          <Input name="khach" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Phòng ngủ">
          <Input name="phongNgu" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Giường">
          <Input name="giuong" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Phòng tắm">
          <Input name="phongTam" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Giá Tiền">
          <Input name="giaTien" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Máy Giặt">
          <Switch
            onChange={handleChangeSwitch("mayGiat")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Bàn là">
          <Switch
            onChange={handleChangeSwitch("banLa")}
            checked={formik.values.banLa}
          />
        </Form.Item>
        <Form.Item label="Tivi">
          <Switch
            onChange={handleChangeSwitch("tivi")}
            checked={formik.values.tivi}
          />
        </Form.Item>
        <Form.Item label="Điều hòa">
          <Switch
            onChange={handleChangeSwitch("dieuHoa")}
            checked={formik.values.dieuHoa}
          />
        </Form.Item>
        <Form.Item label="Wifi">
          <Switch
            onChange={handleChangeSwitch("wifi")}
            checked={formik.values.wifi}
          />
        </Form.Item>
        <Form.Item label="Bếp">
          <Switch
            onChange={handleChangeSwitch("bep")}
            checked={formik.values.bep}
          />
        </Form.Item>
        <Form.Item label="Đỗ xe">
          <Switch
            onChange={handleChangeSwitch("doXe")}
            checked={formik.values.doxe}
          />
        </Form.Item>
        <Form.Item label="Hồ bơi">
          <Switch
            onChange={handleChangeSwitch("hoBoi")}
            checked={formik.values.doxe}
          />
        </Form.Item>
        <Form.Item label="Bàn ủi">
          <Switch
            onChange={handleChangeSwitch("banUi")}
            checked={formik.values.banUi}
          />
        </Form.Item>
        <Form.Item label="Mã vị trí">
          <Switch
            onChange={handleChangeSwitch("maViTri")}
            checked={formik.values.maViTri}
          />
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
}

export default AddNewRoomsAdmin;
