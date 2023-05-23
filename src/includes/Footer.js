import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="footer style7">
                <div className="container">
                    <div className="container-wapper">
                        <div className="row">
                            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-sm hidden-md hidden-lg">
                                <div className="stelina-newsletter style1">
                                    <div className="newsletter-head">
                                        <h3 className="title">Newsletter</h3>
                                    </div>
                                    <div className="newsletter-form-wrap">
                                        <div className="list">
                                            Sign up for our free video course and <br /> urban garden
                                            inspiration
                                        </div>
                                        <input
                                            type="email"
                                            className="input-text email email-newsletter"
                                            placeholder="Your email letter"
                                        />
                                        <button className="button btn-submit submit-newsletter">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="stelina-custommenu default">
                                    <h2 className="widgettitle">Quick Menu</h2>
                                    <ul className="menu">
                                        <li className="menu-item">
                                            <a href="#">New arrivals</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Life style</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Accents</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Tables</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Dining</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs">
                                <div className="stelina-newsletter style1">
                                    <div className="newsletter-head">
                                        <h3 className="title">Newsletter</h3>
                                    </div>
                                    <div className="newsletter-form-wrap">
                                        <div className="list">
                                            Sign up for our free video course and <br /> urban garden
                                            inspiration
                                        </div>
                                        <input
                                            type="email"
                                            className="input-text email email-newsletter"
                                            placeholder="Your email letter"
                                        />
                                        <button className="button btn-submit submit-newsletter">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="stelina-custommenu default">
                                    <h2 className="widgettitle">Information</h2>
                                    <ul className="menu">
                                        <li className="menu-item">
                                            <a href="#">FAQs</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Track Order</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Delivery</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#">Return</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-end">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <div className="stelina-socials">
                                        <ul className="socials">
                                            <li>
                                                <a href="#" className="social-item" target="_blank">
                                                    <i className="icon fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social-item" target="_blank">
                                                    <i className="icon fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social-item" target="_blank">
                                                    <i className="icon fa fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="coppyright">
                                        Copyright © 2023
                                        <a href="#">Stelina</a>. All rights reserved
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-device-mobile">
                <div className="wapper">
                    <div className="footer-device-mobile-item device-home">
                        <a href="index.html">
                            <span className="icon">
                                <i className="fa fa-home" aria-hidden="true" />
                            </span>
                            Home
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-wishlist">
                        <a href="#">
                            <span className="icon">
                                <i className="fa fa-heart" aria-hidden="true" />
                            </span>
                            Wishlist
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-cart">
                        <a href="#">
                            <span className="icon">
                                <i className="fa fa-shopping-basket" aria-hidden="true" />
                                <span className="count-icon">0</span>
                            </span>
                            <span className="text">Cart</span>
                        </a>
                    </div>
                    <div className="footer-device-mobile-item device-home device-user">
                        <a href="login.html">
                            <span className="icon">
                                <i className="fa fa-user" aria-hidden="true" />
                            </span>
                            Account
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" className="backtotop">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    );
}

export default Footer;