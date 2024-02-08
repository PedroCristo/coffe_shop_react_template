import SocialData from "../data/social";

function Navbar() {
  return (
    <div className="info">
      <div className="info-left">
        <section>
          <i className="fas fa-phone"></i> +123-456-789
        </section>
        <section>
          <i className="fas fa-envelope"></i> info@gmail.com
        </section>
      </div>
      <div className="info-right">
        <div className="social">
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
        <div className="info-link">
          <a href="/shop-page">shop now</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
