import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../product/ProductItem';

function ProductTab(props) {
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
        <>
            <div className="stelina-tabs product-tab  default rows-space-40">
                <div className="container">

                    <div className="stelina-product">
                        <ul className="row list-products auto-clear equal-container product-grid">

                            {products.map((product, key) => (
                                <ProductItem key={key} product={product} />
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductTab;