import React, { useEffect, useState } from "react";
import CartModel from "../models/CartModel";
import LayoutMaster from '../layouts/LayoutMaster';
import Swal from "sweetalert2";
import Breadcrumb from "../components/global/Breadcrumb";



function Cart(props) {

    useEffect(() => {

    }, []);

    function handleQuantityChange(productId, newQuantity) {

    }
    function handleDelete(id) {

    }
    const handleAddSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Xoá sản phẩm thành công',
            text: 'Dữ liệu đã xoá vĩnh viễn ...!!!',
        });
    };

    return (
        <LayoutMaster>
            <div className="site-content">
                <main className="site-main  main-container no-sidebar">
                    <div className="container">
                        <Breadcrumb page_title="Cart" />
                        <div className="row">
                            <div className="main-content-cart main-content col-sm-12">
                                <h3 className="custom_blog_title">Shopping Cart</h3>
                                <div className="page-main-content">
                                    <div className="shoppingcart-content">
                                        <form action="shoppingcart.html" className="cart-form">
                                            <table className="shop_table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-id">STT</th>
                                                        <th className="product-image">Hình Ảnh</th>
                                                        <th className="product-name">Sản Phẩm</th>
                                                        <th className="product-price"> Giá</th>
                                                        <th className="product-quantity">Số Lượng</th>
                                                        <th className="product-quantity">Xoá Sản Phẩm</th>
                                                    </tr>

                                                </thead>
                                                <tbody>

                                                    {/* <tr key={product.id}>
                                                        <th>{product.id}</th>
                                                        <th>
                                                            {" "}
                                                            <img
                                                                className="mini-img"
                                                                src={`${product.image}`}
                                                                alt="img"
                                                            />
                                                        </th>
                                                        <th>{product.name}</th>
                                                        <th>{product.price.toLocaleString('vi-VN')}.VNĐ</th>
                                                        <a href="#">
                                                            <img
                                                                src="/images/cart-item-2.jpg"
                                                                alt="img"
                                                                className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                                            />
                                                        </a>

                                                        <th>
                                                            <input
                                                                type="number"
                                                                name="qty"
                                                                id={`quantity-${product.id}`}
                                                                value={product.quantity}
                                                                min="1"
                                                                onChange={(e) =>
                                                                    handleQuantityChange(product.id, e.target.value)
                                                                }
                                                            />
                                                        </th>

                                                        <th>
                                                            <button type="button" onClick={() => handleDelete(product.id)}>Xoá</button>
                                                        </th>


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
                                                    </tr> */}
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