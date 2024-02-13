import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import testimonialsData from "../data/testimomials";
import useFetchCSVData from "../data/externalDB/fetchData.js";

const TestimonialsSection = () => {
  const { csvData, loading, error } = useFetchCSVData(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvtHuIHiy8QhygNdJZv_8s5bAga1OGFNqb5ny2qv5505uKipkxsf6hJ_Nd6p8bXXT9L1bqVwz5lKu8/pub?gid=675027668&single=true&output=csv"
  );

  console.log(csvData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          },
        }}
      >
        {csvData
          .filter((item) => item.showUser === "show")
          .map((item) => (
            <div className="item" key={item.id}>
              <i className="fa-solid fa-quote-left"></i>
              <h3>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} />
              <div className="social-box">
                {item.socialLinkFace === "yes" && (
                  <a target="_blank" rel="noreferrer" href={item.socialLink1}>
                    <i className="fab fa-facebook-f"></i>{" "}
                  </a>
                )}
                {item.socialLinkInsta === "yes" && (
                  <a target="_blank" rel="noreferrer" href={item.socialLink2}>
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                )}
              </div>
              <p>{item.content}</p>
              <div className="stars">
                {[...Array(Number(item.stars))].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          ))}
      </OwlCarousel>
    </section>
  );
};

export default TestimonialsSection;
