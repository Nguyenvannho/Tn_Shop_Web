import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../../redux/action";

function HeaderMinicart(props) {
  const cartClassOrg =
    "block-minicart stelina-mini-cart block-header stelina-dropdown";
  const [cartOpen, setCartOpen] = useState(false);
  const [cartClass, setCartClass] = useState(cartClassOrg);
  const cart = useSelector((state) => state.cart); //[]
  const dispatch = useDispatch();
  const handleClick = () => {
    const checkCartOpen = !cartOpen;
    setCartOpen(checkCartOpen);
    if (checkCartOpen) {
      setCartClass(cartClassOrg + " open");
    } else {
      setCartClass(cartClassOrg);
    }
  };
  const handleRemove = (index) => {
    alert(index);
    let newCart = [...cart];
    newCart = newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch({ type: SET_CART, payload: newCart });
  };
  return (
    <div className={cartClass}>
      <Link className="shopcart-icon" onClick={handleClick}>
        Cart
        <span className="count">{cart.length}</span>
      </Link>
      <div className="shopcart-description stelina-submenu">
        <div className="content-wrap">
          <h3 className="title">Shopping Cart</h3>
          <ul className="minicart-items">
            {cart.map((cart_item, key) => (
              <li key={key} className="product-cart mini_cart_item">
                <Link to="#" className="product-media">
                  <img src={cart_item.product.image} alt="img" />
                </Link>
                <div className="product-details">
                  <h5 className="product-name">
                    <h5 className="product-name">
                      <Link to="#">{cart_item.product.name}</Link>
                    </h5>
                  </h5>

                  <span className="product-price">
                    <span className="price">
                      <span>
                        {cart_item.product.price * cart_item.quantity}
                      </span>
                    </span>
                  </span>
                  <span className="product-quantity">
                    (x{cart_item.quantity})
                  </span>
                  <div className="product-remove">
                    <Link onClick={() => handleRemove(key)}>
                      <i className="fa fa-trash-o" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <span className="total-title">Subtotal: </span>
            <span className="total-price">
              <span className="Price-amount">$135</span>
            </span>
          </div>
          <div className="actions">
            <Link
              className="button button-viewcart custom-link"
              to="/cart"
            >
              <span>Mua ngay</span>
            </Link>
            <Link to="/checkout" className="button button-checkout custom-link">
              <span>Thanh toán</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMinicart;
