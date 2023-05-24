import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../../redux/action";
import { NumericFormat } from 'react-number-format';

function HeaderMinicart(props) {
  
  const cartClassOrg =
    "block-minicart stelina-mini-cart block-header stelina-dropdown";
  const [cartOpen, setCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartClass, setCartClass] = useState(cartClassOrg);
  const cart = useSelector((state) => state.cart); // []
  const dispatch = useDispatch();
  const [isHoverEmpty, setIsHoverEmpty] = useState(false);

  useEffect(() => {
    let total = 0;
    cart.map((cartItem, index) => {
      total += cartItem.product.price * cartItem.quantity
    })
    setCartTotal(total)
  },[cart]);


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
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch({
      type:SET_CART,
      payload: newCart
    });
  };

  const handleHoverEmpty = (isHover) => {
    setIsHoverEmpty(isHover);
  };

  return (
    <div className={cartClass}>
      <Link
        className="shopcart-icon"
        onClick={handleClick}
        onMouseEnter={() => handleHoverEmpty(cart.length === 0)}
        onMouseLeave={() => handleHoverEmpty(false)}
      >
        Cart
        <span className="count">{cart.length}</span>
      </Link>
      <div className="shopcart-description stelina-submenu">
        <div className="content-wrap">
          <ul className="minicart-items">
            {cart.map((cartItem, index) => (
              <li key={index} className="product-cart mini_cart_item">
                <Link to="#" className="product-media">
                  <img width={50} src={cartItem.product.image} alt="img" />
                </Link>
                <div className="product-details">
                  <h5 className="product-name">
                    <Link to="#">{cartItem.product.name}</Link>
                  </h5>
                  <span className="product-price">
                    <span className="price">
                      <NumericFormat 
                            value={cartItem.product.price * cartItem.quantity} 
                            allowLeadingZeros thousandSeparator=","
                            displayType="text" 
                          /> VNĐ
                    </span>
                  </span>
                  <span className="product-quantity">
                    (x{cartItem.quantity})
                  </span>
                  <div className="product-remove">
                    <Link onClick={() => handleRemove(index)}>
                      <i className="fa fa-trash-o" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div className="subtotal">
              <span className="total-title">Tổng tiền: </span>
              <span className="total-price">
                <span className="Price-amount">
                <NumericFormat 
                            value={cartTotal} 
                            allowLeadingZeros thousandSeparator=","
                            displayType="text" 
                          />
                          </span>
              </span>
            </div>
          )}
          <div className="actions">
            {cart.length > 0 ? (
              <Link className="button custom-link" to="/cart">
                <span>Đi đến giỏ hàng</span>
              </Link>
            ) : (
              <div
                className="empty-cart-message"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {cart.length === 0 && isHoverEmpty && (
                  <h7 style={{ fontWeight: "bold", color: "red" }}>
                    Không có sản phẩm nào trong giỏ hàng
                  </h7>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMinicart;
