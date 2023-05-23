import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../includes/Header";
import ProductModel from "../models/ProductModel";
import LayoutMaster from "../layouts/LayoutMaster";
import Breadcrumb from "../components/global/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";

function ProductDetail(props) {
    const cart = useSelector(state => state.cart);//[]
    const dispatch = useDispatch();
    const { id } = useParams();
    const [count,setCount] = useState(1)
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


    const handleAddToCart = () =>{
        let item = { 
            product_id: id, 
            quantity: count,
            product: product
        };
        let update = false;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if(element.product_id == id){
                update = true;
                cart[index].quantity =  cart[index].quantity + count
            }
        }
        if(update) {
            var newCart = [...cart]
        }else {
            var newCart = [...cart, item]
        }
        localStorage.setItem('cart',JSON.stringify(newCart))
        dispatch({ type: SET_CART, payload: newCart });

    }

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
                              <div className="count-star">(1)</div>
                            </div>

                            <div className="group-button">

                                <div className="quantity-add-to-cart">
                                    <div className="quantity">
                                        <div className="control">
                                            <a className="btn-number qtyminus quantity-minus" 
                                                onClick={() => setCount(count-1)}>
                                                -
                                            </a>
                                            <input
                                                type="text"
                                                value={count}
                                                className="input-qty qty"
                                            />
                                            <a onClick={() => setCount(count+1)} className="btn-number qtyplus quantity-plus">
                                                +
                                            </a>
                                        </div>
                                    </div>
                                    <button onClick={handleAddToCart} className="single_add_to_cart_button button">Add to cart</button>
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
