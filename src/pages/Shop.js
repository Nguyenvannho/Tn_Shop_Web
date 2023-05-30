import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutMaster from "../layouts/LayoutMaster";
import ProductItem from "../components/product/ProductItem";
import Pagination from "../components/product/Pagination";
import Breadcrumb from "../components/global/Breadcrumb";
import TopControl from "../components/product/TopControl";
import ProductModel from "../models/ProductModel";
import { useSelector } from "react-redux";

function Shop(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});
  const searchValue = useSelector((state) => state.search); // []
 


  useEffect(() => {
    ProductModel.getAll(page,searchValue)
      .then((res) => {
        setProducts(res.data.data);
        setPageData(res.data.meta);
      })
      .catch((err) => {
        throw err;
      });
  }, [page,searchValue]);

  return (
    <LayoutMaster>
      <>
        <Breadcrumb page_title="Tất cả sản phẩm" />
        <div className="row">
          <div className="content-area shop-grid-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="site-main">
              <h3 className="custom_blog_title">Tất cả sản phẩm</h3>
              <TopControl />
              <ul className="row list-products auto-clear equal-container product-grid">
                {products.map((product, key) => (
                  <ProductItem key={key} product={product} />
                ))}
              </ul>
              <Pagination pageData={pageData} setPage={setPage} />
            </div>
          </div>
        </div>
      </>
    </LayoutMaster>
  );
}

export default Shop;
