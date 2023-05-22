import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';
import RegisterForm from '../components/register/RegisterForm';


function Register(props) {
    return (
        <LayoutMaster>
            <Breadcrumb page_title="Register" />

            <div className="row">
                <div className="content-area col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="login-item">
                        <h5 className="title-login">Đăng ký tài khoản</h5>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </LayoutMaster>
    );
}

export default Register;
