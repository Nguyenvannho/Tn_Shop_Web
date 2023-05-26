import React from 'react';
import HeaderUser from '../components/header/HeaderUser';
import HeaderMinicart from '../components/header/HeaderMinicart';
import { Link } from 'react-router-dom';
import VerticalMenu from '../components/header/VerticalMenu';
import MainMenu from '../components/header/MainMenu';
import Search from '../components/header/Search';

function Header(props) {
    return (
        <>
            <header className="header style7">
                <div className="top-bar">
                    <div className="container">
                        <div className="top-bar-left">
                            <div className="header-message">Chào mừng đến với cửa hàng trực tuyến của chúng tôi!</div>
                        </div>
                        <div className="top-bar-right">
                            <div className="header-language">
                                
                            </div>
                            <HeaderUser/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="main-header">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
                                <div className="logo">
                                    <Link to={'/'}>
                                        <img src="/images/logo.png" alt="img" />
                                    </Link>
                                </div>
                            </div>
                           <Search/>
                            <div className="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
                                <div className="header-control">
                                    <HeaderMinicart/>
                                    <div className="block-account block-header stelina-dropdown">
                                        <div className="header-account stelina-submenu">
                                            <div className="header-user-form-tabs">
                                                <ul className="tab-link">
                                                    <li className="active">
                                                        <a
                                                            data-toggle="tab"
                                                            aria-expanded="true"
                                                            href="#header-tab-login"
                                                        >
                                                            Đăng nhập
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            data-toggle="tab"
                                                            aria-expanded="true"
                                                            href="#header-tab-rigister"
                                                        >
                                                            Đăng ký
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
                                                                    <span>Ghi nhớ</span>
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
                            <VerticalMenu/>
                            <MainMenu/>
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