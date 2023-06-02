import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import OrderModel from "../../models/OrderModel";
import { useSelector } from "react-redux";
import UserModel from "../../models/UserModel";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên người nhận!"),
  email: Yup.string().required("Vui lòng nhập email!"),
  phone: Yup.string().required("Vui lòng nhập số điện thoại người nhận!"),
  address: Yup.string().required("Vui lòng nhập địa chỉ!"),
});

function CheckOutForm() {
  const cart = useSelector((state) => state.cart);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const initialValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const customerCookie = UserModel.getCookie("user");
    if (customerCookie) {
      const customerData = JSON.parse(customerCookie);
      setUser(customerData);
    }
  }, []);

  const handleSubmit = (values) => {
    values.cart = cart;
    values.customer_id = user.id;
    console.log(values);
    OrderModel.checkout(values)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thanh toán thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "success",
          title: "Thanh toán thất bại!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="checkout">
        <h2 className="title-form">
          <strong>Địa chỉ giao hàng</strong>
        </h2>
        <p className="form-row form-row-first">
          <label className="text">Tên khách hàng*</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="input-text"
            value={user.name}
            onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
            value={user.phone}
            onChange={handleChange}
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
            value={user.address}
            onChange={handleChange}
          />
          <ErrorMessage name="address" component="div" className="error" />
        </p>
        {/* <p className="form-row form-row-last">
          <label className="text">Ghi chú giao hàng*</label>
          <Field
            as="textarea"
            id="note"
            name="note"
            className="input-text"
            value={user.note}
            onChange={handleChange}
          />
          <ErrorMessage name="note" component="div" className="error" />
        </p> */}

        <div className="form-row">
          <button type="submit" className="button-submit">
            Thanh Toán*
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CheckOutForm;
