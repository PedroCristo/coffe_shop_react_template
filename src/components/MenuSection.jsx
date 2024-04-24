// import menuData from "../data/menu";
import useFetchCSVData from "../data/externalDB/fetchData.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatCurrency } from "./utilities/formatCurrency.js";

function MenuSection({ homePage, menuPage, btnTitle, btnLink }) {
  const { csvData, loading, error } = useFetchCSVData('https://docs.google.com/spreadsheets/d/e/2PACX-1vRvtHuIHiy8QhygNdJZv_8s5bAga1OGFNqb5ny2qv5505uKipkxsf6hJ_Nd6p8bXXT9L1bqVwz5lKu8/pub?output=csv');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If homePage is true, limit the number of products to 8
  const filteredData = homePage === true ? csvData.slice(0, 8) : csvData;

  return (
    <div className={`bg-menu ${menuPage}`} id="menu">
      <div className="overlay"></div>
      <div className="menu-box">
        <div className="menu-title">
          <section>Our Coffee Menu</section>
          <h2>Always is time for coffee</h2>
          <hr />
        </div>
        <div className="menu-flex">
          {filteredData.map((item) => (
            <div className="menu1" key={item.id}>
              <div className="small-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div>
                <h4>{item.name}</h4>
              </div>
              <div className="line"></div>
              <div>
                {item.oldPrice !== "" ? (
                  <div>
                    <h4 className="menu-promotion">{formatCurrency(item.oldPrice)}</h4>
                    <h4>{formatCurrency(item.price)}</h4>
                  </div>
                ) : (
                  <h4>{formatCurrency(item.price)}</h4>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="menu-link">
          <Link to={btnLink}>{btnTitle}</Link>
        </div>
      </div>
    </div>
  );
}

MenuSection.propTypes = {
  homePage: PropTypes.string.isRequired,
  menuPage: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default MenuSection;
