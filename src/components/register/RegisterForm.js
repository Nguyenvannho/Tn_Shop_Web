import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import UserModel from "../../models/UserModel";

const rules = Yup.object().shape({
  email: Yup.string().required("Vui lòng nhập Email!"),
  name: Yup.string().required("Vui lòng nhập Tên!"),
  password: Yup.string().required("Vui lòng nhập Mật khẩu!"),
  phone: Yup.string().required("Vui lòng nhập Số điện thoại!"),
  gender: Yup.string().required("Vui lòng chọn Giới tính!"),
  address: Yup.string().required("Vui lòng nhập Địa chỉ!"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  address: "",
};

function RegisterForm() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // console.log(values);
    UserModel.register(values)
      .then((res) => {
        // localStorage.setItem('token', res.access_token);
        // localStorage.setItem('user', JSON.stringify(res.user));
        navigate("/");
        handleRegisterSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Có lỗi xảy ra khi đăng ký!",
          text: err.message,
        });
      });
  };

  const handleRegisterSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Đăng ký tài khoản thành công vui lòng đăng nhập!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={rules}
      onSubmit={handleSubmit}
    >
      <Form className="register">
        <div className="form-row form-row-wide">
          <label htmlFor="name" className="text">
            Họ Tên
          </label>
          <Field type="text" id="name" name="name" className="input-text" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className="form-row form-row-wide">
          <label htmlFor="email" className="text">
            Email
          </label>
          <Field type="email" id="email" name="email" className="input-text" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
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
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-row form-row-wide">
          <label htmlFor="phone" className="text">
            Số điện thoại
          </label>
          <Field
            type="number"
            id="phone"
            name="phone"
            className="form-control"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-row form-row-wide">
          <label htmlFor="gender" className="text">
            Giới tính
          </label>
          <Field as="select" id="gender" name="gender" className="form-control">
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </Field>
          <ErrorMessage
            name="gender"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-row form-row-wide">
          <label htmlFor="address" className="text">
            Địa chỉ
          </label>
          <Field
            type="text"
            id="address"
            name="address"
            className="input-text"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-row">
          <span className="inline">
            <Field type="checkbox" id="cb2" name="agreeTerms" />
            <label htmlFor="cb2" className="label-text">
              Tôi đồng ý <span>Điều khoản & Điều kiện</span>
            </label>
          </span>
        </div>
        <div className="form-row">
          <button type="submit" className="button-submit">
            Đăng Ký Ngay
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
