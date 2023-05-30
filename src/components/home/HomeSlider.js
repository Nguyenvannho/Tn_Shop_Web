import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";
function HomeSlider(props) {
    var settings = {
        "autoplay":true, 
        "autoplaySpeed":9000, 
        "arrows":false, 
        "dots":true, 
        "infinite":true, 
        "speed":1000, 
        "rows":1
    };
    return (
        <>
            <div className="home-slider-banner">
                <div className="container">
                    <div className="row10">
                        <div className="col-lg-8 silider-wrapp">
                            <div className="home-slider">
                                <Slider 
                                    className="slider-owl owl-slick equal-container nav-center"
                                    {...settings}
                                >
                                    <div className="slider-item style7">
                                        <div className="slider-inner equal-element">
                                            <div className="slider-infor">
                                                <h5 className="title-small">Giảm giá tới 40%!</h5>
                                                <h3 className="title-big">
                                                Xuân hè <br />
                                                Bộ sưu tập
                                                </h3>
                                                <div className="price">
                                                Giá mới:
                                                    <span className="number-price">270.000 VNĐ</span>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="button btn-shop-the-look bgroud-style"
                                                >
                                                   Mua ngay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item style8">
                                        <div className="slider-inner equal-element">
                                            <div className="slider-infor">
                                                <h5 className="title-small">Nước hoa Take A</h5>
                                                <h3 className="title-big">
                                                    Giảm tới 25% <br />
                                                    Đặt hàng ngay bây giờ
                                                </h3>
                                                <div className="price">
                                                Tiết kiệm giá:
                                                    <span className="number-price">170.000 VNĐ</span>
                                                </div>
                                                <a href="#" className="button btn-shop-product">
                                                   Mua ngay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item style9">
                                        <div className="slider-inner equal-element">
                                            <div className="slider-infor">
                                                <h5 className="title-small">Bộ sưu tập hay nhất của Stelina</h5>
                                                <h3 className="title-big">
                                                Một loạt các<br />
                                                Nước hoa
                                                </h3>
                                                <div className="price">
                                                Giá mới:
                                                    <span className="number-price">250.000 VNĐ</span>
                                                </div>
                                                <a href="#" className="button btn-chekout">
                                                    Mua ngay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider >
                            </div>
                        </div>
                        <div className="col-lg-4 banner-wrapp">
                            <div className="banner">
                                <div className="item-banner style7">
                                    <div className="inner">
                                        <div className="banner-content">
                                            <h3 className="title">
                                            Chọn của bạn <br />
                                            Mặt hàng
                                            </h3>
                                            <div className="description">
                                                Adipiscing elit curabitur senectus sem
                                            </div>
                                            <a href="#" className="button btn-lets-do-it">
                                             Mua ngay
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner">
                                <div className="item-banner style8">
                                    <div className="inner">
                                        <div className="banner-content">
                                            <h3 className="title">
                                            Tốt nhất
                                                <br />
                                            Sản phẩm
                                            </h3>
                                            <div className="description">
                                                Cras pulvinar loresum dolor conse
                                            </div>
                                            <span className="price">379.000 VNĐ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSlider;