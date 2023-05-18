import React from 'react';

function ProductItem(props) {
    const { product } = props;
    return (
        <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
            <div className="product-inner equal-element">
                <div className="product-top">
                    <div className="flash">
                        <span className="onnew">
                            <span className="text">new</span>
                        </span>
                    </div>
                </div>
                <div className="product-thumb">
                    <div className="thumb-inner">
                        <a href="#">
                            <img src={product.image} alt="img" />
                        </a>
                        <div className="thumb-group">
                            <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                    <a href="#">Add to Wishlist</a>
                                </div>
                            </div>
                            <a href="#" className="button quick-wiew-button">
                                Quick View
                            </a>
                            <div className="loop-form-add-to-cart">
                                <button className="single_add_to_cart_button button">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <h5 className="product-name product_title">
                        <a href="#">{product.name}</a>
                    </h5>
                    <div className="group-info">
                        <div className="stars-rating">
                            <div className="star-rating">
                                <span className="star-3" />
                            </div>
                            <div className="count-star">(3)</div>
                        </div>
                        <div className="price">
                           {product.price_format} VNĐ
                        </div>

                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProductItem;