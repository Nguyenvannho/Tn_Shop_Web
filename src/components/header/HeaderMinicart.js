import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderMinicart(props) {
  const cartClassOrg =
    "block-minicart stelina-mini-cart block-header stelina-dropdown";
  const [cartOpen, setCartOpen] = useState(false);
  const [cartClass, setCartClass] = useState(cartClassOrg);
  const handleClick = () => {
    const checkCartOpen = !cartOpen;
    setCartOpen(checkCartOpen);
    if (checkCartOpen) {
      setCartClass(cartClassOrg + " open");
    } else {
      setCartClass(cartClassOrg);
    }
  };
  return (
    <div className={cartClass}>
      <Link className="shopcart-icon" onClick={handleClick}>
        Cart
        <span className="count">0</span>
      </Link>
      <div className="shopcart-description stelina-submenu">
        <div className="content-wrap">
          <h3 className="title">Shopping Cart</h3>
          <ul className="minicart-items">
            <li className="product-cart mini_cart_item">
              <a href="#" className="product-media">
                <img src="images/item-minicart-1.jpg" alt="img" />
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
          </ul>
          <div className="subtotal">
            <span className="total-title">Subtotal: </span>
            <span className="total-price">
              <span className="Price-amount">$135</span>
            </span>
          </div>
          <div className="actions">
            <Link
              to="/productdetail/1"
              className="button button-checkout small-button"
            >
              <span>Xem sản phẩm</span>
            </Link>
            <Link
              to="/checkout"
              className="button button-checkout small-button active"
            >
              <span>Thanh toán</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMinicart;
