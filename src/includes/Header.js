import React from 'react';

function Header(props) {
    return (
        <>
            <header className="header style7">
                <div className="top-bar">
                    <div className="container">
                        <div className="top-bar-left">
                            <div className="header-message">Welcome to our online store!</div>
                        </div>
                        <div className="top-bar-right">
                            <div className="header-language">
                                <div className="stelina-language stelina-dropdown">
                                    <a
                                        href="#"
                                        className="active language-toggle"
                                        data-stelina="stelina-dropdown"
                                    >
                                        <span>English (USD)</span>
                                    </a>
                                    <ul className="stelina-submenu">
                                        <li className="switcher-option">
                                            <a href="#">
                                                <span>French (EUR)</span>
                                            </a>
                                        </li>
                                        <li className="switcher-option">
                                            <a href="#">
                                                <span>Japanese (JPY)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="header-user-links">
                                <li>
                                    <a href="login.html">Login or Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main-header">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logo.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
                                <div className="block-search-block">
                                    <form className="form-search form-search-width-category">
                                        <div className="form-content">
                                            <div className="category">
                                                <select
                                                    title="cate"
                                                    data-placeholder="All Categories"
                                                    className="chosen-select"
                                                    tabIndex={1}
                                                >
                                                    <option value="United States">Accessories</option>
                                                    <option value="United Kingdom">Accents</option>
                                                    <option value="Afghanistan">Desks</option>
                                                    <option value="Aland Islands">Sofas</option>
                                                    <option value="Albania">New Arrivals</option>
                                                    <option value="Algeria">Bedroom</option>
                                                </select>
                                            </div>
                                            <div className="inner">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    name="s"
                                                    defaultValue=""
                                                    placeholder="Search here"
                                                />
                                            </div>
                                            <button className="btn-search" type="submit">
                                                <span className="icon-search" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
                                <div className="header-control">
                                    <div className="block-minicart stelina-mini-cart block-header stelina-dropdown">
                                        <a
                                            href="javascript:void(0);"
                                            className="shopcart-icon"
                                            data-stelina="stelina-dropdown"
                                        >
                                            Cart
                                            <span className="count">0</span>
                                        </a>
                                        <div className="shopcart-description stelina-submenu">
                                            <div className="content-wrap">
                                                <h3 className="title">Shopping Cart</h3>
                                                <ul className="minicart-items">
                                                    <li className="product-cart mini_cart_item">
                                                        <a href="#" className="product-media">
                                                            <img
                                                                src="images/item-minicart-1.jpg"
                                                                alt="img"
                                                            />
                                                        </a>
                                                        <div className="product-details">
                                                            <h5 className="product-name">
                                                                <a href="#">Bibliotheque</a>
                                                            </h5>
                                                            <div className="variations">
                                                                <span className="attribute_color">
                                                                    <a href="#">Black</a>
                                                                </span>
                                                                ,
                                                                <span className="attribute_size">
                                                                    <a href="#">300ml</a>
                                                                </span>
                                                            </div>
                                                            <span className="product-price">
                                                                <span className="price">
                                                                    <span>$45</span>
                                                                </span>
                                                            </span>
                                                            <span className="product-quantity">(x1)</span>
                                                            <div className="product-remove">
                                                                <a href="">
                                                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="product-cart mini_cart_item">
                                                        <a href="#" className="product-media">
                                                            <img
                                                                src="images/item-minicart-2.jpg"
                                                                alt="img"
                                                            />
                                                        </a>
                                                        <div className="product-details">
                                                            <h5 className="product-name">
                                                                <a href="#">Soap Dining Solutions</a>
                                                            </h5>
                                                            <div className="variations">
                                                                <span className="attribute_color">
                                                                    <a href="#">Black</a>
                                                                </span>
                                                                ,
                                                                <span className="attribute_size">
                                                                    <a href="#">300ml</a>
                                                                </span>
                                                            </div>
                                                            <span className="product-price">
                                                                <span className="price">
                                                                    <span>$45</span>
                                                                </span>
                                                            </span>
                                                            <span className="product-quantity">(x1)</span>
                                                            <div className="product-remove">
                                                                <a href="">
                                                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="product-cart mini_cart_item">
                                                        <a href="#" className="product-media">
                                                            <img
                                                                src="images/item-minicart-3.jpg"
                                                                alt="img"
                                                            />
                                                        </a>
                                                        <div className="product-details">
                                                            <h5 className="product-name">
                                                                <a href="#">Dining Solutions Soap</a>
                                                            </h5>
                                                            <div className="variations">
                                                                <span className="attribute_color">
                                                                    <a href="#">Black</a>
                                                                </span>
                                                                ,
                                                                <span className="attribute_size">
                                                                    <a href="#">300ml</a>
                                                                </span>
                                                            </div>
                                                            <span className="product-price">
                                                                <span className="price">
                                                                    <span>$45</span>
                                                                </span>
                                                            </span>
                                                            <span className="product-quantity">(x1)</span>
                                                            <div className="product-remove">
                                                                <a href="">
                                                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="subtotal">
                                                    <span className="total-title">Subtotal: </span>
                                                    <span className="total-price">
                                                        <span className="Price-amount">$135</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <a
                                                        className="button button-viewcart"
                                                        href="shoppingcart.html"
                                                    >
                                                        <span>View Bag</span>
                                                    </a>
                                                    <a
                                                        href="checkout.html"
                                                        className="button button-checkout"
                                                    >
                                                        <span>Checkout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-account block-header stelina-dropdown">
                                        <a href="javascript:void(0);" data-stelina="stelina-dropdown">
                                            <span className="flaticon-user" />
                                        </a>
                                        <div className="header-account stelina-submenu">
                                            <div className="header-user-form-tabs">
                                                <ul className="tab-link">
                                                    <li className="active">
                                                        <a
                                                            data-toggle="tab"
                                                            aria-expanded="true"
                                                            href="#header-tab-login"
                                                        >
                                                            Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            data-toggle="tab"
                                                            aria-expanded="true"
                                                            href="#header-tab-rigister"
                                                        >
                                                            Register
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tab-container">
                                                    <div id="header-tab-login" className="tab-panel active">
                                                        <form method="post" className="login form-login">
                                                            <p className="form-row form-row-wide">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Email"
                                                                    className="input-text"
                                                                />
                                                            </p>
                                                            <p className="form-row form-row-wide">
                                                                <input
                                                                    type="password"
                                                                    className="input-text"
                                                                    placeholder="Password"
                                                                />
                                                            </p>
                                                            <p className="form-row">
                                                                <label className="form-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="input-checkbox"
                                                                    />
                                                                    <span>Remember me</span>
                                                                </label>
                                                                <input
                                                                    type="submit"
                                                                    className="button"
                                                                    defaultValue="Login"
                                                                />
                                                            </p>
                                                            <p className="lost_password">
                                                                <a href="#">Lost your password?</a>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <div id="header-tab-rigister" className="tab-panel">
                                                        <form method="post" className="register form-register">
                                                            <p className="form-row form-row-wide">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Email"
                                                                    className="input-text"
                                                                />
                                                            </p>
                                                            <p className="form-row form-row-wide">
                                                                <input
                                                                    type="password"
                                                                    className="input-text"
                                                                    placeholder="Password"
                                                                />
                                                            </p>
                                                            <p className="form-row">
                                                                <input
                                                                    type="submit"
                                                                    className="button"
                                                                    defaultValue="Register"
                                                                />
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="menu-bar mobile-navigation menu-toggle" href="#">
                                        <span />
                                        <span />
                                        <span />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav-container rows-space-20">
                    <div className="container">
                        <div className="header-nav-wapper main-menu-wapper">
                            <div className="vertical-wapper block-nav-categori">
                                <div className="block-title">
                                    <span className="icon-bar">
                                        <span />
                                        <span />
                                        <span />
                                    </span>
                                    <span className="text">All Categories</span>
                                </div>
                                <div className="block-content verticalmenu-content">
                                    <ul className="stelina-nav-vertical vertical-menu stelina-clone-mobile-menu">
                                        <li className="menu-item">
                                            <a
                                                href="#"
                                            
                                            >
                                                New Arrivals
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Hot Sale"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Hot Sale
                                            </a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a
                                                title="Accessories"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Accessories
                                            </a>
                                            <span className="toggle-submenu" />
                                            <ul role="menu" className=" submenu">
                                                <li className="menu-item">
                                                    <a title="Living" href="#" className="stelina-item-title">
                                                        Living
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a
                                                        title="Accents"
                                                        href="#"
                                                        className="stelina-item-title"
                                                    >
                                                        Accents
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a
                                                        title="New Arrivals"
                                                        href="#"
                                                        className="stelina-item-title"
                                                    >
                                                        New Arrivals
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a
                                                        title="Accessories"
                                                        href="#"
                                                        className="stelina-item-title"
                                                    >
                                                        Accessories
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a
                                                        title="Bedroom"
                                                        href="#"
                                                        className="stelina-item-title"
                                                    >
                                                        Bedroom
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Accents"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Accents
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Tables"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Tables
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Dining"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Dining
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Lighting"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Lighting
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                title="Office"
                                                href="#"
                                                className="stelina-menu-item-title"
                                            >
                                                Office
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-device-mobile">
                <div className="wapper">
                    <div className="item mobile-logo">
                        <div className="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="img" />
                            </a>
                        </div>
                    </div>

                    <div className="item item mobile-search-box has-sub">
                        <a href="#">
                            <span className="icon">
                                <i className="fa fa-search" aria-hidden="true" />
                            </span>
                        </a>
                        <div className="block-sub">
                            <a href="#" className="close">
                                <i className="fa fa-times" aria-hidden="true" />
                            </a>
                            <div className="header-searchform-box">
                                <form className="header-searchform">
                                    <div className="searchform-wrap">
                                        <input
                                            type="text"
                                            className="search-input"
                                            placeholder="Enter keywords to search..."
                                        />
                                        <input
                                            type="submit"
                                            className="submit button"
                                            defaultValue="Search"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="item mobile-settings-box has-sub">
                        <a href="#">
                            <span className="icon">
                                <i className="fa fa-cog" aria-hidden="true" />
                            </span>
                        </a>
                        <div className="block-sub">
                            <a href="#" className="close">
                                <i className="fa fa-times" aria-hidden="true" />
                            </a>
                            <div className="block-sub-item">
                                <h5 className="block-item-title">Currency</h5>
                                <form className="currency-form stelina-language">
                                    <ul className="stelina-language-wrap">
                                        <li className="active">
                                            <a href="#">
                                                <span>English (USD)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>French (EUR)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Japanese (JPY)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="item menu-bar">
                        <a className=" mobile-navigation  menu-toggle" href="#">
                            <span />
                            <span />
                            <span />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;