import React, { useEffect, useState } from "react";
import CartModel from "../models/CartModel";
import LayoutMaster from "../layouts/LayoutMaster";
import Swal from "sweetalert2";



function Cart(props) {
  const image = "http://127.0.0.1:8000/";
  const [products, setProducts] = useState([]);
  const totalAll = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const totalCount = products.reduce((count, product) => {
    return count + product.quantity;
  }, 0);

  useEffect(() => {
    CartModel.getAll()
      .then((res) => {
        setProducts(res);
        // console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleQty = (e, key) => {
    const updatedProducts = [...products];
    updatedProducts[key].quantity = parseInt(e.target.value);
    setProducts(updatedProducts);
  };
  const handleRemove = (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        CartModel.remove(id)
          .then((res) => {
            setProducts(res);
            console.log(res);
          })
          .catch((err) => {
            throw err;
          });
        Swal.fire({
          title: 'Sản phẩm đã được xóa khỏi giỏ hàng',
          icon: 'success',
        });
      }
    });
  };
    return (
        <LayoutMaster>

        <div className="site-content">
            <main className="site-main  main-container no-sidebar">
                <div className="container">
                    <div className="breadcrumb-trail breadcrumbs">
                        <ul className="trail-items breadcrumb">
                            <li className="trail-item trail-begin">
                                <a href="">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="trail-item trail-end active">
                                <span>Shopping Cart</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="main-content-cart main-content col-sm-12">
                            <h3 className="custom_blog_title">Shopping Cart</h3>
                            <div className="page-main-content">
                                <div className="shoppingcart-content">
                                    <form action="shoppingcart.html" className="cart-form">
                                        <table className="shop_table">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove" />
                                                    <th className="product-thumbnail" />
                                                    <th className="product-name" />
                                                    <th className="product-price" />
                                                    <th className="product-quantity" />
                                                    <th className="product-subtotal" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-remove">
                                                        <a href="#" className="remove" />
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img
                                                                src="/images/cart-item-2.jpg"
                                                                alt="img"
                                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href="#" className="title">
                                                            Mini swing dress
                                                        </a>
                                                        <span className="attributes-select attributes-color">
                                                            Black,
                                                        </span>
                                                        <span className="attributes-select attributes-size">
                                                            XXL
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity">
                                                            <div className="control">
                                                                <a
                                                                    className="btn-number qtyminus quantity-minus"
                                                                    href="#"
                                                                >
                                                                    -
                                                                </a>
                                                                <input
                                                                    type="text"
                                                                    data-step={1}
                                                                    data-min={0}
                                                                    defaultValue={1}
                                                                    title="Qty"
                                                                    className="input-qty qty"
                                                                    size={4}
                                                                />
                                                                <a
                                                                    href="#"
                                                                    className="btn-number qtyplus quantity-plus"
                                                                >
                                                                    +
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">
                                                                $
                                                            </span>
                                                            45
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-remove">
                                                        <a href="#" className="remove" />
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img
                                                                src="/images/cart-item-3.jpg"
                                                                alt="img"
                                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href="#" className="title">
                                                            Square neck top
                                                        </a>
                                                        <span className="attributes-select attributes-color">
                                                            White,
                                                        </span>
                                                        <span className="attributes-select attributes-size">
                                                            M
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity">
                                                            <div className="control">
                                                                <a
                                                                    className="btn-number qtyminus quantity-minus"
                                                                    href="#"
                                                                >
                                                                    -
                                                                </a>
                                                                <input
                                                                    type="text"
                                                                    data-step={1}
                                                                    data-min={0}
                                                                    defaultValue={1}
                                                                    title="Qty"
                                                                    className="input-qty qty"
                                                                    size={4}
                                                                />
                                                                <a
                                                                    href="#"
                                                                    className="btn-number qtyplus quantity-plus"
                                                                >
                                                                    +
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">
                                                                $
                                                            </span>
                                                            45
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-remove">
                                                        <a href="#" className="remove" />
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img
                                                                src="/images/cart-item-1.jpg"
                                                                alt="img"
                                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href="#" className="title">
                                                            Melody Eau
                                                        </a>
                                                        <span className="attributes-select attributes-color">
                                                            Brown,
                                                        </span>
                                                        <span className="attributes-select attributes-size">
                                                            XS
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity">
                                                            <div className="control">
                                                                <a
                                                                    className="btn-number qtyminus quantity-minus"
                                                                    href="#"
                                                                >
                                                                    -
                                                                </a>
                                                                <input
                                                                    type="text"
                                                                    data-step={1}
                                                                    data-min={0}
                                                                    defaultValue={1}
                                                                    title="Qty"
                                                                    className="input-qty qty"
                                                                    size={4}
                                                                />
                                                                <a
                                                                    href="#"
                                                                    className="btn-number qtyplus quantity-plus"
                                                                >
                                                                    +
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">
                                                                $
                                                            </span>
                                                            45
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="actions">
                                                        <div className="coupon">
                                                            <label className="coupon_code">Coupon Code:</label>
                                                            <input
                                                                type="text"
                                                                className="input-text"
                                                                placeholder="Promotion code here"
                                                            />
                                                            <a href="#" className="button" />
                                                        </div>
                                                        <div className="order-total">
                                                            <span className="title">Total Price:</span>
                                                            <span className="total-price">$95</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="control-cart">
                                        <button className="button btn-continue-shopping">
                                            Continue Shopping
                                        </button>
                                        <button className="button btn-cart-to-checkout">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </LayoutMaster>

    );
}

export default Cart;