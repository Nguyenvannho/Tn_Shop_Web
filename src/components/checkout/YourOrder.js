import React from 'react';

function YourOrder(props) {
    return (
        <div className="row-col-2 row-col">
        <div className="your-order">
            <h3 className="title-form">Đơn Hàng Của Tôi</h3>
            <ul className="list-product-order">
                <li className="product-item-order">
                    <div className="product-thumb">
                        <a href="#">
                            <img src="/images/item-order1.jpg" alt="img" />
                        </a>
                    </div>
                    <div className="product-order-inner">
                        <h5 className="product-name">
                            <a href="#">Nước Hoa Nam Gucci Guilty Love Edition For Men EDT 90ml</a>
                        </h5>
                     
                        <div className="price">
                            $45
                            <span className="count">x1</span>
                        </div>
                    </div>
                </li>
                <li className="product-item-order">
                    <div className="product-thumb">
                        <a href="#">
                            <img src="/images/item-order2.jpg" alt="img" />
                        </a>
                    </div>
                    <div className="product-order-inner">
                        <h5 className="product-name">
                            <a href="#">Nước Hoa Nam Jean Paul Gaultier Le Male Aviator EDT 125ml</a>
                        </h5>
                      
                        <div className="price">
                            $45
                            <span className="count">x1</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="order-total">
                <span className="title">Tổng Giá:</span>
                <span className="total-price">$95</span>
            </div>
        </div>
    </div>
    );
}

export default YourOrder;