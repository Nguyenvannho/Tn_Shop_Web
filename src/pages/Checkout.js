import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import CheckOutForm from '../components/checkout/CheckOutForm';
import YourOrder from '../components/checkout/YourOrder';
import Breadcrumb from '../components/global/Breadcrumb';

function Checkout(props) {
    

    return (
        <LayoutMaster>
            <div className="main-content main-content-checkout">
                <div className="container">
                <Breadcrumb page_title="Checkout" />

                    <h3 className="custom_blog_title">Thanh toán đơn hàng</h3>
                    <div className="checkout-wrapp">
                        <div className="shipping-address-form-wrapp">
                            <div className="shipping-address-form  checkout-form">
                                <div className="row-col-1 row-col">
                                    <CheckOutForm/>
                                </div>
                                <YourOrder/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMaster>
    );
}

export default Checkout;