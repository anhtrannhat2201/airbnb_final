import React, { useEffect, useState } from 'react'
import {
    DatePicker,
    Form, Input,
} from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAction } from '../../redux/actions/actionInforUser';
import "./EditUser.css"
import moment from 'moment';
const dateFormat = "DD/MM/YYYY";
const EditUser = () => {
    const dispatch = useDispatch()
    // // let navigate = useNavigate();
    let user = useSelector((state) => {
        return state.reducerUser.userInfor
    })
    // console.log('user: ', user);
    let { id, name, email, password, phone, birthday, gender, role } = user.user
    // console.log('avatar: ', avatar);
    // console.log('id: ', id);
    // const [imgSrc, setImgSrc] = useState(null);
    const [componentSize, setComponentSize] = useState("default");
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: id,
            name: name,
            email: email,
            birthday: birthday,
            phone: phone,
            gender: gender,
            role: role,
            password: password,
        },
        onSubmit: (values) => {
            // console.log('values: ', values);
            // dispatch(updateUserAction(id))

            dispatch(updateUserAction(id))
        },
    });
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <p className="block mt-3 mb-3 cursor-pointer text-dark hover:opacity-2 font-medium rounded-lg text-sm" data-toggle="modal" data-target="#exampleModal" >
                <ins>
                    Chỉnh Sửa Thông Tin
                </ins>
            </p>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Chỉnh Sửa Thông Tin Của Bạn</h1>
                            <button className="close" data-dismiss="modal" aria-label="Close">
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
                                <Form.Item label="Id">
                                    <Input
                                        disabled
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="id"
                                        value={formik.values.id}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Tài khoản">
                                    <Input
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="name"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.name}
                                    />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Số điện thoại">
                                    <Input
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Ngày Sinh">
                                    <Input
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        onChange={formik.handleChange}
                                        value={formik.values.birthday}
                                        format={dateFormat}
                                    />
                                </Form.Item>
                                <Form.Item label="Mật khẩu">
                                    <Input
                                        disabled
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Role">
                                    <Input
                                        disabled
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="role"
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item label="Gender">
                                    <Input
                                        disabled
                                        className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <Form.Item>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-400 text-white p-3 rounded "
                                        >
                                            Cập nhật người dùng
                                        </button>
                                    </Form.Item>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser