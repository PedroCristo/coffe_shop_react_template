import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import shopProductsData from "../data/shopProducts";
import { Link } from "react-router-dom";
import { formatCurrency } from "./utilities/formatCurrency";
import { useShoppingCart } from "./context/ShoppingCartContext";

function ShopSection({ homePage, title, btnLink, btnTitle, id }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [randomProducts, setRandomProducts] = useState([]);
  const { increaseCartQuantity } = useShoppingCart();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLinkClick = () => {
    increaseCartQuantity(id); // Call the increaseCartQuantity function
  };

  useEffect(() => {
    // Filter products based on the selected category
    const filteredProducts =
      selectedCategory === "all"
        ? shopProductsData
        : shopProductsData.filter(
            (product) => product.category === selectedCategory
          );

    if (homePage) {
      // Shuffle the products array
      const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5);
      // Slice the first 8 products
      const slicedProducts = shuffledProducts.slice(0, 8);
      setRandomProducts(slicedProducts);
    } else {
      setRandomProducts(filteredProducts);
    }
  }, [selectedCategory, homePage]);

  return (
    <div className="bg-shop" id="shop">
      <div className="shop-links">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="links">
          <li onClick={() => handleCategoryChange("all")} data-filter="all">
            all
          </li>
          <li
            onClick={() => handleCategoryChange("coffee")}
            data-filter=".coffee"
          >
            coffee
          </li>
          <li
            onClick={() => handleCategoryChange("machines")}
            data-filter=".machines"
          >
            machines
          </li>
          <li onClick={() => handleCategoryChange("cups")} data-filter=".cups">
            Cups
          </li>
        </div>
      </div>
      <div className="shop-flex consts">
        {randomProducts.map((item) => {
          const discountPercentage =
            ((item.oldPrice - item.price) / item.oldPrice) * 100;

          return (
            <div className={`shop1 mix ${item.category}`} key={item.id}>
              <div className="shop-image">
                <img src={item.imageUrl} alt={item.name} />
                {discountPercentage === 0 ? (
                  <div className="price red">Promotion not available</div>
                ) : (
                  <div className="price green">
                    -{discountPercentage.toFixed(0)}%
                  </div>
                )}
                <div className="social">
                  {item.social.map((icon) => (
                    <a key={icon.id} href={icon.linkURL}>
                      <i className={icon.socialIcon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <h2>{item.name}</h2>
              <div className="stars">
                {item.stars.map((icon) => (
                  <i key={icon.id} className={icon.star}></i>
                ))}
              </div>
              <article>{formatCurrency(item.price)}</article>
              {item.price === item.oldPrice ? (
                <span></span>
              ) : (
                <span>{formatCurrency(item.oldPrice)}</span>
              )}
                <button className="btn ml-5" onClick={() => handleLinkClick(id)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
      <div className="menu-link">
        <Link to={btnLink}>{btnTitle}</Link>
      </div>
    </div>
  );
}

ShopSection.propTypes = {
  homePage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default ShopSection;
