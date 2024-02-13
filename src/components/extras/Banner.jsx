import PropTypes from "prop-types";

function Banner( {bannerBg} ) {
    return (
    <div className={`banner ${bannerBg}`}>
        <div className="overlay"></div>
    </div>
    )
}

Banner.propTypes = {
    bannerBg: PropTypes.string.isRequired,
   }

export default Banner;