import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';

function Checkout(props) {
    return (
        <LayoutMaster>
            <div className="main-content main-content-checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items breadcrumb">
                                    <li className="trail-item trail-begin">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="trail-item trail-end active">Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="custom_blog_title">Checkout</h3>
                    <div className="checkout-wrapp">
                        <div className="shipping-address-form-wrapp">
                            <div className="shipping-address-form  checkout-form">
                                <div className="row-col-1 row-col">
                                    <div className="shipping-address">
                                        <h3 className="title-form">Shipping Address</h3>
                                        <p className="form-row form-row-first">
                                            <label className="text">First name</label>
                                            <input title="first" type="text" className="input-text" />
                                        </p>
                                        <p className="form-row form-row-last">
                                            <label className="text">Last name</label>
                                            <input title="last" type="text" className="input-text" />
                                        </p>
                                        <p className="form-row forn-row-col forn-row-col-1">
                                            <label className="text">Country</label>
                                            <select
                                                title="country"
                                                data-placeholder="United Kingdom"
                                                className="chosen-select"
                                                tabIndex={1}
                                            >
                                                <option value="United States">United States</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Aland Islands">Aland Islands</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                            </select>
                                        </p>
                                        <p className="form-row forn-row-col forn-row-col-2">
                                            <label className="text">State</label>
                                            <select
                                                title="state"
                                                data-placeholder="London"
                                                className="chosen-select"
                                                tabIndex={1}
                                            >
                                                <option value="United States">London</option>
                                                <option value="United Kingdom">tokyo</option>
                                                <option value="Afghanistan">Seoul</option>
                                                <option value="Aland Islands">Mexico city</option>
                                                <option value="Albania">Mumbai</option>
                                                <option value="Algeria">Delhi</option>
                                                <option value="American Samoa">New York</option>
                                                <option value="Andorra">Jakarta</option>
                                                <option value="Angola">Sao Paulo</option>
                                                <option value="Anguilla">Osaka</option>
                                                <option value="Antarctica">Karachi</option>
                                                <option value="Antigua and Barbuda">Matx-cơ-va</option>
                                                <option value="Argentina">Toronto</option>
                                                <option value="Armenia">Boston</option>
                                            </select>
                                        </p>
                                        <p className="form-row forn-row-col forn-row-col-3">
                                            <label className="text">City</label>
                                            <select
                                                title="city"
                                                data-placeholder="London"
                                                className="chosen-select"
                                                tabIndex={1}
                                            >
                                                <option value="United States">London</option>
                                                <option value="United Kingdom">tokyo</option>
                                                <option value="Afghanistan">Seoul</option>
                                                <option value="Aland Islands">Mexico city</option>
                                                <option value="Albania">Mumbai</option>
                                                <option value="Algeria">Delhi</option>
                                                <option value="American Samoa">New York</option>
                                                <option value="Andorra">Jakarta</option>
                                                <option value="Angola">Sao Paulo</option>
                                                <option value="Anguilla">Osaka</option>
                                                <option value="Antarctica">Karachi</option>
                                                <option value="Antigua and Barbuda">Matx-cơ-va</option>
                                                <option value="Argentina">Toronto</option>
                                                <option value="Armenia">Boston</option>
                                            </select>
                                        </p>
                                        <p className="form-row form-row-first">
                                            <label className="text">Zip code</label>
                                            <input title="zip" type="text" className="input-text" />
                                        </p>
                                        <p className="form-row form-row-last">
                                            <label className="text">Address</label>
                                            <input title="address" type="text" className="input-text" />
                                        </p>
                                    </div>
                                </div>
                                <div className="row-col-2 row-col">
                                    <div className="your-order">
                                        <h3 className="title-form">Your Order</h3>
                                        <ul className="list-product-order">
                                            <li className="product-item-order">
                                                <div className="product-thumb">
                                                    <a href="#">
                                                        <img src="/images/item-order1.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="product-order-inner">
                                                    <h5 className="product-name">
                                                        <a href="#">3D Dining Chair</a>
                                                    </h5>
                                                    <span className="attributes-select attributes-color">
                                                        Black,
                                                    </span>
                                                    <span className="attributes-select attributes-size">
                                                        XXL
                                                    </span>
                                                    <div className="price">
                                                        $45
                                                        <span className="count">x1</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="product-item-order">
                                                <div className="product-thumb">
                                                    <a href="#">
                                                        <img src="/images/item-order2.jpg" alt="img" />
                                                    </a>
                                                </div>
                                                <div className="product-order-inner">
                                                    <h5 className="product-name">
                                                        <a href="#">3D Dining Chair</a>
                                                    </h5>
                                                    <span className="attributes-select attributes-color">
                                                        Black,
                                                    </span>
                                                    <span className="attributes-select attributes-size">
                                                        XXL
                                                    </span>
                                                    <div className="price">
                                                        $45
                                                        <span className="count">x1</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="order-total">
                                            <span className="title">Total Price:</span>
                                            <span className="total-price">$95</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="button button-payment">
                                Payment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMaster>
    );
}

export default Checkout;