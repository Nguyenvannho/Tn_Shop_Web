import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu(props) {
    return (
        <div className="header-nav">
            <div className="container-wapper">
                <ul
                    className="stelina-clone-mobile-menu stelina-nav main-menu "
                    id="menu-main-menu"
                >
                    <li className="menu-item  menu-item">
                        <Link to={'/'}>Trang chủ</Link>
                        <span className="toggle-submenu" />
                    </li>
                    <li className="menu-item menu-item">
                        <Link to={'/shop'}>Trang sản phẩm</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;