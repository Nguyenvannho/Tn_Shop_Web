import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryModel from "../../models/CategoryModel";

function VerticalMenu(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryModel.getAll()
      .then((res) => {
        setCategories(res.data);
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

  const menuActive = "vertical-wapper block-nav-categori";
  const menuShowUp = "block-content verticalmenu-content";
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClassActive, setMenuClassActive] = useState(menuActive);
  const [menuClassShowUp, setMenuClassShowUp] = useState(menuShowUp);
  const handleMenuClick = () => {
    const checkMenuOpen = !menuOpen;
    console.log(checkMenuOpen);
    setMenuOpen(checkMenuOpen);

    if (checkMenuOpen) {
      setMenuClassActive(menuActive + " active");
      setMenuClassShowUp(menuShowUp + " show-up");
    } else {
      setMenuClassActive(menuActive);
      setMenuClassShowUp(menuShowUp);
    }
  };
  return (
    <div className={menuClassActive}>
      <div className="block-title" id="123" onClick={handleMenuClick}>
        <span className="icon-bar">
          <span />
          <span />
          <span />
        </span>
        <span className="text">Danh Mục Sản Phẩm</span>
      </div>
      <div className={menuClassShowUp}>
        <ul className="stelina-nav-vertical vertical-menu stelina-clone-mobile-menu">
          {categories.map((category, key) => (
            <Link to={"/category/" + category.id}>
            <li className="menu-item">
              <a>{category.name}</a>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerticalMenu;
