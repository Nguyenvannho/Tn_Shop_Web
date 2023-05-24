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
					<div className="site-main">
						<div className="customer_login">
							<div className="row">
								<div className="col-lg-12">
									<div className="login-item">
										<h2 className="title-login"><strong>Đăng ký tài khoản của bạn</strong></h2>
										<RegisterForm/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </LayoutMaster>
    );
}

export default Register;
