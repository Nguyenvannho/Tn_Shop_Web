import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutMaster from '../layouts/LayoutMaster';
import ProductItem from '../components/product/ProductItem';
import Pagination from '../components/product/Pagination';
import Breadcrumb from '../components/global/Breadcrumb';
import TopControl from '../components/product/TopControl';

function Shop(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => {
                // console.log(res.data.data); // Kiểm tra định dạng dữ liệu trả về từ API
                setProducts(res.data.data); // Gán dữ liệu sản phẩm cho trạng thái products
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <LayoutMaster>
            <>
                <Breadcrumb />
                <div className="row">
                    <div className="content-area shop-grid-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="site-main">
                            <h3 className="custom_blog_title">Grid Products</h3>
                            <TopControl />
                            <ul className="row list-products auto-clear equal-container product-grid">
                                {products.map((product, key) => (
                                    <ProductItem key={key} product={product} />
                                ))}
                            </ul>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </>
        </LayoutMaster>
    );
}

export default Shop;
