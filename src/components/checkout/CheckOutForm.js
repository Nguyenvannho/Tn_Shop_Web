import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import CheckOutModel from '../../models/CheckOutModel';

const rules = Yup.object().shape({
  name: Yup.string().required('Mời nhập tên người nhận!'),
  email: Yup.string().required('Mời nhập email!'),
  phone: Yup.string().required('Mời nhập số điện thoại người nhận!'),
  address: Yup.string().required('Mời nhập địa chỉ!'),
  note: Yup.string().required('Mời nhập địa chỉ nhận hàng của bạn!'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
  note: ''
};



function CheckOutForm() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    CheckOutModel.login(values)
      .then((res) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        navigate("/");
        handleCheckOutSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Có lỗi xảy ra khi đăng nhập!',
          text: err.message,
        });
      });
  };
  const handleCheckOutSuccess = () => {
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
      <Form className="checkout">
    
        <h2 className="title-form"><strong>Địa chỉ giao hàng</strong></h2>
        <p className="form-row form-row-first">
          <label className="text" >Tên khách hàng*</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="input-text"
          />
          <ErrorMessage name="name" component="div" className="error" />
        </p>
        <p className="form-row form-row-last">
          <label className="text">Email*</label>
          <Field
            type="text"
            id="email"
            name="email"
            className="input-text"
          />
          <ErrorMessage name="email" component="div" className="error" />
        </p>
        <p className="form-row form-row-last">
          <label className="text">Số điện thoại*</label>
          <Field
            type="text"
            id="phone"
            name="phone"
            className="input-text"
          />
          <ErrorMessage name="phone" component="div" className="error" />
        </p>
        <p className="form-row form-row-last">
          <label className="text">Địa chỉ*</label>
          <Field
            type="text"
            id="address"
            name="address"
            className="input-text"
          />
          <ErrorMessage name="address" component="div" className="error" />
        </p>
        <p className="form-row form-row-last">
          <label className="text">Ghi chú giao hàng*</label>
          <Field
            type="text"
            id="note"
            name="note"
            className="input-text"
          />
          <ErrorMessage name="note" component="div" className="error" />
        </p>
        <div className="form-row">
          <button type="submit" className="button-submit">
            Thanh Toán*
          </button>
        </div>
      </Form>
    </Formik>
  );
};






export default CheckOutForm;
