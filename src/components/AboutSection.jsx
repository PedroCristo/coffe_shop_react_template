function AboutSection() {
  return (
    <div className="bg-about" id="about">
      <div className="about-flex">
        <div className="about1">
          <div>
            <img src="/images/about_images/about2.jpg" alt="Coffe Shop" />
          </div>
          <div className="image-logo">
            <img src="pic/logo.png" alt="" />
          </div>
        </div>

        <div className="about1">
          <div>
            <img src="/images/about_images/about1.jpg" alt="Coffe Machine" />
          </div>
          <div className="about1-txt">
            <h3>
              opening hours & <br /> reservations
            </h3>
            <div className="txt-inside">
              <section>saturday - friday</section>
              <section>9.00am - 9.00pm</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
