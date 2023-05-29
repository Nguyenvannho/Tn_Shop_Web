import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutMaster from "../layouts/LayoutMaster";
import Breadcrumb from "../components/global/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { SET_CART } from "../redux/action";
import { NumericFormat } from "react-number-format";
import UserModel from "../models/UserModel";

function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    setCartTotal(total);
  }, [cart]);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch({
      type: SET_CART,
      payload: newCart,
    });
    setIsRemoving(true);
    setAlertMessage("Sản phẩm đã được xóa khỏi giỏ hàng thành công!");
    setTimeout(() => {
      setIsRemoving(false);
      setAlertMessage("");
    }, 3000);
  };

  const handleQuantityChange = (e) => {
    const id = e.target.id;
    const qty = e.target.value;
    const newCart = [...cart];
    if (newCart[id]) {
      newCart[id].quantity = qty;
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch({
        type: SET_CART,
        payload: newCart,
      });
    }
  };
  const handleCheckout = () => {
    let user = UserModel.getCookie('user');
    user = user ? JSON.parse(user) : '';
  
    if (!user) {
      alert("Bạn cần đăng nhập để thanh toán đơn hàng của bạn !");
      navigate("/login");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({ type: SET_CART, payload: cart });
      navigate("/checkout");
    }
  };
  

  return (
    <LayoutMaster>
      <Breadcrumb page_title="Cart" />

      <div className="row">
        <div className="main-content-cart main-content col-sm-12">
          <h3 className="custom_blog_title">Giỏ hàng</h3>

          <div className="page-main-content">
            <div className="shoppingcart-content">
              {cart.length === 0 ? (
                <table className="cart-table">
                  <tbody>
                    <tr>
                      <td
                        colSpan={6}
                        style={{
                          textAlign: "center",
                          color: "#555",
                          fontWeight: "bold",
                        }}
                      >
                        Giỏ hàng trống, Nhấn vào
                        <Link
                          to="/shop"
                          style={{
                            color: "#007bff",
                            textDecoration: "underline",
                          }}
                        >
                          đây
                        </Link>
                        để tiếp tục mua hàng
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Sản phẩm</th>
                      <th>Giá tiền</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th>Thao tác</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((CartItem, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            width={50}
                            src={CartItem.product.image}
                            alt={CartItem.product.name}
                            className="product-image"
                          />
                        </td>
                        <td>{CartItem.product.name}</td>
                        <td>{CartItem.product.price_format} VNĐ</td>
                        <td width={100}>
                          <input
                            className="form-control"
                            min={1}
                            type="number"
                            id={index}
                            defaultValue={CartItem.quantity}
                            onChange={handleQuantityChange}
                          />
                        </td>
                        <td>
                          <NumericFormat
                            value={CartItem.product.price * CartItem.quantity}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                          />{" "}
                          VNĐ
                        </td>
                        <td>
                          {isRemoving && index === cart.length - 1 ? (
                            <span className="check-icon">
                              <FaCheck />
                            </span>
                          ) : (
                            <button
                              className="remove-button"
                              onClick={() => handleRemove(index)}
                            >
                              Xóa
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={6} style={{ textAlign: "right" }}>
                        <strong>Tổng tiền: </strong>
                        <NumericFormat
                          value={cartTotal}
                          allowLeadingZeros
                          thousandSeparator=","
                          displayType="text"
                        />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
              {cart.length > 0 && (
                <div className="control-cart">
                  <Link to="/shop" className="button btn-continue-shopping">
                    Quay lại trang shop
                  </Link>
                  <button
                    className="button btn-cart-to-checkout"
                    onClick={handleCheckout}
                  >
                    Đến nơi thanh toán
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {alertMessage && (
        <div
          className="alert-success"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D4EDDA",
            border: "1px solid #C3E6CB",
            borderRadius: "4px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <FaCheck style={{ color: "#155724", marginRight: "10px" }} />
          <span style={{ color: "#155724", fontWeight: "bold" }}>
            {alertMessage}
          </span>
        </div>
      )}
    </LayoutMaster>
  );
}

export default Cart;
