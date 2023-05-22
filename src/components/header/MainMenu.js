import React from 'react';

function MainMenu(props) {
    return (
        <div className="header-nav">
            <div className="container-wapper">
                <ul
                    className="stelina-clone-mobile-menu stelina-nav main-menu "
                    id="menu-main-menu"
                >
                    <li className="menu-item  menu-item">
                        <a
                            href="/"
                            className="stelina-menu-item-title"
                            title="Home"
                        >
                            Home
                        </a>
                        <span className="toggle-submenu" />

                    </li>
                    <li className="menu-item menu-item">
                        <a
                            href="/shop"
                            className="stelina-menu-item-title"
                            title="Shop"
                        >
                            Shop
                        </a>

                    </li>
                    <li className="menu-item  menu-item-has-children item-megamenu">
                        <a href="#" className="stelina-menu-item-title" title="Pages">
                            Pages
                        </a>
                        <span className="toggle-submenu" />
                        <div className="submenu mega-menu menu-page">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item">
                                    <div className="stelina-custommenu default">
                                        <h2 className="widgettitle">Pages</h2>
                                        <ul className="menu">


                                            <li className="menu-item">
                                                <a href="/cart">Shopping Cart</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/productdetail/1">Shop Detail</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/checkout">Checkout</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/login">Login</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/register">Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"></div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item"></div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default MainMenu;