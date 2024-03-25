import Linkedin from '../../../assets/icons/linkedin.png';
import Instagram from '../../../assets/icons/ig.jpg';
import usman from '../../../assets/img/team/usman.jpg';
import etien from '../../../assets/img/team/etien.jpg';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="header">Our Team</h2>
        <p className="header-description">Meet Our Expert Prep Class Staff</p>
        <div className="team-container">
          <div className="team-box">
            <div className="img">
              <img src={usman} alt="asend staff" />
            </div>
            <h3>Engr. Usmanu Chuka</h3>
            <p className="title">B.eng Telecommunications Engineering</p>
            <div className="position">
              <p className="position">DAAS | Engineering Tutor</p>
              <div className="profile-links">
                <a
                  href="https://www.linkedin.com/in/jr-chuka-usmanu-376329232/"
                  aria-label="link to staff linkedin page"
                >
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img src="" alt="asend staff" />
            </div>
            <h3>Sir Harry Mukete</h3>
            <p className="title">6th Year Medical Student</p>
            <div className="position">
              <p className="position">
                Cordinator Medicine Buea | Medicine Tutor
              </p>
              <div className="profile-links">
                <a href="linkedin.com" aria-label="link to staff linkedin page">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="team-box">
            <div className="img">
              <img
                src=""
                alt="asend staff"
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">Doctor Of Veterinary Medicine</p>
            <div className="position">
              <p className="position">Vet/Agric Tutor</p>
              <div className="profile-links">
                <a href="linkedin.com" aria-label="link to staff linkedin page">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a
                  href="instagram.com"
                  aria-label="link to staff instagram page"
                >
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mw container bg-blue">
          <p>
            Join us in making an impact today! Be a part of our team and help
            students achieve their dreams of getting into their desired
            professional school.
          </p>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdquWN9INvQR4guv6cdP-_tZbeHP3ZZsp33po3Uk0GlGaqhGw/viewform?usp=sf_link"
            target="_blank"
            aria-label="link to join our team google form"
            className="btn"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
