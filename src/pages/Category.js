import React, { useEffect, useState } from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Breadcrumb from '../components/global/Breadcrumb';
import ProductItem from '../components/product/ProductItem';
import TopControl from '../components/product/TopControl';
import { useParams } from 'react-router-dom';
import CategoryModel from '../models/CategoryModel';



function Category(props) {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        CategoryModel.getProducts(id)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, [id]);
    return (    
   <LayoutMaster>
    <Breadcrumb page_title="Shop" />
    <div className="row">
        <div className="content-area shop-grid-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="site-main">
                <h3 className="custom_blog_title">Trang sản phẩm</h3>
                <TopControl />
                <ul className="row list-products auto-clear equal-container product-grid">
                    {products.map((product, key) => (
                        <ProductItem key={key} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </LayoutMaster>
        
    );
}

export default Category;