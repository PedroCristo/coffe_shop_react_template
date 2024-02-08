import SocialData from "../data/social";
import MapSection from "./MapSection";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer" id="contact">
      <div className="overlay"></div>
      <div className="footer-flex">
        <div className="footer1">
          <div>
            <img src="images/utilities_images/logo.png" alt="Logo" />
          </div>
          <section>
            <p>
              Elevate your day with the perfect blend; where every cup tells a
              story of delight and comfort, enjoyed with friends
            </p>
          </section>
          <div className="footer-links">
            {SocialData.map((item) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={item.id}
                href={item.linkUrl}
              >
                <i className={item.icone}></i>
              </a>
            ))}
          </div>
          <div className="subscribe">
            <h3>subscribe</h3>
            <form action="">
              <input type="email" name="" id="" placeholder="your Email" />
              <a href="#">subscribe</a>
            </form>
            <div className="check">
              <input type="checkbox" name="" id="inpt" />
              <label htmlFor="inpt">
                I have read and agree to all terms & conditions.
              </label>
            </div>
          </div>
        </div>
        <div className="footer1">
          <h3>contact info</h3>
          <div className="location">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <a href="#">our location</a>
            <section>123 Main Street, Anytown, USA 12345</section>
          </div>
          <div className="location">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            <a href="#">our phone</a>
            <section>+555-123-4567</section>
            <section>+555-5838945</section>
          </div>
        </div>
        <div className="footer1">
          <MapSection />
        </div>
    </div>
        <div className="copyright">
        <hr />
          <p>
            All Rights Reserved <i className="fas fa-copyright"></i> {currentYear}
          </p>
        </div>
      </div>
  );
}

export default Footer;
