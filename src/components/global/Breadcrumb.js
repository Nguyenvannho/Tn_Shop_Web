import React from 'react';
import { Link } from 'react-router-dom';


function Breadcrumb(props) {
    const {page_title} = props
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items breadcrumb">
                        <li className="trail-item trail-begin">
                            <Link to={'/'}>Trang chủ</Link>
                        </li>
                        <li className="trail-item trail-end active">{page_title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;