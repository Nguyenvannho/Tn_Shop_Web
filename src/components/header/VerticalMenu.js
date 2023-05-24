import React from "react";
import { Link } from "react-router-dom";

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
            <Link href="#">New Arrivals</Link>
          </li>
          <li className="menu-item">
            <Link title="Hot Sale" href="#" className="stelina-menu-item-title">
              Hot Sale
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link
              title="Accessories"
              href="#"
              className="stelina-menu-item-title"
            >
              Accessories
            </Link>
            <span className="toggle-submenu" />
            <ul role="menu" className=" submenu">
              <li className="menu-item">
                <a title="Living" href="#" className="stelina-item-title">
                  Living
                </a>
              </li>
              <li className="menu-item">
                <Link title="Accents" href="#" className="stelina-item-title">
                  Accents
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  title="New Arrivals"
                  href="#"
                  className="stelina-item-title"
                >
                  New Arrivals
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  title="Accessories"
                  href="#"
                  className="stelina-item-title"
                >
                  Accessories
                </Link>
              </li>
              <li className="menu-item">
                <Link title="Bedroom" href="#" className="stelina-item-title">
                  Bedroom
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link title="Accents" href="#" className="stelina-menu-item-title">
              Accents
            </Link>
          </li>
          <li className="menu-item">
            <Link title="Tables" href="#" className="stelina-menu-item-title">
              Tables
            </Link>
          </li>
          <li className="menu-item">
            <Link title="Dining" href="#" className="stelina-menu-item-title">
              Dining
            </Link>
          </li>
          <li className="menu-item">
            <Link title="Lighting" href="#" className="stelina-menu-item-title">
              Lighting
            </Link>
          </li>
          <li className="menu-item">
            <Link title="Office" href="#" className="stelina-menu-item-title">
              Office
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VerticalMenu;
