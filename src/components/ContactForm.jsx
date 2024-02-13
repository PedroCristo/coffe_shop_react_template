function ContactForm() {
  return (
    <div className="contact-form" id="contact">
          <h2 className="font-pushster">Contact Us</h2>
      <div className="row">
        <div className="col">
          <form action="">
            <label required htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" />

            <label required htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" />

            <label required htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
        <div className="col">
          <h3>Reach out to us.</h3>
          <p>
            We value your feedback and input! Whether you have feedback on our
            services, inquiries about our offerings, suggestions for
            improvement, or partnership opportunities, we're eager to hear from
            you. Don't hesitate to reach out with any questions, concerns, or
            messages. Your input helps us improve and grow
          </p>
          <img src="images/utilities_images/girls_and_coffee.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
