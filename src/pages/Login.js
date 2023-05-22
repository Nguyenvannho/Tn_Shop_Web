import React, { useState } from 'react';
import axios from 'axios';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';
import LoginForm from '../components/login/LoginForm';


const Login = () => {
	return (
		<LayoutMaster>
			<Breadcrumb page_title="Login"/>

			<div className="row">
				<div className="content-area col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="site-main">
						<div className="customer_login">
							<div className="row">
								<div className="col-lg-12">
									<div className="login-item">
										<h5 className="title-login">Đăng nhập tài khoản của bạn</h5>
										<LoginForm/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</LayoutMaster>
	);
};

export default Login;
