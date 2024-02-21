import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-details">
          <h2 className="header underline">Contact Us</h2>
          <div>
            <div className="email">
              <i className="bx bx-envelope"></i>
              <p>
                <span className="bold underline">email: </span>
                &nbsp;info@asendprep.com
              </p>
            </div>
            <div className="location">
              <i className="bx bx-location-plus"></i>
              <div>
                <p className="bold underline">Location</p>
                <p>
                  <span className="bold">Buea</span>: Mountain University
                </p>
                <p>
                  <span className="bold">Limbe</span>: Espoire College
                </p>
                <p>
                  <span className="bold">Kumba</span>: Diligent Bilingual School
                </p>
              </div>
            </div>
            <div className="phone">
              <i className="bx bx-phone-call"></i>
              <div>
                <p className="bold underline">Call For Inquiries:</p>
                <p>
                  <span className="bold">Kumba:</span> 237-677-789-987 or
                  675-453-355
                </p>
                <p>
                  <span className="bold">Buea:</span> 237-677-789-987 or
                  675-453-355
                </p>
                <p>
                  <span className="bold">Limbe:</span> 237-677-789-987 or
                  675-453-355
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>OR</h2>
          <p className="bold">Leave us a message</p>
          <form action="https://formspree.io/f/xvojwyga" method="post">
            <input type="text" name="Name" placeholder="Name" required />
            <input type="text" name="email" placeholder="email (optional)" />
            <input
              type="text"
              name="Phone Number"
              placeholder="Phone Number"
              required
              id="numberInput"
            />
            <input type="text" name="subject" placeholder="subject" required />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
