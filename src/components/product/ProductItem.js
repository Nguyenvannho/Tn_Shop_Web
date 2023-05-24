import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={'/productdetail/' + product.id}>
                            <img src={product.image} alt="img" />
                        </Link>
                    </div>
                </div>
                <div className="product-info">
                    <h5 className="product-name product_title">
                        <Link to={'/productdetail/' + product.id}>{product.name}</Link>
                    </h5>
                    <div className="group-info">
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