import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import UserModel from '../../models/UserModel';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Vui lòng nhập Email!'),
    name: Yup.string().required('Vui lòng nhập Tên!'),
    password: Yup.string().required('Vui lòng nhập Mật khẩu!'),
    phone: Yup.string().required('Vui lòng nhập Số điện thoại!'),
    gender: Yup.string().required('Vui lòng nhập Giới tính!'),
    stt: Yup.string().required('Vui lòng nhập Stt!'),
    address: Yup.string().required('Vui lòng nhập Địa chỉ!'),
    birthday: Yup.string().required('Vui lòng nhập Ngày sinh!'),
    image: Yup.string().required('Vui lòng nhập Ảnh!'),
});

const initialValues = {
    email: '',
    name: '',
    password: '',
    phone: '',
    gender: '',
    stt: '',
    address: '',
    birthday: '',
    image: '',
};

function RegisterForm() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        UserModel.register(values)
            .then((res) => {
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('user', JSON.stringify(res.user));
                navigate('/');
                handleRegisterSuccess();
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi xảy ra khi đăng ký!',
                    text: err.message,
                });
            });
    };

    const handleRegisterSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Đăng ký tài khoản thành công!',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="register">
                <p className="form-row form-row-wide">
                    <label className="text">Email</label>
                    <Field type="email" name="email" className="input-text" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Tên người dùng</label>
                    <Field type="text" name="name" className="input-text" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Mật khẩu</label>
                    <Field type="password" name="password" className="input-text" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Số điện thoại</label>
                    <Field type="number" name="phone" className="input-text" />
                    <ErrorMessage name="phone" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Giới tính</label>
                    <Field type="number" name="gender" className="input-text" />
                    <ErrorMessage name="gender" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Stt</label>
                    <Field type="number" name="group_id" className="input-text" />
                    <ErrorMessage name="group_id" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Địa chỉ</label>
                    <Field type="text" name="address" className="input-text" />
                    <ErrorMessage name="address" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Ngày sinh</label>
                    <Field type="date" name="birthday" className="input-text" />
                    <ErrorMessage name="birthday" component="div" className="error-message" />
                </p>
                <p className="form-row form-row-wide">
                    <label className="text">Ảnh</label>
                    <Field type="text" name="image" className="input-text" />
                    <ErrorMessage name="image" component="div" className="error-message" />
                </p>
                <p className="form-row">
                    <span className="inline">
                        <Field type="checkbox" id="cb2" name="agreeTerms" />
                        <label htmlFor="cb2" className="label-text">
                            Tôi đồng ý <span>Điều khoản & Điều kiện</span>
                        </label>
                    </span>
                </p>
                <p>
                    <button type="submit" className="button-submit">
                        Đăng ký ngay
                    </button>
                </p>
            </Form>
        </Formik>
    );
}

export default RegisterForm;
