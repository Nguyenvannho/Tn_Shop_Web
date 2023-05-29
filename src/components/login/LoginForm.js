import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import UserModel from '../../models/UserModel';

const rules = Yup.object().shape({
  email: Yup.string().required('Vui lòng nhập Email!'),
  password: Yup.string().required('Vui lòng nhập mật khẩu!'),
});

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    UserModel.login(values)
      .then((res) => {
        UserModel.setCookie('user', JSON.stringify(res.user), res.expires_in);
        localStorage.setItem('token', res.access_token);
        navigate("/checkout");
        handleLoginSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra khi đăng nhập!',
          text: err.message,
        });
      });
  };

  const handleLoginSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Đăng nhập thành công!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={rules}
      onSubmit={handleSubmit}
    >
      <Form className="login">
        <div className="form-row form-row-wide">
          <label htmlFor="email" className="text">
            Tên tài khoản
          </label>
          <Field
            type="text"
            id="email"
            name="email"
            className="input-text"
          />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div className="form-row form-row-wide">
          <label htmlFor="password" className="text">
            Mật khẩu
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="input-text"
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <div className="lost_password">
          <span className="inline">
            <Field
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="input-checkbox"
            />
            <label htmlFor="rememberMe" className="label-text">
              Ghi nhớ tài khoản
            </label>
          </span>
          <a href="#" className="forgot-pw">
			Bạn quên mật khẩu ư? 
          </a>
        </div>
        <div className="form-row">
          <button type="submit" className="button-submit">
            Đăng Nhập
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
