import { useState } from "react";
import PropTypes from "prop-types";
import headerNavigationData from "../data/headerNavigation";
import { Link } from "react-router-dom";
import ShopingCardButton from "./extras/ShoppingCardButton";

function Header({ homePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleCloseNavbar = () => { // Corrected function name
    setIsOpen(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle the state to show/hide the shopping cart
  };

  // Filter the headerData to show only the first item if homePage is not true
  const filteredHeaderData = homePage
    ? headerNavigationData
    : [headerNavigationData[0]];

  return (
    <header>
      <div>
        <a href="/">
          <img
            className="logo"
            src="images/utilities_images/logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <nav className={`navigation ${isOpen ? "show" : ""}`}>
        {filteredHeaderData.map((item) => (
          <li key={item.id}>
            <a href={item.linkUrl} onClick={toggleCloseNavbar}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <div className="dropdown">
            <button className="dropbtn">Pages</button>
            <div className="dropdown-content">
              <Link to="/menu-page">Full Menu</Link>
              <Link to="/shop-page">Shop</Link>
            </div>
          </div>
        </li>
        <ShopingCardButton toggleCart={toggleCart} toggleCloseNavbar={toggleCloseNavbar} /> {/* Corrected prop name */}
      </nav>

      <div className="bars" onClick={toggleNavbar}>
        <img
          src="images/utilities_images/menu.png"
          alt="Toggler Icon"
          className={`bar  ${isOpen ? "image-rotate" : ""}`}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  homePage: PropTypes.string.isRequired,
};

export default Header;
