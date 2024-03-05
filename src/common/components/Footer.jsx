import React from 'react';
import { Link } from 'react-router-dom';
// images
import logo from '../../assets/img/logo.png';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid-container">
          <div className="footer-grid-box">
            <Link to="/" aria-label="link to home page" className="logo">
              <img src={logo} alt="logo" />
              <h2>ASEND</h2>
            </Link>
            <form action="" className="flex-col">
              <h3>Subscribe To Our Newsletter</h3>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="newsletter-email"
                  required
                />
                <button
                  type="submit"
                  aria-label="submit newsletter"
                  className="btn"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <span>
              <b>Follow Us:</b>
            </span>
            <div className="social-links">
              <a
                href="/facebook.com"
                aria-label="link to asend facebook page"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="/youtube.com"
                aria-label="link to asend youtube page"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="/instagram.com"
                aria-label="link to asend instagram page"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="/whatsapp.me"
                aria-label="link to asend whatsapp page"
                target="_blank"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-grid-box links">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/" aria-label="link to asend home page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" aria-label="link to asend about page">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" aria-label="link to asend services page">
                  Services
                </Link>
              </li>
              <li>
                <Link to="concours" aria-label="link to asend concours page">
                  Concours
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-grid-box">
            <p>Concours</p>
            <ul>
              <li>
                <Link
                  to="concours/engineering"
                  aria-label="link to asend engineering concour page"
                >
                  Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="concours/medicine"
                  aria-label="link to asend medicine concour page"
                >
                  Medicine
                </Link>
              </li>
              <li>
                <Link
                  to="concours/agriculture"
                  aria-label="link to asend agric/vet concour page"
                >
                  Agric/Vet
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid-box contact">
            <p>Contact</p>
            <ul>
              <li>
                <i className="bx bxs-phone"></i>
                <p>
                  <b>Kumba:</b> 237-677-789-987 or 675-453-355 <br />
                  <b>Buea: </b>237-677-789-987 or 675-453-355
                  <br /> <b>Limbe:</b> 237-677-789-987 or 675-453-355
                </p>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <p>
                  <b>Kumba:</b> Diligent Bilingual School
                  <br />
                  <b>Buea: </b> Mountain University
                  <br />
                  <b>Limbe:</b> Espoire College
                </p>
              </li>

              <li>
                <i className="bx bxs-envelope"></i>
                <p>info@asendprep.com</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <p>
            Copyright <i className="bi bi-c-circle"></i>
            &nbsp;ASEND PREP 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
