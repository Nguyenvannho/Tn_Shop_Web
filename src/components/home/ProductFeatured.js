import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CategoryModel from "../../models/CategoryModel";
import { Link } from "react-router-dom";

function ProductFeatured(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryModel.getAll()
      .then((res) => {
        setCategories(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  var settings = {
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
  };
  return (
    <>
      <div className="stelina-product produc-featured product-featured rows-space-65">
        <div className="container">
          <h3 className="custommenu-title-blog">Sản phẩm nổi bật</h3>
          <Slider
            className="owl-products owl-slick equal-container nav-center"
            {...settings}
          >
            {/* {categories.map((category, key) => (
              <div className="product-item style-5">
                <div className="product-inner equal-element">
                  <div className="product-thumb">
                    <div className="thumb-inner">
                      <Link to="#">
                        <img src="/images/product-item-17.jpg" alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5 className="product-name product_title">
                      <Link to="#">{category.name}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))} */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductFeatured;
