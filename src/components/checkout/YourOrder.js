import React, { useEffect, useState } from "react";
import ProductModel from "../../models/ProductModel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NumericFormat } from 'react-number-format';

function YourOrder(props) {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductModel.getAll()
      .then((res) => {
        setProducts(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    dispatch({
      type: 'SET_CART',
      payload: newCart
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="row-col-2 row-col">
      <div className="your-order">
        <h3 className="title-form">Đơn Hàng Của Tôi</h3>
        <ul className="list-product-order">
          {cart.map((cartItem, index) => {
            const product = products.find((p) => p.id === cartItem.product.id);
            if (product) {
              return (
                <li className="product-item-order" key={index}>
                  <div className="product-thumb">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-order-inner">
                    <h5 className="product-name">{product.name}</h5>
                    <div className="price">
                      <NumericFormat value={product.price} displayType="text" thousandSeparator={true} suffix=" VNĐ" />
                      <span className="count">x{cartItem.quantity}</span>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(index)}>Xóa</button>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <div className="order-total">
          <span className="title">Tổng Giá:</span>
          <span className="total-price">
            <NumericFormat value={totalPrice} displayType="text" thousandSeparator={true} suffix=" VNĐ" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default YourOrder;
