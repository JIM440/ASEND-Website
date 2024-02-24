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
          <Link to="/" className="logo" onClick={toggleAll}>
            <img src={logo} alt="" />
            <h2>ASEND</h2>
          </Link>

          {/* desktop nav */}
          <ul className="desktop-nav">
            {/* Home */}
            <li className="first-link">
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            {/* About */}
            <li className="first-link">
              <Link to="about">
                <p>About</p>
              </Link>
            </li>
            {/* Services */}
            <li className="first-link">
              <Link to="services">
                <p>Services</p>
              </Link>
            </li>
            {/* Concours */}
            <li className="first-link">
              <Link to="concours">
                <p>Concours</p>
              </Link>
            </li>
            {/* call to action */}
            <Link to="support" className="btn">
              Support Us
            </Link>
          </ul>
          <button
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
        onClick={top}
        className={`scrollTop ${topVisible ? 'active' : ''}`}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>

      {/* <!-- mobile nav --> */}
      <div className={`mobile-nav ${open ? 'active' : ''}`}>
        <ul>
          <div className="links">
            <li>
              <NavLink to="/" onClick={toggleAll}>
                <i className="bx bxs-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="about" onClick={toggleAll}>
                <i className="bx bxs-user"></i> <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="services" onClick={toggleAll}>
                <i className="bx bxs-cog"></i>
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="concours" onClick={toggleAll}>
                <i className="bx bxs-book"></i>
                <span>Concours</span>
              </NavLink>
            </li>
          </div>
          <li>
            <Link to="" className="btn">
              Support Us
            </Link>
          </li>
          <li>
            <div className="social-links">
              <a href="/facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/youtube.com">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="/instagram.com">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/whatsapp.me">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </li>
          <li>
            <a href="#contact" className="btn" onClick={toggleAll}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
