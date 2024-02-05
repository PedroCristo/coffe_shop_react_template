import SocialData from "../data/social";

function Footer() {
  return (
    <div className="footer" id="contact">
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
        </div>
        <div className="footer1">
          <h3>contact info</h3>
          <div className="location">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <a href="#">our location</a>
            <section>egypt, el gharbia, kz</section>
          </div>
          <div className="location">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            <a href="#">our phone</a>
            <section>+015-544-084-94</section>
            <section>+015-544-084-94</section>
          </div>
        </div>
        <div className="footer1">
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
    </div>
  );
}

export default Footer;
