import { Form, Input } from "antd";
import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getLocationIdAction,
  updateLocationIdAction,
} from "../../../redux/actions/actionsLocations";

export default function EditLocations() {
  // console.log("userInfor: ", userInfor);
  const { inforLocation } = useSelector((state) => state.locationReducer);
  console.log("inforLocation: ", inforLocation);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState("default");
  useEffect(() => {
    dispatch(getLocationIdAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: inforLocation?.id,
      tenViTri: inforLocation?.tenViTri,
      tinhThanh: inforLocation?.tinhThanh,
      quocGia: inforLocation?.quocGia,
      hinhAnh: inforLocation?.hinhAnh,
    },
    onSubmit: (values) => {
      // tạo đối tượng form data => đưa giá trị values từ formik vào form data
      let formData = new FormData();

      for (let key in values) {
        formData.append(key, values[key]);
      }
      dispatch(updateLocationIdAction(values));
      setTimeout(() => {
        navigate("/admin/locations");
      }, 1500);
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Fragment>
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
          <h3 className="text-4xl">Cập nhật vị trí</h3>
          <Form.Item label="Id">
            <Input
              value={formik.values.id}
              name="id"
              onChange={formik.handleChange}
              disabled
            />
          </Form.Item>
          <Form.Item label="Tên Vị Tri">
            <Input
              value={formik.values.tenViTri}
              name="tenViTri"
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Tỉnh Thành">
            <Input
              value={formik.values.tinhThanh}
              name="tinhThanh"
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="Quốc gia">
            <Input
              value={formik.values.quocGia}
              name="quocGia"
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item label="URL Hình Ảnh">
            <Input
              value={formik.values.hinhAnh}
              name="quocGia"
              onChange={formik.handleChange}
            />
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
          <Form.Item>
            <button
              style={{ marginLeft: "28%" }}
              type="submit"
              className="bg-blue-700 text-white p-3 rounded hover:bg-blue-500  "
            >
              Cập nhật
            </button>
          </Form.Item>
        </Form>
      </>
    </Fragment>
  );
}
