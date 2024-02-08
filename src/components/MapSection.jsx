function MapSection() {
  return (
    <div className="map">
        <h3>Our Localization</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d193684.50390626764!2d-73.88218918676417!3d40.66690945835831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c26650d5404947%3A0xec4fb213489f11f0!2sJohn%20F.%20Kennedy%20International%20Airport%20(JFK)%2C%20Queens%2C%20NY%2011430%2C%20United%20States!3m2!1d40.6446245!2d-73.7797035!5e0!3m2!1sen!2sie!4v1707388134707!5m2!1sen!2sie"
        width="100%"
        height="300px"
        frameBorder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        target="_blank"
      ></iframe>
    </div>
  );
}

export default MapSection;


