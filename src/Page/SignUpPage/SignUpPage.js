import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER_SIGNUP } from "../../redux/constants/constantUser";
import { localServ } from "../../Services/localServices";
import { userServ } from "../../Services/userServices";
import "./SignUpPage.css";
const SignupPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    values.render = true;
    values.role = "ADMIN";
    values.birthday = "";
    values.avatar = "";
    userServ
      .postSignup(values)
      .then((res) => {
        localServ.user.set(res.data.content);
        dispatch({
          type: SET_USER_SIGNUP,
          payload: res.data.content,
        });
        setTimeout(() => {
          navigate(-1);
        }, 1500);

        alert("Đăng Ký Thành Công");
      })
      .catch((err) => {
        setTimeout(() => {
          navigate(-1);
        }, 1500);
        alert("Đăng Ký Thành Công");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container flex justify-center">
      <div className="w-96">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <Form.Item
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  label="Tài Khoản "
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Vui Lòng Nhập Vào Tài Khoảng !",
                    },
                  ]}
                >
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </Form.Item>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Form.Item
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    label="Mật Khẩu"
                    name="password"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Nhập Vào Mật Khẩu !",
                      },
                    ]}
                  >
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </Form.Item>
                </div>
                {/* <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Form.Item
                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                            name="confirm"
                                            label="Nhập Lại Mật Khẩu"
                                            dependencies={['password']}
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui Lòng Xác Nhận Lại Mật Khẩu !',
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('password') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('Vui Long Xac Nhan Lai Mat Khau'));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <input type="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

                                        </Form.Item>
                                    </div>
                                </div> */}
                <div className="space-y-2">
                  <Form.Item
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    label="Họ Tên"
                    name="hoTen"
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Nhập Vào Tài Khoảng !",
                      },
                    ]}
                  >
                    <input className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  </Form.Item>
                </div>
                {/* <div className="space-y-2">
                                    <Form.Item label="birthday" name="birthday">
                                        <DatePicker />
                                    </Form.Item>
                                </div> */}
                <div className="space-y-2">
                  <Form.Item
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Nhập Vào Email !",
                      },
                    ]}
                  >
                    <input className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  </Form.Item>
                </div>
                <div className="space-y-2">
                  <Form.Item
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    label="Số Điện Thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Nhập Vào Số Điện Thoại !",
                      },
                    ]}
                  >
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <Form.Item
              style={{ marginTop: "30px", textAlign: "end" }}
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" className="gradients" htmlType="submit">
                Đăng Kí
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default SignupPage;
