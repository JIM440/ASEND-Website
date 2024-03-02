import Linkedin from '../../../assets/icons/linkedin.png';
import Instagram from '../../../assets/icons/ig.jpg';
import usman from '../../../assets/img/team/usman.jpg';
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
              <img src={usman} alt="" />
            </div>
            <h3>Engr. Usmanu Chuka</h3>
            <p className="title">B.eng Telecommunications Engineering</p>
            <div className="position">
              <p className="position">DAAS | Engineering Tutor</p>
              <div className="profile-links">
                <a href="linkedin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5dc5d641498834108f7c46a5/564a726c-ec6a-470b-9769-1c5045358424/What%27s+Your+Why+Hero.jpg"
                alt=""
              />
            </div>
            <h3>Sir Harry Mukete</h3>
            <p className="title">6th Year Medical Student</p>
            <div className="position">
              <p className="position">
                Cordinator Medicine Buea | Medicine Tutor
              </p>
              <div className="profile-links">
                <a href="linkedin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="img">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-half-turn-brunet-hair-260nw-1216693528.jpg"
                alt=""
              />
            </div>
            <h3>Tracy D. Wright</h3>
            <p className="title">Doctor Of Veterinary Medicine</p>
            <div className="position">
              <p className="position">Vet/Agric Tutor</p>
              <div className="profile-links">
                <a href="linkedin.com">
                  <img src={Linkedin} alt="LinkenIn Icon" />
                </a>
                <a href="instagram.com">
                  <img src={Instagram} alt="ig icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mw container bg-blue">
          <p>
            Join us in making an impact today! Be a part of our team and help
            students achieve their dreams of getting into their desired
            professional school.
          </p>
          <Link to="" className="btn">
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
