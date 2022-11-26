import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import logo_login from "../../assets/logo_login.jpg";

import { NavLink, useNavigate } from "react-router-dom";
import { TabTitle } from "../../Utils/generalFunction";

import { setUserLoginAction } from "../../redux/actions/actionInforUser";
const LoginPage = () => {
  TabTitle("Đăng nhập");
  // const { userInfor } = useSelector((state) => state.reducerUser);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }, //liệt kê các input đang lỗi
  // } = useForm({
  //   //defaultValues khai báo giá trị mặc định cho các input trong form
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  //   //mode: cacash validation đc trigger (defaute là submit)
  //   mode: "onTouched",
  // });
  const onFinish = (values) => {
    let onSuccess = () => {
      alert("Đăng nhập thành công");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
    let onFail = () => {
      alert("Đăng nhập thất bại");
    };
    dispatch(setUserLoginAction(values, onSuccess, onFail));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const styleBg = {
    backgroundImage: `url(${logo_login})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="w-screen h-screen relative" style={styleBg}>
      <div className="w-full p-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-1/2 md:w-2/5">
          <Form
            className=" w-full"
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              style={{ marginTop: 60 }}
              type="input"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: (
                    <span className="text-red-400">
                      Please input your Email!
                    </span>
                  ),
                },
              ]}
              className="mb-5"
            >
              <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </Form.Item>

            <Form.Item
              label="Mật Khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui Lòng Nhập Vào Mật Khẩu!",
                },
              ]}
            >
              <Input.Password className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </Form.Item>

            <Form.Item>
              <div className="grid grid-cols-2 items-center mb-6">
                <Button
                  type="submit"
                  htmlType="submit"
                  className="text-white focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-red-500 hover:bg-red-800 duration-300"
                >
                  Đăng nhập
                </Button>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="grid grid-cols-2 items-center mb-6">
                <NavLink
                  className="text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200"
                  to=""
                >
                  Quên mật khẩu?
                </NavLink>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
