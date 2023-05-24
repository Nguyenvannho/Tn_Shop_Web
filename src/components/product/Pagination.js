import React from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
  const { pageData, setPage } = props;
  let pageNumbers = [];
  for (let i = 1; i <= pageData.last_page; i++) {
    pageNumbers.push(i);
  }
  if (pageData.total === 0) {
    return <></>;
  }

  return (
    <ul className="pagination clearfix style2">
      {pageData.page_numbers > 1 && (
        <li className="nav-link">
          <Link onClick={() => setPage(1)}>
            <i className="icon fa fa-angle-double-left" aria-hidden="true" />
          </Link>
        </li>
      )}
      {pageData.page_numbers > 1 && (
        <li className="nav-link">
          <Link onClick={() => setPage(pageData.page_numbers - 1)}>
            <i className="icon fa fa-angle-left" aria-hidden="true" />
          </Link>
        </li>
      )}
      {pageNumbers.map((pageNumber, key) => {
        const activeClass =
          pageData.page_numbers === pageNumber ? "current-page" : "";
        return (
          <li key={key} className={activeClass}>
            <Link
              onClick={() => setPage(pageNumber)}
              style={{
                backgroundColor: "#ab8e66",
                color: "#FFF",
                borderRadius: "50%",
                padding: "5px 10px"
              }}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      {pageData.page_numbers < pageData.last_page && (
        <li className="last">
          <Link onClick={() => setPage(pageData.page_numbers + 1)}>
            <i className="icon fa fa-angle-right" aria-hidden="true" />
          </Link>
        </li>
      )}
      {pageData.page_numbers < pageData.last_page && (
        <li className="last">
          <Link onClick={() => setPage(pageData.last_page)}>
            <i className="icon fa fa-angle-double-right" aria-hidden="true" />
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
