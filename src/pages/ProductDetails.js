import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../includes/Header";
import ProductModel from "../models/ProductModel";
import LayoutMaster from "../layouts/LayoutMaster";
import Breadcrumb from "../components/global/Breadcrumb";

function ProductDetail(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    ProductModel.find(id)
      .then((res) => {
        // console.log(res); // Xác nhận dữ liệu từ API đã được lấy về/
        setProduct(res.data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <LayoutMaster>
      <Breadcrumb page_title={product.name} />
      <div className="row">
        <div className="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div className="site-main">
            <div className="details-product">
              <div className="details-thumd">
                <div className="image-preview-container image-thick-box image_preview_container">
                  <img
                    id="img_zoom"
                    data-zoom-image="/images/details-item-1.jpg"
                    src={product.image}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="details-infor">
              <h1 className="product-title">{product.name}</h1>
              <div className="stars-rating">
                <div className="star-rating">
                  <span className="star-5" />
                </div>
                <div className="count-star">(7)</div>
              </div>
              <div className="availability">Tình trạng : còn hàng</div>
              <div className="price">
                <span>{product.price_format} VNĐ</span>
              </div>
              <div className="product-details-description">
                <ul>
                  <li>Thương hiệu</li>
                  <li>Imported</li>
                </ul>
              </div>
              <div className="variations">
                <div id="information" className="tab-panel">
                  <Link to="/cart" className="cart-button">
                    <span className="cart-icon">🛒</span>
                    <span className="cart-text">Thêm vào giỏ hàng</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-details-product">
            <ul className="tab-link">
              <li className="active">
                <a
                  data-toggle="tab"
                  aria-expanded="true"
                  href="#product-descriptions"
                >
                  Mô tả sản phẩm :
                </a>
              </li>
            </ul>
            <div className="tab-container">
              <div id="product-descriptions" className="tab-panel active">
                <p>{product.description}</p>
              </div>
              <div id="information" className="tab-panel">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Size</td>
                      <td> XS / S / M / L</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>White/ Black/ Teal/ Brown</td>
                    </tr>
                    <tr>
                      <td>Properties</td>
                      <td>Colorful Dress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="reviews" className="tab-panel">
                <div className="reviews-tab">
                  <div className="comments">
                    <h2 className="reviews-title">
                      1 review for
                      <span>Glorious Eau</span>
                    </h2>
                    <ol className="commentlist">
                      <li className="conment">
                        <div className="conment-container">
                          <a href="#" className="avatar">
                            <img src="/images/avartar.png" alt="img" />
                          </a>
                          <div className="comment-text">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-5" />
                              </div>
                              <div className="count-star">(1)</div>
                            </div>
                            <p className="meta">
                              <strong className="author">Cobus Bester</strong>
                              <span>-</span>
                              <span className="time">June 7, 2013</span>
                            </p>
                            <div className="description">
                              <p>
                                Simple and effective design. One of my
                                favorites.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="review_form_wrapper">
                    <div className="review_form">
                      <div className="comment-respond">
                        <span className="comment-reply-title">
                          Add a review{" "}
                        </span>
                        <form className="comment-form-review">
                          <p className="comment-notes">
                            <span className="email-notes">
                              Your email address will not be published.
                            </span>
                            Required fields are marked
                            <span className="required">*</span>
                          </p>
                          <div className="comment-form-rating">
                            <label>Your rating</label>
                            <p className="stars">
                              <span>
                                <a className="star-1" href="#" />
                                <a className="star-2" href="#" />
                                <a className="star-3" href="#" />
                                <a className="star-4" href="#" />
                                <a className="star-5" href="#" />
                              </span>
                            </p>
                          </div>
                          <p className="comment-form-comment">
                            <label>
                              Your review
                              <span className="required">*</span>
                            </label>
                            <textarea
                              title="review"
                              id="comment"
                              name="comment"
                              cols={45}
                              rows={8}
                              defaultValue={""}
                            />
                          </p>
                          <p className="comment-form-author">
                            <label>
                              Name
                              <span className="">*</span>
                            </label>
                            <input
                              title="author"
                              id="author"
                              name="author"
                              type="text"
                              defaultValue=""
                            />
                          </p>
                          <p className="comment-form-email">
                            <label>
                              Email
                              <span className="">*</span>
                            </label>
                            <input
                              title="email"
                              id="email"
                              name="email"
                              type="email"
                              defaultValue=""
                            />
                          </p>
                          <p className="form-submit">
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              className="submit"
                              defaultValue="Submit"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMaster>
  );
}
export default ProductDetail;
