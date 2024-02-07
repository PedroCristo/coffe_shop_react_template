import React, { useState } from "react";
import headerNavigationData from "../data/headerNavigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toglleCloseNavbar = () => {
    setIsOpen(false);
  };
  return (
    <header>
      <div className="logo">
        <img src="images/utilities_images/logo.png" alt="Logo" />
      </div>
      <nav className={`navigation ${isOpen ? "show" : ""}`}>
        {headerNavigationData.map((item) => (
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

export default Header;
