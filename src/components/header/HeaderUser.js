import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserModel from '../../models/UserModel';

function HeaderUser(props) {
  const handleLogout = () => {
    // Gọi API đăng xuất
    UserModel.logout()
      .then((response) => {
        console.log(response);
        localStorage.removeItem('user');
        // Xử lý khi đăng xuất thành công
        Swal.fire({
          icon: 'success',
          title: 'dANG XUAT THANH CONG',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
           

          // Chuyển hướng đến trang đăng nhập
          window.location.href = '/login';
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


  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  if (user) {
    return (
      <ul className="header-user-links">
        <li>
          <Link to={'/profile'}>Xin Chào: {user.name}</Link>/
          <button onClick={handleLogout}>Đăng xuất</button>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header-user-links">
      <li>
        <Link to={'/login'}>Login</Link>/
        <Link to={'/register'}>Register</Link>
      </li>
    </ul>
  );
}

export default HeaderUser;
