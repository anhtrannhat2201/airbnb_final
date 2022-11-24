import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { upLoadAvatarUserAction } from "../../redux/actions/actionInforUser";

const ProfileUser = () => {
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  let user = useSelector((state) => {
    return state.reducerUser.userInfor;
  });
  let { avatar, id, name } = user.user;
  // console.log('id: ', id);

  const { userInforDetail } = useSelector((state) => state.reducerUser);
  // console.log('userInforDetail: ', userInforDetail);

  // useEffect(() => {
  //     const action = manageInforUser(id);
  //     dispatch(action);
  // }, []);

  const [imgSrc, setImgSrc] = useState("");
  const [componentSize, setComponentSize] = useState("default");
  // console.log('name: ', name);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      avatar: avatar,
    },
    onSubmit: (values) => {
      // console.log('values: ', values);
      let formData = new FormData();
      // console.log('formData: ', formData);
      for (let key in values) {
        // console.log('key: ', key);
        if (key !== "avatar") {
          formData.append(key, values[key]);
        } else {
          if (values.avatar !== avatar) {
            formData.append("File", values.avatar, values.avatar.name);
          }
        }
      }
      // console.log('formData: ', formData.get('File'));
      // cập nhật phim upload action
      dispatch(upLoadAvatarUserAction(formData));
    },
  });

  const handleChangeFile = async (e) => {
    // Lấy file ra từ e

    let file = e.target.files[0];
    // console.log("file: ", file);

    // Đem dữ liệu lưu vào formik
    // await formik.setFieldValue("avatar", file);

    // // setValidation

    if (
      file.type === "image/apng" ||
      file.type === "image/gif" ||
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //hình base 64
        console.log("setImgSrc: ", setImgSrc);
      };
    }
  };
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div
      style={{ width: "30%", height: "400px" }}
      className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100"
    >
      {avatar ? (
        <img
          src={avatar}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
      ) : (
        <button
          id="logo_Hoten"
          style={{
            width: 60,
            height: 60,
            backgroundColor: "rgba(191, 62, 129, 0.8)",
          }}
          className="w-96 h-96 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        >
          {name.substr(0, 1)}
        </button>
      )}
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <p
            className="block mt-3 mb-3 cursor-pointer text-dark hover:opacity-2 font-medium rounded-lg text-sm"
            data-toggle="modal"
            data-target="#uploadavatar"
          >
            <ins>Chỉnh Sửa Ảnh</ins>
          </p>
        </div>
        <div
          className="modal fade"
          id="uploadavatar"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-gray-800"
                  id="exampleModalLabel"
                >
                  Chỉnh Sửa avatar
                </h1>
                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
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
                  <Form.Item label="Hình Ảnh">
                    <input
                      name="avatar"
                      type="file"
                      onChange={handleChangeFile}
                      accept="image/apng, image/gif, image/jpeg, image/png ,image/jpg"
                    />
                    <br />
                    <img
                      style={{ width: 200, height: 200 }}
                      src={imgSrc === "" ? avatar : imgSrc}
                      alt="...."
                    />
                  </Form.Item>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" data-dismiss="modal">
                      Close
                    </button>
                    <Form.Item>
                      <button
                        type="submit"
                        className="bg-blue-400 text-dark py-2 px-1 rounded "
                      >
                        Cập nhật avatar
                      </button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
