import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// images
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  // states
  const [open, setOpen] = useState(false);
  const [topVisible, setTopVisible] = useState(false);

  // functions
  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleAll = () => {
    setOpen(false);
    top();
  };

  const top = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  //useEffect is used to attach the event listener when the component is mounted and detach it otherwise
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 100) {
        setTopVisible(true);
      } else {
        setTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return statement is used to remove the event listener before the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* NavBar */}
      <nav className={open ? 'clicked' : ''}>
        <div className="container">
          <Link
            to="/"
            aria-label="link to home page and also logo image"
            className="logo"
            onClick={toggleAll}
          >
            <img src={logo} alt="logo" />
            <h2>ASEND</h2>
          </Link>

          {/* desktop nav */}
          <ul className="desktop-nav">
            {/* Home */}
            <li className="first-link">
              <NavLink to="/" aria-label="link to asend home page">
                <p>Home</p>
              </NavLink>
            </li>
            {/* About */}
            <li className="first-link">
              <NavLink to="about" aria-label="link to asend about us page">
                <p>About</p>
              </NavLink>
            </li>
            {/* Services */}
            <li className="first-link">
              <NavLink to="services" aria-label="link to asend services page">
                <p>Services</p>
              </NavLink>
            </li>
            {/* Concours */}
            <li className="first-link">
              <NavLink to="concours" aria-label="link to asend concours page">
                <p>Concours</p>
              </NavLink>
            </li>
            {/* call to action */}
            <li>
              <Link
                to="support"
                className="btn"
                aria-label="lint to support us page"
              >
                Support Us
              </Link>
            </li>
          </ul>
          <button
            type="button"
            aria-label="menu button"
            className={`menu-button ${open ? 'clicked' : ''}`}
            onClick={toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <button
        type="button"
        aria-label="back to top button"
        onClick={top}
        className={`scrollTop ${topVisible ? 'active' : ''}`}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>

      {/* <!-- mobile nav --> */}
      <div className={`mobile-nav ${open ? 'active' : ''}`}>
        <ul className="links-container">
          <ul className="links">
            <li>
              <NavLink
                to="/"
                aria-label="link to asend home page"
                onClick={toggleAll}
              >
                <i className="bx bxs-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                aria-label="link to asend about page"
                onClick={toggleAll}
              >
                <i className="bx bxs-user"></i> <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                aria-label="link to asend services page"
                onClick={toggleAll}
              >
                <i className="bx bxs-cog"></i>
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="concours"
                aria-label="link to asend concours page"
                onClick={toggleAll}
              >
                <i className="bx bxs-book"></i>
                <span>Concours</span>
              </NavLink>
            </li>
          </ul>
          <li>
            <Link
              to="support"
              aria-label="link to support us page"
              onClick={toggleAll}
              className="btn"
            >
              Support Us
            </Link>
          </li>
          <li>
            <div className="social-links">
              <a
                href="/facebook.com"
                target="_blank"
                aria-label="link to asend facebook page"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a
                href="/youtube.com"
                target="_blank"
                aria-label="link to asend youtube page"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="/instagram.com"
                target="_blank"
                aria-label="link to asend instagram page"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="/whatsapp.me"
                target="_blank"
                aria-label="link to asend whatsapp page"
              >
                <i className="bx bxl-whatsapp-square"></i>
              </a>
            </div>
          </li>
          <li>
            <a
              href="#contact"
              className="btn"
              onClick={toggleAll}
              aria-label="link to contact form"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
