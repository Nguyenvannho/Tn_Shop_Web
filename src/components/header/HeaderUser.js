import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserModel from '../../models/UserModel';

function HeaderUser(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Gọi API đăng xuất
    UserModel.logout()
      .then((response) => {
        UserModel.deleteCookie('user')
        // Xử lý khi đăng xuất thành công
        Swal.fire({
          icon: 'success',
          title: 'Đăng xuất thành công',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
           

          // Chuyển hướng đến trang đăng nhập
          navigate("/");
        });
      })
      .catch((error) => {
        // Xử lý khi có lỗi đăng xuất
        Swal.fire({
          icon: 'error',
          title: 'Đăng xuất thất bại',
        });
      });
  };


  let user = UserModel.getCookie('user');
  user = user ? JSON.parse(user) : '';

  if (user) {
    return (
      <ul className="header-user-links">
        <li>
          <Link to={'/profile'}>Xin Chào: {user.name}</Link> | 
          <button onClick={handleLogout}>Đăng xuất</button>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header-user-links">
      <li>
        <Link to={'/login'}>Đăng nhập</Link>/
        <Link to={'/register'}>Đăng ký</Link>
      </li>
    </ul>
  );
}

export default HeaderUser;
