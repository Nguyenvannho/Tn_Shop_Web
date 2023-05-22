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
                                                <h5 className="title-small">Sale up to 40% off!</h5>
                                                <h3 className="title-big">
                                                    Spring Summer <br />
                                                    Collection
                                                </h3>
                                                <div className="price">
                                                    New Price:
                                                    <span className="number-price">$270.00</span>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="button btn-shop-the-look bgroud-style"
                                                >
                                                    Shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item style8">
                                        <div className="slider-inner equal-element">
                                            <div className="slider-infor">
                                                <h5 className="title-small">Take A perfume</h5>
                                                <h3 className="title-big">
                                                    Up to 25% Off <br />
                                                    order now
                                                </h3>
                                                <div className="price">
                                                    Save Price:
                                                    <span className="number-price">$170.00</span>
                                                </div>
                                                <a href="#" className="button btn-shop-product">
                                                    Shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item style9">
                                        <div className="slider-inner equal-element">
                                            <div className="slider-infor">
                                                <h5 className="title-small">Stelina Best Collection</h5>
                                                <h3 className="title-big">
                                                    A range of <br />
                                                    perfume
                                                </h3>
                                                <div className="price">
                                                    New Price:
                                                    <span className="number-price">$250.00</span>
                                                </div>
                                                <a href="#" className="button btn-chekout">
                                                    Shop now
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
                                                Pick Your <br />
                                                Items
                                            </h3>
                                            <div className="description">
                                                Adipiscing elit curabitur senectus sem
                                            </div>
                                            <a href="#" className="button btn-lets-do-it">
                                                Shop now
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
                                                Best Of
                                                <br />
                                                Products
                                            </h3>
                                            <div className="description">
                                                Cras pulvinar loresum dolor conse
                                            </div>
                                            <span className="price">$379.00</span>
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