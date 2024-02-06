import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import testimonialsData from "../data/testimomials";

const Carousel = () => {

  return (
    <section className="testimonials" id="testimonials">
    <h2 className="font-pushster">Testimonials</h2>
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      autoplay={true}
      nav
      items={3}
      dots={true}
      responsive={{
        0: {
          items: 1,
          nav: false,
        },
        769: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        }
      }}
    >
      {testimonialsData.map((item) => (
        <div className="item" key={item.id}>
          <i className="fa-solid fa-quote-left"></i>
          <h3>{item.name}</h3>
          <img src={item.imageUrl} alt={item.name} />
          <div className="social-box">
            {item.social.map((socialItem) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={socialItem.id}
                href={socialItem.linkURL}
              >
                <i className={socialItem.socialIcon}></i>
              </a>
            ))}
          </div>
          <p>{item.content}</p>
          <div className="stars">
            {item.stars.map((icon) => (
              <i key={icon.id} className={icon.star}></i>
            ))}
          </div>
        </div>
      ))}
    </OwlCarousel>
  </section>
  
  );
};

export default Carousel;
