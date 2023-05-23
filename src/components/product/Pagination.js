import React from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
    return (
        <div className="pagination clearfix style2">
            <div className="nav-link">
                <Link href="#" className="page-numbers">
                    <i className="icon fa fa-angle-left" aria-hidden="true" />
                </Link>
                <Link href="#" className="page-numbers">
                    1
                </Link>
                <Link href="#" className="page-numbers">
                    2
                </Link>
                <Link href="#" className="page-numbers current">
                    3
                </Link>
                <Link href="#" className="page-numbers">
                    <i className="icon fa fa-angle-right" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}

export default Pagination;