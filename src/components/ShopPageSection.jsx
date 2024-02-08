import React, { useState } from 'react';
import PropTypes from "prop-types";
import shopProductsData from '../data/shopProducts'; 
function ShopPageSection({ title }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all' ? shopProductsData : shopProductsData.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-shop" id="shop">
      <div className="shop-links">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="links">
          <li onClick={() => handleCategoryChange('all')} data-filter="all">all</li>
          <li onClick={() => handleCategoryChange('coffee')} data-filter=".coffee">coffee</li>
          <li onClick={() => handleCategoryChange('machines')} data-filter=".machines">machines</li>
          <li onClick={() => handleCategoryChange('cups')} data-filter=".cups">Cups</li>
        </div>
      </div>
      <div className="shop-flex consts">
        {filteredProducts.map((product) => {
          const discountPercentage = ((product.oldPrice - product.price) / product.oldPrice) * 100;

          return (
            <div className={`shop1 mix ${product.category}`} key={product.id}>
              <div className="shop-image">
                <img src={product.imageUrl} alt={product.name} />
                {discountPercentage === 0 ? (
                  <div className="price red">Promotion not available</div>
                ) : (
                  <div className="price green">-{discountPercentage.toFixed(0)}%</div>
                )}
                <div className="social">
                  {product.social.map((icon) => (
                    <a key={icon.id} href={icon.linkURL}>
                      <i className={icon.socialIcon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <h2>{product.name}</h2>
              <div className="stars">
                {product.stars.map((icon) => (
                  <i key={icon.id} className={icon.star}></i>
                ))}
              </div>
              <article>€{product.price.toFixed(2)}</article>
              {product.price === product.oldPrice ? (
                <span></span>
              ) : (
                <span>€{product.oldPrice.toFixed(2)}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="menu-link">
        <a href="/">Go to the home page</a>
      </div>
    </div>
  );
}

ShopPageSection.propTypes = {
 title: PropTypes.string.isRequired,
}

export default ShopPageSection;