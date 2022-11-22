import { Form, Input } from "antd";
import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editImageLocationAction,
  getLocationIdAction,
} from "../../../redux/actions/actionsLocations";

export default function EditImageLocations() {
  const [imgSrc, setImgSrc] = useState("");
  const { userInfor } = useSelector((state) => state.userReducer);

  const { inforLocation } = useSelector((state) => state.locationReducer);
  console.log("inforLocation: ", inforLocation);
  const { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationIdAction(id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id,
      formFile: {},
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      // tạo đối tượng form data => đưa giá trị values từ formik vào form data
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.formFile, values.formFile.name);
          }
        }
      }
      console.log("formData: ", formData);
      // cập nhật phim upload action
      dispatch(editImageLocationAction(values));
    },
  });
  const handleChangeFile = async (e) => {
    // Lấy file ra từ e

    let file = e.target.files[0];
    // setValidation
    await formik.setFieldValue("formFile", file);

    if (
      file.type === "image/apng" ||
      file.type === "image/gif" ||
      file.type === "image/jpeg" ||
      file.type === "image/png"
    ) {
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); // hình base 64
      };
    }
  };
  return (
    <Fragment>
      <Form
        onSubmitCapture={formik.handleSubmit}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item label="Hình Ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/apng, image/gif, image/jpeg, image/png"
          />
          <br />
          <img
            style={{ width: 200, height: 200 }}
            src={imgSrc === "" ? inforLocation.hinhAnh : imgSrc}
            alt="...."
          />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="bg-blue-400 text-white p-3 rounded hover:bg-blue-500 "
          >
            Cập nhật ảnh
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
