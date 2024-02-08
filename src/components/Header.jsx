import React, { useState } from "react";
import PropTypes from "prop-types";
import headerNavigationData from "../data/headerNavigation";

function Header({ homePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toglleCloseNavbar = () => {
    setIsOpen(false);
  };

  // Filter the headerData to show only the first item if homePage is not true
  const filteredHeaderData = homePage ? headerNavigationData : [headerNavigationData[0]];
  return (
    <header>
      <div className="logo">
        <a href="/"><img src="images/utilities_images/logo.png" alt="Logo" /></a>
      </div>
      <nav className={`navigation ${isOpen ? "show" : ""}`}>
        {filteredHeaderData.map((item) => (
          <li key={item.id}>
            <a href={item.linkUrl} onClick={toglleCloseNavbar}>
              {item.name}
            </a>
          </li>
        ))}
      </nav>
      <div className="bars" onClick={toggleNavbar}>
        <img src="images/utilities_images/menu.png" alt="" className={`bar ${isOpen ? "image-rotate" : ""}`} />
      </div>
    </header>
  );
}

Header.propTypes = {
  homePage: PropTypes.string.isRequired,
 }
 

export default Header;
