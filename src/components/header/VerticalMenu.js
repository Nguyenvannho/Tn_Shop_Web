import React from 'react';

function VerticalMenu(props) {
    return (
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
    );
}

export default VerticalMenu;